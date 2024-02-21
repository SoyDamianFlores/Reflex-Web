import reflex as rx
from link_bio.styles.styles import Size as Size


def link_sponsor(imagen: str, url: str, alt: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=imagen,
            height=Size.CHON.value,
            width="auto",
            alt=alt
            
        ),
        href=url,
        is_external=True
    )