'use client';

import { InternalHeader } from '@navikt/ds-react/InternalHeader';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { RouteName } from '@/components/header/route-name';

const ACTIVE_CLASS = 'bg-ax-bg-accent-strong-pressed! text-ax-text-accent-contrast!';

export const Nav = () => (
  <>
    <NavLink path={RouteName.STATISTIKK}>Statistikk</NavLink>
  </>
);

interface Props {
  path: RouteName;
  children: React.ReactNode;
}

const NavLink = ({ path, children }: Props) => {
  const pathname = usePathname();
  const params = useSearchParams().toString();

  return (
    <InternalHeader.Button
      as={Link}
      className={pathname === path ? ACTIVE_CLASS : ''}
      href={`${path}${params ? `?${params}` : ''}`}
    >
      {children}
    </InternalHeader.Button>
  );
};
