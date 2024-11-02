import Flag from "/src/assets/Flag.png";
import Person from "/src/assets/Person.png";

const Card = ({ player, onChoosePlayer }) => {
  const {
    name,
    image,
    role,
    country,
    battingType,
    bowlingType,
    biddingPrice,
    playerRating,
  } = player;

  return (
    <div className="card bg-base-100 w-auto shadow-xl border border-rightBtnBorder p-6">
      <figure>
        <img src={image} alt={name} className="mx-auto rounded-full mb-4" />
      </figure>
      <div className="card-body">
        <div className="flex flex-col">
          <div className="flex gap-3 mb-4 items-center">
            <img src={Person} alt={name} className="h-7 w-[25px]" />
            <h2 className="text-xl font-bold">{name}</h2>
          </div>

          <div className="flex justify-between items-center gap-3">
            <img
              src={Flag}
              alt={country}
              className="h-5 w-[17] bg-lightWhite"
            />
            <p className="text-sm text-gray-600">{country}</p>
            <span className="font-medium">{role}</span>
          </div>

          <div className="divider"></div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-bold">Rating</p>
            <div className="text-sm">{playerRating}/10</div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-bold">Batting</p>
            <div className="text-sm">{battingType}</div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-bold">Bowling</p>
            <div className="text-sm">{bowlingType}</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <p className="text-sm font-bold">Price:</p>
              <p>${biddingPrice.toLocaleString()}</p>
            </div>
            <button
              onClick={() => onChoosePlayer(player)}
              className="btn text-gray-700 font-medium bg-transparent"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
