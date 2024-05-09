import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.container}>
      <h3>Sorry, this page doesn't exist :(</h3>
      <Link className={style.link} to="/">
        Go Home ↩
      </Link>
    </div>
  );
};

export default NotFound;
