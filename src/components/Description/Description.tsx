import style from "./Description.module.scss";

const Description = () => {
  return (
    <div>
      <h2>Title</h2>
      <ul className={style.ulContainer}>
        <li className={style.liContainer}>
          <img
            className={style.image}
            src="https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150535932-stock-photo-one-yellow-tulip.jpg"
            alt="flower"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            est sit dolore dolores perspiciatis! Odio, placeat atque.
            Distinctio, officiis. Quo, soluta. Dolorem ex perferendis repellat
            inventore a quae minima error.
          </p>
        </li>
        <li className={style.liContainer}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            est sit dolore dolores perspiciatis! Odio, placeat atque.
            Distinctio, officiis. Quo, soluta. Dolorem ex perferendis repellat
            inventore a quae minima error.
          </p>
          <img
            className={style.image}
            src="https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150535932-stock-photo-one-yellow-tulip.jpg"
            alt="flower"
          />
        </li>
        <li className={style.liContainer}>
          <img
            className={style.image}
            src="https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150535932-stock-photo-one-yellow-tulip.jpg"
            alt="flower"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            est sit dolore dolores perspiciatis! Odio, placeat atque.
            Distinctio, officiis. Quo, soluta. Dolorem ex perferendis repellat
            inventore a quae minima error.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Description;
