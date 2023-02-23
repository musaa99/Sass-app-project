import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "New York",
    Fingerprint: 4000,
    "RFID Card": 2400,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "Abuja",
    Fingerprint: 3000,
    "RFID Card": 1398,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "London",
    Fingerprint: 2000,
    "RFID Card": 9800,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "Lagos",
    Fingerprint: 2780,
    "RFID Card": 3908,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "Paris",
    Fingerprint: 1890,
    "RFID Card": 4800,
    PIN: 5000,
    "Mobile App": 7000,
  },
];

export default function SuperAdminBarChart() {
  const legendPos = {
    left: 20,
    bottom: 0,
  };
  return (
    <BarChart
      width={600}
      height={300}
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
      <Bar dataKey="Fingerprint" fill="#f97316" />
      <Bar dataKey="RFID Card" fill="#22c55e" />
      <Bar dataKey="PIN" fill="#facc15" />
      <Bar dataKey="Mobile App" fill="#3b82f6" />
    </BarChart>
  );
}
