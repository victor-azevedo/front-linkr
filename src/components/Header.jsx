/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useUserData } from "../hooks/useUserData";
import useWindowDimensions from "../hooks/useWindowDimensions";

import UserPicture from "./UserPicture";
import SearchBar from "./SearchBar";
import MenuLogout from "./MenuLogout";

import { ReactComponent as OpenMenuIcon } from "../assets/OpenMenuIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../assets/CloseMenuIcon.svg";

export default function Header() {
  const { userData } = useUserData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  function showHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderStyle>
      <Logo onClick={() => navigate("/timeline")}>linkr</Logo>
      {width > 600 && <SearchBar />}
      <BoxMenu onClick={showHideMenu}>
        {isMenuOpen ? <StyledCloseMenuIcon /> : <StyledOpenMenuIcon />}
        <UserPicture userPictureUrl={userData?.pictureUrl} size={"55px"} />
        {isMenuOpen ? <MenuLogout setIsMenuOpen={setIsMenuOpen} /> : null}
      </BoxMenu>
      {}
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
  position: relative;
`;

const Logo = styled.div`
  font-family: "Passion One", cursive;
  font-size: 49px;
  cursor: pointer;
`;

const BoxMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledOpenMenuIcon = styled(OpenMenuIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledCloseMenuIcon = styled(CloseMenuIcon)`
  &:hover {
    cursor: pointer;
  }
`;
