import styled from "styled-components";

import { useFollowing } from "../hooks/useFollowing";

import LinkCard from "./LinkCard/LinkrCard";

export default function RenderCards({ cards }) {
  const { followersList } = useFollowing();
  if (!cards) {
    return (
      <p>
        {followersList.length === 0
          ? "You don't follow anyone yet. Search for new friends!"
          : "No posts found from your friends"}
      </p>
    );
  }

  return (
    <Cards>
      {cards.map((card) => (
        <LinkCard key={card.id} card={card} />
      ))}
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 43px;
`;
