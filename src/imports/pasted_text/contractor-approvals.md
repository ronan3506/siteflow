Modify only the contractor flow shown in the current working contractor prototype.
Do not touch architect, client, or worker frames, components, flows, or navigation.

Use the existing SITEFLOW system.

This task is CONTRACTOR-ONLY.

Create a new CONTRACTOR hamburger menu flow called:

APPROVALS

CRITICAL PROTECTION RULE:
Do NOT redesign or alter existing hierarchy.
Do NOT affect Architect, Client, or Worker flows.
Do NOT modify any existing stakeholder screens outside the contractor flow.
Do NOT break any existing contractor flows, screens, links, cards, menu behavior, navbar behavior, header behavior, or spacing system.

This must be added as a clean contractor-only extension inside the contractor hamburger menu system.

MENU PLACEMENT:
Add APPROVALS as a new contractor hamburger menu item directly below:
WORKER DASHBOARD

Do not change the rest of the contractor hamburger menu structure except for inserting this new item in the correct place.
Do not affect architect/client/worker menus.

PURPOSE:
This is the contractor’s combined approval coordination screen.

It must contain 2 clearly separated parts on the same screen:

1. REQUESTS SENT
2. DECISION UPDATES

This screen should let the contractor clearly understand:
- what requests the contractor has sent out
- whether they were sent to Architect or Client
- which ones are still pending
- what responses have come back
- whether something was approved, rejected, or sent back for clarification

IMPORTANT:
Keep both parts on the same screen, but visually separate them clearly with section headings and spacing.
Do NOT merge them into one mixed feed.
Do NOT make them separate hamburger-menu destinations.

SCREEN NAME:
APPROVALS

SUBTITLE:
Requests sent and responses received

SCREEN TYPE:
This is a contractor menu-linked screen, not a bottom navbar primary tab.
Use the same SITEFLOW menu-detail screen behavior already established in contractor menu flows.

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
This must feel like it was always part of the contractor flow.

TOP SUMMARY:
Add 2 simple summary boxes at the top of the page:
- Pending Requests
- New Responses

Keep them visually simple and contractor-consistent.
Do not make them dashboard-heavy.

SECTION 1: REQUESTS SENT

Add a section heading:
REQUESTS SENT

This section shows outgoing contractor-raised requests sent to:
- Architect
- Client

Each request card should include:
- request title
- request type
- Sent to: Architect or Client
- date/time sent
- status chip
- cost impact
- delay impact
- one primary action: VIEW

Suggested realistic examples:
- HVAC layout revision — Sent to Architect — Pending
- Marble finish approval — Sent to Client — Approved
- Lighting upgrade cost approval — Sent to Client — Under Review
- Column correction design check — Sent to Architect — Needs Clarification

Use only simple practical statuses:
- Pending
- Under Review
- Approved
- Rejected
- Needs Clarification

Use SITEFLOW-style muted status chips.
Do not create flashy badges.

SECTION 2: DECISION UPDATES

Below REQUESTS SENT, add a second clearly separated section:
DECISION UPDATES

This section shows incoming responses received from:
- Architect
- Client

Each update card should show:
- request / decision title
- response from: Architect or Client
- final status
- response date/time
- cost effect
- delay effect
- one-line summary
- one primary action: VIEW

Suggested realistic examples:
- AC layout revision — Approved by Architect
- Marble finish selection — Approved by Client
- Lighting upgrade request — Rejected by Client
- Beam clash routing change — Clarification requested by Architect

Use only:
- Approved
- Rejected
- Revision Requested

Visual treatment:
- muted green for Approved
- muted red for Rejected
- warm amber for Revision Requested

LAYOUT OF THE COMBINED SCREEN:
The full page order should be:

- normal SITEFLOW detail/header structure for this menu-linked page
- page title
- subtitle
- 2 top summary boxes
- REQUESTS SENT section
- DECISION UPDATES section

Keep enough spacing between the two sections so they feel distinct.
Do not over-separate them with huge empty gaps.
Do not make scrolling unnecessarily long.
Keep the page natural and efficient.

INTERACTION:
- clicking APPROVALS from the contractor hamburger menu opens this screen
- clicking VIEW on a Requests Sent card opens a request detail screen
- back from that detail screen returns to APPROVALS
- clicking VIEW on a Decision Updates card opens a decision response detail screen
- back from that detail screen returns to APPROVALS
- preserve all existing contractor menu open/close behavior
- preserve all existing contractor flows unchanged

REQUEST DETAIL SCREEN:
Create a simple contractor-style request detail screen containing:
- request title
- request type
- who it was sent to
- reason for request
- what changed
- cost impact
- delay impact
- current status
- sent date/time
- optional supporting image if relevant
- short request history strip:
  - Sent
  - Viewed / Under Review
  - Responded

If still pending, show a passive state:
- Waiting for response

Optional simple secondary action only if needed:
- Send Reminder

Keep this simple and practical.

DECISION UPDATE DETAIL SCREEN:
Create a simple contractor-friendly decision response detail page showing:
- title of request
- who responded
- final decision status
- response note / rejection reason / clarification note
- cost effect
- updated delay impact
- recommendation / next step

Actions:
If Approved:
- Continue Work
- Back

If Rejected or Revision Requested:
- Revise and Resubmit
- Back

Do not create complex branching logic unless already needed by the prototype.
Keep it clear and operational.

TOAST / FEEDBACK:
If contractor taps Continue Work or Revise and Resubmit, use the normal small SITEFLOW top toast style only if feedback is needed.
Keep it subtle, consistent, and non-intrusive.

IMAGE RULES:
Reuse existing SITEFLOW construction / task / decision images if relevant.
Do not create broken placeholders.
Do not distort aspect ratios.
Do not change existing asset behavior.
Do not introduce blank avatars or missing thumbnails.

PROTOTYPE RULES:
- preserve all existing contractor prototype flows
- preserve all existing other stakeholder flows
- maintain back navigation behavior
- do not break existing hamburger menu logic
- do not alter bottom navbar behavior
- do not alter top header behavior
- keep this as a contractor-only isolated extension

DO NOT:
- redesign any existing screen
- move existing contractor menu items except to insert APPROVALS below Worker Dashboard
- alter architect/client/worker flows
- break existing prototype links
- create analytics or charts
- add dense filters
- change typography or card styling globally
- disrupt spacing/layout on existing pages
- make this look like enterprise approval software
- mix Requests Sent and Decision Updates into one undifferentiated card feed

Final goal:
Add a clean contractor-only APPROVALS flow inside the contractor hamburger menu that combines Requests Sent and Decision Updates on one clearly separated screen, with simple contractor-friendly detail pages, while preserving every existing flow, layout, and stakeholder experience everywhere else in the app.