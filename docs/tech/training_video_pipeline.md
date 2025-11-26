# Training Video Pipeline

How Sora-generated clips flow into training modules and stay organized.

## Source & Storage
- Prompts and generation settings documented in the Sora Prompt Library.
- Raw clips exported to cloud storage with standardized filenames (module_code_version_scene.mp4).
- Metadata file (CSV/JSON) captures prompt text, generation date, resolution, and rights notes.

## Labeling & QA
- Each clip tagged with module, role (host/play attendant/café/manager/franchise), scenario, and safety flags.
- Quick QA checklist: audio clarity, brand tone, signage accuracy, and no identifiable minors.
- Versioning: increment version suffix when prompts are tweaked; keep prior versions for rollback.

## Integration into Modules
- Clips embedded in LMS modules with short knowledge checks and downloadable SOP links.
- Script files stored in `docs/training_and_media/video_scripts/` and linked from the module index.
- Thumbnails and captions generated for accessibility; transcripts stored alongside scripts.
- Include a dedicated module titled **“Ordering & Table Service from Seat”** with Sora clips showing phone/tablet ordering and runners delivering by seat code.

## Distribution & Updates
- Publish modules to staff and franchisee portals; restrict internal-only vs. franchise-facing content by tag.
- Quarterly review: retire outdated clips, regenerate with updated prompts, and update the Sora library.
- Track completion and quiz scores to identify training gaps.
