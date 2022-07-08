import React from "react"
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"

import { MoonIcon, SunIcon } from "./icons"

const Toggle = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)
  return (
    <IconButton
      fontSize="2xl"
      variant="ghost"
      onClick={() => toggleColorMode()}
      icon={<SwitchIcon />}
      _hover={{
        bg: "transparent",
      }}
      _active={{ bg: "transparent" }}
      style={{ boxShadow: "none" }}
    />
  )
}

export default Toggle
