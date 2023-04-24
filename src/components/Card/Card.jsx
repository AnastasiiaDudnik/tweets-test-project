import PropTypes from "prop-types";
import { useState } from "react";
import { FollowButton } from "../FollowButton/FollowButton";
import { FollowingButton } from "../FollowingButton/FollowingButton";

export const Card = ({ user: { name, tweets, avatar, followers } }) => {
  const [follow, setFollow] = useState(false);
  const [countFollowers, setCountFollowers] = useState(Number(followers));

  const toggleFollow = () => {
    setFollow(!follow);

    if (!follow) {
      setCountFollowers((prevState) => prevState + 1);
    }

    if (follow) {
      setCountFollowers((prevState) => prevState - 1);
    }
  };

  return (
    <li>
      <img src={avatar} alt={name} />
      <p>{tweets} tweets</p>
      <p>{countFollowers.toLocaleString("en-US")} followers</p>

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
