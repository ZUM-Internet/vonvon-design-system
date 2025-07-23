/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.stories.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Primary Colors
    "bg-primary-normal",
    "bg-primary-heavy",
    "bg-primary-strong",
    "bg-primary-neutral",
    "bg-primary-alternative",
    "bg-primary-assistive",
    "text-primary-normal",
    "text-primary-heavy",
    "text-primary-strong",
    "text-primary-neutral",
    "text-primary-alternative",
    "text-primary-assistive",

    // Label Colors
    "text-label-heavy",
    "text-label-strong",
    "text-label-normal",
    "text-label-neutral",
    "text-label-alternative",
    "text-label-assistive",
    "bg-label-heavy",
    "bg-label-strong",
    "bg-label-normal",
    "bg-label-neutral",
    "bg-label-alternative",
    "bg-label-assistive",

    // Opacity Colors
    "bg-opacity-normal",
    "bg-opacity-strong",
    "bg-opacity-neutral",
    "bg-opacity-alternative",
    "text-opacity-normal",
    "text-opacity-strong",
    "text-opacity-neutral",
    "text-opacity-alternative",

    // Interaction Colors
    "bg-interaction-disable",
    "text-interaction-disable",

    // Static Colors
    "bg-static-white",
    "bg-static-black",
    "text-static-white",
    "text-static-black",

    // Material Colors
    "bg-material-dimmer",
    "text-material-dimmer",

    // Social Colors
    "bg-social-kakao",
    "text-social-kakao",

    // Shadows
    "shadow-strong",
    "shadow-normal",

    // Borders
    "border-width-default",
    "border-color-cool-neutral-90",

    // Typography Classes (이미 layer.css에 정의됨)
    "title-sm",
    "heading-xxl",
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "body-lg-reading",
    "body-lg-normal",
    "body-md-reading",
    "body-md-normal",
    "body-sm-reading",
    "body-sm-normal",
    "label-md",
    "label-sm",
  ],
};
