import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Archives from "./pages/ArchivesPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePageWrapper from "./pages/HomePage";
import AddPageWrapper from "./pages/AddPage";

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">Aplikasi Catatan</Link>
          </h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/add" element={<AddPageWrapper />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
