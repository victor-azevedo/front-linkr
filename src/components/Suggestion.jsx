import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../constants/constants";


export default function Suggestion({profileUrl, username, id}){

    const navigate = useNavigate()

    return (
        <StyledSuggestion onClick={e => navigate(`/user/${id}`)}>
            <img src={profileUrl} alt="user-suggestion-picture" />
            <p>{username}</p>
        </StyledSuggestion>
    );
}

const StyledSuggestion = styled.div`
    width: 564px;
    height: 40px;
    display: flex;
    align-items: center;
    img{
        width: 39px;
        height: 39px;
        border-radius: 20px;
    }
    p{
        color: black;
    }
`