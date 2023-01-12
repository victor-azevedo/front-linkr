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

  return <>{renderLinks()}</>;
}
