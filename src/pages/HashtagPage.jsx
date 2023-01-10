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
    <Page>
      <Header />
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
                        />
                    ))}
                </Linkrs>
          <Trending />
          <Hashtags></Hashtags>
        </LinkrsandHashtags>
      </Container>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
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
`;
const Hashtags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// LINKRCARD

// function LinkrCard(props){
//     return (
//         <LinkrCardBox>
//             <LinkrCardHeader>
//                 <LinkrCardUser>
//                     <LinkrCardUserImage src={props.linkr.user.avatar}/>
//                     <LinkrCardUserName>{props.linkr.user.username}</LinkrCardUserName>
//                 </LinkrCardUser>
//                 <LinkrCardText>
//                     {props.linkr.text}
//                 </LinkrCardText>
//             </LinkrCardHeader>
//         </LinkrCardBox>
//     );
// }

// const LinkrCardBox = styled.div`
//     border-radius: 16px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     max-width: 611px;
//     height: 276px;
//     background-color: #171717;
// `;

// const LinkrCardHeader = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
//     width: 611px;
//     height: 23px;
//     background-color: #171717;
// `;

// const LinkrCardUser = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     width: 611px;
//     height: 23px;
//     background-color: #171717;
// `;

// const LinkrCardUserImage = styled.img`
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
// `;

// const LinkrCardUserName = styled.p`
//     color: #FFFFFF;
//     font-family: Lato;
//     font-size: 19px;
//     font-weight: 700;
//     line-height: 28px;
//     letter-spacing: 0em;
//     text-align: left;
// `;

// const LinkrCardText = styled.p`
//     color: #FFFFFF;
//     font-family: Lato;
//     font-size: 19px;
//     font-weight: 400;
//     line-height: 28px;
//     letter-spacing: 0em;
//     text-align: left;
// `;

// //TRENDING HASHTAGS
// function Trending(){
//     return (
//         <TrendingBox>
//             <TrendingTitle>trending</TrendingTitle>
//             <TrendingHashtags>
//                 <TrendingHashtag>#dogs</TrendingHashtag>
//                 <TrendingHashtag>#cats</TrendingHashtag>
//                 <TrendingHashtag>#dogs</TrendingHashtag>
//                 <TrendingHashtag>#cats</TrendingHashtag>
//                 <TrendingHashtag>#dogs</TrendingHashtag>
//                 <TrendingHashtag>#cats</TrendingHashtag>
//                 <TrendingHashtag>#dogs</TrendingHashtag>
//                 <TrendingHashtag>#cats</TrendingHashtag>
//                 <TrendingHashtag>#dogs</TrendingHashtag>
//                 <TrendingHashtag>#cats</TrendingHashtag>
//             </TrendingHashtags>
//         </TrendingBox>
//     );
// }

// const TrendingBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 301px;
//     height: 100%;
//     background-color: #171717;
//     border-radius: 16px;
// `;

// const TrendingTitle = styled.h1`
//     color: #FFFFFF;
//     font-family: Oswald;
//     font-size: 27px;
//     font-weight: 700;
//     line-height: 40px;
//     letter-spacing: 0em;
//     text-align: left;
// `;

// const TrendingHashtags = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 301px;
//     height: 100%;
//     background-color: #171717;
// `;

// const TrendingHashtag = styled.p`
//     color: #FFFFFF;
//     font-family: Lato;
//     font-size: 19px;
//     font-weight: 400;
//     line-height: 28px;
//     letter-spacing: 0em;
//     text-align: left;
// `;
