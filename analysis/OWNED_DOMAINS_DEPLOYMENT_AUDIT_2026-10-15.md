# Owned Domains Dashboard Deployment Audit

## Deployment

- Dashboard source deployed: current `main` release with reviewed crosswalk and literal-prompt peer ranks
- Production page: `https://bullhorn-dashboard.netlify.app/`
- Owned Domains release: `owned-domains-2026-10-15-v11`
- Versioned browser assets:
  - Compact first-load release: `gs://aeo-dashboard-assets-bullhorn/dashboard-data/owned-domain-releases/owned-domains-2026-10-15-v11/owned_domains_release.json` (12,167,618 bytes)
  - On-demand URL/prompt detail: `owned_domains_detail.json` (44,340,175 bytes)
  - On-demand answer-quality cohort: `owned_domains_quality.json` (5,102,004 bytes)
- Each uploaded object matched its local MD5 checksum before the dashboard source was switched to v11.

## Data validations passed

1. Latest complete citation observation is October 11, 2026. Partial deliveries are excluded. The 7/14/30-day eligibility clock reads the citation release manifest's delivery-status calendar directly, rather than inferring complete dates from citation activity.
2. The compact project citation history reconciles exactly to the owned-event evidence ledger after applying the same in-scope monitored prompt roster used by coverage and answer quality, plus the correct outlet scope:
   - AEO Sites: all network URLs
   - Courier and Heartland Signal: confirmed project URLs and tracked aliases only
   - Local Voter Guide and Forward Majority: all observed owned-domain citations, pending project URL rosters
3. Latest-snapshot prompt reach matches independently for all five groups.
4. The release has coverage rows for every in-scope group: AEO Sites, Courier, Heartland Signal, Local Voter Guide, and Forward Majority. It includes 2,630 prompts, including 20 reviewed Georgia gubernatorial prompts that had been inadvertently omitted when the source matrix's shared WS4 label was excluded.
5. Every article metric has a consistent 7, 14, and 30-day milestone record. The legacy seven-day fields reconcile to the seven-day nested milestone record.
6. The released HTML served in production contains `owned-domains-2026-10-15-v11`. The first-load asset contains the footprint, coverage, peer, and article metrics; the five-dimension quality cohort and URL/prompt history load only when their respective views need them.
7. The Site Analytics tab points to the current Google Search Console release: `gsc-refresh-20261015-v1`.
8. The in-scope citation history contains 9,768 compact rows and 687,619 source appearances. Its 66,880 prompt-history rows and 1,108 workstream-history rows both reconcile exactly to the same 687,619 appearances. Opponent-only and other excluded prompts do not enter any Owned Domains KPI.
9. Every displayed peer-ranking row resolves to its complete source leaderboard, with matching rank, citation count, and peer-universe size. Race ranks are withheld when the source category cube has no measured peer universe for that race.
10. The reviewed crosswalk contains all 2,630 monitored prompts and all 660 project articles. The source-read audit has 14,171 retained article-to-prompt links, including 63 Georgia gubernatorial links, all of which passed candidate, declared-race, direct-topic, and coverage-link scope checks.
11. The literal-prompt peer extraction scanned all 108 source partitions. Its 88,516 owned-domain rank rows reconcile to the rebuilt source release, and every emitted row passed rank, citation, and peer-population tie-out.
12. The October 15 interface audit confirmed that workstream, race, candidate, topic, prompt, and domain selections constrain the corresponding article-window, quality, Search Console, and coverage views. Domain-specific coverage is recomputed from that domain’s own latest citations rather than inherited from the network total.
13. The semantic remediation reviewed each prompt from literal wording before metadata. It corrected 299 primary-topic classifications, eliminated generic profile/comparison prompts inheriting unrelated issues, and records the complete v2 rationale and confidence ledger alongside the dashboard source.
14. The v3 article audit read every local source and all 49 confirmed publisher pages. It narrowed 20 unsupported issue mappings, prevented unscoped explainers from masking candidate-specific content gaps, excluded pre-publication URL aliases from article-speed clocks, and normalized Google AI Mode to the score-release provider key.

## What is live

- A shared three-section layout across all owned-domain tabs: performance, visibility, and remaining gaps. Site Analytics now begins with the AI citation footprint and Google Search reach.
- A color-coded performance scorecard, citation and Google Search trends, selectable 7/14/30-day citation yield, on-topic share, time to first citation, and article conversion.
- Five-dimension answer-quality line chart for the cited prompt-provider cohort.
- Site Analytics Search Console impressions, clicks, CTR, and trend line. Content-scope filters use reviewed article-level traffic, while an unscoped view retains complete site-level traffic.
- A top-domain citation-frequency view with expandable full list, then cited URL and latest-complete prompt/provider drilldown on demand.
- Category peer rank with complete clickable leaderboard for each owned domain, filtered to all in-scope workstreams, an individual workstream, a selected race, candidate, topic, or literal prompt.
- Citation frequency, URL detail, citation total, and latest prompt drilldown filters for workstream, race, candidate, topic, prompt, domain, and date.
- Candidate coverage portfolio with prompts reached and uncovered topic-group count, followed by a top-25 ranked candidate-topic queue, expandable full queue, optional candidate-by-topic heatmap, and prompt/article drilldown. Partial coverage is classified separately from full reach.

## v8 crosswalk remediation

- General candidate-profile and head-to-head prompts now appear under **Candidate information & qualifications** unless they explicitly name an issue.
- Multi-issue questions retain all literal subjects. A matching source seed can set their display order but cannot add a topic that does not appear in the question.
- Word-boundary matching prevents false classifications caused by raw substrings, including the prior case where “different” could be read as “rent.”
- The corrected v2 audit has complete coverage: 2,610 unique prompt records and 660 unique project-article records, with no blank topic, rationale, or semantic-basis field.

## Honest measurement limitations retained in the interface

- Workstream and race peer ranks use the compact category cube. Candidate, topic, and prompt ranks use an exact aggregate of the literal prompt leaderboards in the selected cohort. A category with no observed citation peer universe remains not measured rather than assigned a rank of zero.
- Local Voter Guide and Forward Majority have no confirmed project-article roster, so article yield, on-topic share, and cost/article are correctly shown as not measured rather than inferred.
- AEO variable model/research cost is not shown because no trustworthy article-level spend ledger exists. Fixed domain and hosting cost is intentionally excluded.
- A narrowed content or domain selection does not receive a prorated portfolio cost per article. The card explicitly shows that cost is only measured at the full-portfolio commitment level.
