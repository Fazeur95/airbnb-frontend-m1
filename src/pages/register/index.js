import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import TitlePage from "../../components/TitlePage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./index.module.scss";
import Notification from "../../components/Notification";

const Index = () => {
  const [message, setMessage] = useState(null);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    AuthService.register(userForm)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page__register">
      <TitlePage title="Create your account" />
      <form className={styles.form__register}>
        <Input
          titleLabel="firstname"
          inputType="text"
          inputPlaceholder="Prénom"
          inputName="firstName"
          inputValue={userForm.firstName || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Input
          titleLabel="lastname"
          inputType="text"
          inputPlaceholder="Nom"
          inputName="lastName"
          inputValue={userForm.lastName || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Input
          titleLabel="email"
          inputType="email"
          inputPlaceholder="Email"
          inputName="email"
          inputValue={userForm.email || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Input
          titleLabel="password"
          inputType="password"
          inputPlaceholder="Mot de passe"
          inputName="password"
          inputValue={userForm.password || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Button
          title="Register"
          handleClick={(e) => {
            submitForm(e);
          }}
          type="submit"
          btnClass="btn__primary"
        />
        {message && <Notification message={message} type={type} />}
      </form>
    </div>
  );
};

export default Index;
