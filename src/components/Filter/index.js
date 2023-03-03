import React, { useState } from "react";
import styles from "./index.module.scss";
import Pool from "../../../public/pool.svg";
import View from "../../../public/view.svg";
import Sea from "../../../public/sea.svg";
import CaveHouse from "../../../public/cave_house.svg";
import Wheelchair from "../../../public/disabled.svg";
import Tower from "../../../public/tower.svg";
import Snow from "../../../public/snow.svg";
import Luxe from "../../../public/luxe.svg";


const Filter = () => {
  const [filters, setFilters] = useState({
    pool: false,
    beach: false,
    mountain: false,
    city: false,
    country: false,
  });

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  return (
    <div className={styles.filter}>
      
      <div className={styles.filter__options}>
        <label className={styles.filter__option}>
          <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {Pool.src} alt="piscine" />
          </button>
          <div className={styles.filter__option__subtitle}>Piscine</div>
        </label>
        <label className={styles.filter__option}>
        <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {View.src} alt="Vue" />
          </button>
          <div >Avec Vue</div>
        </label>
        <label className={styles.filter__option}>
        <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {Sea.src} alt="Mer" />
          </button>
         
       
          <div>Bord de mer</div>
        </label>
        <label className={styles.filter__option}>
        <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {CaveHouse.src} alt="Maison troglodyte" />
          </button>
          <div className={styles.filter__title}>Maisons troglodytes</div>
        </label>
        <label className={styles.filter__option}>
        <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {Wheelchair.src} alt="Mer" />
          </button>
         
       
          <div>Logement Adaptés</div>
        </label>

        <label className={styles.filter__option}>
        <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {Tower.src} alt="Mer" />
          </button>
         
       
          <div>Tours</div>
        </label>

        <label className={styles.filter__option}>
        <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {Snow.src} alt="Mer" />
          </button>
         
       
          <div>Au pieds des pistes</div>
        </label>

        <label className={styles.filter__option}>
        <button onClick={{handleFilterChange}} className={styles.filter__button}>
          <img src = {Luxe.src} alt="Mer" />
          </button>
         
       
          <div>Luxe</div>
        </label>

       

        
      </div>
    </div>
  );
};

export default Filter;
