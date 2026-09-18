# CLAUDE.md

## Git workflow

This repo uses **trunk-based development**.

- `main` is the trunk. Never commit or push directly to `main`.
- Each ticket is implemented on its own short-lived branch, cut from `main`.
  Branch naming: `ticket-<issue-number>-<short-slug>` (e.g. `ticket-4-sign-up-and-log-in`).
- Once a ticket's work is done (tests green, `/code-review` addressed), open a pull request against `main`.
  Reference the ticket issue in the PR description (e.g. "Closes #4").
- Do not merge the PR. The repo owner reviews and merges every PR themself.
