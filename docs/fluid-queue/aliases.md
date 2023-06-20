---
sidebar_position: 3
---

# Managing command aliases

The following list of commands are available to the broadcaster to manage aliases:

`!aliases` will display the available aliases management commands and the available commands you can put aliases for.

- `!addalias command alias` adds the alias `alias` for command `command`
- `!removealias command alias` removes the alias `alias` for command `command`
- `!enablecmd command` enables the command `command`
- `!disablecmd command` disables the command `command` entirely.
- `!resetcmd command` resets the command `command` to default values.

The aliases are saved in a file in `./settings/aliases.json`. Please use this with caution. It might render the bot inoperable.