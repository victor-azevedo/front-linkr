import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Suggestion({profileUrl, username, id, isFollowing}){

    const navigate = useNavigate()

    return (
        <StyledSuggestion onClick={e => navigate(`/user/${id}`)}>
            <img src={profileUrl} alt="user-suggestion-picture" />
            <p>{username}</p>
            <p className="following-p">{isFollowing && "• following"}</p>
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
    .following-p{
        color: #C5C5C5;
        margin-left: 15px;
    }
`