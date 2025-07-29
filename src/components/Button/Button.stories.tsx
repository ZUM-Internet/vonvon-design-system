import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "VDS Button Component - 다양한 변형을 지원하는 버튼 컴포넌트",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outlined", "text"],
    },
    hierarchy: {
      control: { type: "select" },
      options: ["primary", "assistive", "custom"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

// 기본 버튼 (Solid Primary Medium)
export const Default: StoryObj<typeof Button> = {
  args: {
    children: "텍스트",
    variant: "solid",
    hierarchy: "primary",
    size: "md",
    disabled: false,
  },
};

// Solid Button Variants
export const SolidButtons: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Solid Buttons</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Primary</h4>
            <div className="space-y-2">
              <Button variant="solid" hierarchy="primary" size="lg">
                Large
              </Button>
              <Button variant="solid" hierarchy="primary" size="md">
                Medium
              </Button>
              <Button variant="solid" hierarchy="primary" size="sm">
                Small
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Assistive</h4>
            <div className="space-y-2">
              <Button variant="solid" hierarchy="assistive" size="lg">
                Large
              </Button>
              <Button variant="solid" hierarchy="assistive" size="md">
                Medium
              </Button>
              <Button variant="solid" hierarchy="assistive" size="sm">
                Small
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Custom</h4>
            <div className="space-y-2">
              <Button variant="solid" hierarchy="custom" size="lg">
                Large
              </Button>
              <Button variant="solid" hierarchy="custom" size="md">
                Medium
              </Button>
              <Button variant="solid" hierarchy="custom" size="sm">
                Small
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Outlined Button Variants
export const OutlinedButtons: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Outlined Buttons</h3>
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Primary</h4>
          <div className="space-y-2">
            <Button variant="outlined" hierarchy="primary" size="lg">
              Large
            </Button>
            <Button variant="outlined" hierarchy="primary" size="md">
              Medium
            </Button>
            <Button variant="outlined" hierarchy="primary" size="sm">
              Small
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Text Button Variants
export const TextButtons: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Buttons</h3>
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Primary</h4>
          <div className="space-y-2">
            <Button variant="text" hierarchy="primary" size="lg">
              Large
            </Button>
            <Button variant="text" hierarchy="primary" size="md">
              Medium
            </Button>
            <Button variant="text" hierarchy="primary" size="sm">
              Small
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Disabled States
export const DisabledStates: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Solid</h4>
            <div className="space-y-2">
              <Button variant="solid" hierarchy="primary" disabled>
                Primary
              </Button>
              <Button variant="solid" hierarchy="assistive" disabled>
                Assistive
              </Button>
              <Button variant="solid" hierarchy="custom" disabled>
                Custom
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Outlined</h4>
            <div className="space-y-2">
              <Button variant="outlined" hierarchy="primary" disabled>
                Primary
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Text</h4>
            <div className="space-y-2">
              <Button variant="text" hierarchy="primary" disabled>
                Primary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Interactive Examples
export const InteractiveExamples: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Interactive Examples</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Call to Action</h4>
            <Button variant="solid" hierarchy="primary" size="lg" className="w-full">
              시작하기
            </Button>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Secondary Action</h4>
            <Button variant="outlined" hierarchy="primary" size="md">
              취소
            </Button>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Text Link</h4>
            <Button variant="text" hierarchy="primary" size="md">
              더 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Size Comparison
export const SizeComparison: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Size Comparison</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Solid Primary</h4>
            <div className="flex gap-2 items-center">
              <Button variant="solid" hierarchy="primary" size="sm">
                Small
              </Button>
              <Button variant="solid" hierarchy="primary" size="md">
                Medium
              </Button>
              <Button variant="solid" hierarchy="primary" size="lg">
                Large
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Text Primary</h4>
            <div className="flex gap-2 items-center">
              <Button variant="text" hierarchy="primary" size="sm">
                Small
              </Button>
              <Button variant="text" hierarchy="primary" size="md">
                Medium
              </Button>
              <Button variant="text" hierarchy="primary" size="lg">
                Large
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
