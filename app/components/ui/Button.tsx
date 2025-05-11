// components/ui/LinkButton.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right" | "iconOnly";
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  hasWave?: boolean;
}

export default function LinkButton({
  href,
  children,
  className = "",
  icon,
  iconPosition = "left",
  variant = "solid",
  size = "md",
  hasWave = false,
}: LinkButtonProps) {
  const baseStyles = `
    inline-flex justify-center items-center gap-2 rounded-lg
    transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-amber-400/30
    relative overflow-hidden
    ${className}
  `;

  const variants = {
    solid: `bg-amber-700 text-white hover:bg-amber-600`,
    outline: `border-2 border-amber-700 text-amber-700 hover:bg-amber-50/50`,
    ghost: `text-amber-700 hover:bg-amber-100/50`,
  };

  const sizes = {
    sm: `px-4 py-2 text-sm`,
    md: `px-6 py-3 text-base`,
    lg: `px-8 py-4 text-lg`,
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${hasWave ? "overflow-visible" : ""}
        `}
        role="button"
      >
        {/* Wave effect */}
        {hasWave && variant === "solid" && (
          <div className="absolute inset-0 wave-pattern opacity-20" />
        )}

        {/* Icons */}
        {icon && iconPosition !== "right" && iconPosition !== "iconOnly" && (
          <span className="shrink-0">{icon}</span>
        )}

        {iconPosition !== "iconOnly" && children}

        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}

        {/* Icon-only version */}
        {iconPosition === "iconOnly" && icon && (
          <span className="flex items-center justify-center w-full">
            {icon}
          </span>
        )}
      </Link>
    </motion.div>
  );
}
