'use server'
import { db } from "../db"
import { bug } from "../models/bugs"
import { sql } from 'drizzle-orm'

export async function update() {
  'use server'
  const r = await db.insert(bug).values({ id: 1, value: 1 }).onConflictDoUpdate({
    target: [bug.id],
    set: { value: sql`value + 1` }
  }).returning().get()
  return r?.value || 0
}
