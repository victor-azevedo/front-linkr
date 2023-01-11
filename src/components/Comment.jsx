import styled from "styled-components";

import { useUserData } from "../hooks/useUserData";

import UserPicture from "./UserPicture";

export default function Comment({ props }) {
  const { userData } = useUserData();

  return (
    <CommentStyle>
      <UserPicture userPictureUrl={userData.pictureUrl} />
      <div className="box-texts">
        <CommenterName>{userData.username}</CommenterName>
        <CommentText>teste comentario</CommentText>
      </div>
    </CommentStyle>
  );
}

const CommentStyle = styled.div`
  width: 100%;
  background: #1e1e1e;
  border-bottom: 1px solid #353535;
  padding: 15px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .box-texts {
    margin-left: 10px;
  }
`;

const CommenterName = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #f3f3f3;
`;

const CommentText = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #acacac;
  margin-top: 4px;
`;
