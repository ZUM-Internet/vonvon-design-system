import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Popup from "./Popup";

const meta: Meta<typeof Popup> = {
  title: "Components/Popup",
  component: Popup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "중앙 팝업 컴포넌트. 제목 옵션, 기본/커스텀 버튼을 지원합니다.",
      },
    },
  },
  argTypes: {
    isOpen: { control: "boolean", description: "팝업 열림 여부" },
    title: { control: "text", description: "팝업 제목 (미입력 시 숨김)" },
    description: { control: "text", description: "팝업 설명" },
    primaryActionLabel: { control: "text", description: "메인 버튼 라벨" },
    secondaryActionLabel: { control: "text", description: "보조 버튼 라벨" },
    size: { control: "select", options: ["sm", "md", "lg"], description: "팝업 크기" },
    textAlign: { control: "select", options: ["left", "center"], description: "텍스트 정렬" },
    closeOnOverlay: { control: "boolean", description: "오버레이 클릭 시 닫힘 여부" },
    onClose: { action: "closed", description: "닫기 이벤트" },
    onPrimaryAction: { action: "primary action", description: "메인 버튼 클릭" },
    onSecondaryAction: { action: "secondary action", description: "보조 버튼 클릭" },
  },
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "제목을 입력해 주세요.",
    description: "보조 설명",
    primaryActionLabel: "확인",
    secondaryActionLabel: "취소",
    children: (
      <div className="space-y-3 text-[0px]">
        <p className="text-label-normal body-md-normal">
          팝업 본문 영역에 텍스트, 입력폼 등 다양한 콘텐츠를 배치할 수 있습니다.
        </p>
        <textarea
          className="w-full h-[120px] bg-opacity-alternative border border-opacity-neutral rounded-[16px] p-4 text-label-normal body-sm-normal resize-none focus:outline-none focus:ring-2 focus:ring-primary-normal"
          placeholder="내용을 입력해 주세요."
        />
      </div>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    description: "제목 없이 간단한 설명만 필요한 경우입니다.",
    primaryActionLabel: "확인",
  },
};

export const SinglePrimaryButton: Story = {
  args: {
    isOpen: true,
    title: "한 개의 버튼만 노출",
    primaryActionLabel: "확인",
    description: "보조 버튼 없이 메인 버튼만 필요한 상황을 위한 예시입니다.",
  },
};

export const CustomButtons: Story = {
  args: {
    isOpen: true,
    title: "커스텀 버튼 예시",
    description: "직접 버튼을 구성할 수 있습니다.",
    customActions: (
      <div className="flex gap-2">
        <button className="flex-1 py-3 rounded-[16px] bg-opacity-alternative text-label-strong body-sm-medium">
          서브 액션
        </button>
        <button className="flex-1 py-3 rounded-[16px] bg-primary-normal text-white body-sm-medium">
          메인 액션
        </button>
      </div>
    ),
  },
};

const InteractiveExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-primary-normal text-white rounded-lg font-semibold"
      >
        팝업 열기
      </button>

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="사용자 상호작용"
        description="바깥 영역을 클릭하거나 버튼을 눌러 닫을 수 있습니다."
        primaryActionLabel="확인"
        onPrimaryAction={() => setIsOpen(false)}
        secondaryActionLabel="다음에"
        onSecondaryAction={() => setIsOpen(false)}
        textAlign="center"
      >
        <p className="text-label-normal body-md-normal">
          실제 플로우에서 사용하는 인터랙티브 팝업 예시입니다.
        </p>
      </Popup>
    </div>
  );
};

export const Interactive: StoryObj = {
  render: () => <InteractiveExample />,
  parameters: {
    docs: {
      description: {
        story: "실제 플로우에서 팝업을 여닫는 모습을 확인할 수 있는 데모입니다.",
      },
    },
  },
};
