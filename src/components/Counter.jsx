import { useState, useEffect } from 'react';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = null;
    const step = Math.ceil((end - start) / duration * 10); // Calculer le pas pour chaque itération
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
  return (
    <div className='md:flex block md:justify-around justify-center mx-auto prose prose-lg prose-indigo text-white sm:text-2xl md:mt-5 
     md:space-x-10 bg-[#225a65] md:h-[100px] items-center h-[150px]'>
        <div className='relative flex items-center justify-center h-[33px] md:w-48 w-full shadow-gray-400 p-4 group mx-auto'>
            <Counter start={0} end={2055} duration={900} /> <span className='ml-2'>salariés</span> 
        </div>
        <div className='relative flex items-center justify-center h-[33px] md:w-48 w-full shadow-gray-400 p-4 group mx-auto'>
            <Counter start={0} end={374} duration={900} /> <span className='ml-2'>clients</span> 
        </div>
        <div className='relative flex items-center justify-center h-[33px] md:w-[22rem] w-full shadow-gray-400 p-4 group mx-auto'>
            <Counter start={0} end={84.4} duration={15000} /><span className='ml-2'>% de satisfaction client</span> 
        </div>
    </div>
  );
};

export default DataDisplay
