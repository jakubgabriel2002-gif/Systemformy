import Link from 'next/link';
import { formatPrice, type Product } from '@/lib/products';
export function ProductCard({ product }: { product: Product }) { return <article className="product-card"><div className="product-type">{product.type === 'freebie' ? 'DARMOWY MATERIAŁ' : product.type === 'service' ? 'USŁUGA' : 'E-BOOK'}</div><h3>{product.name}</h3><p>{product.shortDescription}</p><div className="product-footer"><strong>{formatPrice(product.price)}</strong><Link href={`/produkty/${product.slug}`} className="button button-outline">Sprawdź</Link></div></article>; }
