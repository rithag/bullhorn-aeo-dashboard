# Owned Domains citation refresh audit — October 20, 2026

## Scope

This release refreshes citation-backed Owned Domains reporting through the latest complete
Evertune Sources-URL snapshot, **October 16, 2026**. It does not re-run Share of Voice.

The underlying score release still ends on October 11. Accordingly, the Answer Quality Where
Cited view uses the October 16 cited cohort but displays score observations only through October
11. The dashboard labels that difference rather than treating October 12–16 as zeroes or missing
score failures.

Share of Voice remains the previously audited October 11 observed-answer measure, because raw
full prompt responses have not been delivered after that date. Its score provenance matches the
retained score release; it is intentionally allowed to remain visible after a later citation-only
refresh, and its own date remains explicit in the interface.

## Immutable source releases

- Citation release: `citation-releases/refresh-oct12-oct16-20261020-v1/`
  - Manifest generation: `1792513555363885`
  - Manifest SHA-256: `3e7fdfd84582ef1246a511c56dfd97ffa0d5f95aa0e0b1ba17e05c82fd64776b`
  - Latest complete snapshot: October 16
  - October 12–16 are all declared complete; 108 race partitions are present.
- Citation-detail release: `citation-detail-releases/refresh-oct12-oct16-20261020-v1/`
  - Manifest generation: `1792515312108738`
  - Manifest SHA-256: `70ee2fe67dbc9f5f3c0c62b47cc64337c16ef666095dffbe8313167414928049`
  - 19,533,058 raw rows, 5,930,840 domain rows, 256 deterministic domain-detail shards.
- Score release retained: `score-releases/refresh-sep28-oct11-20261014-v2/`
  - Manifest generation: `1791973698709555`
  - Manifest SHA-256: `81050fe9c4d233ceb0fcc7952a4b1c3aca501f8f6e1f4f68eecade44d9d8fb7f`
- Share of Voice retained: `owned-voice-releases/observed-oct11-20261018-v1/`
  - Observed-answer date: October 11
  - Status: `MEASURED_ESTIMATE_OBSERVED_CITED_ANSWERS`

## Owned Domains release

`owned-domain-releases/owned-domains-2026-10-20-v20-rankfix/`

- Compact release: `owned_domains_release.json` — 13,381,063 bytes
- URL/prompt detail: `owned_domains_detail.json` — 51,223,513 bytes
- Answer-quality cohort: `owned_domains_quality.json` — 6,649,154 bytes
- The release contains 701 tracked pages: 627 AEO Sites, 41 Courier, 8 Heartland Signal, and
  25 tracked social posts.
- It contains 940,046 citation-history appearances. The citation-history and citation-prompt-
  history totals reconcile exactly.
- The quality cohort contains 114,116 score rows, with observed score dates from August 31 through
  October 11 only.

### Citation-ranking category correction

`localvoterguide.com` is classified as a **Reference Database** in the vendor citation-detail
release. An earlier dashboard release incorrectly compared it with Local/Regional News, leaving
its peer rank at zero despite observed citations. The source configuration and compact release now
use Reference Database consistently. At the October 16 WS2 snapshot, Local Voter Guide is #11 of
172 observed Reference Database domains with 2,764 citations; over the latest seven complete days,
it is #13 of 175 with 14,616 citations. All Courier and Heartland domains were also checked against
their source-detail category and correctly remain Local/Regional News; Policy Information Center
remains Reference Database.

## Crosswalk integrity

The reviewed article crosswalk now has 676 unique rows and exactly matches the 676 current
non-social project-page records that require review. Sixteen newly published FAQ/narrative
experiment pages were read directly and added with explicit, high-confidence topic mappings;
their mappings are not inferred from titles alone. The resulting release has 14,674 retained
article-to-prompt links: 12,635 direct-topic and 2,039 parent-topic links.

## Tie-outs completed

1. The three Owned Domains objects were downloaded from their final GCS paths and their release
   contract, object inventory, dates, and source-release identities were verified.
2. Citation history and prompt-history totals reconcile to 940,046 final-answer source
   appearances.
3. The latest-snapshot drilldown totals 92,735 appearances.
4. The cross-race detail source release matches the citation release and contains all 108 races,
   ten source categories, six prompt-type cubes, and 256 domain shards.
5. Peer-ranking output contains 498 leaderboards / 3,892 summary rows and 8,604 literal-prompt
   leaderboards / 88,069 rows.
6. Every coverage-map candidate-topic article reference resolves to a reviewed project-page row.
7. Browser JavaScript parsed cleanly with a current JavaScript grammar; whitespace checks pass.

## Dashboard behavior changed in this deployment

- Citation Breakout and Owned Domains consume the October 16 citation and citation-detail
  releases.
- Answer Quality Where Cited remains correctly bounded by October 11 scoring and says so in the
  interface.
- Share of Voice remains loaded and explicitly dated October 11, without a recalculation or an
  unsupported inference from later citation-only data.
