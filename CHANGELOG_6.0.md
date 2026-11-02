# SearchLink 6.0

## New: Local commission ledger
- Record commission amounts manually in ZAR with pending, approved, or paid status.
- Optionally record an expected payout date and short network reference.
- View totals by status and a recent-entry ledger.
- Update a commission status without changing the separate confirmed-cash-payout ledger.
- Export commission entries to CSV.
- Include commission records in local JSON backups, restore validation, and local data-health checks.

## Compatibility and privacy
- Preserves the existing `searchlink40` localStorage key and existing schema 10, adding `commissions` as an optional backward-compatible array. Existing records are retained when the app normalizes local data.
- All commission entries are manual, local-first records. SearchLink does not fetch network commission data or verify commission claims.
- Commission records are included in full JSON backups and commission CSV exports; review files before sharing them.
- No background searches, artificial clicks, or manufactured conversions were added. Optional backend sync remains opt-in and unchanged.
- SearchLink 5.9 remains the rollback package.

## Validation
- ZIP integrity, manifest/package metadata, and JavaScript syntax are checked during packaging.
- Real Android installation, offline operation, and full interactive regression tests still require device testing.
