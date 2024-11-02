import Cicon from "/src/assets/coin.svg";
import Logo from "/src/assets/logo.png";

const Header = ({ balance }) => {
  return (
    <section className="sticky top-0 z-20 backdrop-blur-md bg-lightWhite">
      <div className="w-11/12 md:w-3/4 mx-auto font-Sora">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-25 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Teams</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
              </ul>
            </div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar-end">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Teams</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
              </ul>
            </div>
            <a className="btn text-coinColor font-bold border border-rightBtnBorder  bg-transparent hover:bg-transparent text-lg">
              <span id="balance">{balance}</span>
              Coin <img src={Cicon} alt="Coin" />
            </a>
          </div>
        </div>

        {/* Hero Banner Section */}
        {/* <HeroBanner /> */}
      </div>
    </section>
  );
};

export default Header;
