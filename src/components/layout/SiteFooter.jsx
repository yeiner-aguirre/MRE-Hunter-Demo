import { Facebook, Instagram, Play } from 'lucide-react'
import { Link } from 'react-router'
import { footerLinks, socialLinks } from '@/data/site-content'
import { buttonVariants } from '../ui/buttonVariants'

const socialIconMap = {
  Instagram,
  Facebook,
  TikTok: Play,
}

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/70">
      <div className="container-shell py-8">
        <div className="surface-card overflow-hidden p-5 sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <img
                src="/images/brand/logo-white.png"
                alt="MRE Hunter"
                className="w-40"
              />
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                Tecnologia satelital pensada para cuidar vehiculos, dar seguimiento
                en tiempo real y transmitir confianza desde el primer vistazo.
              </p>
            </div>

            <Link
              to="/pagos/mensualidad"
              className={buttonVariants({ variant: 'primary' })}
            >
              Paga tu mensualidad aqui
            </Link>
          </div>

          <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 text-sm text-white/65 md:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.label]

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>

            <p className="text-sm text-white/55">
              Copyright {new Date().getFullYear()} MRE Hunter S.A.S.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
