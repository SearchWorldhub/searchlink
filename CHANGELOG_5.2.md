# SearchLink 5.2

## Reliability and export safety
- Activity-ledger CSV exports now use the shared CSV serializer, including spreadsheet-formula injection protection.
- Local data-health scans now flag malformed queued events that the sync path would skip.
- Local data-health scans now flag non-finite or negative conversion/payout amounts for review.
- Updated current app, manifest, backend version, cache key, and export filenames to 5.2.

## Compatibility and privacy
- Preserves local-storage key `searchlink40` and schema 10.
- Does not add automatic remote collection or change the default local-only mode.
- Warnings are advisory and do not modify records automatically.

## Validation
- JSON metadata parsed, JavaScript syntax checked, ZIP integrity checked, and targeted regression assertions run.
- Live Android install/offline tests and real affiliate-network attribution remain to be performed on-device/in production.
