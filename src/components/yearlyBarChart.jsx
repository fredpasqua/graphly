import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./yearlyBarChart.css";
const YearlyBarChart = ( { data } ) => {if (!data || data.length === 0) {
    return <p>No data available</p>; // Debugging message
  }
 const announce = () => {
   alert(
     "This will open a calendar to select beginning and ending dates for the range"
   );
 };
  return (
    <div className="chart">
      <h2>Rental Totals</h2>
      <button onClick={announce} className="dateButton">
        Set Date Range
      </button>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#4CAF50" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export default YearlyBarChart;
