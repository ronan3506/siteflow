Do a full responsive-fit correction pass for the entire prototype, but preserve every existing visual design and interaction exactly.
Use the existing SITEFLOW system.

This task applies to the ENTIRE APP PROTOTYPE across all stakeholder flows:
- onboarding / entry flow
- contractor flow
- architect flow
- client flow
- worker flow
- hamburger menu screens
- all detail subpages
- all bottom-nav screens
- all timeline / issues / decisions / home screens
- all currently existing flows and linked screens

GOAL:
Fix the prototype so that it works properly across different mobile phone screen ratios and sizes without breaking the current UI, layouts, interactions, or navigation logic.

CRITICAL REAL REQUIREMENT:
Do NOT redesign the app.
Do NOT change the UI style.
Do NOT change screen content hierarchy.
Do NOT change logic.
Do NOT change user flows.
Do NOT change copy unless required for responsive fitting and even then keep wording the same.
Do NOT change images, cards, buttons, headers, tabs, navbar logic, or menu logic except where responsive behavior technically requires layout constraints.

This task is to make the entire prototype mobile-responsive in behavior and fitting, while preserving the exact same SITEFLOW design language and existing screen structure.

IMPORTANT:
Treat this as a responsive layout correction pass, not a UI redesign pass.

RESPONSIVE OBJECTIVE:
Make the whole prototype adapt cleanly across common phone sizes and aspect ratios so that when the prototype link is opened on different mobile devices, the screens fit properly and remain visually correct.

TARGET MOBILE RANGE:
Optimize for common smartphone widths/heights, especially in the mobile range around:
- small phones
- regular phones
- tall phones
- slightly wider Android phones

The prototype should remain visually stable across typical mobile device ratios instead of feeling built for only one fixed screen size.

USE RESPONSIVE FIGMA LOGIC:
Apply proper responsive layout behavior using:
- Auto Layout
- constraints
- fill container where appropriate
- hug contents where appropriate
- min/max width logic where needed
- responsive padding preservation
- proper vertical scrolling behavior
- correct pinned headers / footers where already intended
- proper bottom navbar anchoring
- proper image fill behavior without distortion
- preserved safe spacing on narrower devices
- preserved breathing room on wider/taller mobile devices

Do not rebuild the app into a new style.
Do not introduce desktop/tablet design.
This is still a mobile-first app prototype.

CORE RULE:
Preserve the exact existing UI look while making its structure flexible.

SCREEN FRAME RULE:
Do not rely on one fixed mobile frame size for everything.
Create responsive mobile layout behavior across the screens so they fit different phone dimensions more reliably.

If needed, create parallel mobile frame variants / breakpoint versions for common mobile screen ranges while keeping:
- the same visuals
- the same layouts
- the same interaction logic
- the same navigation
- the same content
- the same design system

If multiple mobile frame sizes are needed, keep them visually identical and only adapt the responsive fitting.

LAYOUT PROTECTION RULES:
Do NOT break any existing layout.
Do NOT compress cards awkwardly.
Do NOT let text overlap.
Do NOT let buttons clip or move randomly.
Do NOT let bottom navbars float incorrectly.
Do NOT let headers detach or misalign.
Do NOT let scroll areas break.
Do NOT let images stretch or distort.
Do NOT let equal side margins become inconsistent.
Do NOT reduce readability.

Maintain:
- same spacing rhythm
- same typography hierarchy
- same card proportions as much as possible
- same button hierarchy
- same icon placement
- same image placement
- same visual balance
- same alignment system

BOTTOM NAVBAR RULE:
Across all primary mobile screens:
- keep the bottom navbar anchored properly
- keep it visually consistent
- keep active/inactive states intact
- do not let it overlap content incorrectly
- ensure screens scroll correctly above it
- preserve current navigation logic

HEADER RULE:
Across all primary and detail screens:
- preserve current header behavior
- maintain proper top spacing and safe area feel
- do not let the header crowd content on shorter screens
- do not let it float too far away on taller screens
- keep menu/back button behavior unchanged

CARD RULE:
All cards across all flows must preserve their current design language.
Do not redesign the cards.
Only make their layout responsive so they:
- maintain readable padding
- preserve text hierarchy
- keep buttons accessible
- avoid clipping
- avoid overflow
- remain visually consistent on narrower and taller screens

DETAIL PAGE RULE:
All subpages/detail screens must remain visually the same but become safer across varying mobile heights:
- preserve image blocks where already present
- preserve text sections
- preserve metadata sections
- preserve CTA placement
- allow natural scroll when needed
- avoid content being cut off on shorter devices

IMAGE RULE:
Keep all current images exactly as they are.
Do not replace them.
Do not distort them.
Use proper image fill behavior so they scale/crop cleanly within their containers.

For all image containers:
- preserve aspect ratio
- use crop/fill correctly
- do not squash images
- do not create empty gaps
- do not stretch thumbnails or header images

TAB / TOGGLE / SECTION RULE:
For screens with tabs or segmented controls, such as contractor Approvals:
- keep the exact same logic
- keep the exact same look
- make sure tabs remain aligned and tappable across phone sizes
- do not let tab labels wrap awkwardly or overflow

HAMBURGER MENU RULE:
Across all stakeholder flows:
- preserve current drawer/menu logic
- preserve item order
- preserve item spacing
- make the menu fit correctly on different mobile heights
- ensure scroll works if menu height becomes constrained on smaller phones

TIMELINE / LIST / FEED RULE:
For timelines, lists, issue feeds, updates, approvals, decisions, and similar scrolling pages:
- preserve vertical flow
- maintain card spacing
- prevent card clipping
- prevent inconsistent side padding
- allow natural scroll length
- keep section headers aligned

RESPONSIVE COMPONENT SYSTEM RULE:
Update all repeated shared components so they behave consistently across the full prototype:
- headers
- bottom navbars
- cards
- tabs
- summary/info boxes
- buttons
- image blocks
- form fields
- chips/status tags
- modal/overlay elements if any

But do this without visually changing them.

PROTOTYPE LOGIC PROTECTION:
All existing clicks, links, overlays, back flows, tab behavior, and transitions must continue working exactly as they do now.

Do NOT break:
- stakeholder switching
- contractor flows
- architect flows
- client flows
- worker flows
- menu navigation
- bottom tab navigation
- detail page navigation
- approval/rejection flows
- timeline flows
- issue flows
- any current prototype logic

VISUAL CONSISTENCY RULE:
The app must still look like the same SITEFLOW app after this update.
This is a technical responsive-fit refinement, not a redesign.

SAFE MOBILE DESIGN STANDARDS:
Make sure the prototype remains clean and usable on varying phone dimensions by preserving:
- comfortable side margins
- readable text blocks
- tap targets large enough to use
- stable button sizing
- stable card padding
- proper scroll behavior
- visual balance on both shorter and taller screens

TESTING EXPECTATION:
Apply this responsive correction across the whole prototype and verify it against multiple common mobile screen types so the layouts do not appear broken, cropped, stretched, cramped, or misaligned.

DO NOT:
- redesign screens
- simplify away existing content
- alter stakeholder-specific logic
- remove screens
- change user flow order
- restyle components
- change colors
- change typography system
- change icons
- replace images
- break prototype links
- create tablet or desktop layouts
- leave some screens fixed-width while others are flexible
- introduce inconsistencies between flows

Final goal:
Make the full SITEFLOW prototype fit cleanly across different mobile phone screen ratios and sizes while preserving the exact same UI, layouts, images, components, interactions, and stakeholder flows, with no broken screens and no visual redesign.