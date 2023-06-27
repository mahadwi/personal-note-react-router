import React from "react";
import { BsMoon, BsSun, BsTranslate } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../context/LocaleContext";
import PropTypes from 'prop-types';

function Navigation({ auth, logout }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale, theme, toggleTheme }) => {
        return (
          <>
            {auth ? (
              <nav className="navigation">
                <ul>
                  <li>
                    <Link to="/archives">{locale === 'id' ? 'Terarsip' : 'Archived'}</Link>
                  </li>
                </ul>
              </nav>
            ) : (
              ""
            )}
            <button
              className="toggle-locale"
              type="button"
              onClick={toggleLocale}
            >
              <BsTranslate />
            </button>
            <button className="toggle-theme" type="button" onClick={toggleTheme}>
              {theme === 'light' ? (<BsSun />) : (<BsMoon />)}
            </button>
            {auth ? (
              <button className="button-logout" onClick={logout}>
                <FiLogOut />
                {auth.name}
              </button>
            ) : (
              ""
            )}
          </>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func.isRequired
}

export default Navigation;
