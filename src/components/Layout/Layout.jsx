import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<PropagateLoader aria-label="Loading Spinner" />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
