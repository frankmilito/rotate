"use client";
import {
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { SortOption } from "@/types";
import Image from "next/image";

interface FeedbackHeaderProps {
  feedbackCount: number;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

const menuItems = [
  { label: "Most Upvotes", value: "most-upvotes" },
  { label: "Least Upvotes", value: "least-upvotes" },
  { label: "Most Comments", value: "most-comments" },
  { label: "Least Comments", value: "least-comments" },
];
export const FeedbackHeader: React.FC<FeedbackHeaderProps> = ({
  feedbackCount,
  sortBy,
  onSortChange,
}) => {
  const bgColor = useColorModeValue("navy.800", "navy.900");

  const sortLabel = (sort: SortOption) => {
    switch (sort) {
      case "least-upvotes":
        return "Least Upvotes";
      case "most-upvotes":
        return "Most Upvotes";
      case "least-comments":
        return "Least Comments";
      case "most-comments":
        return "Most Comments";

      default:
        break;
    }
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
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            rightIcon={<ChevronDownIcon />}
            bg="transparent"
            color="white"
            borderColor="whiteAlpha.300"
            _active={{
              bg: "transparent",
            }}
            _hover={{
              bg: "transparent",
            }}
          >
            Sort By:{" "}
            <Text display="inline" fontWeight={"bold"}>
              {sortLabel(sortBy)}
            </Text>
          </MenuButton>
          <MenuList bg={"white"} color="primary.500" mt={8} p={0}>
            {menuItems.map((item, i) => (
              <>
                <MenuItem
                  key={item.label}
                  onClick={() => onSortChange(item.value as SortOption)}
                  p="4"
                  fontSize="sm"
                  _hover={{
                    color: "brand.900",
                    bg: "transparent",
                  }}
                  _first={{
                    bg: "transparent",
                  }}
                >
                  <Flex justify="space-between" w={"100%"}>
                    {item.label}
                    {sortBy === item.value && (
                      <Image
                        src="/check.svg"
                        width={11}
                        height={8}
                        alt="check"
                      />
                    )}
                  </Flex>
                </MenuItem>
                {i < menuItems.length - 1 && <Divider />}
              </>
            ))}
          </MenuList>
        </Menu>
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
