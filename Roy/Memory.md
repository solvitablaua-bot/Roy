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
- Roy's third idea (spoken, not finished yet, he paused): "Now we're building the park and in the park there's gonna be 20 cages with dinosaurs. The cages are gonna be big and far away from each other." Then he added: "It's gonna be Triceratops, Spinosaurus, and Dilophosaurus." So the first 7 are Blue the raptor, T-Rex, Brachiosaurus, Compsognathus, Triceratops, Spinosaurus and Dilophosaurus. Then Roy asked: "Can AI find just some other dinosaurs and put them in the rest?" So Claude picked the other 13.
- Roy is happy to let Claude choose when he runs out of ideas. Claude picked well-known dinosaurs that look different from each other, so each cage is easy to tell apart.
- Roy's fourth idea (spoken): "Dilophosaurus needs meat every day. Brachiosaurus needs to be fed leaves every day. Ankylosaurus, figure out what kind of food he wants to eat. T-Rex needs meat every day. And the dinosaurs need to be washed, scrubbed in a bath in their cages so they can be clean." This became Dino Care.
- A daily routine (feed and wash every day) gives Roy a reason to come back each day, like having real pets.
- Choosing the right food is a gentle guessing game that teaches what each dinosaur ate.
- Empty cages are a good way to keep Roy's ideas coming: each one has a "?" sign, and Tops asks "Roy, which dinosaur should live here?"
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
- 2026-10-03: Roy started describing the Build Park area: 20 big cages, far apart, each with a dinosaur.
- 2026-10-03: **Built the big park, from Roy's idea** (Build Park on the park map). A big park you swipe around, with 20 big numbered cages far apart, joined by a sandy path, with palm trees and a river with a wooden bridge. Cages 1 to 7 hold Blue, T-Rex, Brachiosaurus, Compsognathus, Triceratops, Spinosaurus and Dilophosaurus (Brachiosaurus's neck sticks out over the fence, Compsognathus is tiny). Tap a cage: the dinosaur appears big with its name, its own sound and a simple fact that Tops reads out. First visit to each gives a star, and visiting all 7 gives the Dino Keeper badge. Cages 8 to 20 are empty with a "?" sign. Tested at iPad and phone sizes. Preview updated at the same link.
- 2026-10-03: **Filled cages 8 to 20, chosen by Claude because Roy asked.** 8 Stegosaurus, 9 Ankylosaurus, 10 Pteranodon (flying), 11 Parasaurolophus, 12 Pachycephalosaurus, 13 Gallimimus, 14 Carnotaurus, 15 Diplodocus, 16 Allosaurus, 17 Iguanodon, 18 Baryonyx, 19 Therizinosaurus, 20 Mosasaurus (in a water cage). Each has its own drawing, sound and fact. Dino Keeper badge now means visiting all 20. Preview updated at the same link.
- 2026-10-03: **Built Dino Care, from Roy's idea** (Dino Care on the park map, or any cage). Each cage shows what its dinosaur needs today: a bowl means hungry, a mud drop means muddy, a heart means all done. Tap a cage, then:
  - **Feed:** pick meat, leaves or fish. The food flies to the dinosaur's mouth. Right food: munch sound, hearts, a star. Wrong food: the dinosaur shakes its head, "Bleh!", and Roy tries again (no losing). For Ankylosaurus, Tops says "Let's figure it out!" and Roy discovers it eats leaves and low plants.
  - **Wash:** a bath appears with mud blobs on the dinosaur. Roy rubs them off with his finger, with bubbles and pops. When clean: "Squeaky clean!", hearts and a star.
  - Every new day, all dinosaurs are hungry and muddy again (Roy said they need food every day). New badges: Dino Chef (first feed), Bath Time (first wash) and Happy Park (all 20 fed and washed on the same day).
  - Tested at iPad and phone sizes. Preview updated at the same link.
- **Next:** Ask Roy what he wants next. Ideas: the Dino Book (all of Roy's dinosaurs in one sticker book) and Missions. Roy can also swap any of Claude's 13 picks for dinosaurs he likes better.

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
- 2026-10-03: Build Park is a big park map with 20 cages, as Roy described. The plan's "drag and drop enclosures" idea is replaced by Roy's version. New dinosaurs are added to the `DINOS` list in `Roy/game/index.html` and fill the next empty cage.
- 2026-10-03: Dinosaur facts stay true and simple (for example, Compsognathus was about as small as a chicken). Dilophosaurus is drawn with its real head crests, without the made-up neck frill and spitting from the films.
- 2026-10-03: Pteranodon and Mosasaurus are not dinosaurs (one is a flying reptile, one is a sea reptile), but they are in the park because kids know them from the films, and their facts say what they really are. Mosasaurus has a water cage.
- 2026-10-03: The new dinosaurs are drawn with two shared shapes (one for dinosaurs on two legs, one for four legs) plus each dinosaur's own features, which keeps the code short and the style the same.
- 2026-10-03: Dinosaur diets follow real science: meat for Blue, T-Rex, Compsognathus, Dilophosaurus, Carnotaurus and Allosaurus; fish (or meat) for Spinosaurus and Baryonyx; fish for Mosasaurus and Pteranodon; leaves for Brachiosaurus, Triceratops, Stegosaurus, Ankylosaurus, Parasaurolophus, Pachycephalosaurus, Diplodocus, Iguanodon and Therizinosaurus; leaves or meat for Gallimimus.
- 2026-10-03: Feeding and washing happen inside each cage's visit card, as Roy said ("in their cages"). Care resets each day using the iPad's date. Picking the wrong food is never a failure: the dinosaur says "Bleh!" and Roy tries again.
