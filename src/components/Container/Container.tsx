import { ReactNode } from "react";
import style from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
