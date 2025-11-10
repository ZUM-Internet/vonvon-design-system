import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-ZnebzMIm.js";import"./preload-helper-PPVm8Dsz.js";function o({children:a,icon:s,iconPosition:n="left",className:c=""}){return e.jsxs("div",{className:`flex items-center justify-center gap-[6px] px-7 py-4 bg-background-opacity-heavy rounded-[12px] backdrop-blur-sm w-fit ${c}`,children:[n==="left"&&s,e.jsx("span",{className:"text-white text-[15px] font-normal leading-[1.5] text-center",style:{letterSpacing:"-2%"},children:a}),n==="right"&&s]})}o.__docgenInfo={description:"VDS Toast Component (Figma 시안 기반)",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const p={title:"Components/Toast",component:o,tags:["autodocs"]},t={args:{children:"텍스트값 입력 필요"}},r={args:{children:"왼쪽 아이콘 토스트",icon:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{x:"3",y:"3",width:"12",height:"12",rx:"3",fill:"#FF5258"})}),iconPosition:"left"}},i={args:{children:"오른쪽 아이콘 토스트",icon:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{x:"3",y:"3",width:"12",height:"12",rx:"3",fill:"#FF5258"})}),iconPosition:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "텍스트값 입력 필요"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "왼쪽 아이콘 토스트",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="12" height="12" rx="3" fill="#FF5258" />
      </svg>,
    iconPosition: "left"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "오른쪽 아이콘 토스트",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="12" height="12" rx="3" fill="#FF5258" />
      </svg>,
    iconPosition: "right"
  }
}`,...i.parameters?.docs?.source}}};const g=["Default","WithIconLeft","WithIconRight"];export{t as Default,r as WithIconLeft,i as WithIconRight,g as __namedExportsOrder,p as default};
