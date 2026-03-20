import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { secondaryActions } from '@/data/navigation'
import { cn } from '@/lib/cn'
import { buttonVariants } from '../ui/buttonVariants'

export default function MobileMenu({ items, open, onClose }) {
  const [expanded, setExpanded] = useState(null)

  const handleClose = () => {
    setExpanded(null)
    onClose()
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition duration-300 lg:hidden',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      <div className="absolute inset-x-4 top-4 rounded-[2rem] border border-white/10 bg-black/95 p-5 shadow-[0_32px_120px_rgba(0,0,0,0.55)]">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="max-w-[9.5rem]" onClick={handleClose}>
            <img src="/images/brand/logo-white.png" alt="MRE Hunter" />
          </Link>

          <button
            type="button"
            onClick={handleClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            aria-label="Cerrar menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-3">
          {items.map((item) => {
            if (!item.items) {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    cn(
                      'rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition',
                      isActive
                        ? 'border-scarlet/50 bg-scarlet/10 text-white'
                        : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            }

            const isExpanded = expanded === item.label

            return (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.08em]"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={cn(
                      'transition duration-300',
                      isExpanded ? 'rotate-180' : '',
                    )}
                  />
                </button>

                <div
                  className={cn(
                    'grid overflow-hidden px-4 transition-all duration-300',
                    isExpanded ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="min-h-0 space-y-2 overflow-hidden">
                    {item.items.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        onClick={handleClose}
                        className={({ isActive }) =>
                          cn(
                            'block rounded-xl px-3 py-2 text-sm transition',
                            isActive
                              ? 'bg-white/10 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white',
                          )
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {secondaryActions.map((action) => (
            <Link
              key={action.to}
              to={action.to}
              onClick={handleClose}
              className={buttonVariants({
                variant: action.variant,
                className: 'w-full',
              })}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
