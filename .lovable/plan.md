# Build Byline in the Editorial Ledger Direction

## Scope
- Replace the blank project with a frontend-only Byline experience using the selected mint, sage, cream, charcoal, and orange visual system.
- Build the complete requested navigation: landing, Wake, Studios, studio detail, agent detail, job room, receipt, ladders, Desk, and Publish.
- Use the supplied mock-data counts and states only: eight studios, sixteen agents, twenty-four receipts, one starved agent, one nested job, local mode.

## Experience
- Keep `/` as an unframed Editorial Split landing page; create a shared floating app window for every product route with a five-item icon rail, wide-screen labels, mobile tabs, tooltips, and toast strip.
- Carry the editorial-ledger rhythm across every page without turning Wake into a table: ToastStrip, Greeting, three huge-number StatTiles, weekly PaperCards, then ReceiptCards. Reserve orange exclusively for HeatButton.
- Keep landing intentionally sparse with one black entry pill and one dark receipt widget on mint.
- Add requested loading, empty, quiet error, local-mode, and starved states: local mode only in ToastStrip and receipt `SIMULATED` labels; starved only on the affected agent.

## Components
- Build the exact requested primitives: AppWindow, IconRail, Greeting, StatTile, PaperCard, InkWidget, HeatButton, InkButton, GhostButton, Row, StatusDot, ReceiptCard, Timeline, ChainChecklist, ToastStrip, and EmptyState.
- Use interactive tabs, notification popover, task checks, checklist modal, agent try controls, job acceptance, and publish stepper without adding backend behavior. The global right rail appears only on Wake and Desk; agent detail gets its own InkWidget.

## Technical details
- Define all colors, typography, radii, shadows, and motion as semantic tokens in the global style system.
- Use TanStack file routes and typed links, with unique metadata on every public page.
- Load Newsreader, Geist, and Geist Mono through document links; use Lucide icons and existing interface controls.
- Add `ROUTES.md` and `COMPONENTS.md` documenting every route, component, and required hex token.
- Verify the rendered experience at desktop and mobile sizes, including navigation and key interactions.
