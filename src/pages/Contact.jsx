import './Pages.css';
import BlurryBlob from '../components/BlurryBlob';
import { Container, Form, Spinner } from 'react-bootstrap';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
  const { t } = useTranslation();
  const [load, setLoad] = useState(false);
  const handleSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      Swal.fire({
        icon: 'success',
        title: 'Thank You',
        text: "We'll Respond to You Shortly",
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
                {t('contact.contact')}{' '}
              </div>
            </div>
          </div>
          <div className="another_div">
            <div className="top_div">
              <div className="left_" style={{ fontSize: '2.5rem' }}>
                {t('contact.why_us')}
              </div>
              <div className="right_">{t('contact.text1')}</div>
            </div>

            <div className="bottom_div">
              <div className="left_">{t('contact.text2')}</div>

              <div className="right_">{t('contact.text3')}</div>
            </div>
          </div>
          <Container style={{ zIndex: '999' }}>
            <Form
              className="p-5 mx-auto mt-2 containn"
              style={{
                width: '700px',
                backgroundColor: 'rgba(0, 189, 93, 1)',
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t('contact.name')}</Form.Label>
                <Form.Control type="email" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t('contact.email')}</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-warning">
                  {t('contact.share')}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t('contact.message')}</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button
                className="btn_green text-white button_color"
                onClick={handleSubmit}
                style={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 189, 93, 1) !important',
                    color: '#1a1a1a',
                  },
                }}
              >
                {!load ? t('contact.submit') : <Spinner />}
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
