import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { paymentHighlights } from '@/data/site-content'

export default function PaymentSection() {
  return (
    <section className="relative pb-16 pt-10 sm:pb-[4.5rem] sm:pt-14 lg:pb-20 lg:pt-16">
      <div className="container-shell">
        <div className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div>
              <span className="rounded-full border border-scarlet/30 bg-scarlet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-scarlet">
                Seccion lista
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Pago, compra y contacto quedan listos para crecer mas adelante.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Por ahora, cada boton lleva a una pagina bien presentada que deja
                claro lo que ira en ese espacio cuando se agregue el contenido final.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/pagos/comprar-gps"
                  className={buttonVariants({ variant: 'primary', size: 'lg' })}
                >
                  Comprar GPS
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/pagos/mensualidad"
                  className={buttonVariants({ variant: 'secondary', size: 'lg' })}
                >
                  Pagar mensualidad
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
                Lo que ya queda listo
              </p>

              <div className="mt-5 space-y-3">
                {paymentHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 text-scarlet" />
                    <p className="text-sm leading-7 text-white/68">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
