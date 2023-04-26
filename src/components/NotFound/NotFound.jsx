import { GoBack } from "../GoBack/GoBack";
import { Cat } from "./NotFound.styled";

export const NotFound = () => {
  return (
    <div>
      <p>404</p>
      <p>Oops, seems like there's nothing here...</p>
      <div>
        <Cat
          title="crying cat"
          src="https://giphy.com/embed/3o7qEciAHeStgj1idG"
          width="100%"
          height="100%"
          allowFullScreen
        ></Cat>
      </div>

      <GoBack />
    </div>
  );
};
