import { useState, useEffect, useRef } from "react";
import React from "react";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = null;
    const step = Math.ceil(((end - start) / duration) * 10); // Calculer le pas pour chaque itération
    const countUp = () => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        if (newCount >= end) {
          clearInterval(timer);
          return end;
        }
        return newCount;
      });
    };
    timer = setInterval(countUp, 50); // Définir l'intervalle de temps
    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span>{count.toLocaleString()}</span>; // Formatter les données avec des séparateurs de milliers
};

const DataDisplay = () => {
  //the function below allows the counter to start when visible on screen
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="xl:flex block md:justify-around justify-center mx-auto prose prose-lg prose-indigo text-white text-2xl md:text-4xl md:mt-5
     md:space-x-10 bg-[#225a65] xl:h-[200px] items-center"
    >
      <div
        className="relative flex items-center justify-center h-auto md:w-48 w-auto shadow-gray-400 p-4 group mx-auto"
        ref={ref}
      >
        <span className="ml-2">En 2022</span>
      </div>
      <div
        className="relative flex items-center justify-center h-auto md:w-48 w-full shadow-gray-400 p-4 group mx-auto"
        ref={ref}
      >
        {isVisible && <Counter start={0} end={2055} duration={900} />}{" "}
        <span className="ml-2">salariés</span>
      </div>
      <div className="relative flex items-center justify-center h-auto md:w-48 w-full shadow-gray-400 p-4 group mx-auto">
        {isVisible && <Counter start={0} end={374} duration={900} />}{" "}
        <span className="ml-2">clients</span>
      </div>
      <div className="relative flex items-center justify-center h-auto md:w-[32rem] w-full shadow-gray-400 p-4 group mx-auto">
        {isVisible && <Counter start={0} end={84.4} duration={15000} />}{" "}
        <span className="ml-2">% de satisfaction client</span>
      </div>
    </div>
  );
};

export default DataDisplay;
