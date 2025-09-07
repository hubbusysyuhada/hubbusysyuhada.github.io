import { SiMysql, SiPostgresql, SiMongodb, SiRedis } from "react-icons/si";
import { JSX } from "react";

const databases: { label: string; icon: JSX.Element }[] = [
  {
    icon: <SiMysql className="w-3 h-3 text-[#4479A1]" />,
    label: "MySQL",
  },
  {
    icon: <SiPostgresql className="w-3 h-3 text-[#336791]" />,
    label: "PostgreSQL",
  },
  {
    icon: <SiMongodb className="w-3 h-3 text-[#47A248]" />,
    label: "MongoDB",
  },
  {
    icon: <SiRedis className="w-3 h-3 text-[#DC382D]" />,
    label: "Redis",
  },
];
export default databases;
