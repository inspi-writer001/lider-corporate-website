import React from "react";
import { Button } from "@chakra-ui/react";
import "./Navbar.css";

const Footer = () => {
  return (
    <div className="footer_div">
      <div className="footer_inner_container">
        <div className="footer_section_one">
          <div className="fast">Fast</div>
          <div className="contact">Contact</div>
          <div className="services">Do you want to use our services?</div>
          <div className="questions"> Do you have additional questions?</div>
        </div>
        <div className="footer_section_two">
          <div className="numbers">
            <div className="_one"> + 48 662 969 662</div>
            <div className="_two">( New Market )</div>
            <div className="_three">+ 48 887 770 774 </div>
            <div className="_four"></div> ( Białka Tatrzańska )
          </div>
        </div>
        <div className="footer_section_three">
          <div className="reach_button">
            <Button
              backgroundColor={"rgba(0, 189, 93, 1)"}
              className="btn_green"
            >
              Reach out to us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
