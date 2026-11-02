# SearchLink 5.5

## Backup integrity verification
- JSON backups now include a SHA-256 digest of the exported data when Web Crypto is available.
- Restore verifies the digest before showing the restore confirmation or changing local data. A mismatched or malformed checksum is rejected.
- Older SearchLink JSON backups without checksum metadata remain supported through existing schema and record validation.
- If the browser cannot create a digest, export remains available but clearly reports that no checksum was added. A backup containing a checksum is never restored without successful verification.

## Compatibility and privacy
- Preserves local-storage key `searchlink40`, schema 10, and the existing local-only default.
- No automatic upload or new remote collection was added. SHA-256 is calculated locally in the browser.
- SearchLink 5.4 remains unchanged as a rollback package.

## Validation status
- PWA metadata parsed; JavaScript syntax and ZIP integrity checked.
- Targeted tests cover checksum generation/verification, tamper detection, legacy backup acceptance, and schema compatibility.
- Physical Android install/offline tests and production affiliate attribution tests still need to be performed on-device/in production.
