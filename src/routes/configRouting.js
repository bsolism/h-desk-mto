import Home from "../page/home";
import SharedCases from "../page/sharedCases";
import Case from "../page/case";
import CaseRequest from "../page/caseRequest";

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mycases",
    element: <Home />,
  },
  {
    path: "/sharedcases",
    element: <SharedCases />,
  },
  {
    path: "/case",
    element: <Case />,
  },
  {
    path: "/request",
    element: <CaseRequest />,
  },
];
