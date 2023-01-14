/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

import { useUserData } from "../hooks/useUserData";

import UserPicture from "./UserPicture";
import Suggestion from "./Suggestion";
import MenuLogout from "./MenuLogout";

import SearchIcon from "../assets/SearchIcon.svg";
import { ReactComponent as OpenMenuIcon } from "../assets/OpenMenuIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../assets/CloseMenuIcon.svg";

export default function Header() {
  const { userData } = useUserData();
  const [userQuery, setUserQuery] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (userQuery.length === 0) {
      setSuggestions(null);
      return;
    }
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/users/query`,
        { userQuery },
        userData?.requestConfig
      )
      .then(({ data: apiSuggestions }) => {
        setSuggestions(apiSuggestions);
      })
      .catch((err) => console.log(err));
  }, [userQuery]);

  function showHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderStyle>
      <Logo onClick={() => navigate("/timeline")}>linkr</Logo>
      <SearchBar className="search-bar">
        <div className="growing-content-box">
          <div className="main-search">
            <DebounceInput
              onBlur={() => {
                setTimeout(() => setSuggestions(null), 100);
              }}
              className="search-input"
              onChange={(e) => setUserQuery(e.target.value)}
              minLength={3}
              debounceTimeout={300}
              placeholder="Search for people"
            />
            <div className="search-icon">
              <img src={SearchIcon} alt="" />
            </div>
          </div>
          <div className="suggestions">
            {suggestions &&
              userQuery.length !== 0 &&
              suggestions.map((suggestion) => (
                <Suggestion
                  profileUrl={suggestion.pictureUrl}
                  username={suggestion.username}
                  isFollowing={suggestion.isFollowing}
                  id={suggestion.id}
                  key={suggestion.id}
                />
              ))}
          </div>
        </div>
      </SearchBar>
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

const SearchBar = styled.div`
  width: 50%;
  max-width: 563px;
  height: 45px;
  background-color: #e7e7e7;
  border-radius: 8px;
  .growing-content-box {
    background-color: #e7e7e7;
    border-radius: 8px;
  }
  .main-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 8px;

    .search-input {
      border: 0;
      width: 523px;
      height: 45px;
      border-radius: 8px;
      flex-grow: 0;
      :focus {
        outline: 0;
      }
    }
    .search-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }
  .suggestions {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #e7e7e7;
    border-radius: 8px;
  }
  @media (max-width: 600px) {
    display: none;
  }
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
