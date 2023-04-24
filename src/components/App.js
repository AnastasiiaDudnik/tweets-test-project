import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const TweetsPage = lazy(() => import("../pages/Tweets"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home page</div>} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
