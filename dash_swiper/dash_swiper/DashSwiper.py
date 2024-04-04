# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashSwiper(Component):
    """A DashSwiper component.


Keyword arguments:

- id (string; optional)

- autoplay (dict; default {    delay: 2500,    disableOnInteraction: False,})

    `autoplay` is a dict with keys:

    - delay (number; optional)

    - disableOnInteraction (boolean; optional)

- className (string; optional)

- loop (boolean; default False)

- navigation (dict; default {    prevEl: '.swiper-button-prev',    nextEl: '.swiper-button-next',})

    `navigation` is a dict with keys:

    - nextEl (string; optional)

    - prevEl (string; optional)

- nextButton (boolean; default True)

- pagination (dict; default {    el: '.swiper-pagination',    clickable: True,})

    `pagination` is a dict with keys:

    - clickable (boolean; optional)

    - el (string; optional)

- prevButton (boolean; default True)

- shader (string; default 'random')

- slides (list of dicts; optional)

    `slides` is a list of dicts with keys:

    - alt (string; optional)

    - link (string; optional)

    - src (string; required)

    - title (string; optional)

- speed (number; default 1000)

- swiperOptions (dict; optional)"""
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
