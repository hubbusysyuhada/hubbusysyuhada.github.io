import Image from "next/image";
import { Badge } from "./ui/badge";

export default function LanguageCard(payload: {
  name: string;
  img: string;
  level: string;
}) {
  const { name, level, img: src } = payload;
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
      <div className="w-8 h-8 rounded-full overflow-hidden border border-muted flex-shrink-0 relative">
        <Image
          src={`/flags/${src}`}
          alt={name + " flag"}
          fill
          className="object-cover"
          sizes="32px"
          unoptimized
        />
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm">{name}</div>
        <Badge variant="outline" className="text-xs">
          {level}
        </Badge>
      </div>
    </div>
  );
}
