export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('pino');
    // Patches `console` to log single line JSON, using `next-logger.config.cjs`.
    // In production `next-logger` is preloaded with `--require` (see `Dockerfile`), which also patches Next's internal logger. Then this is a no-op.
    await import('next-logger');
    await import('./instrumentation.node');
  }
}
