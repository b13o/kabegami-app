import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <Card className={cn("bg-orange-100/60 border-none px-6", className)}>
      {children}
    </Card>
  );
};
