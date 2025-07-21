import type { Meta, StoryObj } from "@storybook/react-vite";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: "텍스트값 입력 필요",
  },
};

export const WithIconLeft: Story = {
  args: {
    children: "왼쪽 아이콘 토스트",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="12" height="12" rx="3" fill="#FF5258" />
      </svg>
    ),
    iconPosition: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    children: "오른쪽 아이콘 토스트",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="12" height="12" rx="3" fill="#FF5258" />
      </svg>
    ),
    iconPosition: "right",
  },
};
