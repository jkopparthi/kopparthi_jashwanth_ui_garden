# kopparthi_jashwanth UI Garden — Assignment 12: Web Component Library

A React + TypeScript component library built with **Create React App**, **styled-components** and **Storybook 8**, tested with **Jest**, **React Testing Library**, **jest-dom** and **jest-styled-components**, and shipped as a production build served by **nginx in Docker on port 8083**.

- **Student:** Jashwanth Kopparthi
- **Container name:** `kopparthi_jashwanth_coding_assignment12`
- **Working directory in the image:** `/kopparthi_jashwanth_ui_garden`
- **Site URL:** <http://localhost:8083> (same as <http://127.0.0.1:8083>)

---

## 1. Components

Every component lives in `src/components/<Name>/` and contains exactly these files:

| File | Purpose |
| --- | --- |
| `<Name>.tsx` | The component, styled with styled-components |
| `<Name>.types.tsx` | TypeScript props interface |
| `<Name>.stories.tsx` | Storybook stories (Default + Disabled) with controls |
| `<Name>.tests.tsx` | Jest / React Testing Library tests |
| `index.ts` | Re-exports the component and its types |

The library contains: **Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card**.

Shared disabled-state values (grey background `#cccccc`, grey text, `cursor: not-allowed`) live in `src/components/constants.ts`. All components are exported from `src/components/index.ts`.

---

## 2. Prerequisites

- [Node.js](https://nodejs.org) 18 or newer (20 LTS recommended) and npm
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (only for section 7)
- Git

Check your versions:

```bash
node -v
npm -v
docker -v
```

---

## 3. Project setup

```bash
# 1. Clone the repository (replace the URL with your GitHub repo)
git clone <YOUR_GITHUB_REPO_URL> kopparthi_jashwanth_ui_garden
cd kopparthi_jashwanth_ui_garden

# 2. Install dependencies (an .npmrc file already sets legacy-peer-deps=true,
#    which Create React App needs together with Storybook 8)
npm install
```

### How the project was created (for reference)

```bash
npx create-react-app kopparthi_jashwanth_ui_garden --template typescript
cd kopparthi_jashwanth_ui_garden
npm install styled-components@5 @types/styled-components@5
npm install -D jest-styled-components @testing-library/jest-dom
npx storybook@8 init
```

React is pinned to version 18 so that it works with styled-components 5 and Storybook 8.

---

## 4. Run the app in development mode

```bash
npm start
```

Open <http://localhost:3000>. This is a demo page that shows every component in its default and disabled states.

---

## 5. Run Storybook

```bash
npm run storybook
```

Open <http://localhost:6006>.

In the sidebar, open **Components → Button** (or any other component). Each component has:

- a **Default** story and a **Disabled** story;
- a **Controls** panel at the bottom to change properties such as the text (`label`, `text`, `title`…), `backgroundColor`, `textColor` and `disabled`;
- an auto-generated **Docs** page.

To create a static Storybook build:

```bash
npm run build-storybook   # output goes to storybook-static/
```

---

## 6. Run the tests

```bash
# Watch mode
npm test

# Single run (what CI uses)
CI=true npm test -- --watchAll=false
```

On Windows PowerShell use:

```powershell
$env:CI="true"; npm test -- --watchAll=false
```

Jest is configured in `package.json` (`"jest": { "testMatch": [...] }`) so that files named `*.tests.tsx` are picked up, and `src/setupTests.ts` loads `@testing-library/jest-dom` and `jest-styled-components`.

Every component has at least **two tests**:

1. **Visible** – the component renders and `toBeVisible()` passes.
2. **Disabled** – when `disabled` is set, the background colour changes to the grey `#cccccc` and the cursor becomes `not-allowed` (checked with `toHaveStyle`).

Expected result: **14 test suites passed, 27 tests passed**.

---

## 7. Docker build and deployment (localhost:8083)

The `Dockerfile` is a two-stage build:

1. **build stage** (`node:20-alpine`) – installs dependencies and runs `npm run build` to create the Create React App **production build**.
2. **serve stage** (`nginx:alpine`) – copies the build into the working directory **`/kopparthi_jashwanth_ui_garden`** and serves it on **port 8083** using `nginx.conf`.

### Build the image

```bash
docker build -t kopparthi_jashwanth_ui_garden .
```

### Run the container (named `kopparthi_jashwanth_coding_assignment12`)

```bash
docker run -d --name kopparthi_jashwanth_coding_assignment12 -p 8083:8083 kopparthi_jashwanth_ui_garden
```

Open <http://localhost:8083> (or <http://127.0.0.1:8083>).

### Useful Docker commands

```bash
docker ps                                              # container should be listed and "Up"
docker logs kopparthi_jashwanth_coding_assignment12    # nginx logs
docker stop kopparthi_jashwanth_coding_assignment12    # stop
docker rm kopparthi_jashwanth_coding_assignment12      # remove (needed before re-running with the same name)
```

To rebuild after code changes:

```bash
docker stop kopparthi_jashwanth_coding_assignment12
docker rm kopparthi_jashwanth_coding_assignment12
docker build -t kopparthi_jashwanth_ui_garden .
docker run -d --name kopparthi_jashwanth_coding_assignment12 -p 8083:8083 kopparthi_jashwanth_ui_garden
```

---

## 8. Verify the Assignment 12 requirements

| Requirement | How to verify |
| --- | --- |
| Built with Create React App + Storybook | `package.json` contains `react-scripts` and `storybook`; `.storybook/` folder exists; `npm run storybook` works |
| All 13 components exist | `ls src/components` lists Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card |
| Each folder has 5 files | `ls src/components/Button` shows `Button.tsx`, `Button.stories.tsx`, `Button.types.tsx`, `Button.tests.tsx`, `index.ts` (same for every folder) |
| styled-components used for styling | Each `<Name>.tsx` uses `styled.<tag>`; there are no CSS files for components |
| Responsive | Each component has `@media (max-width: 600px)` rules; `Table` scrolls horizontally on small screens. In the browser, open DevTools and toggle the device toolbar |
| Storybook controls | In Storybook, open any component → **Controls** panel → change text, background colour, disabled |
| Default and disabled states | Every component has **Default** and **Disabled** stories. Disabled components turn grey and show the `not-allowed` cursor on hover |
| At least 2 tests per component | `CI=true npm test -- --watchAll=false` → all suites pass |
| Dockerfile hosts production build | `docker build` runs `npm run build` and nginx serves the result |
| Container name | `docker ps --format "{{.Names}}"` prints `kopparthi_jashwanth_coding_assignment12` |
| Working directory | `docker exec kopparthi_jashwanth_coding_assignment12 ls /kopparthi_jashwanth_ui_garden` lists `index.html` and `static` |
| Runs on port 8083 | Browse to <http://localhost:8083> |

---

## 9. Project structure

```text
kopparthi_jashwanth_ui_garden/
├── .storybook/            # Storybook configuration (main.ts, preview.ts)
├── public/
├── src/
│   ├── components/
│   │   ├── Button/        # Button.tsx, .types.tsx, .stories.tsx, .tests.tsx, index.ts
│   │   ├── Label/ ... Card/
│   │   ├── constants.ts   # shared disabled-state values
│   │   └── index.ts       # library entry point
│   ├── App.tsx            # demo page of all components
│   └── setupTests.ts      # jest-dom + jest-styled-components
├── Dockerfile
├── nginx.conf
├── .dockerignore
├── .npmrc
└── package.json
```

## 10. Troubleshooting

- **`npm install` peer dependency errors** – make sure the `.npmrc` file (`legacy-peer-deps=true`) is present, or run `npm install --legacy-peer-deps`.
- **Port 8083 already in use** – stop the other process or the old container (`docker rm -f kopparthi_jashwanth_coding_assignment12`).
- **"container name is already in use"** – run `docker rm -f kopparthi_jashwanth_coding_assignment12` and start it again.
- **Tests are not found** – test files must be named `<Name>.tests.tsx`; the `jest.testMatch` setting in `package.json` must be kept.
