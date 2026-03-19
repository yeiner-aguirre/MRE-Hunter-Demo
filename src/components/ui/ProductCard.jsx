import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { buttonVariants } from './buttonVariants'

export default function ProductCard({ product }) {
  return (
    <article className="surface-card group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur">
          {product.badge}
        </span>
      </div>

      <div className="flex flex-col gap-5 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-[2.1rem]">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/72">
            {product.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/72"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={product.path}
          className={buttonVariants({
            variant: 'primary',
            className: 'w-full sm:w-fit',
          })}
        >
          Ver detalle simulado
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}
