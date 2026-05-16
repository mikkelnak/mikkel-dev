# Video-generations-prompter

Samling af prompter til at genskabe to forskellige tech-videoer:

1. **OpenClaw / Boss Visuals Mission Control** (TikTok `@viral7275`) — cyberpunk AI-agent kontrolpanel.
2. **"Can you believe Claude did this?"** — Claude bygger en luksus-arkitekt-landingpage (Atelier Lacroix).

Spring til [Atelier Lacroix-prompten](#atelier-lacroix--claude-frontend-demo) for den anden video.

---

## OpenClaw / Boss Visuals Mission Control

Prompter til at genskabe TikTok-videoen fra `@viral7275`, hvor et selvbygget
AI-agent kontrolpanel ("OpenClaw" + "Boss Visuals" Mission Control) startes
via en desktop-genvej og fylder en multi-monitor cyberpunk-arbejdsplads.

De fleste video-AI-værktøjer (Sora, Runway, Veo, Kling) fungerer bedst på
engelsk, så den primære prompt er på engelsk. Dansk version er en næsten
direkte oversættelse til reference.

---

## Engelsk prompt (anbefalet)

> First-person POV, handheld vertical smartphone footage (9:16), shot in a
> dark home-office at night, lit almost entirely by deep blue and purple
> RGB ambient light. Cloud-shaped LED panels glow on the ceiling. The desk
> has a Windows gaming laptop in the foreground (RGB backlit keyboard) and,
> behind it, a stack of monitors: a large curved ultrawide showing a
> cyberpunk dashboard, a vertical portrait monitor above it with a Milky
> Way / Uluru wallpaper, and a huge wall-mounted screen on the right showing
> a moody blue cinematic backdrop. A separate mechanical keyboard sits in
> front of the ultrawide. Toy drones hang on the wall to the left.
>
> Action: a hand reaches across the desk and double-clicks a Windows
> desktop shortcut titled "OpenClaw — Mission Control". A `.bat` script
> fires off, killing old node processes ("The process 'node.exe' with PID
> xxxx has been terminated") and spawning two side-by-side terminals on the
> laptop: a Windows Terminal tab labelled `openclaw-agent` streaming lines
> like "Gmail: 16 unread", "Briefing file updated", "Spreadsheet sync:
> Savings $31706.82 | YTD Revenue $24893.7", "Meta: 12 campaigns, 3
> active", and a Windows PowerShell tab streaming Discord bot logs
> ("[discord] [cash] starting provider (@CASH)", "[discord] [forge] client
> initialized ... awaiting gateway readiness", "[discord] [jarvis] starting
> provider (@JARVIS)") with timestamps around 23:56.
>
> Seconds later the GIGABYTE ultrawide fills with the "BOSS VISUALS //
> MISSION CONTROL v2026.3" dashboard, headed by a green "SYSTEMS
> OPERATIONAL" status bar — a dense cyberpunk UI in neon orange and
> mint-green pixel-style typography. Top row: a "BOSSFORGE — PASSIVE
> INCOME ENGINE" panel with big counters ("$3,124.03 MTD REVENUE — APRIL",
> "$30,321 YTD — 15 jobs this month", "$1,907.93 MTD PROFIT") and tiny
> downward line charts. An amber "ATTENTION REQUIRED — 4 ITEMS" alert
> shows "Gateway offline · openclaw gateway not bound to :18789". Below,
> a "COMMAND CENTER" tab reveals an "OPERATIONS BOARD" of seven circular
> holographic AI-agent portraits in a row: CORTANA "Chief Operations AI"
> (Halo-style teal hologram, ACTIVE — Monitoring Gmail), JARVIS "Operations
> & Client" (blue hologram, IDLE — Awaiting orders), BOSS "Content Pipeline
> Guardian" (cybernetic blue-nose pitbull, IDLE), AURA "Marketing & Growth"
> (mint glow, IDLE), CASH "Financial Intelligence" (IDLE), FORGE "Product
> Dev & Innovation" (orange glow, IDLE), and TITAN "Resource Optimization"
> (red glow, IDLE). Below them a kanban-style task board with columns
> QUEUED / IN PROGRESS / COMPLETED — top HIGH-priority cards read "Chris
> Roberts: Smart Doorbell Installation → CORTANA" and "Londa Client:
> Smart Lighting Installation → CORTANA". The very bottom of the dashboard
> shows a "NEURAL LINK — Agent communication" module.
>
> The hand then opens a Chromium browser on the laptop showing tabs:
> "OpenClaw Control", "Boss Visuals", "Inbox (2)", "A suspicious...". The
> active page is `localhost:18789/chat?session=agent%3Acortana%3Amain` —
> the OpenClaw control panel with a red pixel-ghost logo, a left sidebar
> (CHAT > Chat, CONTROL > Overview / Channels / Instances / Sessions,
> AGENTS > Agents / Skills / Nodes) and a "Message Cortana (Enter to
> send)" input at the bottom. The hand gestures at the screens to showcase
> the system.
>
> Mood: cyberpunk indie-hacker, late-night solo builder, AI-agent control
> room, tech-demo TikTok. Camera: handheld, slight wobble, shallow
> smartphone depth-of-field, occasional blue-light lens flare. Aspect
> ratio: 9:16 vertical.

### Negative prompt

> Daylight, corporate office, stock-photo aesthetic, generic Excel
> spreadsheet, third-person camera, overhead shot, AI hands with extra
> fingers, blurry illegible UI, gibberish typography, modern flat
> corporate dashboard, pastel colours, white background.

---

## Dansk prompt

> Førstepersonsperspektiv, håndholdt vertikal smartphone-optagelse (9:16),
> i et mørkt hjemmekontor om aftenen, oplyst næsten udelukkende af dybt
> blå og lilla RGB-stemningslys. Sky-formede LED-paneler lyser i loftet.
> På skrivebordet står en Windows gaming-laptop med RGB-tastatur i
> forgrunden, og bag den en stak skærme: en stor curved ultrawide med
> cyberpunk-dashboard, en vertikal skærm over med Mælkevejen/Uluru som
> baggrund, og en kæmpe vægmonteret skærm til højre med stemningsfuldt
> blåt cinematisk billede. Et separat mekanisk tastatur foran ultrawiden.
> Legetøjsdroner hænger på væggen til venstre.
>
> Handling: en hånd dobbeltklikker på en Windows-genvej kaldet "OpenClaw
> — Mission Control". Et `.bat`-script kører, dræber gamle node-processer
> ("The process 'node.exe' ... has been terminated") og åbner to terminaler
> side om side på den bærbare: en Windows Terminal-fane `openclaw-agent`
> med linjer som "Gmail: 16 unread", "Briefing file updated", "Spreadsheet
> sync: Savings $31706.82 | YTD Revenue $24893.7", "Meta: 12 campaigns",
> og en Windows PowerShell-fane med Discord-bot-logs ("[discord] [cash]
> starting provider (@CASH)", "[discord] [forge] awaiting gateway
> readiness", "[discord] [jarvis] starting provider (@JARVIS)") med
> tidsstempler omkring 23:56.
>
> Få sekunder senere fylder "BOSS VISUALS // MISSION CONTROL v2026.3"
> GIGABYTE-ultrawiden, med grøn "SYSTEMS OPERATIONAL"-statusbjælke
> øverst — en kompakt cyberpunk-UI i neonorange og mintgrøn
> pixeltypografi. Øverst et "BOSSFORGE — PASSIVE INCOME ENGINE"-panel
> med store tællere ("$3,124.03 MTD REVENUE — APRIL", "$30,321 YTD — 15
> jobs", "$1,907.93 MTD PROFIT"). En rav-farvet "ATTENTION REQUIRED"-alert
> viser "Gateway offline — openclaw gateway not bound to :18789". Under
> "COMMAND CENTER" et "OPERATIONS BOARD" med syv cirkulære holografiske
> AI-agent-portrætter i en række: CORTANA "Chief Operations AI" (Halo-teal
> hologram, ACTIVE — Monitoring Gmail), JARVIS "Operations & Client"
> (blå, IDLE), BOSS "Content Pipeline Guardian" (cybernetisk blå-næset
> pitbull, IDLE), AURA "Marketing & Growth" (mint, IDLE), CASH "Financial
> Intelligence" (IDLE), FORGE "Product Dev & Innovation" (orange, IDLE),
> og TITAN "Resource Optimization" (rød, IDLE). Nedenfor et kanban-board
> med kolonner QUEUED / IN PROGRESS / COMPLETED — øverste HIGH-prioritet
> kort: "Chris Roberts: Smart Doorbell Installation → CORTANA" og "Londa
> Client: Smart Lighting Installation → CORTANA". Nederst en "NEURAL LINK
> — Agent communication"-modul.
>
> Hånden åbner derefter Chrome på laptoppen med faner: "OpenClaw Control",
> "Boss Visuals", "Inbox (2)". Aktive side er
> `localhost:18789/chat?session=agent%3Acortana%3Amain` — OpenClaw
> kontrolpanelet med rødt pixel-spøgelses-logo, venstre sidebar (CHAT,
> CONTROL > Overview/Channels/Instances/Sessions, AGENTS > Agents/Skills/
> Nodes) og et "Message Cortana (Enter to send)"-inputfelt nederst.
> Hånden gestikulerer mod skærmene.
>
> Stemning: cyberpunk indie-hacker, sen-aften-solobuilder, AI-agent
> kontrolrum, tech-demo TikTok. Kamera: håndholdt, let rystende, smartphone
> depth-of-field, lejlighedsvise blå-lys lens flares. 9:16 vertikalt.

---

## Faktuelle elementer (verificeret fra videoen)

| Element | Detalje |
|---|---|
| Skaber | TikTok `@viral7275` |
| Hovedsystem | "OpenClaw" (kontrolpanel) + "Boss Visuals" / "BV Visuals" (Mission Control) |
| Versionsstreng på UI | `MISSION CONTROL // v2026.3` |
| Sub-modul | "BossForge — Passive Income Engine" |
| Lokal port | `localhost:18789` |
| OS | Windows |
| Trigger | Desktop-genvej → `.bat`-script |
| Terminaler | Windows Terminal-fane `openclaw-agent` + Windows PowerShell |
| Backend | Node.js (`node.exe` processer) |
| OpenClaw-logo | Rødt 8-bit "pacman/spøgelse"-ikon |
| Integrationer | Discord (bekræftet i logs), Gmail, Meta Ads, Google Calendar, Spreadsheets; Telegram nævnt som "next step" |
| Skærm-mærke | GIGABYTE ultrawide (synlig på bezel) |
| Status-header | "SYSTEMS OPERATIONAL" øverst på Mission Control |
| Driftsomkostning | Skaber oplyser: under $100/måned ved korrekt opsætning |
| Skrivebordsdetaljer | Mekanisk RGB-tastatur, MTG/samlekort i sleeves, statue-figuriner, ur |

### AI-agenter på Operations Board (fuldt roster)

| Navn | Rolle | Visuel stil |
|---|---|---|
| **Cortana** | Chief Operations AI | Halo-style teal/cyan holografisk kvindefigur |
| **Jarvis** | Operations & Client | Blå holografisk avatar |
| **Boss** | Content Pipeline Guardian | Cybernetisk blå-næset pitbull i sci-fi command bay — AI-genereret tribute til skabers afdøde hund |
| **Aura** | Marketing & Growth | Holografisk avatar (mint/teal glow) |
| **Cash** | Financial Intelligence | Holografisk avatar |
| **Forge** | Product Dev & Innovation | Orange/amber holografisk avatar |
| **Titan** | Resource Optimization | Rød holografisk avatar |

Status-eksempler set på UI: ACTIVE — Monitoring Gmail · IDLE — Awaiting
orders · IDLE — Setting active... · IDLE — Generated week[ly report]...

### Operations Board — eksempler på opgavekort

```
QUEUED
├─ [HIGH] Chris Roberts: Smart Doorbell Installation (Boss Visuals…) → CORTANA
└─ [HIGH] Londa Client: Smart Lighting Installation (Boss Visuals S…) → CORTANA

IN PROGRESS  /  COMPLETED   (kolonner til højre, kanban-stil)
```

Nederst på Mission Control: et "NEURAL [LINK] — Agent communication"-modul
hvor agenterne (fx Jarvis) kommunikerer indbyrdes.

### Sidebar-navigation i OpenClaw

```
CHAT
  └─ Chat
CONTROL
  ├─ Overview
  ├─ Channels
  ├─ Instances
  └─ Sessions
AGENTS
  ├─ Agents
  ├─ Skills
  └─ Nodes
```

---

## Tech stack (baggrund — hvad der faktisk kører bag UI'et)

Selvom selve videoen kun viser UI'et, har skaberen (`@viral7275`) i en
opfølgende video afsløret den underliggende open-source-stak. Den er
**ikke nødvendig** for at lave video-prompten, men hjælper, hvis du vil
genskabe nogle af terminal-/browser-detaljerne præcist eller selv bygge
en lignende opsætning.

| Lag | Værktøj | Funktion |
|---|---|---|
| LLM-runtime | **Ollama** | Open-source, kører store sprogmodeller lokalt på egen GPU — fjerner API-omkostninger til OpenAI/Anthropic. |
| Model | **Qwen 3.6** (Alibaba) | Open-source LLM, optimeret til kode og autonom agent-adfærd ("coding monster"). |
| Agent-framework | **OpenClaw** (også omtalt som "OpenCode") | Open-source lokal pendant til Claude Code / Cursor — autonome AI-agenter, der løser kode- og driftsopgaver. |
| Brugerflade | **Node.js + custom web-dashboard** | Selvbygget "BV Mission Control"-UI ovenpå OpenClaw — visualiserer agent-aktivitet, indtjening, opgaver i realtid. |
| Forbindelse | `ollama launch openclaw --model qwen3.6` | Ollama-kommando set on-screen, der binder OpenClaw til Qwen-modellen. |

**Kort fortalt:** Skaberen kører den kinesiske Qwen-model gratis lokalt via
Ollama, lader den drive autonome agenter via OpenClaw, og har bundet det
hele sammen med et selvbygget Node.js-dashboard. Mission Control er
visualiserings-laget — ikke selve AI-systemet.

### Kilder & forbehold

- **Setup-tour:** TikTok `@viral7275` — viser hardware, dashboard, terminaler.
- **Stack-forklaring:** TikTok `@Future Ai With Julian` — "China just made
  OpenClaw free forever 🤯 Install Qwen 3.6 through Ollama" (hyped clickbait-tone).
- **Forbehold:** Tech-TikToks overdriver ofte. "OpenClaw" som et reelt
  kinesisk open-source-projekt er ikke uafhængigt bekræftet på tidspunktet
  for dette dokument — det kan også være `@viral7275`'s egen branding af et
  generisk lokalt agent-framework (fx OpenCode, OpenDevin, Aider eller
  lignende), som Julian-videoen så rider videre på. Qwen-modellerne fra
  Alibaba og Ollama-runtime'en er derimod veldokumenterede. Hvis du selv
  vil bygge stakken, så verificér først, at "OpenClaw" findes som forventet
  — ellers brug en kendt åben Claude-Code-pendant.

> **Noter til prompts:** Hvis du tilføjer en scene med en terminal, der
> starter modellen op, kan kommandoen `ollama launch openclaw --model
> qwen3.6` med fordel være synlig — det er den eneste "ægte" hint i hele
> videoen om, hvad der faktisk kører. Resten af dashboardet er custom
> branding.

---

| Element | Variation |
|---|---|
| Belysning | "deep blue + purple RGB" → "warm amber" / "green hacker matrix" / "neutral white" |
| Æstetik | "cyberpunk indie-hacker" → "clean minimalist Notion-style" / "retro CRT 90s" / "military command room" |
| Dashboard-emne | "passive income engine" → "crypto trading desk" / "server SRE monitoring" / "OSINT intel board" |
| Format | 9:16 vertikal → 16:9 horisontal (YouTube) → 1:1 kvadratisk (IG feed) |
| Kameraføring | "handheld POV" → "locked-off tripod" / "slow dolly-in" / "gimbal orbit" |
| Agent-stil | "Halo-style teal hologram" → "Iron Man Jarvis blueprint" / "anime portraits" / "Tarot card art" |

---

## Tip til prompting

1. **Vær eksplicit om on-screen tekst.** AI-videomodeller hallucinerer tekst
   notorisk. Sig enten "scrolling green/white log output" (generisk) eller
   citér eksakte strenge — og forvent stadig kompromiser.
2. **Beskriv kameraet, ikke kun motivet.** "First-person POV, handheld
   vertical 9:16" styrer kompositionen langt stærkere end indholdsord.
3. **Lås stemningen med 2–3 adjektiver.** "Cyberpunk, late-night,
   indie-hacker" slår en lang sætning.
4. **Brug negative prompts**, hvor værktøjet understøtter det, for at
   undgå stock-look og deforme hænder.
5. **Split lange shots i flere prompts.** Hvis værktøjet kun laver 5–10s
   klip, lav én prompt pr. beat: (1) genvej + batch, (2) terminaler,
   (3) dashboard reveal, (4) agent-portrætter, (5) browser/chat.
6. **Hvis du genskaber agent-portrætterne (især Boss-pitbullen)** — generér
   stillbillederne separat i Midjourney/Imagen og indsæt dem som assets
   i compositingen frem for at lade videomodellen tegne dem fra bunden.

---

## Atelier Lacroix — Claude frontend demo

Prompt til at genskabe "Can you believe Claude did this?"-videoen, hvor
Anthropics Claude har bygget en luksus-arkitekt-landingpage for det fiktive
firma **Atelier Lacroix** under temaet *"Chalets Cut From Light"* — og
videoen ruller gennem den live på `localhost`.

### Engelsk prompt (anbefalet)

> Screen-recording style video: a Chromium browser window in light mode is
> centered on screen. The URL bar shows `localhost:3000` (or `localhost:5173`).
> The page is an ultra-minimalist luxury landing page for an architecture
> studio called **Atelier Lacroix**, themed **"Chalets Cut From Light"** —
> exclusive mountain chalets. A slow, smooth, hands-off scroll glides down
> the page over ~20 seconds, with butter-smooth scroll-linked animations.
>
> Visual style: off-white / ivory background, generous negative space,
> serif display typography (think Söhne / GT Sectra / Editorial New) for
> headlines, small uppercase sans-serif (Inter / Söhne Mono) for labels.
> Editorial fashion-magazine layout. Large hero photograph of a sculptural
> wooden alpine chalet at golden hour, slightly off-grid composition, with
> the wordmark "ATELIER LACROIX" small in the top-left and a thin nav
> ("Projects · Studio · Journal · Contact") in the top-right.
>
> As the scroll progresses: a full-bleed hero image fades to reveal the
> headline **"Chalets Cut From Light"** set in a 120pt serif, kerned wide.
> Below it a kicker line: "Bespoke alpine architecture · Engadin, CH".
> Scroll continues — a 2-column editorial section shows a chalet exterior
> shot on the left and on the right a vertically-set paragraph titled
> **"Detail Holds Weather"** about hand-joined larch facades and weathering
> over decades. Continue scrolling to a horizontal scrub of three project
> thumbnails, each labelled with a year and location. Then a section
> **"Rooms Tuned To Altitude"** with a parallax interior photo of a
> floor-to-ceiling glazed living room, snow outside. Text slides in from
> below as images cross-fade above them. The footer fades up in last,
> small caps, "© Atelier Lacroix MMXXVI — Engadin · Zürich".
>
> Animation feel: scroll-linked (not autoplay), GSAP/Framer-Motion-style
> easing, no bounces, no parallax jitter. Everything feels expensive,
> calm, magazine-quality. Cursor not visible. Browser chrome (tabs, URL
> bar) is visible at the top — confirming this is a real local site,
> not a Figma mockup.
>
> Tech aesthetic suggestion (for terminal cut-in if used): a Mac terminal
> running `next dev` showing "Local: http://localhost:3000 · Ready in 1.8s".
>
> Aspect ratio: 16:9 desktop screen recording (or 9:16 if framed as a
> phone clip of someone's monitor).

### Dansk prompt

> Skærmoptagelse: et Chromium-browservindue i lyst tema, centreret. URL
> viser `localhost:3000`. Siden er en ultra-minimalistisk luksus-landingpage
> for arkitektfirmaet **Atelier Lacroix** under temaet **"Chalets Cut From
> Light"** — eksklusive bjerghytter. En langsom, smooth scroll glider ned
> ad siden i ~20 sekunder med flydende scroll-bundne animationer.
>
> Stil: råhvid/ivory baggrund, masser af luft, serif display-typografi
> (GT Sectra / Editorial New) til overskrifter, små versaler i sans-serif
> til labels. Editorial mode-magasin-layout. Hero-foto af en skulpturel
> træhytte i alperne ved gylden time, "ATELIER LACROIX"-wordmark øverst
> til venstre, tynd nav ("Projects · Studio · Journal · Contact") til
> højre.
>
> Under scroll: hero-billede fader, overskriften **"Chalets Cut From
> Light"** dukker frem i 120pt serif. Kicker: "Bespoke alpine architecture
> · Engadin, CH". Videre til en 2-kolonne-sektion med eksteriør-foto
> venstre, vertikal tekstblok højre med titlen **"Detail Holds Weather"**.
> Derefter et vandret scrub af tre projekt-thumbnails. Så sektionen
> **"Rooms Tuned To Altitude"** med parallax-interiør af en højloftet
> stue med sne udenfor. Tekst glider op nedefra, billeder krydsfader.
> Footer ender med "© Atelier Lacroix MMXXVI — Engadin · Zürich".
>
> Animation: scroll-bunden (ikke autoplay), GSAP/Framer-easing, ingen
> bounces. Hele oplevelsen virker dyr, rolig, magasinkvalitet. Browserens
> tabs og URL er synlige — det er en ægte lokal side, ikke en mockup.
>
> 16:9 desktop screen recording (eller 9:16 hvis det er en telefon-clip
> af nogens skærm).

### Faktuelle elementer fra videoen

| Element | Detalje |
|---|---|
| Spørgsmål i caption | "Can you believe Claude did this?" |
| Brand | Atelier Lacroix (fiktivt arkitektfirma) |
| Tema/tagline | "Chalets Cut From Light" |
| Sektionsoverskrifter | "Detail Holds Weather", "Rooms Tuned To Altitude" |
| Browser URL | `localhost` (ægte lokal Next/Vite-server) |
| Sandsynlig stack | Next.js eller Vite + React, Tailwind CSS, Framer Motion / GSAP |
| Modtager | Designet, kodet og animeret af Claude (Anthropic) i én session |

### Hvorfor det er imponerende

Et stilrent, animeret luksus-landingpage har historisk taget et hold
designere + frontend-udviklere uger og koster sekscifret. Hele pointen
med videoen er at vise, at en moderne kodnings-LLM kan levere det
færdige resultat fra én prompt — og at det kører som reel kode på
`localhost`, ikke som en Figma-attrap.

### Prototype i dette repo

Der ligger en HTML/CSS-prototype af landingpagen i `atelier-lacroix.html`
i repo-roden. Åbn den direkte i en browser, eller server den med fx
`python3 -m http.server` for at få en `localhost`-URL.
