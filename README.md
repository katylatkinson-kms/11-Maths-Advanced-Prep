# Year 11 Mathematics Advanced Holiday Preparation

A Quarto website for Year 10 students preparing for the start of Year 11 Mathematics Advanced. Short, independent revision lessons will combine explanations, checks and worked examples with focused Year 10 textbook practice.

The program page lists the approved 20-lesson sequence. Lesson 1 on integer index laws includes independent checks and a textbook allocation centred on Exercise 3B Q6. Lesson 2 covers fractional indices and uses Exercise 3D. Lesson 3 revisits single brackets, teaches FOIL and the two special products, and uses Exercise 5A. Lessons 4–20 are planned. See [AGENTS.md](AGENTS.md) for the authoring requirements.

## Preview and render

Install the Quarto version recorded in [.quarto-version](.quarto-version) from the [official Quarto releases](https://github.com/quarto-dev/quarto-cli/releases). GitHub Actions reads the same version file.

From the repository root:

```sh
quarto --version
quarto preview
```

Build the complete website with:

```sh
quarto render
```

Output is written to `_site/`. Generated output and the `.quarto/` cache are excluded from version control. No R, Python or student accounts are required for the current static pages.

## Publishing to GitHub Pages

The [Build and publish Quarto workflow](.github/workflows/publish-quarto.yml) renders the website on every push to `main` and on pull requests. **These runs validate the build without deploying it.** Publishing is manual, as specified in AGENTS.md.

### One-time repository setup

The repository owner should:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Check **Settings → Actions → General** allows the actions used by the workflow (`actions/*` and `quarto-dev/quarto-actions`).

The workflow declares the GitHub Pages and OpenID Connect permissions it needs. It uses GitHub's built-in token; no personal access token or additional repository secret is needed. Any environment protection rules on `github-pages` still apply.

### Publish a version

1. Commit approved source changes to `main`.
2. Open **Actions → Build and publish Quarto**.
3. Click **Run workflow**, select **main**, and click **Run workflow** again.
4. Wait for both **Render website** and **Publish to GitHub Pages** to succeed.
5. Open the site URL displayed by the deployment.

The expected address after the first successful deployment is:

https://katylatkinson-kms.github.io/11-Maths-Advanced-Prep/

A successful build alone does not mean the live website has been updated. The publishing job runs only for a manual workflow run on `main`. There is no `gh-pages` branch or `quarto publish gh-pages` step in this publishing process.

## Source organisation

| Path | Purpose |
| --- | --- |
| `_quarto.yml` | Website configuration, navigation and render scope |
| `index.qmd` | Homepage |
| `courses/year-11-advanced/index.qmd` | Course page |
| `courses/year-11-advanced/holiday-preparation/index.qmd` | Program page and future lesson links |
| `courses/year-11-advanced/holiday-preparation/lessons/_metadata.yml` | Reveal.js defaults scoped to lessons |
| `assets/styles.css` | Shared webpage styling |
| `assets/lesson.css` | Slide typography, maths and touch controls |
| `assets/lesson-controls.html` | Local answer-check and reset behaviour |
| `.quarto-version` | Quarto version used locally and in GitHub Actions |
| `.github/workflows/publish-quarto.yml` | Build checks and manual publishing |

## Adding or editing lessons

Propose the lesson sequence and obtain approval before creating lesson content. Keep course and program pages as ordinary HTML pages; use Reveal.js only for lessons.

For Lesson 1, edit the numbered slide fragments in `courses/year-11-advanced/holiday-preparation/lessons/lesson-1/`. The final fragment contains the core and optional textbook allocations. Maths uses native MathML. Use cumulative Reveal.js fragments for the annotated steps, followed by a matching paper question in the adjacent column. Use LaTeX fractions for all mathematical quotients. The check buttons show feedback for the selected answer.

Create each lesson master at `courses/year-11-advanced/holiday-preparation/lessons/lesson-N.qmd`. Store its slides at `courses/year-11-advanced/holiday-preparation/lessons/lesson-N/_*.qmd`, then include them in order:

```qmd
---
title: "Lesson title"
order: 1
format: revealjs
---

{{< include lesson-1/_01-goal.qmd >}}

{{< include lesson-1/_02-recall.qmd >}}
```

The project renders all `.qmd` pages and lesson masters while excluding underscore-prefixed slide fragments from standalone rendering. Update the program page with the lesson links in order. Include Previous, Next and Return to program controls in lessons as appropriate, and verify paths relative to each lesson master.

Render the whole site before committing. Check navigation, laptop and tablet layouts, mathematical working, answer reveals and verified textbook references for every new lesson. Commit and push approved source changes directly to `main`; run the publishing workflow when publication is requested.
