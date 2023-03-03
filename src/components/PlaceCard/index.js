import { useContext } from "react";
import React from "react";
import styles from "./index.module.scss";
import HearthIcon from "../../../public/heart-light.svg";
import StarIcon from "../../../public/star.svg";
import WishlistContext from "../../context/WishlistContext";
import Link from "next/link";
import placeService from "../../../services/place.service";
import Slider from "../Slider";

const Index = ({ place }) => {
  const [places, setPlaces] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { addPlaceWishlist } = useContext(WishlistContext);

  React.useEffect(() => {
    placeService.getPlaces().then((data) => {
      setPlaces(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return ( 
    <div className={styles.grid}>
    {places.map((place) => (

    <div className={styles.wrapper}>
      
       <div className={styles.thumbnail__wrapper}>
        <button
          className={styles.btn__whishlist}
          onClick={() => {
            addPlaceWishlist(place);
          }}
        >
          <img src={HearthIcon.src} alt="favoris" />
        </button>
       
          
        <Link href={`/places/${place._id}/${place.title}`}>
          <img src={place.images} alt={place.title} />
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}>
          <p>{place.title}</p>
          <p>
            <b>{place.pricing} €</b> par nuit
          </p>
        </div>
        <div className={styles.rate}>
          <span>
            <img src={StarIcon.src} alt="rating" />
            {place.rate}
          </span>
        </div>
      </div>
    </div>
  ))}</div>
  );
};

export default Index;
