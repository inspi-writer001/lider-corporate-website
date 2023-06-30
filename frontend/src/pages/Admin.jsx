import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import {
  Col,
  Container,
  Form,
  FormControl,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import { useRef } from 'react';

import 'react-datetime/css/react-datetime.css';

import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from '../firebase/firebase';
import axios from '../api/axios';

const Admin = () => {
  const [customers, setCustomers] = useState([]);
  const [date, setDate] = useState("");
  const [smsUnit, setSmsUnit] = useState("");

  useEffect(() => {
    getDocs(collection(db, "customers"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setCustomers(newData);
        console.log(customers, newData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('api/get-sms-unit', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        setSmsUnit(response.data);
        console.log('sms', response.data);
      });
  }, []);

  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const submithandler = async (e) => {
    e.preventDefault();
    setLoad(true);

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    try {
      await addDoc(collection(db, 'customers'), {
        name: name,
        phone: phone,
        message: message,
        date: date
      });
      await axios
        .post(
          'api/send-sms',
          {
            api_key: 'jzCmcoutSpnsFTDGMdJHwARKhLQOga',
            to: phone,
            message: message,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((response) => {
          setLoad(false);
          if (
            response.data ==
            'Unable to send sms. You have exhausted your sms unit!'
          ) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.data,
            });
          }

          nameRef.current.value = '';
          phoneRef.current.value = '';
          messageRef.current.value = '';
        });
    } catch (e) {
      setLoad(false);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: e,
      });
    }

    /* .then((response) => {
        setLoad(false);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Customer Addedd Successfully "
        });
      })
      .catch((err) => {
        setLoad(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Could not Send Sms at the Moment"
        });
      }); */

    // Add data to Firestore
  };
  const scheduleMsg = async (e) => {
    e.preventDefault();
    setLoad(true);

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    try {
      const docRef = await addDoc(collection(db, "customers"), {
        name: name,
        phone: phone,
        message: message,
        date: date
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("Customer Added Successfully");
      nameRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
      setShowModal(false);
    } catch (e) {
      setLoad(false);
      console.error("Error adding document: ", e);
      console.error("Error adding data:", e);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not Add Customer "
      });
    }

    // Add data to Firestore
  };

  const { t } = useTranslation();
  const [load, setLoad] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          marginTop: "20px",
          minHeight: "60vh",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <Container>
          <h3 className="text-center">Customer Management</h3>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Form
                onSubmit={submithandler}
                className="p-5 mx-auto mt-2 containn"
                style={{
                  backgroundColor: "rgba(0, 189, 93, 1)"
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("contact.name")}</Form.Label>
                  <Form.Control
                    type="text"
                    ref={nameRef}
                    placeholder="Enter name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("contact.phone")}</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ex. (+2348138938432)"
                    ref={phoneRef}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("contact.message")}</Form.Label>
                  <Form.Control as="textarea" rows={3} ref={messageRef} />
                </Form.Group>
                <small className="text-danger">
                  You have {smsUnit} Sms Unit Remaining{' '}
                </small>

                <Row className="justify-content-start">
                  <Col md={6}>
                    <Button
                      className="btn_green text-white button_color"
                      style={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 189, 93, 1) !important",
                          color: "#1a1a1a"
                        }
                      }}
                      type="submit"
                    >
                      {!load ? t("contact.sendNow") : <Spinner />}
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      className="btn_green text-white"
                      style={{
                        border: "2px solid #fff",
                        "&:hover": {
                          backgroundColor: "rgba(0, 189, 93, 1) !important",
                          color: "#1a1a1a"
                        }
                      }}
                      type="button"
                      onClick={handleShowModal}
                    >
                      {t("contact.schedule")}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={6}>
              <Table
                responsive="lg"
                className="p-5 mx-auto mt-2 containn table-striped"
                style={{
                  backgroundColor: "rgba(0, 189, 93, 1)"
                }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{t("contact.name")}</th>
                    <th>{t("contact.phone")}</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{customer?.name}</td>
                        <td>{customer?.phone}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>

      <Modal
        show={showModal}
        style={{ marginTop: "300px" }}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Schedule Date and Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your date and time input fields here */}
          <Form>
            <Form.Group>
              <Form.Label>Date and Time</Form.Label>
              <Form.Control
                type="date"
                value={date}
                id="dateInput"
                className="col-6"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "red" }} onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            className="btn_green text-white button_color"
            onClick={scheduleMsg}
          >
            Schedule
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Admin;
