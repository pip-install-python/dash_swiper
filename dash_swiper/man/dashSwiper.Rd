% Auto-generated: do not edit by hand
\name{dashSwiper}

\alias{dashSwiper}

\title{DashSwiper component}

\description{
DashSwiper is a component that creates an interactive swiper/slider using Swiper.js with WebGL effects. It supports features like autoplay, navigation, pagination, and custom shaders.
}

\usage{
dashSwiper(id=NULL, autoplay=NULL, className=NULL, loop=NULL,
navigation=NULL, nextButton=NULL, pagination=NULL,
prevButton=NULL, shader=NULL, slides=NULL, speed=NULL,
swiperOptions=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{autoplay}{Lists containing elements 'delay', 'disableoninteraction'.
those elements have the following types:
  - delay (numeric; optional): delay between transitions (in ms).
  - disableoninteraction (logical; optional): whether to stop autoplay on user interaction.. Configuration object for autoplay behavior.}

\item{className}{Character. Additional CSS class for the root element.}

\item{loop}{Logical. If true, enables continuous loop mode.}

\item{navigation}{Lists containing elements 'prevel', 'nextel'.
those elements have the following types:
  - prevel (character; optional): css selector or html element of the previous button.
  - nextel (character; optional): css selector or html element of the next button.. Configuration object for navigation.}

\item{nextButton}{Logical. If true, displays the next navigation button.}

\item{pagination}{Lists containing elements 'el', 'clickable'.
those elements have the following types:
  - el (character; optional): css selector or html element of the pagination container.
  - clickable (logical; optional): if true, pagination bullets will be clickable.. Configuration object for pagination.}

\item{prevButton}{Logical. If true, displays the previous navigation button.}

\item{shader}{List of characters. An array of shader names to be used for the WebGL effect.}

\item{slides}{List of lists containing elements 'src', 'alt', 'title', 'link'.
those elements have the following types:
  - src (character; required)
  - alt (character; optional)
  - title (character; optional)
  - link (character; optional)s. An array of objects representing the slides in the swiper.
Each object should have src, alt, title, and link properties.}

\item{speed}{Numeric. The transition speed between slides in milliseconds.}

\item{swiperOptions}{Named list. Additional options to pass directly to Swiper instance.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

