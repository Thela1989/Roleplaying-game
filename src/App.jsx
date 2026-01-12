import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import StartDetails from "./components/StartDetails";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/start-details" element={<StartDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
