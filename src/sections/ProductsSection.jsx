import SectionIntro from '@/components/ui/SectionIntro'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/site-content'

export default function ProductsSection() {
  return (
    <section id="productos" className="relative py-10 sm:py-14 lg:py-16">
      <div className="container-shell">
        <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(179,18,23,0.18),rgba(255,255,255,0.03))] p-6 sm:p-8 lg:p-9">
          <SectionIntro
            eyebrow="Nuestros productos"
            title="Soluciones pensadas para diferentes necesidades de seguridad."
            description="Desde el GPS vehicular hasta las opciones portatiles y con camara, cada producto responde a una necesidad concreta de monitoreo y control."
          />

          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.path} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
