import { Following, FollowingTxt } from "./FollowingButton.styled";

export const FollowingButton = ({ onClick }) => {
  return (
    <Following type="button" onClick={onClick}>
      <FollowingTxt>Following</FollowingTxt>
    </Following>
  );
};
