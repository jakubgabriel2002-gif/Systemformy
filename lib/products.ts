export type ProductType = 'ebook' | 'freebie' | 'service';

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  type: ProductType;
  audience: string;
  includes: string[];
  digital: boolean;
  storagePath?: string;
};

export const products: Product[] = [
  {
    slug: 'zacznij-trenowac', name: 'Zacznij trenować', price: 0, type: 'freebie', digital: true,
    shortDescription: 'Materiał startowy dla osoby, która chce zacząć trenować bez chaosu.',
    description: 'Podstawy rozpoczęcia treningu, najważniejsze zasady, podstawowe ćwiczenia i wskazówki dotyczące pierwszych kroków.',
    audience: 'Osoby, które dopiero zaczynają.', includes: ['Podstawy treningu', 'Pierwsze ćwiczenia', 'Zasady rozpoczęcia pracy nad formą'],
    storagePath: 'ebooks/free/zacznij-trenowac.pdf'
  },
  {
    slug: 'zacznij-trenowac-w-domu', name: 'Zacznij trenować w domu', price: 29.99, type: 'ebook', digital: true,
    shortDescription: 'Uporządkowany start treningu domowego bez sprzętu.',
    description: 'Kompletny system startowy: technika, progresja, test punktu startowego, dobór poziomu i budowanie tygodnia.',
    audience: 'Kompletni początkujący trenujący w domu.', includes: ['Technika ćwiczeń', 'Progresja', 'Test punktu startowego', 'Planowanie tygodnia', 'Kontrola postępów'], storagePath: 'ebooks/paid/zacznij-trenowac-w-domu.pdf'
  },
  {
    slug: 'zacznij-trenowac-na-silowni', name: 'Zacznij trenować na siłowni', price: 29.99, type: 'ebook', digital: true,
    shortDescription: 'Koniec z chaosem podczas pierwszych treningów na siłowni.',
    description: 'Przygotowanie do pierwszej wizyty, progresja, podstawowe ćwiczenia, test punktu startowego i układanie tygodnia.',
    audience: 'Początkujący na siłowni.', includes: ['Pierwsza wizyta', '5 podstawowych ćwiczeń', 'Test punktu startowego', 'Ciężar roboczy', 'Ocena postępów'], storagePath: 'ebooks/paid/zacznij-trenowac-na-silowni.pdf'
  },
  {
    slug: 'protokol-masy', name: 'Protokół Masy', price: 59.99, type: 'ebook', digital: true,
    shortDescription: '90 dni uporządkowanej pracy nad siłą i masą mięśniową.',
    description: 'Trzy fazy: Adaptacja, Budowa i Intensyfikacja. Trening, progresja, żywienie, regeneracja i diagnozowanie stagnacji.',
    audience: 'Osoby z podstawami treningu na siłowni.', includes: ['3 fazy / 90 dni', 'Gotowe schematy treningowe', 'Progresja i deload', 'Żywienie i meal prep', 'Regeneracja', 'Dziennik i checklisty'], storagePath: 'ebooks/paid/protokol-masy.pdf'
  },
  {
    slug: 'protokol-masy-dom', name: 'Protokół Masy: Dom', price: 59.99, type: 'ebook', digital: true,
    shortDescription: '90 dni budowania siły i masy w warunkach domowych.',
    description: 'Struktura 90 dni, progresywne zwiększanie trudności, improwizowane obciążenie, żywienie i regeneracja.',
    audience: 'Osoby trenujące w domu.', includes: ['3 fazy / 90 dni', 'Trening bez klasycznego sprzętu', 'Progresja trudności', 'Żywienie', 'Dziennik i checklisty'], storagePath: 'ebooks/paid/protokol-masy-dom.pdf'
  },
  {
    slug: 'protokol-redukcji', name: 'Protokół Redukcji', price: 59.99, type: 'ebook', digital: true,
    shortDescription: '90 dni redukcji z naciskiem na utrzymanie masy mięśniowej i siły.',
    description: 'Deficyt Startowy, Redukcja Właściwa i Domykanie Formy oraz trening, cardio, głód, regeneracja i plateau.',
    audience: 'Osoby z podstawami treningu na siłowni.', includes: ['3 fazy / 90 dni', 'Trening i cardio', 'Deficyt i białko', 'Strategie na głód', 'Analiza stagnacji', 'Dziennik i kalendarz'], storagePath: 'ebooks/paid/protokol-redukcji.pdf'
  },
  {
    slug: 'protokol-redukcji-dom', name: 'Protokół Redukcji: Dom', price: 59.99, type: 'ebook', digital: true,
    shortDescription: '90 dni redukcji w warunkach domowych.',
    description: 'Trzy fazy redukcji, gotowe treningi bez sprzętu, zasady deficytu, cardio, głód, regeneracja i analiza stagnacji.',
    audience: 'Osoby trenujące w domu.', includes: ['3 fazy / 90 dni', 'Trening bez sprzętu', 'Deficyt i ochrona masy', 'Cardio', 'Regeneracja', 'Dziennik'], storagePath: 'ebooks/paid/protokol-redukcji-dom.pdf'
  },
  {
    slug: 'protokol-zywieniowy', name: 'Protokół Żywieniowy', price: 29.99, type: 'ebook', digital: true,
    shortDescription: 'Elastyczne podejście do kalorii i makroskładników bez sztywnego jadłospisu.',
    description: 'Model IIFYM, dobieranie kalorii i makro, elastyczne posiłki, gotowe propozycje i zamienniki.',
    audience: 'Osoby chcące uporządkować odżywianie.', includes: ['IIFYM', 'Kalorie i makro', 'Baza posiłków', 'Zamienniki produktów', 'Praktyczne zasady'], storagePath: 'ebooks/paid/protokol-zywieniowy.pdf'
  },
  {
    slug: 'protokol-suplementacja', name: 'Protokół Suplementacja', price: 29.99, type: 'ebook', digital: true,
    shortDescription: 'Uporządkowany temat suplementacji: co ma sens, jak stosować i czego nie potrzebujesz.',
    description: 'Praktyczne zastosowanie suplementów, dawkowanie, kolejność wdrażania i rzeczy, na które warto uważać.',
    audience: 'Osoby trenujące, które chcą uporządkować suplementację.', includes: ['Praktyczne suplementy', 'Dawkowanie', 'Kolejność wdrażania', 'Na co uważać'], storagePath: 'ebooks/paid/protokol-suplementacja.pdf'
  },
  {
    slug: 'protokol-regeneracja', name: 'Protokół Regeneracja', price: 29.99, type: 'ebook', digital: true,
    shortDescription: 'Sen, stres, odpoczynek i zarządzanie zmęczeniem.',
    description: 'System pracy ze snem, stresem i regeneracją między sesjami oraz praktyczne zasady odpoczynku i nawodnienia.',
    audience: 'Osoby trenujące, które chcą lepiej się regenerować.', includes: ['Sen', 'Stres', 'Odpoczynek', 'Aktywna regeneracja', 'Nawodnienie'], storagePath: 'ebooks/paid/protokol-regeneracja.pdf'
  },
  {
    slug: 'indywidualny-plan-treningowy', name: 'Indywidualny plan treningowy', price: 90, type: 'service', digital: true,
    shortDescription: 'Plan dopasowany do Twojego poziomu, celu, czasu i możliwości.',
    description: 'Indywidualna, uporządkowana ścieżka treningowa z jasną progresją. Plan może być przekazany jako PDF + XLSX.',
    audience: 'Osoby, które chcą gotowego planu zamiast układać go samodzielnie.', includes: ['Dopasowanie do celu', 'Dopasowanie do sprzętu', 'Progresja', 'PDF + XLSX'],
  },
  {
    slug: 'prowadzenie-1-1', name: 'Prowadzenie System Formy 1:1', price: 250, type: 'service', digital: false,
    shortDescription: 'Indywidualne prowadzenie treningu, żywienia i kontroli progresu.',
    description: 'Plan treningowy, wskazówki dotyczące żywienia i regeneracji, regularne raportowanie, aktualizacje i bezpośrednie wsparcie online.',
    audience: 'Osoby, które nie chcą samodzielnie składać całego procesu.', includes: ['Plan treningowy', 'Wskazówki żywieniowe', 'Regeneracja i suplementacja', 'Raporty', 'Aktualizacje', 'Wsparcie online'],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return price === 0 ? 'Darmowy' : `${price.toFixed(2).replace('.', ',')} zł`;
}
