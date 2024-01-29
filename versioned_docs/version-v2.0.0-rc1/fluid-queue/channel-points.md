---
sidebar_position: 4
---

# Channel Point Rewards

:::tip
This feature requires a broadcaster token with the `channel:manage:redemptions` and `channel:read:redemptions` scopes.
:::

fluid-queue supports creating, managing, and monitoring a "skip queue" channel point reward, which will allow a user to redeem channel points and automatically skip the queue--no manual intervention required!

## Overview

When you enable the skip queue feature, the bot will automatically create a channel point reward for you based on the settings you provide, and then monitor for redemptions of that reward. It will maintain an internal list of users who redeemed the reward, and (when you use `!level`) insert them in between your selection commands according to your settings. There are options to limit redemptions, either through Twitch's built-in limits (a global cooldown, a per-user limit) or through a limit managed by the bot (a global limit on how many times the reward can be redeemed per stream). There is also an option to space skips one or more normal levels apart from each other, which can ensure that even as viewers redeem the reward, your viewers who didn't redeem it still get a fair chance to see their levels played.

Once configured through `settings/channel-points.yml`, the reward will be fully managed by the bot. When the bot starts, it will check to see if the reward exists (and is owned by the bot) and create it if not. If the reward does exist, it will then check to make sure it's configured correctly, and update the settings on Twitch if it detects any changes.

## Setup

:::caution
Don't create the reward yourself, or the bot will be unable to start! Configure the reward, and let the bot create it.
:::

:::tip
Twitch will only let the bot manage rewards owned by its client ID. This means that, if you set up a channel point reward and then change the client ID the bot uses, you'll need to delete the reward on Twitch. This is only likely to be an issue in certain situations, but keep it in mind if you're planning on switching to the new Device Code Grant Flow (coming in a future release).
:::

First, create your `settings/channel-points.yml` file. You may be able to copy the existing `channel-points.example.yml` file, if you set up the bot from a packaged release.

<details>
<summary>channel-points.example.yml</summary>


```yml
---
rewards:
  skip_queue:
    enabled: true           # Whether the reward should be created and monitored by the bot
    name: "Pway My Wevel!"  # What the reward should be named
    prompt: null            # What description (if any) the reward should have
    cost: 10001             # How many channel points the reward should cost

    global_limit: 2         # A per-stream limit, enforced by the bot, of how many times this can be redeemed.
                            # Will reset every time the bot is started, or when the bot notices the stream go offline.
                            # Similarly, when this limit is hit, the bot will pause the reward, and unpause it when the bot is started or notices the stream go offline.

    per_user_limit: 1       # A per-user per-stream limit, enforced by Twitch.
    global_cooldown: 180    # A global cooldown on the reward, enforced by Twitch. Specified in seconds.
skip_spacing: 1         # How many levels should be played in between queue-skip levels.
                        # This does not prevent redemptions. This just ensures that the specified number of non-skip levels are played in between skip levels.
```


</details>

Edit this to your liking, then start the bot as normal; the bot will create the reward and automatically start managing it for you.

## Using the reward

:::tip
The reward will only work correctly if you use the `!level` command (or an alias) to select levels.
:::

The reward can only be redeemed by a viewer who has a level in the queue. When a viewer redeems the reward successfully, the bot should thank them, and you should see the reward appear in your pending rewards on Twitch. Once their level is selected, the bot will automatically mark the redemption as fulfilled. Removing a user, selecting their level directly, or the user leaving the queue themselves, will automatically remove them from the internal skip queue and refund their points. Similarly, refunding their points will also remove them from the internal skip queue.

If you have a per-stream limit set, whenever a reward is refunded it will be added back into the "pool" of rewards that can be redeemed; this way, we can avoid Twitch's longstanding issue where refunding a reward will not allow someone else to redeem it. Once the per-stream limit is reached, the bot should automatically pause the reward to prevent future redemptions (and will reject any redemptions that manage to come through anyway). If anyone is refunded after the reward is paused, it should automatically unpause as well.

## Updating the reward

If you want to update the reward, update your configuration in `channel-points.yml`. Any changes made within that file will be synced to Twitch the next time you start the bot.

## Disabling the reward

If you want to disable the reward temporarily, you can change `enabled: true` to `enabled: false` and then delete (or disable) the reward on Twitch. The bot should no longer create or manage the reward until you re-enable it from the config.

Similarly, to permanently disable the reward, you can delete the configuration file and then remove the reward from Twitch.
