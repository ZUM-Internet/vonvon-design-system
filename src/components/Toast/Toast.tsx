import React from "react";

interface ToastProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

/**
 * VDS Toast Component (Figma 시안 기반)
 */
export default function Toast({ children, icon, iconPosition = "left", className = "" }: ToastProps) {
  return (
    <div
      className={`flex items-center justify-center gap-[6px] px-7 py-4 bg-[rgba(0,0,0,0.76)] rounded-[12px] backdrop-blur-sm w-fit ${className}`}
      style={{ fontFamily: "Pretendard, sans-serif" }}
    >
      {iconPosition === "left" && icon}
      <span
        className="text-white text-[15px] font-normal leading-[1.5] text-center"
        style={{ letterSpacing: "-2%" }}
      >
        {children}
      </span>
      {iconPosition === "right" && icon}
    </div>
  );
}
