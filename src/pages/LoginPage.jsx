import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { LocaleConsumer } from "../context/LocaleContext";
import PropTypes from 'prop-types';

export default function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <section className="login-page">
              <h2>
                {locale === "id"
                  ? "Yuk, login untuk menggunakan aplikasi"
                  : "Login to use app, please."}
              </h2>
              <LoginInput login={onLogin} />
              <p>
                {locale === "id"
                  ? "Belum punya akun?"
                  : "Don't have an account?"}{" "}
                <Link to="/register">
                  {locale === "id" ? "Daftar di sini" : "Register here"}
                </Link>
              </p>
            </section>
          </>
        );
      }}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
}