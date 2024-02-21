import reflex as rx
from link_bio.styles.styles import Size as Size 
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color
from link_bio.components.drawer import DrawerState
from link_bio.components.menuses import menus, menus2


drawer_instance = DrawerState()

def navbar() -> rx.Component:
    
    return rx.hstack(
        rx.link(
            rx.image(
                src="/ruth.png",
                width="230px",
                height="60px",
                margin="0px",
                padding="0px"
            ),
            href="/"
        ),
        rx.grid(
            menus(),
            width="60%"
        ),
            
        rx.box(
            rx.icon(
                tag="hamburger",
                boxSize="7",
                cursor="pointer",
                on_click=DrawerState.right,
                display=["flex", "flex", "none"]
            ),      
            rx.drawer(
                rx.drawer_overlay(
                    rx.drawer_content(
                        rx.drawer_header("Confirm",
                                        color="lightgray"),
                        rx.drawer_body(
                            rx.accordion(
                                rx.accordion_item(
                                    rx.accordion_button(
                                        rx.heading("Example",
                                                    color="gray"),
                                        rx.accordion_icon(),
                                    ),
                                    rx.accordion_panel(
                                        rx.text(
                                            "This is an example of an accordion component.",
                                            color="gray"
                                        )
                                    ),
                                ),
                                allow_toggle=True,
                                width="100%",
                            ),
                            menus2(),
                        ),
                        rx.drawer_footer(
                            rx.button(
                                "Close", on_click=DrawerState.right
                            )
                        ),
                        bg="rgba(0, 0, 0, 0.3)",
                    )
                ),
                is_open=DrawerState.show_right
            ),    
        ),
            position="sticky",
            bg="#b39679",
            padding_x=Size.BIG.value,
            padding_y=Size.DEFAULT.value,
            z_index="999",
            justify_content= "space-between",
            top="0",
            width="100%"
        )

