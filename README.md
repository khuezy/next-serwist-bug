# Turso Embedded Replica on AWS is broken

## Reproduction

1. `npm install --force`
2. `npm run dev`
3. Go to `localhost:3000`
4. Click on the "Update" button and see the value increment
5. Keep clicking to do more updates... then wait about a minute and then click on it again.
6. Eventually the client connection to the embedded replica => remote is broken with: `stream not found`.

NOTE: sometimes the error is the wal_index write:

```
2025-05-31T17:57:02.841153Z ERROR libsql::database::builder: Error syncing database: SQLite failure: `wal_insert_begin failed`
 ⨯ Error: Hrana(Api("status=404 Not Found, body={\"error\":\"stream not found: c8142863:0197277d-41a4-7843-b8b1-29053fea6e92\"}"))
```
