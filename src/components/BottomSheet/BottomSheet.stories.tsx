import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import BottomSheet from "./BottomSheet";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "VDS Bottom Sheet Component (Figma 기반) - 기본형, 강조형, 상단 이미지형 지원",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "바텀시트 열림/닫힘 상태",
    },
    variant: {
      control: "select",
      options: ["default", "emphasized", "image"],
      description: "바텀시트 타입",
    },
    title: {
      control: "text",
      description: "바텀시트 제목",
    },
    description: {
      control: "text",
      description: "바텀시트 설명 (강조형, 상단 이미지형)",
    },
    primaryAction: {
      control: "text",
      description: "메인 액션 버튼 텍스트",
    },
    secondaryAction: {
      control: "text",
      description: "서브 액션 버튼 텍스트",
    },
    onClose: {
      action: "closed",
      description: "바텀시트 닫기 콜백",
    },
    onPrimaryAction: {
      action: "primary action",
      description: "메인 액션 클릭 콜백",
    },
    onSecondaryAction: {
      action: "secondary action",
      description: "서브 액션 클릭 콜백",
    },
  },
};

export default meta;

// 기본형 바텀시트
export const Default: StoryObj<typeof BottomSheet> = {
  args: {
    isOpen: true,
    variant: "default",
    title: "제목을 입력해 주세요.",
    description: "설명을 입력해 주세요.",
    children: (
      <div className="space-y-4">
        <p className="text-label-normal body-md-normal">
          바텀시트 컨텐츠 영역입니다. 여기에 원하는 내용을 넣을 수 있습니다.
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary-normal text-white rounded-lg text-sm">확인</button>
          <button className="px-4 py-2 bg-opacity-neutral text-label-normal rounded-lg text-sm">취소</button>
        </div>
      </div>
    ),
  },
};

// 강조형 바텀시트
export const Emphasized: StoryObj<typeof BottomSheet> = {
  args: {
    isOpen: true,
    variant: "emphasized",
    title: "제목을 입력해 주세요.",
    description: "설명을 입력해 주세요.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    thumbnail: <img src="https://via.placeholder.com/335x176/FF5258/FFFFFF?text=Thumbnail" />,
    primaryAction: "메인 액션",
    secondaryAction: "서브 액션",
  },
};

// 상단 이미지형 바텀시트
export const Image: StoryObj<typeof BottomSheet> = {
  args: {
    isOpen: true,
    variant: "image",
    title: "제목을 입력해 주세요.",
    description: "설명을 입력해 주세요.",
    thumbnail: (
      <img src="https://via.placeholder.com/335x176/FF5258/FFFFFF?text=Thumbnail" className="blur-[3px]" />
    ),
    primaryAction: "메인 액션",
    secondaryAction: "서브 액션",
  },
};

// 긴 제목이 있는 바텀시트
export const LongTitle: StoryObj<typeof BottomSheet> = {
  args: {
    isOpen: true,
    title: "매우 긴 제목이 있는 바텀시트 예시입니다. 이렇게 길어질 수 있습니다.",
    children: (
      <div className="space-y-4">
        <p className="text-label-normal body-md-normal">
          긴 제목이 있어도 레이아웃이 깨지지 않도록 설계되었습니다.
        </p>
      </div>
    ),
  },
};

// 인터랙티브 예시 (실제 사용법)
const InteractiveExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-primary-normal text-white rounded-lg font-semibold"
      >
        바텀시트 열기
      </button>

      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="인터랙티브 예시">
        <div className="space-y-4">
          <p className="text-label-normal body-md-normal">이 바텀시트는 실제로 열고 닫을 수 있습니다.</p>
        </div>
      </BottomSheet>
    </div>
  );
};

export const Interactive: StoryObj = {
  render: () => <InteractiveExample />,
  parameters: {
    docs: {
      description: {
        story: "실제로 열고 닫을 수 있는 인터랙티브 예시입니다.",
      },
    },
  },
};
