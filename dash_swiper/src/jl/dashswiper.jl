# AUTO GENERATED FILE - DO NOT EDIT

export dashswiper

"""
    dashswiper(;kwargs...)

A DashSwiper component.
DashSwiper is a component that creates an interactive swiper/slider
using Swiper.js with WebGL effects. It supports features like autoplay,
navigation, pagination, and custom shaders.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `autoplay` (optional): Configuration object for autoplay behavior.. autoplay has the following type: lists containing elements 'delay', 'disableOnInteraction'.
Those elements have the following types:
  - `delay` (Real; optional): Delay between transitions (in ms).
  - `disableOnInteraction` (Bool; optional): Whether to stop autoplay on user interaction.
- `className` (String; optional): Additional CSS class for the root element.
- `loop` (Bool; optional): If true, enables continuous loop mode.
- `navigation` (optional): Configuration object for navigation.. navigation has the following type: lists containing elements 'prevEl', 'nextEl'.
Those elements have the following types:
  - `prevEl` (String; optional): CSS selector or HTML element of the previous button.
  - `nextEl` (String; optional): CSS selector or HTML element of the next button.
- `nextButton` (Bool; optional): If true, displays the next navigation button.
- `pagination` (optional): Configuration object for pagination.. pagination has the following type: lists containing elements 'el', 'clickable'.
Those elements have the following types:
  - `el` (String; optional): CSS selector or HTML element of the pagination container.
  - `clickable` (Bool; optional): If true, pagination bullets will be clickable.
- `prevButton` (Bool; optional): If true, displays the previous navigation button.
- `shader` (Array of Strings; optional): An array of shader names to be used for the WebGL effect.
- `slides` (optional): An array of objects representing the slides in the swiper.
Each object should have src, alt, title, and link properties.. slides has the following type: Array of lists containing elements 'src', 'alt', 'title', 'link'.
Those elements have the following types:
  - `src` (String; required)
  - `alt` (String; optional)
  - `title` (String; optional)
  - `link` (String; optional)s
- `speed` (Real; optional): The transition speed between slides in milliseconds.
- `swiperOptions` (Dict; optional): Additional options to pass directly to Swiper instance.
"""
function dashswiper(; kwargs...)
        available_props = Symbol[:id, :autoplay, :className, :loop, :navigation, :nextButton, :pagination, :prevButton, :shader, :slides, :speed, :swiperOptions]
        wild_props = Symbol[]
        return Component("dashswiper", "DashSwiper", "dash_swiper", available_props, wild_props; kwargs...)
end

