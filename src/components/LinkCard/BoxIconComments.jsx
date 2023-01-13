import styled from "styled-components";

import { ReactComponent as CommentsIcon } from "../../assets/CommentsIcon.svg";

export default function BoxIconComments({
  commentsCount,
  setShowComments,
  showComments,
}) {
  return (
    <BoxCommentsStyle onClick={() => setShowComments(!showComments)}>
      <StyledCommentsIcon />
      <CommentsCount>{commentsCount} comments</CommentsCount>
    </BoxCommentsStyle>
  );
}

const BoxCommentsStyle = styled.div``;

const StyledCommentsIcon = styled(CommentsIcon)`
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

const CommentsCount = styled.p`
  color: #fff;
  font-size: 11px;
  line-height: 13.2px;
  font-weight: 400;
  margin-top: 8px;
  text-align: center;
`;
