import styled from "styled-components";

import { useUserData } from "../hooks/useUserData";

import UserPicture from "./UserPicture";

export default function Comment({ props }) {
  const { userData } = useUserData();

  return (
    <CommentStyle>
      <UserPicture userPictureUrl={userData.pictureUrl} />
    </CommentStyle>
  );
}

const CommentStyle = styled.div`
  width: 100%;
  background: #1e1e1e;

  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
  .link-data {
    position: relative;
    flex-basis: 501px;
  }
`;
