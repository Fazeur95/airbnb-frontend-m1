import React from 'react';
import styles from "./index.module.scss";
import Link from "next/link";

const Index = () => {
  return (
    
      <footer>
      <div className={styles.footer__main}>
        <ul className={styles.nav}>
          <li><a href="#">@ 2023 Fazeurbnb, Inc</a></li>
          <li><a href="#">· Confidentialité</a></li>
          <li><a href="#">· Conditions générales</a></li>
          <li><a href="#">· Plan du site</a></li>
          <li><a href="#">· Fonctionnement du site</a></li>
          <li><a href="#">· Infos sur l'entreprise</a></li>
          <li><a href="#">· Destinations</a></li>
        </ul>
      </div>
    </footer>
   
  ) 
}

export default Index;
