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
- Roy's first big idea (spoken): "When I tap on that egg, it should hatch and a baby raptor Blue would come out." This became the Egg Lab.
- Tapping the egg 3 times (crack, crack, hatch) is more exciting for Roy than hatching on the first tap.
- Roy's second idea (spoken): "Jurassic World should be on an island surrounded by water. To get to the island, you have to take a boat and then go through the jungle. Then you can go through the gates." This became the trip at the start of the game.
- Roy thinks about the whole world of the game, not just the dinosaurs. His ideas are about journeys and places.
- Roy's third idea (spoken, not finished yet, he paused): "Now we're building the park and in the park there's gonna be 20 cages with dinosaurs. The cages are gonna be big and far away from each other." So far: Blue the raptor in one cage, then T-Rex, Brachiosaurus and Compsognathus. Roy will tell us the rest.
- Idea: the game itself could listen to Roy too, for example saying a name out loud to name a new dinosaur.

## Progress

- 2026-10-03: Created the `Roy` folder with `Claude.md` and `Memory.md`.
- 2026-10-03: Added project context to `Claude.md`.
- 2026-10-03: Created `Project-Overview.md` with the game idea, look and feel, main parts, gamification, safety, technology and a 7-step build plan.
- 2026-10-03: Organised `Memory.md` into learning, takeaways, progress and decisions, and added a top-level `CLAUDE.md` so every new session loads the project context.
- 2026-10-03: Added "How Roy talks to Claude" to `Claude.md`, because Roy gives instructions by speaking.
- 2026-10-03: **Step 1 done: Park Gate home screen** (`Roy/game/index.html`). Night jungle with a giant wooden gate, torches and a "ROY'S DINO PARK" sign. Tapping the gate roars, shakes and swings it open, then the park map appears with Egg Lab, Dino Book, Dino Care, Build Park and Missions (all locked for now, Egg Lab glowing as next). Tops, a baby triceratops ranger, talks in a speech bubble and out loud. Stars counter, Park Opener badge, 3 hidden secrets and the Jungle Explorer badge. Sound on/off button. Progress saves on the device. Tested at iPad and phone sizes.
- 2026-10-03: Published a playable preview at https://claude.ai/artifact/1j9X2trZp4YDxJJUj44Ec3 (private to Roy's parent's account).
- 2026-10-03: **Step 2 done: Egg Lab, from Roy's own idea.** Tap the Egg Lab on the park map to go inside: a warm lamp shines on a spotted egg in a nest. Tap it: crack, crack, then it hatches, eggshell bits fly, and a baby blue raptor called Blue pops out with a squeak. Roy gets a star and the First Hatch badge. Tap Blue to make her hop, squeak and say fun things. "Hatch again" replays it (no extra stars). A home button goes back to the gate. Blue is saved, so she is there next time. Tested at iPad (both ways round) and phone sizes. Preview updated at the same link.
- 2026-10-03: **Added the trip to the island, from Roy's idea.** The game now starts at sea at night: the park island (volcano, palm trees, a tiny glowing gate and a dock) sits on the water. Tap the boat 3 times: chug chug, it sails closer and the island grows, then the horn toots: "Land ho!" First time gives a star and the Boat Captain badge. Then the jungle: tap 3 layers of big leaves to swish them aside (a little dinosaur peeks out after the second), the gate appears, and you arrive at the Park Gate. Tested at iPad (both ways round) and phone sizes. Preview updated at the same link.
- 2026-10-03: Roy started describing the Build Park area: 20 big cages, far apart, each with a dinosaur. Waiting for him to finish his list before building.
- **Next:** Step 3, the Dino Book: Blue becomes the first dinosaur in Roy's collection. Dino Book now glows on the park map as next.

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
- 2026-10-03: The first dinosaur is Blue, a baby blue raptor, because Roy asked for it. She is our own drawing (blue body, dark stripe, big orange eyes, fluffy head), not a copy of the movie character.
- 2026-10-03: The game always starts with the boat trip and jungle walk, then the gate. It takes 6 taps. If it starts to feel too long for Roy, we can add a shortcut later. The Egg Lab home button goes straight back to the gate, not to the boat.
