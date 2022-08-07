import React from "react";
import classes from "../../styles/form.module.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c44i26b",
        "template_i0gn7vu",
        form.current,
        "udaHVqwp0pTMLgf0M"
      )
      .then(
        (result) => {
          console.log(result.sucses);
        },
        (error) => {
          console.log(error.error);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={`${classes.form}`}>
      <input
        className={`${classes.input}`}
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
      />
      <input
        className={`${classes.input}`}
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
      <textarea
        className={`${classes.textarea}`}
        name="message"
        rows="7"
        placeholder="Your Message"
        required
      ></textarea>
      <button className={`${classes.btn}`} type="submit" value="Send">
        Send Message
      </button>
    </form>
  );
};

export default Form;
