# SearchLink 4.8

## Privacy-safe support diagnostics
- Added a one-tap copy/export support summary for troubleshooting.
- Includes app/schema version, feature toggles, local record counts, approximate local storage size, optional browser storage estimate, and local health-check totals.
- Explicitly excludes search terms, partner URLs, partner names, private notes, conversion amounts, and raw activity records.
- Clipboard access is attempted only after the user taps the button; if unavailable, a JSON diagnostics file is offered instead.

## Compatibility and privacy
- Preserves schema 10 and the existing `searchlink40` local storage key.
- Diagnostics are generated on-device and are not uploaded automatically.
- Updated PWA cache and app version labels.

## Validation
- JavaScript syntax, manifest/package JSON, ZIP integrity, and package contents checked.
- Full Android live testing and production backend deployment are not claimed.
