import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundation/Icons",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "VDS 아이콘 시스템 - 디자인 시스템에서 사용하는 아이콘들",
      },
    },
  },
};

export default meta;

// Icon Grid Placeholder
export const IconLibrary: StoryObj = {
  render: () => {
    // TODO: Figma에서 아이콘 정보를 가져와서 실제 아이콘 컴포넌트로 교체 필요
    const iconCategories = [
      {
        category: "Navigation",
        icons: [
          { name: "arrow-left", description: "왼쪽 화살표" },
          { name: "arrow-right", description: "오른쪽 화살표" },
          { name: "arrow-up", description: "위 화살표" },
          { name: "arrow-down", description: "아래 화살표" },
          { name: "close", description: "닫기" },
          { name: "menu", description: "메뉴" },
        ],
      },
      {
        category: "Actions",
        icons: [
          { name: "check", description: "체크" },
          { name: "plus", description: "추가" },
          { name: "minus", description: "제거" },
          { name: "edit", description: "편집" },
          { name: "delete", description: "삭제" },
          { name: "share", description: "공유" },
        ],
      },
      {
        category: "Social",
        icons: [
          { name: "kakao", description: "카카오" },
          { name: "naver", description: "네이버" },
          { name: "google", description: "구글" },
          { name: "facebook", description: "페이스북" },
        ],
      },
      {
        category: "UI Elements",
        icons: [
          { name: "search", description: "검색" },
          { name: "filter", description: "필터" },
          { name: "heart", description: "좋아요" },
          { name: "bookmark", description: "북마크" },
          { name: "notification", description: "알림" },
          { name: "settings", description: "설정" },
        ],
      },
    ];

    return (
      <div className="space-y-8">
        <div>
          <h2 className="heading-lg mb-2">Icon Library</h2>
          <p className="body-md-normal text-gray-600 mb-6">
            디자인 시스템에서 사용하는 모든 아이콘들을 카테고리별로 정리했습니다.
          </p>

          {iconCategories.map((category) => (
            <div key={category.category} className="mb-8">
              <h3 className="heading-md mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.icons.map((icon) => (
                  <div
                    key={icon.name}
                    className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 mb-3 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-lg">📦</span>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">{icon.name}</div>
                      <div className="text-xs text-gray-500">{icon.description}</div>
                    </div>
                    <div className="mt-2 text-xs font-mono text-gray-400">
                      {`<Icon name="${icon.name}" />`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="heading-md mb-4">Usage</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-2">
              <div>
                <div className="text-sm font-semibold mb-2">기본 사용법:</div>
                <code className="block bg-white p-3 rounded border text-sm">
                  {`import { Icon } from 'vonvon-design-system';

<Icon name="arrow-left" size={24} />`}
                </code>
              </div>
              <div className="mt-4">
                <div className="text-sm font-semibold mb-2">커스텀 색상:</div>
                <code className="block bg-white p-3 rounded border text-sm">
                  {`<Icon name="heart" size={24} color="#ff5258" />`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-yellow-600 text-lg">⚠️</span>
            <div>
              <div className="font-semibold text-yellow-800 mb-1">아이콘 업데이트 필요</div>
              <div className="text-sm text-yellow-700">
                현재는 플레이스홀더로 표시되어 있습니다. Figma 디자인 시스템에서 실제 아이콘 컴포넌트를
                가져와서 업데이트해야 합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Icon Sizes
export const IconSizes: StoryObj = {
  render: () => {
    const sizes = [16, 20, 24, 32, 48, 64];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Icon Sizes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sizes.map((size) => (
              <div key={size} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div
                  className="bg-gray-100 rounded mb-2 flex items-center justify-center"
                  style={{ width: size, height: size }}
                >
                  <span className="text-gray-400" style={{ fontSize: size * 0.6 }}>
                    📦
                  </span>
                </div>
                <div className="text-sm font-semibold">{size}px</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Icon Colors
export const IconColors: StoryObj = {
  render: () => {
    const colors = [
      { name: "Primary", value: "#ff5258", var: "--color-primary-normal" },
      { name: "Label Heavy", value: "#0f0f0f", var: "--color-label-heavy" },
      { name: "Label Normal", value: "#474747", var: "--color-label-normal" },
      { name: "Label Alternative", value: "#8a8a8a", var: "--color-label-alternative" },
      { name: "Static White", value: "#fff", var: "--color-static-white" },
      { name: "Static Black", value: "#000", var: "--color-static-black" },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h2 className="heading-lg mb-4">Icon Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {colors.map((color) => (
              <div
                key={color.name}
                className="border border-gray-200 rounded-lg p-4 flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 rounded mb-3 flex items-center justify-center"
                  style={{
                    backgroundColor: color.value === "#fff" ? "#f3f4f6" : color.value,
                    border: color.value === "#fff" ? "1px solid #e5e5e5" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "32px",
                      color: color.value === "#fff" ? "#000" : "#fff",
                    }}
                  >
                    📦
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold mb-1">{color.name}</div>
                  <div className="text-xs text-gray-500 mb-1">{color.var}</div>
                  <div className="text-xs font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
