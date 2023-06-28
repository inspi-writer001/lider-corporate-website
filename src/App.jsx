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
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Client from "./liveChat/Client";
import "./i18n";
import { Suspense } from "react";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: theme.dark_background,
        position: "relative"
      }}
    >
      <div className="noise"></div>
      <Suspense fallback={null}>
        <Router>
          <Navbar />
          <div style={{ height: "90px" }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/translations" element={<Translations />} />
            <Route path="/downloads" element={<Download />} />
            <Route path="/documents" element={<Document />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Client />

          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
