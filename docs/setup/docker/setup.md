---
sidebar_position: 1
---

# Configuring your environment

You'll need to set up a folder structure for your configuration and data files. Let's assume you're planning on keeping the bot in `C:\Users\Player\fluid-queue`; by the end of setup, that folder should look like this:

- `fluid-queue`
  - `data` (empty folder)
  - `settings`
    - `tokens.json`
    - `tokens.broadcaster.json` (optionally)
    - `settings.yml`
  - `docker-compose.yml`

Make sure you create both the `data` and `settings` folders now. Most of the files mentioned will be addressed in the next sections; we'll cover `docker-compose.yml` in this section, which should be pretty simple.

## docker-compose.yml

First, download the [sample Compose file](https://raw.githubusercontent.com/fluid-queue/fluid-queue/main/docker-compose.sample.yml) from git and save it as `docker-compose.yml` in your root folder. Then edit it, making sure that you have the correct tag set in the "image" field. Refer below for the full descriptions of each tag, though you're probably fine to just leave it at `latest`. If you're using a different folder structure than described here, remember to adjust your volumes.

## Permissions

Docker uses the permisions from your filesystem, which may not line up with the state inside the Docker container: the bot runs as UID 1000 in Docker, which means that UID 1000 needs to be able to access the files in your `settings` and `data` directories. The easiest way to ensure this is with a quick `chmod -R go+rw data/ settings/` from your root directory. If you run into any issues starting the bot with Docker, they're probably permission issues, and you can probably solve them by making sure everyone can write to your data and settings folders.

If you're in a shared environment, you will want to be more careful with your permissions, since `tokens.json` in particular contains secrets you shouldn't let anyone else access. While there are ways to apply tighter control to the permissions, they are unfortunately out of scope for this document.

## Tags

We have a few autobuilds set up, as detailed in the following table:

| Tag                                        | Rule                                                 | Description                                                                                                         |
|--------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| latest                                     | Every push to `main`                                 | The latest stable updates.                                                                                          |
| develop                                    | Every push to `develop`                              | The bleeding-edge. May not be as stable, but will always be up to date.                                             |
| release-*                                  | Every manually tagged stable release (`v1.2.3`, etc) | Specific stable versions.                                                                                           |
| 2.0.0-beta.1<br />(and similar version tags) | Every manually tagged prerelease.                    | Specific alpha/beta/prerelease versions. Tagged on git as just the version number, rather than with a prefixed `v`. |

In general (and once we've done a proper full release), we would recommend tracking `latest`, however we try to keep `develop` stable as well.