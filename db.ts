import { type Config, createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './models/bugs'

const syncConfig: Config = {
  url: `file:///tmp/turso/local.db`,
  syncUrl: process.env.DB_URL!,
  authToken: process.env.DB_TOKEN,
  syncInterval: 60
}

const client = createClient(syncConfig)

export const db = drizzle({
  client,
  schema,
  casing: 'snake_case',
})
