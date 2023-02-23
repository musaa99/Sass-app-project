import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { title: "Operations Department", value: 28.2 },
  { title: "Marketing Department", value: 21.8 },
  { title: "Human Resources Management", value: 17.7 },
  { title: "Technology Department", value: 32.3 },
];
const COLORS = ["#FDC5C5", "#77FF9D", "#F0D46E", "#699CFF"];

export default function ProductivityPieChart() {
  return (
    <PieChart width={188} height={188}>
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
