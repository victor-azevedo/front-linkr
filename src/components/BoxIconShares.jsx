import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserData } from "../hooks/useUserData";
import { ReactComponent as ShareIcon } from "../assets/ShareIcon.svg";

export default function BoxIconShares({ id, shares }) {

  //cria função que envia um post com o id para ${URL}/linkrs/repost
  const { userData } = useUserData();
  const [isShared, setIsShared] = useState(false);

  function handleShareClick() {
    const body = {
      postId: id,
    };

    const promise = axios.post(
      `${process.env.REACT_APP_BASE_URL}/linkrs/repost`,
      body, userData?.requestConfig
    );

    promise.then((res) => {
      setIsShared(true);
      alert("Re-posted");
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
      if (erro.response.status === 401) {
        alert("Acesso negado");
      }
    }
    );
  }


  return (
    <BoxSharesStyle>
      <StyledShareIcon onClick={()=> handleShareClick() }/>
      <SharesCount>{shares} re-post</SharesCount>
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
