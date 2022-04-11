import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import SocialNetwork from "../../components/SocialNetwork";
import Title from "../../components/Title";
import useFetch from "../../hooks/useFetch";

import css from "./style.module.css";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const { loading, request } = useFetch();

  const handleChangeEmail = ($Event) => {
    setEmail($Event.target.value);
  };

  const handleChangePassword = ($Event) => {
    setPassword($Event.target.value);
  };

  const handleSubmit = ($Event) => {
    $Event.preventDefault();
  };

  const handleLogin = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({ email, senha: password }),
    };

    const resp = await request("auth", options);
    setStatus(resp.response.status);
  };

  if (status === 200) {
    navigate("/");
  }
  return (
    <>
      <main onSubmit={handleSubmit} className={css.main}>
        <Title
          title={"Gui - Agenda"}
          subTitle={"Login agenda"}
          className={css.title}
        />

        <form className={css.formLogin}>
          <label htmlFor="formUser">User :</label>
          <Input
            id="formUser"
            className={css.formLoginInput}
            type="text"
            required={true}
            onChange={handleChangeEmail}
          >
            User
          </Input>

          <label htmlFor="formPassword">Password:</label>
          <Input
            id="formPassword"
            className={css.formLoginInput}
            type="password"
            required={true}
            onChange={handleChangePassword}
          >
            ******
          </Input>

          <button className={css.formLoginButton} onClick={handleLogin}>
            Login
          </button>

          <SocialNetwork className={css.formLoginSocials} />
        </form>

        <p className={css.linkToRegister}>
          Not a member?{" "}
          <Link className={css.link} to="/register">
            Register
          </Link>
        </p>
      </main>
    </>
  );
}
