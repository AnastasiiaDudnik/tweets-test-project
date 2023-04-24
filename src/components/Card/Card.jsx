import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FollowButton } from "../FollowButton/FollowButton";
import { FollowingButton } from "../FollowingButton/FollowingButton";

const getStatus = (id) => {
  const status = localStorage.getItem(`follow-${id}`);
  const parsedStatus = JSON.parse(status);

  if (parsedStatus) {
    return parsedStatus;
  }
};

const getFollowers = (id) => {
  const data = localStorage.getItem(`followers-${id}`);
  return JSON.parse(data);
};

export const Card = ({ user: { id, name, tweets, avatar, followers } }) => {
  const [follow, setFollow] = useState(getStatus(id) || false);
  const [countFollowers, setCountFollowers] = useState(
    getFollowers(id) || Number(followers)
  );

  useEffect(() => {
    localStorage.setItem(`follow-${id}`, follow);
    localStorage.setItem(`followers-${id}`, countFollowers);
  }, [countFollowers, follow, id]);

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
