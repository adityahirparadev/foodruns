// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Home = () => {
//   const naviagate = useNavigate();

//   const [data, setData] = useState("");
//   const [show, setShow] = useState(false)
//   const HomePagenjnsjkdvn = async () => {
//     try {
//       const homeResponseGET = await fetch("/getdata", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
//       console.log("homeResponseGET", homeResponseGET);
//       const jsonHomeData = await homeResponseGET.json();
//       console.log("jsonHomeData", jsonHomeData);
//       const { name } = jsonHomeData;

//       if (homeResponseGET.status === 404) {
//         naviagate("/");
//         setData("");
//         setShow(false)
//       } else {
//         naviagate("/");
//         setData(name);
//         setShow(true)
//       }
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };
//   useEffect(() => {
//     HomePagenjnsjkdvn();
//     console.log("useeffect of Home ");
//   }, [data]);
//   return (
    <div>
      <div className="container-fluid welcome_letter_space">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-12">
            <p className="text-center text-primary fw-bold fs-5">WELCOME </p>
            {/* <h1 className="text-center text-success fw-bold">{data}</h1> */}
            <h1 className="text-center text-capitalize">
              {
                // show ?"We are the Interior Designer": " " 
              }
            </h1>
          </div>
        </div>
      </div>
    </div>
//   );
};

export default Home;
