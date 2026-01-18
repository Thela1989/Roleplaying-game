import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterCreate from "./pages/characterCreate";
import Profile from "./pages/Profile";
import StartPage from "./pages/startPage";
import GamePage from "./pages/GamePage";
import MonsterPage from "./pages/MonsterPage";
import Items from "./components/Items";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/characterCreate" element={<CharacterCreate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/monsters" element={<MonsterPage />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
