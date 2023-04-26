import PropTypes from "prop-types";
import { Follow, FollowTxt } from "./FollowButton.styled";

export const FollowButton = ({ onClick }) => {
  return (
    <Follow type="button" onClick={onClick}>
      <FollowTxt>Follow</FollowTxt>
    </Follow>
  );
};

FollowButton.PropType = {
  onClick: PropTypes.func.isRequired,
};
