import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BeforeFooter from "./components/BeforeFooter/BeforeFooter";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import HeroBanner from "./components/Header/HeroBanner";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [view, setView] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCredit = () => {
    setBalance((prevBalance) => prevBalance + 70000000);
    toast.success("Coin added successfully to your account!");
  };

  return (
    <>
      <Header balance={balance} />
      <HeroBanner addCredit={addCredit} />
      <div className="w-11/12 md:w-3/4 mx-auto font-Sora pt-16">
        <div className="flex flex-col md:flex-row mx-auto justify-between mb-8">
          <h2 className="text-bannerBg text-2xl font-bold">
            {view === "available"
              ? "Available Players"
              : `Selected Players (${selectedPlayers.length}/6)`}
          </h2>

          <div className="flex">
            <div className="space-x-4 border border-rightBtnBorder rounded-xl">
              <button
                onClick={() => setView("available")}
                className={`px-4 py-2 rounded-xl font-semibold ${
                  view === "available"
                    ? "bg-btnBg text-black"
                    : "bg-base-100 text-rightBtnBorder"
                }`}
              >
                Available
              </button>

              <button
                onClick={() => setView("selected")}
                className={`px-4 py-2 rounded-xl font-semibold ${
                  view === "selected"
                    ? "bg-btnBg text-black"
                    : "bg-base-100 text-rightBtnBorder"
                }`}
              >
                Selected <span>({selectedPlayers.length}/6)</span>
              </button>
            </div>
          </div>
        </div>

        <Body
          balance={balance}
          setBalance={setBalance}
          setView={setView}
          view={view}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
      />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default App;
