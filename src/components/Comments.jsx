import styled from "styled-components";

import { useUserData } from "../hooks/useUserData";

import Comment from "./Comment";

import UserPicture from "./UserPicture";
import { ReactComponent as SendCommentIcon } from "../assets/SendCommentIcon.svg";

export default function Comments({ props }) {
  const { userData } = useUserData();

  return (
    <CommentsStyle>
      <Comment />
      <Comment />
      <CommentEntry>
        <UserPicture userPictureUrl={userData.pictureUrl} />
        <BoxInput>
          <input placeholder="write a comment..."></input>
          <StyledSendCommentIcon />
        </BoxInput>
      </CommentEntry>
    </CommentsStyle>
  );
}

const CommentsStyle = styled.div`
  width: 100%;
  padding: 20px;
  background: #1e1e1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  translate: 0 -35px;
  z-index: 1;
`;

const CommentEntry = styled.div`
  width: 100%;
  padding: 15px 5px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

const BoxInput = styled.div`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    height: 39px;
    font-family: "Lato";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 0 10px;
    margin-left: 10px;
    color: #575757;
    font-style: italic;
    background-color: #252525;
    border-radius: 8px;
    border: none;
  }
`;

const StyledSendCommentIcon = styled(SendCommentIcon)`
  position: absolute;
  height: 100%;
  z-index: 2;
  right: 0px;
  top: 0;
  &:hover {
    cursor: pointer;
  }
`;
