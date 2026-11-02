# SearchLink 5.8

## Read-only backup file verification
- Added a dedicated check for an existing exported JSON backup without restoring it.
- Validates SearchLink backup envelope, schema range, known recovery-data fields and SHA-256 digest when present.
- Shows export timestamp and record counts after a successful check; reports legacy backups without a digest as unverified rather than falsely declaring their integrity verified.
- Rejects malformed or mismatched digest metadata and oversized files.
- Verification is read-only: it does not import, overwrite, upload, or change local SearchLink data.

## Compatibility and privacy
- Preserves localStorage key `searchlink40`, schema 10, safety snapshots and local-first defaults.
- Keeps optional backend sync disabled unless the user enables it.
- SearchLink 5.7 remains unchanged as the rollback package.

## Validation
- ZIP integrity, metadata JSON, JavaScript syntax and static feature/version assertions checked.
- Physical Android install/offline testing and production affiliate-network attribution are not claimed.
