import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { MapModal } from "@/components/map-modal"

// Datos de actividades destacadas
const featuredActivities = [
  {
    title: "Básquet",
    description:
      "Formación y competición en básquet para todas las edades. Contamos con tres tiras masculinas y una tira femenina.",
    imageSrc: "/images/activities/basquet.png",
    link: "/actividades/basquet",
  },
  {
    title: "Patín Artístico",
    description:
      "Disciplina que combina elementos técnicos y artísticos sobre patines. Formación desde nivel inicial hasta competitivo.",
    imageSrc: "/images/activities/patin.png",
    link: "/actividades/patin",
  },
  {
    title: "Gimnasio Fitness",
    description:
      "Espacio equipado con máquinas de musculación y cardio. Entrenamiento personalizado y seguimiento por profesionales.",
    imageSrc: "/images/activities/fitness.png",
    link: "/actividades/fitness",
  },
]

export default function ClubLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-club-blue text-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo Club Pedro Echague" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold font-raleway">Club Pedro Echague</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#quienes-somos" className="text-sm font-medium transition-colors hover:text-club-yellow">
              ¿Quiénes somos?
            </Link>
            <Link href="/autoridades" className="text-sm font-medium transition-colors hover:text-club-yellow">
              Autoridades
            </Link>
            <Link href="#history" className="text-sm font-medium transition-colors hover:text-club-yellow">
              Historia
            </Link>
            <Link href="#infrastructure" className="text-sm font-medium transition-colors hover:text-club-yellow">
              Infraestructura
            </Link>
            <Link href="#activities" className="text-sm font-medium transition-colors hover:text-club-yellow">
              Actividades
            </Link>
            <Button className="bg-club-yellow text-club-dark hover:bg-club-yellow/90">Asociate</Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-club-blue/80">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative h-[60vh] w-full">
            <Image src="/portada.jpg" alt="Club Pedro Echague" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-club-blue/80 to-transparent flex items-center">
              <div className="container px-4 md:px-6">
                <div className="max-w-xl space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-raleway text-white">
                    Club Pedro Echague
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl font-roboto">
                    El club de Flores desde el 17 de Octubre de 1934
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Button size="lg" className="bg-club-yellow text-club-dark hover:bg-club-yellow/90 font-roboto">
                      Asociate Ahora
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-white border-white hover:bg-white/10 font-roboto"
                    >
                      Conocer Más
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quienes Somos Section */}
        <section id="quienes-somos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-club-blue font-raleway">
                  ¿Quiénes somos?
                </h2>
              </div>
            </div>

            <div className="grid gap-12 mt-12 md:grid-cols-2">
              <div className="bg-club-blue text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 font-raleway">Misión</h3>
                <p className="text-lg font-roboto leading-relaxed">
                  Nuestra misión es acompañar a los miembros de nuestra comunidad del club en su formación deportiva y
                  cultural, fomentando valores importantes con un compromiso social. De esta manera, podemos contribuir
                  al desarrollo de nuestra sociedad juntos.
                </p>
              </div>

              <div className="bg-club-yellow text-club-dark p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 font-raleway">Visión</h3>
                <p className="text-lg font-roboto leading-relaxed">
                  Ser un club referente en la zona de excelencia en la formación deportiva y cultural que estimula
                  hábitos saludables y la Inclusión social.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="w-full py-12 md:py-24 lg:py-32 bg-club-gray">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-club-blue font-raleway">
                  HISTORIA
                </h2>
              </div>
            </div>
            <Timeline />
          </div>
        </section>

        {/* Infrastructure Section */}
        <section id="infrastructure" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-club-blue font-raleway">
                  Infraestructura
                </h2>
                <p className="max-w-[900px] text-club-dark/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-roboto">
                  Instalaciones modernas diseñadas para mejorar tu experiencia en el club.
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <YouTubeEmbed videoId="2ciND7KcYZk" title="Club Pedro Echague - 2024 Instalaciones" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-md">
                <div className="p-3 rounded-full bg-club-blue/10">
                  <MapPin className="h-6 w-6 text-club-blue" />
                </div>
                <h3 className="text-xl font-bold text-club-blue font-raleway">Gimnasios</h3>
                <p className="text-center text-club-dark/80 font-roboto">
                  Tres gimnasios equipados para diferentes actividades deportivas y eventos.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Gimnasios"
                  className="mt-4 rounded-lg object-cover w-full"
                />
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-md">
                <div className="p-3 rounded-full bg-club-blue/10">
                  <MapPin className="h-6 w-6 text-club-blue" />
                </div>
                <h3 className="text-xl font-bold text-club-blue font-raleway">Restaurante y Salón</h3>
                <p className="text-center text-club-dark/80 font-roboto">
                  Espacios gastronómicos y de eventos para disfrutar con amigos y familia.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Restaurante y Salón"
                  className="mt-4 rounded-lg object-cover w-full"
                />
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-md">
                <div className="p-3 rounded-full bg-club-blue/10">
                  <MapPin className="h-6 w-6 text-club-blue" />
                </div>
                <h3 className="text-xl font-bold text-club-blue font-raleway">Fitness y Subsuelo</h3>
                <p className="text-center text-club-dark/80 font-roboto">
                  Áreas especializadas para entrenamiento físico y actividades complementarias.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Fitness y Subsuelo"
                  className="mt-4 rounded-lg object-cover w-full"
                />
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <MapModal
                trigger={
                  <Button className="bg-club-blue hover:bg-club-blue/90 font-roboto">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver Mapa de Ubicación
                  </Button>
                }
              />

              <Link href="/infraestructura">
                <Button variant="outline" className="border-club-blue text-club-blue hover:bg-club-blue/10 font-roboto">
                  Ver Detalles de Instalaciones
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="w-full py-12 md:py-24 lg:py-32 bg-club-gray">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-club-blue font-raleway">
                  Actividades
                </h2>
                <p className="max-w-[900px] text-club-dark/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-roboto">
                  Eventos y actividades para socios de todas las edades e intereses.
                </p>
              </div>
            </div>

            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredActivities.map((activity, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-white shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={activity.imageSrc || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={activity.title}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Calendar className="h-4 w-4 text-club-blue mb-2" />
                    <h3 className="text-xl font-bold text-club-blue font-raleway">{activity.title}</h3>
                    <p className="text-club-dark/80 font-roboto">{activity.description}</p>
                    <Button
                      variant="link"
                      asChild
                      className="p-0 mt-4 text-club-blue hover:text-club-blue/80 font-roboto"
                    >
                      <Link href={activity.link}>Ver más información</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-club-blue hover:bg-club-blue/90 font-roboto">
                <Link href="/actividades">Ver Todas las Actividades</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-club-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-raleway">
                  Sumate a Nuestra Comunidad
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl font-roboto">
                  Formá parte de nuestra familia y disfrutá de beneficios y experiencias exclusivas.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-club-yellow text-club-dark hover:bg-club-yellow/90 font-roboto">
                  Solicitar Membresía
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 font-roboto"
                >
                  Contactanos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0 bg-club-dark text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-white/70 md:text-left font-roboto">
            © {new Date().getFullYear()} Club Pedro Echague. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-white/70 hover:text-white font-roboto">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-white/70 hover:text-white font-roboto">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-sm text-white/70 hover:text-white font-roboto">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

