"use client";
import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { FeedbackHeader } from "./FeedbackHeader";
import { FeedbackList } from "./FeedbackList";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "../common/ThemeToggle";

export const FeedbackBoard: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={8}>
        <Flex justify="flex-end" mb={4}>
          <ThemeToggle />
        </Flex>
        <Flex gap={8} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "300px" }}>
            <Sidebar />
          </Box>
          <Box flex={1}>
            <FeedbackHeader />
            <FeedbackList />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
