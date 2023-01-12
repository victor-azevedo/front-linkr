import styled from "styled-components";

export default function UserPicture({ userPictureUrl, size }) {
  return (
    <UserPictureStyle size={size}>
      <img src={userPictureUrl} alt="user avatar" />
    </UserPictureStyle>
  );
}
const UserPictureStyle = styled.div`
  height: ${(props) => (props.size ? props.size : "100%")};
  width: ${(props) => (props.size ? props.size : "100%")};
  max-width: 60px;
  max-height: 60px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
