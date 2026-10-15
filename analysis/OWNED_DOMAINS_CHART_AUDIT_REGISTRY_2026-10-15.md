# Owned Domains Chart-by-Chart Audit Registry

## Audit standard

Each chart is released only after its source universe, calculation, filter behavior, visible labels, and a source-data tie-out have been checked independently. A chart that depends on the article or prompt crosswalk remains labeled provisional until its row-level review is complete.

## Shared filter contract

| Filter | Citation frequency and URL detail | Article-window performance | Quality trend | Search Console | Peer rank | Coverage views |
| --- | --- | --- | --- | --- | --- |
| Date range | Filters retained history | Milestones retain their fixed complete window; project-citation frequency honors the date range | Fixed current cited cohort with complete score history through the latest citation snapshot | Exact Search Console date filter | Latest complete citation snapshot only | Latest complete citation snapshot only |
| Workstream | Exact prompt-history filter | Reviewed articles linked to the selected prompt cohort | Exact prompt cohort | Reviewed articles linked to the selected prompt cohort | Exact workstream rank | Exact prompt universe |
| Race | Exact prompt-history filter | Reviewed articles linked to the selected prompt cohort | Exact prompt cohort | Reviewed articles linked to the selected prompt cohort | Exact race rank when a peer universe exists | Exact prompt universe |
| Candidate | Exact prompt-history filter | Reviewed articles linked to the selected prompt cohort | Exact prompt cohort | Reviewed articles linked to the selected prompt cohort | Exact aggregate across the candidate's selected prompts | Exact prompt universe |
| Topic | Exact prompt-history filter | Reviewed articles linked to the selected prompt cohort | Exact prompt cohort | Reviewed articles linked to the selected prompt cohort | Exact aggregate across the selected topic prompts | Exact prompt universe |
| Prompt | Exact prompt-history filter | Reviewed articles linked to the literal prompt | Exact prompt cohort | Reviewed articles linked to the literal prompt | Exact literal-prompt rank | Exact prompt universe |
| Owned domain | Exact domain filter | Exact article-domain filter; cost is not apportioned to a domain | Citation cohort for that domain | Exact site or article-domain filter | Exact selected owned domain rank | Exact latest-citation reach and relevant-article details for that domain |

## Chart registry

| Section | Chart or card | Exact source and calculation | Status | Required independent test |
| --- | --- | --- | --- | --- |
| How is our content performing? | Project citations | Selected history rows. Courier and Heartland retain confirmed project URLs only. | Filter and source audit passed | Sum the visible period/domain rows and reconcile to the card. |
| How is our content performing? | Prompts reached | Distinct eligible prompts with a qualifying citation in the latest complete snapshot. | Source and crosswalk audit passed | Compare visible numerator and denominator to the reviewed prompt ledger. |
| How is our content performing? | Citation yield, 7/14/30 | Confirmed project citations divided by eligible project articles that completed the chosen window. | Milestone and scope-filter audit passed | Independently recompute article milestones from release dates and complete delivery dates. |
| How is our content performing? | On-topic citation share | Citations to direct topic matches divided by citations from eligible project articles in the same window. | Crosswalk, milestone, and scope-filter audit passed | Recompute from reviewed article and prompt mappings only. |
| How is our content performing? | Time to first citation | Median complete-calendar days from publication to first qualifying project citation. | Milestone and scope-filter audit passed | Recalculate from article milestone rows. |
| How is our content performing? | Articles cited within window | Eligible project articles cited at least once by the selected milestone divided by eligible project articles. | Milestone and scope-filter audit passed | Recalculate from article milestone rows. |
| How is our content performing? | Cost per project article | Commitment divided by intended project-article commitment, with project spend prorated to delivered confirmed articles. | Registry audit passed | Tie to the confirmed publisher roster and declared commitments. |
| How is our content performing? | Five-dimension answer-quality trend | Scores for the same filtered prompt-provider cohort when the selected owned-domain group is cited, displayed across complete score dates. | Source and filter audit passed | Compare point values and pp deltas to full score rows under the same prompt set. |
| How is our content performing? | Google Search visibility | Search Console impressions, clicks, and CTR for selected AEO domains and dates. | Source and filter audit passed | Reconcile to the current Search Console release and exclude unreported dates. |
| Where is it showing up? | Citation frequency by owned domain | Daily prompt-history citations under the selected scope, or full reconciled history when no prompt scope is selected. | Source and filter audit passed | Compare unfiltered history to the domain-history asset; test one race and one prompt against raw owned events. |
| Where is it showing up? | Cited URLs | Selected-history citations grouped by canonical domain and URL. | Source and filter audit passed | Sum URL rows back to citation-frequency total under the same filters. |
| Where is it showing up? | URL to prompt/provider drilldown | Latest complete citation drilldown, limited to the selected prompt universe and URL. | Filter audit passed | Sum displayed prompt-provider records to the selected URL's latest-snapshot count. |
| Where is it showing up? | Peer category rank | Latest complete source-cited domain rank within Local/Regional News, National News, or Blogs. | Source and filter audit passed | Verify every owned row against its emitted leaderboard. Withhold a rank without an observed peer universe. |
| Where are there still gaps? | Candidate coverage portfolio | Per candidate, reached prompts out of monitored prompts and count of zero-coverage topic groups. | Source and crosswalk audit passed | Recompute from reviewed prompt ledger and confirmed project citation links. |
| Where are there still gaps? | Priority candidate-topic queue | Zero/low reach cells sorted by reach, candidate, and diagnosis. | Source and crosswalk audit passed | Recompute diagnosis from reviewed article-to-topic and prompt-to-topic maps. |
| Where are there still gaps? | Candidate by topic heatmap | Reached prompts divided by monitored prompts for each candidate-topic cell. | Source and crosswalk audit passed | Recompute every displayed cell from reviewed prompt mappings. |
| Where are there still gaps? | Prompt and relevant-article drilldown | Actual mapped prompts, observed citations, and direct/broader relevant articles. | Link-scope audit passed | Validate displayed mappings against individual reviewed records. |

## Peer-ranking release v4 validation

- 3,849 owned-domain rank rows and 289 category leaderboards passed row-by-row rank, citation, and population checks.
- The chart reads prompt-level history for citation frequency and URL detail. Ten legacy Heartland citations without a prompt ID remain only in unfiltered totals, preventing an inaccurate association with any individual prompt.
- Race and workstream ranks use the compact category-domain cube. A later v6 prompt peer artifact supplies exact ranks for candidate, topic, and literal-prompt scopes.

## Prompt peer-ranking release v6 validation

- The source extraction scanned all **108** sorted race partitions from the same immutable citation release, covering **16,357,296** raw rows and retaining **37,863** prompt-category-domain totals at the latest complete snapshot.
- The merged output validated contiguous partition coverage from 0 through 108, one source manifest generation, and one latest-complete date.
- The v6 browser asset contains **5,770** literal-prompt category leaderboards and **87,944** owned-domain rank rows. Every emitted owned row matched its leaderboard's rank, citation total, and population.
- Candidate and topic filters aggregate the literal prompt leaderboards in the selected cohort. This makes their peer rank an exact sum of observed citations for the selected prompts, not a race-level proxy.

## Crosswalk release v5 validation

- The v5 asset uses the versioned record-level crosswalk ledger: 2,610 reviewed prompts and 660 reviewed project articles.
- Its 22,050 compatibility links passed a candidate and race-scope audit: zero AEO links cross a named candidate boundary, and zero partner links cross a declared race boundary.
- Crosswalk-dependent visuals are live with the reviewed mappings. Their independent numerical tie-outs, along with milestone, quality-trend, and Search Console checks, remain in the work order below.

## Coverage and milestone validation

- The current latest-complete snapshot is October 11. Independently recomputing prompt reach from the raw owned-event ledger produced zero mismatches across all **7,749** coverage rows: AEO Sites 1,333 of 2,610 prompts reached; Courier 399 of 810; Heartland Signal 53 of 2,610; Local Voter Guide 157 of 1,099; and Forward Majority 444 of 620.
- Independent recomputation of all **1,980** article-window records, 660 articles × 7/14/30 days, found zero milestone date or citation-total mismatches.
- Independent relation checks found zero mismatches for direct and broader on-topic citation totals across the same 1,980 article-window records.

## Quality-trend validation

- Audited October 15 against immutable score release `refresh-sep28-oct11-20261014-v2`, which contains 1,792,952 aggregate score rows through October 11.
- Recomputed each group’s cited prompt-provider cohort from the live v6 citation drilldown, then reproduced the client calculation row by row: prompt-level deduplication for visibility and favorability; literal response-level denominators for depth, accuracy, and narrative; and the dashboard’s default exclusion of refusal rows from visibility.
- The audit found valid cohorts and complete score joins for all five groups. The live card now reports each dimension’s first measured score to its latest measured score, rather than implying every dimension has the same baseline date. This matters for newer scopes with no early accuracy or visibility observations.

## Google Search Console validation

- Audited October 15 against `gsc-refresh-20261015-v1`. Its 611-article AEO inventory matches the live Owned Domains AEO article inventory exactly, with zero missing or unexpected IDs.
- The release has 583 unique site-day rows and 2,810 unique article-day rows, with no duplicate keys and no unknown site or article identifiers.
- In the default dashboard date range, August 31 through October 11, the independently summed site-level source reports 38,959 impressions and 1,078 clicks. Regrouping by displayed date yields the same totals.
- The Search Console card previously ignored content-scope filters. It now switches to reviewed article-level Search Console rows when workstream, race, candidate, topic, or prompt is selected. For example, the reviewed Amish Shah scope contains 81 monitored prompts, maps to 35 relevant articles, and yields 2,367 impressions and 96 clicks in the default range. The card explicitly labels this as article-mapped Google Search activity.

## Domain-scoped coverage validation

- The candidate portfolio, addressable-gap queue, and heatmap now recompute prompt reach from the selected domain’s latest complete citation records. Selecting a domain no longer inherits prompt coverage observed elsewhere in the network.
- For example, `affordabilitydemocrats.com` reaches 10 of the 2,610 AEO monitored prompts at the October 11 snapshot, compared with 1,333 prompts reached by the full AEO portfolio. The domain-specific result exactly matches its ten latest prompt citations.

## Article-window scope and cost validation

- Any workstream, race, candidate, topic, or literal-prompt selection now constrains citation yield, on-topic share, time to first citation, articles cited, and article conversion to the reviewed article relationships for the selected prompt cohort. A narrow scope never retains the full-portfolio article denominator.
- Example source checks: the Amish Shah cohort has 81 prompts, 35 related articles, and 23 articles eligible for a seven-day milestone; CO-04 House has 81 prompts, 18 related articles, and three eligible seven-day articles; one Shah data-center prompt maps to ten relevant articles, eight of which have a completed seven-day window. All relationship IDs resolve to the article registry.
- The cost card is intentionally portfolio-only. It shows $120,000 ÷ 54 planned Courier project articles and $50,000 ÷ 21 committed Heartland project articles. It reports not measured for AEO Sites, Local Voter Guide, and Forward Majority because no article-attributable cost ledger has been provided. A narrowed content or domain scope never inherits a misleading portfolio cost per article.

## Remaining work order

1. Preserve and periodically re-review the article-by-article and prompt-by-prompt crosswalk ledgers as new content or prompts enter the program.
2. Refresh the article-attributable AEO Sites model and research cost ledger if a cost-per-article KPI is required for that portfolio.
3. Re-run this chart registry against each new citation, score, Search Console, or article release before publishing it to the live dashboard.
