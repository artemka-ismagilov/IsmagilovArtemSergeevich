import { useState, useEffect } from "react";
import "../index.css";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const newDate = `${date.getUTCDate()}/${
    date.getUTCMonth() + 1 
  }/${date.getUTCFullYear()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono">
      <h1 className="text-4xl flex justify-center  ">
        Точное московское время:
      </h1>
      <h1 className="text-9xl  font-black flex justify-center ">
        {time.toLocaleTimeString()}{" "}
      </h1>
      <h1 className="text-4xl  font-sans flex justify-center">{newDate}</h1>
    </div>
  );
}
