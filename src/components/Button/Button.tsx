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
 * - 너비: 168px, border-radius: 12px
 */
const Button: React.FC<ButtonProps> = ({ children, disabled = false, ...props }) => {
  return (
    <button
      type="button"
      className={`w-[168px] py-4 bg-[#FF5258] text-white font-semibold text-[17px] leading-[1.4] rounded-[12px] text-center transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
      style={{ fontFamily: "Pretendard, sans-serif", letterSpacing: "-1%" }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
