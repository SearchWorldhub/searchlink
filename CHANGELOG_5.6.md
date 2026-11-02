# SearchLink 5.6

## Local storage awareness
- The Storage check now reports estimated browser-origin usage as a percentage when the browser provides a usable quota estimate.
- At 80% or above, it warns the user to export a JSON backup soon. The estimate is explicitly approximate because browser storage quotas vary.
- The check remains user-initiated and local; it does not upload data or change storage.

## Release consistency and compatibility
- Aligns app title, visible version labels, backup/report filenames, diagnostics, stored version markers, PWA manifest, service-worker cache, package metadata and optional server version with 5.6.
- Preserves local-storage key `searchlink40`, schema 10, checksum verification from 5.5, and local-only defaults.
- SearchLink 5.5 remains unchanged as a rollback package.

## Validation status
- ZIP integrity, JSON metadata, and JavaScript syntax checks passed.
- Static checks confirmed the storage warning threshold and version alignment.
- Physical Android install/offline tests and real affiliate-network attribution tests still need to be performed on-device/in production.
