import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@navikt/ds-react', '@navikt/aksel-icons'],
    authInterrupts: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.nav.no/klage/kant-frontend' : undefined,
  output: 'standalone',
  // `next-logger` is preloaded with `--require` (see `Dockerfile`), so it must be copied to the standalone output.
  // `next-logger.config.js` is loaded at runtime and requires `@navikt/next-logger`. If bundled, it is not copied to the standalone output.
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream', 'next-logger', '@navikt/next-logger'],
  // `next-logger` loads `next-logger.config.js` at runtime, so it must be included in the standalone output.
  outputFileTracingIncludes: {
    '/*': ['./node_modules/forwarded-parse/**/*', './next-logger.config.js'],
  },
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  // https://github.com/vercel/next.js/issues/86099#issuecomment-3542407508
};

export default nextConfig;
