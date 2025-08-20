import { createBrowserRouter } from "react-router";

import LoadPage from "@/pages/LoadPage";
import Market from "@/pages/Market";
import Teaching from "@/pages/Teaching";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LoadPage,
  },
  {
    path: "/market",
    Component: Market,
  },
  {
    path: "/teaching",
    Component: Teaching,
  },
]);

export default router;
