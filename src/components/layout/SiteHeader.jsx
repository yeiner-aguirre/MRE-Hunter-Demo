import { ChevronDown, Menu } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navigationGroups, secondaryActions } from '@/data/navigation'
import { cn } from '@/lib/cn'
import { buttonVariants } from '../ui/buttonVariants'
import MobileMenu from './MobileMenu'

function DesktopLink({ item }) {
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        cn(
          'rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition',
          isActive ? 'text-white' : 'text-white/72 hover:text-white',
        )
      }
    >
      {item.label}
    </NavLink>
  )
}

function DesktopDropdown({ item, isActive }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition',
          isActive ? 'text-white' : 'text-white/72 group-hover:text-white',
        )}
      >
        {item.label}
        <ChevronDown size={16} className="transition group-hover:rotate-180" />
      </button>

      <div className="pointer-events-none invisible absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="w-72 rounded-[1.75rem] border border-white/10 bg-black/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {item.items.map((subItem) => (
            <NavLink
              key={subItem.to}
              to={subItem.to}
              className={({ isActive: isSubActive }) =>
                cn(
                  'flex items-center justify-between rounded-[1.25rem] px-4 py-3 text-sm transition',
                  isSubActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/68 hover:bg-white/5 hover:text-white',
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
}

export default function SiteHeader() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container-shell flex h-[4.75rem] items-center justify-between gap-6">
          <Link to="/" className="w-36 shrink-0 sm:w-44">
            <img src="/images/brand/logo-white.png" alt="MRE Hunter" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationGroups.map((item) =>
              item.items ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  isActive={item.items.some((subItem) => pathname === subItem.to)}
                />
              ) : (
                <DesktopLink key={item.label} item={item} />
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {secondaryActions.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className={buttonVariants({ variant: action.variant })}
              >
                {action.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <MobileMenu
        items={navigationGroups}
        open={isMenuOpen}
        onClose={handleCloseMenu}
      />
    </>
  )
}
