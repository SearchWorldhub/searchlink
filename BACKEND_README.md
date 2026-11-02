# SearchLink 5.8 — Hardened Optional Backend Starter

SearchLink 5.8 adds a safer backend foundation while keeping the PWA fully usable in local-only mode.

## Run locally

```bash
node server.js
```

The API listens on `http://localhost:8787` by default.

- `GET /api/v1/health` — health and schema check
- `GET /api/v1/capabilities` — supported backend capabilities
- `POST /api/v1/events` — receives SearchLink schema 10 event batches
- `GET /api/v1/admin/summary` — aggregate event summary, protected by `ADMIN_TOKEN`

Environment variables:

- `PORT` — listening port
- `HOST` — listening host
- `DATA_DIR` — JSONL storage directory
- `CORS_ORIGIN` — exact allowed browser origin (leave empty only for trusted/local use)
- `RATE_LIMIT` — requests per IP per minute (default 120)
- `ADMIN_TOKEN` — required for `/api/v1/admin/summary`

## Production safety

This is still a starter backend, not a complete hosted SaaS platform. Before public deployment:

1. Put it behind HTTPS.
2. Use real user authentication at the hosting platform or reverse proxy.
3. Set an exact `CORS_ORIGIN`; do not rely on `*` in production.
4. Keep `ADMIN_TOKEN` server-side only. Never place it in the PWA.
5. Replace JSONL storage with a managed database for concurrency, backups and scale.
6. Add monitoring, backups and operational alerting.
7. Review privacy/retention requirements for your actual deployment.

The API includes request-size limits, rate limiting, origin checks, security headers, strict event validation and idempotent event IDs. These are hardening measures, not a substitute for authentication or a managed production stack.
