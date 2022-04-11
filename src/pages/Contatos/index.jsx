import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contato from "../../components/Contato";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { useContatos } from "../../context/contatos";
import css from "./style.module.css";

export default function Contatos() {
  const contatosContext = useContatos();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tell, setTell] = useState(null);
  const [check, setCheck] = useState(null);
  const navigate = useNavigate();

  const { buscarContatos, criarContato, contatos, alterarContato } =
    contatosContext;

  if (window.localStorage.getItem("token") === "") {
    navigate("/login");
  }

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleChangeName = ($Event) => {
    setName($Event.target.value);
  };
  const handleChangeEmail = ($Event) => {
    setEmail($Event.target.value);
  };
  const handleChangeTell = ($Event) => {
    setTell([{ tipo: "celular", numero: $Event.target.value }]);
  };

  const handleSubmit = ($Event) => {
    $Event.preventDefault();
  };

  const checkDados = () => {
    if (name !== null && email !== null && tell !== null) {
      return false;
    } else {
      setCheck(true);
    }
  };

  const addContacts = () => {
    criarContato({ nome: name, email, telefones: tell });
    buscarContatos();
    setEmail(null);
    setName(null);
    setTell(null);
  };

  useEffect(() => {
    buscarContatos();
  }, []);

  return (
    <>
      <main className={css.aplication}>
        <header className={css.header}>
          <h1>My contact</h1>
          <div className={css.seach}>
            <Input>Seach...</Input>
          </div>
          <button></button>
        </header>

        <div>
          <p className={css.contador}>Friends: {contatos.length}</p>
          <button onClick={openModal} className={css.buttonAdd}>
            Add Contact
          </button>

          {modal && (
            <Modal>
              <form onSubmit={handleSubmit} className={css.formAdd}>
                <p>Adicionar Contato</p>
                <Input onChange={handleChangeName} className={css.input}>
                  Nome:
                </Input>
                <Input onChange={handleChangeEmail} className={css.input}>
                  Email:
                </Input>
                <Input onChange={handleChangeTell} className={css.input}>
                  Numero do telefone:{" "}
                </Input>
                <button
                  className={css.buttonAdd}
                  onClick={check ? addContacts : ""}
                >
                  Adicionar Contato
                </button>
                <button className={css.buttonClose} onClick={closeModal}>
                  Fechar
                </button>
              </form>
            </Modal>
          )}

          <ul className={css.contatoList}>
            {contatos.length > 0 ? (
              contatos.map((el) => (
                <Contato
                  key={el.id}
                  nome={el.nome}
                  numero={
                    el.telefones[0].numero !== "" && el.telefones[0].numero
                  }
                />
              ))
            ) : (
              <p>Não ha contatos</p>
            )}
          </ul>
        </div>

        <footer></footer>
      </main>
    </>
  );
}
