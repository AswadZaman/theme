import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="first-section">
          <img src="/images/Group 1.png" alt="" className="logo" />
          <div className="select">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.91667 2C6.91667 1.86193 6.80474 1.75 6.66667 1.75H2C1.86193 1.75 1.75 1.86193 1.75 2V6.66667C1.75 6.80474 1.86193 6.91667 2 6.91667H6.66667C6.80474 6.91667 6.91667 6.80474 6.91667 6.66667V2Z"
                stroke="white"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.2502 2C14.2502 1.86193 14.1382 1.75 14.0002 1.75H9.3335C9.19542 1.75 9.0835 1.86193 9.0835 2V6.66667C9.0835 6.80474 9.19542 6.91667 9.3335 6.91667H14.0002C14.1382 6.91667 14.2502 6.80474 14.2502 6.66667V2Z"
                stroke="white"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.2502 9.33334C14.2502 9.19527 14.1382 9.08334 14.0002 9.08334H9.3335C9.19542 9.08334 9.0835 9.19527 9.0835 9.33334V14C9.0835 14.1381 9.19542 14.25 9.3335 14.25H14.0002C14.1382 14.25 14.2502 14.1381 14.2502 14V9.33334Z"
                stroke="white"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.91667 9.33334C6.91667 9.19527 6.80474 9.08334 6.66667 9.08334H2C1.86193 9.08334 1.75 9.19527 1.75 9.33334V14C1.75 14.1381 1.86193 14.25 2 14.25H6.66667C6.80474 14.25 6.91667 14.1381 6.91667 14V9.33334Z"
                stroke="white"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <select className="products">
              <option className="products">Products</option>
              <option className="products">Saab</option>
              <option className="products">Mercedes</option>
              <option className="products">Audi</option>
            </select>
          </div>
        </div>
        <div className="navbar-links">
          <p>Ecosystem</p>
          <p>Community</p>
          <p>Blog</p>
          <p>FAQ</p>
          <div className="btn-section">
            <button className="btn-one">Register</button>
            <button className="btn-two">Launch App</button>
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="hero-header">
        <p>
          {" "}
          Welcome to the Era of <strong>Community Capitalism</strong>
        </p>
      </div>
      <div className="hero-tagline">
        <p>
          {" "}
          Kompwnd is creating an economy that works for community wellness and
          self sustainability
        </p>
      </div>

      <div className="hero-btn-section">
        <button className="hero-btn-one">Launch App</button>
        <button className="hero-btn-two">Learn more</button>
      </div>
      <div className="line"></div>
      <div className="second-container">
        <div className="cons">
          <p className="dollar">5K+</p>
          <p className="description">Total Users</p>
        </div>
        <div className="cons">
          <p className="dollar">$1.2M+</p>
          <p className="description">Investment</p>
        </div>
        <div className="cons">
          {" "}
          <p className="dollar">$1.3M+</p>
          <p className="description">Circulating Supply</p>
        </div>
        <div className="cons">
          {" "}
          <p className="dollar">$1.2M+</p>
          <p className="description">Payout</p>
        </div>
        <div className="cons">
          <p className="dollar">$2.2M+</p>
          <p className="description">Burning</p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Home;
