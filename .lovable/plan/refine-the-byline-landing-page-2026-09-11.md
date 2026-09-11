# Refine the Byline landing page

## Scope
- Rebuild only `/` in `src/routes/index.tsx`.
- Leave the shared Byline components, global styles, and every product route unchanged.

## Landing composition
- Use a full-viewport editorial split with an unframed paper-bright left side and a true edge-to-edge mint right slab.
- Keep the quiet header above the composition with the Byline mark/name on the left and a plain 14px “Launch app” link on the right.
- Give the left content generous desktop inset, a 640px maximum text width, and vertically centered spacing that still leaves room for its small footer.
- Make the Newsreader headline dominant at 72–88px on desktop, with a tight measure and 1.02 line height for short, confident line breaks.
- Keep only the requested subline, Enter Byline action, and compact helper text.

## Receipt object
- Enlarge the existing dark receipt to roughly 420px.
- Anchor it near the bottom-left of the mint slab with a 48px desktop inset.
- Use a restrained hairline and soft grounding shadow instead of a floating-card treatment.
- Preserve all requested receipt details and add `R-1979 · SIMULATED` in mono text.

## Responsive behavior
- Preserve the split on wide screens with the mint slab occupying half the viewport to the right edge.
- On small screens, stack the paper introduction above the mint receipt area while retaining deliberate whitespace and readable type.
- Keep all text and controls clear at the current narrow preview size.

## Validation
- Verify `/` at desktop and mobile sizes for viewport fill, headline rhythm, edge-to-edge mint treatment, receipt placement, and absence of extra sections.
- Confirm navigation still points to `/wake` without modifying that route or any other product page.
