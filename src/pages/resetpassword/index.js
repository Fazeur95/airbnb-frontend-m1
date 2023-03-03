//Create a reset Password page

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import TitlePage from "../../components/TitlePage";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import styles from "./index.module.scss";
import UserServices from "../../../services/user.services";
import authService from "../../../services/auth.service";
import Notification from "../../components/Notification";

export default function ResetPassword() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState({
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      authService.getMe().then((data) => {
        if (!data?.user) {
          router.push("/login");
          return;
        }
        if (!data.token) {
          router.push("/login");
          return;
        }

        localStorage.setItem("token", data.token);
        setUser(data.user);
        setPassword({
          password: data.password,
        });
      });
    }
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
  }, []);
  const handleSubmit = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    UserServices.updatePassword().then((data) => {
      if (!data) {
        setMessage("Une erreur est survenue");
        setType("error");
        return;
      }
      setMessage("Votre mot de passe a bien été modifié");
      setType("success");
      router.push("/login");
    });
  };

  return (
    <div className={styles.reset__password__wrapper}>
      <TitlePage title="Reset Password" />
      <form className={styles.reset__password__container} onSubmit={submitForm}>
        <Input
          titleLabel="New Password"
          inputType="password"
          inputPlaceholder="Enter your new password"
          inputName="password"
          inputOnChange={handleSubmit}
        />
        <Input
          titleLabel="Confirm Password"
          inputType="password"
          inputPlaceholder="Enter your new password again"
          inputName="password"
          inputOnChange={handleSubmit}
        />
        {message && <Notification type={type} message={message} />}{" "}
        <Button title="Confirmer" type="submit" btnClass="btn btn__modify" />
      </form>
    </div>
  );
}
