import { useState } from "react";

import axios from "axios";
import styled from "styled-components";
import useInterval from "use-interval";

import { useUserData } from "../hooks/useUserData";

import ImageUpDate from "../assets/ImageUpDate.svg";

export default function UpDatePost({ lastPostId }) {
  const { userData } = useUserData();

  const [newLastPostId, setNewLastPostId] = useState(lastPostId);

  function renderNewPost() {
    window.location.reload(true);
  }

  useInterval(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/linkrs?limit=1`,
        userData?.requestConfig
      )
      .then((res) => {
        console.log(res.data);
        setNewLastPostId(res.data[0]?.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 15000);

  console.log(newLastPostId);
  console.log(lastPostId);

  if (!newLastPostId || Number(newLastPostId) <= Number(lastPostId))
    return null;
  return (
    <NewPostButton onClick={() => renderNewPost()}>
      {newLastPostId - lastPostId} new posts, load more!
      <img src={ImageUpDate} alt="icon upDate" />
    </NewPostButton>
  );
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
