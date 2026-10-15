# Owned Domains Chart-by-Chart Audit Registry

## Audit standard

Each chart is released only after its source universe, calculation, filter behavior, visible labels, and a source-data tie-out have been checked independently. A chart that depends on the article or prompt crosswalk remains labeled provisional until its row-level review is complete.

## Shared filter contract

| Filter | Citation frequency and URL detail | Quality trend | Peer rank | Coverage views |
| --- | --- | --- | --- | --- |
| Date range | Filters retained history | Uses the latest complete score date in range | Latest complete citation snapshot only | Latest complete citation snapshot only |
| Workstream | Exact prompt-history filter | Exact prompt cohort | Exact workstream rank | Exact prompt universe |
| Race | Exact prompt-history filter | Exact prompt cohort | Exact race rank when a peer universe exists | Exact prompt universe |
| Candidate | Exact prompt-history filter | Exact prompt cohort | Not recalculated, disclosed | Exact prompt universe |
| Topic | Exact prompt-history filter | Exact prompt cohort | Not recalculated, disclosed | Exact prompt universe |
| Prompt | Exact prompt-history filter | Exact prompt cohort | Not recalculated, disclosed | Exact prompt universe |
| Owned domain | Exact domain filter | Citation cohort for that domain | Exact selected owned domain rank | Citation and relevant-article details for that domain |

## Chart registry

| Section | Chart or card | Exact source and calculation | Status | Required independent test |
| --- | --- | --- | --- | --- |
| How is our content performing? | Project citations | Selected history rows. Courier and Heartland retain confirmed project URLs only. | Filter and source audit passed | Sum the visible period/domain rows and reconcile to the card. |
| How is our content performing? | Prompts reached | Distinct eligible prompts with a qualifying citation in the latest complete snapshot. | Crosswalk v1 loaded, numerical tie-out pending | Compare visible numerator and denominator to the reviewed prompt ledger. |
| How is our content performing? | Citation yield, 7/14/30 | Confirmed project citations divided by eligible project articles that completed the chosen window. | Crosswalk v1 loaded, milestone tie-out pending | Independently recompute article milestones from release dates and complete delivery dates. |
| How is our content performing? | On-topic citation share | Citations to direct topic matches divided by citations from eligible project articles in the same window. | Crosswalk v1 loaded, numerical tie-out pending | Recompute from reviewed article and prompt mappings only. |
| How is our content performing? | Time to first citation | Median complete-calendar days from publication to first qualifying project citation. | Crosswalk v1 loaded, date-basis tie-out pending | Recalculate from article milestone rows. |
| How is our content performing? | Articles cited within window | Eligible project articles cited at least once by the selected milestone divided by eligible project articles. | Crosswalk v1 loaded, numerical tie-out pending | Recalculate from article milestone rows. |
| How is our content performing? | Cost per project article | Commitment divided by intended project-article commitment, with project spend prorated to delivered confirmed articles. | Awaiting registry reconciliation | Tie to the confirmed publisher roster and declared commitments. |
| How is our content performing? | Five-dimension answer-quality trend | Scores for the same filtered prompt-provider cohort when the selected owned-domain group is cited, displayed across complete score dates. | Filter audit pending | Compare point values and pp deltas to full score rows under the same prompt set. |
| How is our content performing? | Google Search visibility | Search Console impressions, clicks, and CTR for selected AEO domains and dates. | Source audit pending | Reconcile to the current Search Console release and exclude unreported dates. |
| Where is it showing up? | Citation frequency by owned domain | Daily prompt-history citations under the selected scope, or full reconciled history when no prompt scope is selected. | Source and filter audit passed | Compare unfiltered history to the domain-history asset; test one race and one prompt against raw owned events. |
| Where is it showing up? | Cited URLs | Selected-history citations grouped by canonical domain and URL. | Source and filter audit passed | Sum URL rows back to citation-frequency total under the same filters. |
| Where is it showing up? | URL to prompt/provider drilldown | Latest complete citation drilldown, limited to the selected prompt universe and URL. | Filter audit passed | Sum displayed prompt-provider records to the selected URL's latest-snapshot count. |
| Where is it showing up? | Peer category rank | Latest complete source-cited domain rank within Local/Regional News, National News, or Blogs. | Source audit passed for all, workstream, and race | Verify every owned row against its emitted leaderboard. Withhold a race rank without an observed peer universe. |
| Where are there still gaps? | Candidate coverage portfolio | Per candidate, reached prompts out of monitored prompts and count of zero-coverage topic groups. | Crosswalk v1 loaded, numerical tie-out pending | Recompute from reviewed prompt ledger and confirmed project citation links. |
| Where are there still gaps? | Priority candidate-topic queue | Zero/low reach cells sorted by reach, candidate, and diagnosis. | Crosswalk v1 loaded, numerical tie-out pending | Recompute diagnosis from reviewed article-to-topic and prompt-to-topic maps. |
| Where are there still gaps? | Candidate by topic heatmap | Reached prompts divided by monitored prompts for each candidate-topic cell. | Crosswalk v1 loaded, numerical tie-out pending | Recompute every displayed cell from reviewed prompt mappings. |
| Where are there still gaps? | Prompt and relevant-article drilldown | Actual mapped prompts, observed citations, and direct/broader relevant articles. | Crosswalk v1 loaded, link-level tie-out pending | Validate displayed mappings against individual reviewed records. |

## Peer-ranking release v4 validation

- 3,849 owned-domain rank rows and 289 category leaderboards passed row-by-row rank, citation, and population checks.
- The chart reads prompt-level history for citation frequency and URL detail. Ten legacy Heartland citations without a prompt ID remain only in unfiltered totals, preventing an inaccurate association with any individual prompt.
- Candidate, topic, and prompt filters are intentionally disclosed as not changing peer rank until a dedicated peer prompt-domain artifact exists. Race filter is exact where measured.

## Crosswalk release v5 validation

- The v5 asset uses the versioned record-level crosswalk ledger: 2,610 reviewed prompts and 660 reviewed project articles.
- Its 22,050 compatibility links passed a candidate and race-scope audit: zero AEO links cross a named candidate boundary, and zero partner links cross a declared race boundary.
- Crosswalk-dependent visuals are live with the reviewed mappings. Their independent numerical tie-outs, along with milestone, quality-trend, and Search Console checks, remain in the work order below.

## Remaining work order

1. Complete the article-by-article and prompt-by-prompt crosswalk ledgers, including rationale, confidence, and unresolved ambiguity.
2. Rebuild and validate crosswalk-dependent coverage and on-topic metrics from the reviewed ledgers.
3. Audit every remaining performance and Search Console metric using the required tests above.
4. Add an exact prompt-level peer-ranking artifact if the retained raw partitions support a complete peer-domain universe for each prompt.
5. Update this registry with a pass date, source release, and any retained limitation for every row before calling the redesign complete.
