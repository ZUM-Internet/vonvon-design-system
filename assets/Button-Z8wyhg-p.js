import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CxaNX0BH.js";const b=({children:u,variant:a="solid",hierarchy:t="primary",size:l="md",disabled:e=!1,icon:r,iconPosition:i="left",fullWidth:d=!1,className:m,...p})=>{const c="inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",n={sm:"px-[28px] h-[42px] body-md-normal font-regular rounded-[10px]",md:"px-[28px] h-[51px] body-lg-normal font-medium rounded-[12px]",lg:"px-[28px] h-[56px] heading-sm font-semibold rounded-[12px]"},f=()=>{if(a==="solid"){if(t==="primary")return e?"bg-interaction-disable-normal text-label-assistive cursor-default":"bg-primary-normal text-white";if(t==="secondary")return e?"bg-interaction-disable-normal text-label-assistive cursor-default":"bg-primary-alternative text-primary-strong";if(t==="assistive")return e?"bg-interaction-disable-normal text-label-assistive cursor-default":"bg-assistive-light text-label-strong";if(t==="custom")return e?"bg-interaction-disable-normal text-label-assistive cursor-default":"bg-gray-100 text-gray-600 "}else if(a==="outlined"){if(t==="primary")return e?"border border-interaction-disable-normal text-label-assistive cursor-default":"border border-primary-neutral text-primary-strong bg-transparent "}else if(a==="text"){if(t==="primary")return e?"text-interaction-disable-strong bg-transparent cursor-default":"text-primary-normal bg-transparent ";if(t==="assistive")return e?"text-interaction-disable-strong bg-transparent cursor-default":"text-label-assistive bg-transparent"}return""},x=[c,(()=>{if(a==="text"){const o={sm:"h-10 px-[35px] body-lg-normal font-medium rounded-[12px]",md:"h-10 px-[35px] body-md-normal font-medium rounded-[12px]"};return o[l]??o.md}return n[l]??n.md})(),f(),d?"w-full":"",m].filter(Boolean).join(" ");return s.jsxs("button",{type:"button",className:x,disabled:e,...p,children:[r&&i==="left"&&s.jsx("span",{className:"mr-2",children:r}),u,r&&i==="right"&&s.jsx("span",{className:"ml-2",children:r})]})};b.__docgenInfo={description:`VDS Button Component

Variants:
- solid: 배경색이 있는 버튼
- outlined: 테두리만 있는 버튼
- text: 텍스트만 있는 버튼

Hierarchies:
- primary: 주요 액션용
- assistive: 보조 액션용
- custom: 커스텀 스타일

Sizes:
- sm: 작은 크기
- md: 중간 크기 (기본)
- lg: 큰 크기

Width Control:
- fullWidth: 부모 컨테이너 전체 너비 사용
- className prop으로 커스텀 너비 클래스 적용 가능 (예: "w-48", "max-w-xs")
- style prop으로 인라인 너비 스타일 적용 가능 (예: {width: '200px'})`,methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outlined" | "text"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},hierarchy:{required:!1,tsType:{name:"union",raw:'"primary" | "assistive" | "custom" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"assistive"'},{name:"literal",value:'"custom"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{b as B};
