import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import heroImage from "../../src/assests/projects/hero-bg.jpg"
import Button from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton.jsx";
function Hero() {
  const skills = ["React", "Python", "JavaScript","Django", "Django Rest Framework","Tailwind CSS", "Redux", "Bootstrap",  "SQL Server", "MySql", "Git", "Git Hub", "Web Design", "ASP .NET", ".NET Web API", ".NET Core"]
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden '>
      {/* Background */}
      <div className='absolute inset-0 '>
        <img src={heroImage} alt="her-image" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}

          />
        ))}
      </div>
      {/* Content Section */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Text-Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />Software Developer  • Python Full Stack • React
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Code with <span className="text-primary glow-text"> purpose</span> build with <span className="font-serif italic font-normal text-white">precision.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Jeet Pandey, a Python Full Stack Developer passionate about creating clean, responsive, and reliable web applications using Django, React, and SQL Server.</p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">Contact me <ArrowRight className="w-5 h-5" /></Button>
              <AnimatedBorderButton><Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow :</span>
              {[
                { icon: <FaGithub />, href: "https://github.com/JeetPandey" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jeet-pandey-3ab327390/?isSelfProfile=true" },
                { icon: <SiLeetcode />, href: "https://leetcode.com/u/JEET_PANDEY/" },

              ].map((social, index) => (<a key={index} href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{social.icon}</a>))}
            </div>
          </div>

          {/* Right Column Profile-Image */}

          {/* <div>
            {/* Profile Image */}
          {/* <div>
              <div>
                <img src=""/>
                </div>
            </div> */}
          {/* </div> */}

          {/* Right Column - Animated Name Profile */}
          <div className="flex items-center justify-center animate-fade-in animation-delay-200">
            <div className="relative group w-full max-w-md">

              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-teal-400 to-cyan-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

              {/* Profile Card */}
              <div className="relative min-h-[380px] md:min-h-[440px] rounded-3xl border border-primary/30 bg-background/80 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden p-8">

                {/* Animated Border Accent */}
                <div className="absolute inset-0 rounded-3xl border border-primary/20 pointer-events-none" />

                {/* Decorative Rings */}
                <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-48 h-48 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_infinite_reverse]" />

                {/* Floating Dots */}
                <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute top-20 right-12 w-3 h-3 rounded-full bg-teal-400 animate-bounce" />
                <div className="absolute bottom-16 left-16 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <div className="absolute bottom-12 right-10 w-2 h-2 rounded-full bg-primary animate-pulse" />

                {/* Name Content */}
                <div className="relative z-10 text-center space-y-5">

                  {/* Initials Badge */}
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 border border-primary/40 flex items-center justify-center shadow-[0_0_30px_rgba(32,178,170,0.2)] animate-[float_4s_ease-in-out_infinite]">
                    <span className="text-3xl font-bold text-primary glow-text">
                      JP
                    </span>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground animate-fade-in">
                      Hello, I'm
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                      <span className="block text-white animate-[nameReveal_1s_ease-out_both]">
                        JEET KUMAR
                      </span>

                      <span className="block text-primary glow-text animate-[nameReveal_1s_ease-out_0.4s_both]">
                        PANDEY<span className="animate-pulse">.</span>
                      </span>
                    </h2>
                  </div>

                  {/* Role */}
                  <p className="text-sm md:text-base text-muted-foreground tracking-wide">
                    Python Full Stack Developer
                  </p>

                  {/* Accent Line */}
                  <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-[lineExpand_1.2s_ease-out_0.6s_both]" />

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {["Python", "Django", "React", "SQL Server"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-full border border-primary/20 bg-primary/5 text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
              <div className="flex items-center gap-3 ">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for work</span>

              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-10 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center"> Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee ">
              {[...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero 
