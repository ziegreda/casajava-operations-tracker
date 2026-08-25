# Casa Java Operations Tracker

A lightweight apartment operations dashboard for Casa Java. This first milestone is a dependency-free static app that can be opened locally or published with GitHub Pages.

## Included in this build

- Casa Java branded operations dashboard
- Unit occupancy and payment snapshot
- Recent activity feed
- Responsive layout for desktop and mobile
- Units: add, edit, delete, search/filter, unit details, deposit, amenities, notes, and photo URL
- Tenants: profiles, contacts, emergency contact, unit assignment, dates, status, and notes
- Payments: billing records, payment methods, references, automatic status, balances, and overdue reminders
- Expenses: categories, vendors, payment details, notes, search, and monthly totals
- Maintenance: requests, priorities, assignees, estimates, actual costs, statuses, and completion dates
- Utilities: water/electricity readings, consumption and bill calculations, billing status, and history
- Notifications: rent, contract, maintenance, and utility reminders
- Reports: income, expenses, net income, occupancy, chart, CSV export, and print-to-PDF
- Browser persistence through `localStorage`; no backend required yet

## Run locally

Open `index.html` in a browser. For a local server, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Next milestones

The next production milestone is authentication, a shared cloud database, receipt PDF generation, date-range report filters, and role-based access. The current local storage model is intentionally useful for validating workflows before introducing a backend.

## GitHub Pages

1. Create a GitHub repository named `casajava-operations-tracker`.
2. Push this folder to the `main` branch.
3. In repository settings, open **Pages**.
4. Set the source to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
