/** @jsxImportSource @emotion/react */


import { Fragment, useCallback } from "react"
import { Drawer_d0842380ba4cd236ea881742e6d2902f, Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Hamburgericon_ac5a8dde838a3c9f56f590694f05c0e8 } from "/utils/stateful_components"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Checkbox, Grid, HStack, Image as ChakraImage, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, Textarea, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { getRefValue, getRefValues, set_val } from "/utils/state"
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
  <VStack>
  <VStack>
  <Box as={`form`}>
  <VStack sx={{"paddingTop": "50px", "maxWidth": "100%"}}>
  <Text sx={{"fontSize": "2em"}}>
  {`Formulario`}
</Text>
  <Input name={`first_name`} placeholder={`First Name`} sx={{"border": "1px solid #000", "colorScheme": "green"}} type={`text`}/>
  <Input name={`last_name`} placeholder={`Last Name`} sx={{"border": "1px solid #000"}} type={`text`}/>
  <Textarea name={`mensaje`} placeholder={`Escriba un mensaje`} sx={{"border": "1px solid #000"}}/>
  <HStack>
  <Checkbox name={`check`} value={`true`}>
  {`No soy un robot`}
</Checkbox>
</HStack>
  <Button sx={{"textAlign": "center", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "_hover": {"backgroundColor": "#f5f5dc"}}} type={`submit`}>
  {`Submit`}
</Button>
  <AlertDialog>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`Confirmación`}
</AlertDialogHeader>
  <AlertDialogBody>
  {`Mensaje Enviado Exitosamente.`}
</AlertDialogBody>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
</VStack>
</Box>
</VStack>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
