import React from "react";
function Controls(prop) {
  const invokeTimer = (
    <div className="d-grid gap-2 mt-3  text-6xl font-bold flex flex-wrap justify-center cursor-pointer ">
      <div className="btn btn-danger border-2 p-3" onClick={prop.initWatch}>
        Старт
      </div>
    </div>
  );
  const activeTimer = (
    <div className="d-grid gap-2 mt-3 text-6xl font-bold flex flex-wrap justify-center cursor-pointer">
      <div className="btn border-2 p-3" onClick={prop.initReset}>
        Cтоп
      </div>

      <div className="btn btn-success  border-2 p-3 " onClick={prop.initResume}>
        {prop.pause ? "Возобновить" : "Пауза"}
      </div>
    </div>
  );
  return (
    <div>
      <div>{prop.active ? activeTimer : invokeTimer}</div>
    </div>
  );
}
export default Controls;
