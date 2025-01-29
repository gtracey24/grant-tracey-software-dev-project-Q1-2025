import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="dashboard">
            Budget
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="dashboard">
                Dashboard
              </a>
              <a class="nav-link" href="transactions">
                Transactions
              </a>
              <a class="nav-link" href="logout">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
