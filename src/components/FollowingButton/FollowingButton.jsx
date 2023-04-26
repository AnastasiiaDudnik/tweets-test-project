import PropTypes from "prop-types";
import { Following, FollowingTxt } from "./FollowingButton.styled";

export const FollowingButton = ({ onClick }) => {
  return (
    <Following type="button" onClick={onClick}>
      <FollowingTxt>Following</FollowingTxt>
    </Following>
  );
};

FollowingButton.PropType = {
  onClick: PropTypes.func.isRequired,
};
