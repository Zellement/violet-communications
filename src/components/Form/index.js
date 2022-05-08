import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ContactForm from "../_Atoms/ContactForm";
import ScrollAnimation from "react-animate-on-scroll";
import Email from "../_Atoms/ContactItems/email";
import Telephone from "../_Atoms/ContactItems/telephone";

export default function Form() {
  return (
    <StaticQuery
      query={graphql`
        query FormQuery {
          datoCmsSiteOption {
            formSupportingText
          }
        }
      `}
      render={(data) => (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={20}>
          <div className="container flex flex-col p-8 text-white lg:gap-16 lg:p-16 bg-violet-500 xl:p-32 lg:flex-row">
            <div className="flex flex-col lg:w-2/3">
              <h2 className="text-xl lg:text-3xl">Start your enquiry</h2>
              <div
                className="text-white content content--form"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsSiteOption.formSupportingText,
                }}
              ></div>
              <div className="flex flex-col gap-2 py-4 text-base lowercase md:flex-row lg:py-8 sm:gap-6 lg:gap-8">
                <Email className="text-white hover:lg:text-lime-400 hover:lg:underline" />
                <Telephone className="text-white hover:lg:text-lime-400 hover:lg:underline" />
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <ContactForm />
            </div>
          </div>
        </ScrollAnimation>
      )}
    />
  );
}
