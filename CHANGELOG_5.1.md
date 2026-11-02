# SearchLink 5.1

## Reliability and safety improvements
- Service-worker activation now removes only older caches whose names start with `searchlink-`; unrelated apps sharing the same origin are left untouched.
- Service-worker runtime caching is limited to same-origin successful basic responses.
- CSV exports now escape spreadsheet-formula-leading values (`=`, `+`, `-`, `@`, including leading whitespace/control characters) before quoting fields.
- Campaign readiness checks flag unusually long or inconsistent campaign tags and duplicate normalized URLs among active partners.
- Updated app, PWA manifest, package metadata, readiness labels and new export filenames to 5.1.

## Compatibility
- Preserves the existing `searchlink40` local-storage key and schema 10.
- No new analytics are sent remotely by these checks.
- Readiness checks remain advisory; they do not verify partner approval, actual tracking, or commissions.

## Validation
- JSON metadata parsed, JavaScript syntax checked, ZIP integrity checked, and key regression assertions run.
- Not a substitute for live Android browser/PWA testing, hosting/security review, or real affiliate-network attribution tests.
