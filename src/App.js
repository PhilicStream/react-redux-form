import { Routes, Route } from "react-router-dom";

import "./App.css";
import Form from "./Routes/Form/Form";
import HomePage from "./Routes/HomePage";
import Result from "./Routes/Result";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
