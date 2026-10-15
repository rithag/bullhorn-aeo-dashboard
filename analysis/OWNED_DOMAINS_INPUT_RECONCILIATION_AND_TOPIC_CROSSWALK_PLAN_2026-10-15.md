# Owned Domains input reconciliation and topic-crosswalk plan

**Updated October 15, 2026.** This document converts the supplied publisher lists and the AEO
repository history into usable dashboard inputs, identifies the remaining gaps, and defines the
topic-crosswalk work required before on-topic and coverage KPIs go live.

## Reconciled publisher inputs

### Courier

The supplied Courier workbook contains **41 dated, hyperlinked rows**. Its original hyperlinks are
the source-of-truth project links. All resolve successfully to the 41 publisher canonical pages in
[`owned_domain_project_article_registry_2026-10-15.csv`](owned_domain_project_article_registry_2026-10-15.csv).
Four original links redirect to a newer publisher slug; those source-to-canonical aliases are
preserved in [`owned_domain_project_url_aliases_2026-10-15.csv`](owned_domain_project_url_aliases_2026-10-15.csv)
so citation matching can recognize either form.

The list covers ten WS1 races and contains **43 race assignments**, because two articles serve two
races. It is sufficient to calculate Courier citation frequency, prompt reach, URL drilldowns,
time to first observed citation, and topic-seeded analysis for these articles.

The agreed final-state planning structure is 6 articles each for IA-01, IA-03, PA-07, and PA-08
plus 5 each for the other six WS1 districts: **54 intended placements**. Courier has published 41
of those placements so far and will publish more. Use a commitment-based allocation, not the
misleading $120,000 divided only by currently live pages:

* **Planned-slot cost:** $120,000 ÷ 54 = **$2,222.22**.
* **Allocated cost of the 41 published pages:** 41 × $2,222.22 = **$91,111.11**.
* **Unallocated commitment reserve:** 13 × $2,222.22 = **$28,888.89**.
* **Delivery progress:** **41 of 54** intended pages, or **75.9%**.

This allocation is a budget-progress view, not a claim that Courier has invoiced $2,222.22 for
each individual page. Citation yield, speed, and answer-quality measures may be shown for the
identified 41-page published cohort once an article clears its milestone eligibility window; label
them as the **current published cohort**, not a final-program result.

### Heartland Signal

The supplied sheet has 16 rows, but only **8 include a live URL**. Per the requested rule, the 8
placeholder rows marked `In Edits`, `To be written`, or `Assigned` are excluded. The 8 linked pages
were live-checked and are in the same registry with publisher timestamps and content-derived topic
seeds.

The user reports a $50,000 commitment for at least **21** Heartland articles. The supplied live
list accounts for 8, with at least 13 still to come. Use the minimum committed end state as the
current allocation basis:

* **Minimum-plan slot cost:** $50,000 ÷ 21 = **$2,380.95**.
* **Allocated cost of the 8 published pages:** 8 × $2,380.95 = **$19,047.62**.
* **Minimum-plan commitment reserve:** 13 × $2,380.95 = **$30,952.38**.
* **Delivery progress:** **8 of at least 21** pages, or **at least 38.1%** of the stated minimum.

If Heartland's accepted final count rises above 21 under the same $50,000 commitment, rerun the
allocation against that final count and the per-page amount will fall. As with Courier, performance
metrics for the linked pages are valid current-cohort measures only after milestone eligibility;
they are not final-program figures.

### What is still needed from the partners

Only three fields are needed to close the final partner-project denominator and replace the
in-progress allocation basis:

1. the final project-only URL list, including articles published after October 14;
2. disposition for every contracted but missing placement: future, cancelled, replaced, or not part
   of the project; and
3. intended race and topic for any article whose scope is not evident from its page.

No additional list is required to launch peer citation ranking. That KPI ranks owned domains from
observed citation data and does not need a project-content denominator.

## AEO Sites: derived release dates and their limits

The current AEO inventory has 611 tracked articles. The active first-live ledger has 252 verified
records. The remaining 359 divide cleanly into:

| Cohort | Count | Best available release evidence | How to use it now |
|---|---:|---|---|
| Four Courier-comparison counterparts | 4 | `9075b72`, committed October 6 at 6:00 PM Pacific; prior record documents live HTTP verification after propagation. | Treat October 6 as a derived release day. The present citation release ends October 11, so it does not cover a complete seven-day post-release observation window. |
| Audited October content release | 355 | `c222b6b`, committed to `main` October 9 at 1:48 AM Eastern. The site configuration deploys main-branch changes through Netlify for linked sites. | Use October 9 as a conservative, commit-derived release day in inventory and future eligibility queues. It is not a substitute for a recorded deployment/first-live timestamp. |

The October 9 cohort is **not yet seven calendar days old until October 16**, and the current
citation release only runs through October 11. It must not enter a seven-day KPI in this release.
The October 6 cohort is older than seven days by October 15, but it also lacks post-October-11
citation observations in the currently pinned release. It must wait for the next complete citation
delivery as well.

The recommended operating status is `release_day_derived`, not `first_live_verified`. The dashboard
can show these articles in inventory and peer-citation views immediately. It should automatically
promote them to age-window eligibility only when both conditions are true: a complete seven-day
interval has elapsed after the derived or verified release time, and a complete citation snapshot at
or after that threshold is available. A later Netlify deployment receipt can upgrade the date basis
without rewriting historical citations.

## Inputs we can derive ourselves

### Owned-domain registry

Build this directly from `content/sites.yaml`, the existing partner-domain configuration, and the
canonical/alias rules already used by the citation normalizer. The registry will include group,
domain, aliases, AEO site type, peer category, project eligibility, and active/retired status.
No user input is needed.

### Peer category crosswalk

Build this from the version-pinned citation domain-category mapping, with AEO taxonomy mapped as
follows: state/local to Local/Regional News, blog to Blogs, and national to National News. The
release builder will retain both the raw provider label and the display label. No manual list of
external domains is required for the first observed-domain leaderboard.

If a future view compares publisher portfolios rather than individual domains, it will additionally
need a curated external publisher-ownership registry. That is optional and should not block the
requested category bars or individual-domain rankings.

### Prompt execution, refusals, citations, and scores

Yes, we can build these joins ourselves. The needed fields already exist across the scoring release,
prompt roster, refusal results, and citation detail release. The build will use one pinned release
identifier, join on the prompt/race/provider/run keys available at each grain, and retain the
completion and refusal state rather than filling missing observations with zero.

### Delivery completeness without additional vendor data

Build a local completeness manifest from the objects already delivered:

1. enumerate expected race × provider × source-type partitions from the sealed scoring/citation
   roster;
2. count delivered objects, rows, and source-count totals by report date;
3. compare each date with the expected partition set and with the modal complete cohort for that
   release;
4. mark each date complete, partial, pending, or unknown with a reason and affected partitions;
5. publish only complete dates by default, preserving an explicit diagnostic view for excluded dates.

This will not manufacture missing vendor data. It does prevent a partial day from being plotted as a
zero and makes any ambiguity visible in the dashboard release manifest.

## Recommended 7/14/30-day method

Use a **milestone-snapshot method**, not a cumulative sum of daily source counts. Evertune's
`source_count` rows reflect overlapping rolling samples, so summing consecutive dates double-counts
sampled observations.

For each article and each age window:

1. start the clock from `first_live_verified` when available or `release_day_derived` when clearly
   labelled;
2. find the first complete citation snapshot at or after the article reaches 7, 14, or 30 days;
3. record the article's final-answer citation intensity, prompts reached, cited URLs, and on-topic
share in that one milestone snapshot; and
4. include zero-cited eligible articles in the denominator.

Name the metric **7-day citation yield at milestone**, rather than implying it is a cumulative count
of every citation earned during seven days. This is comparable across publication cohorts and does
not overstate repeated rolling observations. `Time to first citation` should likewise mean time to
the first *observed complete snapshot* with a citation, with the observation cadence noted.

The dashboard can later add a truly cumulative metric only if it receives non-overlapping response
events or an explicit unique-response identifier that permits defensible deduplication. Neither is
needed for the first KPI release.

## Topic crosswalk: detailed plan

The topic crosswalk is the material open work. It is necessary for on-topic citation share, topic
coverage, and the distinction between "no relevant article" and "article exists but was not cited."
It should be built as a versioned mapping system, not a one-time hand-match of every article to every
prompt.

### 1. Define the canonical topic model

Create a controlled hierarchy with three independent axes:

| Axis | Examples | Why it is separate |
|---|---|---|
| Policy topic | affordability, health care, data centers, immigration, public safety, election security | Determines substantive relevance. |
| Subtopic / claim family | utility bills, tariffs, ACA credits, SNAP, water use, stock trading | Prevents an overly broad match from being called direct coverage. |
| Question intent | candidate profile, candidate position, comparison, ballot/voting information, blind directional question, rebuttal | Lets a voter guide support broad comparison questions without pretending it directly answers a narrow policy prompt. |

Retain race, candidate, workstream, format, and target/opponent scope as separate dimensions. A
candidate guide can cover several issues and candidates; it should not be reduced to a single tag.

### 2. Create atomic source records

Build two source tables, each versioned to the release:

* **Prompt records:** prompt ID, literal prompt text, race/workstream, named candidate(s), provider
  applicability, existing template metadata, primary topic, secondary topics, subtopic, and intent.
* **Article records:** canonical URL, owner group/domain, first-live basis/time, race/candidate
  scope, format, existing tags, extracted headings/FAQ questions, primary and secondary topics,
  subtopics, and intended coverage designation.

For AEO articles, frontmatter, candidate tags, topic tags, headings, FAQ questions, and canonical
body text seed the record. For Courier and Heartland, the reconciled registry, page headings, and
article text seed it. The topic seeds in the new registry are reviewable starting points, not final
claims of relevance.

### 3. Seed mappings programmatically, then review every atomic record

Use deterministic rules first: exact prompt-topic labels, explicit article tags, named candidate and
race overlap, heading/FAQ text, and a maintained synonym dictionary. Produce one of four relation
states for every article-topic and prompt-topic record:

* `direct` for a candidate/race and primary topic match;
* `parent-topic` for a defensible broader match, such as immigration supporting a narrower border
  question;
* `not-relevant`; or
* `needs-review` for ambiguous scope, cross-race articles, or mixed-topic guides.

Do not create an article × prompt Cartesian table. Map atomic prompts and atomic articles to the
same taxonomy, then calculate compatibility from their fields. This makes 611 articles and the
prompt library manageable and auditable.

### 4. Complete an article-by-article and prompt-by-prompt review ledger

The deterministic output is only a seed. Review and record a decision for **every** atomic prompt
and **every** article before presenting crosswalk-dependent metrics as final. Each row must retain
the literal item, the proposed primary and secondary topics, the decision, rationale, confidence,
and any unresolved ambiguity. Do not substitute a review of templates, aggregate labels, or only
the ambiguous records for this ledger.

The review should give heightened scrutiny to every cited URL, zero-coverage candidate/topic cell,
multi-topic voter guide, cross-race article, and article whose tags conflict with its headings or
FAQ text. It explicitly tests for issue bleed, such as transportation language causing a water
prompt to be classified as directly covered. The resulting atomic records, not an article × prompt
Cartesian spreadsheet, determine compatibility.

### 5. Publish coverage and on-topic rules

Use the mapping in two different ways:

* **Prompt coverage:** an owned citation reaches a prompt if a project-eligible article was cited
  on that successfully checked prompt. Article relevance is shown as direct, parent-topic, or
  unclassified.
* **On-topic citation share:** numerator is direct citations, with parent-topic citations shown
  separately rather than silently added. Denominator is all final-answer citations to eligible
  project articles in the same milestone cohort.

An uncited but relevant article is a discoverability/authority/format issue. A prompt with no
relevant article is a content gap. A prompt with no complete check is not measured.

### 6. QA and change control

Version the taxonomy, synonym dictionary, mapping algorithm, manual overrides, and review decisions.
Require a before/after diff for any taxonomy revision. Acceptance checks include exact topic totals,
article-by-article and prompt-by-prompt review completion, no cross-race false matches, and a direct
inspection of every mapping used in a published gap recommendation.

## Crosswalk v1: October 15 record-level review

The first versioned review is now stored in
[`owned_domains_crosswalk_review_2026-10-15/first_pass_v1`](owned_domains_crosswalk_review_2026-10-15/first_pass_v1).
It contains a decision, rationale, confidence value, and retained literal evidence for **every
one of the 2,610 in-scope prompts and every one of the 660 project articles**: 611 AEO Sites
articles, 41 Courier project articles, and 8 Heartland project articles. The builder rejects a
release if either ledger no longer exactly matches its corresponding prompt or article roster.

The review uses the article's intentional structure only: title, published topic tags, headings,
and FAQ questions. A bounded body excerpt remains in the ledger for inspection, but cannot add a
topic by itself. This prevents incidental language in a closing paragraph from turning a water
article, for example, into transportation coverage. Courier and Heartland article assignments use
the supplied, confirmed-project publisher registry's article-level topic tags and race scope; no
general publisher editorial coverage enters project metrics.

The controlled topic model now includes: candidate information, ballot and voting, campaign
context, affordability, housing, jobs and economy, health care and personal freedom, public safety,
courts and justice, immigration, education, data centers, water and environment, energy and
utilities, infrastructure and local services, accountability, and foreign policy/war/national
security. This added final group keeps Iran-war coverage from being misclassified as generic
candidate information.

Two row-level acceptance checks passed before the v5 release was assembled:

1. Every reviewed prompt and article has at least one controlled topic.
2. Across **22,050** retained article-to-prompt compatibility links, no AEO article is credited to
   a prompt for a candidate it does not reference, and no Courier or Heartland article is credited
   outside its declared race scope.

The v1 review is deliberately conservative: a direct match requires a reviewed topic match plus
the candidate or declared race scope. A general candidate profile can appear as broader context for
the same candidate, but never as a direct answer to an unrelated policy prompt. Primary topics
drive the mutually exclusive coverage heatmap; retained secondary topics are available for the
drilldown and future taxonomy revisions.

## AEO direct-cost input

Exclude annual domain and hosting costs, and exclude the user's own editing time, as requested.
For AEO Sites, the dashboard's variable-cost formula is limited to:

`traceable research/drafting model charge + paid external research charge attributable to the article`.

The local execution history retains model-token usage receipts and can identify sessions that
worked on the content repository, but it does not contain an article-level billed-charge ledger or
the workspace credit/rate schedule. Token counts alone cannot be converted to dollars reliably:
Codex may use included allowance, credits, or a workspace-specific USD rate. Search/research use
also has no settled invoice ledger in the repository. The direct-cost field must therefore remain
**not measured**, never zero, until we capture the account's usage-and-billing export or a
workspace rate card and attach run/article attribution. This preserves the option to add a real
model-and-research cost later without mixing it with labor or fixed infrastructure.

The completed evidence review and smallest reliable completion path are recorded in
[`AEO_SITES_VARIABLE_COST_AUDIT_2026-10-15.md`](AEO_SITES_VARIABLE_COST_AUDIT_2026-10-15.md).

## Google Search Console

The current audited source is `gsc-refresh-20261015-v1`, created after a complete read-only OAuth
refresh. It covers all 37 AEO properties and a 611-article canonical URL inventory. The dashboard
keeps Google traffic separate from citation completeness: it shows site-level totals for an
unscoped portfolio view and reviewed article-level totals when a workstream, race, candidate,
topic, or prompt scope is selected. Future refreshes must retain property/date coverage and
canonicalize URLs against the article registry before publishing observed clicks and impressions.
