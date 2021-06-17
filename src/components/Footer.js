import React from "react";

const Footer = () => {
  //   const bttBtn = ()=>{
  //     document.scrollingElement(

  //     )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="footer__message">
            <h3>
              Made with 💖 by <a href="https://twitter.com/Hari_om_333">me</a>
            </h3>
          </div>
          {/* <div className="footer__backToTop">
            <button onClick={scrollToTop}>back to top</button>
          </div>
          <div className="footer__contact">
            <a href="/Contact">
              <p>Contact me</p>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Footer;
