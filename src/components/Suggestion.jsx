import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserPicture from "./UserPicture";

export default function Suggestion({ profileUrl, username, id, isFollowing }) {
  const navigate = useNavigate();

  return (
    <StyledSuggestion onClick={(e) => navigate(`/user/${id}`)}>
      <UserPicture userPictureUrl={profileUrl} size={"39px"} />
      <p>{username}</p>
      <p className="following-p">{isFollowing && "• following"}</p>
    </StyledSuggestion>
  );
}

const StyledSuggestion = styled.div`
  width: 564px;
  height: 40px;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  padding: 10px;
  p {
    color: black;
    margin-left: 10px;
  }
  .following-p {
    color: #c5c5c5;
    margin-left: 15px;
  }
`;
