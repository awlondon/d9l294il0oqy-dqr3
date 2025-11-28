# Co.work.PLAY Cafe  
Video, Sora Prompts & Storyboard Instructions  
(Training & Media Module)

This document explains **how to design, name, and organize** all video content, Sora prompts, and storyboards for Co.work.PLAY Cafe training and franchise materials.

It is written for:
- Founders
- Franchise support team
- Any AI assistant generating prompts, scripts, and storyboards

The goal: create a **coherent, reusable training library** that is:
- Short, clear, and visually consistent  
- Easy to map to roles and modules (Host, Play Attendant, Cafe, Manager, etc.)  
- Easy to regenerate or update with Sora or other video tools  

---

## 1. Overall Principles

1. **Microlearning first**  
   - Most training clips should be **8–20 seconds** long.  
   - Each clip should teach **one clear concept or micro-skill** (e.g., “Greeting a member,” “Checking wristbands,” “Safety check for main play area”).

2. **Role clarity**  
   - Each clip should clearly show:
     - WHO is speaking (Host trainer, Play Attendant trainer, Manager trainer, Cafe trainer, Co-founders, etc.)
     - WHERE they are (entry, cafe bar, play area, cowork zone, back-of-house).
     - WHAT the trainee should do or understand.

3. **Visual consistency**  
   - Use a **consistent look** for each recurring trainer character:
     - Host Trainer: Black woman (warm, confident, friendly), front-of-house setting.
     - Cafe Operator Trainer: Hispanic woman, behind cafe bar and in cafe seating.
     - Manager Trainer: Asian woman, walking the floor, sometimes in office/back-of-house.
     - Founders: Alexander Warren London (male) and Savannah (female), appear in welcome/vision clips.
     - Play Attendant Trainer: Distinct person (we’ll define and reuse consistently), in play area/baby room.
   - Lighting: bright, warm, natural-daylight feel.
   - Camera: mostly **medium shots** and **medium-close** for trainers, with occasional cutaways for context.

4. **Audio & text**  
   - Clear, neutral, friendly English voiceover that matches visible trainer lip movements.
   - Simple on-screen text for key phrases (e.g., “Step 1 – Greet warmly,” “Safety First,” “Check-in Complete”).

---

## 2. File & ID Structure

### 2.1 Module IDs

Each training topic gets a **module ID**:

- `HOST-xx` for Host/front-of-house topics
- `PLAY-xx` for Play Attendant topics
- `CAFE-xx` for Cafe Operator topics
- `MGR-xx` for Manager/Shift Lead topics
- `GEN-xx` for general/brand/introduction topics
- `FRAN-xx` for franchise-owner-specific modules

Example:
- `HOST-01 Greeting & First Impressions`
- `PLAY-03 Main Play Area Safety Check`
- `CAFE-02 Espresso Bar Basics`
- `MGR-04 Daily Huddles & Coaching`
- `GEN-01 Co-founders Welcome`

### 2.2 Files

In `/docs/05_training_and_media/`:

- `training_modules_index.md`  
  - Table mapping **Module ID → Title → Role → Approx Duration → Status**.
- `sora_video_prompts.md`  
  - All Sora prompts and scripts, grouped by Module ID.
- `storyboards/` (subfolder, or a section in this doc)  
  - Optional, more detailed storyboards as separate files, e.g.:
    - `storyboard_HOST-01.md`
    - `storyboard_PLAY-03.md`

In `/media/training_videos/` (or similar):

- Output / links to rendered videos, named by Module ID and version:
  - `HOST-01_greeting_v1.mp4`
  - `HOST-01_greeting_v2.mp4`

---

## 3. Sora Prompt Structure

Each Sora prompt block should follow this structure:

1. **Metadata header**
2. **Visual description**
3. **Action & blocking**
4. **Camera & style notes**
5. **Voiceover script**
6. **Technical settings**

### 3.1 Template

Use this template in `sora_video_prompts.md`:

```markdown
## [MODULE ID] – [Short Title]

**Role:** [Host / Play Attendant / Cafe / Manager / General / Franchise]

**Clip Length Target:** [8–10s, 12–15s, etc.]

**Goal / Learning Point:**  
One sentence explaining what this clip teaches.

---

**Sora Prompt – Visual & Action Description:**

“A [shot type, e.g., medium shot] of [trainer character description] standing at [location].  
The environment is [brief description of lighting, style, crowd level].  
[Describe what the trainer does: gestures, smiles, shows something, points to a sign, interacts with a guest/child.]  
Include [any background details: children playing safely in soft-focus, barista making coffee, etc.].  
Overall tone is [warm, welcoming, professional, calm].”

---

**Camera & Style Notes (optional but recommended):**

- Camera: [locked-off / gentle slow pan / slight dolly-in]  
- Framing: [centered / rule-of-thirds / slightly angled]  
- Depth of field: [shallow DOF to keep trainer in focus / more in-focus to show environment].  
- Color: warm neutral palette, soft natural light, clean environment.

---

**Voiceover / Dialogue Script (to sync with lips):**

> “[Full spoken line(s), written exactly as they should be said in the video,  
> keeping within the target clip duration.]”

Keep it short enough to fit the time – usually 1–2 sentences for 8–10s, up to 3 lines for 15–20s.

---

**On-Screen Text (if any):**

- Line 1: “[Short key phrase, e.g., ‘Step 1: Warm Greeting’]”  
- Line 2: “[Optional secondary phrase]”

---

**Technical Settings:**

- Duration: [8 / 10 / 15 / 20 seconds]  
- Aspect Ratio: 16:9 (landscape)  
- Resolution: 1080p or better  
- Style: photo-realistic training video, consistent with previous Co.work.PLAY clips.
```

### 3.2 Character Descriptions for Prompts

Re-use and keep consistent:

Host Trainer

“A Black woman in her early 30s, wearing a Co.work.PLAY Cafe host uniform (clean, modern, branded), standing at a welcoming host desk near the entrance.”

Cafe Trainer (Hispanic female)

“A Hispanic woman in her late 20s to early 30s, wearing a cafe apron with the Co.work.PLAY logo, behind a warm, modern coffee bar with espresso machine and pastries visible.”

Manager Trainer (Asian female)

“An Asian woman in her 30s, smart-casual attire with a subtle branded lanyard, standing in the middle of the cafe-play-cowork space, clearly in a leadership role.”

Play Attendant Trainer

“A friendly, energetic adult [specify age range and general style], dressed in comfortable and practical play-area attire with Co.work.PLAY branding, standing near the indoor play structure and soft mat area.”

Co-founders (Alexander Warren London & Savannah Strasner)

“A male founder (Alexander Warren London) and a female founder (Savannah Strasner) standing together in the main cafe area, relaxed, friendly, addressing the camera.”

4. Storyboard Instructions

Storyboards are optional for very short clips, but required for:

Key intro videos (e.g., co-founder welcome, module introductions).

More complex scenes (multiple characters, multiple locations, or more motion).

4.1 Storyboard Template

For each module, create storyboard_[MODULE].md if needed:

# Storyboard – [MODULE ID] [Title]

## Scene Summary

Short summary of what happens in the clip and what it teaches.

---

## Shot List

### Shot 1
- Type: [e.g., Medium shot]
- Duration: [e.g., 0–4 seconds]
- Visual: [Describe what is seen – trainer, background, action]
- Audio: [Dialogue line or VO segment]
- On-screen Text: [if any]
- Notes: [camera move, expressions, etc.]

### Shot 2
- Type:
- Duration:
- Visual:
- Audio:
- On-screen Text:
- Notes:

[Add more shots only if absolutely needed. Most 8–10 second clips should be 1–2 shots.]

---

## Notes for Sora Prompt

- Emphasize which elements **must** appear (trainer, key prop, signage).
- Indicate which details are “nice-to-have” but not critical.

5. Types of Clips in Training & Media

Design prompts and storyboards with the type of clip in mind:

5.1 Role Intro Clips (GEN, HOST-00, PLAY-00, CAFE-00, MGR-00)

Length: 8–15 seconds each.

Purpose: introduce each role’s purpose and vibe, not detailed procedures.

Tone: welcoming, inspirational, “big picture.”

5.2 Micro-Skills Clips (HOST-01+, PLAY-01+, CAFE-01+, MGR-01+)

Length: 8–10 seconds (default).

Purpose: one specific behavior or step.

Example:

HOST-01: Greeting

HOST-02: Explaining membership vs day-pass

PLAY-03: Safety check steps

CAFE-02: Checking drink quality before serving

5.3 Scenario Clips

Length: 15–20 seconds.

Show a short scenario:

A child conflict and Play Attendant response.

A guest raising a concern at Host, escalated to Manager.

A mini rush at cafe and teamwork.

These may require 2–3 shots, so storyboard is recommended.

5.4 Franchise Owner / Manager Clips (FRAN, MGR)

Length: 10–20 seconds.

Focus on:

Staffing and training philosophy.

Daily huddles and coaching.

Seeing the space as a system (play, work, cafe, safety).

6. Writing Good Sora Prompts (Do & Don’t)

Do:

Be specific about:

Character look (age range, role, outfit style).

Location (host desk, cafe bar, play area, etc.).

Key actions (smiles, gestures, points to signage, walks slightly).

Use simple, concrete language.

Keep each prompt focused on ONE main message.

Don’t:

Overload a single 8–10 second clip with too many actions or ideas.

Change a trainer’s appearance drastically from one clip to another.

Mix marketing/advertising tone into core training clips (training first, marketing separate).

7. Workflow for Creating New Training Clips

When asked to create a new clip:

Assign Module ID

Add or update training_modules_index.md.

Draft Sora Prompt Block

Use the template in sora_video_prompts.md.

Include role, goal, visual description, script, and settings.

Add Storyboard (if needed)

Create storyboard_[MODULE].md for complex or critical clips.

Review for Consistency

Check character descriptions match existing clips.

Confirm length and complexity are appropriate.

Tag Status in Index

e.g., Status: Planned, Prompt Ready, Rendered v1, Approved.

8. Future Enhancements

As the library grows, this module can be extended to include:

A mapping table from training modules to:

SOP sections

Quiz questions

Franchise onboarding steps

Links to online hosting platform (LMS, franchisor portal).

Version notes for updated prompts or re-recorded videos.
