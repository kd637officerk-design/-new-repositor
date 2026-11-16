# Diario – AI Notes, Diary & Video Studio (Windows 11)

Desktop version of **Diario** for Windows 11, built with Electron.

This repository contains everything needed to run the app locally or build native Windows installers (`.exe` + portable).

---

## Quick Start (Development)

### Requirements
- Node.js 18+ (LTS recommended)
- npm or yarn

```bash
# Install dependencies
npm install

# Run the app
npm start
```

---

## Build Windows Installers

```bash
# Build both NSIS installer + Portable .exe
npm run dist

# Or only portable version
npm run dist:portable
```

Output will be in the `dist/` folder:
- `Diario-1.0.0-win-x64.exe` – full installer (NSIS)
- `Diario-Portable-1.0.0.exe` – single-file portable version

---

## GitHub Setup (Recommended)

1. Create a new repository on GitHub (e.g. `diario-windows`)
2. Upload / push this entire folder
3. (Optional) Add a GitHub Actions workflow to automatically build on every release

### Example GitHub Actions workflow

Create `.github/workflows/build.yml`:

```yaml
name: Build Windows App

on:
  release:
    types: [published]
  workflow_dispatch:

jobs:
  build:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run dist

      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: Diario-Windows
          path: dist/*
```

Then create a GitHub Release → the action will build the `.exe` files automatically.

---

## Project Structure

```
Diario-Windows/
├── app/                  # The original web app (HTML/JS/CSS)
│   ├── index.html
│   └── assets/
├── build/
│   └── icon.ico          # Windows application icon
├── main.js               # Electron main process
├── preload.js            # Preload script (security)
├── package.json
└── README.md
```

---

## Notes

- The app runs fully offline for notes, diary, and most features.
- AI features (Gemini) require you to provide your own Google Generative AI API key inside the app.
- Native Capacitor features from the original Android APK are not available (this is pure Electron + web).
- Tested for Windows 11 (x64). Should also run on Windows 10.

---

## License

MIT – feel free to modify and distribute.
