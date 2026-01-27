import { useMemo } from "react";

export const useStar = ({ duration,size, quantity }) => {
  const stars = useMemo(() => {
    const layer = [];
    
    const colorOptions = ['blue', 'white', 'orange', 'yellow', 'red']; 

    for (let index = 0; index < quantity; index++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const transparency = Math.random();

      const colors = {
        blue: `rgba(83, 192, 224, ${transparency})`,
        white: `rgba(255, 255, 255, ${transparency})`, 
        orange: `rgba(207, 100, 19, ${transparency})`, 
        yellow: `rgba(242, 242, 24, ${transparency})`, 
        red: `rgba(207, 19, 19, ${transparency})`, 
      };

      const chooseColorKey = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      const finalColor = colors[chooseColorKey];

      layer.push(`${x}vw ${y}vh 0 ${finalColor}, ${x}vw ${y + 100}vh 0 ${finalColor}`);
    }

    return { 
      '--duration': `${duration}s`, 
      '--size': `${size}px`, 
      boxShadow: layer.join(",") 
    };
    
  // Importante: Agregamos 'quantity' y 'size' al array de dependencias
  }, [quantity, size]); 

  return stars;
};