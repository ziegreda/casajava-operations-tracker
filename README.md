# Casa Java Operations Tracker

A lightweight apartment operations dashboard for Casa Java. This first milestone is a dependency-free static app that can be opened locally or published with GitHub Pages.

## Included in this build

- Casa Java branded operations dashboard
- Unit occupancy and payment snapshot
- Recent activity feed
- Responsive layout for desktop and mobile
- Starter views for Units, Payments, Maintenance, Expenses, and Reports
- No backend required yet

## Run locally

Open `index.html` in a browser. For a local server, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Roadmap

The next implementation milestone is interactive record forms with browser storage for units, tenants, payments, expenses, maintenance, and utilities. Authentication and a cloud database should come after the workflows are validated.

## GitHub Pages

1. Create a GitHub repository named `casajava-operations-tracker`.
2. Push this folder to the `main` branch.
3. In repository settings, open **Pages**.
4. Set the source to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
