//Create a component for the wishlist

import React, { useContext } from "react";
import WishlistContext from "../../context/WishlistContext";
import Button from "../Button";
import styles from "./index.module.scss";
import Link from "next/link";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { removePlaceWishlist } = useContext(WishlistContext);

  //Delete a place from the wishlist
  const submitDelete = (e, id) => {
    e.preventDefault();
    removePlaceWishlist(id);
  };

  return (
    <div className={styles.wishlist__main}>
      {wishlist.length === 0 ? (
        <Link href="/" className={styles.wishlist__redirect}>
          <p>Votre WishList est vide !</p>
        </Link>
      ) : (
        <ul className={styles.wishlist__title}>
          {wishlist.map((place) => (
            <div key={place.id} className={styles.wishlist__subtitle}>
              <Link href={`/places/${place._id}/${place.title}`}>
                <img src={place.images} alt={place.title} />
              </Link>
              <h2>{place.title}</h2>
              <p>{place.description}</p>
              <Button
                title="Delete"
                handleClick={(e) => {
                  submitDelete(e, place.id);
                }}
                type="submit"
                btnClass="btn__delete"
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
