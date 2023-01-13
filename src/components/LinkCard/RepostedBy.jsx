import styled from "styled-components";

import { useUserData } from "../../hooks/useUserData";

import ShareIcon from "../../assets/ShareIcon.svg";

export default function RepostedBy({ repostedBy }) {
  const { userData } = useUserData();

  return (
    <RepostedByStyled>
      <img src={ShareIcon} alt="" />
      <p>
        Re-posted by{" "}
        <strong>{repostedBy === userData.username ? "you" : repostedBy}</strong>
      </p>
    </RepostedByStyled>
  );
}

const RepostedByStyled = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #1e1e1e;
  border-radius: 16px;
  color: white;
  font-size: 11px;
  transform: translate(0, 28px);
  z-index: 1;
  padding: 10px;
  img {
    width: 20px;
    height: 12px;
    margin-right: 5px;
    margin-left: 5px;
  }
  p {
    color: #cacaca;
    strong {
      font-weight: 700;
      color: white;
    }
  }
`;
