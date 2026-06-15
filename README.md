# diddymark

diddymark is an NSW HSC Year 12 Science study app for Physics, Chemistry, and Biology.

This project now includes a desktop app wrapper built with Electron, so the same codebase can run as a standalone app instead of only through `file://` in a browser.

## Pages

- `signup.html`: create an account (name, school, email, phone, password)
- `login.html`: login page
- `index.html`: dashboard/homepage
- `single.html`: single question practice mode
- `test.html`: timed test mode
- `history.html`: generated question history viewer

## Features

- Syllabus-linked question generation for Modules 5-8
- Difficulty scaling: `Easy`, `Medium`, `Hard (State Rank)`
- Topic/module filters and question-type filters
- Question source mode:
  - `Syllabus Question Bank`
  - `Past HSC/Trial Style` (drawn from imported THSC trial-paper text where available)
- Response marking with HSC-style whole-number marks
- HSC-style marking guideline table
- Highlighted feedback with response-specific suggested insertions
- Scientific term suggestions only when terms are missing
- Separate state-rank sample answer box
- Progress tracking by student name
- Generated question history log (filter by subject/source/level/mode)
- Working whiteboard (equations/rough work)
- Whiteboard fullscreen mode
- Photo upload + transcription field for marking handwritten responses
- Stimulus support in questions:
  - Web diagrams/graphs (Wikimedia Commons)
  - Imported paper stimulus images from THSC trial PDFs
- Timed test mode with automatic HSC ratio targeting:
  - `1.8 minutes per mark`
  - `20% MCQ / 80% non-MCQ`
- PDF report generation per attempt

## Run In Browser

Open `signup.html` or `login.html` in a browser, create/login, then use the dashboard.

## Run As Desktop App

1. Install a package manager such as `npm`.
2. Install dependencies:
   `npm install`
3. Start the desktop app:
   `npm run app`

The Electron entry point is [electron/main.js](/Users/Daniel/Documents/Codex/2026-05-26-code-a-science-app-browser-which/electron/main.js) and it loads `signup.html` as the first screen.

## Build App Bundle

- Development-style desktop bundle:
  `npm run dist`
- macOS distributable build:
  `npm run dist:mac`

The package metadata and build config live in [package.json](/Users/Daniel/Documents/Codex/2026-05-26-code-a-science-app-browser-which/package.json).

## Data Import Scripts

- `import_thsc_trials.py`: pulls 2017+ trial-paper text and builds `trial_bank.js`
- `build_paper_stimuli.py`: extracts paper-page stimulus images and builds `paper_stimuli.js`

## Notes

- This is local browser storage only (no backend/server login yet).
- Marking is exam-practice guidance, not official NESA marking.
- In the current shell on this machine, `node` is present but `npm` is not installed, so the Electron wrapper code is ready but dependency installation was not run here.
