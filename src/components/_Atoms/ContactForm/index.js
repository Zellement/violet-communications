import React from "react";
import SimpleReactValidator from "simple-react-validator";
import { navigate } from "gatsby-link";
import * as styles from "./contact-form.module.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      business_name: "",
      business_overview: "",
      enquiry: "",
    };
    this.validator = new SimpleReactValidator({
      className:
        "absolute z-20 top-0 mt-0 mr-2 right-0 text-xl text-red-800 animate-pulse",
      messages: {
        default: "*",
      },
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    if (this.validator.allValid()) {
      const form = e.target;
      this.setState({
        submitting: true,
      });

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch((error) => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    e.preventDefault();
  };

  render() {
    return (
      <form
        className={styles.form}
        name="contact-form"
        method="post"
        action="/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        {/* <p hidden>
                Don't fill this out:{" "} */}
        <label className="hidden">
          Do not fill this in
          <input name="bot-field" />
        </label>
        {/* </p> */}
        <label className="relative flex w-full">
          <input
            placeholder="* Your name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          {this.validator.message("name", this.state.name, "required")}
        </label>
        <label className="relative flex w-full">
          <input
            placeholder="* Your email"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
          {this.validator.message("email", this.state.email, "required|email")}
        </label>
        <label className="relative flex w-full">
          <input
            placeholder="* Business name"
            type="text"
            name="business_name"
            onChange={this.handleChange}
          />
          {this.validator.message(
            "business_name",
            this.state.business_name,
            "required"
          )}
        </label>
        <label className="relative flex w-full">
          <input
            placeholder="* Business overview"
            type="text"
            name="business_overview"
            onChange={this.handleChange}
          />
          {this.validator.message(
            "business_overview",
            this.state.business_overview,
            "required"
          )}
        </label>
        <label className="relative flex w-full">
          <textarea
            placeholder="* Enquiry"
            name="enquiry"
            onChange={this.handleChange}
          ></textarea>
          {this.validator.message("enquiry", this.state.enquiry, "required")}
        </label>
        <span className="w-full">
          <button
            className="inline-flex px-5 py-3 pb-2 text-sm uppercase bg-lime-500 text-violet-700 font-header "
            type="submit"
          >
            Start enquiry
          </button>
        </span>
      </form>
    );
  }
}
