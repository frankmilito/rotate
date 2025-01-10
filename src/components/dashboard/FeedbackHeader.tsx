"use client";
import {
  Button,
  Flex,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { SortOption } from "@/types";

interface FeedbackHeaderProps {
  feedbackCount: number;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

export const FeedbackHeader: React.FC<FeedbackHeaderProps> = ({
  feedbackCount,
  sortBy,
  onSortChange,
}) => {
  const bgColor = useColorModeValue("navy.800", "navy.900");
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as SortOption);
  };

  return (
    <Flex
      bg={bgColor}
      p={4}
      borderRadius="lg"
      justify="space-between"
      flexDirection={{ base: "column", sm: "row" }}
      mb={6}
    >
      <Flex align="start" gap={4} alignItems={"center"} justify={"start"}>
        <Text
          color="white"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "lg" }}
        >
          {feedbackCount} {feedbackCount === 1 ? "Suggestion" : "Suggestions"}
        </Text>
        <Select
          value={sortBy}
          onChange={handleSortChange}
          size="sm"
          width="200px"
          color="white"
          borderColor="transparent"
          _hover={{ borderColor: "whiteAlpha.300" }}
          fontWeight="bold"
        >
          <option value="most-upvotes">Most Upvotes</option>
          <option value="least-upvotes">Least Upvotes</option>
        </Select>
      </Flex>
      <Button
        leftIcon={<AddIcon fontSize={8} />}
        bg="brand.900"
        color="white"
        size="xs"
        px={6}
        py={6}
        mt={{ base: 4, sm: 0 }}
        borderRadius={"lg"}
        fontWeight="bold"
      >
        Add Feedback
      </Button>
    </Flex>
  );
};
