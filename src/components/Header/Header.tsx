import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { selectCart, selectThemeMode } from "../../redux/data/selectors";
import { themeMode } from "../../redux/data/themeSlice";
import icons from "../../images/svg/icons.svg";
import Container from "../Container/Container";
import DarkMode from "../DarkMode/DarkMode";
import style from "./Header.module.scss";
import MenuModal from "../MenuModal/MenuModal";
import CartModal from "../CartModal/CartModal";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import SearchModal from "../SearchModal/SearchModal";

const Header = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState<boolean>(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
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
              <div className={style.logo}>
                <svg className={style.icon}>
                  <use xlinkHref={`${icons}#bag`} />
                </svg>
                <span>FAKE SHOP</span>
              </div>
            </Link>
            <div className={style.rightContainer}>
              <button
                type="button"
                className={style.searchBtn}
                onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
              >
                <svg className={style.icon}>
                  <use xlinkHref={`${icons}#search`} />
                </svg>
              </button>
              <button
                type="button"
                className={style.themeBtn}
                onClick={() => dispatch(themeMode())}
              >
                <svg className={style.icon}>
                  {isDarkModeOn ? (
                    <use xlinkHref={`${icons}#sun`} />
                  ) : (
                    <use xlinkHref={`${icons}#moon`} />
                  )}
                </svg>
              </button>
              <button
                type="button"
                className={style.cartBtn}
                onClick={() => setIsCartModalOpen(!isCartModalOpen)}
              >
                <svg className={style.icon}>
                  <use xlinkHref={`${icons}#cart`} />
                </svg>
                {cartCount.length > 0 && (
                  <div className={style.count}>{cartCount.length}</div>
                )}
              </button>
              {isMobile ? (
                <button
                  onClick={() => setIsMenuModalOpen(!isMenuModalOpen)}
                  className={style.homeBtn}
                >
                  <svg className={style.icon}>
                    {isMenuModalOpen ? (
                      <use xlinkHref={`${icons}#close`} />
                    ) : (
                      <use xlinkHref={`${icons}#menu`} />
                    )}
                  </svg>
                </button>
              ) : (
                <NavMenu setIsMenuModalOpen={setIsMenuModalOpen} />
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
      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
      {isMobile && (
        <MenuModal
          isMenuModalOpen={isMenuModalOpen}
          setIsMenuModalOpen={setIsMenuModalOpen}
        />
      )}
      <CartModal
        isCartModalOpen={isCartModalOpen}
        setIsCartModalOpen={setIsCartModalOpen}
      />
      <SearchModal
        isSearchModalOpen={isSearchModalOpen}
        setIsSearchModalOpen={setIsSearchModalOpen}
      />
      <DarkMode />
    </>
  );
};

export default Header;
