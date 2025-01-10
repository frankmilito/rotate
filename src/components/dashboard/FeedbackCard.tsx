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
import Image from "next/image";

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
      justify="space-between"
      align={{ base: "start", sm: "center" }}
    >
      <Flex gap={4}>
        <Button
          display="flex"
          flexDir="column"
          py={{ base: 6, sm: 8 }}
          bg={upvoteBg}
          _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
        >
          <ChevronUpIcon />
          <Text
            fontWeight="bold"
            color={textColor}
            fontSize={{ base: "sm", sm: "lg" }}
          >
            {feedback.upvotes}
          </Text>
        </Button>

        <Box flex={1}>
          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            fontWeight="semibold"
            mb={2}
            color={textColor}
          >
            {feedback.title}
          </Text>
          <Text
            color={descriptionColor}
            mb={4}
            fontSize={{ base: "sm", sm: "md" }}
          >
            {feedback.description}
          </Text>
          <Tag
            fontWeight="bold"
            p="3"
            color={feedback.type !== "UI" ? "primary.500" : "red"}
            bg="primary.100"
          >
            {feedback.type}
          </Tag>
        </Box>
      </Flex>
      <Box>
        <Flex gap={2}>
          <Image src="/Path.svg" width={14} height={14} alt="comment" />
          <Text fontWeight={"bold"} fontSize={"xs"}>
            {feedback.comment}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
