import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Library() {
  return (
    <div className="bg-[black]">
      <section>
        <h1 className="bg-[red]">Library</h1>
        <div>
          <img src={logo} alt="cancel" />
        </div>
        <div>
          <Link to="Faq">Frequently Asked Questions</Link>
          <Link to="/Terms of Use">Terms Of Use</Link>
          <Link to="/Privacy Policy">Privacy Policy</Link>
          <Link to="/about">About Us</Link>
          <Link to="/Pricing">Pricing & Charges</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Review">Reviews</Link>
        </div>
      </section>
    </div>
  );
}

export default Library;
