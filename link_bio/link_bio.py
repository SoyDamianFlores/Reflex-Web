import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.views.header import header
from link_bio.views.links import links
from link_bio.components.footer import footer
from link_bio.views.sponsors import sponsors
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.about import about




class State():
  pass




def index() -> rx.Component:
    return rx.box( 
        navbar(),
            rx.center(
                rx.vstack( 
                header(),
                links(),
                sponsors(),
                max_width = styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )





app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE
)
app.add_page(
    index,
    route="/",
    title="RuviElena Calderon | Real Estate | Desarrollos Residenciales",
    description="Invierte de manera inteligente en Yucatan. ¡Contactame para mas información.!",
    image="favicon.ico"
),

app.add_page(
    about,
    route="/about",
)
