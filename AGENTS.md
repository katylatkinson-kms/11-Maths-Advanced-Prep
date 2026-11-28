# Year 11 Mathematics Advanced — Holiday Preparedness Program

## Purpose and audience

We are creating a holiday preparedness program for students entering
Year 11 Mathematics Advanced.

The program revisits relevant Year 10 knowledge and skills so students
can begin Year 11 with greater fluency and confidence.

Assume students have encountered the content before, but may have
forgotten it, developed misconceptions or not yet mastered it.
Reintroduce essential ideas clearly without assuming secure recall.

Students complete the program independently. All explanations,
instructions, answers and feedback needed to learn must be accessible
within the lesson.

Use Australian English and mathematical notation appropriate to
NSW secondary mathematics.

## Program scope

Follow the approved 20-lesson sequence on the holiday program page.

Priority content includes:

- Simplifying algebraic expressions and expanding brackets.
- Solving linear equations, including equations involving brackets
  and fractions.
- Factorising expressions, including quadratic expressions.
- Solving quadratic equations.
- Completing the square.
- Simplifying and operating with algebraic fractions.
- Applying index laws.

Include supporting skills where they are necessary for these topics
or clearly relevant to the beginning of Year 11 Mathematics Advanced.

Use the supplied Year 11 course outline and Year 10 textbook to plan each lesson. Identify assumptions about prior coverage and verify any syllabus claim against a syllabus source.

## Approved sequence and practice

Use the 20 lessons listed on the holiday program page. Start with integer indices, use PSF for monic and non-monic trinomials, and finish with simultaneous equations. In Lesson 1, centre the practice on Exercise 3B Q6 from the 2024 third edition of CambridgeMATHS NSW Year 10. Build subsequent lessons after their questions are approved.

## Work in two stages

### Stage 1: Propose the next lesson

Use Lesson 1 as the approved design reference. For the next lesson in the agreed sequence, propose:

- The focus, prerequisites, one-sentence objective and success criterion.
- The slide order and estimated timings, including time for paper attempts.
- The exact worked examples, their matching student questions and complete solutions. Identify the feature varied in each pair and what the student should notice.
- The readiness question, answer options, correct solution and feedback for each error.
- The verified textbook allocation and any diagram or interaction needed.

Wait for approval before building a new lesson. Explicitly requested small edits can be made directly. If a proposed change affects the agreed sequence or lesson count, explain it before proceeding.

### Stage 2: Build

After approval, complete the lesson and its checks without seeking
confirmation for routine implementation choices.

## Length and workload

Each lesson has two parts:

1. An interactive lesson taking approximately 15–20 minutes.
2. Approximately 40 minutes of Year 10 textbook practice.

The 15–20 minutes must include time for students to think, attempt
questions and read feedback. Do not estimate duration from reading
time alone.

Keep each lesson focused on one manageable skill or a closely related
group of skills. Split an overloaded lesson rather than compressing
the explanations or removing opportunities to practise.

## Lesson structure

Open with a brief recap of the rules or procedures students will use. Include a one-sentence objective beginning “We are learning to…” and an observable success criterion beginning “I can…”. Move directly into the first example. Finish with a procedural readiness check, then the textbook practice slide.

Write multi-step student instructions as a numbered list with one action per line. Use bullets for independent reminders and keep a single short prompt on one line. Keep all the instructions for a paper attempt visible together while students work.

## Worked examples and paper attempts

Use Lesson 1’s example-pair layout and cumulative reveals:

1. Introduce the procedure in one or two sentences. Give enough guidance for a student working independently.
2. Put the worked example on the left. Reveal one significant line per click, with a brief annotation such as “Square both factors”. Keep earlier lines visible.
3. Reveal the matching “Your turn” question on the right. Keep the complete example visible while the student works on paper.
4. Let the student select Next to reveal the full solution beside the model. Use consistent notation so students can compare corresponding steps.

Choose numbers deliberately using Craig Barton’s approach to variation. Decide what students should notice. Where useful, vary one feature and invite a prediction. In Lesson 1, doubling the denominator coefficient changes the result from \(18a^4\) to \(9a^4\). Check whether a coefficient of one, a zero term or cancelling negatives would hide the step being taught. Use such cases deliberately when they illustrate the intended point.

Typeset every mathematical fraction with `\frac` or `\dfrac`, including in questions, answer options and feedback. Keep significant steps on separate lines. Use diagrams when they clarify the procedure.

## Independent checks and feedback

For an essential prerequisite, include an unfamiliar written attempt with the model out of view. Offer a hint on request and a fresh unaided attempt after support. Mix methods in independent practice and revisit the skill in a later lesson, including in a new context.

Use the paired paper attempts for practice throughout the lesson. Before textbook practice, give a short procedural question students can attempt independently. For a multiple-choice check, offer four options with one unambiguously correct answer. Work out the specific error that produces each distractor.

Keep feedback hidden until the student chooses an answer. An incorrect choice should identify the step to reconsider and allow an immediate retry. A correct choice should reveal the full worked solution. Use a written check when it better assesses the skill, with full working and a clear comparison point for students.

Make all essential instructions, working and feedback available on the slides. Students control the pace. Any timer is optional. Only describe progress as saved if the feature has been implemented and tested.

## Textbook practice

Use the supplied Year 10 textbook and specify its title and edition.

On the final slide, give the exercise, printed page, question numbers and subparts. Verify each against the supplied Cambridge Year 10 textbook. When adding parts of a question, retain the agreed core questions unless the teacher asks to replace them.

Select approximately 40 minutes of practice for a student with partial
recall of the topic. Allow time for working, checking and corrections.

Progress from routine practice to more varied applications.
Prioritise useful coverage over large amounts of repetitive work.

Where helpful, identify:

- Core questions for everyone.
- A small optional extension for students who finish confidently.

Keep optional extension separate from the expected 40-minute allocation.

Explain how students should check their answers and what to revisit
if they are struggling. Do not imply that textbook solutions are
available unless their location has been confirmed.

## Repository structure and checks

Follow the existing Quarto project structure and shared styling.

Use lesson masters at:

courses/<course>/<topic>/lessons/lesson-N.qmd

Keep individual slides at:

courses/<course>/<topic>/lessons/lesson-N/_*.qmd

Use ordered includes in each lesson master. Maintain course and topic
listings, lesson order, textbook references and return navigation.

Before completing a lesson:

- Render it and navigate through the full slide sequence.
- Check mathematical accuracy and every worked solution.
- Verify answer mappings and misconception feedback.
- Check that answers are initially hidden and can be revealed by students.
- Step through each reveal with Next and Back. Attempt a “Your turn” question with the full worked example visible.
- Select every readiness option. Check feedback, immediate retry, correct working and reset.
- Test touch and keyboard activation of buttons. Check that stray taps, swipes and navigation shortcuts cannot skip ahead.
- Check readability on laptop and tablet screens.
- Verify links and textbook references.
- Review whether the lesson realistically fits 15–20 minutes.
- Confirm students can complete it without teacher explanation.

Report what was tested and identify any remaining limitations.
Follow the repository's established publishing process.

## Technical framework: Quarto and GitHub Pages

### Website and presentations

Build the program as a Quarto website, published through GitHub Pages.

- Use ordinary HTML pages for the homepage, course pages and topic listings.
- Use Quarto's Reveal.js format (`revealjs`) for lesson presentations.
- Keep presentation settings scoped to lessons so navigation pages
  remain ordinary webpages.
- Students should navigate course → topic/program → lesson.
- Reuse Lesson 1’s Next and Back controls and Return to program link. Each button activation moves one reveal or one slide. Keep the slide count non-interactive. Disable progress-bar navigation, slide menus, overview, swipe navigation and slide-jump shortcuts. Keep buttons focusable and keyboard-operable.
- Support independent use on laptops and tablets.

Follow the existing repository structure and components. If starting
from an empty repository, propose the structure before creating it.

### Source files and organisation

Write lesson content in `.qmd` source files.

Use:

courses/<course>/<topic>/lessons/lesson-N.qmd

Keep individual slides in:

courses/<course>/<topic>/lessons/lesson-N/_*.qmd

Each lesson master should contain its metadata and an ordered list
of slide includes.

Keep shared styling and JavaScript in reusable asset files.
Reuse existing components for checks, feedback and answer reveals.

Use appropriate lesson metadata so listings display lessons in the
correct order. Preserve published URLs when updating existing content.

Edit source files. Generated HTML should be recreated through Quarto.

### Mathematics and interactions

Use LaTeX notation for mathematics within Quarto and the project's
existing mathematical renderer for interactive content.

Build interactions using HTML, CSS and browser-side JavaScript that
work on a static GitHub Pages website.

Core lesson activities must not require student accounts, API keys
or a running Python/R server.

Make buttons and controls suitable for touch. Do not rely on hovering.

Keep answers hidden initially and allow students to reveal explanations
at their own pace. Ensure navigation does not accidentally reveal answers.

Use external embeds only when they add clear value. Verify their links
and provide a direct-link fallback.

### Previewing and checking

Use `quarto preview` to preview the project and `quarto render` to
build the complete website.

Check the rendered output, including:

- Slide order and navigation.
- Mathematical notation and worked solutions.
- Text overflow, diagrams and screen readability.
- Answer selection, feedback, reveals and resets.
- Relative links and media paths.
- Laptop and tablet layouts.

Resolve paths in included slide content relative to the lesson master.
State which browsers and devices were actually checked.

### Publishing and documentation

Use a GitHub Actions workflow to install Quarto, render the website
and deploy the generated output to GitHub Pages.

Keep the Quarto version consistent between the development environment
and publishing workflow.

Follow the existing publishing process. For a new repository, use
manual publishing unless another approach has been agreed.

Document setup, preview commands and publishing steps in README.md.
Keep generated output out of version control when the workflow builds it.

Commit completed source changes and clearly distinguish between
changes saved to GitHub and changes published to the live website.

## Saving changes to GitHub

Work directly on the `main` branch.

After each completed set of approved changes:

1. Run the relevant rendering and functional checks.
2. Commit the changed source files with a clear, descriptive message.
3. Push the commit directly to `main`.

Do not create separate branches or pull requests unless I explicitly
request them.

Approval to build or edit includes permission to commit and push the
completed changes to `main`. Do not ask for additional confirmation
for these routine steps.

Before editing, check that the working copy is up to date with the
remote `main` branch. Preserve unrelated changes and never force-push
or overwrite someone else's work.

Continue to propose new lessons and wait for approval before building.
Once approved, complete the build, checks, commit and push.

Committing and publishing are separate actions. Follow the repository's
publishing process and publish when requested.

At completion, briefly state what changed, what was checked, whether
the commit was pushed to `main`, and whether the live site was updated.