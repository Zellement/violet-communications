import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import CookieConsent from "react-cookie-consent";

import Header from "./Header";
import Footer from "./Footer";

const duration = 0.35;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
};

const Layout = (props) => {
  const { children, location } = props || {};
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      datoCmsSiteOption {
        testimonials {
          id
          content
          person
          locationBusiness
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
        <Footer testimonials={data.datoCmsSiteOption.testimonials} />
      </AnimatePresence>
      <CookieConsent
        location="bottom"
        buttonText="Okay, got it"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#222222" }}
        buttonStyle={{
          color: "#222222",
          backgroundColor: "#ffffff",
          fontSize: "13px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
};

export default Layout;
