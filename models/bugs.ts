import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core'

export const CODE_LENGTH = 8

export const bug = sqliteTable('bug', {
  id: int().primaryKey({ autoIncrement: true }),
  value: int(),
})

export type Bug = typeof bug.$inferSelect
export type NewBug = typeof bug.$inferInsert
