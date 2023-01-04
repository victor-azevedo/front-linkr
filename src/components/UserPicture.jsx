import styled from "styled-components";

export default function UserPicture({ pictureUrl }) {
  return (
    <UserPictureStyle>
      <img src={pictureUrl} alt="user avatar" />
    </UserPictureStyle>
  );
}
const UserPictureStyle = styled.div`
  height: 50px;
  width: 50px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
