import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';
export default function Oferta(){return <main className="page"><div className="container"><div className="page-title"><div className="eyebrow">OFERTA SYSTEMU FORMY</div><h1>Jedna ścieżka. Różne poziomy wsparcia.</h1><p>Darmowy materiał, e-booki, protokoły, indywidualny plan i prowadzenie 1:1. Wybierz poziom, którego potrzebujesz teraz.</p></div><section><div className="product-grid">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div></section></div></main>}
