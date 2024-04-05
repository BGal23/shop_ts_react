import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from "./NavMenu.module.scss";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

interface Props {
  setIsModalOpen: (isOpenModal: boolean) => void;
}

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const NavMenu: React.FC<Props> = ({ setIsModalOpen }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const links: string[] = ["Home", "Categories", "About Us", "User", "Logout"];

  if (!isLoggedIn) {
    links.splice(links.indexOf("User"), 1);
    links.splice(links.indexOf("Logout"), 1, "Login");
  }
  return (
    <div>
      <ul className={style.list}>
        {links.map((link, index) => (
          <StyledLink
            onClick={() => setIsModalOpen(false)}
            to={
              link === "Home"
                ? "/"
                : `/${link.toLowerCase().split(" ").join("_")}`
            }
            key={index}
          >
            {link}
          </StyledLink>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
