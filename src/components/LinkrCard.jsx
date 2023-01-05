import styled from "styled-components";
import UserPicture from "./UserPicture";

export default function LinkrCard({ pictureUrl, link }) {
  return (
    <LinkCardStyle>
      <UserPicture pictureUrl={pictureUrl} />
      <div className="link-data">
        <Username>Juvenal Juvêncio</Username>
        <Text>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
        </Text>
        <Link>
          <LinkTexts>
            <LinkTitle>
              Como aplicar o Material UI em um projeto React
            </LinkTitle>
            <LinkDescription>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another
              page.
            </LinkDescription>
            <LinkUrl>{link}</LinkUrl>
          </LinkTexts>
          <LinkImage>
            <img src={pictureUrl} alt="" />
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

const Text = styled.p`
  color: #b7b7b7;
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 10px;
`;

const Link = styled.div`
  display: flex;
  align-items: stretch;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  margin-top: 10px;
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
