// src/App.tsx
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/common/router";
import GlobalNetworkError from "@/common/components/Errors/GlobalErrorBoundary";
import Skeleton from "./common/components/Skeleton";

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <GlobalNetworkError />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
