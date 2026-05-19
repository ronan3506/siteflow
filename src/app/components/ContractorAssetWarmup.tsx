// Imports every PNG asset used by the contractor flow and keeps a 1×1 hidden
// <img> for each one permanently mounted at the root of the app. This guarantees
// every Figma raster asset is decoded by the browser before it's needed, and
// never gets re-decoded (which is what causes blank/grey flashes after screen
// transitions, modal toggles, and tab switches).

// 1 — Home / Today's Board
import home1 from "../../imports/1TodayBoardHomeScreen-1/40985322c374c2f14a87d1d9009ac4e2a7d166e2.png";
import home2 from "../../imports/1TodayBoardHomeScreen-1/190b01c8986ecada96d37573100345ba0caa969a.png";
import home3 from "../../imports/1TodayBoardHomeScreen-1/3efe7b56335336218dd518a325a640df1a2568f7.png";
import home4 from "../../imports/1TodayBoardHomeScreen-1/8528eaf807270f6c3524d0efb28a9a1aa85cdd85.png";
import home5 from "../../imports/1TodayBoardHomeScreen-1/5ce4b573dae6e73b4e7bd06f7f0bc88148569506.png";
import home6 from "../../imports/1TodayBoardHomeScreen-1/06d68b44b0f58c4bff8e143360a67313d6a3d713.png";
import home7 from "../../imports/1TodayBoardHomeScreen-1/dd664bc2b64cf844a79d8da0d4f29c0e5eeb1d8f.png";
import home8 from "../../imports/1TodayBoardHomeScreen-1/9eaf1a7135ad0eabf37c90d52a447e5d7d81bcb1.png";
import home9 from "../../imports/1TodayBoardHomeScreen-1/6e3ebfbb4171dc88d131ecc9897189ff80b7a30d.png";
import home10 from "../../imports/1TodayBoardHomeScreen-1/92387c1b989bccba72c54231cc0059bc7b72a5b1.png";
import home11 from "../../imports/1TodayBoardHomeScreen-1/8d22086b1debaef5e196461dcb12aac4bc3c91e9.png";

// 2 — Tasks
import tasks1 from "../../imports/2Tasks-1/ca136f8c2e4dfdf09b12dbb1967f19f5ccdc5083.png";
import tasks2 from "../../imports/2Tasks-1/d57fc7764a294dadd06d3cb669552a9de986742d.png";
import tasks3 from "../../imports/2Tasks-1/4ea645fc116eac63e2f3c66d66eb76f4d0a012b9.png";

// 3 — Task Assignment
import ta1 from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";
import ta2 from "../../imports/3TaskAssignmentMobile-1/f4775925dd8ae51fa91df8581e2ff018eeedf1fa.png";
import ta3 from "../../imports/3TaskAssignmentMobile-1/c79072b03053f8d4e1dfff5980541de18329d1f1.png";
import ta4 from "../../imports/3TaskAssignmentMobile-1/8397a0af8108bd240a71798f6fa6a6f4edcebf3b.png";

// 4 — Approval Detail
import app1 from "../../imports/4ApprovalDetailMobile-1/266786354298a33b573a5ff16e549f44d6da91bb.png";
import app2 from "../../imports/4ApprovalDetailMobile-1/7145531c5ea9f6711eef9f9b12e4fcaf46e570d1.png";
import app3 from "../../imports/4ApprovalDetailMobile-1/8211e308a79c82aa65044667c538b43bba82efae.png";
import app4 from "../../imports/4ApprovalDetailMobile-1/59a9c517fb11ea105e061b3f8e152833fd21db43.png";
import app5 from "../../imports/4ApprovalDetailMobile-1/bb7f40408c635757a14beb63beb0669d716b2388.png";

// 6 — Issues List (new richer layout observation log images)
import iss1 from "../../imports/5IssuesListUrgentIssuesFinalColor/6a6304f351d8e9b12a162600ef85a762d67bfa15.png";
import iss2 from "../../imports/5IssuesListUrgentIssuesFinalColor/d6698214b01f936b8b0315eea3a42a14e2174325.png";

// 7 — Issue Detail
import iss7 from "../../imports/7IssuesDetailIssueView-1/5dd70c5b2774948923ca0ca27c8da84536a120c8.png";

// 8 — Timeline
import tl1 from "../../imports/8ProjectTimelineDailyLog-1/f5c465596267617a9e58f5b0cb4aca345375b5e6.png";

const ASSETS = [
  home1, home2, home3, home4, home5, home6, home7, home8, home9, home10, home11,
  tasks1, tasks2, tasks3,
  ta1, ta2, ta3, ta4,
  app1, app2, app3, app4, app5,
  iss1, iss2,
  iss7,
  tl1,
];

export function ContractorAssetWarmup() {
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
