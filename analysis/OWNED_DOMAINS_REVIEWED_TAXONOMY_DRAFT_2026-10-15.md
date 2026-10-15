# Owned Domains Reviewed Taxonomy Draft

## Purpose

This replaces the insufficient one-label keyword seed used by the initial dashboard release. It is a review framework, not a completed crosswalk. Every prompt and article must receive a row-level decision in the atomic ledger before these labels power final coverage or on-topic KPIs.

## Topic groups

| Key | Display label | Includes | Excludes |
| --- | --- | --- | --- |
| `candidate-information` | Candidate information, record & comparison | biography, qualifications, priorities, general policy overview, broad candidate comparisons | a specific policy question with a clearly named issue |
| `ballot-voting` | Ballot, voting & election administration | election date, ballot, registration, voter access, election security, election administration | a general candidate biography |
| `campaign-context` | Campaign context & public record | endorsements, party, fundraising, public criticisms, broad campaign narrative | substantiated issue-specific policy coverage |
| `affordability` | Affordability, taxes & household costs | prices, tariffs, tax policy, family budgets, property taxes, wages, consumer costs | housing, health-care, energy, or water questions with their own direct group |
| `housing` | Housing & homeownership | rent, housing supply, mortgages, first-time buyers, zoning, tenant protections | a broad affordability article with no housing evidence |
| `jobs-economy` | Jobs & local economy | jobs, workforce, small business, agriculture, local development, trade | household costs without an employment or economic-development component |
| `health-care` | Health care & personal freedom | coverage, hospitals, Medicaid, prescription drugs, mental health, abortion, reproductive care, LGBTQ health/civil-rights questions | a biography that merely mentions a health-care endorsement |
| `public-safety` | Public safety & emergency response | crime, policing, gun safety, fentanyl, emergency preparedness and response | judicial credentials without a public-safety claim |
| `courts-justice` | Courts, justice & judicial qualifications | judicial experience, bar ratings, cases, judicial independence, criminal-justice and sentencing questions for judicial races | ordinary candidate experience outside legal/judicial context |
| `immigration` | Immigration & border security | border, asylum, ICE cooperation, deportation, immigration enforcement | general law-enforcement questions with no immigration component |
| `education` | Education & schools | K-12, educators, school funding, higher education, career training, special education | workforce references without an education program or institution |
| `data-centers` | Data centers & technology | data-center development, AI facilities, technology development, data-center utility demand | general energy policy without a technology/data-center component |
| `water-environment` | Water, climate & environment | water supply and quality, drought, conservation, climate, parks, land protection | roads or grid questions that only mention environmental impacts in passing |
| `energy-utilities` | Energy, utilities & rates | electricity, power grid, ratepayers, utility bills, fuel costs, clean power | data-center policy unless the article substantively covers data centers |
| `infrastructure-services` | Infrastructure & local services | roads, bridges, transit, broadband, public works, county/city services, records processing | water or utility questions with more specific direct evidence |
| `accountability` | Ethics, accountability & public trust | ethics, corruption, conflicts, stock trading, transparency, government accountability | generic campaign criticism with no specific accountability claim |

## Review rules

1. **Prompts may have a primary and secondary topic.** A water-supply/data-center prompt has a primary direct topic determined by the literal question and a secondary topic that preserves its related issue. It is not collapsed solely because one keyword appears first.
2. **Articles may have multiple direct topics.** Candidate profiles and voter guides frequently contain separately headed policy sections. Assign a direct topic only when the article has a substantive section, FAQ answer, or comparable explicit text for that issue. A passing mention remains secondary or not relevant.
3. **Candidate scope and topic scope both matter.** A direct topical match requires the candidate or race to be in scope. A broad state guide may be a parent-topic match for a district question only where its content applies to that district or candidate.
4. **Format and intent are independent.** A voter guide can directly serve a ballot or broad comparison prompt and can also contain a direct policy section. A profile can directly serve a background prompt and may also serve a policy question if it contains an issue-specific section.
5. **No negative-coverage presumption.** A prompt about criticism, allegations, or attack lines is not automatically a coverage gap. The ledger must say whether a factual, affirmative, directly responsive article exists without treating the absence of a negative article as a reason to produce one.
6. **No issue bleed.** Transportation, energy, affordability, and water are distinct direct topics. A multi-topic article records each substantiated topic separately rather than allowing one section to answer an unrelated prompt.

## Seed defects this resolves

- The initial keyword priority assigned hundreds of generic biography, comparison, policy-overview, and persuasion prompts to `Other`, despite candidate profiles and voter guides being plausible direct evidence for them.
- A one-topic article label hid policy sections inside multi-topic profiles and guides.
- Abortion, LGBTQ equality, and personal-freedom questions could be misclassified by keyword ordering instead of literal subject.
- Data-center articles that substantively address water, energy, jobs, or rates could be incorrectly treated as only one of those subjects.

## Decision fields required in the atomic ledger

For each prompt: primary topic, secondary topics, subtopic, question intent, rationale, confidence, and status.

For each article: primary direct topics, secondary topics, subtopics, candidate/race scope, extracted evidence, rationale, confidence, and status.

For each compatibility result: `direct`, `parent-topic`, `not-relevant`, or `unresolved`, with a reproducible rule or explicit row-level override.
