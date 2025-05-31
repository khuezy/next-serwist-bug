'use server'

// import { migrate } from "drizzle-orm/libsql/migrator"
import { db } from './db'

import { migrator } from './migrator'

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('======= Database Migration Starting...', process.env.DB_URL)
    await migrator(db).catch((err) => console.error(err))
    console.log('======= Database Migration Done!')
    // Sync turso Embedded Replica in a worker
    // Don't await, let it run in the background
  }
}
