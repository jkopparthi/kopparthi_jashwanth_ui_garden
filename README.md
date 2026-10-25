# UI Garden - Assignment 12

Jashwanth Kopparthi

This is a component library made with React, TypeScript, styled-components and Storybook. It is built with Create React App and runs in Docker on http://localhost:8083.

## Components

Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage and Card.

Each one has its own folder in `src/components` with these files:

- `Name.tsx`
- `Name.types.tsx`
- `Name.stories.tsx`
- `Name.tests.tsx`
- `index.ts`

Every component has a default state and a disabled state. When disabled it turns grey and the cursor shows not-allowed.

## Setup

You need Node.js and Git installed.

```
git clone https://github.com/jkopparthi/kopparthi_jashwanth_ui_garden.git
cd kopparthi_jashwanth_ui_garden
npm install
```

## Run Storybook

```
npm run storybook
```

Open http://localhost:6006. Pick a component on the left. Use the Controls panel to change the text, background colour and disabled.

## Run the tests

```
npm test -- --watchAll=false
```

Each component has 2 tests: one checks it is visible, and one checks the background colour changes when disabled.

## Run with Docker

Build the image:

```
docker build -t kopparthi_jashwanth_ui_garden .
```

Run the container:

```
docker run -d --name kopparthi_jashwanth_coding_assignment12 -p 8083:8083 kopparthi_jashwanth_ui_garden
```

Open http://localhost:8083 (or http://127.0.0.1:8083).

The Dockerfile makes a production build and serves it with nginx. The site files are in the working directory `kopparthi_jashwanth_ui_garden`.

To stop it:

```
docker stop kopparthi_jashwanth_coding_assignment12
docker rm kopparthi_jashwanth_coding_assignment12
```

## Checking it works

- `docker ps` shows the container named kopparthi_jashwanth_coding_assignment12
- http://localhost:8083 shows the demo page
- Storybook shows all 13 components with Default and Disabled stories
- All tests pass