import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import MarketAnalysis from "./pages/MarketAnalysis";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import StockDetails from "./Pages/StockDetails";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News/>}/>
        <Route path="/marketAnalysis" element={<MarketAnalysis/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/stock/:symbol" element={<StockDetails/>}/>
      </Routes>
  );
}

export default App;