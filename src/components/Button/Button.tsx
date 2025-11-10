import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outlined" | "text";
  hierarchy?: "primary" | "assistive" | "custom" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
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
 *
 * Width Control:
 * - fullWidth: 부모 컨테이너 전체 너비 사용
 * - className prop으로 커스텀 너비 클래스 적용 가능 (예: "w-48", "max-w-xs")
 * - style prop으로 인라인 너비 스타일 적용 가능 (예: {width: '200px'})
 */

const Button = ({
  children,
  variant = "solid",
  hierarchy = "primary",
  size = "md",
  disabled = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  // Size classes
  const solidOutlinedSizeClasses = {
    sm: "px-[28px] h-[42px] body-md-normal font-regular rounded-[10px]",
    md: "px-[28px] h-[51px] body-lg-normal font-medium rounded-[12px]",
    lg: "px-[28px] h-[56px] heading-sm font-semibold rounded-[12px]",
  };

  // Variant and hierarchy specific classes
  const getVariantClasses = () => {
    if (variant === "solid") {
      if (hierarchy === "primary") {
        return disabled
          ? "bg-interaction-disable-normal text-label-assistive cursor-default"
          : "bg-primary-normal text-white";
      } else if (hierarchy === "secondary") {
        return disabled
          ? "bg-interaction-disable-normal text-label-assistive cursor-default"
          : "bg-primary-alternative text-primary-strong";
      } else if (hierarchy === "assistive") {
        return disabled
          ? "bg-interaction-disable-normal text-label-assistive cursor-default"
          : "bg-assistive-light text-label-strong";
      } else if (hierarchy === "custom") {
        return disabled
          ? "bg-interaction-disable-normal text-label-assistive cursor-default"
          : "bg-gray-100 text-gray-600 ";
      }
    } else if (variant === "outlined") {
      if (hierarchy === "primary") {
        return disabled
          ? "border border-interaction-disable-normal text-label-assistive cursor-default"
          : "border border-primary-neutral text-primary-strong bg-transparent ";
      }
    } else if (variant === "text") {
      if (hierarchy === "primary") {
        return disabled
          ? "text-interaction-disable-strong bg-transparent cursor-default"
          : "text-primary-normal bg-transparent ";
      }
      if (hierarchy === "assistive") {
        return disabled
          ? "text-interaction-disable-strong bg-transparent cursor-default"
          : "text-label-assistive bg-transparent";
      }
    }
    return "";
  };

  const getSizeClasses = () => {
    if (variant === "text") {
      const textSizeClasses: Record<"sm" | "md", string> = {
        sm: "h-10 px-[35px] body-lg-normal font-medium rounded-[12px]",
        md: "h-10 px-[35px] body-md-normal font-medium rounded-[12px]",
      };

      return textSizeClasses[size as "sm" | "md"] ?? textSizeClasses.md;
    }

    return solidOutlinedSizeClasses[size] ?? solidOutlinedSizeClasses.md;
  };

  const classes = [baseClasses, getSizeClasses(), getVariantClasses(), fullWidth ? "w-full" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} disabled={disabled} {...props}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
