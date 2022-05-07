const primaryNavigation = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us/",
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
        name: "Connectivity",
        url: "/services/connectivity/",
      },
      {
        name: "IT Solutions",
        url: "/services/it-solutions/",
      },
      {
        name: "Mobile",
        url: "/services/mobile/",
      },
      {
        name: "WiFi",
        url: "/services/wifi/",
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
    url: "/contact-us/",
  },
];

export default primaryNavigation;
