import { useState, useEffect } from "react";
import { GetPadType } from "../../components/GetPadType";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(2 * 60);
  const [isCounting, setIsCounting] = useState(false);
  let minutes = GetPadType(Math.floor(timeLeft / 60));
  let seconds = GetPadType(timeLeft - minutes * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) {
      setIsCounting(false);
    }

    return () => clearInterval(interval);
  }, [timeLeft, isCounting]);
  function handleStart() {
    setIsCounting(true);
    if (timeLeft === 0) {
      setIsCounting(false);
    }
  }
  function handleStop() {
    setIsCounting(false);
  }
  function handleReset() {
    setIsCounting(false);
    setTimeLeft(2 * 60);
  }
  function handleState() {
    setTimeLeft(timeLeft + 30);
  }
  function StateMinus() {
    if (timeLeft >= 30) {
      setTimeLeft(timeLeft - 30);
    }
    if (timeLeft <= 0) {
      return;
    }
  }
  return (
    <div>
      <div className="timer display-1 text-7xl  font-bold flex justify-center">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons  d-grid gap-2 mt-3 text-3xl font-bold flex flex-wrap justify-center cursor-pointer">
        {isCounting ? (
          <button className="border-2 p-3" onClick={handleStop}>
            Пауза
          </button>
        ) : (
          <button className="border-2 p-3" onClick={handleStart}>
            Старт
          </button>
        )}

        <button className=" border-2 p-2" onClick={handleReset}>
          Возобновить
        </button>
        <button className="border-2 p-3" onClick={handleState}>
          Добавить 30 сек
        </button>
        <button className="border-2 p-3" onClick={StateMinus}>
          Убрать 30 сек
        </button>
      </div>
    </div>
  );
}
