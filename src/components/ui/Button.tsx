"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  download?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  href,
  download = false,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-electric-blue text-black hover:bg-electric-blue/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md",
    outline: "border border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as any)} {...(download ? { download: "" } : {})}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as any)}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}
