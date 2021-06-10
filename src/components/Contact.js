import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>this is contact me page</h1>
      <form action="mailto: www.hariom03.com@gmail.com">
        <label htmlFor="name">you name: </label>
        <input type="text" name="name" id="name" /> <br />
        <label htmlFor="email">email: </label>
        <input type="email" name="email" id="email" /> <br />
        <label htmlFor="textarea">your word</label>
        <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Contact;
