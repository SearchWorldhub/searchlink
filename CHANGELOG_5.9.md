# SearchLink 5.9

## Exportable backup-verification receipt
- Adds user-initiated export of the most recent read-only backup verification result.
- Receipt records pass/fail, check time, selected filename and size, backup schema/date when available, integrity status, and record counts.
- Failure receipts include a concise error reason.
- Receipt excludes search terms, partner URLs, private notes, and backup contents.
- Verification and receipt export do not restore, upload, or modify local SearchLink data.

## Compatibility and privacy
- Preserves localStorage key `searchlink40`, schema 10, and local-first defaults.
- Optional backend sync remains disabled unless enabled by the user.
- SearchLink 5.8 remains the rollback package.

## Validation
- ZIP integrity, metadata JSON, JavaScript syntax, and static feature/version assertions checked.
- Physical Android installation, offline behavior, and live affiliate attribution remain untested.
