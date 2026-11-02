# SearchLink 4.6

## Includes 4.5 partner tools
- Includes local partner audit for paused entries, repeated URLs and invalid HTTPS URLs.
- Includes partner directory CSV export while excluding private notes.

## Safer backup restore
- Restore now previews the backup timestamp, schema and key record counts before replacing local data.
- Restore requires explicit confirmation and rejects malformed, non-object and newer-schema backups.
- File-read failures receive a clear message; the file picker resets so the same file can be selected again.

## Local storage visibility
- Added an on-demand storage check for the approximate size of SearchLink's saved local data.
- Where supported, also reports the browser origin's estimated storage use and quota.
- The check is local-only and does not upload data. Estimates vary by browser and device.

## Compatibility and visual identity
- Updated app, manifest, cache, exports, package and optional backend metadata to 4.6 / schema 10.
- Preserved the `searchlink40` local storage key and existing data structures, including partner notes and campaign presets.
- Retained the dark navy, electric-blue glow and gold-accent visual identity.

## Limitations
- Analytics are locally recorded and not independently verified; conversions and payouts are manual records.
- No live affiliate network APIs or guaranteed earnings are included.
- The optional backend starter needs secure deployment and operational review before public use.
