import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/banner-2.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-bold text-dark mb-5 ">
                New Season Arrivals
              </h5>
              <p className="card-text fs-2 d-none text-black d-sm-block ">
                September Mega Flash Sell <br />
                15th - 25th September <br />
                <button
                  link
                  className="mt-4 bg-dark text-light border rounded-2 fs-4 px-2"
                >
                  Shop Now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
