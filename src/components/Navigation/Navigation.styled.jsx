import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  min-height: 64px;
  padding-right: 24px;
  padding: 24px;
  margin-bottom: 26px;
  color: #fff;
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
