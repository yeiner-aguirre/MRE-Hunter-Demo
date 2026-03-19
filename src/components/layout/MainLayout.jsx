import { Outlet } from 'react-router'
import ScrollToTop from '@/components/common/ScrollToTop'
import FloatingSupport from '@/components/ui/FloatingSupport'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-clip bg-obsidian text-white">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 grid-glow opacity-50" />
          <div className="absolute left-[-12%] top-[8%] h-72 w-72 rounded-full bg-scarlet/12 blur-3xl" />
          <div className="absolute right-[-8%] top-[22%] h-80 w-80 rounded-full bg-crimson/18 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[18%] h-96 w-96 rounded-full bg-burgundy/35 blur-3xl" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>

        <FloatingSupport />
      </div>
    </>
  )
}
