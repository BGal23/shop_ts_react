import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Container from "../Container/Container";
import DarkMode from "../DarkMode/DarkMode";
import style from "./Header.module.scss";
import { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";
import { useMediaQuery } from "react-responsive";
import NavMenu from "../NavMenu/NavMenu";
import { toggleTheme } from "../../redux/theme/slice";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <Container>
          <div className={style.header}>
            <Link to="/">
              <div className={style.logo}>👜 SHOP</div>
            </Link>
            <div>
              <button type="button" onClick={() => dispatch(toggleTheme())}>
                DarkMode
              </button>
              {isMobile ? (
                <button
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  className={style.homeBtn}
                >
                  {isModalOpen ? "CLOSE" : "HOME"}
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
