import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const GoBack = () => {
  return (
    <Link to="/">
      <AiOutlineArrowLeft />
      Back home
    </Link>
  );
};
