import PropTypes from "prop-types";

export const Card = ({ user: { name, tweets, avatar, followers } }) => {
  return (
    <li>
      <img src={avatar} alt={name} />
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
      <button type="button">Follow</button>
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
