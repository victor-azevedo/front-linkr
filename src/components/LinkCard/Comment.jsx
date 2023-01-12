import styled from "styled-components";

import UserPicture from "./../UserPicture";

export default function Comment({
  commentText,
  commenterName,
  commenterPicture,
  commenterId,
  userOwnerId,
  followerId,
}) {
  return (
    <CommentStyle>
      <UserPicture userPictureUrl={commenterPicture} />
      <div className="box-texts">
        <CommenterName>{commenterName}</CommenterName>
        {Number(commenterId) === Number(userOwnerId) && (
          <AuthorComment className="extra-text"> • post’s author</AuthorComment>
        )}
        {Number(commenterId) === Number(followerId) && (
          <FollowingComment className="extra-text">
            {" "}
            • following
          </FollowingComment>
        )}
        <CommentText>{commentText}</CommentText>
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

const AuthorComment = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #565656;
`;

const FollowingComment = styled(AuthorComment)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #565656;
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
