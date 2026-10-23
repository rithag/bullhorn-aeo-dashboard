# Owned Domains citation refresh audit — October 23, 2026

## Release scope

- Latest complete citation observation: **October 20, 2026**. October 17–20 are complete in the sealed 108-race citation release; incomplete days are excluded rather than read as zero.
- Citation source: `citation-releases/refresh-oct17-oct20-20261023-v1/`.
- Cross-race peer detail: `citation-detail-releases/refresh-oct17-oct20-20261023-v1/` (10 categories, 6 prompt types, 256 domain drilldown shards; 22,239,040 raw detail rows). The category, prompt-type, and shard assets were copied and verified before the manifest was published.
- Owned Domains browser release: `owned-domain-releases/owned-domains-2026-10-23-v24-oct20/` (compact release, deferred prompt/URL detail, deferred answer-quality data).
- Site Analytics/Search Console release: `site-analytics-releases/gsc-refresh-20261023-v2/`; all 37 properties returned `ok`, with observed data through October 20.
- Score and share-of-voice releases remain on their existing October 11 data. No share-of-voice rescoring or refresh was performed.

## Article roster and eligibility

- The latest linked publisher spreadsheets reconcile exactly to **57 Courier** and **20 Heartland Signal** confirmed project URLs. Unlinked Heartland rows were excluded. The published-by-cutoff counts are **49 Courier** and **15 Heartland**; articles dated after October 20 remain in the registry but do not enter this snapshot's yield, cost-cohort, or coverage-gap denominators.
- The AEO Sites inventory has **953** published articles on **37** domains. The 25 reviewed Reddit posts remain in the Social Media inventory.
- The reviewed AEO article crosswalk includes the newer articles, and the 17 new linked publisher articles have an append-only topic review. Every article and prompt reference used in coverage resolves to the released inventory.

## Numerical checks

- The Owned Domains release contains **2,630** monitored prompts, **219,390** owned citation-event records, and **1,055** tracked article/post records. Its compact citation history, prompt history, and workstream-scoped history each reconcile to **1,365,605** final-answer source appearances across their complete snapshots.
- Latest-snapshot owned-domain source appearances reconcile to **123,194** across the six pages: AEO Sites 72,438; Courier 17,799; Heartland 1,665; Local Voter Guide 4,664; Forward Majority 25,423; Social Media 1,205. Each page's scope is set in the release: Courier/Heartland WS1, Local Voter Guide/Social Media WS2, Forward Majority WS3.
- The AEO Sites daily-domain citation history ties exactly to Site Analytics for the same 37 domains, in-scope prompts, and citation release: **72,438** on October 20 and **643,973** over the 31 complete dates in the shared comparison.
- The full peer-ranking release has **497** scoped leaderboards and **8,674** literal-prompt leaderboards. Every owned-domain rank resolves to its underlying leaderboard, count, and peer population. The Courier/Heartland peer comparison uses WS1 races and the Local/Regional News category; it counts only AEO domains with observed citations in that selection, not all 37 network sites. Other owned domains remain in the individual peer list.
- The partner spreadsheet reconciliation, Owned Domains release audit, cross-tab Site Analytics citation tie-out, dashboard release-pointer check, JavaScript parse, peer-comparison regression, and dashboard bootstrap tests passed.

## Measurement boundary

Peer-category rankings deliberately include **all observed final-answer source rows in the selected races and dates**, including source prompts outside the 2,630 monitored-prompt roster. Owned content-performance and coverage totals use that monitored roster. The dashboard labels this distinction; peer-rank totals should not be equated with article-performance totals. Project article metrics for Courier and Heartland count only their confirmed project URLs, while the peer leaderboard represents the full publisher domains.

## Production smoke check

The production HTML at `https://bullhorn-dashboard.netlify.app/` serves the October 20 citation, citation-detail, Site Analytics, and Owned Domains release pointers while retaining the October 11 share-of-voice pointer. The Citation Breakout rendered with an October 20 range end; its Reference Database category opened the complete domain ranking, and Policy Information Center opened its URL ranking. The inspected browser session logged no JavaScript errors. Partner and Site Analytics pages require their separate reporting passwords, so their visible charts were not inspected in that unauthenticated session; the source assets and numerical audits above were verified independently.
