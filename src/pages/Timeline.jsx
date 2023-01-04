import styled from "styled-components";
import Header from "../components/Header";
import LinkCard from "../components/LinkrCard";
import PostLinkr from "../components/PostLinkr";

import { LINK_TEST, PICTURE_USER } from "../constants/constants";

export default function Timeline(props) {
  return (
    <Page>
      <Header pictureUrl={PICTURE_USER} />
      <TimelineStyle>
        <h2>timeline</h2>
        <Cards>
          <PostLinkr pictureUrl={PICTURE_USER} />
          <LinkCard pictureUrl={PICTURE_USER} link={LINK_TEST} />
          <LinkCard pictureUrl={PICTURE_USER} />
          <LinkCard pictureUrl={PICTURE_USER} />
          <LinkCard pictureUrl={PICTURE_USER} />
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
