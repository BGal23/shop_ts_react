import { useSelector } from "react-redux";
import { StyledLink } from "../NavMenu/NavMenu";
import style from "./OrderNav.module.scss";
import { selectLinks } from "../../redux/data/selectors";

const OrderNav = () => {
  const links = useSelector(selectLinks);

  return (
    <ul className={style.container}>
      {links.map((link, index) => (
        <li key={index}>
          <StyledLink
            style={
              link.available
                ? { background: "transparent" }
                : {
                    pointerEvents: "none",
                    opacity: "0.5",
                  }
            }
            to={link.url}
          >
            {link.title}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default OrderNav;
