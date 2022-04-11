import React, { useState } from "react";
import css from "./style.module.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SocialNetwork from "../../components/SocialNetwork";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Cadastrar() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { request } = useFetch();
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  const handleChangeName = ($Event) => {
    setName($Event.target.value);
  };

  const handleChangeEmail = ($Event) => {
    setEmail($Event.target.value);
  };

  const handleChangePassword = ($Event) => {
    setPassword($Event.target.value);
  };

  const handleSubmit = ($Event) => {
    $Event.preventDefault();
  };

  const handleRegister = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({ email, senha: password, nome: name }),
    };

    const resp = await request("user", options);
    setStatus(resp.response.status);
  };

  if (status === 200) {
    navigate("/");
  }

  return (
    <>
      <main className={css.main}>
        <Title
          title={"Gui - Agenda"}
          subTitle={"Register agenda"}
          className={css.title}
        />

        <form onSubmit={handleSubmit} className={css.formRegister}>
          <label htmlFor="name">Nome:</label>
          <Input
            required={true}
            id="name"
            className={css.formRegisterInput}
            onChange={handleChangeName}
          >
            Nome...
          </Input>

          <label htmlFor="email">Email ou NickName:</label>
          <Input
            required={true}
            id="email"
            className={css.formRegisterInput}
            onChange={handleChangeEmail}
          >
            Email ou NickName...
          </Input>

          <label htmlFor="password">Senha: </label>
          <Input
            type="password"
            required={true}
            id="password"
            className={css.formRegisterInput}
            onChange={handleChangePassword}
          >
            Senha...
          </Input>

          <button className={css.formRegisterButton} onClick={handleRegister}>
            Fazer cadastro
          </button>

          <SocialNetwork className={css.formRegisterSocials} />

          <p className={css.linkToRegister}>
            Ja esta cadastrado?{" "}
            <Link className={css.link} to="/login">
              Login
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
