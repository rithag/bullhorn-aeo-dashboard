# Owned Domains Dashboard Deployment Audit

## Deployment

- Dashboard source deployed: `a0d9975` (`Add multi-window owned-domain performance metrics`)
- Production page: `https://bullhorn-dashboard.netlify.app/`
- Owned Domains release: `owned-domains-2026-10-15-v3`
- Immutable data object: `gs://aeo-dashboard-assets-bullhorn/dashboard-data/owned-domain-releases/owned-domains-2026-10-15-v3/owned_domains_release.json`
- Data object size: 12,334,749 bytes
- SHA-256: `5b72e97883ca37c3af8b2aa2e318380cef49d5a3bc72ff4f9177499dac3d11aa`

## Data validations passed

1. Latest complete citation observation is October 11, 2026. Partial deliveries are excluded. The 7/14/30-day eligibility clock reads the citation release manifest's delivery-status calendar directly, rather than inferring complete dates from citation activity.
2. The compact project citation history reconciles exactly to the owned-event evidence ledger after applying the correct outlet scope:
   - AEO Sites: all network URLs
   - Courier and Heartland Signal: confirmed project URLs and tracked aliases only
   - Local Voter Guide and Forward Majority: all observed owned-domain citations, pending project URL rosters
3. Latest-snapshot prompt reach matches independently for all five groups.
4. The release has coverage rows for every in-scope group: AEO Sites, Courier, Heartland Signal, Local Voter Guide, and Forward Majority.
5. Every article metric has a consistent 7, 14, and 30-day milestone record. The legacy seven-day fields reconcile to the seven-day nested milestone record.
6. The released HTML served in production contains `owned-domains-2026-10-15-v3` and the full-score load required for the five-dimension quality chart.
7. The Site Analytics tab points to the current Google Search Console release: `gsc-refresh-20261015-v1`.

## What is live

- A shared three-section layout across all owned-domain tabs: performance, visibility, and remaining gaps.
- Project citations, prompts reached, selectable 7/14/30-day citation yield, on-topic share, time to first citation, article conversion, and planned cost per article.
- Five-dimension answer-quality line chart for the cited prompt-provider cohort.
- Site Analytics Search Console impressions, clicks, CTR, and trend line.
- Domain citation frequency, cited URL list, and latest complete prompt/provider drilldown.
- Category peer rank with complete clickable leaderboard for each owned domain, filtered to all in-scope workstreams or a selected workstream.
- Candidate coverage portfolio with prompts reached and uncovered topic-group count, followed by the ranked candidate-topic queue, candidate-by-topic heatmap, and prompt/article drilldown.

## Honest measurement limitations retained in the interface

- Exact peer rank for one individual prompt is not calculated in this release. The available peer category cube is aggregated by race and workstream, not literal prompt ID. The UI states this rather than implying a precise prompt-level rank. A future exact-prompt rank requires a dedicated prompt-by-domain peer artifact from the raw citation partitions.
- Workstream filtering applies to citation totals, citation frequency trend, prompt coverage, and peer rank. Historical cited URL rows remain period-wide because URL-by-workstream history is not retained in the compact release; the interface labels this.
- Local Voter Guide and Forward Majority have no confirmed project-article roster, so article yield, on-topic share, and cost/article are correctly shown as not measured rather than inferred.
- AEO variable model/research cost is not shown because no trustworthy article-level spend ledger exists. Fixed domain and hosting cost is intentionally excluded.
