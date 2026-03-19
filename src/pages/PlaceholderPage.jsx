import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/buttonVariants'

export default function PlaceholderPage({ page }) {
  return (
    <section className="container-shell py-14 sm:py-20 lg:py-24">
      <div className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <div>
            <span className="rounded-full border border-scarlet/30 bg-scarlet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-scarlet">
              {page.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {page.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/" className={buttonVariants({ variant: 'primary' })}>
                <ArrowLeft size={16} />
                Volver al inicio
              </Link>

              <Link
                to="/contacto"
                className={buttonVariants({ variant: 'secondary' })}
              >
                Solicitar implementación
              </Link>
            </div>
          </div>

          <div className="surface-card border-white/8 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
              Qué quedará aquí
            </p>

            <div className="mt-6 space-y-4">
              {page.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-scarlet" />
                  <p className="text-sm leading-7 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-dashed border-white/15 bg-black/30 p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-8 text-white/65 sm:text-base">
            Esta vista funciona como página simulada para la prueba técnica. La
            arquitectura ya quedó lista para conectar contenido real, formularios,
            checkout, CMS o integraciones futuras sin rehacer la base visual.
          </p>
        </div>
      </div>
    </section>
  )
}
