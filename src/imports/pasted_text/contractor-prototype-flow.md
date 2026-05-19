Create a fully connected mobile prototype flow for the CONTRACTOR role using the exact existing UI screens and design system already created.

IMPORTANT:
DO NOT redesign the UI.
DO NOT replace layouts.
DO NOT alter colors, typography, spacing system, card styles, iconography, shadows, or branding.
DO NOT reinterpret screens creatively.

Your job is ONLY to:
- connect screens correctly
- add proper prototype interactions
- maintain smooth UX flow
- preserve the exact UI structure
- only fix layout issues IF something visually breaks during prototyping

The prototype must feel polished, realistic, and production-ready while keeping the exact current UI.

--------------------------------------------------
GLOBAL NAVIGATION BEHAVIOR (VERY IMPORTANT)
--------------------------------------------------

The bottom navigation bar must behave as a FLOATING FIXED NAVIGATION BAR.

Requirements:
- Nav bar stays fixed in place while scrolling on every main app screen
- Content scrolls underneath while nav bar remains visible
- Maintain exact visual styling from the provided nav bar reference
- Preserve floating appearance and spacing
- Keep proper bottom safe-area padding
- Active tab state changes correctly depending on current screen
- Navigation transitions should feel smooth and responsive

Navigation tabs:
- HOME
- TASKS
- ISSUES
- TIMELINE

Each tab should properly open its linked screen.

--------------------------------------------------
ONBOARDING FLOW → CONTRACTOR FLOW
--------------------------------------------------

FLOW START:
User completes onboarding:
- language selection
- onboarding slides
- role selection
- profile setup
- loading/setup screen

On “Who are you?” screen:
- Selecting CONTRACTOR activates Continue button
- Continue opens contractor app flow

--------------------------------------------------
SCREEN FLOW
--------------------------------------------------

1. TODAY’S BOARD HOME SCREEN
(Screen name: “Today Board home screen”)

This becomes the contractor landing dashboard after onboarding.

Interactions:
- Bottom nav works
- HOME tab active
- Cards can scroll vertically
- Nav bar stays fixed while scrolling

--------------------------------------------------
2. TASKS SCREEN
(Screen name: “Tasks”)

Opened by:
- Clicking TASKS in nav bar

Behavior:
- TASKS tab becomes active
- Screen scrolls vertically
- Floating nav bar remains fixed

SPECIAL BEHAVIOR:
This screen ONLY contains the floating “ADD TASK” button.

ADD TASK BUTTON RULES:
- Floating button stays fixed above nav bar while scrolling
- Button only exists on Tasks screen
- Maintain exact UI style already designed
- Position should feel intentional and accessible
- Do not overlap content awkwardly

Interaction:
- Clicking ADD TASK opens:
→ 3. TASK ASSIGNMENT SCREEN

--------------------------------------------------
3. TASK ASSIGNMENT SCREEN
(Screen name: “Task Assignment (Mobile)”)

Behavior:
- Opens from Add Task button
- Back button returns to Tasks screen
- Inputs/selection areas should feel interactable

Interaction:
- Clicking “ASSIGN TASK”
→ returns to Tasks screen

After returning:
- Newly assigned task should visually appear in task list
- Maintain existing UI style

--------------------------------------------------
4. APPROVAL DETAIL SCREEN
(Screen name: “Approval Detail (Mobile)”)

Opened by:
- Clicking “Structural Frame” task card on Tasks screen

Behavior:
- Screen scrolls vertically
- Back button works
- Maintain fixed nav behavior only if originally present

Interactions:
- APPROVE SUBMISSION
→ returns to Tasks screen
- REJECT
→ opens rejection flow modal

--------------------------------------------------
5. REJECTION FLOW
(Screen name: “Rejection Flow (Mobile)”)

IMPORTANT:
This is a BOTTOM SHEET / SWIPE-UP MODAL.

Behavior:
- Slides upward from bottom
- Appears layered above Approval Detail screen
- Background slightly dimmed
- Maintain exact existing UI styling

Interactions:
- SUBMIT REJECTION
→ closes modal
→ returns to Tasks screen

- Cancel/Back
→ closes modal only

--------------------------------------------------
6. ISSUES SCREEN
(Screen name: “ISSUES — List”)

Opened by:
- Clicking ISSUES in nav bar

Behavior:
- ISSUES tab active
- Fixed floating nav bar remains visible
- Vertical scrolling works

Interaction:
- Clicking “VIEW” on “Column Not Straight”
→ opens Issue Detail screen

--------------------------------------------------
7. ISSUE DETAIL SCREEN
(Screen name: “ISSUES — Detail”)

Opened from Issues screen.

Behavior:
- Back button returns to Issues list
- Screen scrolls vertically
- Maintain current design exactly

Buttons may feel interactive but do not need deep flows unless already designed.

--------------------------------------------------
8. TIMELINE SCREEN
(Screen name: “Project Timeline”)

Opened by:
- Clicking TIMELINE in nav bar

Behavior:
- TIMELINE tab active
- Timeline items scroll vertically
- Floating nav bar remains fixed

--------------------------------------------------
PROTOTYPE TRANSITIONS
--------------------------------------------------

Use smooth mobile-app style transitions:
- tap transitions
- slide transitions where appropriate
- bottom-sheet animation for rejection flow
- maintain consistent animation timing

Avoid:
- abrupt screen jumps
- broken overlays
- weird scroll resets

--------------------------------------------------
STRICT UI PRESERVATION RULES
--------------------------------------------------

DO NOT:
- redesign layouts
- move components unnecessarily
- alter spacing system globally
- change typography
- change card designs
- change colors
- change shadows
- change icon styles
- modernize anything

ONLY fix:
- broken spacing
- overlap issues
- alignment problems
- prototype interaction problems

Everything must remain visually identical to the provided screens while becoming a fully interactive contractor app prototype.