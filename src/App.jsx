import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Document from "./pages/Document";
import Download from "./pages/Download";
import Home from "./pages/Home";
import Insurance from "./pages/Insurance";
import Registration from "./pages/Registration";
import Translations from "./pages/Translation";
import { theme } from "./theme/theme";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: theme.dark_background
      }}
    >
      <div className="noise"></div>
      <Router>
        <Navbar />
        <div style={{ height: "50px" }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/translations" element={<Translations />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="/documents" element={<Document />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
