export interface Feedback {
  id: number;
  title: string;
  description: string;
  upvotes: number;
  tags: string[];
  type: "Enhancement" | "Feature" | "Bug" | "UI";
}

export interface RoadmapItem {
  status: "Planned" | "In-Progress" | "Live";
  count: number;
  color: string;
}
