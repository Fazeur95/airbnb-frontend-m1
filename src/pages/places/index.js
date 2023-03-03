// Description: This is the page that displays all the places

import React from "react";
import styles from "./index.module.scss";
import TitlePage from "../../components/TitlePage";
import Places from "../../components/Places";

//Create a places page
const PlacesPage = () => {
  return (
    <div className={styles.places}>
      <TitlePage title="Places" />
      <Places />
    </div>
  );
};

module.exports = PlacesPage;
