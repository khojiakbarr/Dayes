import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import KinoCardDetails from "./pages/KinoCardDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Kino" element={<KinoCardDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
