import { useLocation } from "react-router-dom";
import { CardList } from "../components/CardList/CardList";
import { GoBack } from "../components/GoBack/GoBack";

function Tweets() {
  const location = useLocation();

  return (
    <>
      <GoBack state={{ from: location }} />
      <CardList />
    </>
  );
}

export default Tweets;
