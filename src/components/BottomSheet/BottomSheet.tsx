import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  isCloseButton?: boolean;
  variant?: "default" | "emphasized" | "image";
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  thumbnail?: React.ReactNode;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  children?: React.ReactNode;
  className?: string;
  textAlign?: "left" | "center" | "right";
}

/**
 * VDS Bottom Sheet Component
 * - Figma 기반 디자인
 * - Framer Motion 애니메이션 적용
 * - Dim 오버레이 포함
 * - 헤더에 제목과 닫기 버튼
 * - 컨텐츠 영역
 */
const BottomSheet = ({
  isOpen,
  onClose,
  isCloseButton = false,
  variant = "default",
  title = "제목을 입력해 주세요.",
  description,
  icon,
  thumbnail,
  primaryAction,
  secondaryAction,
  onPrimaryAction,
  onSecondaryAction,
  children,
  className = "",
  textAlign = "left",
}: BottomSheetProps) => {
  // ESC 키로 닫기
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // 스크롤 방지
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const textAlignClass =
    textAlign === "center" ? "text-center" : textAlign === "right" ? "text-right" : "text-left";

  const renderContent = () => {
    switch (variant) {
      case "emphasized":
        return (
          <div className="flex flex-col items-center justify-between px-[20px] pt-[28px] pb-[8px]">
            {/* Icon */}
            {icon && (
              <div className="flex justify-center mb-4">
                <div className="w-[52px] h-[52px] bg-opacity-alternative rounded-full flex items-center justify-center">
                  {icon}
                </div>
              </div>
            )}

            {/* Header */}
            <div className="text-center px-2 mb-5">
              <h2
                className={`text-label-strong font-bold text-[24px] leading-[1.38] tracking-[-0.48px] mb-1 truncate ${textAlignClass}`}
                style={{ fontFamily: "Pretendard, sans-serif" }}
                title={title}
              >
                {title}
              </h2>
              {description && (
                <p
                  className={`text-label-neutral text-[15px] leading-[1.5] tracking-[-0.3px] truncate ${textAlignClass}`}
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                  title={description}
                >
                  {description}
                </p>
              )}
            </div>

            {/* Thumbnail */}
            {thumbnail && (
              <div className="w-full h-[176px] mb-5">
                <div className="w-full h-full bg-opacity-alternative rounded-lg border border-opacity-neutral overflow-hidden">
                  {thumbnail}
                </div>
              </div>
            )}

            {/* Buttons */}
            {(primaryAction || secondaryAction) && (
              <div className="space-y-1 w-full">
                {primaryAction && (
                  <button
                    onClick={onPrimaryAction}
                    className="w-full py-4 bg-primary-normal text-white font-medium text-[16px] leading-[1.2] tracking-[-0.32px] rounded-[12px] hover:bg-primary-strong transition-colors cursor-pointer"
                    style={{ fontFamily: "Pretendard, sans-serif" }}
                  >
                    {primaryAction}
                  </button>
                )}
                {secondaryAction && (
                  <button
                    onClick={onSecondaryAction}
                    className="w-full py-2 text-label-neutral font-medium text-[15px] leading-[1.2] tracking-[-0.3px] rounded-[12px] hover:bg-opacity-neutral transition-colors cursor-pointer"
                    style={{ fontFamily: "Pretendard, sans-serif" }}
                  >
                    {secondaryAction}
                  </button>
                )}
              </div>
            )}
          </div>
        );

      case "image":
        return (
          <div className="flex flex-col items-center justify-between px-[20px] pt-[28px] pb-[8px]">
            {/* Thumbnail */}
            {thumbnail && (
              <div className="flex justify-center mb-4">
                <div className="w-[134px] h-[70px] rounded-lg border border-opacity-neutral overflow-hidden relative">
                  {thumbnail}
                </div>
              </div>
            )}

            {/* Header */}
            <div className="text-center px-2 mb-5">
              <h2
                className={`text-label-strong font-bold text-[24px] leading-[1.38] tracking-[-0.48px] mb-1 truncate ${textAlignClass}`}
                style={{ fontFamily: "Pretendard, sans-serif" }}
                title={title}
              >
                {title}
              </h2>
              {description && (
                <p
                  className={`text-label-neutral text-[15px] leading-[1.5] tracking-[-0.3px] truncate ${textAlignClass}`}
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                  title={description}
                >
                  {description}
                </p>
              )}
            </div>

            {/* Buttons */}
            {(primaryAction || secondaryAction) && (
              <div className="space-y-1 w-full">
                {primaryAction && (
                  <button
                    onClick={onPrimaryAction}
                    className="w-full py-4 bg-primary-normal text-white font-medium text-[16px] leading-[1.2] tracking-[-0.32px] rounded-[12px] hover:bg-primary-strong transition-colors"
                    style={{ fontFamily: "Pretendard, sans-serif" }}
                  >
                    {primaryAction}
                  </button>
                )}
                {secondaryAction && (
                  <button
                    onClick={onSecondaryAction}
                    className="w-full py-2 text-label-neutral font-medium text-[15px] leading-[1.2] tracking-[-0.3px] rounded-[12px] hover:bg-opacity-neutral transition-colors"
                    style={{ fontFamily: "Pretendard, sans-serif" }}
                  >
                    {secondaryAction}
                  </button>
                )}
              </div>
            )}
          </div>
        );

      default: // default variant
        return (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-7 pb-5">
              <div className="w-full flex flex-col gap-[4px]">
                <h2
                  className={`flex-1 text-label-strong font-bold text-[22px] leading-[1.2] tracking-[-0.44px] truncate ${textAlignClass}`}
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                  title={title}
                >
                  {title}
                </h2>
                {description && (
                  <p
                    className={`text-label-neutral text-[15px] leading-[1.5] tracking-[-0.3px] truncate ${textAlignClass}`}
                    style={{ fontFamily: "Pretendard, sans-serif" }}
                    title={description}
                  >
                    {description}
                  </p>
                )}
              </div>

              {isCloseButton && (
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-6 h-6 p-0 bg-transparent border-0 cursor-pointer"
                  aria-label="닫기"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L13 13M1 13L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Content Area */}
            <div className="px-5 pb-5">
              <div className="w-full">{children}</div>
            </div>
          </>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Dim Overlay */}
          <motion.div
            className="absolute inset-0 bg-material-dimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            className={`relative w-full max-w-[500px] bg-static-white rounded-t-[20px] shadow-strong ${className}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {renderContent()}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
