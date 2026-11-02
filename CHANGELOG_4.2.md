# SearchLink 4.2 changelog

Built directly from the SearchLink 4.1 package. Keep the original 4.0 ZIP and 4.1 ZIP unchanged as rollback copies.

## Changes
- Refined mobile layout: two-column statistic tiles, stacked controls/filters on narrow screens, larger tab targets, sticky section tabs, and visible keyboard focus styles.
- Added a seven-day visual of locally recorded partner clicks, respecting the active partner/campaign/period report filters.
- Added a filtered partner-performance CSV export covering locally recorded clicks, conversions, and confirmed payouts.
- Updated PWA, backend, cache, export and package version metadata to 4.2.
- Advanced the client/server event envelope to schema 7; the local storage key remains `searchlink40` so data can carry forward from earlier versions.
- JSON restore accepts older backups through schema 7 and rejects future schemas.

## Important limitations
- The chart and report use records stored on this device; they are not verified affiliate-network analytics.
- A conversion must be recorded manually unless an affiliate platform provides a real integration. A payout is counted only when manually recorded as received.
- Partner URLs are not converted into a hosted redirect/tracking service by this PWA. Partner reporting is local bookkeeping and does not guarantee commissions or revenue.
- Backend sync is optional and needs a deployed HTTPS server. The included Node backend is a starter, not a hosted service.
