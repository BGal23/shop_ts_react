import NavMenu from "../NavMenu/NavMenu";
import style from "./MenuModal.module.scss";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (isOpenModal: boolean) => void;
}

const MenuModal: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={style.container}
      style={{
        left: isModalOpen ? undefined : "100vw",
      }}
    >
      <NavMenu setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default MenuModal;
