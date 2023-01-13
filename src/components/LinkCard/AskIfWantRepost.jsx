import styled from "styled-components";

export default function AskIfWantRepost(props) {
  return (
    <>
      <AllPage onClick={() => props.setIsSharing(false)} />
      <AskBox>
        <AskText>Do you want to re-post this link?</AskText>
        <AlignButtons>
          <ButtonNo onClick={() => props.setIsSharing(false)}>
            No, cancel
          </ButtonNo>
          <ButtonYes
            onClick={() => {
              props.setYesShare(true);
              props.setIsSharing(false);
            }}
          >
            Yes, share!
          </ButtonYes>
        </AlignButtons>
      </AskBox>
    </>
  );
}

const AllPage = styled.div`
  z-index: 100;
  position: fixed;
  height: 100%;
  width: 100vw;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.9);
`;

const AskBox = styled.div`
  z-index: 101;
  position: fixed;
  width: 597px;
  height: 210px;
  left: 413px;
  top: 364px;
  background: #333333;
  border-radius: 20px;
`;

const AskText = styled.p`
  position: fixed;
  width: 299px;
  height: 70px;
  left: 565px;
  top: 406px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  text-align: center;
`;

const AlignButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 200px;
  flex-direction: row;
  height: 40px;
  left: 650px;
`;

const ButtonYes = styled.button`
  position: fixed;
  width: 134px;
  height: 37px;
  left: 733px;
  top: 499px;

  background: #1877f2;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  color: #ffffff;
`;

const ButtonNo = styled.button`
  position: fixed;
  width: 134px;
  height: 37px;
  left: 572px;
  top: 498px;
  background: #ffffff;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #1877f2;
`;
