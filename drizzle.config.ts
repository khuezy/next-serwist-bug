import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'turso',
  out: './migrations',
  schema: './models',
  dbCredentials: {
    url: process.env.DB_URL!,
    authToken: process.env.DB_TOKEN!,
  },
  casing: 'snake_case',
})
