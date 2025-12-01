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
  isCloseButton = true,
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
          <div className="relative flex flex-col items-center justify-between px-[20px] pt-[28px] pb-[8px]">
            {isCloseButton && (
              <button
                onClick={onClose}
                className="absolute top-6 right-5 flex items-center justify-center w-6 h-6 p-0 bg-transparent border-0 cursor-pointer"
                aria-label="닫기"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.2929 5.29295C17.6834 4.90243 18.3164 4.90243 18.707 5.29295C19.0975 5.68348 19.0975 6.31649 18.707 6.70702L13.414 12L18.707 17.293L18.7753 17.3691C19.0957 17.7619 19.0731 18.3409 18.707 18.707C18.3408 19.0731 17.7618 19.0957 17.3691 18.7754L17.2929 18.707L11.9999 13.414L6.70696 18.707C6.31643 19.0975 5.68342 19.0975 5.29289 18.707C4.90237 18.3165 4.90237 17.6835 5.29289 17.293L10.5859 12L5.29289 6.70702C4.90237 6.31649 4.90237 5.68348 5.29289 5.29295C5.68342 4.90243 6.31643 4.90243 6.70696 5.29295L11.9999 10.5859L17.2929 5.29295Z"
                    fill="black"
                  />
                </svg>
              </button>
            )}
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
                className={`heading-xl font-bold mb-1 truncate max-w-100 ${textAlignClass}`}
                style={{ fontFamily: "Pretendard, sans-serif" }}
                title={title}
              >
                {title}
              </h2>
              {description && (
                <p
                  className={`body-md-reading text-label-neutral truncate ${textAlignClass}`}
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
          <div className="relative flex flex-col items-center justify-between px-[20px] pt-[28px] pb-[8px]">
            {isCloseButton && (
              <button
                onClick={onClose}
                className="absolute top-6 right-5 flex items-center justify-center w-6 h-6 p-0 bg-transparent border-0 cursor-pointer"
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
                className={`heading-xl font-bold mb-1 truncate max-w-95 ${textAlignClass}`}
                style={{ fontFamily: "Pretendard, sans-serif" }}
                title={title}
              >
                {title}
              </h2>
              {description && (
                <p
                  className={`body-md-reading text-label-neutral truncate ${textAlignClass}`}
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
                  className={`heading-xl font-bold mb-1 truncate max-w-95 ${textAlignClass}`}
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                  title={title}
                >
                  {title}
                </h2>
                {description && (
                  <p
                    className={`body-md-reading text-label-neutral truncate ${textAlignClass}`}
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
                  className="absolute top-6 right-5 flex items-center justify-center w-6 h-6 p-0 bg-transparent border-0 cursor-pointer"
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
