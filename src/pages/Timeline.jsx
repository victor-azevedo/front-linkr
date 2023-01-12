import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import LinkCard from "../components/LinkrCard";
import PostLinkr from "../components/PostLinkr";
import Trending from "../components/Trending";
import UpDatePost from "../components/upDateLikr";

import { useUserData } from "../hooks/useUserData";

export default function Timeline(props) {
  const { userData } = useUserData();
  const navigate = useNavigate();
  if (!userData) {
    navigate("/");
  }

  const [isLoading, setIsLoading] = useState(false);
  const [linksList, setLinksList] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [count, setCount] = useState(0)
  if (!userData) {
    navigate("/");
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/linkrs`, userData?.requestConfig)
      .then((res) => {
        setLinksList(res.data);
        setCount(res.data[0].id)
        setIsLoading(false);
      })
      .catch((err) => {
        alert(
          "An error occurred while trying to fetch the posts, please refresh the page"
        );
        setIsLoading(false);
        navigate("/");
      });

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/follows`, userData?.requestConfig)
      .then((res) => {
        setFollowersList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //eslint-disable-next-line
  }, []);

  console.log(linksList)

  function renderLinks() {
    if (!linksList) {
      return (
        <p>
          {followersList.length === 0
            ? "You don't follow anyone yet. Search for new friends!"
            : "No posts found from your friends"}
        </p>
      );
    } else {
      return linksList.map((link) => {

        return (
          <LinkCard
            key={link.id}
            id={link.id}
            username={link.username}
            userPictureUrl={link.userPictureUrl}
            link={link.linkUrl}
            text={link.text}
            linkMetadata={link.linkMetadata}
            likes={link.likes}
            userId={link.userId}
            commentsCount={link.commentsCount}
            repostsCount={link}
          />
        );
      });
    }
  }

  return (
    <>
      <Header userPictureUrl={userData?.pictureUrl} />
      <Page>
        <TimelineStyle>
          <h2>timeline</h2>
          <Cards>
            <PostLinkr userPictureUrl={userData?.pictureUrl} />
            <UpDatePost count={count}/>
            {renderLinks()}
            {isLoading ? <Loading>Loading...</Loading> : null}
          </Cards>
        </TimelineStyle>
        <div className="trending-hashtags">
          <Trending />
        </div>
      </Page>
    </>
  );
}

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100vh;
  background-color: #333;
  color: #fff;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  .trending-hashtags {
    width: 301px;
    margin-top: 235px;
    margin-left: 20px;
  }
`;

const TimelineStyle = styled.div`
  width: 611px;
  margin-top: 150px;
  margin-bottom: 0px;
  margin-right: 20px;
  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 43px;
`;

const Loading = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 28px;
`;
