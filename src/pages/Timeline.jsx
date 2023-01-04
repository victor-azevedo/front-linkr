import styled from "styled-components";
import Header from "../components/Header";

export default function Timeline(props) {
  return (
    <Page>
      <Header />
      <h1>Hello Timeline</h1>
    </Page>
  );
}

const Page = styled.div`
  width: 100vh;
`;
