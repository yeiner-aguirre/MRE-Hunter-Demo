import { cn } from '@/lib/cn'

const variants = {
  primary:
    'bg-[linear-gradient(135deg,#ff4b4b_0%,#b31217_100%)] text-white shadow-[0_16px_40px_rgba(179,18,23,0.35)] hover:brightness-110',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10',
  ghost: 'text-white/80 hover:text-white',
}

const sizes = {
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-7 text-[0.95rem]',
}

export function buttonVariants({
  variant = 'primary',
  size = 'md',
  className,
} = {}) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.08em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
    variants[variant],
    sizes[size],
    className,
  )
}
