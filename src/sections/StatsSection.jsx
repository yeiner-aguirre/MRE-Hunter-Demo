import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/buttonVariants'
import SectionIntro from '@/components/ui/SectionIntro'
import StatCard from '@/components/ui/StatCard'
import { stats } from '@/data/site-content'

export default function StatsSection() {
  return (
    <section id="estadisticas" className="relative py-10 sm:py-14 lg:py-16">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end">
          <SectionIntro
            eyebrow="Resultados de la marca"
            title="Resultados que respaldan la experiencia de MRE Hunter."
            description="Estas cifras ayudan a mostrar trayectoria, confianza y el alcance que la marca ha logrado con sus soluciones."
          />

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              to="/pagos/mensualidad"
              className={buttonVariants({ variant: 'primary' })}
            >
              Ver pagos
            </Link>
            <Link
              to="/contacto"
              className={buttonVariants({ variant: 'secondary' })}
            >
              Ir a contacto
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
