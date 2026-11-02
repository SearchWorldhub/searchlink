# SearchLink 4.4

## Partner management
- Partner entries now support optional network/program names and private local notes.
- Edit an existing partner's name, HTTPS URL, network and notes without deleting historical performance records.
- Partner URL validation requires HTTPS, a hostname, and no embedded username/password credentials.
- Duplicate partner names are rejected to reduce accidental duplicate records.
- Enable/pause a partner from Settings; paused partners are excluded from the search link selector.

## Compatibility and privacy
- Updated app, manifest, cache, export and optional backend metadata to 4.4 / schema 9.
- Kept the `searchlink40` local storage key and supports restoring older backup schemas through 9.
- Partner network names and notes remain local to this browser unless a user exports a backup.

## Limitations
- No live affiliate network APIs are integrated. Clicks, conversions and payouts remain locally recorded/manual and are not independently verified.
- The included backend is a starter requiring secure deployment and operational review. No earnings are guaranteed.
