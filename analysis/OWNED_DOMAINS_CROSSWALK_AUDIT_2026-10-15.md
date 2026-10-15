# Owned Domains Crosswalk Audit

## Release reviewed

- Published dashboard release before this remediation: `owned-domains-2026-10-15-v6`.
- Corrected crosswalk prepared for the next release: `semantic_audit_v2`, with 2,610 prompt records and 660 project-article records individually retained in review CSVs.
- Citation snapshot used for reach and peer ranking: October 11, 2026, the latest complete delivery.
- In-scope monitored prompts: 2,610 across WS1, WS2, WS3, and CO-04. LA Mayor and other excluded workstreams are not in this release.
- Topic groups: 16 controlled labels.

## What the corrected crosswalk does

The published release uses a reproducible deterministic mapping rather than a hand-created prompt-by-article spreadsheet:

1. Each prompt receives a controlled topic group from its literal wording first. Prompt metadata can order two issues that are both explicit, or resolve a genuinely implicit issue, but cannot introduce an unrelated issue.
2. An article is eligible for a prompt only when its candidate or race scope can serve that prompt.
3. Matching topic labels create a **direct** match. A broader article about the same candidate or race creates a **parent-topic** match. All other pairs are excluded.
4. The dashboard shows direct and broader articles in the coverage drilldown, while on-topic citation share uses only direct matches.

This is intentionally conservative: an unmapped relationship is not silently called on-topic.

## Semantic remediation completed

The first review asset had a real precision defect: raw substring matching could treat words such as “different” as “rent,” and generic profile or head-to-head prompts could inherit a topic from source metadata. The corrected pass:

- Reclassified **299 primary prompt topics** after individually reevaluating the literal questions.
- Corrected all **92** generic “What is different between these candidates?” prompts and **66** general “What policies does this candidate support?” prompts to **Candidate information & qualifications** rather than an unrelated policy group.
- Uses word and phrase boundaries, so a substring cannot create a topic match.
- Retains every explicitly named subject on genuinely multi-issue prompts, such as courts plus criminal justice or roads plus flood management. A matching seed may establish only their display order.
- Added literal variants for health care coverage, ICE, child care, internet access, storms, household costs, and related common phrasing. The final pass has no unresolved implicit topic assignments.
- Re-reviewed all 660 articles from title, declared tags, headings, and FAQ questions. Body excerpts cannot broaden a mapping merely because a closing paragraph mentions another favorable issue.

The corrected records retain row-level rationale, confidence, semantic basis, and version (`v2`). The build accepts this new crosswalk only when its prompt and article IDs exactly match the monitored and project inventories.

## Coverage-quality checks

| Check | Result |
| --- | --- |
| Prompt universe | 2,610 in scope: WS1 810, WS2 1,099, WS3 620, CO-04 81 |
| AEO Sites inventory | 611 published, tracked articles |
| Confirmed project inventory | Courier 41 URLs; Heartland Signal 8 linked URLs |
| Latest-snapshot coverage cells | 7,749 across the five owned-domain tabs |
| Reached cells | 1,785 |
| Relevant article, not cited | 2,815 |
| No deterministic relevant article | 1,430 |
| Pending diagnosis | 1,719, limited to Local Voter Guide and Forward Majority because no confirmed project-URL roster has been supplied |

## Assumptions retained in the asset

- Courier and Heartland Signal performance and coverage metrics use only confirmed project URLs and URL aliases. Their broader editorial output is retained only in peer-ranking context.
- Local Voter Guide is scoped to WS2 and Forward Majority to WS3 based on their known workstream roles. They should receive a project URL roster before article-level yield and article-gap diagnoses are enabled.
- The raw event ledger remains outside the browser asset. The compact dashboard asset retains the evidence needed for visible totals and drilldowns without exposing the full raw response-source corpus.
- Mapping records are labeled `individual_literal_review_v2` or `individual_structural_review_v2` in the local audit artifact. Future edits should be stored as explicit overrides rather than changing the algorithm silently.

## Recommended next review pass

Prioritize human review of the largest candidate-topic gaps labeled **No mapped article yet**, then review high-value **Relevant article exists but was not cited** cells. That sequence separates true content gaps from a citation, format, indexing, or authority problem without requiring a manual review of every article-prompt pair.
