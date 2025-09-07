import {
  SiNodedotjs,
  SiTypescript,
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiGo,
  SiExpress,
  SiFastify,
  SiJquery,
  SiRedux,
  SiSass,
  SiGraphql,
  SiSocketdotio,
  SiExpo,
} from "react-icons/si";
import { GiPineapple } from "react-icons/gi";
import { JSX } from "react";

const frameworks: { label: string; icon: JSX.Element }[] = [
  {
    icon: <SiTypescript className="w-3 h-3 text-[#3178C6]" />,
    label: "Typescript",
  },
  {
    icon: <SiNodedotjs className="w-3 h-3 text-[#339933]" />,
    label: "Node.js",
  },
  {
    icon: <SiLaravel className="w-3 h-3 text-[#F05340]" />,
    label: "PHP Laravel",
  },
  {
    icon: <SiReact className="w-3 h-3 text-[#61DAFB]" />,
    label: "React",
  },
  {
    icon: <SiVuedotjs className="w-3 h-3 text-[#4FC08D]" />,
    label: "Vue.js",
  },
  {
    icon: <SiExpress className="w-3 h-3 text-[#000000]" />,
    label: "Express.js",
  },
  {
    icon: <SiFastify className="w-3 h-3 text-[#000000]" />,
    label: "Fastify",
  },
  {
    icon: <SiNextdotjs className="w-3 h-3 text-[#000000]" />,
    label: "Next.js",
  },
  {
    icon: <SiJquery className="w-3 h-3 text-[#0769AD]" />,
    label: "jQuery",
  },
  {
    icon: <SiRedux className="w-3 h-3 text-[#764ABC]" />,
    label: "Redux",
  },
  {
    icon: <SiVuedotjs className="w-3 h-3 text-[#4FC08D]" />,
    label: "Vuex",
  },
  {
    icon: <GiPineapple className="w-3 h-3 text-[#1c8c44]" />,
    label: "Pinia",
  },
  {
    icon: <SiReact className="w-3 h-3 text-[#61DAFB]" />,
    label: "React Native",
  },
  {
    icon: <SiExpo className="w-3 h-3 text-[#000020]" />,
    label: "Expo",
  },
  {
    icon: <SiGo className="w-3 h-3 text-[#00ADD8]" />,
    label: "Golang",
  },
  {
    icon: <SiSass className="w-3 h-3 text-[#CC6699]" />,
    label: "SCSS",
  },
  {
    icon: <SiGraphql className="w-3 h-3 text-[#E10098]" />,
    label: "GraphQL",
  },
  {
    icon: <SiSocketdotio className="w-3 h-3 text-[#010101]" />,
    label: "Socket.IO",
  },
];
export default frameworks;
