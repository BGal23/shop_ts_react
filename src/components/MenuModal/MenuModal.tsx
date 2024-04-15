import NavMenu from "../NavMenu/NavMenu";
import style from "./MenuModal.module.scss";

interface Props {
  isMenuModalOpen: boolean;
  setIsMenuModalOpen: (isOpenModal: boolean) => void;
}

const MenuModal: React.FC<Props> = ({
  isMenuModalOpen,
  setIsMenuModalOpen,
}) => {
  return (
    <div
      className={style.container}
      style={{
        left: isMenuModalOpen ? undefined : "100vw",
      }}
    >
      <NavMenu setIsMenuModalOpen={setIsMenuModalOpen} />
    </div>
  );
};

export default MenuModal;
