(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/docz/Stepper.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),s=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),m=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/createClass.js"),d=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/inherits.js"),u=t("./node_modules/@material-ui/core/index.es.js"),b=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.active,t=e.bottomLabel,n=e.steps,o=e.padding,r=e.margin,m=e.style,l=void 0===m?{}:m,d=e.className;return s.a.createElement(u.C,{alternativeLabel:t,activeStep:a,style:Object(p.a)({padding:o,margin:r},l),className:d},n.map(function(e,a){return s.a.createElement(u.A,{key:a},s.a.createElement(u.B,null,e))}))}}]),a}(o.Component);b.defaultProps={active:0};var h=b;try{b.displayName="Stepper",b.__docgenInfo={description:"",displayName:"Stepper",props:{active:{defaultValue:{value:"0"},description:"",name:"active",required:!1,type:{name:"number"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"string[]"}},bottomLabel:{defaultValue:null,description:"",name:"bottomLabel",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ReactText"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ReactText"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/Stepper.tsx#Stepper"]={docgenInfo:b.__docgenInfo,name:"Stepper",path:"src/core/Stepper.tsx#Stepper"})}catch(e){}var _=t("./node_modules/docz/dist/index.m.js");a.default=function(e){var a=e.components,t=Object(n.a)(e,["components"]);return s.a.createElement(r.MDXTag,{name:"wrapper",components:a},s.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"stepper"}},s.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#stepper"}},s.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Stepper"),s.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"properties"}},s.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},s.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),s.a.createElement(_.e,{of:h}),s.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"demo"}},s.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#demo"}},s.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Demo"),s.a.createElement(_.d,{__position:1,__code:"<Stepper\n  active={2}\n  steps={['Name', 'Email', 'Password', 'Photo', 'Be happy!']}\n/>\n<Stepper\n  bottomLabel\n  active={2}\n  steps={['Name', 'Email', 'Password', 'Photo', 'Be happy!']}\n/>",__scope:{props:t,Stepper:h}},s.a.createElement(h,{active:2,steps:["Name","Email","Password","Photo","Be happy!"]}),s.a.createElement(h,{bottomLabel:!0,active:2,steps:["Name","Email","Password","Photo","Be happy!"]})))}}}]);