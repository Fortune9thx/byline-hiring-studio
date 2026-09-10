# Build Byline in the Editorial Ledger Direction

## Scope
- Replace the blank project with a frontend-only Byline experience using the selected mint, sage, cream, charcoal, and orange visual system.
- Build the complete requested navigation: landing, Wake, Studios, studio detail, agent detail, job room, receipt, ladders, Desk, and Publish.
- Use the supplied mock-data counts and states only: eight studios, sixteen agents, twenty-four receipts, one starved agent, one nested job, local mode.

## Experience
- Create a shared floating app window with a five-item icon rail, wide-screen labels, mobile tabs, tooltips, toast strip, and contextual right rail.
- Carry the editorial-ledger rhythm across every page: huge figures, grouped paper rows, quiet mono metadata, tactile seal marks, and a single orange irreversible action.
- Keep landing intentionally sparse with one black entry pill and one dark receipt widget on mint.
- Add requested loading, empty, quiet error, local-mode, and starved states within the component system.

## Components
- Build the exact requested primitives: AppWindow, IconRail, Greeting, StatTile, PaperCard, InkWidget, HeatButton, InkButton, GhostButton, Row, StatusDot, ReceiptCard, Timeline, ChainChecklist, ToastStrip, and EmptyState.
- Use interactive tabs, notification popover, task checks, checklist modal, agent try controls, job acceptance, and publish stepper without adding backend behavior.

## Technical details
- Define all colors, typography, radii, shadows, and motion as semantic tokens in the global style system.
- Use TanStack file routes and typed links, with unique metadata on every public page.
- Load Newsreader, Geist, and Geist Mono through document links; use Lucide icons and existing interface controls.
- Add `ROUTES.md` and `COMPONENTS.md` documenting every route, component, and required hex token.
- Verify the rendered experience at desktop and mobile sizes, including navigation and key interactions.
