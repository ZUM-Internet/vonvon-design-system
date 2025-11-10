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
type Story = StoryObj<typeof meta>;

type ColorToken = {
  label: string;
  var: string;
  value: string;
};

type ColorSection = {
  id: string;
  title: string;
  description?: string;
  colors: ColorToken[];
};

const colorSections: ColorSection[] = [
  {
    id: "static",
    title: "Static Colors",
    colors: [
      { label: "static-white", var: "--color-static-white", value: "#fff" },
      { label: "static-black", var: "--color-static-black", value: "#000" },
    ],
  },
  {
    id: "material",
    title: "Material Colors",
    colors: [{ label: "material-dimmer", var: "--color-material-dimmer", value: "rgba(0, 0, 0, 0.6)" }],
  },
  {
    id: "label",
    title: "Label Colors",
    colors: [
      { label: "label-heavy", var: "--color-label-heavy", value: "#0c0c0d" },
      { label: "label-strong", var: "--color-label-strong", value: "#1c1c1c" },
      { label: "label-normal", var: "--color-label-normal", value: "#474747" },
      { label: "label-neutral", var: "--color-label-neutral", value: "#5c5c5c" },
      { label: "label-alternative", var: "--color-label-alternative", value: "#8a8a8a" },
      { label: "label-assistive", var: "--color-label-assistive", value: "#b0b0b0" },
    ],
  },
  {
    id: "background",
    title: "Background Colors",
    colors: [
      {
        label: "background-opacity-normal",
        var: "--color-background-opacity-normal",
        value: "rgba(255, 255, 255, 0.9)",
      },
      {
        label: "background-opacity-heavy",
        var: "--color-background-opacity-heavy",
        value: "rgba(0, 0, 0, 0.76)",
      },
      {
        label: "background-opacity-strong",
        var: "--color-background-opacity-strong",
        value: "rgba(0, 0, 0, 0.4)",
      },
      { label: "background-neutral", var: "--color-background-neutral", value: "#dbdcdf" },
      { label: "background-alternative", var: "--color-background-alternative", value: "#f7f7f7" },
    ],
  },
  {
    id: "interaction",
    title: "Interaction Colors",
    colors: [
      { label: "interaction-disable-normal", var: "--color-interaction-disable-normal", value: "#eaebec" },
      { label: "interaction-disable-strong", var: "--color-interaction-disable-strong", value: "#dbdcdf" },
    ],
  },
  {
    id: "line",
    title: "Line Colors",
    colors: [{ label: "line-alternative", var: "--color-line-alternative", value: "#eaebec" }],
  },
  {
    id: "primary",
    title: "Primary Colors",
    colors: [
      { label: "primary-assistive", var: "--color-primary-assistive", value: "#fff5f5" },
      { label: "primary-alternative", var: "--color-primary-alternative", value: "#ffd1d3" },
      { label: "primary-neutral", var: "--color-primary-neutral", value: "#ffa0a3" },
      { label: "primary-normal", var: "--color-primary-normal", value: "#ff5258" },
      { label: "primary-strong", var: "--color-primary-strong", value: "#e9494e" },
      { label: "primary-heavy", var: "--color-primary-heavy", value: "#bb2b30" },
    ],
  },
  {
    id: "social",
    title: "Social Colors",
    colors: [
      { label: "social-kakao", var: "--color-social-kakao", value: "#ffed47" },
      { label: "social-facebook", var: "--color-social-facebook", value: "#1a75ff" },
    ],
  },
];

const getContrastingTextColor = (value: string) => {
  if (value.startsWith("#")) {
    // 간단한 명도 비교를 위한 HEX 파싱
    const hex = value.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#000" : "#fff";
  }

  if (value.startsWith("rgba")) {
    const alpha = Number(value.split(",")[3]?.replace(")", "").trim()) || 1;
    return alpha < 0.65 ? "#000" : "#fff";
  }

  return "#fff";
};

const sectionMap = Object.fromEntries(colorSections.map((section) => [section.id, section])) as Record<
  string,
  ColorSection
>;

const renderSection = (section: ColorSection) => (
  <section key={section.title} className="space-y-4">
    <div>
      <h2 className="heading-lg mb-1">{section.title}</h2>
      {section.description ? <p className="text-sm text-gray-600">{section.description}</p> : null}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {section.colors.map((color) => {
        const textColor = getContrastingTextColor(color.value);

        return (
          <div key={color.label} className="border border-gray-200 rounded-lg p-4">
            <div
              className="w-full h-24 rounded-md mb-3 flex items-center justify-center text-sm font-semibold"
              style={{ backgroundColor: color.value, color: textColor }}
            >
              샘플 텍스트
            </div>
            <div className="space-y-1">
              <div className="font-semibold">{color.label}</div>
              <div className="text-sm text-gray-600 font-mono">{color.var}</div>
              <div className="text-sm font-mono">{color.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const createColorStory = (sectionId: keyof typeof sectionMap): Story => {
  const section = sectionMap[sectionId];
  return {
    name: section.title,
    render: () => <div className="space-y-10">{renderSection(section)}</div>,
  };
};

const CombinedTemplate: Story["render"] = () => (
  <div className="space-y-10">{colorSections.map((section) => renderSection(section))}</div>
);

export const StaticColors: Story = createColorStory("static");
export const MaterialColors: Story = createColorStory("material");
export const LabelColors: Story = createColorStory("label");
export const BackgroundColors: Story = createColorStory("background");
export const InteractionColors: Story = createColorStory("interaction");
export const LineColors: Story = createColorStory("line");
export const PrimaryColors: Story = createColorStory("primary");
export const SocialColors: Story = createColorStory("social");
export const ThemeColors: Story = {
  name: "All Theme Colors",
  render: CombinedTemplate,
};
