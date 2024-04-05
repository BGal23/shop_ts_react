import { ReactNode } from "react";
import style from "./Container.module.scss";

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
