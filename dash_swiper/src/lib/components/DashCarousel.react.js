import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import EffectCarousel from '../building_blocks/dist/effect-carousel.min.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../building_blocks/dist/effect-carousel.min.css';

// Integrated styles
const styles = `
html, body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: #18212b;
  color: #fff;
  line-height: 1.5;
  font-family: -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --swiper-navigation-color: #fff;
  --swiper-pagination-color: #fff;
  --swiper-pagination-bullet-inactive-color: #fff;
}

.swiper-carousel {
  padding-bottom: 32px;
  max-width: 1200px;
}

.swiper-carousel .swiper-slide {
  width: 520px;
  height: 380px;
  border-radius: 8px;
  background: #18212b;
  max-width: calc(100% - 48px);
}

.swiper-carousel .swiper-carousel-animate-opacity {
  height: 100%;
}

.swiper-carousel .swiper-pagination-bullets {
  bottom: 0;
}

.swiper-carousel img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 8px;
}

.swiper-carousel .slide-content {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  padding: 88px 16px 24px;
  box-sizing: border-box;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
  border-radius: 0 0 8px 8px;
}

.swiper-carousel .slide-content h2 {
  margin: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.1;
}

.swiper-carousel .slide-content p {
  margin: 8px 0 0;
  opacity: 0.65;
  font-size: 14px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

@media (max-width: 640px) {
  .swiper-carousel .swiper-button-next,
  .swiper-carousel .swiper-button-prev {
    display: none !important;
  }
}
`;


/**
 * DashCarousel is a component that creates an interactive carousel/slider
 * using Swiper.js. It supports various features like autoplay, navigation,
 * pagination, and custom effects.
 */
const DashCarousel = (props) => {
    const {
        id,
        slides,
        className,
        carouselEffect,
        navigation,
        pagination,
        autoplayEnabled,
        autoplay,
        loop,
        grabCursor,
        slidesPerView,
        swiperOptions,
        setProps
    } = props;

    const swiperRef = useRef(null);
    const swiperInstanceRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperParams = {
                modules: [Autoplay, Navigation, Pagination, EffectCarousel],
                effect: 'carousel',
                carouselEffect: {
                    ...carouselEffect,
                    opacityStep: 0.33,
                    scaleStep: 0.2,
                },
                grabCursor,
                loop,
                slidesPerView,
                spaceBetween: 30,
                centeredSlides: true,
                navigation: navigation ? {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                } : false,
                pagination: pagination ? {
                    el: '.swiper-pagination',
                    clickable: true,
                } : false,
                autoplay: autoplayEnabled ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    ...autoplay
                } : false,
                ...swiperOptions,
                on: {
                    slideChange: function () {
                        const activeIndex = this.realIndex;
                        const activeSlide = slides[activeIndex];
                        setProps({
                            activeIndex: activeIndex,
                            activeSlideAlt: activeSlide.alt || `Slide ${activeIndex + 1}`
                        });
                    },
                    ...swiperOptions.on
                }
            };

            swiperInstanceRef.current = new Swiper(swiperRef.current, swiperParams);
        }

        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy();
            }
        };
    }, [autoplayEnabled, slidesPerView]);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperParams = {
                modules: [Autoplay, Navigation, Pagination, EffectCarousel],
                effect: 'carousel',
                carouselEffect: {
                    opacityStep: 0.33,
                    scaleStep: 0.2,
                    sideSlides: carouselEffect.sideSlides || 2,
                },
                grabCursor,
                loop,
                loopAdditionalSlides: 1,
                slidesPerView,
                spaceBetween: 30,
                centeredSlides: true,
                navigation: navigation ? {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                } : false,
                pagination: pagination ? {
                    el: '.swiper-pagination',
                    clickable: true,
                } : false,
                autoplay: autoplayEnabled ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    ...autoplay
                } : false,
                ...swiperOptions,
                on: {
                    slideChange: function () {
                        const activeIndex = this.realIndex;
                        const activeSlide = slides[activeIndex];
                        setProps({
                            activeIndex: activeIndex,
                            activeSlideAlt: activeSlide.alt || `Slide ${activeIndex + 1}`
                        });
                    },
                    ...swiperOptions.on
                }
            };

            swiperInstanceRef.current = new Swiper(swiperRef.current, swiperParams);
        }

        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy();
            }
        };
    }, [autoplayEnabled, slidesPerView, carouselEffect, grabCursor, loop, navigation, pagination, autoplay, swiperOptions, slides, setProps]);

    // eslint-disable-next-line no-magic-numbers
    const slideWidth = `calc((100% - ${(slidesPerView - 1) * 30}px) / ${slidesPerView})`;

    return (
        <>
            <style>{styles}</style>
            <div id={id} className={`swiper-carousel ${className}`} ref={swiperRef}>
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <div key={index} className="swiper-slide" style={{ width: slideWidth }}>
                            <div className="swiper-carousel-animate-opacity">
                                <img src={slide.src} alt={slide.alt} />
                                <div className="slide-content">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {navigation && (
                    <>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </>
                )}
                {pagination && <div className="swiper-pagination"></div>}
            </div>
        </>
    );
};

DashCarousel.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * An array of objects representing the slides in the carousel.
     * Each object should have src, alt, title, and description properties.
     */
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string
        })
    ).isRequired,

    /**
     * Additional CSS class for the root element.
     */
    className: PropTypes.string,

    /**
     * Configuration object for the carousel effect.
     */
    carouselEffect: PropTypes.shape({
        /**
         * Step value for opacity change between slides.
         */
        opacityStep: PropTypes.number,
        /**
         * Step value for scale change between slides.
         */
        scaleStep: PropTypes.number,
        /**
         * Number of side slides visible.
         */
        sideSlides: PropTypes.number
    }),

    /**
     * Whether to display navigation buttons.
     */
    navigation: PropTypes.bool,

    /**
     * Whether to display pagination dots.
     */
    pagination: PropTypes.bool,

    /**
     * Whether autoplay is enabled.
     */
    autoplayEnabled: PropTypes.bool,

    /**
     * Configuration object for autoplay behavior.
     */
    autoplay: PropTypes.shape({
        /**
         * Delay between transitions (in ms).
         */
        delay: PropTypes.number,
        /**
         * Whether to pause autoplay on user interaction.
         */
        disableOnInteraction: PropTypes.bool
    }),

    /**
     * Whether to enable continuous loop mode.
     */
    loop: PropTypes.bool,

    /**
     * Whether to change the cursor to "grab" while swiping.
     */
    grabCursor: PropTypes.bool,

    /**
     * Number of slides per view.
     */
    slidesPerView: PropTypes.number,

    /**
     * Additional options to pass directly to Swiper instance.
     */
    swiperOptions: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * The index of the currently active slide.
     */
    activeIndex: PropTypes.number,

    /**
     * The alt text of the currently active slide.
     */
    activeSlideAlt: PropTypes.string
};

DashCarousel.defaultProps = {
    id: null,
    className: '',
    carouselEffect: {
        opacityStep: 0.33,
        scaleStep: 0.2,
        sideSlides: 2
    },
    navigation: true,
    pagination: true,
    autoplayEnabled: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    swiperOptions: {},
    activeIndex: 0,
    activeSlideAlt: ''
};

export default DashCarousel;