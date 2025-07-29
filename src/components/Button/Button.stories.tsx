import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "VDS Solid Primary Large Button (Figma 기반)",
      },
    },
  },
};

export default meta;

// 기본 버튼
export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "텍스트",
    disabled: false,
  },
};

// 비활성화 버튼
export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: "텍스트",
    disabled: true,
  },
};

// 긴 텍스트 버튼
export const LongText: StoryObj<typeof Button> = {
  args: {
    children: "매우 긴 텍스트가 있는 버튼입니다",
    disabled: false,
  },
};

// 다양한 너비 예시
export const WidthExamples: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">기본 버튼</h3>
        <Button>기본</Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">긴 텍스트</h3>
        <Button>매우 긴 텍스트가 있는 버튼입니다</Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">전체 너비</h3>
        <Button className="w-full">전체 너비 버튼</Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">고정 너비</h3>
        <Button className="w-[200px]">고정 너비</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 너비의 버튼 사용 예시입니다.",
      },
    },
  },
};
