import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { Container, Form, Spinner } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
  const [load, setLoad] = useState(false);
  const handleSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      Swal.fire({
        icon: "success",
        title: "Thank You",
        text: "We'll Respond to You Shortly"
      });
    }, 2000);
  };
  return (
    <>
      <div>
        <div className="insurance_body">
          <div className="first_banner">
            <BlurryBlob
              height={90}
              style={{
                position: "absolute",
                top: "-35rem",
                left: "auto",
                right: "auto",
                marginLeft: "0",
                marginRight: "0",
                zIndex: "0 !important"
              }}
            />
          </div>
          <div className="arc_container">
            <div className="top_arc" style={{ top: "10rem" }}></div>
          </div>
          <div className="second_banner">
            <div className="background_ball">
              <div
                className="_low_price"
                style={{
                  marginTop: "9rem",
                  fontSize: "1.8rem",
                  color: "white"
                }}
              >
                _{" "}
              </div>
              <div
                className="_insurance"
                style={{
                  marginTop: "-11rem",
                  fontSize: "2.5rem",
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                CONTACT US{" "}
              </div>
            </div>
          </div>
          <div className="another_div">
            <div className="top_div">
              <div className="left_" style={{ fontSize: "2.5rem" }}>
                Why Us?
              </div>
              <div className="right_">
                The „ LIDER ” office offers mediation in the Document of
                vehicles both imported from abroad and purchased in Poland
                together with the necessary fees in all offices.
              </div>
            </div>

            <div className="bottom_div">
              <div className="left_">
                We register all types of vehicles, including passenger cars,
                trucks, specialized cars, agricultural tractors, mopeds,
                motorcycles, trailers, etc.
              </div>

              <div className="right_">
                Comprehensive fees ( Customs Office, Tax Office, Department of
                Communication, document translations, recycling ) and complete
                re-Document of vehicles imported from abroad.
              </div>
            </div>
          </div>
          <Container style={{ zIndex: "999" }}>
            <Form
              className="p-5 mx-auto mt-2 containn"
              style={{
                width: "700px",
                backgroundColor: "rgba(0, 189, 93, 1)"
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control type="email" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We will never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button
                className="btn_green text-white button_color"
                onClick={handleSubmit}
                style={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 189, 93, 1) !important",
                    color: "#1a1a1a"
                  }
                }}
              >
                {!load ? "Submit" : <Spinner />}
              </Button>
            </Form>
          </Container>
          {/* <Wrapper apiKey={"YOUR_API_KEY"} render={render}></Wrapper> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
