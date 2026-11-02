# SearchLink 4.1 changelog

Built directly from the saved SearchLink 4.0 PWA package. The 4.0 ZIP is left unchanged as the stable backup.

## Changes
- Corrected client version/schema normalization so loading the app no longer rewrites its data version to 3.8/schema 4.
- Kept the existing `searchlink40` local-storage key so existing 4.0 data is reused rather than silently abandoned.
- Aligned frontend health/sync endpoints with the included backend `/api/v1/*` routes.
- Updated PWA title, manifest, cache namespace, package metadata, backend version, export filenames and documentation to 4.1.
- Added a one-tap, confirmation-protected saved-search history clear action.
- When saved history is switched off, clears saved history on save; when local analytics is switched off, clears event and pending-sync telemetry. Partner configuration and financial records remain available locally.
- Removed full destination URLs from copy/share event metadata; only the destination hostname is recorded in those event details.

## Important
- No hosted backend or affiliate account is included. Backend sync is optional and requires a deployed HTTPS instance of the included starter.
- Local analytics are estimates/manual records; clicks do not guarantee affiliate conversions or revenue.
- Keep the original `SearchLink_4.0_PWA.zip` as the rollback copy.
