import { Map, ShieldCheck, Sparkles } from 'lucide-react'
import SectionIntro from '@/components/ui/SectionIntro'
import { assurancePillars, productBenefits } from '@/data/site-content'

const icons = [Map, ShieldCheck, Sparkles]

export default function OverviewSection() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16">
      <div className="container-shell grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="surface-card p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-scarlet">
            Esencia de la marca
          </p>
          <img
            src="/images/brand/logo-white.png"
            alt="MRE Hunter"
            className="mt-6 w-52"
          />
          <p className="mt-5 text-lg leading-8 text-white/72">
            MRE Hunter ofrece soluciones GPS pensadas para dar tranquilidad,
            control y seguridad, ahora con una presentacion mucho mas limpia y
            agradable.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {productBenefits.map((benefit) => (
              <span
                key={benefit}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div>
          <SectionIntro
            eyebrow="Control y tranquilidad"
            title="Una solucion pensada para cuidar vehiculos con mas claridad."
            description="MRE Hunter combina ubicacion, seguimiento y alertas para ofrecer una experiencia enfocada en seguridad, reaccion y confianza."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {assurancePillars.map((pillar, index) => {
              const Icon = icons[index]

              return (
                <article
                  key={pillar.title}
                  className="surface-card h-full p-5 sm:p-6"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-scarlet/14 text-scarlet">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    {pillar.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
