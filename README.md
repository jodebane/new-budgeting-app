# Budgeting App

A lightweight personal budgeting app built with React (no build step required).

## Features

- Track income and expenses across 14 categories
- Dashboard with balance, income, and expense summaries
- Full transaction history with delete support
- Monthly budget tracker with per-category progress bars
- Data persisted to `localStorage`

## Project Structure

```
budgeting-app/
├── index.html              # Entry point
├── styles/
│   └── main.css            # All styles
└── src/
    ├── main.js             # Mounts the React app
    ├── data.js             # Constants: CATEGORIES, CAT_ICONS, BUDGET_LIMITS, DEMO_TRANSACTIONS
    ├── utils.js            # Shared helpers (currency formatter)
    └── components/
        ├── App.js          # Root component — state management & routing
        ├── Dashboard.js    # Summary cards + recent transactions
        ├── Transactions.js # Full transaction list
        ├── Budgets.js      # Category budget progress bars
        ├── TxnRow.js       # Single transaction row
        └── Modal.js        # Add-transaction dialog
```

## Usage

Because the app uses native ES modules to import React directly from a CDN
(`esm.sh`), it must be served over HTTP — opening `index.html` directly as a
`file://` URL will not work.

**Option 1 — VS Code Live Server**

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
extension, right-click `index.html`, and choose *Open with Live Server*.

**Option 2 — Python**

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

**Option 3 — Node**

```bash
npx serve .
```

## Customisation

| What to change | Where |
|---|---|
| Monthly budget limits | `BUDGET_LIMITS` in `src/data.js` |
| Add / remove categories | `CATEGORIES` and `CAT_ICONS` in `src/data.js` |
| Currency format | `fmt()` in `src/utils.js` |
| Colours & layout | `styles/main.css` |
