import { RoadmapItem } from "@/types";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Stack,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

interface SidebarProps {
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedTag,
  onTagSelect,
}) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const [isTabMode] = useMediaQuery("(min-width: 48em)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const roadmapItems: RoadmapItem[] = [
    { status: "Planned", count: 2, color: "orange" },
    { status: "In-Progress", count: 3, color: "purple" },
    { status: "Live", count: 1, color: "blue" },
  ];

  return (
    <>
      <Stack
        spacing={4}
        align="stretch"
        display={{ base: "flex", md: "grid", lg: "flex" }}
        gridTemplateColumns={"repeat(3,1fr)"}
      >
        <Box
          p={4}
          px={6}
          borderRadius="lg"
          backgroundImage={
            isTabMode ? "url('Oval.svg')" : "url('bgmobile.svg')"
          }
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          color="white"
          display="flex"
          alignItems="start"
          flexDirection={{ base: "row", lg: "column" }}
          justifyContent={{ base: "space-between", lg: "end" }}
          w="100%"
          h={{ base: "100%", lg: "150px" }}
        >
          <Stack>
            <Heading size={{ base: "sm", md: "md" }}>Frontend Mentor</Heading>
            <Text fontSize={{ base: "xs", sm: "sm" }}>Feedback Board</Text>
          </Stack>
          <Flex
            justify={"end"}
            direction="row-reverse"
            display={{ base: "inline-block", md: "none" }}
            onClick={onOpen}
          >
            <HamburgerIcon boxSize="10" />
          </Flex>
        </Box>

        <Box
          p={6}
          bg={cardBg}
          borderRadius="lg"
          display={{ base: "none", md: "inline-block", lg: "inline-block" }}
        >
          <Flex gap={2} flexWrap="wrap">
            {tags.map((tag) => (
              <Tag
                py={2}
                px={4}
                key={tag}
                size={{ base: "sm", md: "md" }}
                color={selectedTag === tag ? "white" : "primary.600"}
                bg={selectedTag === tag ? "primary.600" : "primary.100"}
                onClick={() => onTagSelect(tag)}
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                {tag}
              </Tag>
            ))}
          </Flex>
        </Box>

        <Box
          p={6}
          bg={cardBg}
          borderRadius="lg"
          display={{ base: "none", md: "inline-block", lg: "inline-block" }}
        >
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="sm">Roadmap</Heading>
            <Text
              color="blue.500"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              View
            </Text>
          </Flex>
          <VStack align="stretch" spacing={2}>
            {roadmapItems.map((item) => (
              <Flex key={item.status} justify="space-between">
                <Flex align="center" gap={2}>
                  <Box
                    w={2}
                    h={2}
                    borderRadius="full"
                    bg={`${item.color}.500`}
                  />
                  <Text color="gray.600">{item.status}</Text>
                </Flex>
                <Text fontWeight="bold">{item.count}</Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        isFullHeight={false}
      >
        <DrawerOverlay />
        <DrawerContent w="auto">
          <DrawerCloseButton />
          <DrawerBody mt={5}>
            <Box p={3} bg={cardBg} borderRadius="lg">
              <Flex gap={2} flexWrap="wrap">
                {tags.map((tag) => (
                  <Tag
                    py={2}
                    px={4}
                    key={tag}
                    size={{ base: "md" }}
                    color={selectedTag === tag ? "white" : "primary.600"}
                    bg={selectedTag === tag ? "primary.600" : "primary.100"}
                    onClick={() => onTagSelect(tag)}
                    cursor="pointer"
                    _hover={{ opacity: 0.8 }}
                  >
                    {tag}
                  </Tag>
                ))}
              </Flex>
            </Box>

            <Box p={6} bg={cardBg} borderRadius="lg">
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="sm">Roadmap</Heading>
                <Text
                  color="blue.500"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  View
                </Text>
              </Flex>
              <VStack align="stretch" spacing={2}>
                {roadmapItems.map((item) => (
                  <Flex key={item.status} justify="space-between">
                    <Flex align="center" gap={2}>
                      <Box
                        w={2}
                        h={2}
                        borderRadius="full"
                        bg={`${item.color}.500`}
                      />
                      <Text color="gray.600">{item.status}</Text>
                    </Flex>
                    <Text fontWeight="bold">{item.count}</Text>
                  </Flex>
                ))}
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
