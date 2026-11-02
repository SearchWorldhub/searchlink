# SearchLink 4.7

## Local data health review
- Added an on-demand local integrity scan for malformed data lists, duplicate record IDs, invalid timestamps, missing partner references, and invalid/non-HTTPS partner URLs.
- Added CSV export of the health report for troubleshooting.
- The scan is read-only; it does not delete or rewrite records and does not upload data.
- Preserved SearchLink local storage key and existing data schema to keep the upgrade compatible with prior local data.

## Notes
- Findings are advisory. Informational notes (such as an old event referring to a partner no longer in the directory) are not necessarily errors.
- Analytics remain local unless the user explicitly configures and enables a backend.
