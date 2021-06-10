import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>
        let's collaborate: contact me <i class="far fa-handshake"></i>
      </h1>
      <form action="mailto: www.hariom03.com@gmail.com">
        <div className=" container row cRow">
          <div className="col-lg-6">
            <div className="c-name">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" required />
            </div>
            <br />
            <div className="c-email">
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="c-text">
              <label htmlFor="text">your word: </label> <br />
              <textarea
                name="text"
                id="text"
                cols="30"
                rows="10"
                required
                placeholder="Your words are like pearls of Diamonds to me"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="c-submit">
          Enter
        </button>
        <button type="reset" className="c-reset btn">
          Clear all
        </button>
      </form>
    </div>
  );
};

export default Contact;
