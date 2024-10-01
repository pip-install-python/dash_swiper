import dash_swiper
from dash import Dash, html, dcc, Input, Output, State, callback, get_asset_url
from dash.exceptions import PreventUpdate


app = Dash(__name__, assets_folder="assets", external_stylesheets=['https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'])

app.layout = html.Div([
    dash_swiper.DashSwiper(
        id="my-swiper",
        className="swiper-slide",
        swiperOptions={
            "direction": "horizontal",
            "loop": True,
            "pauseOnMouseEnter": True,
            "autoplay": False,
            "waitForTransition": True,
        },
        slides=[
                {
                    "src": get_asset_url("images/01.jpg"),
                    "alt": "Image 1",
                    "title": "Spider-Man: No Way Home",
                    "link": "https://www.example1.com",
                },
                {
                    "src": get_asset_url("images/02.jpg"),
                    "alt": "Image 2",
                    "title": "Free Guy",
                    "link": "https://www.example2.com",
                },
                {
                    "src": get_asset_url("images/03.jpg"),
                    "alt": "Image 3",
                    "title": "The Nice Guys",
                    "link": "https://www.example3.com",
                },
                {
                    "src": get_asset_url("images/04.jpg"),
                    "alt": "Image 4",
                    "title": "Cage",
                    "link": "https://www.example4.com",
                },
                {
                    "src": get_asset_url("images/05.jpg"),
                    "alt": "Image 5",
                    "title": "avatar",
                    "link": "https://www.example5.com",
                },
            ],
        shader=['random', 'morph-x', 'morph-y', 'wind', 'wave-x'],
    ),

    html.Div(style={"height": "50px"}),  # Spacer
    dash_swiper.DashCarousel(
        id="my-carousel",
        className="custom-carousel",
        slides=[
            {
                "src": get_asset_url("images/01.jpg"),
                "alt": "Spider Man",
                "title": "Spider-Man: No Way Home",
                "description": "A thrilling superhero adventure.",
            },
            {
                "src": get_asset_url("images/02.jpg"),
                "alt": "Free Guy",
                "title": "Free Guy",
                "description": "A comedy about a video game NPC.",
            },
            {
                "src": get_asset_url("images/03.jpg"),
                "alt": "Nice Guys Finish Last",
                "title": "The Nice Guys",
                "description": "A neo-noir comedy thriller.",
            },
            {
                "src": get_asset_url("images/04.jpg"),
                "alt": "Cage",
                "title": "Cage",
                "description": "An intense action-packed movie.",
            },
            {
                "src": get_asset_url("images/05.jpg"),
                "alt": "Avatar",
                "title": "Avatar",
                "description": "An epic science fiction adventure.",
            },
        ],
        carouselEffect={
            "opacityStep": 0.33,
            "scaleStep": 0.2,
            "sideSlides": 1,
        },
        autoplayEnabled=True,  # Set this to False to disable autoplay
        autoplay={
            "delay": 3000,
            "disableOnInteraction": True,
        },
        loop=True,
        grabCursor=True,
        navigation=False,
        pagination=False,
        slidesPerView=2,
    ),
    html.Div(id='current-slide-display', style={"color": "white", "marginTop": "20px"})

], style={"width": "100%", "height": "100vh", "background": "black"})


@callback(
    Output("current-slide-display", "children"),
    Input("my-carousel", "activeSlideAlt")
)
def display_active_slide(active_slide_alt):
    if active_slide_alt is None:
        raise PreventUpdate
    return f"Current Slide: {active_slide_alt}"

if __name__ == "__main__":
    app.run_server(debug=True, port="3050")