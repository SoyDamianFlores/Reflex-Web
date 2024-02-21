import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import TextColor as TextColor


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="mapamexx.png",
                 width="60px",
                 height="50px",
                 alt="Mapa en Miniatura de México"
                 ),
        rx.link(f"www.ruvicom.net {datetime.date.today().year}", 
                href="https://damianflores.web.app/", 
                is_external= True,
                font_size=Size.MEDIUM.value
            ),
        rx.text("Empresa Nº 1 en Bienes Raices",
                font_size=Size.MEDIUM.value,
                margin_top=Size.ZERO.value
            ),

        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        padding_x=Size.BIG.value,
        spacing=Size.DEFAULT.value,
        color= TextColor.FOOTER.value
    )