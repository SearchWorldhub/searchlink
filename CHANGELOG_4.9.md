# SearchLink 4.9

## Local safety snapshots
- Before resetting local analytics or importing a JSON backup, SearchLink attempts to save the current app data to a separate localStorage key.
- Added a snapshot status summary and a confirmation-based restore action.
- When restoring a snapshot, the current data is saved as the new safety snapshot first, allowing a one-step reversal.
- Reset/import is cancelled if a snapshot cannot be saved while current data exists.

## Compatibility and privacy
- Preserves schema 10 and the existing `searchlink40` primary storage key.
- Safety snapshots remain on this device and are not uploaded. They are not a substitute for exporting a JSON backup.
- Updated app version, package metadata and PWA cache name.

## Validation
- JavaScript syntax, manifest/package JSON, ZIP integrity and required package files checked.
- Full Android live testing and production backend deployment are not claimed.
