"use client";

import { type IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiShadcnui,
  SiZod,
  SiTrpc,
  SiFramer,
  SiReactquery,
  SiNodedotjs,
  SiFastify,
  SiPostgresql,
  SiDrizzle,
  SiSentry,
  SiPosthog,
} from "react-icons/si";

type Tech = {
  name: string;
  icon?: IconType;
};

type TechCategory = {
  category: string;
  items: Tech[];
};

const frontendSkills: TechCategory[] = [
  {
    category: "Core",
    items: [
      { name: "React 19", icon: SiReact },
      { name: "Next.js 16", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Styling/Animation",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "CSS Variables", icon: SiCss3 },
      { name: "GSAP" },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "UI Libraries",
    items: [{ name: "shadcn/ui", icon: SiShadcnui }, { name: "Lucide Icons" }],
  },
  {
    category: "State & Data",
    items: [
      { name: "React Query", icon: SiReactquery },
      { name: "tRPC", icon: SiTrpc },
      { name: "Zod", icon: SiZod },
      { name: "nuqs" },
    ],
  },
];

const backendSkills: TechCategory[] = [
  {
    category: "Runtime & Frameworks",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Fastify", icon: SiFastify },
      { name: "tRPC", icon: SiTrpc },
    ],
  },
  {
    category: "Database & ORM",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Drizzle ORM", icon: SiDrizzle },
    ],
  },
  {
    category: "Observability",
    items: [
      { name: "Sentry", icon: SiSentry },
      { name: "BetterStack" },
      { name: "PostHog", icon: SiPosthog },
    ],
  },
];

function TechItem({ name, icon: Icon }: Tech) {
  return (
    <div className="flex flex-col items-center gap-1.5 w-16 group">
      {Icon ? (
        <Icon
          size={32}
          className="text-white/60 group-hover:text-white transition-colors duration-200"
        />
      ) : (
        <span className="w-8 h-8 flex items-center justify-center rounded-md bg-white/10 text-[11px] font-semibold text-white/60 group-hover:text-white group-hover:bg-white/20 transition-all duration-200">
          {name.slice(0, 2)}
        </span>
      )}
      <span className="text-[10px] text-white/40 group-hover:text-white/70 text-center leading-tight transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

function SkillColumn({
  title,
  categories,
}: {
  title: string;
  categories: TechCategory[];
}) {
  return (
    <div className="w-80 space-y-8">
      <h2 className="text-2xl font-semibold text-yellow-500">{title}</h2>
      {categories.map(({ category, items }) => (
        <div key={category} className="space-y-3">
          <h3 className="text-xs font-medium uppercase tracking-widest text-white/30">
            {category}
          </h3>
          <div className="flex flex-wrap gap-4">
            {items.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-dvh w-full overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 hidden sm:flex sm:flex-row justify-between items-start gap-16 pt-40 pb-20 2xl:px-0 px-5">
        <SkillColumn title="Frontend" categories={frontendSkills} />
        <SkillColumn title="Backend" categories={backendSkills} />
      </div>
    </section>
  );
};

export default Skills;
