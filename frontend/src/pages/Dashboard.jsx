import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../App.css";



const Dashboard = () => {

const [expenses, setExpenses] = useState([]);

useEffect(() => {
    axios
      .get("http://localhost:8082/transactions/expenses")
      .then((response) => {
        setExpenses(response.data);
        console.log("Total expenses: ", response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the expenses.", error);
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
          <div class="card-body">${expenses}</div>
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
