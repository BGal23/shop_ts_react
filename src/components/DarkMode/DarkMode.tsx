import { useEffect } from "react";
import style from "./DarkMode.module.scss";
import { useSelector } from "react-redux";
import { selectThemeMode } from "../../redux/theme/selectors";

const DarkMode = () => {
  const isDarkModeOn = useSelector(selectThemeMode);

  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add(style.darkMode);
    } else {
      document.body.classList.remove(style.darkMode);
    }
  }, [isDarkModeOn]);

  return null;
};

export default DarkMode;
