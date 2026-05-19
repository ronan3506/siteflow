Modify only the contractor flow shown in the current working contractor prototype.
Do not touch architect, client, or worker frames, components, flows, screens, navigation, or layouts.

Use the existing SITEFLOW system.

This task is CONTRACTOR-ONLY.

Refine the existing contractor APPROVALS flow that has already been generated.

CRITICAL PROTECTION RULE:
Do NOT redesign or alter existing hierarchy.
Do NOT affect Architect, Client, or Worker flows.
Do NOT modify any existing stakeholder screens outside the contractor flow.
Do NOT break any existing contractor flows, screens, links, cards, menu behavior, navbar behavior, header behavior, spacing system, or clickable interactions.

This must remain a clean contractor-only extension inside the contractor hamburger menu system.

MENU RULE:
Keep APPROVALS as the contractor hamburger menu item directly below WORKER DASHBOARD.
Do not change the rest of the contractor menu.
Do not affect any other stakeholder menus.

MAIN CHANGE 1 — KEEP APPROVALS AS ONE SCREEN, BUT MAKE IT TAB-BASED

Do not keep Requests Sent and Decision Updates as one long stacked scroll section.

Instead, keep APPROVALS as one combined screen with two clickable tabs near the top:

- REQUESTS SENT
- DECISION UPDATES

The user should be able to switch between these two parts with one click on the tabs.

This must remain one screen, not two separate menu destinations.

TAB BEHAVIOR:
- Default open tab: REQUESTS SENT
- Tapping DECISION UPDATES switches content cleanly
- Tapping REQUESTS SENT switches back cleanly
- Keep the tab behavior simple, smooth, and native to SITEFLOW
- Do not create flashy tab animation
- Do not break existing header/menu behavior

MAIN CHANGE 2 — CONTENT LOGIC FOR EACH TAB

REQUESTS SENT TAB:
This tab must contain only outgoing requests that are still waiting for a final response.

Only use pending-state requests here, such as:
- Pending
- Under Review

Do NOT place Approved, Rejected, or Needs Clarification response items inside Requests Sent.

Use examples like:
- HVAC Layout Revision
- Marble Finish Approval
- Lighting Upgrade Cost Approval

These should be treated as still pending / under review and awaiting response.

Each Requests Sent card should include:
- title
- request type
- Sent to: Architect or Client
- date/time sent
- status chip
- cost impact
- delay impact
- one primary action: VIEW
- image thumbnail in the same exact visual style already used in the existing architect / app cards where relevant

DECISION UPDATES TAB:
This tab must contain only requests that have already received a response.

Only use:
- Approved
- Rejected
- Needs Clarification / Revision Requested

Do NOT repeat the same examples from Requests Sent.
Use different tasks here so the contractor clearly understands these are response-returned items, not still-pending ones.

Keep:
- Column Correction Design Check
and create additional realistic made-up decision update items with necessary information, such as:
- Foundation Drainage Reroute
- Exterior Paint Finish Change
- Terrace Railing Height Revision
- Window Shade Motor Upgrade

Each Decision Updates card should include:
- title
- response from: Architect or Client
- final status
- response date/time
- one-line summary
- cost effect
- delay effect
- one primary action: VIEW
- relevant image thumbnail in the same exact visual style already used in the existing architect / app cards where relevant

IMPORTANT:
No item should appear in both tabs.
Requests Sent = only waiting items.
Decision Updates = only responded items.

TOP SUMMARY:
Keep the two summary boxes at the top, but make them accurate to the new tab logic:
- Pending Requests
- New Responses

Keep them visually simple and contractor-consistent.

MAIN CHANGE 3 — ADD IMAGES TO SUBPAGES WITHOUT CHANGING THE SUBPAGE CONTENT

Very important:
The existing subpages for the Requests Sent cards and Decision Updates cards currently do not have images.

Add images to these subpages.

IMAGE RULE FOR EXISTING TASKS:
For known tasks like:
- HVAC Layout Revision
- Lighting Upgrade
- Marble Finish Approval
- and similar existing decision/request items

use the same exact images from the architect screens’ subpages.

Only take the images from the architect screens.
Do NOT copy or change anything else from the architect screens.

Do NOT copy architect text, card structure, metadata, or other content.
Only reuse the exact corresponding images.

SUBPAGE IMAGE LAYOUT RULE:
Add the image to each contractor request/detail subpage in the same exact way the image is placed in the architect decision subpages and other matching screens in the app.

That means:
- same image positioning pattern
- same top visual placement
- same image proportion / treatment style
- same rounded shape treatment if already used
- same design language
- same spacing relationship to the title/content

But:
Do NOT change any of the current contractor subpage information.

Keep the existing subpage information exactly as it already is, including:
- title
- labels
- request type
- sent to / response metadata
- reason for request
- what changed
- cost impact
- delay impact
- request history
- response note
- buttons
- all other text and sections already present

Only insert the image block properly.
Do not rewrite the page.

IMAGE RULE FOR NEW MADE-UP DECISION UPDATE TASKS:
For the new tasks created for the Decision Updates tab, add relevant and necessary images that match the task and feel native to SITEFLOW.

These should follow the same card-thumbnail style and same subpage image-placement style as the other app screens.

MAIN CHANGE 4 — CARD IMAGES

Where the existing app design language uses card images, add the image thumbnails to the cards too using the same exact card layout style already established in the architect / existing SITEFLOW screens.

Use:
- same image size relationship
- same image position inside card
- same rounded treatment
- same margin/padding logic
- same visual hierarchy

Do not change card layout beyond what is necessary to restore that existing image pattern.

MAIN CHANGE 5 — DETAIL PAGE BEHAVIOR

Keep all existing click flows and detail page navigation working.

- VIEW on a Requests Sent card opens its own subpage
- VIEW on a Decision Updates card opens its own subpage
- back from each subpage returns to the correct tab inside APPROVALS
- preserve current contractor menu behavior
- preserve existing header/navbar behavior
- do not break any existing clickable flow

UI REQUIREMENTS:
Follow the exact existing SITEFLOW contractor UI language:
- warm off-white background
- muted brown construction palette
- same typography hierarchy
- same rounded card language
- same equal side margins
- same centered layout
- same spacing rhythm
- same subtle shadows / borders
- same contractor menu-linked screen behavior

Do NOT redesign the app.
This must feel like the same contractor flow, only corrected and completed.

DO NOT:
- redesign existing screens
- alter architect/client/worker flows
- break contractor flows
- break prototype links
- change text already present in the existing contractor subpages
- mix the same tasks into both tabs
- remove any current content from the detail pages
- replace architect images with new ones for existing known tasks
- copy anything from architect screens except the images themselves
- disrupt spacing/layout on existing pages
- create broken image placeholders
- distort aspect ratios
- change global components
- modify layouts outside the contractor approvals refinement

Final goal:
Refine the contractor-only APPROVALS flow so that it becomes one tab-based screen with clearly separated Requests Sent and Decision Updates content, no duplicated tasks between tabs, accurate made-up response tasks in Decision Updates, and proper image thumbnails plus subpage images added in the exact established SITEFLOW image style — while preserving every existing click flow, layout, text block, and stakeholder flow everywhere else.