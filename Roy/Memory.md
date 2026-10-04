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
- Claude tests the game in a Chrome-based test browser, but Roy plays on an iPad (Safari), which can draw some layouts differently. A picture that works out its own size from its shape can go wrong on the iPad. It is safer to put pictures in boxes with a fixed size, so the picture just fills the box. When Roy says something looks broken, believe him even if it looked fine in testing.

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
- Roy's fifth idea (spoken): "I want the people to go to the jungle and find all kinds of new species of dinosaurs. And when they find a new species, we put it in the cage. That will be the ranger adventure." This became Ranger Missions.
- Roy's ideas now connect into one loop: go on a mission, find a new species, it gets a new cage in the park, then feed and wash it every day.
- Roy's sixth idea (spoken): "In the Dino Book, collect all the missions. Think of at least 10 missions that are described in the Dino Book, and you can go through the book and choose which mission you want to complete and what's good in that mission." This turned the Dino Book into a book of missions.
- Roy likes choosing for himself: the book lets him pick any mission in any order, and each page shows what he can win.
- Mystery silhouettes (a dark shadow of the dinosaur until it is found) make Roy curious about who is hiding.
- Roy's seventh idea (spoken): "You need to create a pet shop where there's going to be pet dinosaurs and people can come buy their own pet dinosaur." This became the Pet Shop, where Roy is the shopkeeper.
- Listening to what each customer wants and finding the matching pet is a gentle matching game that practises noticing features (horns, crests, long necks, colours, what they eat).
- Roy's feedback on the Pet Shop (spoken): "I want to see the people who are coming inside the pet shop. I want to see their faces and their whole body." Roy cares about the people in his world, not only the dinosaurs, and wants them big and detailed.
- Roy's eighth idea (spoken): "Now from the Dino Book, build all the missions that are described in the Dino Book." Roy noticed the missions all played the same way (tap the bushes). Each mission should do what its page says.
- Different kinds of play keep missions fresh for Roy: following footprints, listening for a sound, watching for someone peeking, hopping across stones, and spotting the odd one out.
- Roy's ninth idea (spoken): "I want a memory game of dinosaurs in my park. When you tap on cards, dinosaurs pop out. You have to find two of the same dinosaurs." This became the Memory game.
- Choosing a small, middle or big game lets Roy pick how hard it is, and the bigger game gives more stars.
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
- 2026-10-03: **Built Ranger Missions, from Roy's idea** (Missions on the park map). Two rangers drive their jeep into the jungle. Six big bushes hide things: Roy taps them to search and finds butterflies, frogs, birds, and dinosaur footprints (which make the right bush wiggle as a hint). One bush hides a new species: it appears big with its name, sound and fact. Roy taps "Take it to the park": the dinosaur goes in a crate, the jeep drives off, Roy gets a star, and a new cage (21, 22, ...) appears in the park, which grows bigger to fit. "Visit its cage" jumps to it on the map; the new dinosaur is hungry and muddy, ready for Dino Care. There are 8 species to find, one per mission: Styracosaurus, Microraptor, Oviraptor, Corythosaurus, Kentrosaurus, Ceratosaurus, Sinosauropteryx and Argentinosaurus. Badges: Species Finder (first find) and Expedition Master (all 8). When all 8 are found, Tops asks Roy to tell Claude about a brand new dinosaur. Tested at iPad and phone sizes, including that new cages stay after reloading. Preview updated at the same link.
- 2026-10-03: **Built the Dino Book, from Roy's idea** (Dino Book or Missions on the park map; both open the book). An open leather book with two pages side by side on the iPad (one page on a phone) and big arrow buttons to turn pages. Each page is one mission: number, place, picture, title, short description, reward ("what's good"), and a big Start! button. Done missions get a green DONE! stamp and a "Play again" button. Tops reads each page out loud when Roy turns to it or taps the picture. 13 missions:
  1. Spiky Frill Hunt (Jungle): find Styracosaurus
  2. Four-Wing Flyer (Tall Trees): find Microraptor
  3. Egg Rescue (Jungle): find 3 lost eggs, Egg Rescuer badge
  4. Nest Patrol (Rocky Desert): find Oviraptor
  5. T-Rex Escape! (Jungle): find T-Rex and take him home, Fence Fixer badge
  6. Swamp Song (Swamp): find Corythosaurus
  7. Feeding Time (Your Park): feed 5 dinosaurs today, every day
  8. Spike Valley (Rocky Desert): find Kentrosaurus
  9. Volcano Horn (Volcano): find Ceratosaurus
  10. Where is Blue? (Tall Trees): find Blue playing hide and seek, Raptor Friend badge
  11. Stripy Tail Trail (Jungle): find Sinosauropteryx
  12. Bath Day (Your Park): wash 3 dinosaurs today, every day
  13. Giant Footprints (Swamp): find Argentinosaurus
  - Each mission gives 3 stars the first time. Mystery dinosaurs show as dark shadows until found. Missions happen in different places that look different: jungle bushes, tall trees, swamp reeds, desert rocks and dark volcano rocks. Finishing every mission gives the Mission Master badge. Tested at iPad and phone sizes. Preview updated at the same link.
- 2026-10-03: **Built the Pet Shop, from Roy's idea** (new Pet Shop button on the park map, so there are now 6 areas). "ROY'S PET SHOP" has a striped awning and 6 glass tanks with baby dinosaurs. People walk in one at a time (different faces, skin tones, hair and clothes) and say what pet they want, with a picture to help: "I want a pet with three horns!", "I want a blue pet!", "I want a pet that eats leaves!", "I want a teeny tiny pet!" and more. Roy taps the matching pet: it flies to the customer, who smiles and holds it, says thank you and walks out. Roy gets a star. A new baby dinosaur pops into the empty tank. Wrong pet: the customer shakes their head and says "Hmm, not that one" (no losing). Badges: Shopkeeper (first sale) and Pet Shop Star (10 sales). Tested at iPad (both ways round) and phone sizes. Preview updated at the same link.
- 2026-10-03: **Bigger, more detailed Pet Shop customers, from Roy's feedback.** Customers now fill the height of the shop counter, so Roy sees their whole body from hair to shoes. Faces have ears, eyes with pupils and sparkles, eyebrows, a nose, rosy cheeks and a mouth that changes to a big open smile when they get their pet. Lots of different people: kids (shorter), grown-ups, grandmas and grandpas, with 6 skin tones, hairstyles (short, long, bun, curly, ponytail, cap, grey beard), glasses, and outfits (t-shirt, dress, overalls, hoodie, ranger uniform with hat and badge). Each customer says their name ("Hi! I'm Mia..."), which also shows in the wish bubble. When served, they hug the baby dinosaur in their arms. They bob as they walk in. On an iPad held upright, the shop now stacks the tanks on top and the customer below, so customers are big there too. Tested at iPad (both ways round) and phone sizes. Preview updated at the same link.
- 2026-10-03: **Fixed the Pet Shop, from Roy's report** (spoken: "In the shop something doesn't work right. We cannot see what the buyer is asking, and also all the pictures, it's like something broke. Can you fix it?"). On Roy's iPad the customer picture could grow too big and push the wish bubble out of sight, and the pets in the tanks didn't sit right. Fix: the customer and every pet now sit inside boxes with a fixed size, and the picture fills its box. The tanks and the customer are plain boxes instead of buttons (they still work when tapped). Checked at 5 screen sizes (iPad landscape and portrait, iPad mini, a narrow panel and a phone): the wish bubble, all 6 pets and the whole customer show every time. Preview updated at the same link.
- 2026-10-03: **Every Dino Book mission now plays the way its page says, from Roy's idea.**
  1. Spiky Frill Hunt: search the jungle bushes; after a wrong guess, white spikes poke out of the right bush.
  2. Four-Wing Flyer: blue feathers keep falling from one tall tree; tap that tree.
  3. Egg Rescue: find all 3 eggs in the bushes.
  4. Nest Patrol: search the desert rocks; after a wrong guess, bits of eggshell appear by the right rock.
  5. T-Rex Escape!: red alarm lights and a siren, then follow T-Rex's big footprints one by one (the ground shakes with each stomp) to the bush where he is hiding, then take him home.
  6. Swamp Song: listen! Every few seconds a trumpet sound plays and one reed clump wiggles. Tapping the others plays a frog, bird or bee sound instead.
  7. Feeding Time: feed 5 dinosaurs today (in the park).
  8. Spike Valley: every rock has spikes: cactus, crystals, sticks, and one with white dinosaur spikes and orange plates. Find the dinosaur ones.
  9. Volcano Horn: a ranger hops across hot lava on 4 glowing stepping stones, then searches the volcano rocks.
  10. Where is Blue?: hide and seek. Blue peeks out of a different tree every few seconds; tap the tree while she is peeking, 3 times.
  11. Stripy Tail Trail: a little stripy-tailed dinosaur runs past, then follow its 8 tiny footprints to its bush.
  12. Bath Day: wash 3 dinosaurs today (in the park).
  13. Giant Footprints: follow 3 huge footprints (rumble and shake) to a giant leg, tap it and "look up" to find Argentinosaurus.
  - All 11 adventure missions were played through from start to finish in a test browser on iPad and phone sizes. Preview updated at the same link.
- 2026-10-03: Roy's parent asked to publish the game live so Roy can share the link with his friends. Recommended way: share the existing preview from its Share menu with "anyone with the link" (only the account owner can do this; Claude cannot change sharing). Alternative offered: a free GitHub Pages website, which needs the repository to be public and Pages switched on in the repository settings.
- 2026-10-04: **Built the Memory game, from Roy's idea** (new Memory button on the park map, so there are now 7 areas). Roy picks Small (6 cards, 1 star), Middle (12 cards, 2 stars) or Big (16 cards, 3 stars). The cards lie face down with a dinosaur footprint on the back. Tap a card and it flips over to show a dinosaur from Roy's park with its name. Tap a second card: if it is the same dinosaur, both glow green, hop, and the dinosaur makes its sound ("A match! Two Spinosaurus!"). If not, they turn red for a moment and flip back. Find all the pairs to win stars; the first win gives the Dino Memory badge. The game uses the dinosaurs in Roy's park, including new species found on missions. Cards stand upright on an iPad held upright. Played through Small and Big games in a test browser at iPad (both ways round) and phone sizes. Preview updated at the same link.
- **Next:** Check with Roy that the shop, the missions and the memory game work on his iPad. Then ask what he wants next.

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
- 2026-10-03: New species found on missions are real dinosaurs that are less famous, so finding them feels like a discovery and teaches something true (for example, Microraptor had feathers on its arms and legs, and Sinosauropteryx had a stripy ginger tail). They are listed in `SPECIES` in `Roy/game/index.html`; more can be added there, including species Roy invents.
- 2026-10-03: The "people" in Roy's idea are two park rangers in a jeep, drawn in our own style with different skin tones.
- 2026-10-03: The Dino Book is a book of missions (Roy's idea), not a sticker book as first planned. The Missions button on the park map opens the same book. Missions are listed in `MISSIONS` in `Roy/game/index.html` and can be added there.
- 2026-10-03: "Feeding Time" and "Bath Day" are daily missions that link to Dino Care, so the book also reminds Roy to look after his dinosaurs every day.
- 2026-10-03: Missions have no way to fail: every bush shows something fun, and footprints give a hint to the right bush.
- 2026-10-03: The Pet Shop is pretend: no real money and nothing to buy. Customers "pay" by making Roy's shop a success, and Roy earns stars, keeping the rule of no payments. Roy is the shopkeeper, as in his idea of people coming to buy pets.
- 2026-10-03: Pet Shop pets are babies of park dinosaurs with clear features (Blue, Triceratops, Stegosaurus, Compsognathus, Ankylosaurus, Parasaurolophus, Brachiosaurus, Pachycephalosaurus, Dilophosaurus, Gallimimus). Each customer asks for one feature, and any pet with that feature is right.
- 2026-10-03: Mission play styles are set in `MISSIONS` in `Roy/game/index.html` with a `play` field (search, eggs, trail, listen, decoys, lava, peek) plus options such as `hint`, `size` and `alarm`. New missions can reuse these.
- 2026-10-03: New mission layouts use plain percentage sizes instead of container units, which older iPads may not support.
- 2026-10-03: Sharing the game publicly is safe for friends to play: there are no accounts, no chat, no ads, and nothing is sent anywhere. Each player's stars and dinosaurs are saved only on their own device. The game shows Roy's first name ("ROY'S DINO PARK") but nothing else about him.
- 2026-10-04: The memory cards flip with a simple squash-and-swap animation instead of a 3D turn, because 3D card flips can look broken in Safari on the iPad. The card pictures sit in fixed-size boxes, following the Pet Shop lesson.
