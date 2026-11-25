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

Plan approximately 20 bite-sized lessons, sequenced so prerequisite
skills are revisited before students need to apply them.

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

Before finalising the sequence, review the supplied Year 11 course
outline and Year 10 textbook. Identify any assumptions about course
coverage. Do not claim syllabus alignment without checking a supplied
or verified syllabus source.

The aim is preparation for Year 11, rather than comprehensive revision
of the entire Year 10 course.

When designing example pairs, vary one feature deliberately and invite students to predict its effect. Check whether the chosen numbers hide a step students need to see, such as coefficients simplifying to one. Use Craig Barton’s variation guidance when it supports the lesson goal.

## Approved sequence and practice

Use the 20 lessons listed on the holiday program page. Start with integer indices, use PSF for monic and non-monic trinomials, and finish with simultaneous equations. In Lesson 1, centre the practice on Exercise 3B Q6 from the 2024 third edition of CambridgeMATHS NSW Year 10. Build subsequent lessons after their questions are approved.

## Work in two stages

### Stage 1: Propose

Before creating lesson files or changing the repository:

1. Propose the overall 20-lesson sequence.
2. Identify each lesson's focus, prerequisite knowledge and intended
   textbook practice.
3. Flag gaps, overlaps or topics that may need more than one lesson.

For each lesson being developed, propose:

- A one-sentence learning objective.
- A one-sentence success criterion.
- The slide sequence and approximate timing.
- The exact worked examples and student questions.
- Diagnostic checks, answers and misconception feedback.
- Any useful visualisation or interaction.
- The textbook practice allocation.

Wait for approval before building. Incorporate requested changes first.

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

Use this flexible structure:

1. **Quick recall:** one short question that activates prerequisite
   knowledge, with an accessible reminder if needed.
2. **Goal:** state what students are revising and what successful work
   will look like.
3. **Refresh:** briefly explain the essential idea or method.
4. **Worked examples:** normally two or three carefully chosen examples,
   increasing in complexity.
5. **Your turn:** include short student attempts alongside the examples.
6. **Readiness check:** check whether students can apply the key idea
   independently.
7. **Textbook practice:** give the exact exercise and question allocation.

Keep the learning objective to one short sentence, normally beginning
“We are learning to…”.

Keep the success criterion to one short sentence, normally beginning
“I can…”, describing an observable mathematical skill.

Avoid lengthy introductions, unnecessary repetition and crowded slides.

## Explanations and worked examples

Provide sufficient explanation for a student working without a teacher.

Show mathematically meaningful working and briefly explain why key
steps are valid. Address common errors at the point where they arise.

Use a progression such as:

- A fully worked example.
- A similar example with an invitation to predict the next step.
- A short independent attempt with a complete solution available.

Choose examples that expose useful differences, rather than repeating
the same procedure with different numbers.

Ask students to attempt questions on paper before revealing solutions.
Allow them to reveal and revisit working at their own pace.

Use clear notation, consistent colour coding and readable layouts.
Visualisations should clarify the mathematics and include a question
directing students towards what they should notice.

## Independent checks and feedback

Include checks throughout the lesson and at least one diagnostic
decision point before students begin textbook practice.

A useful default is a four-option multiple-choice question with one
unambiguously correct answer and distractors based on common errors.
Use short written-response questions where these provide better
evidence of understanding.

For every check:

- State exactly what the student should do.
- Keep the answer hidden until the student chooses to check it.
- Explain the correct reasoning.
- Address the misconception behind each incorrect option.
- Give a clear next step if the student needs more help.

Where practical, provide feedback specific to the selected answer.
For written responses, provide a worked solution and explain what
students should compare with their own working.

Use supportive, specific feedback such as:
“Check that you divided every term by 3.”

If a student answers incorrectly, offer a brief reminder or worked
example, followed by a similar retry question.

Adapt existing classroom hinge components for independent use.
Students must control checking and revealing answers themselves.
Do not require a teacher's cue, finger responses or a class discussion.
Timers are optional and must not prevent students from proceeding.

Do not place essential explanations or solutions only in presenter notes.
Do not claim that responses or progress are saved unless that feature
has been implemented and tested.

## Textbook practice

Use the supplied Year 10 textbook and specify its title and edition.

For each lesson, give exact exercise references, question numbers and
subparts. Verify them against the textbook; never invent references.

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
- Test interactions, resets and touch controls.
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
- Include clear Previous, Next and Return to program controls.
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