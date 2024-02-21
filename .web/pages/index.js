/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Drawer_d0842380ba4cd236ea881742e6d2902f, Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Hamburgericon_ac5a8dde838a3c9f56f590694f05c0e8 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Grid, Heading, HStack, Image as ChakraImage, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack justifyContent={`space-between`} sx={{"position": "sticky", "bg": "#b39679", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0", "width": "100%"}}>
  <Link as={NextLink} href={`/`} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`/ruth.png`} sx={{"width": "230px", "height": "60px", "margin": "0px", "padding": "0px"}}/>
</Link>
  <Grid sx={{"width": "60%"}}>
  <HStack justifyContent={`space-evenly`} sx={{"paddingX": "2em"}}>
  <Menu>
  <MenuButton sx={{"display": ["none", "none", "flex"]}}>
  {`Menu`}
</MenuButton>
  <MenuList>
  <MenuItem>
  {`Example`}
</MenuItem>
  <MenuDivider/>
  <MenuItem>
  {`Example`}
</MenuItem>
  <MenuItem>
  {`Example`}
</MenuItem>
</MenuList>
  <Spacer/>
</Menu>
  <Menu>
  <MenuButton sx={{"display": ["none", "none", "flex"]}}>
  {`Menu`}
</MenuButton>
  <MenuList>
  <MenuItem>
  {`Example`}
</MenuItem>
  <MenuDivider/>
  <MenuItem>
  {`Example`}
</MenuItem>
  <MenuItem>
  {`Example`}
</MenuItem>
</MenuList>
  <Spacer/>
</Menu>
  <Menu>
  <MenuButton sx={{"display": ["none", "none", "flex"]}}>
  {`Menu`}
</MenuButton>
  <MenuList>
  <MenuItem>
  {`Example`}
</MenuItem>
  <MenuDivider/>
  <MenuItem>
  {`Example`}
</MenuItem>
  <MenuItem>
  {`Example`}
</MenuItem>
</MenuList>
</Menu>
</HStack>
</Grid>
  <Box>
  <Hamburgericon_ac5a8dde838a3c9f56f590694f05c0e8/>
  <Drawer_d0842380ba4cd236ea881742e6d2902f/>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack>
  <Avatar name={`DaMian Flores`} size={`2xl`} src={`linkruvi.png`} sx={{"padding": "1px", "color": "#525050", "bg": "#b39679", "border": "1px", "borderColor": "#dfdab9"}}/>
  <VStack>
  <Heading sx={{"color": "#525050", "fontFamily": "Instrument-Sans", "fontWeight": "400"}}>
  <Text as={`strong`} sx={{"size": "", "fontFamily": "Montserrat", "color": "#bfa77e", "bg": "transparent", "_webkitTextStroke": "1px #000", "textStroke": "1px #000"}}>
  {`Ruvielena Calderon De Flores.`}
</Text>
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#525050", "spacing": "1em"}}>
  {`Real Estate Services`}
</Text>
</VStack>
  {`
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
            `}
</HStack>
  <Flex sx={{"width": "100%", "color": "#525050"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#525050"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#525050"}}>
  {`+10`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#525050"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#525050"}}>
  {`+10`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#525050"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#525050"}}>
  {`+10`}
</Text>
  {` años de experiencia`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#525050", "fontWeight": "bold", "textAlign": "center", "fontStyle": "italic"}}>
  {`Bienvenido a Ruvicom Enterprise: Tu Socio Inmobiliario en Ciudad de México y Yucatán.`}
</Text>
  <Text sx={{"color": "#525050", "fontSize": "0.9em", "textAlign": "justify"}}>
  {`En Ruvicom Enterprise, nos enorgullece ofrecer oportunidades únicas de bienes raíces en dos de las regiones más emocionantes de México: la dinámica Ciudad de México y la pintoresca Yucatán. Somos tu socio confiable en la búsqueda del hogar perfecto o la inversión ideal.`}
</Text>
</VStack>
  <VStack spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading size={`md`} sx={{"width": "100%", "fontFamily": "Montserrat", "fontWeight": "bold", "paddingTop": "1em", "color": "#525050"}}>
  {`Desarrollos Inmobiliarios`}
</Heading>
  <Link as={NextLink} href={`https://my.flexmls.com/GerenciaGestionPlus/search/shared_links/9d4Is/listings`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Inmuebles Vendidos`} src={`icons/www.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Inmuebles Vendidos`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Estados Unidos de México`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ruvielena-calder%C3%B3n-de-le%C3%B3n-2a3882178/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`LinkedIn`} src={`icons/linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Perfil Profesional`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`/about`} isExternal={false} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Agenda una Asesoría`} src={`icons/check.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Agenda una Asesoría`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Programa un meet`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.conoceyucatan.com/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Conoce Yucatan`} src={`icons/www.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Conoce Yucatan`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Únete a un Viaje Místico en Tierras Mayas`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`md`} sx={{"width": "100%", "fontFamily": "Montserrat", "fontWeight": "bold", "paddingTop": "1em", "color": "#525050"}}>
  {`Redes Sociales`}
</Heading>
  <Link as={NextLink} href={`https://www.facebook.com/profile.php?id=61552777078591&mibextid=rS40aB7S9Ucbxw6v`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Facebook`} src={`icons/facebook3.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Facebook`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Perfil Profesional`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/soyruvi/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Instagram`} src={`icons/instagram.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Canal de Difusión`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ruvielena-calder%C3%B3n-de-le%C3%B3n-2a3882178/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`LinkedIn`} src={`icons/linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Perfil Profesional`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/@RuvielenaCalderon?si=9S4KP16kvcVTpIyn`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Youtube`} src={`icons/youtube.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Conoce Nuestro Canal`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`md`} sx={{"width": "100%", "fontFamily": "Montserrat", "fontWeight": "bold", "paddingTop": "1em", "color": "#525050"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:ruvielenacalderon.rah@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Email`} src={`icons/mail.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`ruvielenacalderon.rah@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://wa.link/84oz5b`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Whatsapp`} src={`icons/whatsapp.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Instrument-Sans", "color": "#525050"}}>
  {`Whatsapp`}
</Text>
  <Text sx={{"fontSize": "0.8em", "fontFamily": "Montserrat", "color": "#525050"}}>
  {`Escribeme un mensaje directo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading size={`md`} sx={{"width": "100%", "fontFamily": "Montserrat", "fontWeight": "bold", "paddingTop": "1em", "color": "#525050"}}>
  {`Respalda: `}
</Heading>
  <SimpleGrid columns={[1, 2]} spacing={`1em`}>
  <Link as={NextLink} href={`https://rentahouseinsurgentessur.com/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Insurgentes Sur Office`} src={`rahis.png`} sx={{"height": "8em", "width": "auto"}}/>
</Link>
  <Link as={NextLink} href={`https://rentahouseyucatan.com/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Yucatan Office`} src={`rahyu.png`} sx={{"height": "8em", "width": "auto"}}/>
</Link>
</SimpleGrid>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#525050"}}>
  <ChakraImage alt={`Mapa en Miniatura de México`} src={`mapamexx.png`} sx={{"width": "60px", "height": "50px"}}/>
  <Link as={NextLink} href={`https://damianflores.web.app/`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  {`www.ruvicom.net 2024`}
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`Empresa Nº 1 en Bienes Raices`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`RuviElena Calderon | Real Estate | Desarrollos Residenciales`}
</title>
  <meta content={`Invierte de manera inteligente en Yucatan. ¡Contactame para mas información.!`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
