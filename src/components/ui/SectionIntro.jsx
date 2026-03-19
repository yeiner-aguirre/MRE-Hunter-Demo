import { cn } from '@/lib/cn'

const alignments = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  return (
    <div className={cn('flex max-w-3xl flex-col gap-4', alignments[align])}>
      {eyebrow ? (
        <span className="rounded-full border border-scarlet/30 bg-scarlet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-scarlet">
          {eyebrow}
        </span>
      ) : null}

      <div className="space-y-3">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}
