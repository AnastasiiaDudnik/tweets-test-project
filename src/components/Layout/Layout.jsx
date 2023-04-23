import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Suspense fallback={<PropagateLoader aria-label="Loading Spinner" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
