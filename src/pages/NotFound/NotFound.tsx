import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.container}>
      <h3>Sorry, this page doesn't exist :(</h3>
    </div>
  );
};

export default NotFound;
