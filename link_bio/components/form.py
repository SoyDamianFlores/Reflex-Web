import reflex as rx
from link_bio.styles.colors import Color as Color



"""

class AlertDialogState(rx.State):
    show: bool = False

    def change(self):
        self.show = not (self.show)
"""
def form():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.text("Formulario", font_size="2em"),
                rx.input(
                    placeholder="First Name",
                    name="first_name",
                    border="1px solid #000",
                    color_scheme="green"
                ),
                rx.input(
                    placeholder="Last Name",
                    name="last_name",
                    border="1px solid #000"
                ),
                rx.text_area(
                    placeholder="Escriba un mensaje",
                    name="mensaje",
                    border="1px solid #000"
                ),
                rx.hstack(
                    rx.checkbox("No soy un robot", name="check"),
                ),
                rx.button("Submit", 
                        type_="submit",
                        text_align="center",
                        #on_click=AlertDialogState.change,
                ),
                rx.alert_dialog(
                    rx.alert_dialog_overlay(
                        rx.alert_dialog_content(
                            rx.alert_dialog_header("Confirmación"),
                            rx.alert_dialog_body(
                                "Mensaje Enviado Exitosamente."
                            ),
                        ),
                    ),
                ),
            padding_top="50px",
            max_width="100%"
            ),
        ),
    )

