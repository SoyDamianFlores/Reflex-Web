import reflex as rx
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor



def header() -> rx.Component:
    return rx.vstack(

        rx.hstack(
            rx.avatar(name="DaMian Flores", 
                    size="2xl",
                    src="linkruvi.png",
                    padding="1px",
                    color=TextColor.BODY.value,
                    bg=Color.CONTENT.value,
                    border="1px",
                    border_color="#dfdab9"
            ),
            
           
            rx.vstack(
                rx.heading(
                    rx.text(
                    "Ruvielena Calderon De Flores.",
                    as_="strong",
                    size="",
                    font_family="Montserrat",
                    color="#bfa77e",
                    bg="transparent",
                    _webkit_text_stroke= "1px #000",
                    text_stroke= "1px #000"
                    ),
                ),
                
                rx.text(
                    "Real Estate Services", 
                    margin_top=Size.ZERO.value,
                    color=TextColor.BODY.value,
                    spacing=Size.DEFAULT.value
                ),
            ),
                
                """
                rx.hstack(
                link_icon(
                    "icons/instagram.svg",
                    "https://www.instagram.com/soyruvi/",
                    "Instagram"
                ),
                link_icon(
                    "icons/facebook.svg",
                    "https://www.facebook.com/ruvielena.calderondeleon?locale=es_LA",
                    "Facebook"
                ),
                link_icon(
                    "icons/whatsapp.svg",
                    "https://wa.link/84oz5b",
                    "Whatsapp"
                )
                ),
                align_items="start"
            ),
            spacing=Size.DEFAULT.value
            """
        ),
        rx.flex(
            info_text("+10", "años de experiencia"),
            rx.spacer(),
            info_text("+10", "años de experiencia"),
            rx.spacer(),
            info_text("+10", "años de experiencia"),
            width="100%",
            color=TextColor.BODY.value,
            
        ),
        rx.text(f"""Bienvenido a Ruvicom Enterprise: Tu Socio Inmobiliario en Ciudad de México y Yucatán.""",
                font_size=Size.DEFAULT.value,
                color=TextColor.BODY.value,
                font_weight="bold",
                text_align="center",
                font_style="italic"
                ),
        rx.text(f"""En Ruvicom Enterprise, nos enorgullece ofrecer oportunidades únicas de bienes raíces en dos de las regiones más emocionantes de México: la dinámica Ciudad de México y la pintoresca Yucatán. Somos tu socio confiable en la búsqueda del hogar perfecto o la inversión ideal.""",
                color=TextColor.BODY.value,
                font_size="0.9em",
                text_align="justify"
                ),
        spacing=Size.BIG.value,

            align_items="start"
    )