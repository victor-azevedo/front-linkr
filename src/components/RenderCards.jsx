import styled from "styled-components";
import LinkCard from "./LinkCard/LinkrCard";

export default function RenderCards({ cards, followersList }) {
  function renderLinks() {
    if (!cards) {
      return (
        <p>
          {followersList.length === 0
            ? "You don't follow anyone yet. Search for new friends!"
            : "No posts found from your friends"}
        </p>
      );
    } else {
      return cards.map((card) => <LinkCard key={card.id} card={card} />);
    }
  }

  return <Cards>{renderLinks()}</Cards>;
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 43px;
`;
