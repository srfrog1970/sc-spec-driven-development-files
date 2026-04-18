import fs from 'fs';
import path from 'path';
import Database from 'better-sqlite3';

const META_KEY = 'comfort_checks';

function dataDir(): string {
  return path.join(__dirname, '..', 'data');
}

function dbPath(): string {
  return path.join(dataDir(), 'agentclinic.db');
}

export function openDb(): Database.Database {
  const dir = dataDir();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(dbPath());
  db.pragma('journal_mode = WAL');

  db.exec(`
    CREATE TABLE IF NOT EXISTS clinic_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  const row = db.prepare('SELECT value FROM clinic_meta WHERE key = ?').get(META_KEY) as
    | { value: string }
    | undefined;
  if (!row) {
    db.prepare('INSERT INTO clinic_meta (key, value) VALUES (?, ?)').run(META_KEY, '0');
  }

  return db;
}

export function bumpComfortChecks(db: Database.Database): number {
  db.prepare(
    `
    UPDATE clinic_meta
    SET value = CAST(CAST(value AS INTEGER) + 1 AS TEXT)
    WHERE key = ?
  `,
  ).run(META_KEY);

  const row = db.prepare('SELECT value FROM clinic_meta WHERE key = ?').get(META_KEY) as { value: string };
  return Number.parseInt(row.value, 10);
}
