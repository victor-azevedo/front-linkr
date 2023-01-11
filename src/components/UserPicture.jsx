import styled from "styled-components";

export default function UserPicture({ userPictureUrl }) {
  return (
    <UserPictureStyle>
      <img src={userPictureUrl} alt="user avatar" />
    </UserPictureStyle>
  );
}
const UserPictureStyle = styled.div`
  height: 50px;
  width: 50px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
