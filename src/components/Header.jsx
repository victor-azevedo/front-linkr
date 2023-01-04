import styled from "styled-components";
import UserPicture from "./UserPicture";

export default function Header({ pictureUrl }) {
  return (
    <HeaderStyle>
      <Logo>linkr</Logo>
      <UserPicture pictureUrl={pictureUrl} />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 72px;
  background-color: #151515;
  color: #fff;
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Passion One", cursive;
  font-size: 49px;
`;
