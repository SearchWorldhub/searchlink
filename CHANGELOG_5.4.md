# SearchLink 5.4

## Partner URL reliability
- Partner tracking URLs are now assembled with the standard URL API instead of manual string concatenation.
- Existing query parameters and URL fragments are preserved.
- Existing `sl_source` and `sl_campaign` parameters are replaced rather than duplicated.
- Invalid URLs, non-HTTPS URLs, and URLs containing embedded username/password credentials are rejected by the tracking-link builder.

## Compatibility and privacy
- Preserves local-storage key `searchlink40` and schema 10.
- No new remote collection or automatic uploads; the optional backend remains disabled unless configured by the user.
- SearchLink 5.3 remains unchanged as a rollback package.

## Validation status
- Package and manifest JSON parsed; JavaScript syntax and ZIP integrity checked.
- Targeted URL regression checks cover existing query strings, fragments, duplicate tracking parameters, invalid protocols and embedded credentials.
- Physical Android install/offline tests and real affiliate-network attribution tests still need to be performed on-device/in production.
