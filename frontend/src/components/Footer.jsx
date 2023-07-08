import { Button } from "@chakra-ui/react";
import "./Navbar.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        className="mt-5 px-5 py-5 "
        style={{
          zIndex: "9",
          marginTop: "auto",
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
            <h3 className="text-white fast">{t("footer.fast")}</h3>
            <h2 className="fw-bold text-white">{t("footer.contact")}</h2>
            <Link to="/contact">
              <h6 className="text-white">{t("footer.services")}</h6>
            </Link>
            <Link to="/contact">
              <h6 className="text-white">{t("footer.questions")}</h6>
            </Link>
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
                {t("footer.reach_out")}
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
