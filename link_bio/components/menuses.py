import reflex as rx
from link_bio.styles.styles import Size as Size 


def menus ()-> rx.Component:
    return rx.hstack(
        rx.menu(
            rx.menu_button("Menu",
                        display=["none", "none", "flex"],),
            rx.menu_list(
                rx.menu_item("Example"),
                rx.menu_divider(),
                rx.menu_item("Example"),
                rx.menu_item("Example"),
                ),
            rx.spacer(),
        ),
        rx.menu(
            rx.menu_button("Menu",
                        display=["none", "none", "flex"],),
            rx.menu_list(
                rx.menu_item("Example"),
                rx.menu_divider(),
                rx.menu_item("Example"),
                rx.menu_item("Example"),
                ),
            rx.spacer(),
        ),
        rx.menu(
            rx.menu_button("Menu",
                        display=["none", "none", "flex"],),
            rx.menu_list(
                rx.menu_item("Example"),
                rx.menu_divider(),
                rx.menu_item("Example"),
                rx.menu_item("Example"),
                ),
        ),
        justify_content="space-evenly",
        padding_x=Size.BIG.value
        
    )


def menus2 ()-> rx.Component:
    return rx.vstack(
        rx.menu(
            rx.menu_button("Menu",
                           color="lightgray"
                    ),
            rx.menu_list(
                rx.menu_item("Example"
                            ),
                rx.menu_divider(),
                rx.menu_item("Example"
                            ),
                rx.menu_item("Example"
                            ),
                ),
        ),
        rx.menu(
            rx.menu_button("Menu",
                           color="lightgray"
                    ),
            rx.menu_list(
                rx.menu_item("Example"
                            ),
                rx.menu_divider(),
                rx.menu_item("Example"
                            ),
                rx.menu_item("Example"
                            ),
                ),
        ),
        rx.menu(
            rx.menu_button("Menu",
                            color="lightgray"
                    ),
            rx.menu_list(
                rx.menu_item("Example"
                            ),
                rx.menu_divider(),
                rx.menu_item("Example"
                            ),
                rx.menu_item("Example"
                            ),
                ),
        ),
    )