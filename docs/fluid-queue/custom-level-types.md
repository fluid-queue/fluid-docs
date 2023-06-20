---
sidebar_position: 2
---

# Custom level types

Custom level types are levels that have no level code associated.

For example one might play uncleared levels from time to time and while doing viewer levels a viewer might want to submit an uncleared level (`!add uncleared`), but does not want to add a specific uncleared level to the queue. When the level gets picked, there will be no code and the streamer only sees that an uncleared level was picked and then the streamer may pick an uncleared level on their own.

Some more examples would be to be able to submit a maker team level (like team shell, team jamp or team precision) without submitting a specific level code, or to be able to submit a no skip super expert run etc. This could also be used to submit maker 1 levels or could be used for other games in general by just having a custom level type for that game and when people get picked they could join that game for example etc.

#### Setting up custom level types

There are some build-in custom level types:

- **Uncleared levels**

  To enable uncleared levels make sure to set `uncleared_enabled` to `true` in `settings.json`.
  To add uncleared levels use:
  `!add Uncleared`, or any of the alternatives: `!add UNC-LEA-RED`, `!add an uncleared level`, `!add uncleared level`

- **ROMhacks**

  To enable ROMhacks make sure to set `romhacks_enabled` to `true` in `settings.json`.
  To add ROMhacks use:
  `!add ROMhack`, or any of the alternatives: `!add R0M-HAK-LVL`, `!add rom hack`

You can also add your own custom levels:

`!customlevel add {customCode} {levelName...}`

where `customCode` will be a custom code how you will add this custom level with `!add {customCode}` and `levelName...` can be multiple words to describe the custom level.

For example the level name of an uncleared level is `an uncleared level`.
The level name will appear in sentences like these:

- `Currently playing {levelName...} submitted by {user}.`
- `{user}, you have submitted {levelName...} to the queue.`
- `{user}, {levelName...} has been added to the queue.`
- `{user}, your level in the queue has been replaced with {levelName...}.`

For example you could use this command to be able to add team shell levels to the queue: `!customlevel add teamshell a team shell level`
and when someone uses `!add teamshell` then the bot will respond with `[...], a team shell level has been added to the queue.`.

#### Removing custom level types

To remove ROMhacks you would need to set `romhacks_enabled` to `false` and to remove uncleared levels you would need to set `uncleared_enabled` to `false`.

The custom level type is added/removed automatically from the custom level types list in `./data/queue.json` depending on the configuration. If the configuration is set to `false`, but there are still levels in the queue, then they will still show up and are still saved to the json file, however no new levels can be added to the queue. Whenever all levels are removed from the queue (e.g. by them getting picked or by using `!clear` to remove all levels from the queue) and the configuration is set to `false` then the custom level type is removed from the save file.

To remove other custom levels use the following command:

`!customlevel remove {customCode}`

E.g. `!cusomlevel remove teamshell`

To disable custom levels instead use:

`!customlevel disable {customCode}`

Disabling custom levels will make them not submittable, but levels that are still present in the queue will still be displayed correctly.

To enable custom levels again use:

`!customlevel enable {customCode}`

You can add more codes to a custom level with:

`!customlevel code add {newCode} {customCode}`

And also remove codes with:

`!customlevel code remove {customCode}`

#### Importing/Exporting custom level types

To make sharing and installing custom level types easier the queue has an import and export function.

`!customlevel export {customCode}`

`!customlevel import {json}`

For example:

```
!customlevel add teamshell a team shell level
Created custom level "a team shell level" with code teamshell.
!customlevel code add TS teamshell
Added the code TS to the custom level with the name "a team shell level" and codes teamshell, TS.
!customlevel export TS
["d762ea56-cb01-4215-9e9c-1c4e7626da3f","a team shell level","teamshell","TS"]
```

Now someone else can just import that custom level:

```
!customlevel import ["d762ea56-cb01-4215-9e9c-1c4e7626da3f","a team shell level","teamshell","TS"]
Created custom level "a team shell level" with codes teamshell, TS.
```
