"use client"

import { useState, useEffect } from "react"
import type { Product } from "../types"

type CartItem = Product & { quantity: number }

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item,
                )
            }
            return [...prevCart, product]
        })
    }

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }

    return { cart, addToCart, removeFromCart, clearCart }
}

