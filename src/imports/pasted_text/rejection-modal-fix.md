ARCHITECT REVIEW DECISION — REJECTION MODAL + IMAGE LOADING FIX

The current rejection flow and detail screen image system are broken.

This is NOT a redesign.
This is a UI replacement + image loading reliability fix.

========================================================
PROBLEM 1 — WRONG REJECTION SCREEN
========================================================

The current rejection modal/sheet is incorrect.

Right now it:
- looks flat
- feels disconnected
- uses the wrong layout
- has weak hierarchy
- does not match the intended UI system

Replace the CURRENT rejection modal completely with the NEW rejection sheet design provided in the reference image.

========================================================
USE THE NEW REJECTION UI EXACTLY
========================================================

The rejection interaction should behave like a proper bottom sheet/modal.

Behavior:
- slides upward smoothly from bottom
- background screen dims behind it
- maintains context of Review Decision screen
- feels lightweight and modern
- not a full screen transition

========================================================
BOTTOM SHEET STRUCTURE
========================================================

Use the EXACT layout structure from the provided reference:

Top drag handle
↓
Title:
“Why are you rejecting?”
↓
4 selectable reason cards:
- Alignment
- Material
- Quality
- Incomplete

↓
Large feedback input area
↓
Primary CTA:
“Submit Rejection”

========================================================
IMPORTANT SCREEN RATIO RULE
========================================================

The provided rejection modal reference may not perfectly match the exact phone screen ratio used in the app.

You ARE allowed to:
- adjust spacing
- adjust alignment
- resize containers proportionally
- rebalance padding/margins
- slightly reposition elements

ONLY IF REQUIRED to properly fit the mobile viewport and maintain layout consistency.

However:

DO NOT:
- redesign the modal
- change the visual structure
- alter hierarchy
- replace UI elements
- modify typography styles
- change button styles
- change component order
- simplify the layout

The final result should still visually feel IDENTICAL to the provided rejection UI.

It should look like:
“the same exact design correctly adapted to the app screen ratio.”

NOT:
“a redesigned interpretation.”

========================================================
INTERACTION BEHAVIOR
========================================================

Reason cards:
- selectable
- selected state fills brown
- unselected remains outlined/light
- only one active at a time

Feedback field:
- multiline
- supports typed notes
- supports voice/mic icon UI
- placeholder text:
“Type or record feedback…”

CTA:
- fixed at bottom of sheet
- brown filled button
- subtle shadow
- smooth tap interaction

========================================================
ANIMATION REQUIREMENTS
========================================================

The modal must:
- slide up from bottom smoothly
- animate naturally
- not abruptly appear
- feel connected to the current screen

Background:
- dimmed overlay
- Review Decision screen still visible behind it
- slight depth effect

Closing:
- slide back downward
- restore original screen cleanly

========================================================
PROBLEM 2 — DETAIL SCREEN IMAGES STILL BROKEN
========================================================

The hero images in ALL decision detail screens are still failing.

Instead of the actual image:
- grey placeholders appear
- blank gradient containers appear
- image loads inconsistently

This completely breaks realism.

========================================================
REQUIRED IMAGE FIX
========================================================

Every Review Decision detail screen MUST load the correct image reliably.

NO:
- grey gradients
- blank hero areas
- placeholder fills
- broken image states

========================================================
IMAGE SOURCE RULE
========================================================

The detail screen must inherit the SAME image from the clicked decision card.

Examples:
- AC Layout Change → AC vent image
- Marble Finish Selection → marble texture image
- Lighting Upgrade → bulb image

========================================================
IMAGE LOADING REQUIREMENTS
========================================================

Ensure:
- images render consistently
- image containers are not empty
- image references are correctly linked
- image scaling is stable
- images persist during transitions
- no flicker during prototype navigation

The hero image should:
- fully cover hero area
- maintain aspect ratio
- use proper clipping
- preserve rounded corners/layout

========================================================
IMPORTANT
========================================================

DO NOT:
- redesign Review Decision screen
- alter spacing system
- change typography
- modify navigation
- affect bottom nav
- change existing flows
- remove dim overlay
- create fullscreen rejection pages

ONLY:
- replace rejection modal with the new sheet UI
- add smooth swipe-up interaction
- fix ALL decision detail image loading bugs
- ensure correct image continuity from cards to detail screens

========================================================
EXPECTED RESULT
========================================================

The Decisions flow should now feel production-ready:
- every detail screen loads correct images
- no fake placeholders exist
- rejection flow feels modern and seamless
- bottom sheet interaction feels smooth and intentional
- prototype quality feels realistic instead of static