import "./Dark_light.css";
import "../../index.css";
import { useState } from "react";

const Toggle = () => {
  const [switcher, setSwitcher] = useState(false);
  let number = 0;
  let toggleFunction = () => {
    number++;
    if (number % 2 !== 0) {
      document.documentElement.style.setProperty("--color", "#19747E");
      document.documentElement.style.setProperty("--color2", "#23283e");
      document.documentElement.style.setProperty("--color3", "#19747E");
      document.documentElement.style.setProperty("--color4", "#D1E8E2");
      document.documentElement.style.setProperty("--color5", "#F8FDFF");

      document.querySelector("path").style.fill = "#19747E";
    } else {
      document.documentElement.style.setProperty("--color", "#90a0d9");
      document.documentElement.style.setProperty("--color2", "#cdcdff");
      document.documentElement.style.setProperty("--color3", "#bdbddd");
      document.documentElement.style.setProperty("--color4", "#2a2f4c");
      document.documentElement.style.setProperty("--color5", "#23283e");
      document.querySelector("path").style.fill = "#90A0DA";
    }
    return;
  };

  return (
    <svg
      onClick={toggleFunction}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 0.53C3.71 1.68 2.5 3.71 2.5 6.03C2.5 8.35 3.71 10.38 5.53 11.53C2.46 11.53 0 9.07 0 6.03C0 4.57131 0.579463 3.17236 1.61091 2.14091C2.64236 1.10946 4.04131 0.53 5.5 0.53ZM17.07 2.03L18.5 3.46L2.93 19.03L1.5 17.6L17.07 2.03ZM10.89 4.46L9.41 3.53L7.97 4.53L8.39 2.83L7 1.77L8.75 1.65L9.33 0L10 1.63L11.73 1.66L10.38 2.79L10.89 4.46ZM7.59 8.07L6.43 7.34L5.31 8.12L5.65 6.8L4.56 5.97L5.92 5.88L6.37 4.59L6.88 5.86L8.24 5.89L7.19 6.76L7.59 8.07ZM17 12.03C17 13.4887 16.4205 14.8876 15.3891 15.9191C14.3576 16.9505 12.9587 17.53 11.5 17.53C10.28 17.53 9.15 17.13 8.24 16.46L15.93 8.77C16.6 9.68 17 10.81 17 12.03ZM12.6 18.61L15.37 17.46L15.13 20.81L12.6 18.61ZM16.93 15.91L18.08 13.14L20.28 15.68L16.93 15.91ZM18.08 10.95L16.94 8.17L20.28 8.41L18.08 10.95ZM7.63 17.46L10.4 18.61L7.87 20.8L7.63 17.46Z"
        fill="#90A0DA"
      />
    </svg>
  );
};

export default Toggle;
