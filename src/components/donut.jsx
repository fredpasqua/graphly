import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const DonutGraph = ({ value, total }) => {
  const percentage = (value / total) * 100;
  const data = [
    { name: "Value", value },
    { name: "Remaining", value: total - value },
  ];

  const COLORS = ["#4CAF50", "#E0E0E0"];

  return (
    <div className="flex flex-col items-center">
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx={50}
          cy={50}
          innerRadius={30}
          outerRadius={40}
          startAngle={45}
          endAngle={450}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="mt-2 text-xl font-semibold">{percentage.toFixed(1)}%</div>
    </div>
  );
};

export default DonutGraph;
