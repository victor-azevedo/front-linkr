import { useState } from "react";
import styled from "styled-components"
import ImageUpDate from "../assets/ImageUpDate.svg";

export default function UpDatePost({linksList}) {

    const [contNewPost, setContNewPost] = useState(linksList.length);

    function renderNewPost(linksList){
        console.log(linksList)
      }

    return (
        <NewPostButton onClick={() => renderNewPost(linksList)}>
            12 new posts, load more!
            <img src={ImageUpDate}
                alt="icon upDate" />
        </NewPostButton>
    )
}

const NewPostButton = styled.div`
    width: 100%;
    height: 61px;
    background: #1877F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;

    :hover{
        background-color: #333333;
            border: 2px solid #000;
            color: white;
            transition: all 0.5s ease-in;
            transition-delay: 0.05s;
    }

    img{
        margin-left: 14px;
    }
`