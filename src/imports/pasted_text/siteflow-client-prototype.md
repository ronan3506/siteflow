You are modifying SITEFLOW.

These pasted frames are the full CLIENT flow for the SITEFLOW mobile app. Build the clickable prototype logic for these screens so it behaves in the same simple, stable, working way as the existing Contractor and Architect flows.

CRITICAL RULE:
Do NOT redesign or alter existing hierarchy. Extend the current SITEFLOW design system only.

This task is NOT to create a new UI.
This task is to connect the pasted Client screens into a working prototype while preserving the exact existing layouts, visual style, spacing, card structure, typography, images, and screen compositions already present in the pasted frames.

CLIENT FLOW GOAL:
Make this entire Client flow function logically and consistently, using the same prototype behavior principles already used in the Architect flow.

VERY IMPORTANT INHERITANCE RULE:
Take the same headers and the same bottom navbars from the Architect flow.
Use the same repeated behavior logic from the Architect flow for:
- hamburger menu
- SITEFLOW header behavior
- language toggle placement/behavior
- bottom navbar behavior
- card click behavior
- transition style
- screen-to-screen logic
- back navigation logic style

Anything that already exists in Architect and is visually or structurally shared should behave exactly the same here.

PRIMARY SCREEN RULE:
For Client main app screens such as:
- Home
- Decisions
- Issues
- Timeline

keep header and bottom navbar persistent between these primary screens.
Only animate the content area between these screens.
Do not make header and navbar re-animate awkwardly on every tab switch.
Maintain the same persistent behavior as the Architect flow.

DETAIL SCREEN RULE:
For detail screens such as:
- Review Decision
- Decision Sent
- issue details
- timeline detail screens
- any view details / review subpage

use the normal SITEFLOW detail-screen behavior already established in Contractor/Architect:
- back arrow
- contextual title
- separate detail transition behavior
- no awkward inherited main-screen animation
- preserve correct back destination

BOTTOM NAVBAR:
Use the Client-specific main navigation structure shown in the pasted screens.
It should follow the same behavior logic as Architect.
Keep the same persistent nav system and active-tab update behavior.
Do not redesign the navbar.
Do not change icon style.
Do not change animation logic.

CLICKABLE FLOW LOGIC:
Connect the pasted Client screens logically in the simplest working way.

Expected flow behavior:
- Home screen cards/buttons open the correct linked detail or list screens
- Pending Decisions cards open the Review Decision screen
- Review Decision actions continue into the correct next step
- approving a decision opens the Decision Sent screen
- Site Issues cards/buttons open the correct issue detail screens
- Timeline cards open their correct timeline detail screens
- Back buttons return to the correct previous screen
- Home / Decisions / Issues / Timeline tabs switch correctly between primary screens with persistent header/navbar behavior

TIMELINE FLOW RULE:
If the Timeline flow already exists and is the same as Contractor and Architect, keep it exactly the same as those flows without changing that logic or structure.
Do not re-interpret Timeline.
Do not redesign Timeline.
Just preserve the same working Timeline pattern already established in the other stakeholder flows.

DECISION APPROVAL FEEDBACK:
In the Client Review Decision flow:
- APPROVE must be clickable
- after final approval, show feedback in the same SITEFLOW language as the Architect/Contractor approval feedback
- keep the confirmation subtle and clean
- then transition into the Decision Sent page if that page is part of the pasted flow
- preserve correct back/navigation logic after that

DECISION SENT SCREEN:
The Decision Sent screen must remain visually unchanged.
Add a nice, subtle animation to the tick mark/check confirmation when this page appears.

Tick animation requirements:
- clean
- premium
- simple
- not bouncy
- not flashy
- smooth scale/fade or draw-like confirmation feel
- should feel native to SITEFLOW
- should play when the Decision Sent page is viewed

Do NOT:
- animate the whole page heavily
- distort the existing layout
- add celebratory effects
- add confetti
- change spacing or typography

HOME PAGE PROJECT STATUS CARD ANIMATION:
On the Client Home page, the Project Status card must have a clean content animation every time the Home page gets viewed.

Animate:
- the progress bar fill
- the percentage number
- the three information boxes inside the card
- the content inside those three boxes

Animation style:
- simple
- clean
- calm
- premium
- subtle stagger is okay
- should feel native and trustworthy
- no flashy dashboard animation
- no enterprise/gamified feeling
- keep it construction-app appropriate

Examples of acceptable behavior:
- percentage appears smoothly
- progress bar fills smoothly
- small info boxes/content fade in or rise in subtly one after another

IMPORTANT:
Do not change the Project Status card layout.
Only animate the existing contents inside it.

ISSUE FLOW LOGIC:
For Client Issues:
- View Details buttons should open the correct issue detail screens
- issue detail screens should preserve the shown image and content exactly as pasted
- keep issue interactions simple and clean
- preserve back navigation correctly

CARD BEHAVIOR:
All cards should retain the same simple clickable behavior style already used in Contractor and Architect.
No unnecessary complexity.
No new interaction patterns.
No broken states.

INTERACTION STYLE:
- smooth native-feeling transitions
- persistent navbar behavior on primary screens
- content-only transitions between primary screens
- separate transition behavior for detail screens
- avoid harsh sideways movement
- preserve header persistence
- preserve working prototype logic

IMAGE RULES:
- reuse the exact same images already used in the pasted screen layouts
- do not replace images
- do not introduce placeholders
- do not distort aspect ratios
- keep image treatment consistent with existing screens
- preserve reliable image loading behavior like the corrected Architect/Contractor flows

LAYOUT RULES:
- preserve the exact pasted screen layouts
- maintain centered grid layout
- preserve equal side margins
- keep consistent vertical spacing
- align to current padding system
- preserve breathing room
- do not shift cards left
- do not compress sections
- do not add extra scrolling unless already required by the design

DESIGN SYSTEM:
- follow SITEFLOW design language
- maintain current rounded corner system
- keep typography hierarchy intact
- preserve muted construction palette
- reuse existing card system
- keep the app visual style identical to the pasted screens

PROTOTYPE REQUIREMENTS:
Everything must function as a connected prototype.

This includes:
- smooth transitions
- correct navigation
- working back flows
- working decision approval flow
- working issue detail flow
- working timeline flow
- working menu/header/navbar behavior
- working home page card animation
- working Decision Sent tick animation

DO NOT:
- redesign any pasted screen
- restyle cards
- change spacing
- change typography
- move content
- replace images
- alter existing visual hierarchy
- introduce new layouts
- create extra screens not requested
- change the Timeline flow that already matches Contractor/Architect
- break stakeholder-specific Client flow logic
- change the Architect-style repeated header/navbar system being inherited here

Final goal:
Create a clean, fully connected Client prototype flow from the pasted frames, using the same interaction simplicity, navigation consistency, persistent repeated elements, same header/navbar system as Architect, same toast/approval feedback language, same already-working Timeline behavior, and smooth subtle motion — while keeping all pasted Client screens visually unchanged except for the requested clean animations inside the Home Project Status card and the Decision Sent tick mark.