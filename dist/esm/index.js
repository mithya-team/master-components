import{jsx as e,jsxs as n,Fragment as t}from"react/jsx-runtime";import*as a from"react";import o,{useMemo as r,useState as l,useEffect as i}from"react";import{Provider as s,Root as c,Trigger as d,Portal as p,Content as u,Arrow as m}from"@radix-ui/react-tooltip";import{DropdownMenu as h,Trigger as f,Portal as g,Content as N,Label as b,Item as v}from"@radix-ui/react-dropdown-menu";const x=t=>{const{children:a,content:o,placement:r="top",contentProps:l,hasArrow:i=!1,arrowProps:h,...f}=t;return e(s,{children:n(c,{...f,children:[e(d,{asChild:!0,children:a}),e(p,{children:n(u,{side:r,className:"TooltipContent",...l,children:[o,i&&e(m,{className:"TooltipArrow",...h})]})})]})})},y=a=>{const{classNames:o={},label:l,leftIcon:i,rightIcon:s,href:c,isExternalLink:d=!1,tooltipProps:p,component:u,...m}=a,{root:h="",leftIcon:f,rightIcon:g,label:N}=o,b=r((()=>`button_root ${h} `),[h]),v=r((()=>n(t,{children:[i?e("div",{className:`button_left-icon ${f}`,children:i}):null,l?"string"==typeof l?e("span",{className:`label ${N}`,children:l}):l:null,s?e("div",{className:`button_right-icon ${g}`,children:s}):null]})),[i,s,f,g,l,N]),y=r((()=>{if(c&&d)return e("a",{className:b,href:c,target:"_blank",rel:"noopener noreferrer",children:v});if(c&&!d&&u){return e(u,{className:b,to:c,...m,children:v})}return e("button",{className:b,...m,children:v})}),[o,l,i,s,c,d,p,u,m]);return p?.content?e(x,{...p,children:y}):y};document.head.innerHTML+="<style>.input_container{\n    display: flex;\n    flex-direction: row;\n}</style>";const w=t=>{const{className:a,startIcon:o,endIcon:r,label:l,disabled:i,error:s,helperText:c,classNames:d,type:p="text",...u}=t;return n("div",{className:`${a} input_root`,children:[l?"string"==typeof l?e("label",{className:`input__label ${d?.label}`,children:l}):l:null,n("div",{className:`input_container ${d?.inputRoot}`,children:[o?e("div",{className:`input__start-icon ${d?.startIcon}`,children:o}):null,e("input",{disabled:i,autoComplete:"false",type:p,className:`input ${d?.input}`,...u}),r?e("div",{className:`input__end-icon ${d?.endIcon}`,children:r}):null]}),s||c?e("p",{className:`input__helper-text ${s?d?.error:d?.helperText}`,children:s||c}):null]})};document.head.innerHTML+="<style>.input-box{\n    width: 40px;\n    height: 40px;\n    text-align: center;\n}</style>";const $=({value:t="",numInputs:a=4,onChange:r,onPaste:s,shouldAutoFocus:c=!0,inputType:d="text",renderSeparator:p="-",placeholder:u,classNames:m,error:h,helperText:f,title:g,...N})=>{const{container:b="",input:v="",separator:x=""}=m??{},[y,w]=l(0),$=o.useRef([]),C=()=>t?t.toString().split(""):[],_="number"===d;i((()=>{$.current=$.current.slice(0,a)}),[a]),i((()=>{c&&$.current[0]?.focus()}),[c]);const I=()=>{if("string"==typeof u){if(u.length===a)return u;u.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},k=e=>(_?!isNaN(Number(e)):"string"==typeof e)&&1===e.trim().length,T=e=>{const{value:n}=e.target;k(n)&&(A(n),P(y+1))},L=e=>{const n=e.nativeEvent,t=e.target.value;if(!k(t)){if(t.length===a){t.split("").some((e=>!k(e)))||(S(t.split("")),P(a-1))}null===n?.data&&"deleteContentBackward"===n?.inputType&&(e.preventDefault(),A(""),P(y-1)),e.target.value=""}},M=()=>{w(y-1)},D=e=>{const n=C();[e.code,e.key].includes("Backspace")?(e.preventDefault(),A(""),P(y-1)):"Delete"===e.code?(e.preventDefault(),A("")):"ArrowLeft"===e.code?(e.preventDefault(),P(y-1)):"ArrowRight"===e.code||e.key===n[y]?(e.preventDefault(),P(y+1)):"Spacebar"!==e.code&&"Space"!==e.code&&"ArrowUp"!==e.code&&"ArrowDown"!==e.code||e.preventDefault()},P=e=>{const n=Math.max(Math.min(a-1,e),0);$.current[n]&&($.current[n]?.focus(),$.current[n]?.select(),w(n))},A=e=>{const n=C();n[y]=e[0],S(n)},S=e=>{const n=e.join("");r(n)},j=e=>{e.preventDefault();const n=C();let t=y;const o=e.clipboardData.getData("text/plain").slice(0,a-y).split("");if(!_||!o.some((e=>isNaN(Number(e))))){for(let e=0;e<a;++e)e>=y&&o.length>0&&(n[e]=o.shift()??"",t++);P(t),S(n)}};return n("div",{className:`input_root ${b}`,onPaste:s,children:[g?"string"==typeof g?e("p",{className:`title ${m?.title}`,children:g}):g:null,Array.from({length:a},((e,n)=>n)).map((t=>n(o.Fragment,{children:[e("input",{value:C()[t]??"",placeholder:I()?.[t]??void 0,ref:e=>$.current[t]=e,onChange:T,onFocus:e=>(e=>n=>{w(n),e.target.select()})(e)(t),onBlur:M,onKeyDown:D,onPaste:j,autoComplete:"off",className:`input-box otp_input ${v}`,type:d,inputMode:_?"numeric":"text",onInput:L,...N}),t<a-1&&("function"==typeof p?p(t):e("span",{className:`otp_input_separator ${x}`,children:p}))]},t))),h||f?e("p",{className:`input__helper-text ${h?m?.error:m?.helperText}`,children:h||f}):null]})};document.head.innerHTML+="<style>.dropdown-root-container {\n  position: relative;\n  cursor: pointer;\n}\n.dropdown-trigger-container{\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n}\n.dropdown-item-container{\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n.dropdown-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.dropdown-subitem{\n  display: flex;\n  flex-direction: row;\n}\n</style>";const C=({title:t,className:a="",leftIcon:o,rightIcon:r,classNames:l,selectedId:i,onSelect:s,menuItemProps:c,menuTitleProps:d,dropdownTriggerClassName:p="",dropdownContentClassName:u="",dropdownItemClassName:m="",triggerProps:v,contentProps:x,...y})=>n(h,{...y,children:[e(f,{...v,children:n("div",{className:`dropdown-trigger-container ${l?.root} ${p}`,children:[!!o&&e("div",{className:`dropdown__left-icon ${l?.leftIcon}`,children:o}),e("span",{className:`dropdown-title ${l?.title}`,children:t}),!!r&&e("div",{className:`dropdown__right-icon ${l?.rightIcon}`,children:r})]})}),e(g,{children:n(N,{className:`dropdown-item-container ${u}`,...x,children:[d?e(b,{children:e(_,{...d})}):null,c?.map(((n,t)=>e(_,{...n,className:m,onClick:()=>s?.(n)},t)))]})})]}),_=({className:t,leftIcon:a,leftLabel:o,rightIcon:r,rightLabel:l,leftContainerClass:i,rightContainerClass:s,onClick:c,...d})=>n(v,{onClick:c,className:`dropdown-item ${t}`,...d,children:[n("div",{className:`dropdown-subitem ${i}`,children:[!!a&&e("div",{className:"dropdown__left-icon",children:a}),!!o&&e("span",{className:"dropdown-left-label",children:o})]}),n("div",{className:`dropdown-subitem ${s}`,children:[!!l&&e("span",{className:"dropdown-right-label",children:l}),!!r&&e("div",{className:"dropdown__right-icon",children:r})]})]});document.head.innerHTML+="<style>\n.avatar-container {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.avatar-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: opacity 0.3s ease;\n  display: none;\n}\n\n.avatar-image.loaded{\n  display:block;\n}\n\n.avatar-fallback.hide{\ndisplay: none;\n}\n</style>";const I=({fallback:t,src:a,className:o="",style:s,onImageLoadingStatusChange:c,alt:d,imageClassName:p="",fallbackClassName:u="",fallbackCharactersToShow:m=1})=>{const[h,f]=l("idle"),g=e=>{f(e),c?.(e)};i((()=>(g("loading"),()=>{g("idle")})),[a]);const N=r((()=>"string"==typeof t?t.substring(0,m):t),[m,t]);return n("div",{className:`avatar-container ${o}`,style:s,children:[e("img",{src:a,alt:d,className:`avatar-image ${"loaded"===h?"loaded":""} ${p}`,onLoad:()=>g("loaded"),onError:()=>g("error")}),e("div",{className:`avatar-fallback ${"loaded"===h?"hide":""} ${u}`,children:N})]})};document.head.innerHTML+="<style>\n.slider-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.slider-container.horizontal {\n    flex-direction: row;\n}\n\n.slider-container.vertical {\n    flex-direction: column;\n}\n\n.slider-input {\n    position: relative;\n}\n.slider-input.vertical {\n    transform: rotate(270deg);\n    transform-origin: center;\n}\n</style>";const k=({name:n,min:t=0,max:o=100,step:r=1,orientation:l="horizontal",dir:i="ltr",disabled:s=!1,defaultValue:c=[t],value:d,onValueChange:p=(()=>{}),onValueCommit:u=(()=>{}),className:m="",inputClassName:h=""})=>{const[f,g]=a.useState(c),N=d||f,b=a.useRef(0),v="horizontal"===l,x=e=>n=>{const t=parseFloat(n.target.value);b.current=e,w(t,e)},y=()=>{u(N)},w=(e,n)=>{const a=[...N];a[n]=T(e,t,o),d||g(a),p(a)},$=`slider-input ${v?"":"vertical"} ${h}`;return e("div",{className:`slider-container ${v?"horizontal":"vertical"} ${m}`,"aria-disabled":s,style:{direction:i},children:N?.map(((a,l)=>e("input",{type:"range",name:n,min:t,max:o,step:r,value:a,onChange:x(l),onMouseUp:y,onTouchEnd:y,disabled:s,className:$},l)))})},T=(e,n,t)=>Math.min(Math.max(e,n),t);document.head.innerHTML+="<style>.accordion {\n    border-radius: 10px;\n    max-width: 600px;\n    margin: auto;\n    overflow: hidden;\n  }\n  \n  .accordion-header {\n    cursor: pointer;\n    padding: 15px;\n    width: 100%;\n    outline: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    border: 0px;\n    border-bottom: 1px solid black;\n  }\n  \n  *:focus-visible {\n    outline: none;\n  }\n  \n  *:focus {\n    outline: none;\n  }\n  \n  .accordion-item:last-child .accordion-header {\n    border-bottom: none;\n  }\n  \n  .accordion-item.open .accordion-header {\n    border-bottom: 1px solid black;\n  }\n  \n  .accordion-content {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.5s ease;\n    text-align: left;\n  }\n  \n  .accordion-item.open .accordion-content {\n    max-height: 500px;\n    overflow: auto;\n  }\n  .accordion-content-inner{\n    padding: 15px;\n  }\n  </style>";const L=({items:t,openIcon:a,closeIcon:o,className:r="",style:i={}})=>{const[s,c]=l(null);return e("div",{className:`accordion ${r}`,style:i,children:t?.map((({openIcon:t,closeIcon:r,className:l="",content:i,contentClass:d="",header:p,headerClass:u=""},m)=>{const h=s===m,f=t||a,g=r||o;return n("div",{className:`accordion-item ${h?"open":""} ${l}`,children:[n("button",{className:`accordion-header ${u}`,"aria-expanded":h,onClick:()=>(e=>{c((n=>n===e?null:e))})(m),children:[e("span",{children:p}),e("span",{className:"accordion-icon",children:h?f:g})]}),e("div",{className:`accordion-content ${d}`,children:e("div",{className:"accordion-content-inner",children:i})})]},m)}))})};document.head.innerHTML+="<style>/* Basic styles */\n.radio-group-item {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    margin-bottom: 8px;\n}\n\n.radio-group-item:last-child {\n    margin-bottom: 0;\n}\n</style>";const M=({name:t,required:a=!1,disabled:o=!1,defaultValue:r,value:s,onChange:c,options:d,className:p=""})=>{const[u,m]=l(r);i((()=>{void 0!==s&&m(s)}),[s]);return e("div",{role:"radiogroup","aria-required":a,"data-disabled":o?"":void 0,className:`radio-group ${p}`,children:d.map((r=>n("label",{className:`radio-group-item ${r?.className??""}`,children:[e("input",{type:"radio",name:t,value:r.value,checked:u===r.value,required:a,disabled:o||r.disabled,onChange:()=>(e=>{m(e?.value),c?.(e)})(r),className:"radio-input"}),e("span",{className:"radio-custom"})," ",r.label]},r.value)))})};export{L as Accordion,I as Avatar,y as Button,C as Dropdown,w as Input,$ as OTPInput,M as RadioGroup,k as Slider,x as Tooltip};
//# sourceMappingURL=index.js.map
