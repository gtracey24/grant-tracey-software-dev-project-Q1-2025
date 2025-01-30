import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpensesCard = () => {
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
    <div class="card m-5">
      <div class="card-title">
        <h2>Expenses</h2>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                </tr>
            ))}
            {/* <tr>
              <td>05052005</td>
              <td>Walmart</td>
              <td>15.50</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensesCard;
