# SearchLink 5.7

## Backup-readiness preflight
- Adds a user-initiated local check before backup export. It checks JSON serializability, recovery-data validation, local data readability, safety-snapshot presence, SHA-256 capability, and browser quota estimates when available.
- The check is read-only: it does not export, restore, delete, or upload data. It reports cautions when no safety snapshot exists or storage pressure is high.
- The preflight is guidance, not a guarantee that a browser download will succeed.

## Compatibility and privacy
- Preserves `localStorage` key `searchlink40`, schema 10, SHA-256 backup verification and legacy backup compatibility.
- Keeps local-first defaults and does not add automatic collection or upload.
- SearchLink 5.6 remains unchanged as a rollback package.

## Validation status
- ZIP integrity, JSON metadata parsing, JavaScript syntax and static feature/version assertions passed.
- Physical Android install/offline testing and live affiliate-network attribution testing remain outstanding.
