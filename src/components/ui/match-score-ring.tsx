
import { cn } from "@/lib/utils";

interface MatchScoreRingProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MatchScoreRing({ score, size = "md", className }: MatchScoreRingProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base"
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-orange-500";
    return "text-gray-500";
  };

  const getScoreType = (score: number) => {
    if (score >= 80) return "high";
    if (score >= 60) return "medium";
    return "low";
  };

  return (
    <div 
      className={cn(
        "match-ring rounded-full flex items-center justify-center font-bold",
        sizeClasses[size],
        getScoreColor(score),
        className
      )}
      data-score={getScoreType(score)}
    >
      {score}%
    </div>
  );
}
