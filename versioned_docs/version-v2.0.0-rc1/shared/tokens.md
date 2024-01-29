The Twitch API is, unfortunately, designed in a way that makes using a bot like this a little more involved than it ought to be. This section will help you deal with the API requirements. It probably seems a little daunting if you're not familiar with what the "Authorization Code Grant Flow" is, but we've done most of the worrying about that for you—there's only a little bit left that you need to do: register an application with Twitch and set up your initial tokens.

## Registering an application

Per Twitch requirements, you'll need to have a verified email and 2FA enabled for this to work, so make sure you've done that first. Once you have, go to the [Twitch developer console](https://dev.twitch.tv/console) and log in with your Twitch account. From there:

1. Open the "Applications" tab and click "Register your Application"
2. Pick a name for your bot's application. You'll be the only person to ever see this name, so don't think too hard about it!
3. Set the OAuth Redirect URL to `http://localhost:3000`
4. Set the category to "chatbot"
5. Prove *you* aren't a bot (with the "I'm not a robot" checkbox)
6. Click "Create".

You should be redirected back to the Applications tab, where your application should be listed now. If you click "Manage" on the application, you'll be taken to a new page. Note down the **Client ID** listed here, and click the "New Secret" button to generate and note down a **Client Secret**.

## Generating tokens

Now you need to use that Client ID and Client Secret to generate an access token and a refresh token. This will require installing the [Twitch CLI](https://dev.twitch.tv/docs/cli/), so follow the instructions there; on Linux, the manual install option is probably easiest, and on Windows it's probably easiest just to install Scoop and use it (this will require using Powershell instead of Command Prompt).

Once you have the Twitch CLI installed, you'll need to generate either one or two sets of tokens, based on how you plan on using the bot:

<details>
<summary>Running the bot under your Twitch account</summary>

This is the simpler of the two options, as it provides full functionality while only requiring one set of tokens. Just follow these steps:

1. Make sure you're logged into Twitch
2. In your terminal (or Powershell) window, run the command `twitch token -u -s "chat:read chat:edit moderator:read:chatters channel:read:subscriptions moderation:read channel:manage:redemptions channel:read:redemptions"`.
3. When prompted, enter your Client ID and Client Secret from earlier. You'll need these again when you're configuring the bot, so don't get rid of them!
   - Pasting into a terminal window usually requires right clicking instead of pressing Control+V; Control+V has a different meaning inside a terminal window.
4. Authorize your application to access your account in your browser, when it opens an authorization page.
5. The Twitch CLI will output a **User Access Token** and a **Refresh Token**. Note these down too!


</details>

<details>
<summary>Running the bot under a dedicated Twitch account</summary>

This option is more complicated, as it requires two sets of tokens. While you *can* configure the bot only with its own token, if you don't also provide a token for your own Twitch account, you'll be missing some functionality: specifically, getting the lists of your subscribers and moderators requires a broadcaster token. Without those lists, someone lurking in chat will be noticed by the bot, but won't be counted by the bot as a subscriber/moderator until they speak in chat. This means that `!subnext` (etc) and the subscriber multiplier for weighted next and weighted random will not apply until they speak in chat. In addition, the channel point functionality relies on a broadcaster token. As such, we strongly recommend providing both tokens.

To generate your tokens:

1. Log in to the Twitch website with your broadcaster account.
2. In your terminal (or Powershell window), run the command `twitch token -u -s "moderator:read:chatters channel:read:subscriptions moderation:read channel:manage:redemptions channel:read:redemptions"`.
3. When prompted, enter your Client ID and Client Secret from earlier. You'll need these again when you're configuring the bot, so don't get rid of them!
   - Pasting into a terminal window usually requires right clicking instead of pressing Control+V; Control+V has a different meaning inside a terminal window.
4. Authorize your application to access your account in your browser, when it opens an authorization page.
5. The Twitch CLI will output a **User Access Token** and a **Refresh Token**. Note these down; these are your broadcaster tokens, and will be used to populate `tokens.broadcaster.json` later.
6. Log out of the Twitch website, then log back in with your dedicated bot account.
7. Run `twitch token -u -s "chat:read chat:edit"`.
8. Authorize your application to access your bot account.
9. Note down the new User Access Token and Refresh Token. These are your bot tokens, and will be used in `tokens.json`.


</details>

