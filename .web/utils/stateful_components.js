/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"
import { HamburgerIcon } from "@chakra-ui/icons"




export function Fragment_fd0e7cb8f9fb4669a6805377d925fba0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Hamburgericon_ac5a8dde838a3c9f56f590694f05c0e8 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_c85015a5e55e44d6345a13fe2896bde0 = useCallback((_e) => addEvents([Event("state.drawer_state.right", {})], (_e), {}), [addEvents, Event])

  return (
    <HamburgerIcon onClick={on_click_c85015a5e55e44d6345a13fe2896bde0} sx={{"boxSize": "7", "cursor": "pointer", "display": ["flex", "flex", "none"]}}/>
  )
}

export function Button_ca0ca2f23933cb17b6a8abcd0ae96813 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_c85015a5e55e44d6345a13fe2896bde0 = useCallback((_e) => addEvents([Event("state.drawer_state.right", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_c85015a5e55e44d6345a13fe2896bde0} sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#525050", "backgroundColor": "#b39679", "whiteSpace": "normal", "display": "block", "textAlign": "start", "_hover": {"backgroundColor": "#f5f5dc"}}}>
  {`Close`}
</Button>
  )
}

export function Drawer_d0842380ba4cd236ea881742e6d2902f () {
  const state__drawer_state = useContext(StateContexts.state__drawer_state)


  return (
    <Drawer isOpen={state__drawer_state.show_right}>
  <DrawerOverlay>
  <DrawerContent sx={{"bg": "rgba(0, 0, 0, 0.3)"}}>
  <DrawerHeader sx={{"color": "lightgray"}}>
  {`Confirm`}
</DrawerHeader>
  <DrawerBody>
  <Accordion allowToggle={true} sx={{"width": "100%"}}>
  <AccordionItem>
  <AccordionButton>
  <Heading sx={{"color": "gray", "fontFamily": "Instrument-Sans", "fontWeight": "400"}}>
  {`Example`}
</Heading>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <Text sx={{"color": "gray"}}>
  {`This is an example of an accordion component.`}
</Text>
</AccordionPanel>
</AccordionItem>
</Accordion>
  <VStack>
  <Menu>
  <MenuButton sx={{"color": "lightgray"}}>
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
  <Menu>
  <MenuButton sx={{"color": "lightgray"}}>
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
  <Menu>
  <MenuButton sx={{"color": "lightgray"}}>
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
</VStack>
</DrawerBody>
  <DrawerFooter>
  <Button_ca0ca2f23933cb17b6a8abcd0ae96813/>
</DrawerFooter>
</DrawerContent>
</DrawerOverlay>
</Drawer>
  )
}
