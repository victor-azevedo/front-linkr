import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function UserPicture({ userPictureUrl, size, id }) {
  const navigate = useNavigate();
  return (
    <UserPictureStyle
      onClick={() => id && navigate(`/user/${id}`)}
      size={size}
      id={id}
    >
      <img src={userPictureUrl} alt="user avatar" />
    </UserPictureStyle>
  );
}
const UserPictureStyle = styled.div`
  height: ${(props) => (props.size ? props.size : "100%")};
  width: ${(props) => (props.size ? props.size : "100%")};
  max-width: 60px;
  max-height: 60px;
  cursor: ${(props) => (props.id ? "pointer" : "inherit%")};
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
