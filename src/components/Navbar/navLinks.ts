interface ILink {
  path: string;
  name: string;
}

export const links: ILink[] = [
  { path: "#", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];
