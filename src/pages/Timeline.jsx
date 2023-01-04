import styled from "styled-components";
import Header from "../components/Header";
import PostLinkr from "../components/PostLinkr";

export default function Timeline(props) {
  return (
    <Page>
      <Header />
      <TimelineStyle>
        <h2>timeline</h2>
        <PostLinkr />
      </TimelineStyle>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #333;
  color: #fff;
`;

const TimelineStyle = styled.div`
  max-width: 611px;
  margin: 150px auto;
  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
  }
`;
