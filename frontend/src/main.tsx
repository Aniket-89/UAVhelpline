import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

import BaseLayout from "./Layouts/BaseLayout";
import Index from "./pages/Index";
import ComingSoon from "./pages/ComingSoon";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "comingSoon/",
        element: <ComingSoon />
      },
      {
        path: "news/",
        element: <PostListPage />,
      },
    //   {
    //     path: "industry-directory/",
    //     element: <Industry />,
    //   },
      {
        path: "news/:id",
        element: <PostDetailPage />,
      },
    ],
  },
]);

const aosOptions: AosOptions = {
  duration: 500,
  once: true,
  offset: 100,
  easing: "ease-in-out",
};

AOS.init(aosOptions);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
