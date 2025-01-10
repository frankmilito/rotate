import { VStack } from "@chakra-ui/react";
import { FeedbackCard } from "./FeedbackCard";
import { Feedback } from "@/types";

export const FeedbackList: React.FC<{ feedbacks: Feedback[] }> = ({
  feedbacks,
}) => {
  return (
    <VStack spacing={4} align="stretch">
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </VStack>
  );
};
