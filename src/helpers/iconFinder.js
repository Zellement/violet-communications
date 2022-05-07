import React from "react";
import { MdWifi } from "react-icons/md";
import { FaNetworkWired, FaMobileAlt } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const iconFinder = (icon, className) => {
  console.log(icon);
  switch (icon) {
    case "voip":
      return (
        <svg
          className={`${className} fill-current`}
          viewBox="0 0 74 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.3436 29.179H13.9524V30.8937H26.3436V29.179Z" />
          <path d="M57.9558 0H16.8001L10.2917 26.4425V27.1922V36.7056H63.0876V27.1922V26.3918L57.9558 0ZM24.7475 8.06729C24.813 7.70723 24.9579 7.34717 25.1892 6.9737C25.4417 6.5802 25.7792 6.21037 26.1814 5.89375L26.1493 5.8751L27.353 5.12792C28.2362 4.58363 29.6455 4.56884 30.4941 5.09198L34.7695 7.72452C35.6195 8.24789 35.5922 9.1163 34.7126 9.66059L34.0014 10.0984L32.5578 10.9866C32.6319 11.0694 32.7074 11.155 32.7879 11.2428C33.5413 12.0816 34.5755 13.2296 36.5402 14.4407C38.4986 15.6469 40.3592 16.2829 41.7189 16.748C41.866 16.7987 42.0084 16.8483 42.1433 16.8927L44.2984 15.5664C45.1793 15.0246 46.5909 15.0073 47.4395 15.528L51.7127 18.1605C52.5627 18.6864 52.5354 19.5534 51.6545 20.0966L50.436 20.8326L50.4101 20.8203C49.8942 21.0689 49.3017 21.2757 48.6669 21.429C48.0743 21.57 47.4928 21.6603 46.8855 21.706C46.6059 21.7247 40.1431 22.0982 32.1229 17.1558C26.3224 13.5848 24.1846 10.9498 24.7475 8.06729ZM61.7452 35.3659H11.6303V27.1936H61.7452V35.3659Z" />
          <path d="M55.1846 33.2752C56.4997 33.2752 57.5674 32.205 57.5674 30.8924C57.5674 29.5772 56.4997 28.5071 55.1846 28.5071C53.8694 28.5071 52.8018 29.5772 52.8018 30.8924C52.8031 32.205 53.8708 33.2752 55.1846 33.2752ZM55.1846 29.8481C55.7598 29.8481 56.2288 30.3169 56.2288 30.8935C56.2288 31.4676 55.76 31.9352 55.1846 31.9352C54.6105 31.9352 54.1403 31.4676 54.1403 30.8935C54.1417 30.3171 54.6118 29.8481 55.1846 29.8481Z" />
          <path d="M31.1498 32.7133C31.7661 32.7133 32.2657 32.2137 32.2657 31.5975C32.2657 30.9812 31.7661 30.4816 31.1498 30.4816C30.5335 30.4816 30.0339 30.9812 30.0339 31.5975C30.0339 32.2137 30.5335 32.7133 31.1498 32.7133Z" />
          <path d="M34.4987 32.7134C35.1149 32.7134 35.6158 32.2174 35.6158 31.6012C35.6158 30.9839 35.1147 30.4828 34.4987 30.4828C33.8826 30.483 33.8826 32.7134 34.4987 32.7134Z" />
          <path d="M37.5011 32.7133C38.1174 32.7133 38.617 32.2137 38.617 31.5975C38.617 30.9812 38.1174 30.4816 37.5011 30.4816C36.8848 30.4816 36.3853 30.9812 36.3853 31.5975C36.3853 32.2137 36.8848 32.7133 37.5011 32.7133Z" />
          <path d="M73.6066 46.2662H42.0439C41.736 44.9003 40.5173 43.87 39.0575 43.87H37.3639V37.0546H36.0239V43.87H34.329C32.8717 43.87 31.6505 44.8992 31.3439 46.2662H0V47.6061H31.3452C31.6532 48.9731 32.873 50 34.3303 50H39.0575C40.5173 50 41.736 48.9745 42.0439 47.6061H73.6068V46.2662H73.6066ZM39.0575 48.6613H34.3303C33.3789 48.6613 32.6046 47.8868 32.6046 46.9356C32.6046 45.9844 33.3791 45.211 34.3303 45.211H39.0575C40.0114 45.211 40.7832 45.9841 40.7832 46.9356C40.7832 47.887 40.0112 48.6613 39.0575 48.6613Z" />
        </svg>
      );
    case "wifi":
      return <MdWifi className={className} />;
    case "connectivity":
      return <BsGlobe className={className} />;
    case "itSolutions":
      return <FaNetworkWired className={className} />;
    case "mobile":
      return <FaMobileAlt className={className} />;
    case "fixedLines":
      return (
        <svg
          className={`${className} fill-current`}
          viewBox="0 0 54 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M51.379 3.28692H20.2735V40.1396H26.2362V44.4225C26.2362 45.3013 25.5228 46.0162 24.6461 46.0162H12.1244C11.2623 46.0162 10.5345 45.4234 10.5345 44.7214V43.4267H15.1059C16.2033 43.4267 17.0934 42.5347 17.0934 41.4347V1.99199C17.0934 0.891787 16.2033 0 15.1059 0H1.98752C0.890146 0 0 0.891787 0 1.99199V41.4343C0 42.5344 0.890146 43.4263 1.98752 43.4263H6.55928V44.7211C6.55928 47.632 9.05571 50 12.1243 50H24.6459C27.7148 50 30.2113 47.498 30.2113 44.4223V40.1396H51.3458C52.4432 40.1396 53.3333 39.2476 53.3333 38.1476V5.27891C53.3333 4.19005 52.4608 3.30636 51.3787 3.28854V3.28692H51.379ZM28.2239 29.8805H24.9442C24.0663 29.8805 23.3543 29.1669 23.3543 28.287C23.3543 27.4069 24.0663 26.6933 24.9442 26.6933H28.2239C29.1019 26.6933 29.8139 27.4069 29.8139 28.287C29.8137 29.1669 29.1019 29.8805 28.2239 29.8805ZM28.2239 23.3069H24.9442C24.0663 23.3069 23.3543 22.5933 23.3543 21.7132C23.3543 20.8331 24.0663 20.1196 24.9442 20.1196H28.2239C29.1019 20.1196 29.8139 20.8333 29.8139 21.7132C29.8137 22.5933 29.1019 23.3069 28.2239 23.3069ZM28.2239 16.733H24.9442C24.0663 16.733 23.3543 16.0194 23.3543 15.1395C23.3543 14.2594 24.0663 13.546 24.9442 13.546H28.2239C29.1019 13.546 29.8139 14.2596 29.8139 15.1395C29.8137 16.0196 29.1019 16.733 28.2239 16.733ZM38.0622 29.8805H34.7829C33.9046 29.8805 33.1927 29.1669 33.1927 28.287C33.1927 27.4069 33.9047 26.6933 34.7829 26.6933H38.0622C38.9405 26.6933 39.6523 27.4069 39.6523 28.287C39.6523 29.1669 38.9405 29.8805 38.0622 29.8805ZM38.0622 23.3069H34.7829C33.9046 23.3069 33.1927 22.5933 33.1927 21.7132C33.1927 20.8331 33.9047 20.1196 34.7829 20.1196H38.0622C38.9405 20.1196 39.6523 20.8333 39.6523 21.7132C39.6523 22.5933 38.9405 23.3069 38.0622 23.3069ZM38.0622 16.733H34.7829C33.9046 16.733 33.1927 16.0194 33.1927 15.1395C33.1927 14.2594 33.9047 13.546 34.7829 13.546H38.0622C38.9405 13.546 39.6523 14.2596 39.6523 15.1395C39.6523 16.0196 38.9405 16.733 38.0622 16.733ZM47.9009 29.8805H44.6211C43.7432 29.8805 43.0312 29.1669 43.0312 28.287C43.0312 27.4069 43.7432 26.6933 44.6211 26.6933H47.9009C48.7792 26.6933 49.491 27.4069 49.491 28.287C49.491 29.1669 48.7792 29.8805 47.9009 29.8805ZM47.9009 23.3069H44.6211C43.7432 23.3069 43.0312 22.5933 43.0312 21.7132C43.0312 20.8331 43.7432 20.1196 44.6211 20.1196H47.9009C48.7792 20.1196 49.491 20.8333 49.491 21.7132C49.491 22.5933 48.7792 23.3069 47.9009 23.3069ZM47.9009 16.733H44.6211C43.7432 16.733 43.0312 16.0194 43.0312 15.1395C43.0312 14.2594 43.7432 13.546 44.6211 13.546H47.9009C48.7792 13.546 49.491 14.2596 49.491 15.1395C49.491 16.0196 48.7792 16.733 47.9009 16.733Z" />
        </svg>
      );

    default:
      return null;
  }
};

export default iconFinder;
