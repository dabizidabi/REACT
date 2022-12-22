import "./App.css";
import AppHeader from "../appHeader/appHeader";

import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage, HeroPage, CharactersPage, AboutPage } from "../../pages";

const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:heroId" element={<HeroPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
