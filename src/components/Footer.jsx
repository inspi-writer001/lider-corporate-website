import { Button } from "@chakra-ui/react";
import "./Navbar.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container
        className="mt-5 px-5 py-5 "
        style={{
          zIndex: "9",
          backgroundColor: "#1a1a1a",
          minWidth: "100vw",
          boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          "-webkit-backdrop-filter": "blur(5px)",
          fontFamily: "'Orbitron', sans-serif"
        }}
      >
        <Row
          xs={2}
          md={3}
          lg={3}
          className="mx-auto  justify-content-md-center"
        >
          <Col className="my-auto">
            {" "}
            <h3 className="text-white fast">Fast</h3>
            <h2 className="fw-bold text-white">CONTACT</h2>
            <h6 className="text-white">Do you want to use our services?</h6>
            <h6 className="text-white">Do you have additional questions?</h6>
          </Col>
          <Col className="my-auto">
            <h6 className="text-white">+ 48 662 969 662 ( Nowy Targ )</h6>
            <h6 className="text-white">
              + 48 887 770 774 ( Białka Tatrzańska )
            </h6>
          </Col>
          <Col lg="2" className="my-auto ">
            <Link to="/contact">
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"rgb(0,156,224)"}
                href={"#"}
                _hover={{
                  bg: "rgb(17,48,65)"
                }}
              >
                Reach out to us
              </Button>
            </Link>
            {/* <Button
              className="btn_green text-white button_color"
              style={{ width: "100%" }}
            >
              Reach out to us
            </Button> */}
          </Col>
        </Row>
      </Container>

      {/* <div className="footer_div">
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
                backgroundColor={'rgba(0, 189, 93, 1)'}
                className="btn_green"
              >
                Reach out to us
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
