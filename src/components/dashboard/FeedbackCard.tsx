"use client";
import {
  Box,
  Flex,
  Text,
  Tag,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Feedback } from "@/types";

interface FeedbackCardProps {
  feedback: Feedback;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const descriptionColor = useColorModeValue("gray.600", "gray.300");
  const upvoteBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      bg={cardBg}
      p={6}
      borderRadius="lg"
      gap={4}
      boxShadow="sm"
      _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
      transition="all 0.2s"
    >
      <Button
        display="flex"
        flexDir="column"
        h="auto"
        py={2}
        bg={upvoteBg}
        _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
      >
        <ChevronUpIcon />
        <Text fontWeight="bold" color={textColor}>
          {feedback.upvotes}
        </Text>
      </Button>

      <Box flex={1}>
        <Text fontSize="lg" fontWeight="semibold" mb={2} color={textColor}>
          {feedback.title}
        </Text>
        <Text color={descriptionColor} mb={4}>
          {feedback.description}
        </Text>
        <Tag
          colorScheme={
            feedback.type === "Enhancement"
              ? "purple"
              : feedback.type === "Feature"
              ? "blue"
              : "red"
          }
        >
          {feedback.type}
        </Tag>
      </Box>
    </Flex>
  );
};
