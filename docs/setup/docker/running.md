---
sidebar_position: 4
---

# Running the bot

:::tip
Depending on how your system is configured, you may need to use `docker compose` or `docker-compose` here. We'll be using `docker compose` on this page, but if that doesn't work, try with a dash.
:::

Now that you're all set up, you can start the bot!

## Starting the bot

:::caution
Make sure your permissions are configured correctly, as described in the [Configuring your environment](setup#permissions) section!
:::

To start the bot for the first time, run `docker compose up` from your root folder (the one with `docker-compose.yml`). This will pull the image from Docker and start the bot "attached" to your terminal session. To stop the bot, press <kbd>Ctrl</kbd>&nbsp;+&nbsp;<kbd>C</kbd>, which will signal Docker to shut down the container.

## Running the bot in the background

The recommended way to use the docker container is to let it run in the background, "detached" from your terminal. To start the bot detached, you can run `docker compose up -d`; if you need to stop the bot, you can run `docker compose down`.

## Updating

To update the bot when we release a new version, you just need to run a few commands:

```sh
$ docker compose down -v # to stop the container and delete "ephemeral" volumes; run this even if you've already stopped the bot
$ docker compose pull # to update the bot with the latest image from Docker Hub
$ docker compose up -d # to start the bot again!
```

`watchtower` or similar tools should likely work without issue as well.

## Next steps

Now that you've got the bot running, check out the [Using fluid-queue](/docs/category/using-fluid-queue) section to learn about how to operate the bot through your chat.