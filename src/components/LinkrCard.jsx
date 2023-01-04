import styled from "styled-components";
import UserPicture from "./UserPicture";

export default function LinkrCard({ pictureUrl }) {
  return (
    <LinkCardStyle>
      <UserPicture pictureUrl={pictureUrl} />
      <div className="link-data">
        <Username>Juvenal Juvêncio</Username>
        <LinkText>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
        </LinkText>
        <Link></Link>
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

const LinkText = styled.p`
  color: #b7b7b7;
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
`;

const Link = styled.div`
  color: #cecece;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`;
