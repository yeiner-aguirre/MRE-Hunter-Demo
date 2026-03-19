import { CarFront, MapPinned, ShieldCheck } from 'lucide-react'

const iconMap = {
  recovered: CarFront,
  security: ShieldCheck,
  installed: MapPinned,
}

export default function StatCard({ stat }) {
  const Icon = iconMap[stat.icon]

  return (
    <article className="surface-card flex h-full flex-col items-start gap-4 p-5 sm:p-6">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-scarlet/14 text-scarlet">
        <Icon size={28} />
      </span>

      <div>
        <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
          {stat.value}
        </p>
        <p className="mt-2 text-lg font-semibold text-white">{stat.label}</p>
        <p className="mt-2 text-sm leading-7 text-white/65">{stat.description}</p>
      </div>
    </article>
  )
}
