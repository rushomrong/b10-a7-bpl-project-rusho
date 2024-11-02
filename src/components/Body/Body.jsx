import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "./Cards/Cards";
import Selected from "./Selected";

const Body = ({
  balance,
  setBalance,
  view,
  selectedPlayers,
  setSelectedPlayers,
  setView,
}) => {
  const MAX_PLAYERS = 6;

  const handleChoosePlayer = (player) => {
    const { name, biddingPrice } = player;

    if (selectedPlayers.some((p) => p.name === name)) {
      toast.error("Player already selected!");
      return;
    }

    if (selectedPlayers.length >= MAX_PLAYERS) {
      toast.error("Maximum players selected!");
      return;
    }

    if (balance < biddingPrice) {
      toast.error("Insufficient funds!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setBalance((prevBalance) => prevBalance - biddingPrice);
    toast.success("Player successfully added!");
  };

  return (
    <section className="md:mb-80">
      {view === "available" ? (
        <Cards onChoosePlayer={handleChoosePlayer} />
      ) : (
        <Selected
          players={selectedPlayers}
          onAddMorePlayers={() => setView("available")}
          onDeletePlayer={(id) => {
            setSelectedPlayers((prevPlayers) =>
              prevPlayers.filter((player) => player.playerId !== id)
            );
            toast.success("Player removed successfully!"); // Add toast message for player removal
          }}
        />
      )}
      {/* <BeforeFooter /> */}
    </section>
  );
};

export default Body;
