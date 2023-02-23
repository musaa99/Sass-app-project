import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "New York",
    "Operations Department": 4000,
    "Marketing Department": 2400,
    "Human Resources Department": 5000,
    "Technology Department": 7000,
  },
  {
    name: "Abuja",
    "Operations Department": 3000,
    "Marketing Department": 1398,
    "Human Resources Department": 5000,
    "Technology Department": 7000,
  },
  {
    name: "London",
    "Operations Department": 2000,
    "Marketing Department": 9800,
    "Human Resources Department": 5000,
    "Technology Department": 7000,
  },
  {
    name: "Lagos",
    "Operations Department": 2780,
    "Marketing Department": 3908,
    "Human Resources Department": 5000,
    "Technology Department": 7000,
  },
  {
    name: "Paris",
    "Operations Department": 1890,
    "Marketing Department": 4800,
    "Human Resources Department": 5000,
    "Technology Department": 7000,
  },
];

export default function ProductivityBarChart() {
  const legendPos = {
    left: 20,
    bottom: 0,
  };
  return (
    <BarChart
      width={734}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        // left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip cursor={false} />
      <Legend wrapperStyle={legendPos} iconType="circle" />
      <Bar dataKey="Operations Department" fill="#f97316" />
      <Bar dataKey="Marketing Department" fill="#22c55e" />
      <Bar dataKey="Human Resources Department" fill="#facc15" />
      <Bar dataKey="Technology Department" fill="#3b82f6" />
    </BarChart>
  );
}
