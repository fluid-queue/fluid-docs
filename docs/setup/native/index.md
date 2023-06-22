# Native prerequisites

In order to run the bot natively, you need to have Node.JS installed. While you *can* install Node directly, we strongly recommend using [Volta](https://volta.sh) to manage your Node installation, as it makes the process of upgrading much smoother. fluid-queue targets and is tested on the latest LTS release, so we recommend running `volta install node` to install the latest LTS release.

You'll also need a copy of the bot. We would recommend going to our [releases page](https://github.com/fluid-queue/fluid-queue/releases) and downloading the latest prepackaged release.


<details>
<summary>Advanced use: building the bot from source</summary>

For advanced users, you can also download a source archive or clone the repository with `git clone https://github.com/fluid-queue/fluid-queue`. Our prepackaged releases are already bundled and minified, so these methods will require a bit of extra effort (and installation of a substantial `node_modules` folder). We'd recommend using the prepackaged releases for greater simplicity, though we will still support building from source.

</details>

Once you've downloaded and extracted a release (or cloned the bot from git), proceed to the next step.
