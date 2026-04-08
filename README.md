# CS 485 — Calculator App

A single-page calculator built with **React** + **Vite**. Expression evaluation runs entirely in the browser via a shared `calculate()` module — no backend required.

---

## Features

- All standard buttons: `0–9`, `.`, `+`, `-`, `×`, `÷`, `%`, `=`, `+/-`, `AC`, `⌫`
- Expression string displayed live at the top as buttons are pressed
- `AC` clears the entire expression; `⌫` removes the last character
- `+/-` negates the last number in the expression
- `%` converts a number to its decimal equivalent (`25%` → `0.25`)
- Evaluation via a single public function: `calculate(string) → string`

---

## Project Structure

```
calculator-app/
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Calculator UI
│   │   ├── App.css          # Styling
│   │   └── calculate.js     # Shared calculate(expression) logic
│   └── package.json
├── amplify.yml              # AWS Amplify build config
└── test_calculator.js       # 1000-test suite (fixed + random expressions)
```

---

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## Deployment (AWS Amplify)

The repo ships with `amplify.yml` at the root. Connect the repository in the AWS Amplify console and it will build `frontend/` and publish `frontend/dist` as a single static frontend environment.

---

## `calculate(expression)`

```js
import { calculate } from './frontend/src/calculate.js';

calculate('3+5×2');  // → "13"
calculate('25%');    // → "0.25"
```

**Supported operators:** `+` `-` `×` `÷` `%`
Returns `"Error"` for invalid or non-finite expressions.

---

## Running the Tests

```bash
node test_calculator.js
```

Runs 20 fixed regression cases followed by random expressions until **1000 consecutive correct answers** are achieved.

```
═══════════════════════════════════════════════════════
  ✅  1000 consecutive correct answers achieved!
  Total tests : 1000
  Failures    : 0
═══════════════════════════════════════════════════════
```
