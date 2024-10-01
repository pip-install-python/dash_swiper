import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperGL from '../building_blocks/demo-vite/swiper-gl.esm.js';
import '../building_blocks/demo-vite/swiper-gl.scss';

/**
 * DashSwiper is a component that creates an interactive swiper/slider
 * using Swiper.js with WebGL effects. It supports features like autoplay,
 * navigation, pagination, and custom shaders.
 */
class DashSwiper extends Component {
    constructor(props) {
        super(props);
        this.swiperRef = React.createRef();
    }

    componentDidMount() {
    const { loop, shader, speed, swiperOptions, navigation, pagination, autoplay } = this.props;
    setTimeout(() => {
        if (this.swiperRef.current instanceof HTMLElement) {
            this.swiper = new Swiper(this.swiperRef.current, {
                ...swiperOptions,
                modules: [Autoplay, Navigation, Pagination, SwiperGL],
                effect: 'gl',
                loop,
                speed,
                gl: {
                   shader: shader,
                },
                navigation,
                pagination,
                autoplay,
            });

             // Add mouseenter and mouseleave event listeners
            this.swiperRef.current.addEventListener('mouseenter', () => {
                this.swiper.autoplay.stop();
            });

            this.swiperRef.current.addEventListener('mouseleave', () => {
                this.swiper.autoplay.start();
            });
        }
    }, 0);
}

    componentDidUpdate() {
        this.initSwiper();
    }

    componentWillUnmount() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    }

    render() {
        const { id, slides, className, nextButton, prevButton, pagination } = this.props;
        return (
            <div id={id} className={`swiper ${className}`} ref={this.swiperRef} style={{height: '100%'}}>
                <div className="swiper-wrapper" style={{height: '100%'}}>
                    {slides.map((slide, index) => (
                        <div key={index} className="swiper-slide" style={{height: '100%'}}>
                            <a href={slide.link} target="_blank" rel="noopener noreferrer" style={{'color': 'white'}}>
                                <img className='swiper-gl-image' src={slide.src} alt={slide.alt} style={{height: '100%'}}/>
                                <div className="swiper-slide-content" style={{position: 'absolute', left: '32px', bottom: '32px', maxWidth: 'calc(100% - 64px);', color:'white'}}>
                                    <div className="swiper-slide-title" style={{fontSize: '32px', fontWeight: 'bold', lineHeight: 1.25, textShadow: '0px 0px 5px rgba(0,0,0,.25)'}}>{slide.title}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {nextButton && <div className="swiper-button-next"></div>}
                {prevButton && <div className="swiper-button-prev"></div>}
                {pagination && <div className="swiper-pagination"></div>}
            </div>
        );
    }
}

DashSwiper.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * If true, enables continuous loop mode.
     */
    loop: PropTypes.bool,

    /**
     * An array of shader names to be used for the WebGL effect.
     */
    shader: PropTypes.arrayOf(PropTypes.string),

    /**
     * The transition speed between slides in milliseconds.
     */
    speed: PropTypes.number,

    /**
     * Configuration object for autoplay behavior.
     */
    autoplay: PropTypes.shape({
        /**
         * Delay between transitions (in ms).
         */
        delay: PropTypes.number,
        /**
         * Whether to stop autoplay on user interaction.
         */
        disableOnInteraction: PropTypes.bool,
    }),

    /**
     * An array of objects representing the slides in the swiper.
     * Each object should have src, alt, title, and link properties.
     */
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            title: PropTypes.string,
            link: PropTypes.string
        })
    ),

    /**
     * Additional CSS class for the root element.
     */
    className: PropTypes.string,

    /**
     * Configuration object for navigation.
     */
    navigation: PropTypes.shape({
        /**
         * CSS selector or HTML element of the previous button.
         */
        prevEl: PropTypes.string,
        /**
         * CSS selector or HTML element of the next button.
         */
        nextEl: PropTypes.string,
    }),

    /**
     * Configuration object for pagination.
     */
    pagination: PropTypes.shape({
        /**
         * CSS selector or HTML element of the pagination container.
         */
        el: PropTypes.string,
        /**
         * If true, pagination bullets will be clickable.
         */
        clickable: PropTypes.bool,
    }),

    /**
     * If true, displays the next navigation button.
     */
    nextButton: PropTypes.bool,

    /**
     * If true, displays the previous navigation button.
     */
    prevButton: PropTypes.bool,

    /**
     * Additional options to pass directly to Swiper instance.
     */
    swiperOptions: PropTypes.object,
};

DashSwiper.defaultProps = {
    id: null,
    loop: false,
    shader: ['random'],
    speed: 1000,
     navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slides: [],
    className: null,
    nextButton: true,
    prevButton: true,
    swiperOptions: {}
};


export default DashSwiper;
