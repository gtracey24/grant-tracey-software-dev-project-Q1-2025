import React, { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  return (
    <>
    <h1>Transactions</h1>
    <button type="button" class="btn btn-primary btn-lg btn-block">Add transaction</button>
      <div class="d-flex p-2">
        <div class="card m-5">
          <div class="card-title">
            <h2>Expenses</h2>
          </div>
          <div class="card-body">$$$</div>
        </div>
        <div class="card m-5">
          <div class="card-title">
            <h2>Income</h2>
          </div>
          <div class="card-body">$$$</div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
