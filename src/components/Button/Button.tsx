import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outlined" | "text";
  hierarchy?: "primary" | "assistive" | "custom";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * VDS Button Component
 *
 * Variants:
 * - solid: 배경색이 있는 버튼
 * - outlined: 테두리만 있는 버튼
 * - text: 텍스트만 있는 버튼
 *
 * Hierarchies:
 * - primary: 주요 액션용
 * - assistive: 보조 액션용
 * - custom: 커스텀 스타일
 *
 * Sizes:
 * - sm: 작은 크기
 * - md: 중간 크기 (기본)
 * - lg: 큰 크기
 */

const Button = ({
  children,
  variant = "solid",
  hierarchy = "primary",
  size = "md",
  disabled = false,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) => {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-[15px] leading-[1.2] rounded-[12px]",
    md: "px-6 py-4 text-[16px] leading-[1.2] rounded-[12px]",
    lg: "px-6 py-4 text-[17px] leading-[1.4] rounded-[12px]",
  };

  // Variant and hierarchy specific classes
  const getVariantClasses = () => {
    if (variant === "solid") {
      if (hierarchy === "primary") {
        return disabled
          ? "bg-primary-normal text-white"
          : "bg-primary-normal text-white hover:bg-primary-dark";
      } else if (hierarchy === "assistive") {
        return disabled
          ? "bg-assistive-light text-assistive-dark"
          : "bg-assistive-light text-assistive-dark hover:bg-assistive-normal";
      } else if (hierarchy === "custom") {
        return disabled ? "bg-gray-100 text-gray-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200";
      }
    } else if (variant === "outlined") {
      if (hierarchy === "primary") {
        return disabled
          ? "border border-outlined-disabled text-outlined-disabled bg-transparent"
          : "border border-outlined-normal text-outlined-normal bg-transparent hover:bg-outlined-hover";
      }
    } else if (variant === "text") {
      if (hierarchy === "primary") {
        return disabled
          ? "text-text-disabled bg-transparent"
          : "text-text-normal bg-transparent hover:bg-text-hover";
      }
    }
    return "";
  };

  const classes = [baseClasses, sizeClasses[size], getVariantClasses(), "font-family-pretendard"]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      style={{
        fontFamily: "Pretendard, sans-serif",
        letterSpacing: size === "lg" ? "-1%" : "-2%",
      }}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
