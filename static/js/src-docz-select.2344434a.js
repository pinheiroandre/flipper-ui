(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./src/docz/Select.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/@material-ui/core/index.es.js");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=function(e){var t=e.children,n=e.style,r=void 0===n?{}:n,o=e.margin,s=e.padding,m=e.variant,u=void 0===m?"outlined":m,p=c(e,["children","style","margin","padding","variant"]);return a.a.createElement(i.C,Object.assign({variant:u,style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({margin:o,padding:s},r)},p),t)},m=n("./src/core/ListItem.tsx"),u=n("./node_modules/docz/dist/index.m.js");function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components,n=p(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"select"}},"Select"),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),a.a.createElement(u.PropsTable,{of:s}),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"demo"}},"Demo"),a.a.createElement(u.Playground,{__position:1,__codesandbox:"undefined",__code:"<Select value={3}>\n  <ListItem value={0}>Option 0</ListItem>\n  <ListItem value={1}>Option 1</ListItem>\n  <ListItem value={2}>Option 2</ListItem>\n  <ListItem value={3}>Option 3</ListItem>\n  <ListItem value={4}>Option 4</ListItem>\n  <ListItem value={5}>Option 5</ListItem>\n  <ListItem value={6}>Option 6</ListItem>\n  <ListItem value={7}>Option 7</ListItem>\n</Select>",__scope:{props:n,Select:s,ListItem:m.a}},a.a.createElement(s,{value:3},a.a.createElement(m.a,{value:0},"Option 0"),a.a.createElement(m.a,{value:1},"Option 1"),a.a.createElement(m.a,{value:2},"Option 2"),a.a.createElement(m.a,{value:3},"Option 3"),a.a.createElement(m.a,{value:4},"Option 4"),a.a.createElement(m.a,{value:5},"Option 5"),a.a.createElement(m.a,{value:6},"Option 6"),a.a.createElement(m.a,{value:7},"Option 7"))))}}}]);