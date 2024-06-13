import { useEffect, useState } from "react";

function Circles() {
  const [currentLight, setCurrentLight] = useState("red");
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    let interval;
    const lights = [
      { color: "red", time: 5 },
      { color: "green", time: 3 },
      { color: "yellow", time: 2 },
    ];
    
    let index = 0;

    const changeLight = () => {
      setCurrentLight(lights[index].color);
      setTimer(lights[index].time);

      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            index = (index + 1) % lights.length;
            changeLight();
          }
          return prev - 1;
        });
      }, 1000);
    };

    changeLight();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <div className="flex flex-col mt-12 gap-4">
        <div
          style={{ backgroundColor: currentLight === "red" ? "#FF0000" : "gray" }}
          className="w-20 h-20 rounded-full"
        ></div>
        <div
          style={{ backgroundColor: currentLight === "yellow" ? "#FFFF00" : "gray" }}
          className="w-20 h-20 rounded-full"
        ></div>
         <div
          style={{ backgroundColor: currentLight === "green" ? "#008000" : "gray" }}
          className="w-20 h-20 rounded-full"
        ></div>
      </div>
      <div className="mt-4 text-xl">
        Timer: {timer} seconds
      </div>
    </div>
  );
}

export default Circles;
