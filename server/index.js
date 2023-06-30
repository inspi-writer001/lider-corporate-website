import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
import FormData from 'form-data';
const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.post(
  '/api/send-sms',
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    console.log(req.body);
    console.log(req.body.api_key);

    const body = new FormData();
    body.append('api_key', req.body.api_key);
    body.append('to', req.body.to);
    body.append('message', req.body.message);
    body.append('from', 'Lider');

    axios
      .post('https://mail.tribearc.com/api/sms/send_now.php', body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        console.log(response.data);
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  }
);

app.get(
  '/api/get-sms-unit',
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    const body = new FormData();
    body.append('api_key', 'jzCmcoutSpnsFTDGMdJHwARKhLQOga');

    axios
      .post('https://mail.tribearc.com/api/sms/get_balance.php', body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch((err) => console.log(err));
  }
);

const port = 2000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
