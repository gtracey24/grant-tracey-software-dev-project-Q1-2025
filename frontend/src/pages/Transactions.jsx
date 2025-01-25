import React, { useEffect, useState, Form } from "react";
import axios from "axios";

const Transactions = () => {


  return (
    <>
    <h1>Transactions</h1>
    <div class="card m-2">
    <form>
     <div class="form-group">
        <label for="newTransaction" class="card-title">
        <h4>New Transaction</h4>
        </label>
        <input type="text" class="form-control" id="newTransactionDesc" placeholder="Enter Description" />
        <input type="date" class="form-control" id="newTransactionDate" placeholder="Enter Date" />
        <input type="number" class="form-control" id="newTransactionAmount" placeholder="Enter Amount" />
     </div>
    </form>
    </div>
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
