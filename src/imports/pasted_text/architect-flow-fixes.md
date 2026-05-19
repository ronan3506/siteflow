ARCHITECT FLOW — HEADER, NAVIGATION, TIMELINE, ISSUES, AND PROTOTYPE FIXES

The Architect prototype currently has multiple broken consistency and navigation issues.

This is NOT a redesign task.
This is a SYSTEM CONSISTENCY + PROTOTYPE FIX task.

IMPORTANT:
ONLY modify the ARCHITECT FLOW.
DO NOT touch:
- contractor screens
- client screens
- worker screens
- onboarding
- shared components outside architect flow

========================================================
1. ARCHITECT HEADER CONSISTENCY FIX
========================================================

The Architect screens are currently inconsistent and broken.

The HOME / DECISIONS / ISSUES / TIMELINE screens are missing the proper SITEFLOW contractor-style header.

Use the EXACT SAME HEADER SYSTEM used in:
- contractor home
- contractor issues
- contractor timeline

That means:
- hamburger menu on left
- SITEFLOW logo
- language switch pill on right
- identical spacing
- identical alignment
- identical header height

This is the SAME APP.
Architect and contractor use the SAME top-level app shell.

DO NOT:
- create alternate header styles
- shrink headers
- move the logo differently
- create inconsistent spacing

========================================================
2. REVIEW DECISION SCREEN HEADER FIX
========================================================

The “Review Decision” detail screen is broken.

Current issues:
- spacing inconsistent
- back button misaligned
- unnecessary language switch pill
- header feels detached

Fix it using the SAME detail header style used in:
- contractor detail screens
- timeline detail screens
- issue detail screens

The Review Decision screen should contain ONLY:
- back arrow
- REVIEW DECISION title

REMOVE:
- language switch button from detail page

Spacing should:
- align vertically
- match other detail screens
- feel balanced
- preserve left padding consistency

========================================================
3. NAVIGATION BAR BUG FIXES
========================================================

Current architect bottom nav is broken.

Issues:
- duplicated nav bars
- nav overlapping cards
- nav hiding behind status cards
- incorrect layering
- spacing collapse

Fix ALL navigation behavior.

Bottom nav must:
- appear ONCE only
- remain fixed properly
- never duplicate
- never overlap content
- never cover cards
- maintain consistent safe area spacing

Ensure:
- scrolling content respects nav height
- cards stop above nav
- no z-index/layering bugs

========================================================
4. ARCHITECT ISSUES + TIMELINE MUST MATCH CONTRACTOR
========================================================

IMPORTANT:

The ARCHITECT ISSUES and TIMELINE flows are supposed to function EXACTLY like contractor versions.

Currently they are behaving like:
- static mockups
- disconnected screens
- incomplete prototypes

Fix this completely.

========================================================
ARCHITECT ISSUES
========================================================

Architect Issues must behave exactly like contractor Issues:

- clickable issue cards
- smooth transitions
- proper detail pages
- correct back navigation
- working prototype links
- identical interaction behavior

Only CONTENT differs.
The SYSTEM and FLOW are the same.

Reuse:
- issue detail layouts
- interaction patterns
- transitions
- animations
- card behavior

DO NOT redesign.

========================================================
ARCHITECT TIMELINE
========================================================

Architect Timeline must also function exactly like contractor Timeline.

This includes:
- completed work cards
- issue detected cards
- decision made cards
- large site update cards
- detail pages
- scroll behavior
- progress layouts
- transition behavior

The current architect timeline feels static and disconnected.

Fix:
- clickable cards
- working flows
- smooth transitions
- proper detail navigation
- correct scroll behavior

The COMPLETE TIMELINE SYSTEM should mirror contractor flow behavior.

========================================================
5. IMAGE LOADING BUG FIX
========================================================

Many Architect images are broken or not rendering.

Current issues:
- blank placeholders
- unloaded thumbnails
- static empty containers

Fix ALL image loading.

Images must:
- load correctly
- preserve aspect ratio
- use rounded corners properly
- appear immediately in prototype

Allowed:
- reuse contractor images
- reuse issue images
- reuse task images
- reuse timeline photos

Consistency is more important than unique assets.

========================================================
6. DECISION SCREEN LAYOUT BUGS
========================================================

The Architect Decisions screen has spacing and overlap problems.

Current problems:
- cards colliding with nav
- metrics cards too close to nav
- inconsistent bottom spacing
- visual crowding

Fix:
- safe bottom padding
- vertical spacing rhythm
- proper card margins
- equal spacing between sections

Ensure:
- stats cards never collide with nav
- decision cards maintain hierarchy
- layout breathes properly

========================================================
7. DETAIL SCREEN SYSTEM CONSISTENCY
========================================================

All Architect detail screens must follow SAME SYSTEM RULES:

- same padding logic
- same section spacing
- same card radius
- same typography rhythm
- same image treatment
- same scroll behavior

DO NOT:
- create inconsistent layouts
- compress sections
- randomly change margins

========================================================
8. PROTOTYPE FEEL FIX
========================================================

The architect flow currently feels:
- static
- disconnected
- non-native

It must feel:
- interactive
- connected
- fluid
- production-ready

Transitions should:
- fade smoothly
- preserve continuity
- feel like real app navigation

Avoid:
- PowerPoint feeling
- hard cuts
- abrupt screen swaps

========================================================
9. FINAL RESULT
========================================================

After fixes:
- Architect screens should feel fully integrated into SITEFLOW
- Same app shell as contractor
- Same navigation system
- Same timeline/issue behavior
- Same interaction quality

BUT:
- content remains architect-specific
- decisions remain architect-focused
- architect logic stays separate from contractor workflows

DO NOT modify any other stakeholder flows while implementing these architect-only fixes.