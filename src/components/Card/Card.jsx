import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FollowButton } from "../FollowButton/FollowButton";
import { FollowingButton } from "../FollowingButton/FollowingButton";
import {
  CardItem,
  ImgContainer,
  UserImg,
  TextWrap,
  Text,
  UpperSide,
  Logo,
  Line,
  User,
  UpperImg,
} from "./Card.styled";

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
    <CardItem>
      <UpperSide>
        <Logo src={require("../../images/Logo.png")} alt="logo" />
        <UpperImg src={require("../../images/picture2.png")} alt="background" />
      </UpperSide>
      <User>
        <Line></Line>
        <ImgContainer>
          <UserImg src={avatar} alt={name} />
        </ImgContainer>
      </User>
      <TextWrap>
        <Text>{tweets} tweets</Text>
        <Text>{countFollowers.toLocaleString("en-US")} followers</Text>
      </TextWrap>

      {follow ? (
        <FollowingButton onClick={toggleFollow} />
      ) : (
        <FollowButton onClick={toggleFollow} />
      )}
    </CardItem>
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
