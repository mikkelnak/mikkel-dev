# Video-generations-prompter – "BV Mission Control" / "Open Claw"

Prompter til at genskabe videoen, hvor et selvbygget kontrolpanel til AI-agenter
startes via et batch-script og åbner et farverigt dashboard.

De fleste video-AI-værktøjer (Sora, Runway, Veo, Kling) fungerer bedst på engelsk,
så den primære prompt er på engelsk. Den danske version er en næsten direkte
oversættelse til reference.

---

## Engelsk prompt (anbefalet)

> First-person POV, handheld smartphone footage, shot in a dark home-office
> illuminated by purple and blue RGB ambient lighting. A multi-monitor desk
> setup: a laptop in the foreground and a large ultrawide external monitor
> behind it. A hand reaches for a mouse and double-clicks a desktop shortcut
> labelled "BV Mission Control". Several Windows Command Prompt (cmd.exe)
> windows pop open in sequence as a batch script runs — the first lines read
> "The process 'node.exe' with PID xxxx has been terminated", followed by
> fresh `node.exe` server processes starting up, with scrolling log output in
> green and white text. A few seconds later, a custom web dashboard fills the
> large monitor: a dense, futuristic UI with glowing line charts, agent
> status panels, success/error counters, and a sidebar listing autonomous
> "agents" and their current tasks. The hand gestures at the screen to
> showcase the system. Mood: cyberpunk indie-hacker, late-night builder,
> tech-demo, vertical TikTok aspect ratio 9:16.

### Negative prompt (hvad du IKKE vil have)

> Stock photo aesthetic, generic Excel spreadsheet, corporate office,
> daylight, overhead camera, third-person, AI hands with extra fingers,
> blurry text, gibberish characters in the terminal.

---

## Dansk prompt

> Førstepersonsperspektiv, håndholdt smartphone-optagelse i et mørkt
> hjemmekontor oplyst af lilla og blå RGB-stemningslys. Et skrivebord med
> flere skærme: en bærbar i forgrunden og en stor ultrawide-skærm bagved.
> En hånd griber musen og dobbeltklikker på en genvej kaldet "BV Mission
> Control". Flere Windows Kommandoprompt-vinduer (cmd.exe) popper op efter
> hinanden, mens et batch-script kører — første linjer viser "The process
> 'node.exe' with PID xxxx has been terminated", efterfulgt af nye
> node.exe-serverprocesser der starter op med rullende log-output i grøn
> og hvid tekst. Få sekunder senere fylder et selvbygget web-dashboard
> den store skærm: en kompakt, futuristisk brugerflade med lysende grafer,
> status-paneler for agenter, success/error-tællere og en sidebar med
> autonome "agents" og deres aktuelle opgaver. Hånden gestikulerer mod
> skærmen for at vise systemet frem. Stemning: cyberpunk indie-hacker,
> sen-aften-builder, tech-demo, vertikalt TikTok-format 9:16.

---

## Nøgleelementer du kan justere

| Element | Variation |
|---|---|
| Belysning | "purple/blue RGB" → "warm amber desk lamp" / "cool white only" |
| Æstetik | "cyberpunk indie-hacker" → "clean minimalist tech setup" / "retro CRT terminal" |
| Dashboard-indhold | "agent status panels" → "crypto charts" / "server monitoring" / "trading bot P&L" |
| Format | 9:16 (TikTok/Reels) → 16:9 (YouTube) → 1:1 (Instagram feed) |
| Kameraføring | "handheld POV" → "locked-off tripod" / "slow dolly-in" |

---

## Tekniske detaljer fra videoen (til reference)

Disse elementer er fakta fra videoen og bør med, hvis prompten skal være tro
mod originalen:

- **Navn på systemet:** "BV Mission Control" / "Open Claw"
- **OS:** Windows
- **Trigger:** Dobbeltklik på desktop-genvej → batch-script (.bat)
- **Terminal:** Windows Kommandoprompt (cmd.exe) — flere vinduer åbnes
- **Backend:** Node.js (`node.exe` processer)
- **Første terminal-output:** Gamle `node.exe`-processer dræbes for en frisk start
- **Frontend:** Selvbygget web-dashboard — sandsynligvis React/Vue/HTML+JS,
  evt. pakket i Electron, kører lokalt
- **Formål:** Overvåge og styre autonome AI-agenter ("see what all the agents
  are going to be up to for the day")

---

## Tip til prompting

1. **Vær konkret om tekst på skærmen.** AI-modeller hallucinerer ofte tekst —
   nævn enten "scrolling green/white log output" generisk, eller giv en
   eksakt streng der skal vises.
2. **Beskriv kameraet, ikke kun motivet.** "First-person POV, handheld
   smartphone, vertical 9:16" styrer kompositionen meget mere end
   ord om indholdet.
3. **Lås stemningen med 2-3 adjektiver.** "Cyberpunk, late-night, indie-hacker"
   er stærkere end en lang sætning.
4. **Brug negative prompts**, hvor værktøjet understøtter det, for at undgå
   stock-foto-look og forvrængede hænder.
