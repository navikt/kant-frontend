import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Aktive saker i KA - Kaptein',
};

export default async function Page() {
  return <p>Her burde det komme noe statistikk!</p>;
}
