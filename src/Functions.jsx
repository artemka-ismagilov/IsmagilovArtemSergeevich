import { useState } from "react";
const [timeLeft, setTimeLeft] = useState(2 * 60);
const [isCounting, setIsCounting] = useState(false);

export function handleStart() {
  setIsCounting(true);
  if (timeLeft === 0) {
    setIsCounting(false);
  }
}
export function handleStop() {
  setIsCounting(false);
}
export function handleReset() {
  setIsCounting(false);
  setTimeLeft(2 * 60);
}
export function handleState() {
  if (timeLeft > 0) {
    setTimeLeft(timeLeft + 30);
  }
}
export function StateMinus() {
  if (timeLeft >= 30) {
    setTimeLeft(timeLeft - 30);
  }
}
