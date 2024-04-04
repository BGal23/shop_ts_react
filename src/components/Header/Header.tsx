import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import DarkMode from "../DarkMode/DarkMode";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <DarkMode>
      <header>
        <Container>
          <div className={style.header}>
            <div className={style.logo}>SHOP</div>
            <button className={style.homeBtn}>🏠</button>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </DarkMode>
  );
};

export default Header;
