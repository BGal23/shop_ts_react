import style from "./Stars.module.scss";
import icons from "../../images/svg/icons.svg";

interface Props {
  rate: number;
}

const Stars: React.FC<Props> = ({ rate }) => {
  const starsArray: boolean[] = [];
  let stars = rate;
  for (let i = 0; i < rate; i++) {
    if (stars > 0.75) {
      starsArray.push(true);
    } else if (stars < 0.75 && stars > 0.25) {
      starsArray.push(false);
    }
    stars--;
  }

  return (
    <div>
      {starsArray.map((star, index) => (
        <svg key={index} className={style.icon}>
          <use xlinkHref={star ? `${icons}#star` : `${icons}#half-star`} />
        </svg>
      ))}
    </div>
  );
};

export default Stars;
