import Fastify from 'fastify';
import { bumpComfortChecks, openDb } from './db';

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

async function main(): Promise<void> {
  const db = openDb();
  const app = Fastify({ logger: true });

  app.get('/health', async () => ({ ok: true }));

  app.get('/clinic/status', async () => {
    const comfortChecks = bumpComfortChecks(db);
    return {
      clinic: 'AgentClinic',
      mood: 'playfully operational',
      comfort_checks: comfortChecks,
      message: 'The waiting room is open. Humans may take a number.',
    };
  });

  await app.listen({ port, host });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
