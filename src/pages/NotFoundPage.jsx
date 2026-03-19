import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/buttonVariants'

export default function NotFoundPage() {
  return (
    <section className="container-shell py-20 sm:py-28">
      <div className="surface-card overflow-hidden px-6 py-14 text-center sm:px-10 sm:py-20">
        <span className="rounded-full border border-scarlet/30 bg-scarlet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-scarlet">
          404
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Esta ruta todavía no existe.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
          La estructura está preparada para seguir creciendo, pero esta pantalla
          aún no fue definida dentro de la demo.
        </p>

        <Link
          to="/"
          className={buttonVariants({
            variant: 'primary',
            className: 'mt-8',
          })}
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
