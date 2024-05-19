import React, { useEffect,useState } from 'react';
// import React from 'react';
import axios from 'axios';

function Home() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    axios.get('/api')
    .then(response => {
      console.log("::::::::::::", response.data);
      setBackendData(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, [])

  return (
    <>
      <h1>Home Page</h1>
      <h1>Hello</h1>

      <b>
        {backendData.users}
      </b>
    </>
  );
}

export default Home;
