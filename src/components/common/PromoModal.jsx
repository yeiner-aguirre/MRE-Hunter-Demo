import { X } from 'lucide-react'

export default function PromoModal({ open, onClose }) {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 p-4 backdrop-blur-sm">
      <div className="animate-promo-enter relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_32px_120px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-b from-black/90 via-black/55 to-transparent p-3 sm:p-5">
          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur">
            Promo destacada
          </span>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-[0_12px_30px_rgba(255,255,255,0.2)] transition hover:scale-[1.02] hover:bg-white/90"
            aria-label="Cerrar promocion"
          >
            Cerrar
            <X size={16} />
          </button>
        </div>

        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/promo/pet-mobile.jpg"
          />
          <img
            src="/images/promo/pet-desktop.jpg"
            alt="Promocion GPS Pet de MRE Hunter"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
    </div>
  )
}
