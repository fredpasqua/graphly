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

const YearlyBarChart = ( { data } ) => {if (!data || data.length === 0) {
    return <p>No data available</p>; // Debugging message
  }

  return (
    <div className="w-full h-96 flex flex-col items-center">
      <h2>Total Rentals</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
