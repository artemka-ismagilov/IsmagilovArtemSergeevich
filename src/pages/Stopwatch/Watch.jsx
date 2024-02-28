import React from "react";
function Watch(t) {
  return (
    <h2 className="display-1 text-7xl  font-bold flex justify-center">
      <span>{("0" + Math.floor((t.time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((t.time / 1000) % 60)).slice(-2)}.</span>
      <span>{("0" + ((t.time / 10) % 100)).slice(-2)}</span>
    </h2>
  );
}
export default Watch;
