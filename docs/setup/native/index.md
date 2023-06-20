# Native prerequisites

In order to run the bot natively, you need to have Node.JS installed. While you *can* install Node directly, we strongly recommend using [Volta](https://volta.sh) to manage your Node installation, as it makes the process of upgrading much smoother. fluid-queue targets and is tested on the latest LTS release, so we recommend running `volta install node` to install the latest LTS release.

You'll also need a copy of the bot. We would recommend going to our [releases page](https://github.com/fluid-queue/fluid-queue/releases) and downloading the latest release. You can also clone the repository with `git clone https://github.com/fluid-queue/fluid-queue` if you'd prefer.

:::caution
At the time of writing, `2.0.0-beta.3` is our latest release, and running the bot is identical between git and packaged releases. Following this release, the bot was switched to Typescript and needs to be compiled! We will be publishing precompiled releases that are bundled and minified, so if you use packaged releases, nothing will change--but if you use git, you will need to build the bot before you can run it.
:::

Once you've downloaded and extracted a release (or cloned the bot from git), proceed to the next step.
