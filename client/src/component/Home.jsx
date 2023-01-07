import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Home = () => {
  const [total, setTotal] = useState("");
  // const [show, setShow] = useState();

  let setData, setData1, setShow;
  // var requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  // };

  // const fetchData = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const fetchData = () => {
    fetch("http://localhost:8000/get", requestOptions)
      .then((response) => response.json())
      .then((result) => setTotal(result))
      .catch((error) => console.log("error", error));
    console.log(total);
    setData = JSON.stringify(total);
    setData1 = JSON.parse(setData);
    console.log(setData);
    console.log(setData1);
    setShow = setData1.result;
    console.log(setShow);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = () => {
  //   fetch(`http://localhost:8000/get`)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       // setData(actualData);
  //       setTotal(actualData);
  //       console.log(total);

  //       // // setFetchedData(JSON.parse(JSON.stringify(actualData)));
  //       // // setFetchedData(JSON.parse(actualData.data));
  //       // // setFetchedData(actualData.data);

  //       // domaindata = JSON.parse(JSON.stringify(actualData.data));

  //       // // domainData = domaindata.data.results;
  //       // setDomainData(domaindata);
  //       // console.log(domainData.domain);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <Navbar />
      <section
        style={{
          backgroundColor: "royalblue",
          width: "100%",
          height: "90vh",
        }}
      >
        <div className="box">
          <tbody>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
            {setShow.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </section>
    </>
  );
};

export default Home;
