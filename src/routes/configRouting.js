import Home from "../page/home";
import SharedCases from "../page/sharedCases";
import Case from "../page/case";

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
];
