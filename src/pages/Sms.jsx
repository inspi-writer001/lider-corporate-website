import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from '../firebase/firebase';
import axios from 'axios';

function Sms() {
  useEffect(() => {
    getDocs(collection(db, 'customers')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      newData.forEach((data) => {
        const today = new Date();
        const unixTime = new Date(data.date);
        if (today == unixTime) {
          console.log('now');
          axios
            .post(
              'https://mail.tribearc.com/api/sms/send_now.php',
              {
                api_key: 'jzCmcoutSpnsFTDGMdJHwARKhLQOga',
                to: data.phone,
                message: data.message,
              },
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
            )
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    });
  }, []);
  return <div>Sms</div>;
}

export default Sms;
