import { BodyShort, Box, Heading, VStack } from '@navikt/ds-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import logo from './logo.png';

export const metadata: Metadata = {
  title: 'Kant',
};

export default function KantPage() {
  return (
    <Box padding="space-16" width="100%" height="100vh">
      <VStack align="center" justify="center" padding="space-32" gap="space-32" height="100%">
        <Heading level="1" size="xlarge" className="mb-4">
          Nå er du på Kant
        </Heading>
        <Image src={logo} alt="Kant-logo" width={200} height={200} />
        <BodyShort className="border-ax-neutral-500 border-l-4 p-3 italic" size="large">
          En kant er i geometri et linjestykke mellom to hjørner i en geometrisk figur.
        </BodyShort>
      </VStack>
    </Box>
  );
}
