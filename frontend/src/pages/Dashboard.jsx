import React, { useEffect, useState } from "react";
import "../App.css";
import React from "react";


const Dashboard = () => {

const [transactions, setTransactions] = useState([]);

useEffect(() => {
    axios
      .get("http://localhost:8082/transactions")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the transactions.", error);
      });
  }, []);


  return (
    <>
    <h1>Dashboard</h1>
      <div class="d-flex p-4 justify-content-center">
      <div class="card m-4">
          <div class="card-title">
            <h3>Net Balance</h3>
          </div>
          <div class="card-body">$$$</div>
        </div>
        <div class="card m-4">
          <div class="card-title">
            <h3>Expenses</h3>
          </div>
          <div class="card-body">$$$</div>
        </div>
        <div class="card m-4">
          <div class="card-title">
            <h3>Income</h3>
          </div>
          <div class="card-body">$$$</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
