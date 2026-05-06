"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

function AboutMeButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative inline-flex items-center gap-3 border border-border bg-card text-foreground rounded-full px-7 py-3 text-[13px] hover:border-primary/50 hover:text-primary transition-all duration-300"
    >
      {/* Terminal popup */}
      <div
        className="pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[260px] origin-bottom scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-card border border-border rounded-lg overflow-hidden shadow-lg z-10"
      >
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-muted border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
          <span className="ml-2 text-[10px] tracking-widest text-muted-foreground font-mono">
            bash — ~/about
          </span>
        </div>

        {/* Terminal body */}
        <div className="px-4 py-3 font-mono text-[11px] leading-[1.9]">
          {/* Line 1: command */}
          <div className="flex gap-1.5">
            <span className="text-accent">~$</span>
            <span
              className="text-foreground overflow-hidden whitespace-nowrap"
              style={{
                display: "inline-block",
                maxWidth: hovered ? "200px" : "0px",
                transition: hovered
                  ? "max-width 0.4s steps(16, end)"
                  : "none",
              }}
            >
              cat about.txt
            </span>
          </div>

          {/* Output lines — staggered fade-in */}
          {[
            { text: "→ Full-stack developer", color: "text-muted-foreground", delay: "0.5s" },
            { text: "→ Linux & terminal native", color: "text-primary", delay: "0.7s" },
            { text: "→ Shipping since day one", color: "text-muted-foreground", delay: "0.9s" },
          ].map(({ text, color, delay }) => (
            <div
              key={text}
              className={`pl-0.5 ${color}`}
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(4px)",
                transition: hovered
                  ? `opacity 0.3s ease ${delay}, transform 0.3s ease ${delay}`
                  : "none",
              }}
            >
              {text}
            </div>
          ))}

          {/* Prompt + blinking cursor */}
          <div
            className="flex gap-1.5 mt-1 items-center"
            style={{
              opacity: hovered ? 1 : 0,
              transition: hovered ? "opacity 0.3s ease 1.1s" : "none",
            }}
          >
            <span className="text-accent">~$</span>
            <span
              className="inline-block w-[7px] h-[13px] bg-accent align-middle"
              style={{ animation: "blink 1s step-start infinite" }}
            />
          </div>
        </div>
      </div>

      <span>About Me</span>
      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

export default AboutMeButton;