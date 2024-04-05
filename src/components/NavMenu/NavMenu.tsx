import style from "./NavMenu.module.scss";

const NavMenu = () => {
  const links: string[] = ["Home", "Categories", "About Us", "User", "Logout"];
  return (
    <div>
      <ul className={style.list}>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
