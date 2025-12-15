import { useState, useEffect } from "react";
import { Color } from "./Colors";

export function Home() {
  let [auto, setAuto] = useState(false);
  let [color, setColor] = useState("red");
  let [showPurple, setShowPurple] = useState(false);
  let colors = ["red", "yellow", "green", "purple"];

  useEffect(() => {
    if (auto) {
      let tiempo;
      let n = !showPurple ? colors.length - 1 : colors.length;
      for (let index = 0; index < n; index++) {
        if (index === n - 1) {
          tiempo = setTimeout(() => setColor(colors[0]), 1000);
          break;
        } else if (color === colors[index]) {
          tiempo = setTimeout(() => setColor(colors[index + 1]), 5000);
          break;
        }
      }
      return () => {
        clearTimeout(tiempo);
      };
    }
  }, [color, auto]);

  return (
    <div className="container">
      <div>
        <div className="pole"></div>
        <div className="colors">
          <Color
            color={
              color === "red"
                ? "rgba(233, 11, 11, 0.88)"
                : " rgba(131, 16, 16, 0.88)"
            }
            onClick={() => {
              setColor("red");
            }}
            selected={color === "red" ? "selected" : ""}
            show={true}
          />

          <Color
            color={
              color === "yellow"
                ? " rgba(244, 248, 7, 1)"
                : " rgba(178, 180, 22, 0.88)"
            }
            onClick={() => {
              setColor("yellow");
            }}
            selected={color === "yellow" ? "selected" : ""}
            show={true}
          />

          <Color
            color={
              color === "green"
                ? "rgba(15, 221, 43, 0.88)"
                : "rgba(29, 143, 44, 0.88)"
            }
            onClick={() => {
              setColor("green");
            }}
            selected={color === "green" ? "selected" : ""}
            show={true}
          />
          <Color
            color={
              color === "purple"
                ? "rgba(121, 15, 221, 0.88)"
                : "rgba(82, 29, 143, 0.88)"
            }
            onClick={() => {
              setColor("purple");
            }}
            selected={color === "purple" ? "selected" : ""}
            show={showPurple}
          />
        </div>
      </div>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            setAuto(!auto);
          }}
        >
          {auto ? "Apagar" : "Encender"}
        </button>
        <button
          className="btn"
          onClick={() => {
            setShowPurple(!showPurple);
          }}
        >
          Agregar Color
        </button>
      </div>
    </div>
  );
}
