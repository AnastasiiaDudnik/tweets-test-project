import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Layout</div>}>
        <Route index element={<div>Home page</div>} />
        <Route path="/tweets" element={<div>Tweets</div>} />
      </Route>
    </Routes>
  );
};

export default App;
