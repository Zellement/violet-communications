module.exports = {
  mode: "jit",
  content: ["./src/**/*.js"],
  theme: {
    fontSize: {
      "2xs": "1.4rem",
      xs: "1.6rem",
      sm: "1.8rem",
      base: "2rem",
      lg: "2.2rem",
      xl: "2.4rem",
      "2xl": "3rem",
      "3xl": "3.4rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
      "9xl": "9rem",
      "10xl": "10rem",
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    extend: {
      fontFamily: {
        header: ["Josefin Sans", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
      },
      colors: {
        violet: {
          DEFAULT: "#7D55C7",
          50: "#E7DFF4",
          100: "#DBD0EF",
          200: "#C3B1E5",
          300: "#AC92DB",
          400: "#9474D1",
          500: "#7D55C7",
          600: "#6138AB",
          700: "#492B81",
          800: "#311D57",
          900: "#190F2D",
        },
        facebook: {
          DEFAULT: "#3B5998",
          50: "#ACBCDF",
          100: "#9DB0D9",
          200: "#8099CE",
          300: "#6281C2",
          400: "#466AB5",
          500: "#3B5998",
          600: "#2B4170",
          700: "#1C2A47",
          800: "#0C121F",
          900: "#000000",
        },
        twitter: {
          DEFAULT: "#1DA1F2",
          50: "#CBE9FC",
          100: "#B7E1FB",
          200: "#91D1F9",
          300: "#6AC1F6",
          400: "#44B1F4",
          500: "#1DA1F2",
          600: "#0C82CB",
          700: "#096096",
          800: "#063E61",
          900: "#031C2C",
        },
        "instagram-pink": {
          DEFAULT: "#BC2A8D",
          50: "#EDB0DA",
          100: "#EAA0D2",
          200: "#E27EC2",
          300: "#DB5DB2",
          400: "#D33BA2",
          500: "#BC2A8D",
          600: "#8E206B",
          700: "#601648",
          800: "#320B26",
          900: "#050103",
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
};
