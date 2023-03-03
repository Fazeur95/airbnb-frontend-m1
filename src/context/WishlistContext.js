import { createContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export default WishlistContext;

export const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const removePlaceWishlist = (id) => {
    //Vérifier si la place est dans le wishlist
    console.log(id);
    const placeIndex = wishlist.some((place) => place.id === id);

    console.log(placeIndex);
    if (placeIndex >= 0) {
      //Supprimer la place du wishlist
      setWishlist((prevState) => {
        return prevState.filter((place) => place.id !== id);
      });
    }
  };
  const addPlaceWishlist = (place) => {
    console.log(place);
    //Check si la place est déjà dans le wishlist
    const placeIndex = wishlist.findIndex((p) => p.id === place.id);
    if (placeIndex !== -1) {
      //La place est déjà dans le wishlist
      return;
    }
    //Ajouter la place au wishlist
    setWishlist([...wishlist, place]);
  };

  const deleteWishlist = () => {
    //Supprimer le wishlist
    setWishlist([]);
  };

  const context = {
    removePlaceWishlist,
    addPlaceWishlist,
    deleteWishlist,
    wishlist,
  };

  return (
    <WishlistContext.Provider value={context}>
      {children}
    </WishlistContext.Provider>
  );
};
