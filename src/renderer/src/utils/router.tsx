import { createHashRouter } from "react-router";
import App from "@components/app";
import { Home } from "@components/pages";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home}
    ]
  },
]);

export default router