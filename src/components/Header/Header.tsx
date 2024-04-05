import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import DarkMode from "../DarkMode/DarkMode";
import style from "./Header.module.scss";
import { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";
import { useMediaQuery } from "react-responsive";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ maxWidth: 767 });

  return (
    <DarkMode>
      <header>
        <Container>
          <div className={style.header}>
            <div className={style.logo}>👜 SHOP</div>
            {isMobile ? (
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className={style.homeBtn}
              >
                {isModalOpen ? "CLOSE" : "HOME"}
              </button>
            ) : (
              <NavMenu />
            )}
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      {isMobile && <MenuModal isModalOpen={isModalOpen} />}
    </DarkMode>
  );
};

export default Header;
