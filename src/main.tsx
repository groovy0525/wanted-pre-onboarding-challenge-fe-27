import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";

import Home from "./pages/home/index.tsx";
import LogIn from "./pages/auth/index.tsx";
import SignUp from "./pages/auth/sign-up/index.tsx";
import TodoDetail from "./pages/home/detail/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos/:id",
    element: <TodoDetail />,
  },
  {
    path: "/auth",
    element: <LogIn />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
