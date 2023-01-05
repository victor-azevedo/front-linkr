import styled from "styled-components";
import UserPicture from "./UserPicture";
import { ReactComponent as UnlikeIcon } from "../assets/HeartIcon.svg";
import { ReactComponent as LikedIcon } from "../assets/HeartIconFilled.svg";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export default function LinkrCard({
  id,
  username,
  userPictureUrl,
  link,
  text,
  linkMetadata,
  linkIsliked,
}) {
  const [isliked, setIsliked] = useState(linkIsliked || false);

  function LikeLink() {
    if (!isliked) {
      axios
        // .post(`${BASE_URL}/like/${id}`, userData.requestConfig)
        .post(`${BASE_URL}/like/${id}`)
        .then((res) => {
          setIsliked(!isliked);
        })
        .catch((err) => {
          alert("An error occurred while trying to like post");
        });
    } else {
      axios
        // .delete(`${BASE_URL}/like/${id}`, userData.requestConfig)
        .delete(`${BASE_URL}/like/${id}`)
        .then((res) => {
          setIsliked(!isliked);
        })
        .catch((err) => {
          alert("An error occurred while trying to like post");
        });
    }
  }

  return (
    <LinkCardStyle>
      <div className="user-data">
        <UserPicture userPictureUrl={userPictureUrl} />
        {isliked ? (
          <StyledLikedIcon onClick={LikeLink} />
        ) : (
          <StyledUnlikeIcon onClick={LikeLink} />
        )}
        <LikeCount>12 likes</LikeCount>
      </div>
      <div className="link-data">
        <Username>{username}</Username>
        <Text>{text}</Text>
        <Link href={link} target="blank">
          <LinkTexts>
            <LinkTitle>{linkMetadata.title}</LinkTitle>
            <LinkDescription>{linkMetadata.description}</LinkDescription>
            <LinkUrl>{link}</LinkUrl>
          </LinkTexts>
          <LinkImage>
            <img src={linkMetadata.image} alt="" />
          </LinkImage>
        </Link>
      </div>
    </LinkCardStyle>
  );
}

const LinkCardStyle = styled.div`
  width: 100%;
  background: #171717;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 22px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
  .link-data {
    flex-basis: 501px;
  }
`;

const Username = styled.p`
  color: #fff;
  font-size: 19px;
  line-height: 23px;
  font-weight: 400;
`;

const StyledUnlikeIcon = styled(UnlikeIcon)`
  display: block;
  width: 100%;
  margin-top: 20px;
  path {
    fill: #fff;
    stroke-width: 48;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledLikedIcon = styled(LikedIcon)`
  display: block;
  width: 100%;
  margin-top: 20px;
  path {
    stroke-width: 48;
  }
  &:hover {
    cursor: pointer;
  }
`;

const LikeCount = styled.p`
  color: #fff;
  font-size: 11px;
  line-height: 13.2px;
  font-weight: 400;
  margin-top: 8px;
  text-align: center;
`;

const Text = styled.p`
  color: #b7b7b7;
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 10px;
`;

const Link = styled.a`
  color: #cecece;
  display: flex;
  align-items: stretch;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  margin-top: 10px;
  text-decoration: none;
`;

const LinkTexts = styled.div`
  padding: 24px;
`;

const LinkTitle = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`;
const LinkDescription = styled.p`
  color: #9b9595;
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  margin-top: 10px;
`;
const LinkUrl = styled.p`
  font-size: 11px;
  line-height: 13.2px;
  font-weight: 400;
  margin-top: 10px;
`;
const LinkImage = styled.div`
  flex-basis: 155px;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0 11px 11px 0;
  }
`;
