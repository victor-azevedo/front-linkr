import styled from "styled-components";

export default function Header(props) {
  return (
    <HeaderStyle>
      <Logo>linkr</Logo>
      <div>Picture</div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 72px;
  background-color: #151515;
  color: #fff;
  padding: 0 28px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Passion One", cursive;
  font-size: 49px;
`;


