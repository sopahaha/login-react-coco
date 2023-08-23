import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lading from "./components/Lading";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lading />} />
        <Route path="/in" element={<Signin />} />
        <Route path="/up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
