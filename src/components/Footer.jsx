import React from "react";
import { Button } from "@chakra-ui/react";
import "./Navbar.css";

const Footer = () => {
  return (
    <div className="footer_div">
      <div className="footer_inner_container">
        <div className="footer_section1">
          <div className="fast">Fast</div>
          <div className="contact">Contact</div>
          <div className="services">Do you want to use our services?</div>
          <div className="questions"> Do you have additional questions?</div>
        </div>
        <div className="footer_section2">
          <div className="numbers">
            <div className="_one"> + 48 662 969 662</div>
            <div className="_two"></div>
            <div className="_three"></div>
            <div className="_four"></div> + 48 887 770 774 ( Białka Tatrzańska )
          </div>
        </div>
        <div className="footer_section3">
          <div className="reach_button">
            <Button>Reach out to us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
