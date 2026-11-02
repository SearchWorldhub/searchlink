# SearchLink 5.0

## Campaign launch readiness
- Added a local pre-launch checklist for campaign tag, active approved partners, HTTPS URL formatting, analytics setting and backend configuration.
- Added CSV export of readiness findings.
- Checks are local-only; they do not contact partner websites, verify affiliate approval, or guarantee attribution/conversions.

## Compatibility and privacy
- Preserves schema 10 and the existing `searchlink40` primary storage key.
- No new data is uploaded by the readiness scan.
- Updated app/package version, manifest metadata and service-worker cache name.

## Validation
- Package JSON and manifest JSON parsed successfully.
- JavaScript syntax and ZIP integrity checked.
- Full Android live testing and real affiliate-network attribution are not claimed.
