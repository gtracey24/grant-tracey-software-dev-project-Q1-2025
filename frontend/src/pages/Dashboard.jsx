import "../App.css";
import React from "react";

const Dashboard = () => {
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
