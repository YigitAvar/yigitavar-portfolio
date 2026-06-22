import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import CalendarDemo from "./pages/CalendarDemo";
import NotFound from "./pages/NotFound";
import { pageTransition } from "./lib/motion";

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/lab" element={<PageWrapper><Lab /></PageWrapper>} />
        <Route path="/lab/calendar" element={<PageWrapper><CalendarDemo /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="app">
          <Navbar />

          <main>
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
