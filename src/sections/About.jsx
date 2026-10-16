import { useState } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Code2,
  Sparkles,
  BookOpen,
  ChevronRight,
} from "lucide-react";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { SqlServerIcon } from "../utils/SqlServerLogo.jsx"

const technologies = [
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    category: "Backend",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#44B78B",
    category: "Backend",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Frontend",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    category: "Database",
  },
  {
    name: "SQL Server",
    icon: SqlServerIcon,
    color: "#CC2927",
    category: "Database",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#FFFFFF",
    category: "Tools",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    category: "Tools",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
    category: "Tools",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    category: "Tools",
  },
];

const education = [
  {
    degree: "Master of Computer Applications",
    shortDegree: "MCA",
    institution: "Indira Gandhi National Open University",
    period: "Jan 2024 — Jan 2026",
    status: "COMPLETED",
    description:
      "Advanced studies in computer applications, software development, programming, and application design.",
    color: "#20B2A6",
  },
  {
    degree: "Bachelor of Science",
    shortDegree: "BSc",
    institution: "University of Calcutta",
    period: "Jun 2019 — Jun 2023",
    status: "COMPLETED",
    description:
      "Built an academic foundation in scientific thinking, analytical reasoning, and problem-solving.",
    color: "#60A5FA",
  },
];

const categories = ["All", "Backend", "Frontend", "Database", "Tools"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
        (technology) => technology.category === activeCategory
      );

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-background px-5 py-24 text-foreground sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute right-[-100px] top-[35%] h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Get to know me
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              A little about{" "}
              <span className="text-primary">me.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              My journey, education, and the technologies I use to turn ideas
              into practical digital experiences.
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary md:flex md:self-auto"
          >
            <Sparkles size={16} />
            Always learning. Always building.
          </motion.div>
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT COLUMN */}
          <div className="space-y-16">
            {/* About introduction */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants} className="mb-6">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <Code2 size={19} />

                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Who I am
                  </span>
                </div>

                <h3 className="max-w-lg text-2xl font-bold leading-snug sm:text-3xl">
                  Building with purpose.
                  <span className="block text-muted-foreground">
                    Growing with every project.
                  </span>
                </h3>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base"
              >
                <p>
                  I'm a Python Full Stack Developer interested in building
                  modern, responsive, and reliable web applications. I enjoy
                  combining backend development with clean and intuitive
                  frontend experiences.
                </p>

                <p>
                  I work with Python, Django, Django REST Framework, React,
                  and SQL databases. From designing database structures and
                  building APIs to creating interactive interfaces, I enjoy
                  understanding how the different parts of an application
                  work together.
                </p>

                <p>
                  I believe every project is an opportunity to solve problems,
                  strengthen my skills, and write better code. I'm continuously
                  learning and looking forward to contributing to meaningful
                  software projects.
                </p>
              </motion.div>

              {/* Small highlight cards */}
              <motion.div
                variants={itemVariants}
                className="mt-8 grid grid-cols-2 gap-3"
              >
                <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5">
                  <Code2
                    size={22}
                    className="mb-3 text-primary transition-transform duration-300 group-hover:scale-110"
                  />

                  <h4 className="font-semibold">Full Stack</h4>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Frontend & backend development
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5">
                  <BookOpen
                    size={22}
                    className="mb-3 text-primary transition-transform duration-300 group-hover:scale-110"
                  />

                  <h4 className="font-semibold">Continuous Learning</h4>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Learning through projects and practice
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* EDUCATION TIMELINE */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-8 flex items-center justify-between gap-3">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <GraduationCap size={19} />

                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      Education
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Academic journey
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Learning, growth, and curiosity.
                  </p>
                </div>
              </div>

              <div className="relative space-y-8 pl-7">
                {/* Timeline line */}
                <div className="absolute bottom-5 left-[7px] top-3 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

                {education.map((item, index) => (
                  <motion.article
                    key={item.shortDegree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.15,
                    }}
                    whileHover={{ x: 4 }}
                    className="group relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 bg-background transition-shadow duration-300 group-hover:shadow-[0_0_15px_var(--timeline-color)]"
                      style={{
                        borderColor: item.color,
                        "--timeline-color": item.color,
                      }}
                    />

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-white/[0.04] sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span
                            className="mb-3 inline-flex rounded-lg border px-2.5 py-1 text-xs font-bold"
                            style={{
                              borderColor: `${item.color}45`,
                              backgroundColor: `${item.color}12`,
                              color: item.color,
                            }}
                          >
                            {item.shortDegree}
                          </span>

                          <h4 className="text-lg font-bold leading-snug sm:text-xl">
                            {item.degree}
                          </h4>
                        </div>

                        <span className="rounded-full border border-primary/20 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary">
                          {item.status}
                        </span>
                      </div>

                      <p className="mt-3 text-sm font-medium text-primary">
                        {item.institution}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarDays size={14} className="shrink-0" />

                        <span>{item.period}</span>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: TECHNOLOGY STACK */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:sticky lg:top-24"
          >
            {/* Glow behind card */}
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-cyan-500/20 opacity-60 blur-xl transition duration-700 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1114]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                {/* Card decoration */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-primary/10" />

                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-primary/10" />

                {/* Card header */}
                <div className="relative mb-7 flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-primary">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                        My toolkit
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold sm:text-3xl">
                      Tools &{" "}
                      <span className="text-primary">Technologies</span>
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                      Technologies I've worked with.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Code2 size={24} />
                  </div>
                </div>

                {/* Category filter */}
                <div className="relative mb-6 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-300 ${activeCategory === category
                          ? "border-primary bg-primary/15 text-primary shadow-[0_0_15px_rgba(32,178,166,0.08)]"
                          : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-primary/40 hover:text-primary"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Technology logos grid */}
                <motion.div
                  layout
                  className="relative grid grid-cols-3 gap-3 sm:grid-cols-4"
                >
                  {filteredTechnologies.map((technology, index) => {
                    const Icon = technology.icon;

                    return (
                      <motion.div
                        layout
                        key={technology.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.025,
                        }}
                        whileHover={{
                          y: -6,
                          scale: 1.04,
                        }}
                        title={technology.name}
                        className="group/tech relative flex min-h-[100px] cursor-default flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/[0.07]"
                      >
                        {/* Hover glow */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/tech:opacity-100" />

                        <Icon
                          aria-hidden="true"
                          style={{ color: technology.color }}
                          className="relative h-8 w-8 transition-transform duration-300 group-hover/tech:scale-110 sm:h-9 sm:w-9"
                        />

                        <span className="relative text-center text-[10px] font-medium text-muted-foreground transition-colors group-hover/tech:text-white sm:text-xs">
                          {technology.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Footer */}
                <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles size={15} className="text-primary" />

                    <span>
                      {filteredTechnologies.length} technologies
                    </span>
                  </div>

                  <span className="text-[10px] tracking-wide text-muted-foreground">
                    AND ALWAYS LEARNING
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-5 flex items-center gap-3 px-2"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                <GraduationCap size={19} />
              </div>

              <div>
                <p className="text-sm font-medium">
                  The learning never stops.
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Exploring new tools, ideas, and better ways to build.
                </p>
              </div>

              <ChevronRight
                size={18}
                className="ml-auto shrink-0 text-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}