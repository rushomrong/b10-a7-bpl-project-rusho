import Remove from "/src/assets/delete.png";

const Selected = ({ players, onAddMorePlayers, onDeletePlayer }) => {
  return (
    <div>
      {players.length === 0 ? (
        <p>No players selected yet!</p>
      ) : (
        players.map((player) => (
          <div
            key={player.playerId}
            className="card card-side bg-base-100 shadow-xl mb-4 flex items-center justify-between p-3"
          >
            <figure>
              <img src={player.image} alt={player.name} className="h-60 w-60" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {player.name}</h2>
              <p>Role: {player.role}</p>
              <p>Batting: {player.battingType}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => onDeletePlayer(player.playerId)}
                className="btn bg-transparent"
              >
                <img src={Remove} alt="" />
              </button>
            </div>
          </div>
        ))
      )}

      <button
        onClick={onAddMorePlayers}
        className="btn ring-btnBg ring-2 px-6 py-2 font-bold text-black bg-btnBg rounded-lg border-6 border-[#1f1f1f]"
      >
        Add more players
      </button>
    </div>
  );
};

export default Selected;
