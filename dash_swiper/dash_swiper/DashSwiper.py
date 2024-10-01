# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashSwiper(Component):
    """A DashSwiper component.
DashSwiper is a component that creates an interactive swiper/slider
using Swiper.js with WebGL effects. It supports features like autoplay,
navigation, pagination, and custom shaders.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- autoplay (dict; default {    delay: 2500,    disableOnInteraction: False,}):
    Configuration object for autoplay behavior.

    `autoplay` is a dict with keys:

    - delay (number; optional):
        Delay between transitions (in ms).

    - disableOnInteraction (boolean; optional):
        Whether to stop autoplay on user interaction.

- className (string; optional):
    Additional CSS class for the root element.

- loop (boolean; default False):
    If True, enables continuous loop mode.

- navigation (dict; default {    prevEl: '.swiper-button-prev',    nextEl: '.swiper-button-next',}):
    Configuration object for navigation.

    `navigation` is a dict with keys:

    - nextEl (string; optional):
        CSS selector or HTML element of the next button.

    - prevEl (string; optional):
        CSS selector or HTML element of the previous button.

- nextButton (boolean; default True):
    If True, displays the next navigation button.

- pagination (dict; default {    el: '.swiper-pagination',    clickable: True,}):
    Configuration object for pagination.

    `pagination` is a dict with keys:

    - clickable (boolean; optional):
        If True, pagination bullets will be clickable.

    - el (string; optional):
        CSS selector or HTML element of the pagination container.

- prevButton (boolean; default True):
    If True, displays the previous navigation button.

- shader (list of strings; default ['random']):
    An array of shader names to be used for the WebGL effect.

- slides (list of dicts; optional):
    An array of objects representing the slides in the swiper. Each
    object should have src, alt, title, and link properties.

    `slides` is a list of dicts with keys:

    - alt (string; optional)

    - link (string; optional)

    - src (string; required)

    - title (string; optional)

- speed (number; default 1000):
    The transition speed between slides in milliseconds.

- swiperOptions (dict; optional):
    Additional options to pass directly to Swiper instance."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_swiper'
    _type = 'DashSwiper'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, loop=Component.UNDEFINED, shader=Component.UNDEFINED, speed=Component.UNDEFINED, autoplay=Component.UNDEFINED, slides=Component.UNDEFINED, className=Component.UNDEFINED, navigation=Component.UNDEFINED, pagination=Component.UNDEFINED, nextButton=Component.UNDEFINED, prevButton=Component.UNDEFINED, swiperOptions=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'autoplay', 'className', 'loop', 'navigation', 'nextButton', 'pagination', 'prevButton', 'shader', 'slides', 'speed', 'swiperOptions']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'autoplay', 'className', 'loop', 'navigation', 'nextButton', 'pagination', 'prevButton', 'shader', 'slides', 'speed', 'swiperOptions']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashSwiper, self).__init__(**args)
