# Memory.md

## Instructions

Use Memory.md to document everything that we are doing in this project:

- what we are learning;
- the key takeaways and ideas that we discuss together;
- progress on our project;
- any important decisions.

Keep Memory.md up to date at all times. Every time we start a new session, read `Claude.md` and `Memory.md` to gain full project context.

## What we are learning

- Claude Code runs in a cloud container, not on the iPad. Project files live in the GitHub repository `solvitablaua-bot/Roy` and can be opened on the iPad through the Claude app, the GitHub app or a git app such as Working Copy.
- Claude automatically reads a file called `CLAUDE.md` at the top of the repository when a session starts. Files in subfolders, such as `Roy/Claude.md`, are only read if something points to them.
- Roy can't write yet, so he speaks his instructions and voice dictation turns them into text. Claude has to understand messages with odd spellings and made-up words.
- Sounds (roar, rumble, chimes) are made by code in the browser (Web Audio), so there are no sound files to copy or license. Tops the guide reads lines aloud with the iPad's built-in voice. Sound only starts after the first tap, which is a browser rule.

## Key takeaways and ideas

- The game is "Roy's Dino Park": Roy is the park creator who hatches, names, cares for and houses dinosaurs.
- Roy is also a co-designer. His own ideas get added to the game over time.
- It should feel like the Jurassic movies (jungle, amber, park gate, warning signs, roars) but stay exciting and never scary.
- Gamification: stars, ranger levels, badges, a daily mystery egg, and no way to lose.
- Every build step should end with something Roy can play, so he sees his game grow.
- Hidden secrets make exploring fun: tapping the volcano, the moon and the bush each gives a star, and finding all three gives the Jungle Explorer badge. More secrets can be added in each new area.
- Idea: the game itself could listen to Roy too, for example saying a name out loud to name a new dinosaur.

## Progress

- 2026-10-03: Created the `Roy` folder with `Claude.md` and `Memory.md`.
- 2026-10-03: Added project context to `Claude.md`.
- 2026-10-03: Created `Project-Overview.md` with the game idea, look and feel, main parts, gamification, safety, technology and a 7-step build plan.
- 2026-10-03: Organised `Memory.md` into learning, takeaways, progress and decisions, and added a top-level `CLAUDE.md` so every new session loads the project context.
- 2026-10-03: Added "How Roy talks to Claude" to `Claude.md`, because Roy gives instructions by speaking.
- 2026-10-03: **Step 1 done: Park Gate home screen** (`Roy/game/index.html`). Night jungle with a giant wooden gate, torches and a "ROY'S DINO PARK" sign. Tapping the gate roars, shakes and swings it open, then the park map appears with Egg Lab, Dino Book, Dino Care, Build Park and Missions (all locked for now, Egg Lab glowing as next). Tops, a baby triceratops ranger, talks in a speech bubble and out loud. Stars counter, Park Opener badge, 3 hidden secrets and the Jungle Explorer badge. Sound on/off button. Progress saves on the device. Tested at iPad and phone sizes.
- 2026-10-03: Published a playable preview at https://claude.ai/artifact/1j9X2trZp4YDxJJUj44Ec3 (private to Roy's parent's account).
- **Next:** Step 2, the Egg Lab: hatch and name the first dinosaur.

## Important decisions

- 2026-10-03: Project files are kept in the GitHub repository `solvitablaua-bot/Roy`, in the `Roy` folder, on the `main` branch.
- 2026-10-03: Build a website (plain HTML, CSS and JavaScript, no build step) that works on iPad Safari with touch.
- 2026-10-03: Design for a six-year-old: big picture buttons, spoken instructions, very little text.
- 2026-10-03: No accounts, ads, chat, purchases or external links. Progress is saved only on the device.
- 2026-10-03: Use original art, sounds and names, inspired by the movies, without copying official Jurassic World logos, characters or assets.
- 2026-10-03: A top-level `CLAUDE.md` loads `Roy/Claude.md` and `Roy/Memory.md` automatically at the start of every session.
- 2026-10-03: Roy gives instructions by speaking, not writing. Claude reads dictated messages generously, asks one simple question at a time and replies in short, simple sentences that can be read aloud.
- 2026-10-03: The guide character is Tops, a friendly baby triceratops in a ranger hat. Original design.
- 2026-10-03: The game lives in `Roy/game/`, with `index.html` as the start page. Progress (stars, badges, secrets found, sound setting) is saved in the browser on the iPad.
