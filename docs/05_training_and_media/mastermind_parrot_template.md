# Mastermind + Parrot 10-Second Training Video Template

This template defines the structure and style for AI-GM staff training clips that use the Co.work.PLAY Café’s Mastermind Boss + Parrot motif. It adapts the standard Sora prompt format for micro-learning videos (8–20 seconds) to a concise 10-second clip tailored to staff-only operational prompts.

## Purpose & Context

- **Channel:** Staff only. These clips play on back-of-house screens and never appear on guest-facing displays. They reinforce procedures, health and safety practices, and KPI-driven behaviours.
- **Motif:** Anime-style “Mastermind Boss + Parrot” described in the AI-GM system instructions. The Mastermind delivers crisp directives with a calm, mission-control cadence while a playful Parrot echoes the key point.
- **Duration:** 10 seconds. Keeping clips short ensures staff can absorb a single behaviour quickly.
- **Setting:** A warm, futuristic control room with a holographic floor map showing zones (e.g., ENTRY/EXIT, PLAY CORE, UNDER-2). The colour palette uses soft neutrals with muted blues/greens and bright accents for alerts and icons.
- **Shot structure:** Each clip typically comprises an over-the-shoulder control-room shot, a quick real-world vignette demonstrating the behaviour, and a return to the control room for summary icons and Parrot commentary.

## Template

Use this template when drafting new Mastermind + Parrot clips. Replace bracketed text with your specific details.

### 1. Metadata Header
- **Module ID:** GM-XX (e.g., GM-01). “GM” indicates a General Manager training module.
- **Role:** [Host / Play Attendant / Café / Manager / General].
- **Clip Length Target:** 10 seconds.
- **Goal / Learning Point:** A single sentence explaining what this clip teaches (e.g., “Verify matching wristbands before releasing a child”).

### 2. Visual & Action Description
Describe what is seen on screen in 3–4 sentences:

- **Control-room opener:** Start with a medium over-the-shoulder shot of the Mastermind. Only their back and shoulders are shown; the glowing Co.work.PLAY emblem appears between the shoulder blades. A bright, expressive Parrot perches on the chair back. The holographic map highlights the relevant zone or issue with simple icons (e.g., colour-coded wristbands, caution triangle).
- **Mastermind action:** The Mastermind’s gloved hand taps a holographic button labelled with the required action (e.g., “MATCH BANDS,” “SANITIZE”). Icons float up to illustrate success and failure (green check and amber triangle).
- **Real-world vignette:** Cut briefly to a real scene where a staff member demonstrates the procedure. Focus on hands and props rather than faces (to anonymize individuals), and show the key steps clearly. Keep this vignette to 3–4 seconds.
- **Control-room wrap-up:** Return to the over-the-shoulder shot. The holographic map shows the resolved state (e.g., green path for success, arrow to Manager for escalation). The Parrot leans forward and flaps or nods to punctuate the key point.

### 3. Action & Blocking
Summarize the sequence of actions, ensuring they fit within 10 seconds:

1. Mastermind acknowledges the event (tap, icons appear).
2. Staff member executes the correct procedure in the vignette.
3. Mastermind summarizes the outcome while the Parrot repeats the rule.

### 4. Camera & Style Notes

- **Framing:** Always show the Mastermind from behind or over the shoulder; never reveal their face. Use medium shots for the control room and close-ups for icons or props. Limit cuts to one or two due to the 10-second duration.
- **Lighting & Palette:** Warm neutrals with muted blues/greens and soft bright accents; no harsh flashing lights. Maintain high contrast and legibility on holographic UI elements.
- **Graphics:** Overlay simple icons and 1–2 brief lines of text to cue the staff action (e.g., “CHECK BANDS,” “CALL MANAGER”). Keep the on-screen text under 30 characters.
- **Motion:** Use gentle pans or quick cuts only if necessary. The overall pace should feel controlled and calm.

### 5. Voiceover / Dialogue Script
Provide two voices in the script:

- **Mastermind:** Delivers the directive in a calm, mission-control tone. Use one concise sentence that names the action and the requirement (e.g., “At pickup, match the child’s band to the adult’s color and number”).
- **Parrot:** Immediately echoes the key rule in a playful rhyme or mnemonic (e.g., “Band to band, hand in hand!”). This reinforces retention and lightens the tone.

Ensure the combined dialogue fits within the 10-second runtime.

### 6. On-Screen Text
Include brief staff-facing captions timed to appear with the appropriate action. Example: “CHECK WRISTBANDS” followed by “Match color + number → OK • Mismatch → Call Manager.” Use a clean, legible font consistent with Co.work.PLAY branding.

### 7. Technical Settings
- **Duration:** 10 seconds.
- **Aspect Ratio:** 16:9 (landscape).
- **Resolution:** 1080p or higher.
- **Frame Rate:** 24 fps.
- **Style:** Anime-inspired yet grounded in photorealism. Maintain the warm, futuristic control-room look.

## Usage Notes
- Follow micro-learning principles: each clip should teach one clear concept. Do not overload a 10-second video with multiple behaviours.
- After drafting a prompt with this template, add a new entry to `training_modules_index.md` listing the module ID, title, role, duration, and status. Store the full prompt in `sora_video_prompts.md` or a similar prompts file for generation.
- When integrating new clips, ensure the AI-GM rules engine references the correct module ID when emitting ContentIntent objects. Update any rule packs or orchestration mappings as needed.

## Integration Steps (Codex instructions)
1. Add the template file
   - Create a new Markdown file at `docs/05_training_and_media/mastermind_parrot_template.md` in your repository and paste in the contents of the template above. This path mirrors your existing training/media folder (where `VIDEO_AND_SORA_INSTRUCTIONS.md` and `sora_video_prompts.md` live), keeping all prompt templates together.

2. Update your training index
   - In `training_modules_index.md` (or `module_index.md`), add a new line in the module table to reference this template (e.g., module ID GM-00, title “Mastermind + Parrot Template,” role “General,” duration “10s,” status “Template”). This makes the template discoverable when planning new clips.

3. Reference the template in your Sora guidelines
   - In `VIDEO_AND_SORA_INSTRUCTIONS.md`, under the “Overall Principles” or “Sora Prompt Structure” section, add a short note pointing readers to `mastermind_parrot_template.md` for staff-only AI-GM clips. This cross-link helps content creators know when to use the standard Mastermind + Parrot format.

4. Use the template for new prompts
   - When designing new Mastermind + Parrot training videos, copy the sections of the template into `sora_video_prompts.md`. Fill in the specific module ID, role, goal, visual description, actions, camera notes, dialogue and on-screen text. Each new clip should teach only one behaviour and follow the anime-style persona guidelines.
