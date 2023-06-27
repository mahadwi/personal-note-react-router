import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Archives from "./pages/ArchivesPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import HomePage from "./pages/HomePage";
import { LocaleProvider } from "./context/LocaleContext";

function App() {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('locale', locale);
    localStorage.setItem('theme', theme);
  },[locale, theme]);

  const toggleLocale = () => {
    setLocale(prevLocale => prevLocale === 'id' ? 'en' : 'id');
  }

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  const localContext = {
    locale: locale,
    toggleLocale: toggleLocale,
    theme: theme,
    toggleTheme: toggleTheme
  };

  useEffect(() => {
    const response = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    response();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
    navigate("/");
  }

  if (initializing) {
    return (<div>Loading ...</div>);
  }
  
  return (
    <>
    <LocaleProvider value={localContext}>
      <div className="app-container" data-theme={theme === 'light' ? 'light' : 'dark'}>
            <header>
              <h1><Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
              <Navigation logout={onLogout} auth={authedUser} />
            </header>
        {authedUser === null ? (
          <>
            <main>
              <Routes>
                <Route
                  path="/"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </>
        ) : (
          <>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </LocaleProvider>
    </>
  );
}

export default App;
