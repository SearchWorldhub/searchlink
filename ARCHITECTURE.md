# SearchLink 5.8 — Production Architecture Foundation

SearchLink 5.8 separates the mobile PWA from an optional API boundary. The PWA can remain local-only; when configured, it sends validated event batches to `/api/v1/events`.

## Architecture
- **Client:** static PWA (`index.html`, manifest, service worker)
- **API:** Node.js HTTP starter (`server.js`)
- **Contract:** versioned `/api/v1` routes, schema 10 event envelopes, request IDs, idempotent event IDs
- **Storage:** JSONL starter storage for development; replace with a managed database before public production
- **Admin:** protected summary route using an environment token; use platform authentication/secret management in production

## Endpoints
- `GET /api/v1/health` — liveness
- `GET /api/v1/ready` — storage readiness
- `GET /api/v1/capabilities` — API capabilities
- `POST /api/v1/events` — validated event ingestion
- `GET /api/v1/admin/summary` — protected development/admin summary

## Production checklist
1. Put the API behind HTTPS.
2. Use a managed database with backups instead of JSONL.
3. Put authentication in front of admin endpoints.
4. Store secrets in the hosting provider's secret manager.
5. Set an exact CORS origin for the deployed PWA.
6. Add monitoring, logs and alerting.
7. Add retention/deletion policies appropriate to the data you actually collect.
8. Never manufacture searches, clicks, conversions or revenue.

This package does not include a hosted service, affiliate approval, guaranteed revenue, or a claim that Google or another provider shares its revenue with SearchLink.


## Partner audit (4.5+)
Partner audit is computed entirely in the browser from locally stored partner records. Partner directory CSV excludes private notes.
