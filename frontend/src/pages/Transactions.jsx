import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";
import ExpensesCard from "../components/ExpensesCard";

const Transactions = () => {

  const [formData, setFormData] = useState({
    amount: 0,
    description: "",
    date: 19052005
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {

    try {
      const response = await axios.post("http://localhost:8082/transactions", 
        formData);
        console.log('Response: ', response.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  return (
    <>
      <h1>Transactions</h1>
      <div class="d-flex align-items-center justify-content-center p-4">
        <div class="card text-bg-dark m-2">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="newTransaction" class="card-title">
                <h4>New Transaction</h4>
              </label>
              <select class="form-select mb-3 row" aria-label="Default select">
                <option selected>Type</option>
                <option value="1">Expense</option>
                <option value="2">Income</option>
              </select>
              <input
                type="text"
                class="form-control mb-3 row"
                name= "description"
                value={data.description}
                onChange={handleChange}
                placeholder="Enter Description"
              />
              <input
                type="date"
                class="form-control mb-3 row"
                name= "date"
                value={data.date}
                onChange={handleChange}
                placeholder="Enter Date"
              />
              <input
                type="number"
                class="form-control mb-3 row"
                name= "amount"
                value={data.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Add Transaction
            </button>
          </form>
        </div>
        <div class="d-flex p-2">
          <ExpensesCard />
          <div class="card m-5">
            <div class="card-title">
              <h2>Income</h2>
            </div>
            <div class="card-body">$$$</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
