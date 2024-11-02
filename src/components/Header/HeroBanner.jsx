import Mainimg from "/src/assets/banner-main.png";
import bgShadow from "/src/assets/bg-shadow.png";

const HeroBanner = ({ addCredit }) => {
  return (
    <section className="pt-6 font-Sora">
      <div className="w-11/12 md:w-3/4 mx-auto">
        <div
          className="hero h-[550px] bg-bannerBg bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${bgShadow})` }}
        >
          <div className="hero-content flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl">
              <img
                src={Mainimg}
                alt="main img"
                style={{ display: "block", margin: "0 auto" }}
              />
              <h1 className="text-4xl font-bold text-white pt-6">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="py-6 font-medium text-2xl text-lightWhite pt-4">
                Beyond Boundaries Beyond Limits
              </p>
              <button
                onClick={addCredit}
                className="btn ring-btnBg ring-2 px-6 py-2 font-bold text-black bg-btnBg rounded-lg border-6 border-[#1f1f1f]"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
