type Link = {
  index: number;
  name?: string;
  link: string;
  show?: boolean;
  logout: boolean;
};

const links: Link[] = [
  { index: 1, name: "Home", link: "/", logout: false },
  { index: 2, name: "Categories", link: "/categories", logout: false },
  { index: 3, name: "About Us", link: "/about_us", logout: false },
  { index: 4, link: "/user", show: true, logout: false },
  { index: 5, name: "Login", link: "/login", show: false, logout: false },
  { index: 6, name: "Sign Up", link: "/signup", show: false, logout: false },
  { index: 7, name: "Logout", link: "/", show: true, logout: true },
];

export default links;
