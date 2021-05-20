import React, { useState } from "react";
import "./GetInTouch.css";

const GetInTouch = () => {

  const Swal = require("sweetalert2");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    e.preventDefault();
    console.log(email, phone, message, sender);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("sender", sender);
    formData.append("phone", phone);
    formData.append("message", message);
   
    let getToken = JSON.parse(localStorage.getItem("currentUser"));
    let token = getToken.token;
    let result = await fetch(
      `https://just-original.herokuapp.com/api/v1/messages`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );

    if(result.status === 201) {
        Swal.fire({
            title: "Success!",
            text: "Message Sent",
            icon: "success",
            confirmButtonText: "Continue",
          }).then(() => {
            window.location.reload();
          })
    }
  

  }

  return (
    <>
      <section className="get-in-touch-container">
        <article className="get-in-touch-text">
          <span></span>
          <h2>Get In Touch</h2>
          <p>
            For more inquiries, get in touch with us so that we could answer all
            your questions. We will get back to you within 24 hours.
          </p>
        </article>
        <form className="get-in-touch-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="sender"
              value={sender}
              onChange={({ target }) => setSender(target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </div>
          {isLoading ? <button>Sending...</button> : <button>Send</button>}
        </form>
      </section>
    </>
  );
};

export { GetInTouch };
