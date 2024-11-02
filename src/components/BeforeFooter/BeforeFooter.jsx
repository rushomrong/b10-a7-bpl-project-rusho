import beforeFooter from "/src/assets/bg-shadow.png";
import "/src/components/Footer/Footer.css";

const BeforeFooter = () => {
  return (
    <section className="pt-52 font-Sora">
      <div id="beforeFoot" className="w-11/12 md:w-3/4 mx-auto absolute z-10">
        <div
          className="h-[350px] bg-cover bg-center rounded-2xl p-6 border border-lightWhite  bg-lightWhite"
          style={{ backgroundImage: `url(${beforeFooter})` }}
        >
          <div className="hero-content mx-auto flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold text-bannerBg pt-6">
                Subscribe to our Newsletter
              </h1>
              <p className="py-6 font-medium text-xl pt-4">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex">
                <input
                  type="text"
                  className="grow input flex items-center border border-rightBtnBorder mr-3"
                  placeholder="Enter your email"
                />
                <button className="btn px-6 py-2 font-bold text-black rounded-lg border-6 bg-gradient-to-r from-leftBtnGradient to-rightBtnGradient">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeFooter;
