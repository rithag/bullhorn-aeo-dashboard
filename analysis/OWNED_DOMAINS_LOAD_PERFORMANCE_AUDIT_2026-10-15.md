# Owned Domains Load-Performance Audit

## Problem found

Opening an Owned Domains tab previously loaded two unnecessarily large browser assets:

- the 56,232,424-byte Owned Domains release; and
- the full 282 MB score aggregate, solely to draw the five-dimension answer-quality chart.

The latter parses roughly 1.8 million score rows in the browser even though the chart needs only the cited prompt-provider cohort.

## Version 10 release design

- **Main release:** 17,208,635 bytes. It contains all default portfolio charts plus a dictionary-encoded quality cohort.
- **Deferred detail release:** 44,125,835 bytes. It contains only prompt-level citation history and literal-prompt peer ranks. It loads only after a user narrows to a workstream, race, candidate, topic, or literal prompt.
- **Quality cohort:** 3,180 cited prompt-provider pairs and 87,927 day/prompt/provider aggregate rows. It exactly reproduces the five displayed dimensions without downloading the full score aggregate.

## Validation

- The release audit validates both split assets together and confirms 9,768 citation-history rows, 66,880 prompt-history rows, 7,491 latest-drilldown rows, 1,108 workstream rows, 7,749 coverage rows, 14,108 reviewed article-prompt links, 289 category leaderboards, and 5,770 literal-prompt leaderboards.
- The quality-cohort audit checks 48 all-domain and individual-domain cohorts covering all 3,180 cited prompt-provider pairs. No cited pair is missing from the compact cohort.
- The compact cohort was independently compared row-for-row with the source score aggregate before release.

## User-visible effect

The default Owned Domains tab no longer downloads the full score aggregate and has a 69.4% smaller main release. Filter-specific drilldowns retain the same data and load their additional detail only when requested.
