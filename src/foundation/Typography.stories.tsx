import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundation/Typography",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "VDS 타이포그래피 시스템 - 디자인 시스템에서 사용하는 모든 타이포그래피 스타일",
      },
    },
  },
};

export default meta;

// Title Styles
export const TitleStyles: StoryObj = {
  render: () => {
    return (
      <div className="space-y-6" style={{ fontFamily: "Pretendard, sans-serif" }}>
        <div>
          <h2 className="heading-lg mb-4">Title</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="title-sm mb-2" style={{ color: "#0f0f0f" }}>
                Title SM (26px)
              </div>
              <div className="text-sm text-gray-600 mt-2">
                <div>Font Size: 26px</div>
                <div>Line Height: 138%</div>
                <div>Letter Spacing: -1%</div>
                <div>Font Weight: 700</div>
                <div className="mt-2 font-mono text-xs">
                  클래스: <code className="bg-gray-100 px-2 py-1 rounded">title-sm</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Heading Styles
export const HeadingStyles: StoryObj = {
  render: () => {
    const headings = [
      {
        name: "Heading XXL",
        class: "heading-xxl",
        size: "24px",
        lineHeight: "135%",
        letterSpacing: "-0.48px",
        sample: "Heading XXL 텍스트",
      },
      {
        name: "Heading XL",
        class: "heading-xl",
        size: "22px",
        lineHeight: "120%",
        letterSpacing: "-0.44px",
        sample: "Heading XL 텍스트",
      },
      {
        name: "Heading LG",
        class: "heading-lg",
        size: "20px",
        lineHeight: "120%",
        letterSpacing: "-0.4px",
        sample: "Heading LG 텍스트",
      },
      {
        name: "Heading MD",
        class: "heading-md",
        size: "18px",
        lineHeight: "140%",
        letterSpacing: "-0.36px",
        sample: "Heading MD 텍스트",
      },
      {
        name: "Heading SM",
        class: "heading-sm",
        size: "17px",
        lineHeight: "140%",
        letterSpacing: "-0.34px",
        sample: "Heading SM 텍스트",
      },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Headings</h2>
          <div className="space-y-4">
            {headings.map((heading) => (
              <div key={heading.name} className="border border-gray-200 rounded-lg p-6">
                <div className={heading.class} style={{ color: "#0f0f0f", marginBottom: "8px" }}>
                  {heading.sample}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <div>Font Size: {heading.size}</div>
                  <div>Line Height: {heading.lineHeight}</div>
                  <div>Letter Spacing: {heading.letterSpacing}</div>
                  <div className="mt-2 font-mono text-xs">
                    클래스: <code className="bg-gray-100 px-2 py-1 rounded">{heading.class}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Body Styles
export const BodyStyles: StoryObj = {
  render: () => {
    const bodyStyles = [
      {
        name: "Body LG Reading",
        class: "body-lg-reading",
        size: "16px",
        lineHeight: "140%",
        letterSpacing: "0.32px",
        sample: "Body LG Reading 텍스트입니다. 읽기용 본문 스타일로 장문 텍스트에 적합합니다.",
      },
      {
        name: "Body LG Normal",
        class: "body-lg-normal",
        size: "16px",
        lineHeight: "120%",
        letterSpacing: "-0.32px",
        sample: "Body LG Normal 텍스트입니다. 일반 본문 스타일입니다.",
      },
      {
        name: "Body MD Reading",
        class: "body-md-reading",
        size: "15px",
        lineHeight: "140%",
        letterSpacing: "-0.3px",
        sample: "Body MD Reading 텍스트입니다. 읽기용 본문 스타일로 장문 텍스트에 적합합니다.",
      },
      {
        name: "Body MD Normal",
        class: "body-md-normal",
        size: "15px",
        lineHeight: "120%",
        letterSpacing: "-0.3px",
        sample: "Body MD Normal 텍스트입니다. 일반 본문 스타일입니다.",
      },
      {
        name: "Body SM Reading",
        class: "body-sm-reading",
        size: "14px",
        lineHeight: "140%",
        letterSpacing: "-0.28px",
        sample: "Body SM Reading 텍스트입니다. 읽기용 본문 스타일로 장문 텍스트에 적합합니다.",
      },
      {
        name: "Body SM Normal",
        class: "body-sm-normal",
        size: "14px",
        lineHeight: "120%",
        letterSpacing: "-0.28px",
        sample: "Body SM Normal 텍스트입니다. 일반 본문 스타일입니다.",
      },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Body Text</h2>
          <div className="space-y-4">
            {bodyStyles.map((style) => (
              <div key={style.name} className="border border-gray-200 rounded-lg p-6">
                <div className={style.class} style={{ color: "#474747", marginBottom: "8px" }}>
                  {style.sample}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <div>Font Size: {style.size}</div>
                  <div>Line Height: {style.lineHeight}</div>
                  <div>Letter Spacing: {style.letterSpacing}</div>
                  <div className="mt-2 font-mono text-xs">
                    클래스: <code className="bg-gray-100 px-2 py-1 rounded">{style.class}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Label Styles
export const LabelStyles: StoryObj = {
  render: () => {
    const labelStyles = [
      {
        name: "Label MD",
        class: "label-md",
        size: "13px",
        lineHeight: "120%",
        letterSpacing: "-0.26px",
        sample: "Label MD 텍스트",
      },
      {
        name: "Label SM",
        class: "label-sm",
        size: "12px",
        lineHeight: "120%",
        letterSpacing: "-0.12px",
        sample: "Label SM 텍스트",
      },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Labels</h2>
          <div className="space-y-4">
            {labelStyles.map((style) => (
              <div key={style.name} className="border border-gray-200 rounded-lg p-6">
                <div className={style.class} style={{ color: "#474747", marginBottom: "8px" }}>
                  {style.sample}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <div>Font Size: {style.size}</div>
                  <div>Line Height: {style.lineHeight}</div>
                  <div>Letter Spacing: {style.letterSpacing}</div>
                  <div className="mt-2 font-mono text-xs">
                    클래스: <code className="bg-gray-100 px-2 py-1 rounded">{style.class}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Typography Scale
export const TypographyScale: StoryObj = {
  render: () => {
    const allStyles = [
      { name: "Title SM", class: "title-sm", size: "26px" },
      { name: "Heading XXL", class: "heading-xxl", size: "24px" },
      { name: "Heading XL", class: "heading-xl", size: "22px" },
      { name: "Heading LG", class: "heading-lg", size: "20px" },
      { name: "Heading MD", class: "heading-md", size: "18px" },
      { name: "Heading SM", class: "heading-sm", size: "17px" },
      { name: "Body LG Reading", class: "body-lg-reading", size: "16px" },
      { name: "Body LG Normal", class: "body-lg-normal", size: "16px" },
      { name: "Body MD Reading", class: "body-md-reading", size: "15px" },
      { name: "Body MD Normal", class: "body-md-normal", size: "15px" },
      { name: "Body SM Reading", class: "body-sm-reading", size: "14px" },
      { name: "Body SM Normal", class: "body-sm-normal", size: "14px" },
      { name: "Label MD", class: "label-md", size: "13px" },
      { name: "Label SM", class: "label-sm", size: "12px" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Typography Scale</h2>
          <div className="space-y-3">
            {allStyles.map((style) => (
              <div key={style.name} className="flex items-center gap-4 border-b border-gray-200 pb-3">
                <div className="w-40 text-sm text-gray-600">{style.name}</div>
                <div className={`${style.class} flex-1`} style={{ color: "#0f0f0f" }}>
                  {style.name} 텍스트 샘플
                </div>
                <div className="text-xs text-gray-500 w-24">{style.size}</div>
                <div className="text-xs font-mono text-gray-400 w-32">{style.class}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
