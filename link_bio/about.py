import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.components.form import form




def about()-> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
                rx.vstack( 
                form(),
                ),
                ),
        )
                    
           
            