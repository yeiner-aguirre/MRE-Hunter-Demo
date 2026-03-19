import { MessageCircle, Send } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/lib/cn'

const actions = [
  {
    label: 'WhatsApp',
    to: '/contacto',
    icon: MessageCircle,
    tone: 'bg-[#1fb15a]',
  },
  {
    label: '¿Cómo puedo ayudarte?',
    to: '/contacto',
    icon: Send,
    tone: 'bg-[#2ca5e0]',
  },
]

export default function FloatingSupport() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {actions.map((action) => {
        const Icon = action.icon

        return (
          <Link
            key={action.label}
            to={action.to}
            className={cn(
              'inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition hover:scale-[1.02]',
              action.tone,
            )}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <Icon size={18} />
            </span>
            <span className="hidden sm:block">{action.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
