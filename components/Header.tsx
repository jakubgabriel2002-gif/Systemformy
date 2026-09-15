import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">SYSTEM <span>FORMY</span></Link>
        <nav className="desktop-nav" aria-label="Główna nawigacja">
          <Link href="/oferta">Oferta</Link>
          <Link href="/ebooki">E-booki</Link>
          <Link href="/oferta#plan">Plan 1:1</Link>
          <Link href="/oferta#prowadzenie">Prowadzenie</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/logowanie" className="text-link">Zaloguj</Link>
          <Link href="/rejestracja" className="button button-small">Załóż konto</Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Otwórz menu">Menu</summary>
          <nav aria-label="Menu mobilne">
            <Link href="/oferta">Oferta</Link>
            <Link href="/ebooki">E-booki</Link>
            <Link href="/oferta#plan">Plan 1:1</Link>
            <Link href="/oferta#prowadzenie">Prowadzenie</Link>
            <Link href="/logowanie">Zaloguj</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
