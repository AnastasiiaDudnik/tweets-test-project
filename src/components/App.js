import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const TweetsPage = lazy(() => import("../pages/Tweets"));
const HomePage = lazy(() => import("../pages/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
