import { VStack } from "@chakra-ui/react";
import { FeedbackCard } from "./FeedbackCard";
import { Feedback } from "@/types";

export const FeedbackList: React.FC = () => {
  const feedbacks: Feedback[] = [
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
  ];

  return (
    <VStack spacing={4} align="stretch">
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </VStack>
  );
};
