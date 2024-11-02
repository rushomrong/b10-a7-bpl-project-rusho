import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ onChoosePlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/playersData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch players data");
        }
        return res.json();
      })
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error)); // Debugging fetch errors
  }, []);

  if (players.length === 0) {
    return <p>Loading players...</p>;
  }

  return (
    <section className="flex justify-center">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Card
            key={player.playerId}
            player={player}
            onChoosePlayer={onChoosePlayer}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
