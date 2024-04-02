import { ReactNode, useState } from "react";
import style from "./DarkMode.module.scss";

interface DarkModeProps {
  children: ReactNode;
}

const DarkMode: React.FC<DarkModeProps> = ({ children }) => {
  const [isModeOn, setIsModeOn] = useState<boolean>(false);

  return (
    <div className={isModeOn ? style.darkMode : ""}>
      <button
        className={style.button}
        type="button"
        onClick={() => setIsModeOn(!isModeOn)}
      >
        dark mode
      </button>
      {children}
    </div>
  );
};

export default DarkMode;
