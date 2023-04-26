import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  min-height: 64px;
  padding-right: 24px;
  padding: 24px;
  margin-bottom: 26px;
  color: #fff;
  //   background: radial-gradient(
  //     circle,
  //     rgba(154, 63, 251, 1) 0%,
  //     rgba(134, 36, 124, 1) 100%,
  //     rgba(252, 70, 107, 1) 100%
  //   );
  border-radius: 10px;
`;

export const Navigations = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background-color: black;
  font-weight: 700;
  font-size: 20px;
  &.active {
    background-color: white;
    color: black;
    border: 2px solid #e73eca;
  }
`;
