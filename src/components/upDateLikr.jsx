import { useState } from "react";
import styled from "styled-components"
import { useUserData } from "../hooks/useUserData";
import ImageUpDate from "../assets/ImageUpDate.svg";
import useInterval from "use-interval";
import axios from "axios";

export default function UpDatePost({ linksList }) {
    const { userData } = useUserData();
    const [contNewPost, setContNewPost] = useState(0);
    const [newPost, setNewPost] = useState([])
    const countPost = linksList.length;
    console.log("tinha", countPost)
    const [contador, setContador] = useState(0)


    function renderNewPost() {
        window.location.reload(true);
    }

    const [count, setCount] = useState(0)    
  
    useInterval(
      () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/linkrs`, userData?.requestConfig)
        .then((res) => {
          setNewPost(res.data);
          setContNewPost(newPost.length)
          console.log("tem agora" ,newPost.length)
        })
        .catch((err) => {
            console.log("errooo");
        }) 
        
      },1000)
  
   
    if (countPost >= contNewPost) return null;
    else {
        return (
            <NewPostButton onClick={() => renderNewPost(linksList)}>
                {contador} new posts, load more!
                <img src={ImageUpDate}
                    alt="icon upDate" />
            </NewPostButton>
        )
    }
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