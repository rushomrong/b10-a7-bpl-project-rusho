import footerLogo from "/src/assets/logo-footer.png";

const Footer = () => {
  return (
    <section className=" bg-footerBg h-auto flex flex-col relative -z-0">
      {/* {main footer section} */}
      <div className="mx-auto justify-center items-center pt-14">
        <img src={footerLogo} alt="" />
      </div>
      <div className="w-11/12 md:w-3/4 mx-auto font-Sora flex justify-between">
        <footer className="footer relative text-base-content p-10">
          <div className="w-[291px]">
            <h6 className="footer-title text-middleGradient">About Us</h6>
            <aside>
              <p className="text-footerText">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </aside>
          </div>
          <nav>
            <h6 className="footer-title  text-white">Quick Links</h6>
            <a className="link link-hover text-footerText">Home</a>
            <a className="link link-hover text-footerText">Services</a>
            <a className="link link-hover text-footerText">About</a>
            <a className="link link-hover text-footerText">Contact</a>
          </nav>
          <form>
            <h6 className="footer-title  text-white">Subscribe</h6>
            <p className="text-footerText">
              Subscribe to our newsletter for the latest updates.
            </p>
            <fieldset className="form-control w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item"
                />
                <button className="btn join-item font-bold text-black bg-gradient-to-r from-leftBtnGradient to-rightBtnGradient">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      <hr className="border border-white" />
      <div className="mx-auto font-Sora">
        <p className="text-white text-[16px] py-5 ">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
