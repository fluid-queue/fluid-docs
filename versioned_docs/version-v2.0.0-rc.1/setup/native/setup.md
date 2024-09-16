---
sidebar_position: 1
---

# Configuring your environment

After extracting the release (or cloning from git), you should have a folder structure that looks like this (note that some files have been omitted here for brevity):

- `fluid-queue`
  - `settings`
    - `tokens.example.json`
    - `settings.example.json`
  - `build`
    - `index.js`
  - `package.json`

If you don't have a `build` directory, then you either cloned from git or downloaded a source archive, and will need to compile the bot.

<details>
<summary>Compiling the bot</summary>

To compile the bot, run the following commands:

```sh
$ npm install --include=dev
$ npm run build
```

This will install all the development dependencies and then compile the bot. Our prepackaged releases are already compiled, so we'd recommend using them unless you have a specific reason to build the bot yourself.

</details>

Next, copy or rename `tokens.example.json` and `settings.example.json` to `tokens.json` and `settings.yml` within the "settings" folder, and we can start the setup process.
