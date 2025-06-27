import { createHashRouter } from "react-router";
import App from "@renderer/components/app";
import { Home } from "@renderer/components/pages";

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