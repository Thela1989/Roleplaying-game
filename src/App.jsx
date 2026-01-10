import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterCreate from "./pages/CharacterCreate";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterCreate />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
