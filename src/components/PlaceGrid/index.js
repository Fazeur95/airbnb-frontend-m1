import PlaceCard from "../PlaceCard";
import Places from "../Places";
import styles from "./index.module.scss";

const Index = ({ places }) => {
  
  return (
    <div className={styles.grid}>
      {
       <PlaceCard/>
      }
    </div>
  );
}

export default Index;
