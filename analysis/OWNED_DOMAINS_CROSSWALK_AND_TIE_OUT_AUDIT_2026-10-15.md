# Owned Domains crosswalk and chart tie-out audit

**Release audited:** `owned-domains-2026-10-15-v8`  
**Latest complete citation snapshot:** October 11, 2026  
**Audit status:** passed

## Article-by-article crosswalk review

- Read all **660** project articles: **611 AEO Sites** markdown sources, **41 Courier** confirmed-project URLs, and **8 Heartland Signal** confirmed-project URLs.
- For every article, checked its title, declared topic tags, headings or FAQ headings, full article text, and candidate or race scope. The row-level evidence and decision ledger is in `owned_domains_crosswalk_review_2026-10-15/article_precision_audit_v3/article_precision_audit_v3.csv`.
- All 49 confirmed publisher URLs returned successfully. No source-read exceptions remain.
- Kept **640** mappings without change and narrowed **20** mappings where an assigned topic was not substantively supported by the article’s structure and text. The removed mappings were mainly incidental references to infrastructure, jobs, affordability, accountability, or ballot information.
- Candidate-specific direct links require both a shared controlled topic and an exact candidate or confirmed race scope. AEO candidate profiles may be parent-topic links only for that same candidate. Unscoped local explainers remain visible in citation-frequency reporting but cannot fill a candidate-specific coverage gap.
- Article-performance windows ignore source events dated before an article’s verified first-live date. Two AEO URLs had such historical aliases; the citation-history view retains the observed source events, while time-to-first-citation and 7/14/30-day article metrics begin at the verified publication date.

## Release-wide chart reconciliation

The release audit recomputes every compact chart input from its retained raw owned-event ledger. Its machine-readable results are in `owned_domains_crosswalk_review_2026-10-15/release_chart_tie_out_v8.json`.

| Input checked | Result |
| --- | --- |
| In-scope monitored prompts | 2,610 |
| Audited articles | 660 |
| In-scope owned source events | 104,920 |
| Citation history | 9,768 rows, 687,619 source appearances |
| Prompt-level citation history | 66,880 rows, totals exactly match citation history |
| Latest citation drilldown | 7,491 rows, 62,812 source appearances |
| Reviewed article-prompt links | 14,136: 12,105 direct and 2,031 parent-topic |
| Candidate-topic coverage cells | 7,749, all recalculated from the reviewed links |
| Article milestones | 660 articles, all 7/14/30-day windows reconciled |
| Category peer rankings | 289 leaderboards and 3,849 owned-domain rank rows |
| Exact-prompt peer rankings | 5,770 leaderboards and 87,944 owned-domain rank rows |

All citation-history, prompt-history, workstream-history, latest-drilldown, coverage, article-window, ranking, and candidate-topic references tie exactly to the release evidence. Workstream history now uses prompt IDs rather than mutable race display labels, so it covers the same in-scope citation population as the portfolio history.

## Answer-quality cohort reconciliation

The quality trend selects exact prompt-provider pairs from the latest cited cohort, then calculates the five dimensions from the immutable score aggregate. The domain-level and all-domain cohort audit is in `owned_domains_crosswalk_review_2026-10-15/quality_cohort_tie_out_v8.json`.

- **48** all-domain and individual-domain cohorts were checked.
- **3,180** cited prompt-provider pairs were checked.
- Every cited pair resolves to at least one score row.
- AI Mode is normalized to `ai_mode`, matching the score-release provider key. It is now included in the quality trend.
- Accuracy can be shown as **not measured** for a day or very narrow cohort when no eligible accuracy sample exists. That is an intentional data state, not a zero score. Visibility, favorability, depth, narrative, and accuracy otherwise use the same calculation and refusal treatment as the rest of the dashboard.

## Scope rule

All Owned Domains headline, frequency, URL, prompt-reach, coverage, and quality metrics now use the same in-scope prompt roster. Opponent-only prompts and other excluded prompts do not contribute citations to the portfolio KPIs.
