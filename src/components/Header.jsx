import styled from "styled-components";
import UserPicture from "./UserPicture";
import { DebounceInput } from "react-debounce-input";
import { useEffect, useState } from "react";
import SearchIcon from "../assets/SearchIcon.svg";
import Suggestion from "./Suggestion";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useAuth } from "../hooks/useAuth.jsx";

export default function Header({ pictureUrl }) {
    const [userQuery, setUserQuery] = useState("");
    const [suggestions, setSuggestions] = useState(null);
    const [auth] = useAuth();

    useEffect(() => {
        axios
            .post(`${BASE_URL}/users/query`, {userQuery}, {
                headers: {
                    Authorization: `Bearer ${
                        {
                            /*auth.token*/
                        }
                    }`,
                },
            })
            .then(({ data: apiSuggestions }) => {
                setSuggestions(apiSuggestions);
            })
            .catch((err) => console.log(err));
    }, [userQuery]);

    return (
        <HeaderStyle>
            <Logo>linkr</Logo>
            <SearchBar className="search-bar">
                <div className="growing-content-box">
                    <div className="main-search">
                        <DebounceInput
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
                            suggestions.length !== 0 &&
                            suggestions.map((suggestion) => (
                                <Suggestion
                                    profileUrl={suggestion.profileUrl}
                                    username={suggestion.username}
                                />
                            ))}
                        {/* <Suggestion
                            profileUrl={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                            username={"teste"}
                        /> */}
                    </div>
                </div>
            </SearchBar>
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

const SearchBar = styled.div`
    width: 563px;
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
        }
    }
    .suggestions {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #e7e7e7;
        border-radius: 8px;
    }
`;
