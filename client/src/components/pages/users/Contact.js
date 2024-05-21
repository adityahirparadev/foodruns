// import React from 'react';
import React, { useEffect,useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        console.log(response);
        setBackendData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <h1>Contact Page</h1>
      <h1>Hello</h1>

      <b>
        {backendData.users}
      </b>
    </>
  );
}

export default Contact;
