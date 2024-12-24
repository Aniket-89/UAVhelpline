import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

import BaseLayout from "./Layouts/BaseLayout";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    //   {
    //     path: "blogs/",
    //     element: <BlogList />,
    //   },
    //   {
    //     path: "industry-directory/",
    //     element: <Industry />,
    //   },
    //   {
    //     path: "blogs/:blogId",
    //     element: <BlogDetailPage />,
    //   },
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
