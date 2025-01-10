"use client";
import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { FeedbackHeader } from "./FeedbackHeader";
import { FeedbackList } from "./FeedbackList";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "../common/ThemeToggle";
import { Feedback } from "@/types";
import { useState } from "react";

export const FeedbackBoard: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const feedbackList: Feedback[] = [
    {
      id: 1,
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      upvotes: 112,
      tags: ["Enhancement"],
      type: "Enhancement",
    },
    {
      id: 2,
      title: "Add a dark theme option",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
      upvotes: 99,
      tags: ["Feature"],
      type: "Feature",
    },
    {
      id: 3,
      title: "Q&A within the challenge hubs",
      description: "Challenge-specific Q&A would make for easy reference.",
      upvotes: 65,
      tags: ["Feature"],
      type: "Feature",
    },
    {
      id: 4,
      title: "Allow image/video upload to feedback",
      description: "Images and screencasts can enhance comments on solutions.",
      upvotes: 51,
      tags: ["UI"],
      type: "UI",
    },
    {
      id: 5,
      title: "Ability to follow others",
      description: "Stay updated on comments and solutions other people post.",
      upvotes: 42,
      tags: ["Feature"],
      type: "Feature",
    },
    {
      id: 6,
      title: "Preview images not loading",
      description:
        "Challenge preview images are missing when you apply a filter.",
      upvotes: 3,
      tags: ["Bug"],
      type: "Bug",
    },
  ];

  const filteredFeedback = feedbackList.filter((feedback) =>
    selectedTag === "All" ? true : feedback.tags.includes(selectedTag)
  );
  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={8}>
        <Flex justify="flex-end" mb={4}>
          <ThemeToggle />
        </Flex>
        <Flex gap={8} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "300px" }}>
            <Sidebar selectedTag={selectedTag} onTagSelect={setSelectedTag} />
          </Box>
          <Box flex={1}>
            <FeedbackHeader />
            <FeedbackList feedbacks={filteredFeedback} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
