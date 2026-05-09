import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from "react";

import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import Home from "./pages/Home";
import ArtworkDetail from "./pages/ArtworkDetail";
import ArtworksList from "./pages/ArtworksList";
import { LanguageProvider } from "./lib/LanguageContext";

// 🔥 SCROLL TO TOP COMPONENT
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diela" element={<ArtworksList />} />
      <Route path="/dielo/:id" element={<ArtworkDetail />} />
    </Routes>
  );
};

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop /> {/* 👈 toto je dôležité */}

          <AuthenticatedApp />
        </Router>

        <Toaster />
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;