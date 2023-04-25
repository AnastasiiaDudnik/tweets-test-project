import styled from "styled-components";

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const UserImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p`
  margin: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
