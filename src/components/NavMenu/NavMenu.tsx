import { NavLink } from "react-router-dom";
import { UnknownAction } from "@reduxjs/toolkit";
import styled from "styled-components";
import style from "./NavMenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import links from "./links";

interface Props {
  setIsMenuModalOpen: (isOpenModal: boolean) => void;
}

export const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;

const NavMenu: React.FC<Props> = ({ setIsMenuModalOpen }) => {
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
                  onClick={() => setIsMenuModalOpen(false)}
                  to={link.link}
                >
                  {link.name ? link.name : userName}
                </StyledLink>
              ) : (
                <NavLink
                  className={style.logout}
                  onClick={() => {
                    setIsMenuModalOpen(false);
                    dispatch(logout() as unknown as UnknownAction);
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
