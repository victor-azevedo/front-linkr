import { useState } from "react";

import axios from "axios";
import styled from "styled-components";
import useInterval from "use-interval";

import { useUserData } from "../hooks/useUserData";

import ImageUpDate from "../assets/ImageUpDate.svg";

export default function UpDatePost({ count }) {
  const { userData } = useUserData();
  const [contNewPost, setContNewPost] = useState(0);
  const [newPost, setNewPost] = useState([]);
  const [contador, setContador] = useState(0);

  function renderNewPost() {
    window.location.reload(true);
  }

  useInterval(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/linkrs`, userData?.requestConfig)
      .then((res) => {
        setNewPost(res.data);
        setContNewPost(newPost[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
    setContador(newPost[0].id - count);
  }, 15000);

  if (count >= contNewPost) return null;
  else {
    return (
      <NewPostButton onClick={() => renderNewPost()}>
        {contador} new posts, load more!
        <img src={ImageUpDate} alt="icon upDate" />
      </NewPostButton>
    );
  }
}

const NewPostButton = styled.div`
  width: 100%;
  height: 61px;
  background: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :hover {
    background-color: #333333;
    border: 2px solid #000;
    color: white;
    transition: all 0.5s ease-in;
    transition-delay: 0.05s;
  }

  img {
    margin-left: 14px;
  }
`;
