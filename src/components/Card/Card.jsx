import PropTypes from "prop-types";
import { useState } from "react";
import { FollowButton } from "../FollowButton/FollowButton";
import { FollowingButton } from "../FollowingButton/FollowingButton";

export const Card = ({ user: { name, tweets, avatar, followers } }) => {
  const [follow, setFollow] = useState(false);

  const toggleFollow = () => {
    setFollow(!follow);
  };

  return (
    <li>
      <img src={avatar} alt={name} />
      <p>{tweets} tweets</p>
      <p>{Number(followers).toLocaleString("en-US")} followers</p>

      {follow ? (
        <FollowingButton onClick={toggleFollow} />
      ) : (
        <FollowButton onClick={toggleFollow} />
      )}
    </li>
  );
};

Card.PropType = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
  }).isRequired,
};
