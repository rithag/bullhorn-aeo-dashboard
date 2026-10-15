# Owned Domains crosswalk and chart tie-out audit

**Release audited:** `owned-domains-2026-10-15-v9`  
**Latest complete citation snapshot:** October 11, 2026  
**Audit status:** passed

## Article-by-article crosswalk review

- Read all **660** project articles: **611 AEO Sites** markdown sources, **41 Courier** confirmed-project URLs, and **8 Heartland Signal** confirmed-project URLs.
- For every article, checked its title, declared topic tags, headings or FAQ headings, full article text, and candidate or race scope. The row-level evidence and decision ledger is in `owned_domains_crosswalk_review_2026-10-15/article_precision_audit_v3/article_precision_audit_v3.csv`.
- All 49 confirmed publisher URLs returned successfully. No source-read exceptions remain.
- Kept **640** mappings without change and narrowed **20** mappings where an assigned topic was not substantively supported by the article’s structure and text. The removed mappings were mainly incidental references to infrastructure, jobs, affordability, accountability, or ballot information.
- Candidate-specific direct links require both a shared controlled topic and an exact candidate or confirmed race scope. AEO candidate profiles may be parent-topic links only for that same candidate. Unscoped local explainers remain visible in citation-frequency reporting but cannot fill a candidate-specific coverage gap.
- Article-performance windows ignore source events dated before an article’s verified first-live date. Two AEO URLs had such historical aliases; the citation-history view retains the observed source events, while time-to-first-citation and 7/14/30-day article metrics begin at the verified publication date.

## Independent second pass

- A separate v4 audit reread all **660** sources rather than reusing the v3 decision. It wrote **11,220** per-article/topic evidence records, including title terms, tags, headings, corroborating body sentences, and a row-level disposition. The evidence ledger is `owned_domains_crosswalk_review_2026-10-15/article_precision_audit_v4/article_topic_evidence_v4.csv`.
- The second pass retained **1,880** directly supported article-topic assignments, removed **20** further secondary assignments, and found **no unreadable partner source or unresolved candidate/race scope**.
- A structured retention ledger preserves valid coverage that appears in a dedicated FAQ answer, paragraph, bullet, or office-specific description rather than an exact heading. It avoids the converse mistake of allowing a tag or a generic mention to establish coverage.
- The audit records **768** structurally visible secondary-subject observations for later content planning. They do not enter on-topic share or prompt-coverage KPIs unless added through a separately reviewed crosswalk expansion.
- Twenty articles now have an explicit **No direct topic** decision. They remain in citations, rankings, URL drilldowns, and article-performance metrics, but cannot make an issue gap look covered.

## Release-wide chart reconciliation

The release audit recomputes every compact chart input from its retained raw owned-event ledger. Its machine-readable results are in `owned_domains_crosswalk_review_2026-10-15/release_chart_tie_out_v9.json`.

| Input checked | Result |
| --- | --- |
| In-scope monitored prompts | 2,610 |
| Audited articles | 660 |
| In-scope owned source events | 104,920 |
| Citation history | 9,768 rows, 687,619 source appearances |
| Prompt-level citation history | 66,880 rows, totals exactly match citation history |
| Latest citation drilldown | 7,491 rows, 62,812 source appearances |
| Reviewed article-prompt links | 14,108: 12,076 direct and 2,032 parent-topic |
| Candidate-topic coverage cells | 7,749, all recalculated from the reviewed links |
| Article milestones | 660 articles, all 7/14/30-day windows reconciled |
| Category peer rankings | 289 leaderboards and 3,849 owned-domain rank rows |
| Exact-prompt peer rankings | 5,770 leaderboards and 87,944 owned-domain rank rows |

All citation-history, prompt-history, workstream-history, latest-drilldown, coverage, article-window, ranking, and candidate-topic references tie exactly to the release evidence. Workstream history now uses prompt IDs rather than mutable race display labels, so it covers the same in-scope citation population as the portfolio history.

## Answer-quality cohort reconciliation

The quality trend selects exact prompt-provider pairs from the latest cited cohort, then calculates the five dimensions from the immutable score aggregate. The domain-level and all-domain cohort audit is in `owned_domains_crosswalk_review_2026-10-15/quality_cohort_tie_out_v9.json`.

- **48** all-domain and individual-domain cohorts were checked.
- **3,180** cited prompt-provider pairs were checked.
- Every cited pair resolves to at least one score row.
- AI Mode is normalized to `ai_mode`, matching the score-release provider key. It is now included in the quality trend.
- Accuracy can be shown as **not measured** for a day or very narrow cohort when no eligible accuracy sample exists. That is an intentional data state, not a zero score. Visibility, favorability, depth, narrative, and accuracy otherwise use the same calculation and refusal treatment as the rest of the dashboard.

## Google Search Console scope reconciliation

- The Site Analytics release contains the same **611 AEO articles** as the Owned Domains release.
- All **3,456** article references in the reviewed candidate-topic index resolve to the Site Analytics article inventory.
- The unscoped Search Console cards use 583 unique site-date observations. A scoped view uses 2,810 unique article-date observations only for reviewed, relevant articles. Neither table has duplicate entity-date keys.
- The corresponding machine-readable check is `owned_domains_crosswalk_review_2026-10-15/gsc_scope_tie_out_v8.json`.

## Scope rule

All Owned Domains headline, frequency, URL, prompt-reach, coverage, and quality metrics now use the same in-scope prompt roster. Opponent-only prompts and other excluded prompts do not contribute citations to the portfolio KPIs.
