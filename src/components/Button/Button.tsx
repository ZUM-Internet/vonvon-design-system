import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

/**
 * VDS Solid Primary Large Button
 * - 색상: #FF5258 (배경), #FFFFFF (텍스트)
 * - 폰트: Pretendard, 17px, 600
 * - 패딩: 16px 0
 * - border-radius: 12px
 */

const Button = ({ children, disabled = false, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-primary-normal text-white font-semibold text-[17px] leading-[1.4] rounded-[12px] text-center transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
      style={{ fontFamily: "Pretendard, sans-serif", letterSpacing: "-1%" }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
