import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button/Button";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  customActions?: React.ReactNode;
  closeOnOverlay?: boolean;
  size?: "sm" | "md" | "lg";
  textAlign?: "left" | "center";
  className?: string;
}

/**
 * 중앙 팝업 컴포넌트
 * - 오버레이 클릭 및 ESC 키로 닫기 지원
 * - 제목/설명 옵션 처리 및 커스텀 버튼 영역 제공
 */
const Popup = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  customActions,
  closeOnOverlay = true,
  textAlign = "left",
  className = "",
}: PopupProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const textAlignClass = textAlign === "center" ? "text-center" : "text-left";
  const hasHeader = title || description;
  const shouldRenderDefaultActions = !customActions && (primaryActionLabel || secondaryActionLabel);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-material-dimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (closeOnOverlay) {
                onClose();
              }
            }}
          />

          <motion.div
            className={`relative w-full bg-static-white rounded-[20px] px-[20px] pt-[28px] pb-[20px] max-w-[335px] ${className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 22, stiffness: 230 }}
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            {hasHeader && (
              <div className={`flex flex-col items-center ${textAlignClass}`}>
                <div className="w-full">
                  {title && (
                    <h2 className={`text-label-strong font-bold heading-xl mb-1 ${textAlignClass}`}>
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className={`text-label-neutral font-regular body-md-reading ${textAlignClass}`}>
                      {description}
                    </p>
                  )}
                </div>
              </div>
            )}

            {children && (
              <div className={`mt-5 ${shouldRenderDefaultActions || customActions ? "mb-5" : ""}`}>
                {children}
              </div>
            )}

            {customActions && <div className="flex flex-col gap-1 pt-[24px]">{customActions}</div>}

            {shouldRenderDefaultActions && (
              <div className={`flex flex-col gap-2 ${children ? "" : "pt-[24px]"}`}>
                {primaryActionLabel && (
                  <Button onClick={onPrimaryAction} variant="solid" hierarchy="primary" size="md" fullWidth>
                    {primaryActionLabel}
                  </Button>
                )}
                {secondaryActionLabel && (
                  <Button onClick={onSecondaryAction} variant="text" hierarchy="primary" size="md" fullWidth>
                    {secondaryActionLabel}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
