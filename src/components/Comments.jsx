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
      </CommentEntry>
    </CommentsStyle>
  );
}

const CommentsStyle = styled.div`
  width: 100%;
  background: #1e1e1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentEntry = styled.div``;
