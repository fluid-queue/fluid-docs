---
sidebar_position: 1
---

# Configuring your environment

After extracting the release (or cloning from git), you should have a folder structure that looks like this (note that some files have been omitted here for brevity):

- `fluid-queue`
  - `settings`
    - `tokens.example.json`
    - `settings.example.json`
  - `src`
    - `index.js`
  - `package.json`

The first thing you should do here is run `npm install` from the root directory (the directory with `package.json`). This will install all necessary dependencies for the bot to run, and should be run any time you update.

:::tip
Starting with `2.0.0-beta.4` and later releases, you will not need to run `npm install` when setting up or updating the bot from a packaged release.  
You will still need to run `npm install` when pulling directly from git.
:::

Next, copy or rename `tokens.example.json` and `settings.example.json` to `tokens.json` and `settings.yml` within the "settings" folder, and we can start the setup process.