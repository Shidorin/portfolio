interface ILink {
  path: string;
  name: string;
  namePL: string;
}

export const links: ILink[] = [
  // { path: "#", name: "Home", namePL: "Home" },
  { path: "#about", name: "About", namePL: "Umiejętności" },
  { path: "#projects", name: "Projects", namePL: "Projekty" },
  { path: "#contact", name: "Contact", namePL: "Kontakt" },
];
