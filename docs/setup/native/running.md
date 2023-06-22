---
sidebar_position: 4
---

# Running the bot

Now that you're all set up, you can start the bot!

## Starting the bot

:::tip
If you downloaded the bot from git or a source archive, remember to build it before starting it.
:::

To start the bot, run `npm run start` from your root folder (the one with `package.json`). The bot will run in your current terminal window, printing some informative messages over time.

To stop the bot, press <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>C</kbd>, which will signal the bot to shut down. On Windows, you might be asked if you want to terminate the batch job. Answer yes to this (by entering `y`).

## Updating

To update the bot when we release a new version:

1. Download the latest release from Github (or pull the latest changes with git).
2. Extract the release to the same location, overwriting the existing files; we don't include any configuration files in the release, so this should only update the files you haven't set up yourself.
3. Start the bot to make sure it works, then continue using it as usual.

:::caution
If you downloaded the bot from git or a source archive, you will need to run the build commands again. The bot should warn you if you're still running an old version after updating.
:::

## Next steps

Now that you've got the bot running, check out the [Using fluid-queue](../../fluid-queue/index.md) section to learn about how to operate the bot through your chat.
