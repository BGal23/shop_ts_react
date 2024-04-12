import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container/Container";
import DarkMode from "../DarkMode/DarkMode";
import style from "./Header.module.scss";
import { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";
import { useMediaQuery } from "react-responsive";
import NavMenu from "../NavMenu/NavMenu";
import { themeMode } from "../../redux/data/themeSlice";
import { selectCart, selectThemeMode } from "../../redux/data/selectors";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ maxWidth: 767 });
  const isDarkModeOn = useSelector(selectThemeMode);
  const cartCount = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <Container>
          <div className={style.header}>
            <Link to="/">
              <div className={style.logo}>👜 SHOP</div>
            </Link>
            <div className={style.rightContainer}>
              <button
                type="button"
                className={style.themeBtn}
                onClick={() => dispatch(themeMode())}
              >
                {isDarkModeOn ? "☀️" : "🌑"}
              </button>
              <Link className={style.cartLink} to="/user">
                🛒
                {cartCount && (
                  <div className={style.count}>{cartCount.length}</div>
                )}
              </Link>
              {isMobile ? (
                <button
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  className={style.homeBtn}
                >
                  {isModalOpen ? "CLOSE" : "MENU"}
                </button>
              ) : (
                <NavMenu setIsModalOpen={setIsModalOpen} />
              )}
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      {isMobile && (
        <MenuModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <DarkMode />
    </>
  );
};

export default Header;
