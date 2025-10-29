# Agent Playbook

## Repository Snapshot

- Documentation site built with Next.js 13 and Nextra (`pages/` holds `.mdx` content, `_meta.json` defines navigation order).
- Key scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Node.js 22 is available; Python execution may be blocked in this environment.

## Workflow Guidelines

- Default to `apply_patch` for hand edits; avoid bulk formatters unless requested.
- Keep additions ASCII unless the surrounding file already uses Unicode.
- Preserve any pre-existing local changes; never revert files you did not modify for the current task.
- When touching documentation directories, update the sibling `_meta.json` so every `.mdx`/`.md` page appears in the navigation.
- Comment only when clarification is essential—most prose and code should remain self-explanatory.

## Documentation Style

- Organize content according to the [Diátaxis](https://diataxis.fr/) framework: Tutorials (learning-oriented), How-to guides (goal-oriented), Explanations (understanding-oriented), and Reference (information-oriented).
- Tutorials: guide the reader through a concrete end-to-end task; assume no prior knowledge, provide step-by-step instructions, and postpone theory until after success.
- How-to guides: focus on achieving a specific outcome; start with prerequisites, list concise actionable steps, and limit background details to what is essential for completing the task.
- Explanations: clarify concepts, trade-offs, and rationale; connect ideas, reference related materials, and avoid procedural instructions.
- Reference: present facts, APIs, configuration tables, and schemas; structure information for quick lookup with consistent formatting and terminology.
- Match the existing section type when editing; move or split content if it drifts outside the intended Diátaxis category.
- Lead with user needs, keep paragraphs short, and surface actionable steps early for tutorials and how-to guides.
- Use consistent terminology across related pages; prefer active voice and second person.
- Include code snippets or command blocks only when they advance the user goal for that section type.

## Command & Sandbox Notes

- Run shell commands through `bash -lc` and always set the `workdir` argument (usually the repo root).
- Network access is restricted; prefer local data. Use `rg` for searching.
- Destructive git commands (`reset --hard`, `checkout --`) are off limits unless the user explicitly requests them.

## Validation

- Run `npm run lint` after significant content or component changes when feasible.
- For structural documentation edits, double-check rendered navigation by restarting the docs dev server if already running.

## Deliverables

- Summaries should state what changed and reference file paths with line numbers when practical.
- Suggest logical follow-up actions (tests, builds, deploy checks) when they help the user.
