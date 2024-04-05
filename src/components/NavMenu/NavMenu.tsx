import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from "./NavMenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import links from "./links";

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
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={style.list}>
        {links
          .filter((link) => link.show === undefined || link.show === isLoggedIn)
          .map((link) => (
            <li key={link.index}>
              {!link.logout ? (
                <StyledLink
                  onClick={() => setIsModalOpen(false)}
                  to={link.link}
                >
                  {link.name ? link.name : userName}
                </StyledLink>
              ) : (
                <NavLink
                  onClick={() => {
                    setIsModalOpen(false), dispatch(logout());
                  }}
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavMenu;
