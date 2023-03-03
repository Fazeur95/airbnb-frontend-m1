import React, { useState } from "react";
import TitlePage from "../../../components/TitlePage";
import AddPlace from "../../../components/Places";

//Create a page for adding a place

const Index = () => {
 

  return (
    <div>
    <TitlePage title="Ajouter un hébergement"/>
    <AddPlace />
    </div>
  );
};

export default Index;
