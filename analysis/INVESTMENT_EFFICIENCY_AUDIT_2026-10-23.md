# Investment efficiency audit — October 23, 2026

## Finding

The current Courier and Heartland Signal calculations are internally consistent and should not be
replaced with the earlier sub-$2 Courier result. That earlier result summed daily rolling citation
snapshots, so a citation that remained present on several days was counted several times. The
dashboard now measures one citation snapshot at the selected article-age milestone for each
eligible article and allocates cost to that exact same article cohort.

Formula:

`(commitment ÷ contracted article count) × milestone-eligible articles ÷ milestone citations`

## Current release tie-out

Source: `owned-domains-2026-10-23-v25-protected-costs`, citation data through October 20.

| Portfolio | Window | Eligible articles | Milestone citations | Allocated cost per citation |
| --- | ---: | ---: | ---: | ---: |
| Courier | 7 days | 40 | 6,340 | $14.02 |
| Courier | 14 days | 31 | 6,947 | $9.92 |
| Courier | 21 days | 19 | 2,158 | $19.57 |
| Courier | 30 days | 14 | 1,282 | $24.27 |
| Courier | Latest snapshot | 49 | 11,910 | $9.14 |
| Heartland Signal | 7 days | 8 | 1,012 | $18.82 |
| Heartland Signal | 14 days | 4 | 1 | $9,523.81 |
| Heartland Signal | 21 days | 3 | 1 | $7,142.86 |
| Heartland Signal | 30 days | 2 | 1 | $4,761.90 |
| Heartland Signal | Latest snapshot | 15 | 1,622 | $22.02 |

Heartland's mature-window values are unusually high but not a calculation defect: the articles
driving its recent citation growth had not yet completed those older milestone windows as of
October 20. They enter the 7-day and latest-snapshot cohorts, but not the 14/21/30-day cohorts.

## Release-over-release check

Courier's 14-day milestone citations rose from 3,837 in the October 16 release to 6,947 in the
October 20 release. Its audited 14-day cost per citation therefore fell from $13.32 to $9.92. The
apparent increase relative to the remembered sub-$2 figure is a methodology correction, not lost
citations.

## Access control

- The general Owned Domains release no longer contains commitment amounts, planned article
  counts, or cost configuration.
- Before secondary authorization, Courier and Heartland render only a **Protected analytics**
  card. No investment label or values are rendered.
- A purpose-bound, HttpOnly session cookie is required to fetch the protected cost basis.
- Partner-tab passwords cannot unlock the protected analytics card.
- `INVESTMENT_ANALYTICS_PASSWORD` can be configured separately; until then the existing internal
  Site Analytics password is used.
