import './Pages.css';
import BlurryBlob from '../components/BlurryBlob';
import {  Container, Form } from 'react-bootstrap';
import { Button } from '@chakra-ui/react';

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
  return (
    <>
      <div>
        <div className="insurance_body">
          <div className="first_banner">
            <BlurryBlob
              height={90}
              style={{
                position: 'absolute',
                top: '-35rem',
                left: 'auto',
                right: 'auto',
                marginLeft: '0',
                marginRight: '0',
                zIndex: '0 !important',
              }}
            />
          </div>
          <div className="arc_container">
            <div className="top_arc" style={{ top: '10rem' }}></div>
          </div>
          <div className="second_banner">
            <div className="background_ball">
              <div
                className="_low_price"
                style={{
                  marginTop: '9rem',
                  fontSize: '1.8rem',
                  color: 'white',
                }}
              >
                _{' '}
              </div>
              <div
                className="_insurance"
                style={{
                  marginTop: '-11rem',
                  fontSize: '2.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                CONTACT US{' '}
              </div>
            </div>
          </div>
          <Container style={{ zIndex: '999' }}>
            <Form
              className="p-5 mx-auto mt-2"
              style={{
                width: '700px',
                backgroundColor: 'rgba(0, 189, 93, 1)',
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
                backgroundColor={'rgba(0, 189, 93, 1)'}
                className="btn_green text-white"
              >
                Submit
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
