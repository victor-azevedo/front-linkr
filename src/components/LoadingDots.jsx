import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function LoadingDots() {
  return (
    <ContainerLoading>
      <ThreeDots
        height="48"
        width="48"
        radius="7"
        color="#FFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=""
        visible={true}
      />
    </ContainerLoading>
  );
}

const ContainerLoading = styled.main`
  width: 100px;
  margin: 0 auto;
`;
