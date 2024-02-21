import reflex as rx
from link_bio.components.link_button import links_button
from link_bio.components.title import title
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.styles import Size as Size


const = "ruvielenacalderon.rah@gmail.com"

def links() -> rx.Component:
    return rx.vstack(
        title("Desarrollos Inmobiliarios"),
        links_button(
            "Inmuebles Vendidos", 
            "Estados Unidos de México",
            "icons/www.svg",
            "https://my.flexmls.com/GerenciaGestionPlus/search/shared_links/9d4Is/listings",
            is_external= True
        ),
        
        links_button(
            "LinkedIn", 
            "Perfil Profesional",
            "icons/linkedin.svg",
            "https://www.linkedin.com/in/ruvielena-calder%C3%B3n-de-le%C3%B3n-2a3882178/",
            is_external= True
        ),
        links_button(
            "Agenda una Asesoría", 
            "Programa un meet",
            "icons/check.svg",
            "/about",
            is_external= False
        ),
        links_button(
            "Conoce Yucatan", 
            "Únete a un Viaje Místico en Tierras Mayas",
            "icons/www.svg",
            "https://www.conoceyucatan.com/",
            is_external= True
        ),
        title("Redes Sociales"),
        links_button(
            "Facebook", 
            "Perfil Profesional",
            "icons/facebook3.svg",
            "https://www.facebook.com/profile.php?id=61552777078591&mibextid=rS40aB7S9Ucbxw6v",
            is_external= True
        ),
        links_button(
            "Instagram", 
            "Canal de Difusión",
            "icons/instagram.svg",
            "https://www.instagram.com/soyruvi/",
            is_external= True
        ),
        links_button(
            "LinkedIn", 
            "Perfil Profesional",
            "icons/linkedin.svg",
            "https://www.linkedin.com/in/ruvielena-calder%C3%B3n-de-le%C3%B3n-2a3882178/",
            is_external= True
        ),
        links_button(
            "Youtube", 
            "Conoce Nuestro Canal",
            "icons/youtube.svg",
            "https://youtube.com/@RuvielenaCalderon?si=9S4KP16kvcVTpIyn",
            is_external= True
        ),
    
        title("Contacto"),
        links_button(
            "Email", 
            const,
            "icons/mail.svg",
            f"mailto:{const}",
            is_external= True
        ),
        links_button(
            "Whatsapp", 
            "Escribeme un mensaje directo", 
            "icons/whatsapp.svg",
            "https://wa.link/84oz5b",
            is_external= True
        ),

    
        width="100%",
        spacing=Size.MEDIUM.value
    )
