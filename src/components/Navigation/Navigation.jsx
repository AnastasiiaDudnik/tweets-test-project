import { Header, Navigations, Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Header>
      <Navigations>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Navigations>
    </Header>
  );
};
