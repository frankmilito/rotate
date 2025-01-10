"use client";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ThemeToggle: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      borderRadius="lg"
      bg={bgColor}
      _hover={{
        bg: useColorModeValue("gray.200", "gray.600"),
      }}
    />
  );
};
