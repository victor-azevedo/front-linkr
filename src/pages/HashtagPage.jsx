import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import LinkCard from "../components/LinkrCard";
import Trending from "../components/Trending";
import { useUserData } from "../hooks/useUserData";

export default function HashtagPage() {
  const { userData } = useUserData();
  const navigate = useNavigate();
  if (!userData) {
    navigate("/");
  }

  const { hashtag } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [linkrs, setLinkrs] = useState(null);

  console.log(linkrs);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/hashtag/${hashtag}`, userData.requestConfig)
      .then((res) => {
        setLinkrs([...res.data]);
        console.log("RESPOSTA: ", res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(
          "An error occurred while trying to fetch the posts, please refresh the page"
        );
        setIsLoading(false);
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
          <Linkrs>
                    {linkrs && linkrs.map((linkr) => (
                        <LinkCard
                            key={linkr.id}
                            id={linkr.id}
                            username={linkr.username}
                            userPictureUrl={linkr.pictureUrl}
                            link={linkr.linkUrl}
                            text={linkr.text}
                            linkMetadata={linkr.linkMetadata}
                            likes={linkr.likes}
                            userId={linkr.userId}
                        />
                    ))}
                </Linkrs>
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
  > *{
    margin-bottom: 20px;
  }
`;
const Hashtags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
