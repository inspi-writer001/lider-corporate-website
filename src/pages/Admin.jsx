import './Pages.css';
import BlurryBlob from '../components/BlurryBlob';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Admin = () => {
  const { t } = useTranslation();
  const [load, setLoad] = useState(false);
  const handleSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Customer Addedd Successfully ',
      });
    }, 2000);
  };
  return (
    <>
      <Container
        style={{
          display: 'flex',
          marginTop: '20px',
          minHeight: '60vh',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Container>
          <h3 className="text-center">Customer Management</h3>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Form
                className="p-5 mx-auto mt-2 containn"
                style={{
                  backgroundColor: 'rgba(0, 189, 93, 1)',
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t('contact.name')}</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t('contact.phone')}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ex. (+2348138938432)"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t('contact.message')}</Form.Label>
                  <Form.Control as="textarea" rows={3} readOnly />
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
            </Col>
            <Col md={6}>
              <Table
                responsive="lg"
                className="p-5 mx-auto mt-2 containn table-striped"
                style={{
                  backgroundColor: 'rgba(0, 189, 93, 1)',
                }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{t('contact.name')}</th>
                    <th>{t('contact.phone')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{
                      backgroundColor: 'rgba(0, 189, 93, 1)',
                    }}
                  >
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Admin;
