import { Badge } from "@/components/ui/badge";
import { JSX } from "react";

export default function SkillBadge(payload: {
  icon: JSX.Element;
  label: string;
}) {
  return (
    <Badge variant="outline" className="flex items-center gap-1.5">
      {payload.icon}
      {payload.label}
    </Badge>
  );
}
