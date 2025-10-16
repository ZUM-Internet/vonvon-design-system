## Vonvon Design System (VDS)

React 19 기반의 컴포넌트 디자인 시스템입니다. TypeScript로 작성되었고, 개발 편의를 위해 Vite, Storybook을 사용하며 배포 번들은 Rollup으로 생성합니다. 스타일은 Tailwind CSS 유틸리티 클래스를 활용하여 빌드 시 정적 CSS로 추출됩니다.

### 설치

- Peer Dependencies: `react` `react-dom` (v19)

```bash
# npm
npm install vonvon-design-system react react-dom

# yarn
yarn add vonvon-design-system react react-dom

# pnpm
pnpm add vonvon-design-system react react-dom
```

### 빠른 시작 (사용자 프로젝트에서)

```tsx
import { Button, BottomSheet } from "vonvon-design-system";
// 대부분의 번들러는 패키지 내부의 CSS side-effect를 자동 포함합니다.
// 만약 스타일이 적용되지 않는다면 다음 임포트를 추가하세요:
// import "vonvon-design-system/dist/index.css";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <Button variant="solid" hierarchy="primary" size="md">
        시작하기
      </Button>
    </div>
  );
}
```

> 폰트는 `Pretendard, sans-serif`를 기본 사용합니다. 별도 웹폰트 로딩을 하지 않으면 시스템 산세리프로 대체됩니다.

---

## 공개 컴포넌트

현재 다음 컴포넌트를 제공합니다.

- `Button`
- `BottomSheet`

내부에는 `Toast` 컴포넌트가 있으나 아직 패키지 공개 API로 export 되지 않습니다.

### Button

다양한 Variant, Hierarchy, Size를 지원하는 기본 버튼입니다. 모든 표준 `button` 속성을 전달할 수 있습니다.

**Props**

- `children: React.ReactNode` (필수)
- `variant?: "solid" | "outlined" | "text"` 기본값: `solid`
- `hierarchy?: "primary" | "assistive" | "custom"` 기본값: `primary`
- `size?: "sm" | "md" | "lg"` 기본값: `md`
- `disabled?: boolean` 기본값: `false`
- `icon?: React.ReactNode`
- `iconPosition?: "left" | "right"` 기본값: `left`
- `fullWidth?: boolean` 기본값: `false`
- 그 외 `React.ButtonHTMLAttributes<HTMLButtonElement>` 지원

**사용 예시**

```tsx
import { Button } from "vonvon-design-system";

export function Buttons() {
  return (
    <div className="flex flex-col gap-3">
      <Button variant="solid" hierarchy="primary" size="md">
        확인
      </Button>
      <Button variant="outlined" hierarchy="primary">
        취소
      </Button>
      <Button variant="text" hierarchy="primary">
        더 보기
      </Button>
      <Button variant="solid" hierarchy="assistive" size="lg" fullWidth>
        다음
      </Button>
    </div>
  );
}
```

### BottomSheet

페이지 하단에서 등장하는 시트 컴포넌트입니다. `framer-motion`으로 애니메이션이 적용됩니다.

**Props**

- `isOpen: boolean` (필수): 열림/닫힘 상태
- `onClose: () => void` (필수): 닫기 콜백 (Dim 클릭, ESC에 사용)
- `isCloseButton?: boolean` 기본값: `false`
- `variant?: "default" | "emphasized" | "image"` 기본값: `default`
- `title?: string` 기본값: `"제목을 입력해 주세요."`
- `description?: string`
- `icon?: React.ReactNode` (emphasized 전용)
- `thumbnail?: React.ReactNode` (emphasized, image 전용)
- `primaryAction?: string`
- `secondaryAction?: string`
- `onPrimaryAction?: () => void`
- `onSecondaryAction?: () => void`
- `children?: React.ReactNode`
- `className?: string`
- `textAlign?: "left" | "center" | "right"` 기본값: `left`

**사용 예시**

```tsx
import { useState } from "react";
import { BottomSheet, Button } from "vonvon-design-system";

export function ExampleBottomSheet() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>바텀시트 열기</Button>
      <BottomSheet
        isOpen={open}
        onClose={() => setOpen(false)}
        title="제목"
        description="설명 텍스트"
        primaryAction="확인"
        secondaryAction="취소"
        onPrimaryAction={() => setOpen(false)}
        onSecondaryAction={() => setOpen(false)}
      >
        <div className="space-y-2">
          <p>여기에 컨텐츠를 넣을 수 있습니다.</p>
        </div>
      </BottomSheet>
    </div>
  );
}
```

---

## 스타일 & 테마

- 라이브러리에는 필요한 유틸리티 클래스가 이미 정적 CSS로 포함됩니다. 따라서 소비자 프로젝트에서 Tailwind 설정이 없어도 정상 동작합니다.
- 폰트는 `Pretendard`를 우선 사용합니다. 필요 시 웹폰트를 직접 로드하세요.

---

## 로컬 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 (Vite 예제 앱)
pnpm dev

# Storybook 실행
pnpm storybook

# 타입체크 + Vite 빌드
pnpm build

# 라이브러리 번들 (Rollup)
pnpm build:rollup
```

Storybook 문서에서 각 컴포넌트의 다양한 예제를 확인할 수 있습니다.

---

## 배포 산출물

- ESM: `dist/index.esm.js`
- CJS: `dist/index.cjs.js`
- 타입 선언: `dist/index.d.ts`
- 스타일: `dist/index.css`

애플리케이션에서 `import { Button, BottomSheet } from "vonvon-design-system";` 방식으로 사용하세요.
