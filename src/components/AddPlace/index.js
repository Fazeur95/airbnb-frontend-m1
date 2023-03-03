import React, { useState } from "react";
import TitlePage from "../../../components/TitlePage";
import placeService from "../../services/place.service";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Notification from "../../components/Notification";
import styles from "./index.module.scss";

//Create a page for adding a place

const Index = () => {
  const [message, setMessage] = useState(null);
  const [place, setPlace] = React.useState({
    title: "",
    description: "",
    address: "",
    pricing: "",
    images: "",
  });

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    placeService
      .createPlace(place)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.form__place}>
      <TitlePage title="Add a place" />$
      
      <form className={styles.form__place}>
        <Input
          titleLabel="title"
          inputType="text"
          inputName="title"
          inputOnChange={(e) => {
            handleChange(e);
          }}
        />
        <Input
          titleLabel="description"
          inputType="text"
          inputName="description"
        />
        <Input
          titleLabel="address"
          inputType="text"
          inputName="address"
          inputOnChange={(e) => {
            handleChange(e);
          }}
        />
        <Input
          titleLabel="pricing"
          inputType="text"
          inputName="pricing"
          inputOnChange={(e) => {
            handleChange(e);
          }}
        />
        <Input
          titleLabel="image"
          inputType="text"
          inputName="image"
          inputOnChange={(e) => {
            handleChange(e);
          }}
        />
        <Button
          type="submit"
          title="Add"
          handleClick={(e) => {
            submitForm(e);
          }}
          btnClass="btn__primary"
        />
        {message && <Notification message={message} type={type} />}
      </form>
    </div>
  );
};

export default Index;
