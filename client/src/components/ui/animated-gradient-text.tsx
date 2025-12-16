import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../lib/utils";

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"span"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
  glow?: boolean;
  hoverBoost?: boolean;
  pulse?: boolean; // ✨ auto attract
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#4f39f6",
  colorTo = "#8b5cf6",
  glow = true,
  hoverBoost = true,
  pulse = true,
  ...props
}: AnimatedGradientTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  // 🎯 Scroll into view detection
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ✨ Pulse highlight every 5s
  useEffect(() => {
    if (!pulse || !inView) return;

    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [pulse, inView]);

  return (
    <span
      ref={ref}
      style={
        {
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        "relative inline bg-gradient-to-r",
        "from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)]",
        "bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
        "transition-all duration-300 ease-out",

        // 🎯 animate only in view
        inView && "animate-gradient",

        // ✨ pulse
        pulseActive && "animate-pulse-soft",

        // glow
        glow && "drop-shadow-[0_0_14px_rgba(79,57,246,0.35)]",

        // hover attract
        hoverBoost && "hover:scale-[1.04] hover:brightness-110",

        // 🧠 accessibility
        "motion-reduce:animate-none motion-reduce:transition-none",

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
