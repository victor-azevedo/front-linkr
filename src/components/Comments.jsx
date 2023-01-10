import styled from "styled-components";

import { useUserData } from "../hooks/useUserData";

import Comment from "./Comment";

import UserPicture from "./UserPicture";

export default function Comments({ props }) {
  const { userData } = useUserData();

  return (
    <CommentsStyle>
      <Comment />
      <Comment />
      <CommentEntry>
        <UserPicture userPictureUrl={userData.pictureUrl} />
        <input placeholder="write a comment..."></input>
      </CommentEntry>
    </CommentsStyle>
  );
}

const CommentsStyle = styled.div`
  width: 100%;
  background: #1e1e1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  translate: 0 -30px;
  padding-top: 20px;
  z-index: 1;
`;

const CommentEntry = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  input {
    width: 100%;
    height: 39px;
    font-family: "Lato";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 0 10px;
    color: #575757;
    font-style: italic;
    background-color: #252525;
    border-radius: 8px;
    border: none;
  }
`;
