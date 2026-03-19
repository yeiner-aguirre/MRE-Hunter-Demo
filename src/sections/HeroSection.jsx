import {
  ArrowRight,
  BellRing,
  LocateFixed,
  Map,
} from 'lucide-react'
import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { heroHighlights } from '@/data/site-content'

const featureIcons = [LocateFixed, Map, BellRing]

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-10 pt-10 sm:pb-14 sm:pt-14 lg:pb-[4.5rem] lg:pt-16"
    >
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10">
        <div className="max-w-2xl">
          <span className="rounded-full border border-scarlet/30 bg-scarlet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-scarlet">
            GPS para vehiculos y seguridad en tiempo real
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Brindamos una forma <span className="text-gradient">segura</span> y confiable de monitorear, ubicar y proteger vehiculos.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            Su portafolio integra rastreo, alertas y control para ofrecer más tranquilidad a quienes requieren proteger sus activos cada día.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              Explorar productos
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contacto"
              className={buttonVariants({ variant: 'secondary', size: 'lg' })}
            >
              Solicitar demo
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item, index) => {
              const Icon = featureIcons[index]

              return (
                <div
                  key={item.value}
                  className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-scarlet/14 text-scarlet">
                    <Icon size={20} />
                  </span>
                  <p className="mt-4 font-display text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/62">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-x-12 top-12 h-56 rounded-full bg-scarlet/20 blur-3xl" />
          <div className="surface-card relative overflow-hidden px-4 py-6 sm:px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
            <img
              src="/images/brand/app-showcase.png"
              alt="Aplicacion movil MRE Hunter"
              className="animate-float relative z-10 mx-auto w-full max-w-md"
            />

            <div className="absolute left-4 top-4 rounded-[1.5rem] border border-white/10 bg-black/60 px-4 py-3 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                App principal
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Ubicacion en tiempo real
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
