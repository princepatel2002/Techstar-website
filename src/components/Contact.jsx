import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="your name" />

              <label>email</label>
              <input type="email" required placeholder="abc@gmail.com" />

              <label>message</label>
              <input
                type="text"
                required
                placeholder="Tell us ablut your query..."
              />
            </div>
            <button type="submit">send</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
