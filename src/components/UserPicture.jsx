import styled from "styled-components";

export default function UserPicture({ userPictureUrl }) {
  return (
    <UserPictureStyle>
      <img src={userPictureUrl} alt="user avatar" />
    </UserPictureStyle>
  );
}
const UserPictureStyle = styled.div`
  height: 100%;
  width: 100%;
  max-width: 55px;
  max-height: 55px;
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
