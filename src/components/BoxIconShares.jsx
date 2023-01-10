import styled from "styled-components";

import { ReactComponent as ShareIcon } from "../assets/ShareIcon.svg";

export default function BoxIconShares({ id, shares }) {
  return (
    <BoxSharesStyle>
      <StyledShareIcon />
      <SharesCount>0 re-post</SharesCount>
    </BoxSharesStyle>
  );
}

const BoxSharesStyle = styled.div``;

const StyledShareIcon = styled(ShareIcon)`
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

const SharesCount = styled.p`
  color: #fff;
  font-size: 11px;
  line-height: 13.2px;
  font-weight: 400;
  margin-top: 8px;
  text-align: center;
`;
