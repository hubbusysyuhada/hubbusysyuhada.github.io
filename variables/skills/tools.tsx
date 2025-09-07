import { Cloud } from "lucide-react";

import {
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiJest,
  SiCypress,
  SiFirebase,
  SiNpm,
} from "react-icons/si";
import { JSX } from "react";

const tools: { label: string; icon: JSX.Element }[] = [
  {
    icon: <SiGit className="w-3 h-3 text-[#F05032]" />,
    label: "Git",
  },
  {
    icon: <SiDocker className="w-3 h-3 text-[#2496ED]" />,
    label: "Docker",
  },
  {
    icon: <Cloud className="w-3 h-3 text-[#FF9900]" />,
    label: "AWS",
  },
  {
    icon: <SiGooglecloud className="w-3 h-3 text-[#4285F4]" />,
    label: "GCP",
  },
  {
    icon: <SiJest className="w-3 h-3 text-[#C21325]" />,
    label: "Jest",
  },
  {
    icon: <SiCypress className="w-3 h-3 text-[#17202C]" />,
    label: "Cypress",
  },
  {
    icon: <SiFirebase className="w-3 h-3 text-[#FFCA28]" />,
    label: "Firebase",
  },
  {
    icon: <SiNpm className="w-3 h-3 text-[#CB3837]" />,
    label: "NPM Package",
  },
];
export default tools;
