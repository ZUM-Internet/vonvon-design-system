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
