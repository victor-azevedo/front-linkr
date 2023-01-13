/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import Trending from "../components/Trending";
import { useUserData } from "../hooks/useUserData";
import RenderCards from "../components/RenderCards";

export default function HashtagPage() {
  const { userData } = useUserData();
  const navigate = useNavigate();
  if (!userData) {
    navigate("/");
  }

  const { hashtag } = useParams();
  const [linkrs, setLinkrs] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/hashtag/${hashtag}`,
        userData.requestConfig
      )
      .then((res) => {
        setLinkrs([...res.data]);
      })
      .catch((err) => {
        alert(
          "An error occurred while trying to fetch the posts, please refresh the page"
        );
      });
  }, [hashtag]);

  return (
    <>
      <Header />
      <Page>
        <Container>
          <Title>
            # <span>{hashtag}</span>
          </Title>
          <LinkrsandHashtags>
            <Linkrs>{linkrs && <RenderCards cards={linkrs} />}</Linkrs>
            <Trending />
            <Hashtags></Hashtags>
          </LinkrsandHashtags>
        </Container>
      </Page>
    </>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #333333;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  color: #ffffff;
  margin-top: 53px;
  margin-bottom: 41px;
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
`;
const LinkrsandHashtags = styled.div`
  display: flex;
  flex-direction: row;
`;
const Linkrs = styled.div`
  width: 611px;
  margin-right: 25px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin-bottom: 20px;
  }
`;
const Hashtags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
