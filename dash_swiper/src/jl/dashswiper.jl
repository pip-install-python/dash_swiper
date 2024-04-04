# AUTO GENERATED FILE - DO NOT EDIT

export dashswiper

"""
    dashswiper(;kwargs...)

A DashSwiper component.

Keyword arguments:
- `id` (String; optional)
- `autoplay` (optional): . autoplay has the following type: lists containing elements 'delay', 'disableOnInteraction'.
Those elements have the following types:
  - `delay` (Real; optional)
  - `disableOnInteraction` (Bool; optional)
- `className` (String; optional)
- `loop` (Bool; optional)
- `navigation` (optional): . navigation has the following type: lists containing elements 'prevEl', 'nextEl'.
Those elements have the following types:
  - `prevEl` (String; optional)
  - `nextEl` (String; optional)
- `nextButton` (Bool; optional)
- `pagination` (optional): . pagination has the following type: lists containing elements 'el', 'clickable'.
Those elements have the following types:
  - `el` (String; optional)
  - `clickable` (Bool; optional)
- `prevButton` (Bool; optional)
- `shader` (String; optional)
- `slides` (optional): . slides has the following type: Array of lists containing elements 'src', 'alt', 'title', 'link'.
Those elements have the following types:
  - `src` (String; required)
  - `alt` (String; optional)
  - `title` (String; optional)
  - `link` (String; optional)s
- `speed` (Real; optional)
- `swiperOptions` (Dict; optional)
"""
function dashswiper(; kwargs...)
        available_props = Symbol[:id, :autoplay, :className, :loop, :navigation, :nextButton, :pagination, :prevButton, :shader, :slides, :speed, :swiperOptions]
        wild_props = Symbol[]
        return Component("dashswiper", "DashSwiper", "dash_swiper", available_props, wild_props; kwargs...)
end

