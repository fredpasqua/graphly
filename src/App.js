import React from "react";
import DonutGraph from "./components/donut";
import YearlyBarChart from "./components/yearlyBarChart";
import RotatingBanner from "./components/rotatingBanner";
import "./App.css";

import testimage2 from "./Images/testimage1.jpg";
import testimage3 from "./Images/testimage2.jpg";
import testimage4 from "./Images/testimage3.jpg";
import easyrentlogo from "./Images/erlogo.png";
const App = () => {
  const data = {
    value: 80, // The part you want to highlight
    total: 100, // The total amount
  };
  const data2 = {
    value: 30, // The part you want to highlight
    total: 100, // The total amount
  };
  const data3 = {
    value: 87, // The part you want to highlight
    total: 100, // The total amount
  };

  const images = [testimage2, testimage3, testimage4];

  const dataBarChart = [
    { year: "2020", total: 150 },
    { year: "2021", total: 180 },
    { year: "2022", total: 210 },
    { year: "2023", total: 300 },
    { year: "2024", total: 450 },
  ];

  return (
    <div className="homepage">
      <section className="pageTitle">
        <img src={easyrentlogo} alt="easyrentlogo" className="ezlogo"/>
      </section>
      <div className="totalRentalsSection">
        <div className="barChart">
          <YearlyBarChart data={dataBarChart} />
        </div>
        <div className="imageBanner">
          <RotatingBanner images={images} />
        </div>
      </div>
      <section className="metrics">
        <h2>Key Metrics</h2>
        <div className="graphsContainer">
          <div className="donut">
            <div className="title">
              <h2>Rentals YOY</h2>
            </div>
            <DonutGraph value={data.value} total={data.total} />

            <p className="description">
              *This metric helps you track your performance during the rental
              season and compares last year's total rentals to the current year.
            </p>
          </div>
          <div className="donut">
            <div className="title">
              {" "}
              <h2>Rental Retention</h2>
            </div>

            <DonutGraph value={data2.value} total={data2.total} />
            <p className="description">
              *Users who have continued
              beyond the first year of rental. This is an important metric for
              maximizing your monthly commission.
            </p>
          </div>

          <div className="donut">
            <div className="title">
              <h2>Damage Waiver</h2>
            </div>
            <DonutGraph value={data3.value} total={data3.total} />
            <p className="description">
              *Percent of all renters that elected to carry Damage Waiver
              Coverage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
