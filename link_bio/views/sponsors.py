import reflex as rx
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size
from link_bio.components.link_sponsor import link_sponsor



def sponsors() -> rx.Component:
    return rx.vstack(
        title("Respalda: "),
        rx.responsive_grid(
            link_sponsor(
                "rahis.png",
                "https://rentahouseinsurgentessur.com/",
                "Insurgentes Sur Office"
            ),
            link_sponsor(
                "rahyu.png",
                "https://rentahouseyucatan.com/",
                "Yucatan Office"
            ),
            spacing=Size.DEFAULT.value,
            columns=[1, 2]
        ),
        width="100%",
        align_items="start",
        spacing=Size.MEDIUM.value
    )