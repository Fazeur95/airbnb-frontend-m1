import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import placeService from "../../../../services/place.service";

const Index = () => {
  const router = useRouter();
  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    placeService.getPlaceById(router.query.id).then((data) => {
      setPlace(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }  

  console.log(place);


  return (
    <div>
      <h1> TitlePage : {place.title}</h1>
      <p> Description : {place.description}</p>
      <img src = {place.images} alt = {place.title} />

      
      
  
     
    </div>
  );
};

export default Index;
