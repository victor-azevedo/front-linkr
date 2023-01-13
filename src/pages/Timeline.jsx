import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import RenderCards from "../components/RenderCards";
import PostLinkr from "../components/PostLinkr";
import Trending from "../components/Trending";
import UpDatePost from "../components/upDateLikr";
import InfiniteScroll from "react-infinite-scroller";

import { useUserData } from "../hooks/useUserData";
import { useFollowing } from "../hooks/useFollowing";

import { PAGE_LIMIT } from "../constants/constants";

export default function Timeline(props) {
  const { userData } = useUserData();
  const navigate = useNavigate();
  if (!userData) {
    navigate("/");
  }

  const [areTherePosts, setAreTherePosts] = useState(false);
  const [linksList, setLinksList] = useState([]);
  const { setFollowersList } = useFollowing();
  if (!userData) {
    navigate("/");
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/follows`, userData?.requestConfig)
      .then((res) => {
        setFollowersList(res.data);
        setAreTherePosts(true);
      })
      .catch((err) => {
        console.log(err);
      });
    //eslint-disable-next-line
  }, []);

  function loadFunc(page) {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/linkrs?page=${page}`,
        userData?.requestConfig
      )
      .then((res) => {
        setLinksList([...linksList, ...res.data]);
        setAreTherePosts(res.data.length < PAGE_LIMIT ? false : true);
      })
      .catch((err) => {
        alert(
          "An error occurred while trying to fetch the posts, please refresh the page"
        );
        setAreTherePosts(false);
      });
  }

  return (
    <>
      <Header userPictureUrl={userData?.pictureUrl} />
      <Page>
        <TimelineStyle>
          <h2>timeline</h2>
          <Cards>
            <PostLinkr userPictureUrl={userData?.pictureUrl} />
            <UpDatePost lastPostId={linksList[0]?.id} />
            <InfiniteScroll
              pageStart={0}
              loadMore={loadFunc}
              hasMore={areTherePosts}
              loader={<Loading key={0}>Loading...</Loading>}
            >
              <RenderCards cards={linksList} />
            </InfiniteScroll>
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
  text-align: center;
  padding: 20px;
  text-align: center;
`;
