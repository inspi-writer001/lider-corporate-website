import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from '../firebase/firebase';
import axios from '../api/axios';

function Sms() {
  useEffect(() => {
    getDocs(collection(db, 'customers')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      newData.forEach((data) => {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1; // Months are zero-based, so we add 1
        var day = today.getDate();

        // Format the date as desired (e.g., YYYY-MM-DD)
        var formattedDate =
          year +
          '-' +
          month.toString().padStart(2, '0') +
          '-' +
          day.toString().padStart(2, '0');

        var dbDate = new Date(data.date);

        var dbYear = dbDate.getFullYear();
        var dbMonth = (dbDate.getMonth() + 1).toString().padStart(2, '0');
        var dbDay = dbDate.getDate().toString().padStart(2, '0');

        var dbFormattedDate = dbYear + '-' + dbMonth + '-' + dbDay;

        if (formattedDate == dbFormattedDate) {
          axios.post(
            'api/send-sms',
            {
              api_key: 'jzCmcoutSpnsFTDGMdJHwARKhLQOga',
              to: data.phone,
              message: data.message,
            },
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );
        }
      });
    });
  }, []);
  return <div>Sms</div>;
}

export default Sms;
