type Link = {
  index: number;
  name?: string;
  link: string;
  show?: boolean;
  logout: boolean;
};

const links: Link[] = [
  { index: 1, name: "HOME", link: "/", logout: false },
  { index: 2, name: "CATEGORIES", link: "/categories", logout: false },
  { index: 3, name: "ABOUT US", link: "/about_us", logout: false },
  { index: 4, link: "/user", show: true, logout: false },
  { index: 5, name: "LOGIN", link: "/login", show: false, logout: false },
  { index: 6, name: "SIGN UP", link: "/signup", show: false, logout: false },
  { index: 7, name: "LOGOUT", link: "/", show: true, logout: true },
];

export default links;
