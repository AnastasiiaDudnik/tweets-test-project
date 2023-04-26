import { IoIosArrowBack } from "react-icons/io";
import { StyledLink } from "./GoBack.styled";

export const GoBack = () => {
  return (
    <StyledLink to="/">
      <IoIosArrowBack />
      Back home
    </StyledLink>
  );
};
