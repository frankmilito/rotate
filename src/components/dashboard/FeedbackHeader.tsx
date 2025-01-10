"use client";
import {
  Button,
  Flex,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const FeedbackHeader: React.FC = () => {
  const bgColor = useColorModeValue("navy.800", "navy.900");

  return (
    <Flex
      bg={bgColor}
      p={4}
      borderRadius="lg"
      justify="space-between"
      align="center"
      mb={6}
    >
      <Flex align="center" gap={4}>
        <Text color="white" fontWeight="medium">
          6 Suggestions
        </Text>
        <Select
          placeholder="Sort by: Most Upvotes"
          size="sm"
          width="200px"
          color="white"
          borderColor="transparent"
          _hover={{ borderColor: "whiteAlpha.300" }}
        >
          <option value="most-upvotes">Most Upvotes</option>
          <option value="least-upvotes">Least Upvotes</option>
          <option value="newest">Newest</option>
        </Select>
      </Flex>
      <Button leftIcon={<AddIcon />} colorScheme="purple" size="sm" px={6}>
        Add Feedback
      </Button>
    </Flex>
  );
};
