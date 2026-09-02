# L'Actu — l'actualité française en compréhension écrite

A fifth site, alongside the vocabulary trainer and the two hub pages. It turns the
month's French news into reading comprehension, filtered so that only what
touches the four Edexcel themes gets in.

## What a student sees

They choose a month, filter by theme if they want, and open an article. Each one
is the same shape:

- an **adapted text** of 200–280 words, written for this site from published
  facts, with the outlet, the date and a **link to the real article** underneath;
- a **glossary** they can show or hide;
- eight to ten **marked tasks** — true / false / not mentioned, multiple choice,
  gap-fill, vocabulary matching, and two short written answers;
- a **stretch task** with a model answer: an opinion paragraph, a translation, or
  a comparison with the set text;
- a **floating accent pad**, and a **download** of everything they wrote, with
  their name on it, to hand in.

The written answers are marked on ideas rather than wording, and where the
marker refuses an answer the student can press *ma version est aussi valable* —
the same escape hatch as in *Le Lexique*, and it travels into the file they hand
you.

Each article also links to the **vocabulary lists** that prepare it, so *Asile :
un budget en hausse* opens with a link to `U8.6 — la citoyenneté, la loi et les
papiers`.

## Why the texts are ours and not the paper's

Newspaper articles are in copyright; the facts in them are not. Writing the text
ourselves is what makes the site legal, and it has two side effects worth having:
the level is pitched at A-Level rather than at a French adult reader, and a
paywall or a dead link never breaks a lesson. The original is always one click
away for the students who want it.

## Setting it up, once

1. Create a public repository called **A-Level-French-Actualites** under
   `artmemry`.
2. Upload everything in this folder except this file and `GENERATEUR.md` — which
   you can upload too, they simply sit there as documentation:

```
A-Level-French-Actualites/
├── index.html
├── style.css
├── app.js
└── data/
    └── issues.js      ← the month's articles live here, nothing else
```

3. **Settings → Pages → Source: Deploy from a branch → main / (root)**. A minute
   later the site is at
   `https://artmemry.github.io/A-Level-French-Actualites/`.
4. Add a tile to the **A-Level-French-BBA** hub page pointing at it. Say the word
   and I will send the edited hub page.

## Using it

- One article per link: `…/A-Level-French-Actualites/?a=2026-09-FR-T1`
- One month: `…/?m=2026-09`
- **The answer key: `…/?prof=1`** — not linked from anywhere on the site, so a
  student only finds it if you give it to them.

The per-article links go straight into the Homework column of the MTP, exactly
like the vocabulary links.

## Asking for a new month

Say *build October* and I will sweep the month's French press, apply the
relevance test, write the articles and the tasks, and send you a replacement
`data/issues.js` with the new month added on top. Nothing else in the site
changes, ever — one file, one upload.

**Some months will be thin, and that is the design.** The rule is that a story
gets in only if you would actually set it. If the Occupation theme produced
nothing in October, October will have three articles and will say so on the page,
rather than four with one padded out of an anniversary that means nothing.

## What is in this first issue — septembre 2026

| Thème | Article | Source |
|---|---|---|
| T1 Société | La rentrée : onze millions et demi d'élèves, et plus un seul portable | Ministère de l'Éducation nationale, 25 août |
| T2 Culture | Angoulême : le cinéma francophone fait sa rentrée | palmarès de la 19e édition, 29 août |
| T3 Immigration | Asile : un budget en hausse, des délais qui ne baissent pas | rapport du Sénat sur le PLF 2026 |
| T4 Occupation | Quatre-vingt-deux ans après : Paris commémore sa Libération | programme de la Ville de Paris, 23–25 août |

The Libération article is worth a mention: the ceremony at the jardin des
Combattants-de-la-Nueve honours the Spanish republicans who entered Paris first,
which gives you a lesson that crosses both A-Levels at once — and the Spanish
site carries an item on the exhumations the same month.

## Verified

- Both sites open every article with no JavaScript error; the four French texts
  render with their five paragraphs, glossary and tasks.
- A full run through an article — answering, scoring, downloading — produces a
  file headed with the student's name, the score, every question, what they
  answered and the right answer where they were wrong.
- The accent pad appears when a text box takes focus and disappears with the
  article.
- `?prof=1` prints the whole answer key, forty rows for the French issue.
- Every `lex` code was checked against the live corpus, so the vocabulary links
  land on a real list rather than the front page.
