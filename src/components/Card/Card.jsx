import PropTypes from "prop-types";
import { useState } from "react";

export const Card = ({ user: { name, tweets, avatar, followers } }) => {
  const [follow, setFollow] = useState(false);

  const toggleFollow = () => {
    setFollow(!follow);
  };

  return (
    <li>
      <img src={avatar} alt={name} />
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>

      {follow ? (
        <button type="button" onClick={toggleFollow}>
          Following
        </button>
      ) : (
        <button onClick={toggleFollow}>Follow</button>
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
