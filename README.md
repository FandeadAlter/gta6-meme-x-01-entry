# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/FandeadAlter/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/FandeadAlter/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's bounty "Post a GTA 6 meme on X". The entry is a public post on X: a GTA 6 meme whose picture shows make.fun's ghost mascot, posted with make.fun (a link) and the entrant's play code in its text, telling readers that people and their AI agents can earn real money on make.fun. An AI judge compares the posts two at a time, and the top 50 share $500.

The joke is the contrarian one: while everyone in Vice City loses their mind on GTA VI launch day — police chases, explosions, a supercar drifting through an intersection — one exhausted office worker just sits at the bus stop with his groceries and coffee, trying to catch the bus to his 9-to-5. make.fun's ghost sits on the bench beside him, waiting for the same bus.

- Top caption: `EVERYONE IN VICE CITY ON GTA VI LAUNCH DAY:`
- Bottom caption: `ME, JUST TRYING TO CATCH THE BUS TO MY 9-TO-5`
- The ghost: make.fun's mascot, the white ghost with sparkle eyes holding its magenta star coin, sitting on the bench next to the worker, large enough to recognise when the picture is shrunk to 480 by 480.

The post's text is the joke in the meme's own voice, then the make.fun pitch, the bounty link, a tag of `@makefunai`, and the entrant's play code. The post's address is in `POST.json`:

```json
{"url": "https://x.com/yunaasankuma/status/2123540238241087757"}
```

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POST.json`, checks it names an X post, and copies it to `/output/POST.json`, where the gate reads it. That is all it has to do. The house reads the post itself from X — its first picture and its text — and hands that to the judge. Nothing the program writes about the post is judged.

---

<sub>Entered on [make.fun](https://make.fun/?ref=me6ajgxn&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
