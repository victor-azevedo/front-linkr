import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import LinkCard from "../components/LinkrCard";
import PostLinkr from "../components/PostLinkr";
import Trending from "../components/Trending";

import { BASE_URL } from "../constants/constants";
import { useUserData } from "../hooks/useUserData";

export default function Timeline(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [linksList, setLinksList] = useState([]);

  const { userData } = useUserData();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/linkrs`, userData?.requestConfig)
      .then((res) => {
        setLinksList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(
          "An error occurred while trying to fetch the posts, please refresh the page"
        );
        setIsLoading(false);
        navigate("/");
      });
  }, []);

  function renderLinks() {
    if (!linksList) {
      return <p>There are no posts yet</p>;
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
          />
        );
      });
    }
  }

  return (<>
      <Header userPictureUrl={userData?.pictureUrl} />
    <Page>
      <TimelineStyle>
        <h2>timeline</h2>
        <Cards>
          <PostLinkr userPictureUrl={userData?.pictureUrl} />
          {renderLinks()}
          {isLoading ? <Loading>Loading...</Loading> : null}
        </Cards>
      </TimelineStyle>
      < Trending />
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

`;

const TimelineStyle = styled.div`
  max-width: 611px;
  margin: 150px auto;
  margin-bottom: 0px;
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
