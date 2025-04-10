import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function LiveChart({ data }) {
  return (
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}

export default LiveChart;
