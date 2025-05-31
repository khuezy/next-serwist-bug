import type { LibSQLDatabase } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator"

export async function migrator(
  db: LibSQLDatabase<any>,
  migrationPath?: string,
) {
  console.log('~~hi')
  return migrate(db, { migrationsFolder: migrationPath ?? "./migrations" })
}
