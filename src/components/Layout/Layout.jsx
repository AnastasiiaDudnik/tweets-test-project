import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Navigation } from "../Navigation/Navigation";
import { Container, MainContent } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <MainContent>
        <Suspense
          fallback={
            <PropagateLoader color="#672cb5" aria-label="Loading Spinner" />
          }
        >
          <Outlet />
        </Suspense>
      </MainContent>
    </Container>
  );
};
