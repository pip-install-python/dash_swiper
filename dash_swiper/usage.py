import dash_swiper
from dash import *

app = Dash(
    __name__,
    assets_folder="assets",
)

app.layout = html.Div(
    [
        dash_swiper.DashSwiper(
            id="my-swiper",
            className="swiper-slide",
            swiperOptions={
                "direction": "horizontal",
                "loop": True,
                "pauseOnMouseEnter": True,
                "autoplay": False,  # Add this line to turn off autoplay
                "waitForTransition": True,
                # Add more Swiper options here
            },
            # speed=0,
            # loop=True,
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
            shader="random",  # Add the shader effect here
        ),
    ],
    style={"width": "100%", "height": "60vh"},
)

if __name__ == "__main__":
    app.run_server(debug=True, port="3053")
