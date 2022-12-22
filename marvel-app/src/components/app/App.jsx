import { lazy, Suspense } from "react";
import "./App.css";
import AppHeader from "../appHeader/appHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage, AboutPage } from "../../pages";
import Spinner from "../spinner/spinner";

const HeroPage = lazy(() => import("../../pages/HeroPage"));
const CharactersPage = lazy(() => import("../../pages/CharactersPage"));

const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <AppHeader />
      </header>
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:heroId" element={<HeroPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
