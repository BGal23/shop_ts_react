import style from "./Description.module.scss";
import about_1 from "../../images/picture/about_1.jpeg";
import about_2 from "../../images/picture/about_2.jpeg";
import about_3 from "../../images/picture/about_3.jpeg";

const Description = () => {
  return (
    <div>
      <h2>About us</h2>
      <ul className={style.ulContainer}>
        <li className={style.liContainer}>
          <div className={style.imageBox}>
            <img className={style.image} src={about_1} alt="seller" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            est sit dolore dolores perspiciatis! Odio, placeat atque.
            Distinctio, officiis. Quo, soluta. Dolorem ex perferendis repellat
            inventore a quae minima error. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptates est sit dolore dolores
            perspiciatis! Odio, placeat atque. Distinctio, officiis. Quo,
            soluta. Dolorem ex perferendis repellat inventore a quae minima
            error.
          </p>
        </li>
        <h3>Our shops</h3>
        <li className={style.liContainer}>
          <div className={style.imageBox}>
            <img className={style.image} src={about_2} alt="shop" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            est sit dolore dolores perspiciatis! Odio, placeat atque.
            Distinctio, officiis. Quo, soluta. Dolorem ex perferendis repellat
            inventore a quae minima error. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptates est sit dolore dolores
            perspiciatis! Odio, placeat atque. Distinctio, officiis. Quo,
            soluta. Dolorem ex perferendis repellat inventore a quae minima
            error.
          </p>
        </li>
        <h3>Our products</h3>
        <li className={style.liContainer}>
          <div className={style.imageBox}>
            <img className={style.image} src={about_3} alt="gifts" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            est sit dolore dolores perspiciatis! Odio, placeat atque.
            Distinctio, officiis. Quo, soluta. Dolorem ex perferendis repellat
            inventore a quae minima error.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptates est sit dolore dolores
            perspiciatis! Odio, placeat atque. Distinctio, officiis. Quo,
            soluta. Dolorem ex perferendis repellat inventore a quae minima
            error.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Description;
