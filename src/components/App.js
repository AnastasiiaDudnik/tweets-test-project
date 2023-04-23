import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home page</div>} />
        <Route path="/tweets" element={<div>Tweets</div>} />
      </Route>
    </Routes>
  );
};

export default App;
