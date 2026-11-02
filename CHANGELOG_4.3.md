# SearchLink 4.3 changelog

Built from SearchLink 4.2. Keep the 4.0, 4.1 and 4.2 ZIPs unchanged as rollback copies.

## Changes
- Added reusable local campaign presets: save, activate, and delete named campaign tags from Settings. Deleting a preset does not delete historical activity.
- Added a campaign comparison report showing local clicks, manually recorded conversions, conversion rate, conversion value and confirmed payouts for the active partner/period filters.
- Advanced app/backend version to 4.3 and event envelope schema to 8; preserved the existing `searchlink40` local-storage key and backward-compatible restore of schemas up to 8.
- Added `export_report_csv` to the optional backend event allowlist so partner-report exports can sync instead of being rejected.
- Updated PWA manifest, cache namespace, package metadata, backup and CSV filenames.

## Important limitations
- Presets are local labels and do not create hosted tracking redirects or independently verify campaign attribution.
- Clicks are locally recorded; conversions and payouts are manually recorded unless a real affiliate integration is built.
- No affiliate approval, hosted service, or revenue is included or guaranteed. The Node backend is an optional starter and needs secure production deployment before public use.
