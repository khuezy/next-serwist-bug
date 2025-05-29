# Next Serwist Compiler Bug

Since `Nextjs` `15.4.0-canary.28`, Serwist fails to build due to some compiler changes.

## Reproduction

1. `npm i --force` (force is used since serwist uses non canary next version)
2. `npm run dev`

See error:

```
 ⨯ ./app/sw.ts
TypeError: Cannot read properties of undefined (reading 'traceChild')
 ✓ Ready in 1923ms
 ⨯ ./app/sw.ts
```

## Working build

1. Edit the `package.json` and downgrade to `15.4.0-canary.27`
2. `rm -rf node_modules`
3. `npm i --force`
4. `npm run dev`

No errors and works as expected:

```
 ✓ Starting...
 ✓ (serwist) Bundling the service worker script with the URL '/sw.js' and the scope '/'...
 ✓ Ready in 2s
```
