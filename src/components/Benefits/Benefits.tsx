import style from "./Benefits.module.scss";
import items from "./items.ts";
import icons from "../../images/svg/icons.svg";

const Benefits = () => {
  return (
    <div className={style.container}>
      <h2>BENEFITS</h2>
      <ul className={style.ulContainer}>
        {items.map((item) => (
          <li key={item.id} className={style.liContainer}>
            <h3>{item.name}</h3>
            <div>
              <svg className={style.icon}>
                <use xlinkHref={`${icons}${item.icon}`} />
              </svg>
              <p className={style.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
