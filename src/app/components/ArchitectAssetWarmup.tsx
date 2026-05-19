// Pre-loads every raster asset used by the Architect flow so that images are
// already decoded when the user navigates between tabs and detail screens.
// Mirrors the ContractorAssetWarmup pattern — permanently mounted at the root
// of ArchitectApp, rendered off-screen with zero dimensions.

// Decisions screens
import dec1 from "../../imports/2DecisionsPendingListFinalColor/8c99a992d1b3b116e15bad3b102448ed92218e53.png";
import dec2 from "../../imports/2DecisionsPendingListFinalColor/b5e8e0a128225c8cfb1a95c5d2f90b722310f294.png";
import dec3 from "../../imports/2DecisionsPendingListFinalColor/6cf7638806a889cc3894be5dcb5b138419f36b1c.png";
import dec4 from "../../imports/2DecisionsPendingListFinalColor/898a9bca30863942c1f358937f6a4ec7d6cd1af3.png";

// Review Detail hero
import rev1 from "../../imports/3ReviewDetailFinalColor/9e03cc0fe5d2dd05269808484174846a4ae64867.png";

// Issues List observation photos
import iss1 from "../../imports/5IssuesListUrgentIssuesFinalColor/6a6304f351d8e9b12a162600ef85a762d67bfa15.png";
import iss2 from "../../imports/5IssuesListUrgentIssuesFinalColor/d6698214b01f936b8b0315eea3a42a14e2174325.png";

// Issue Detail
import iss7 from "../../imports/7IssuesDetailIssueView-1/5dd70c5b2774948923ca0ca27c8da84536a120c8.png";

// Timeline Daily Log
import tl1 from "../../imports/8ProjectTimelineDailyLog-1/f5c465596267617a9e58f5b0cb4aca345375b5e6.png";

// Approval Detail (used by timeline detail screens)
import app1 from "../../imports/4ApprovalDetailMobile-1/266786354298a33b573a5ff16e549f44d6da91bb.png";
import app2 from "../../imports/4ApprovalDetailMobile-1/7145531c5ea9f6711eef9f9b12e4fcaf46e570d1.png";
import app3 from "../../imports/4ApprovalDetailMobile-1/8211e308a79c82aa65044667c538b43bba82efae.png";
import app4 from "../../imports/4ApprovalDetailMobile-1/59a9c517fb11ea105e061b3f8e152833fd21db43.png";
import app5 from "../../imports/4ApprovalDetailMobile-1/bb7f40408c635757a14beb63beb0669d716b2388.png";

// Tasks (used by timeline task and decision detail screens)
import tasks1 from "../../imports/2Tasks-1/ca136f8c2e4dfdf09b12dbb1967f19f5ccdc5083.png";
import tasks2 from "../../imports/2Tasks-1/d57fc7764a294dadd06d3cb669552a9de986742d.png";
import tasks3 from "../../imports/2Tasks-1/4ea645fc116eac63e2f3c66d66eb76f4d0a012b9.png";

// Task Assignment workers (used by timeline task detail screen)
import ta1 from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";
import ta2 from "../../imports/3TaskAssignmentMobile-1/f4775925dd8ae51fa91df8581e2ff018eeedf1fa.png";
import ta3 from "../../imports/3TaskAssignmentMobile-1/c79072b03053f8d4e1dfff5980541de18329d1f1.png";
import ta4 from "../../imports/3TaskAssignmentMobile-1/8397a0af8108bd240a71798f6fa6a6f4edcebf3b.png";

const ASSETS = [
  dec1, dec2, dec3, dec4,
  rev1,
  iss1, iss2,
  iss7,
  tl1,
  app1, app2, app3, app4, app5,
  tasks1, tasks2, tasks3,
  ta1, ta2, ta3, ta4,
];

export function ArchitectAssetWarmup() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
        left: -9999,
        top: -9999,
      }}
    >
      {ASSETS.map((src) => (
        <img key={src} src={src} alt="" decoding="sync" />
      ))}
    </div>
  );
}
