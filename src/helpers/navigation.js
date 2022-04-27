const primaryNavigation = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about/",
  },
  {
    name: "Services",
    url: "/services/",
    children: [
      {
        name: "VOIP",
        url: "/services/voip/",
      },
      {
        name: "Fixed Lines",
        url: "/services/fixed-lines/",
      },
    ],
  },
  {
    name: "News",
    url: "/news/",
  },
  {
    name: "Contact",
    url: "/contact/",
  },
];

export default primaryNavigation;
