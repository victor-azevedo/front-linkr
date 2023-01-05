import styled from "styled-components";


export default function Suggestion({profileUrl, username}){

    

    return (
        <StyledSuggestion>
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
        border-radius: 20px;
    }
    p{
        color: black;
    }
`