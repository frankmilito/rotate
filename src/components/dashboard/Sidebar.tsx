import { RoadmapItem } from "@/types";
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Tag,
  useColorModeValue,
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
  const roadmapItems: RoadmapItem[] = [
    { status: "Planned", count: 2, color: "orange" },
    { status: "In-Progress", count: 3, color: "purple" },
    { status: "Live", count: 1, color: "blue" },
  ];

  return (
    <VStack spacing={4} align="stretch">
      <Box
        p={6}
        borderRadius="lg"
        bgGradient="linear(to-r, purple.400, pink.500)"
        color="white"
      >
        <Heading size="md">Frontend Mentor</Heading>
        <Text>Feedback Board</Text>
      </Box>

      <Box p={6} bg={cardBg} borderRadius="lg">
        <Flex gap={2} flexWrap="wrap">
          {tags.map((tag) => (
            <Tag
              key={tag}
              size="lg"
              variant={selectedTag === tag ? "solid" : "outline"}
              colorScheme={selectedTag === tag ? "blue" : "gray"}
              bg={selectedTag === tag ? "#4661E6" : "white"}
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
                <Box w={2} h={2} borderRadius="full" bg={`${item.color}.500`} />
                <Text color="gray.600">{item.status}</Text>
              </Flex>
              <Text fontWeight="bold">{item.count}</Text>
            </Flex>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};
