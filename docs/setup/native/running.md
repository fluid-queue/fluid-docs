---
sidebar_position: 4
---

# Running the bot

Now that you're all set up, you can start the bot!

## Starting the bot

:::caution
If you didn't run `npm install` earlier, now is a good time to do that.
:::

To start the bot, run `npm run start` from your root folder (the one with `package.json`). The bot will run in your current terminal window, printing some informative messages over time.

To stop the bot, press <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>C</kbd>, which will signal the bot to shut down. On Windows, you might be asked if you want to terminate the batch job. Answer yes to this (by entering `y`).

## Updating

To update the bot when we release a new version:

1. Download the latest release from Github (or pull the latest changes with git).
2. Extract the release to the same location, overwriting the existing files; we don't include any configuration files in the release, so this should only update the files you haven't set up yourself.
   :::tip
   Make sure you're overwriting the existing files, or your configuration won't be in the right place anymore.
   :::
3. Run `npm install` to update the bot's dependencies.
4. Start the bot to make sure it works, then continue using it as usual. 

## Next steps

Now that you've got the bot running, check out the [Using fluid-queue](/docs/category/using-fluid-queue) section to learn about how to operate the bot through your chat.