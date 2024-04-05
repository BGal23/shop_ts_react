import NavMenu from "../NavMenu/NavMenu";
import style from "./MenuModal.module.scss";

interface MenuModalProps {
  isModalOpen: boolean;
}

const MenuModal: React.FC<MenuModalProps> = ({ isModalOpen }) => {
  return (
    <div
      className={style.container}
      style={{ left: isModalOpen ? undefined : "100vw" }}
    >
      <NavMenu />
    </div>
  );
};

export default MenuModal;
