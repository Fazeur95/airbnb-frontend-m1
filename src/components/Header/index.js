import { useContext } from "react";
import WishlistContext from "../../context/WishlistContext";

import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../public/logo.jpg";
import WithAuth from "../../HOC/WithAuth";

const Index = () => {
  const { wishlist } = useContext(WishlistContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    <Link href="/" />;
  };

  console.log(wishlist);

  return (
    <header className={styles.header}>
    <div className={styles.header__logo}>
    <Link href="/">
          <img src={Logo.src} alt="Airbnb" />
        </Link>
    </div>
    <nav className={styles.header__nav}>
      <ul>
        <li>
        <Link href="/about">Logement</Link>
        </li>
        <li>
        <Link href="/">Expériences</Link>
        </li>
        <li>
        <Link href="/">Expériences en ligne</Link>
        </li>
      </ul>
    </nav>
    <div className={styles.header__logement}>
      <Link href="/places/addplace">
      Mettre mon logement sur Fazeurbnb</Link>
      </div>
    <div className={styles.header__actions}>
    <Link href="/login"><button className={styles.header__button}>Se connecter</button></Link>
    <Link href="/register"> <button className={styles.header__button}>S'inscrire</button></Link>
    </div>
  </header>
   /* <header className={styles.header__main}>
      <div className={styles.header__logo}>
        <Link href="/">
          <img src={Logo.src} alt="Airbnb" />
        </Link>
      </div>
      <div className={styles.header__menu}>
        
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/register">Register</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/login">Login</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/profil">Profil</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/wishlist">Favoris {wishlist.length}</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>
    </header>*/
  );
};

export default Index;
