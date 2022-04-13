import React from "react";
import SearchComponents from "./Components/SearchComponents";
import MovieItemView from "./Views/MovieItemView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchComponents />} />
          <Route path="movieitem" element={<MovieItemView />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
