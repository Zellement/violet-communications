import React, { Component } from "react";
import PropTypes from "prop-types";
import EmblaCarouselReact from "embla-carousel-react";
// import { } from "framer-;
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

// const duration = 0.1;

// const container = {
//   visible: {
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.05,
//       delayChildren: duration,
//     },
//   },
// };
// const item = {
//   hidden: { y: 10, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

class GalleryCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <section className="container mt-40">
            <h2 className="px-4 mb-16 text-2xl text-center text-violet-500">
              Testimonials from happy clients
            </h2>
            {/* {console.log(this.state. images)} */}
            <div className="relative max-w-screen-md mx-auto">
              <EmblaCarouselReact
                emblaRef={(c) => (this.embla = c)}
                htmlTagName={`div`}
                options={{
                  align: "start",
                  slidesToScroll: 1,
                  draggable: true,
                  loop: true,
                  speed: 8,
                }}
                className="embla-viewport"
              >
                <div className="w-full text-xs embla__container">
                  {this.state.content.map((content) => (
                    <div
                      className="flex w-full p-24 bg-gradient-to-b bg-opacity-40 bg-violet-50 rounded-3xl embla__slide embla__slide--gallery"
                      key={content.id}
                    >
                      <div className="my-auto">
                        <p className="mb-4 text-violet-500">
                          {content.locationBusiness}
                        </p>
                        <div
                          dangerouslySetInnerHTML={{ __html: content.content }}
                        ></div>
                        <p className="mt-2 font-semibold">- {content.person}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </EmblaCarouselReact>
              <button
                transition="easeInOut"
                className="absolute left-0 z-10 ml-2 text-2xl transition duration-100 ease-in -translate-y-1/2 appearance-none cursor-pointer top-1/2 text-violet-500 focus:outline-none hover:text-blue"
                onClick={() => this.embla.scrollPrev()}
                aria-label="Previous image"
              >
                <IoIosArrowDropleftCircle />
              </button>
              <button
                transition="easeInOut"
                className="absolute right-0 z-10 mr-2 text-2xl transition duration-100 ease-in -translate-y-1/2 appearance-none cursor-pointer top-1/2 text-violet-500 focus:outline-none hover:text-blue"
                onClick={() => this.embla.scrollNext()}
                aria-label="Next image"
              >
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </section>
        ) : (
          <p>Loading&hellip;</p>
        )}
      </>
    );
  }
}

GalleryCarousel.propTypes = {
  images: PropTypes.array,
};

GalleryCarousel.defaultProps = {
  images: [],
};

export default GalleryCarousel;
