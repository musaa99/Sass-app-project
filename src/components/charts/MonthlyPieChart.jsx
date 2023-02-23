import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { title: "One", value: 25 },
  { title: "Two", value: 20 },
  { title: "Three", value: 15 },
  { title: "Four", value: 40 },
];
const COLORS = ["#f97316", "#22c55e", "#facc15", "#3b82f6"];

export default function MonthlyPieChart() {
  return (
    <PieChart width={187} height={187}>
      <Pie
        data={data}
        cx={90}
        cy={90}
        innerRadius={50}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
