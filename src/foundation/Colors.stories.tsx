import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundation/Colors",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "VDS 컬러 시스템 - 디자인 시스템에서 사용하는 모든 컬러 변수들",
      },
    },
  },
};

export default meta;

// Static Colors
export const StaticColors: StoryObj = {
  render: () => {
    const staticColors = [
      { name: "static-white", var: "--color-static-white", value: "#fff" },
      { name: "static-black", var: "--color-static-black", value: "#000" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Static & Utility Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {staticColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div className="w-full h-24 rounded-md mb-3" style={{ backgroundColor: color.value }} />
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Primary Colors
export const PrimaryColors: StoryObj = {
  render: () => {
    const primaryColors = [
      { name: "primary-heavy", var: "--color-primary-heavy", value: "#bb2b30" },
      { name: "primary-strong", var: "--color-primary-strong", value: "#e9494e" },
      { name: "primary-normal", var: "--color-primary-normal", value: "#ff5258" },
      { name: "primary-neutral", var: "--color-primary-neutral", value: "#ffa0a3" },
      { name: "primary-alternative", var: "--color-primary-alternative", value: "#ffd1d3" },
      { name: "primary-assistive", var: "--color-primary-assistive", value: "#fff5f5" },
      // { name: "primary-dark", var: "--color-primary-dark", value: "#e9494e" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {primaryColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div className="w-full h-24 rounded-md mb-3" style={{ backgroundColor: color.value }} />
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Label Colors
export const LabelColors: StoryObj = {
  render: () => {
    const labelColors = [
      { name: "label-heavy", var: "--color-label-heavy", value: "#0f0f0f" },
      { name: "label-strong", var: "--color-label-strong", value: "#1c1c1c" },
      { name: "label-normal", var: "--color-label-normal", value: "#474747" },
      { name: "label-neutral", var: "--color-label-neutral", value: "#5c5c5c" },
      { name: "label-alternative", var: "--color-label-alternative", value: "#8a8a8a" },
      { name: "label-assistive", var: "--color-label-assistive", value: "#b0b0b0" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Label Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {labelColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div className="w-full h-24 rounded-md mb-3" style={{ backgroundColor: color.value }} />
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Assistive Colors
export const AssistiveColors: StoryObj = {
  render: () => {
    const backgroundColors = [
      { name: "Opacity/Normal", var: "--color-opacity-normal", value: "rgba(255, 255, 255, 0.9)" },
      { name: "Opacity/Heavy", var: "--color-opacity-heavy", value: "rgba(0, 0, 0, 0.76)" },
      { name: "Opacity/Strong", var: "--color-opacity-strong", value: "rgba(0, 0, 0, 0.4)" },
      { name: "Opacity/Neutral", var: "--color-opacity-neutral", value: "#dbdcdf" },
      { name: "Opacity/Alternative", var: "--color-opacity-alternative", value: "#f7f7f7" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Background Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {backgroundColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div className="w-full h-24 rounded-md mb-3" style={{ backgroundColor: color.value }} />
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                  <div className="text-label-heavy">테스트</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Outlined Colors
export const OutlinedColors: StoryObj = {
  render: () => {
    const outlinedColors = [
      { name: "outlined-normal", var: "--color-outlined-normal", value: "#ffa0a3" },
      { name: "outlined-disabled", var: "--color-outlined-disabled", value: "#b0b0b0" },
      { name: "outlined-hover", var: "--color-outlined-hover", value: "#fff5f5" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Outlined Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {outlinedColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div className="w-full h-24 rounded-md mb-3" style={{ backgroundColor: color.value }} />
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Text Colors
export const TextColors: StoryObj = {
  render: () => {
    const textColors = [
      { name: "text-normal", var: "--color-text-normal", value: "#5c5c5c" },
      { name: "text-disabled", var: "--color-text-disabled", value: "#b0b0b0" },
      { name: "text-hover", var: "--color-text-hover", value: "#f7f7f8" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Text Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {textColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div
                  className="w-full h-24 rounded-md mb-3 flex items-center justify-center"
                  style={{ backgroundColor: color.value === "#f7f7f8" ? "#f7f7f8" : color.value }}
                >
                  <span
                    className="font-semibold"
                    style={{
                      color: color.value === "#f7f7f8" ? "#000" : "#fff",
                    }}
                  >
                    샘플 텍스트
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Opacity Colors
export const OpacityColors: StoryObj = {
  render: () => {
    const opacityColors = [
      { name: "opacity-normal", var: "--color-opacity-normal", value: "rgba(255, 255, 255, 0.9)" },
      { name: "opacity-strong", var: "--color-opacity-strong", value: "rgba(0, 0, 0, 0.76)" },
      { name: "opacity-neutral", var: "--color-opacity-neutral", value: "#dbdcdf" },
      { name: "opacity-alternative", var: "--color-opacity-alternative", value: "#f7f7f7" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Opacity Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {opacityColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div className="relative w-full h-24 rounded-md mb-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400" />
                  <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Border Colors
export const BorderColors: StoryObj = {
  render: () => {
    const borderColors = [
      { name: "border-color-cool-neutral-90", var: "--border-color-cool-neutral-90", value: "#c2c4c8" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Border Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {borderColors.map((color) => (
              <div key={color.name} className="border border-gray-200 rounded-lg p-4">
                <div
                  className="w-full h-24 rounded-md mb-3 flex items-center justify-center"
                  style={{
                    backgroundColor: "#fff",
                    border: `4px solid ${color.value}`,
                  }}
                >
                  <span className="font-semibold text-gray-700">보더 샘플</span>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-gray-600">{color.var}</div>
                  <div className="text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
