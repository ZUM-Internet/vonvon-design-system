import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-j0u0BHK_.js";import{B as b}from"./Button-Bm4Pnjib.js";import{A as R,m as v}from"./proxy-DKS1ELNO.js";import"./preload-helper-PPVm8Dsz.js";const f=({isOpen:r,onClose:t,title:d,description:p,children:m,primaryActionLabel:u,onPrimaryAction:N,secondaryActionLabel:x,onSecondaryAction:j,customActions:n,closeOnOverlay:A=!0,textAlign:w="left",className:T=""})=>{h.useEffect(()=>{const a=O=>{O.key==="Escape"&&r&&t()};return r&&(document.addEventListener("keydown",a),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",a),document.body.style.overflow="unset"}},[r,t]);const y=w==="center"?"text-center":"text-left",q=d||p,g=!n&&(u||x);return e.jsx(R,{children:r&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx(v.div,{className:"absolute inset-0 bg-material-dimmer",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>{A&&t()}}),e.jsxs(v.div,{className:`relative w-full bg-static-white rounded-[20px] px-[20px] pt-[28px] pb-[20px] max-w-[335px] ${T}`,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",damping:22,stiffness:230},role:"dialog","aria-modal":"true",onClick:a=>a.stopPropagation(),children:[q&&e.jsx("div",{className:`flex flex-col items-center ${y}`,children:e.jsxs("div",{className:"w-full",children:[d&&e.jsx("h2",{className:`text-label-strong font-bold heading-xl mb-1 ${y}`,children:d}),p&&e.jsx("p",{className:`text-label-neutral font-regular body-md-reading ${y}`,children:p})]})}),m&&e.jsx("div",{className:`mt-5 ${g||n?"mb-5":""}`,children:m}),n&&e.jsx("div",{className:"flex flex-col gap-1 pt-[24px]",children:n}),g&&e.jsxs("div",{className:`flex flex-col gap-2 ${m?"":"pt-[24px]"}`,children:[u&&e.jsx(b,{onClick:N,variant:"solid",hierarchy:"primary",size:"md",fullWidth:!0,children:u}),x&&e.jsx(b,{onClick:j,variant:"text",hierarchy:"primary",size:"md",fullWidth:!0,children:x})]})]})]})})};f.__docgenInfo={description:`중앙 팝업 컴포넌트
- 오버레이 클릭 및 ESC 키로 닫기 지원
- 제목/설명 옵션 처리 및 커스텀 버튼 영역 제공`,methods:[],displayName:"Popup",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},primaryActionLabel:{required:!1,tsType:{name:"string"},description:""},onPrimaryAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},secondaryActionLabel:{required:!1,tsType:{name:"string"},description:""},onSecondaryAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closeOnOverlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},textAlign:{required:!1,tsType:{name:"union",raw:'"left" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const z={title:"Components/Popup",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"중앙 팝업 컴포넌트. 제목 옵션, 기본/커스텀 버튼을 지원합니다."}}},argTypes:{isOpen:{control:"boolean",description:"팝업 열림 여부"},title:{control:"text",description:"팝업 제목 (미입력 시 숨김)"},description:{control:"text",description:"팝업 설명"},primaryActionLabel:{control:"text",description:"메인 버튼 라벨"},secondaryActionLabel:{control:"text",description:"보조 버튼 라벨"},size:{control:"select",options:["sm","md","lg"],description:"팝업 크기"},textAlign:{control:"select",options:["left","center"],description:"텍스트 정렬"},closeOnOverlay:{control:"boolean",description:"오버레이 클릭 시 닫힘 여부"},onClose:{action:"closed",description:"닫기 이벤트"},onPrimaryAction:{action:"primary action",description:"메인 버튼 클릭"},onSecondaryAction:{action:"secondary action",description:"보조 버튼 클릭"}}},s={args:{isOpen:!0,title:"제목을 입력해 주세요.",description:"보조 설명",primaryActionLabel:"확인",secondaryActionLabel:"취소",children:e.jsxs("div",{className:"space-y-3 text-[0px]",children:[e.jsx("p",{className:"text-label-normal body-md-normal",children:"팝업 본문 영역에 텍스트, 입력폼 등 다양한 콘텐츠를 배치할 수 있습니다."}),e.jsx("textarea",{className:"w-full h-[120px] bg-opacity-alternative border border-opacity-neutral rounded-[16px] p-4 text-label-normal body-sm-normal resize-none focus:outline-none focus:ring-2 focus:ring-primary-normal",placeholder:"내용을 입력해 주세요."})]})}},i={args:{isOpen:!0,description:"제목 없이 간단한 설명만 필요한 경우입니다.",primaryActionLabel:"확인"}},o={args:{isOpen:!0,title:"한 개의 버튼만 노출",primaryActionLabel:"확인",description:"보조 버튼 없이 메인 버튼만 필요한 상황을 위한 예시입니다."}},l={args:{isOpen:!0,title:"커스텀 버튼 예시",description:"직접 버튼을 구성할 수 있습니다.",customActions:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"flex-1 py-3 rounded-[16px] bg-opacity-alternative text-label-strong body-sm-medium",children:"서브 액션"}),e.jsx("button",{className:"flex-1 py-3 rounded-[16px] bg-primary-normal text-white body-sm-medium",children:"메인 액션"})]})}},L=()=>{const[r,t]=h.useState(!1);return e.jsxs("div",{className:"p-4",children:[e.jsx("button",{onClick:()=>t(!0),className:"px-6 py-3 bg-primary-normal text-white rounded-lg font-semibold",children:"팝업 열기"}),e.jsx(f,{isOpen:r,onClose:()=>t(!1),title:"사용자 상호작용",description:"바깥 영역을 클릭하거나 버튼을 눌러 닫을 수 있습니다.",primaryActionLabel:"확인",onPrimaryAction:()=>t(!1),secondaryActionLabel:"다음에",onSecondaryAction:()=>t(!1),textAlign:"center",children:e.jsx("p",{className:"text-label-normal body-md-normal",children:"실제 플로우에서 사용하는 인터랙티브 팝업 예시입니다."})})]})},c={render:()=>e.jsx(L,{}),parameters:{docs:{description:{story:"실제 플로우에서 팝업을 여닫는 모습을 확인할 수 있는 데모입니다."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "제목을 입력해 주세요.",
    description: "보조 설명",
    primaryActionLabel: "확인",
    secondaryActionLabel: "취소",
    children: <div className="space-y-3 text-[0px]">
        <p className="text-label-normal body-md-normal">
          팝업 본문 영역에 텍스트, 입력폼 등 다양한 콘텐츠를 배치할 수 있습니다.
        </p>
        <textarea className="w-full h-[120px] bg-opacity-alternative border border-opacity-neutral rounded-[16px] p-4 text-label-normal body-sm-normal resize-none focus:outline-none focus:ring-2 focus:ring-primary-normal" placeholder="내용을 입력해 주세요." />
      </div>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    description: "제목 없이 간단한 설명만 필요한 경우입니다.",
    primaryActionLabel: "확인"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "한 개의 버튼만 노출",
    primaryActionLabel: "확인",
    description: "보조 버튼 없이 메인 버튼만 필요한 상황을 위한 예시입니다."
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "커스텀 버튼 예시",
    description: "직접 버튼을 구성할 수 있습니다.",
    customActions: <div className="flex gap-2">
        <button className="flex-1 py-3 rounded-[16px] bg-opacity-alternative text-label-strong body-sm-medium">
          서브 액션
        </button>
        <button className="flex-1 py-3 rounded-[16px] bg-primary-normal text-white body-sm-medium">
          메인 액션
        </button>
      </div>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveExample />,
  parameters: {
    docs: {
      description: {
        story: "실제 플로우에서 팝업을 여닫는 모습을 확인할 수 있는 데모입니다."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const B=["Default","WithoutTitle","SinglePrimaryButton","CustomButtons","Interactive"];export{l as CustomButtons,s as Default,c as Interactive,o as SinglePrimaryButton,i as WithoutTitle,B as __namedExportsOrder,z as default};
