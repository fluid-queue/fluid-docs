---
sidebar_position: 1
slug: /
---

# Introduction

`fluid-queue` is a self-hosted Twitch bot running on Node.JS and written in Typescript. `fluid-queue` is designed to be a pretty versatile viewer queue bot, supporting primarily Mario Maker 2 levels, but extensible to other queues as well!

## Supported installation methods

We offer an official, automatically built Docker container, as well as traditional releases on Github. Both methods are officially supported, so which method you choose is up to you.

### Docker

Docker contains the entire application within one Docker container, which simplifies installing and updating the bot, but will be harder to modify. Our Docker autobuilds are hosted on [Docker Hub](https://hub.docker.com/r/fluidqueue/fluid-queue).

### Native

You can also run the bot natively, either by downloading a precompiled tagged release from Github, or by cloning the repository and compiling it yourself. You'll need to install Node.js in either case.

---------

In both cases, you'll need to run some commands in your terminal. On Windows we would generally recommend running them in Powershell, though a command prompt should work fine too. Once you've decided which method to use, continue to either [Docker setup](docker/index.md) or [Native setup](native/index.md).