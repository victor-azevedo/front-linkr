import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import LinkCard from "../components/LinkrCard";
import PostLinkr from "../components/PostLinkr";

import { BASE_URL, LINK_TEST, PICTURE_USER } from "../constants/constants";

export default function Timeline(props) {
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [linksList, setLinksList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      // .get(`${BASE_URL}/linkrs`, userData.requestConfig)
      .get(`${BASE_URL}/linkrs`)
      .then((res) => {
        console.log([...res.data]);
        setLinksList([...res.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
        setIsLoading(false);
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
            username={link.username}
            userPictureUrl={link.userPictureUrl}
            link={link.linkUrl}
            text={link.text}
            linkMetadata={link.linkMetadata}
          />
        );
      });
    }
  }

  return (
    <Page>
      <Header pictureUrl={PICTURE_USER} />
      <TimelineStyle>
        <h2>timeline</h2>
        <Cards>
          <PostLinkr pictureUrl={PICTURE_USER} />
          {renderLinks()}
          {isLoading ? <Loading>Loading...</Loading> : null}
        </Cards>
      </TimelineStyle>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100vh;
  background-color: #333;
  color: #fff;
  padding-bottom: 150px;
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
