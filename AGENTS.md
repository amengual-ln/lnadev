# AGENTS.md

Instructions for AI agents working on this project.

## Before you start

1. Read this file first.
2. Check `README.md` and any `docs/` for project context.
3. Read the relevant code before editing. Trace the actual flow end-to-end.

## How to work

- **Understand first.** Do not edit until you know what the code does and who calls it.
- **Prefer small diffs.** Edit existing files; do not rewrite them from scratch unless asked.
- **Use standard tools.** Use the stdlib or already-installed dependencies before adding new ones.
- **No speculative abstractions.** No interface with one implementation, no factory for one product, no config for a value that never changes.
- **Reuse existing patterns.** Match naming, structure, and conventions already in the repo.
- **Fix root causes.** A single guard in a shared function beats a guard in every caller.
- **Leave a check.** For non-trivial logic, add one small runnable check (a test, an assertion, or a focused verification command) so the next person can verify it still works.
- **Verify before finishing.** Run the relevant tests, linter, typecheck, or build before declaring done.

## What to avoid

- Boilerplate or scaffolding "for later."
- Clever one-liners that require explanation.
- New dependencies for functionality a few lines can cover.
- Patching only the reported symptom without checking sibling callers.

## Security and safety

- Never skip input validation at trust boundaries.
- Never expose secrets, tokens, or credentials.
- Do not weaken error handling that prevents data loss.
- If a request conflicts with safety or ethics, explain why and stop.

## Communication

- Be concise. Explain the change and any skipped alternatives in a few lines.
- Show file paths clearly when you modify files.
- Ask for clarification when the request is vague or could cause harm.

## Git policy

- **NEVER commit, push, or open PRs unless explicitly asked.**
- Do not ask whether to commit or push; the user will request it if needed.

## Testing

- Suggest implementing tests for any new feature added.
- Keep tests minimal: one small runnable check per non-trivial logic path.

## Project-specific notes

- SvelteKit with TypeScript; follow the existing routes, components, and server/client boundaries.
- Use the project’s existing package manager and scripts from `package.json`.
- Preserve generated directories such as `.svelte-kit/`; do not edit generated output directly.
- Match the existing styling and component conventions before introducing new patterns.
