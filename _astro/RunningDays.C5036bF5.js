import{j as s}from"./jsx-runtime.CPK7-dcL.js";import{r}from"./index.BufDd4G-.js";import{f as a}from"./config.tnfO5ZdO.js";import{g as n}from"./date.CeBf7uU2.js";import"./_commonjsHelpers.Cpj98o6Y.js";function c(){const[t,o]=r.useState(0);return r.useLayoutEffect(()=>{const e=n(new Date(a.startTime));o(e)},[]),t<0?s.jsx("span",{children:"Ops! 网站还没有发布"}):s.jsxs("span",{children:["已经运行了 ",t," 天"]})}export{c as RunningDays};
