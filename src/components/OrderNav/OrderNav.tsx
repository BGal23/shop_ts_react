import { useDispatch, useSelector } from "react-redux";
import { StyledLink } from "../NavMenu/NavMenu";
import style from "./OrderNav.module.scss";
import { selectLinks } from "../../redux/data/selectors";
import { useEffect } from "react";
import { changeLinkAvailable } from "../../redux/data/orderSlice";

const OrderNav = () => {
  const links = useSelector(selectLinks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!links[1].available) {
      dispatch(changeLinkAvailable({ index: 2, available: false }));
    }
  });

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
