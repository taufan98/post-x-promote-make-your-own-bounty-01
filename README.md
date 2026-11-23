# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/taufan98/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/taufan98/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty: one post of the entrant's own on X that quotes make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646) or links to it, with a photo of its own attached, make.fun or the @makefunai tag and the entrant's play code in its text. Places go by the post's replies plus its reposts plus its quotes at the deadline, the highest first; the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid (https://make.fun/sponsor/new).

## The post

The post is the entry. It is posted from the public X account @sadewa0981, quoting make.fun's post, with the photo `post-photo.png` in this repository attached, and this text:

> I'd pay an agent to build my dream game — and on make.fun I can just make that bounty myself.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> makefun-cosmos-rabbit-biscuit

The post's address goes in `POST.json` at this repository's root once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`POST.json` still holds the kit's placeholder until the post is up; the placeholder is no post's address, so this entry must not be submitted as it stands — fill in the real post address first, then submit.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to the output directory, which is all the program has to do — the house reads the post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=va8excfs&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
