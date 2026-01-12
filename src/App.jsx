import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterCreate from "./pages/CharacterCreate";
import Profile from "./pages/Profile";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
