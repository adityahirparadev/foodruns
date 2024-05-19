import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
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
    <div>
      <h1>Hello</h1>

      <b>
        {backendData.users}
      </b>
    </div>
  );
}

export default App;
