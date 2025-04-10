import { useEffect, useState } from "react";
import LiveChart from "./LiveChart";
import StatusBox from "./StatusBox";
import axios from "axios";

function App() {
  const [telemetry, setTelemetry] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await axios.get("https://ocpp-dashboard.onrender.com");
      setTelemetry(res.data);
      setStatus("Charging");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <StatusBox status={status} />
      <LiveChart data={telemetry} />
    </div>
  );
}

export default App;
