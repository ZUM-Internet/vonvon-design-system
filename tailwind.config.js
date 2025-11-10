/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.stories.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      fontWeight: {
        regular: "400",
      },
      colors: {
        label: {
          heavy: "var(--color-label-heavy)",
          strong: "var(--color-label-strong)",
          normal: "var(--color-label-normal)",
          neutral: "var(--color-label-neutral)",
          alternative: "var(--color-label-alternative)",
          assistive: "var(--color-label-assistive)",
        },
        background: {
          opacity: {
            normal: "var(--color-background-opacity-normal)",
            heavy: "var(--color-background-opacity-heavy)",
            strong: "var(--color-background-opacity-strong)",
          },
          neutral: "var(--color-background-neutral)",
          alternative: "var(--color-background-alternative)",
        },
        interaction: {
          disable: {
            normal: "var(--color-interaction-disable-nomral)",
            strong: "var(--color-interaction-disable-strong)",
          },
        },
        social: {
          kakao: "var(--color-social-kakao)",
          facebook: "var(--color-social-facebook)",
        },
        static: {
          white: "var(--color-static-white)",
          black: "var(--color-static-black)",
        },
        material: {
          dimmer: "var(--color-material-dimmer)",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Primary
    "bg-primary-normal", "bg-primary-strong", "bg-primary-heavy",
    "text-primary-normal", "text-primary-strong", "text-primary-heavy",
  
    // Label
    "text-label-heavy", "text-label-strong", "text-label-normal",
    "text-label-neutral", "text-label-alternative", "text-label-assistive",
  
    // Background
    "bg-background-neutral", "bg-background-alternative",
    "bg-background-opacity-normal", "bg-background-opacity-strong",
  
    // Interaction
    "bg-interaction-disable-normal", "bg-interaction-disable-strong",
  
    // Social
    "bg-social-kakao", "bg-social-facebook",
    "text-social-kakao", "text-social-facebook",
  
    // Static
    "bg-static-white", "text-static-black",
  
    // Typography (layer.css utilities)
    "title-sm", "heading-xxl", "heading-xl", "heading-lg",
    "heading-md", "heading-sm", "body-lg-reading", "body-lg-normal",
    "body-md-reading", "body-md-normal", "body-sm-reading", "body-sm-normal",
    "label-md", "label-sm",

    "font-regular",
  ],
};
