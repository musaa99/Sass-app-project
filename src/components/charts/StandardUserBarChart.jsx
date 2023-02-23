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
    name: "Page A",
    Fingerprint: 4000,
    "RFID Card": 2400,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "Page B",
    Fingerprint: 3000,
    "RFID Card": 1398,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "Page C",
    Fingerprint: 2000,
    "RFID Card": 9800,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "Page D",
    Fingerprint: 2780,
    "RFID Card": 3908,
    PIN: 5000,
    "Mobile App": 7000,
  },
  {
    name: "Page E",
    Fingerprint: 1890,
    "RFID Card": 4800,
    PIN: 5000,
    "Mobile App": 7000,
  },
];

export default function StandardUserBarChart() {
  const legendPos = {
    left: 20,
    bottom: 0,
    fontSize: 14,
  };
  return (
    <BarChart
      width={440}
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
      <Legend wrapperStyle={legendPos} layout="vertical" iconType="circle" />
      <Bar dataKey="Fingerprint" fill="#f97316" />
      <Bar dataKey="RFID Card" fill="#22c55e" />
      <Bar dataKey="PIN" fill="#facc15" />
      <Bar dataKey="Mobile App" fill="#3b82f6" />
    </BarChart>
  );
}
