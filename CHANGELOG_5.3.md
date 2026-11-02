# SearchLink 5.3

## Backup and recovery safeguards
- Added preflight validation before importing JSON backups or restoring local safety snapshots.
- Rejects malformed known collection fields, invalid partner record shapes, and invalid/negative conversion or payout amounts rather than silently normalizing those records.
- Rejects JSON backup files larger than 5 MB before parsing.
- Requires a valid integer schema from 0 through 10; backups from newer schemas are not imported.
- Preserves the existing local-storage key `searchlink40` and schema 10.

## Compatibility and privacy
- No new remote collection or automatic uploads. Optional backend remains disabled unless configured by the user.
- Safety checks are local and do not alter records before the user confirms restore.

## Validation status
- Package metadata and manifest parsed; JavaScript syntax and ZIP integrity checks performed.
- This environment has not performed physical Android install/offline tests or production affiliate-network conversion tests.
