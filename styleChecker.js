import{h as a,r as We,am as se,p as He,aq as ue,t as Le,e as Et,n as S,z as It,j as O,l as ot,ag as jt,k as m,B as H,P as Y,C as bt,a0 as Nt,b$ as de,$ as Me,v as _,x as Bt,y as At,aG as pe,ax as vt,al as Ne,w as fe,ac as me,a1 as _t,aI as Ft,f as Ot,a3 as _e,bZ as Fe,a8 as Ge,an as Ue,ay as Ve,aB as ge}from"./permission.js";const qe=(t,e)=>{const o=a({},t);return Object.keys(e).forEach(r=>{const n=o[r];if(n)n.type||n.default?n.default=e[r]:n.def?n.def(e[r]):o[r]={type:n,default:e[r]};else throw new Error(`not have ${r} prop`)}),o},Ke=qe;let be=t=>setTimeout(t,16),ve=t=>clearTimeout(t);typeof window<"u"&&"requestAnimationFrame"in window&&(be=t=>window.requestAnimationFrame(t),ve=t=>window.cancelAnimationFrame(t));let Gt=0;const Pt=new Map;function ye(t){Pt.delete(t)}function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Gt+=1;const o=Gt;function r(n){if(n===0)ye(o),t();else{const c=be(()=>{r(n-1)});Pt.set(o,c)}}return r(e),o}yt.cancel=t=>{const e=Pt.get(t);return ye(e),ve(e)};let Ut={};function Xe(t,e){}function Je(t,e,o){!e&&!Ut[o]&&(t(!1,o),Ut[o]=!0)}function Ze(t,e){Je(Xe,t,e)}const $e=(t,e,o)=>{Ze(t,`[ant-design-vue: ${e}] ${o}`)},Qe=t=>{if(!t)return!1;if(t.offsetParent)return!0;if(t.getBBox){const e=t.getBBox();if(e.width||e.height)return!0}if(t.getBoundingClientRect){const e=t.getBoundingClientRect();if(e.width||e.height)return!0}return!1};var Ye=typeof global=="object"&&global&&global.Object===Object&&global;const he=Ye;var ke=typeof self=="object"&&self&&self.Object===Object&&self,to=he||ke||Function("return this")();const P=to;var eo=P.Symbol;const k=eo;var Se=Object.prototype,oo=Se.hasOwnProperty,ro=Se.toString,N=k?k.toStringTag:void 0;function no(t){var e=oo.call(t,N),o=t[N];try{t[N]=void 0;var r=!0}catch{}var n=ro.call(t);return r&&(e?t[N]=o:delete t[N]),n}var ao=Object.prototype,io=ao.toString;function lo(t){return io.call(t)}var co="[object Null]",so="[object Undefined]",Vt=k?k.toStringTag:void 0;function G(t){return t==null?t===void 0?so:co:Vt&&Vt in Object(t)?no(t):lo(t)}function Ce(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var uo="[object AsyncFunction]",po="[object Function]",fo="[object GeneratorFunction]",mo="[object Proxy]";function Te(t){if(!Ce(t))return!1;var e=G(t);return e==po||e==fo||e==uo||e==mo}var go=P["__core-js_shared__"];const pt=go;var qt=function(){var t=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function bo(t){return!!qt&&qt in t}var vo=Function.prototype,yo=vo.toString;function W(t){if(t!=null){try{return yo.call(t)}catch{}try{return t+""}catch{}}return""}var $o=/[\\^$.*+?()[\]{}|]/g,ho=/^\[object .+?Constructor\]$/,So=Function.prototype,Co=Object.prototype,To=So.toString,xo=Co.hasOwnProperty,wo=RegExp("^"+To.call(xo).replace($o,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Eo(t){if(!Ce(t)||bo(t))return!1;var e=Te(t)?wo:ho;return e.test(W(t))}function Io(t,e){return t==null?void 0:t[e]}function U(t,e){var o=Io(t,e);return Eo(o)?o:void 0}var jo=U(P,"Map");const $t=jo;var Bo=Array.isArray;const Ao=Bo;function zt(t){return t!=null&&typeof t=="object"}var Oo="[object Arguments]";function Kt(t){return zt(t)&&G(t)==Oo}var xe=Object.prototype,Po=xe.hasOwnProperty,zo=xe.propertyIsEnumerable,Ro=Kt(function(){return arguments}())?Kt:function(t){return zt(t)&&Po.call(t,"callee")&&!zo.call(t,"callee")};const Do=Ro;function Wo(){return!1}var we=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Xt=we&&typeof module=="object"&&module&&!module.nodeType&&module,Ho=Xt&&Xt.exports===we,Jt=Ho?P.Buffer:void 0,Lo=Jt?Jt.isBuffer:void 0,Mo=Lo||Wo;const No=Mo;var _o=9007199254740991;function Ee(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=_o}var Fo="[object Arguments]",Go="[object Array]",Uo="[object Boolean]",Vo="[object Date]",qo="[object Error]",Ko="[object Function]",Xo="[object Map]",Jo="[object Number]",Zo="[object Object]",Qo="[object RegExp]",Yo="[object Set]",ko="[object String]",tr="[object WeakMap]",er="[object ArrayBuffer]",or="[object DataView]",rr="[object Float32Array]",nr="[object Float64Array]",ar="[object Int8Array]",ir="[object Int16Array]",lr="[object Int32Array]",cr="[object Uint8Array]",sr="[object Uint8ClampedArray]",ur="[object Uint16Array]",dr="[object Uint32Array]",d={};d[rr]=d[nr]=d[ar]=d[ir]=d[lr]=d[cr]=d[sr]=d[ur]=d[dr]=!0;d[Fo]=d[Go]=d[er]=d[Uo]=d[or]=d[Vo]=d[qo]=d[Ko]=d[Xo]=d[Jo]=d[Zo]=d[Qo]=d[Yo]=d[ko]=d[tr]=!1;function pr(t){return zt(t)&&Ee(t.length)&&!!d[G(t)]}function fr(t){return function(e){return t(e)}}var Ie=typeof exports=="object"&&exports&&!exports.nodeType&&exports,F=Ie&&typeof module=="object"&&module&&!module.nodeType&&module,mr=F&&F.exports===Ie,ft=mr&&he.process,gr=function(){try{var t=F&&F.require&&F.require("util").types;return t||ft&&ft.binding&&ft.binding("util")}catch{}}();const Zt=gr;var Qt=Zt&&Zt.isTypedArray,br=Qt?fr(Qt):pr;const vr=br;var yr=Object.prototype;function je(t){var e=t&&t.constructor,o=typeof e=="function"&&e.prototype||yr;return t===o}function $r(t,e){return function(o){return t(e(o))}}var hr=$r(Object.keys,Object);const Sr=hr;var Cr=Object.prototype,Tr=Cr.hasOwnProperty;function xr(t){if(!je(t))return Sr(t);var e=[];for(var o in Object(t))Tr.call(t,o)&&o!="constructor"&&e.push(o);return e}function wr(t){return t!=null&&Ee(t.length)&&!Te(t)}var Er=U(P,"DataView");const ht=Er;var Ir=U(P,"Promise");const St=Ir;var jr=U(P,"Set");const Ct=jr;var Br=U(P,"WeakMap");const Tt=Br;var Yt="[object Map]",Ar="[object Object]",kt="[object Promise]",te="[object Set]",ee="[object WeakMap]",oe="[object DataView]",Or=W(ht),Pr=W($t),zr=W(St),Rr=W(Ct),Dr=W(Tt),D=G;(ht&&D(new ht(new ArrayBuffer(1)))!=oe||$t&&D(new $t)!=Yt||St&&D(St.resolve())!=kt||Ct&&D(new Ct)!=te||Tt&&D(new Tt)!=ee)&&(D=function(t){var e=G(t),o=e==Ar?t.constructor:void 0,r=o?W(o):"";if(r)switch(r){case Or:return oe;case Pr:return Yt;case zr:return kt;case Rr:return te;case Dr:return ee}return e});const Wr=D;function R(t){const e=typeof t=="function"?t():t,o=We(e);function r(n){o.value=n}return[o,r]}function Be(t){const e=Symbol("contextKey");return{useProvide:(n,c)=>{const l=se({});return He(e,l),ue(()=>{a(l,n,c||{})}),l},useInject:()=>Le(e,t)||{}}}const Hr=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},Lr=Hr,Mr=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-space-item`]:{"&:empty":{display:"none"}}}}},Nr=Et("Space",t=>[Mr(t),Lr(t)]);var _r="[object Map]",Fr="[object Set]",Gr=Object.prototype,Ur=Gr.hasOwnProperty;function Ae(t){if(t==null)return!0;if(wr(t)&&(Ao(t)||typeof t=="string"||typeof t.splice=="function"||No(t)||vr(t)||Do(t)))return!t.length;var e=Wr(t);if(e==_r||e==Fr)return!t.size;if(je(t))return!xr(t).length;for(var o in t)if(Ur.call(t,o))return!1;return!0}const Vr=()=>({compactSize:String,compactDirection:Y.oneOf(bt("horizontal","vertical")).def("horizontal"),isFirstItem:Nt(),isLastItem:Nt()}),rt=Be(null),qr=(t,e)=>{const o=rt.useInject(),r=S(()=>{if(!o||Ae(o))return"";const{compactDirection:n,isFirstItem:c,isLastItem:l}=o,u=n==="vertical"?"-vertical-":"-";return It({[`${t.value}-compact${u}item`]:!0,[`${t.value}-compact${u}first-item`]:c,[`${t.value}-compact${u}last-item`]:l,[`${t.value}-compact${u}item-rtl`]:e.value==="rtl"})});return{compactSize:S(()=>o==null?void 0:o.compactSize),compactDirection:S(()=>o==null?void 0:o.compactDirection),compactItemClassnames:r}},zn=O({name:"NoCompactStyle",setup(t,e){let{slots:o}=e;return rt.useProvide(null),()=>{var r;return(r=o.default)===null||r===void 0?void 0:r.call(o)}}}),Kr=()=>({prefixCls:String,size:{type:String},direction:Y.oneOf(bt("horizontal","vertical")).def("horizontal"),align:Y.oneOf(bt("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),Xr=O({name:"CompactItem",props:Vr(),setup(t,e){let{slots:o}=e;return rt.useProvide(t),()=>{var r;return(r=o.default)===null||r===void 0?void 0:r.call(o)}}});O({name:"ASpaceCompact",inheritAttrs:!1,props:Kr(),setup(t,e){let{attrs:o,slots:r}=e;const{prefixCls:n,direction:c}=ot("space-compact",t),l=rt.useInject(),[u,f]=Nr(n),C=S(()=>It(n.value,f.value,{[`${n.value}-rtl`]:c.value==="rtl",[`${n.value}-block`]:t.block,[`${n.value}-vertical`]:t.direction==="vertical"}));return()=>{var s;const g=jt(((s=r.default)===null||s===void 0?void 0:s.call(r))||[]);return g.length===0?null:u(m("div",H(H({},o),{},{class:[C.value,o.class]}),[g.map((y,z)=>{var w;const E=y&&y.key||`${n.value}-item-${z}`,T=!l||Ae(l);return m(Xr,{key:E,compactSize:(w=t.size)!==null&&w!==void 0?w:"middle",compactDirection:t.direction,isFirstItem:z===0&&(T||(l==null?void 0:l.isFirstItem)),isLastItem:z===g.length-1&&(T||(l==null?void 0:l.isLastItem))},{default:()=>[y]})})]))}}});function Jr(t,e,o){const{focusElCls:r,focus:n,borderElCls:c}=o,l=c?"> *":"",u=["hover",n?"focus":null,"active"].filter(Boolean).map(f=>`&:${f} ${l}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":a(a({[u]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${l}`]:{zIndex:0}})}}function Zr(t,e,o){const{borderElCls:r}=o,n=r?`> ${r}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${n}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${n}, &${t}-sm ${n}, &${t}-lg ${n}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${n}, &${t}-sm ${n}, &${t}-lg ${n}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function Qr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:o}=t,r=`${o}-compact`;return{[r]:a(a({},Jr(t,r,e)),Zr(o,r,e))}}const Yr=t=>{const{componentCls:e,colorPrimary:o}=t;return{[e]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${o})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${t.motionEaseOutCirc}`,`opacity 2s ${t.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},kr=Et("Wave",t=>[Yr(t)]);function tn(t){const e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}function mt(t){return t&&t!=="#fff"&&t!=="#ffffff"&&t!=="rgb(255, 255, 255)"&&t!=="rgba(255, 255, 255, 1)"&&tn(t)&&!/rgba\((?:\d*, ){3}0\)/.test(t)&&t!=="transparent"}function en(t){const{borderTopColor:e,borderColor:o,backgroundColor:r}=getComputedStyle(t);return mt(e)?e:mt(o)?o:mt(r)?r:null}function gt(t){return Number.isNaN(t)?0:t}const on=O({props:{target:Me(),className:String},setup(t){const e=_(null),[o,r]=R(null),[n,c]=R([]),[l,u]=R(0),[f,C]=R(0),[s,g]=R(0),[y,z]=R(0),[w,E]=R(!1);function T(){const{target:p}=t,b=getComputedStyle(p);r(en(p));const M=b.position==="static",{borderLeftWidth:at,borderTopWidth:it}=b;u(M?p.offsetLeft:gt(-parseFloat(at))),C(M?p.offsetTop:gt(-parseFloat(it))),g(p.offsetWidth),z(p.offsetHeight);const{borderTopLeftRadius:lt,borderTopRightRadius:Wt,borderBottomLeftRadius:Ht,borderBottomRightRadius:i}=b;c([lt,Wt,i,Ht].map(v=>gt(parseFloat(v))))}let I,h,A;const L=()=>{clearTimeout(A),yt.cancel(h),I==null||I.disconnect()},V=()=>{var p;const b=(p=e.value)===null||p===void 0?void 0:p.parentElement;b&&(de(null,b),b.parentElement&&b.parentElement.removeChild(b))};Bt(()=>{L(),A=setTimeout(()=>{V()},5e3);const{target:p}=t;p&&(h=yt(()=>{T(),E(!0)}),typeof ResizeObserver<"u"&&(I=new ResizeObserver(T),I.observe(p)))}),At(()=>{L()});const nt=p=>{p.propertyName==="opacity"&&V()};return()=>{if(!w.value)return null;const p={left:`${l.value}px`,top:`${f.value}px`,width:`${s.value}px`,height:`${y.value}px`,borderRadius:n.value.map(b=>`${b}px`).join(" ")};return o&&(p["--wave-color"]=o.value),m(pe,{appear:!0,name:"wave-motion",appearFromClass:"wave-motion-appear",appearActiveClass:"wave-motion-appear",appearToClass:"wave-motion-appear wave-motion-appear-active"},{default:()=>[m("div",{ref:e,class:t.className,style:p,onTransitionend:nt},null)]})}}});function rn(t,e){const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",t==null||t.insertBefore(o,t==null?void 0:t.firstChild),de(m(on,{target:t,className:e},null),o)}function nn(t,e,o){function r(){var n;const c=vt(t);!((n=o==null?void 0:o.value)===null||n===void 0)&&n.disabled||!c||rn(c,e.value)}return r}const an=O({compatConfig:{MODE:3},name:"Wave",props:{disabled:Boolean},setup(t,e){let{slots:o}=e;const r=Ne(),{prefixCls:n,wave:c}=ot("wave",t),[,l]=kr(n),u=nn(r,S(()=>It(n.value,l.value)),c);let f;const C=()=>{vt(r).removeEventListener("click",f,!0)};return Bt(()=>{fe(()=>t.disabled,()=>{C(),me(()=>{const s=vt(r);s==null||s.removeEventListener("click",f,!0),!(!s||s.nodeType!==1||t.disabled)&&(f=g=>{g.target.tagName==="INPUT"||!Qe(g.target)||!s.getAttribute||s.getAttribute("disabled")||s.disabled||s.className.includes("disabled")||s.className.includes("-leave")||u()},s.addEventListener("click",f,!0))})},{immediate:!0,flush:"post"})}),At(()=>{C()}),()=>{var s;return(s=o.default)===null||s===void 0?void 0:s.call(o)[0]}}});function Rn(t){return t==="danger"?{danger:!0}:{type:t}}const ln=()=>({prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:()=>!1},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:Y.any,href:String,target:String,title:String,onClick:_t(),onMousedown:_t()}),cn=ln,re=t=>{t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},ne=t=>{me(()=>{t&&(t.style.width=`${t.scrollWidth}px`,t.style.opacity="1",t.style.transform="scale(1)")})},ae=t=>{t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)},sn=O({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup(t){return()=>{const{existIcon:e,prefixCls:o,loading:r}=t;if(e)return m("span",{class:`${o}-loading-icon`},[m(Ft,null,null)]);const n=!!r;return m(pe,{name:`${o}-loading-icon-motion`,onBeforeEnter:re,onEnter:ne,onAfterEnter:ae,onBeforeLeave:ne,onLeave:c=>{setTimeout(()=>{re(c)})},onAfterLeave:ae},{default:()=>[n?m("span",{class:`${o}-loading-icon`},[m(Ft,null,null)]):null]})}}}),ie=(t,e)=>({[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${t}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),un=t=>{const{componentCls:e,fontSize:o,lineWidth:r,colorPrimaryHover:n,colorErrorHover:c}=t;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:-r,[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:o}},ie(`${e}-primary`,n),ie(`${e}-danger`,c)]}},dn=un;function pn(t,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:-t.lineWidth},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function fn(t,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${t}-sm, &${t}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${t}-sm, &${t}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function mn(t){const e=`${t.componentCls}-compact-vertical`;return{[e]:a(a({},pn(t,e)),fn(t.componentCls,e))}}const gn=t=>{const{componentCls:e,iconCls:o}=t;return{[e]:{outline:"none",position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",backgroundColor:"transparent",border:`${t.lineWidth}px ${t.lineType} transparent`,cursor:"pointer",transition:`all ${t.motionDurationMid} ${t.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",lineHeight:t.lineHeight,color:t.colorText,"> span":{display:"inline-block"},[`> ${o} + span, > span + ${o}`]:{marginInlineStart:t.marginXS},"> a":{color:"currentColor"},"&:not(:disabled)":a({},_e(t)),[`&-icon-only${e}-compact-item`]:{flex:"none"},[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-t.lineWidth,insetInlineStart:-t.lineWidth,display:"inline-block",width:t.lineWidth,height:`calc(100% + ${t.lineWidth*2}px)`,backgroundColor:t.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-t.lineWidth,insetInlineStart:-t.lineWidth,display:"inline-block",width:`calc(100% + ${t.lineWidth*2}px)`,height:t.lineWidth,backgroundColor:t.colorPrimaryHover,content:'""'}}}}}}},B=(t,e)=>({"&:not(:disabled)":{"&:hover":t,"&:active":e}}),bn=t=>({minWidth:t.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),vn=t=>({borderRadius:t.controlHeight,paddingInlineStart:t.controlHeight/2,paddingInlineEnd:t.controlHeight/2}),xt=t=>({cursor:"not-allowed",borderColor:t.colorBorder,color:t.colorTextDisabled,backgroundColor:t.colorBgContainerDisabled,boxShadow:"none"}),tt=(t,e,o,r,n,c,l)=>({[`&${t}-background-ghost`]:a(a({color:e||void 0,backgroundColor:"transparent",borderColor:o||void 0,boxShadow:"none"},B(a({backgroundColor:"transparent"},c),a({backgroundColor:"transparent"},l))),{"&:disabled":{cursor:"not-allowed",color:r||void 0,borderColor:n||void 0}})}),Rt=t=>({"&:disabled":a({},xt(t))}),Oe=t=>a({},Rt(t)),et=t=>({"&:disabled":{cursor:"not-allowed",color:t.colorTextDisabled}}),Pe=t=>a(a(a(a(a({},Oe(t)),{backgroundColor:t.colorBgContainer,borderColor:t.colorBorder,boxShadow:`0 ${t.controlOutlineWidth}px 0 ${t.controlTmpOutline}`}),B({color:t.colorPrimaryHover,borderColor:t.colorPrimaryHover},{color:t.colorPrimaryActive,borderColor:t.colorPrimaryActive})),tt(t.componentCls,t.colorBgContainer,t.colorBgContainer,t.colorTextDisabled,t.colorBorder)),{[`&${t.componentCls}-dangerous`]:a(a(a({color:t.colorError,borderColor:t.colorError},B({color:t.colorErrorHover,borderColor:t.colorErrorBorderHover},{color:t.colorErrorActive,borderColor:t.colorErrorActive})),tt(t.componentCls,t.colorError,t.colorError,t.colorTextDisabled,t.colorBorder)),Rt(t))}),yn=t=>a(a(a(a(a({},Oe(t)),{color:t.colorTextLightSolid,backgroundColor:t.colorPrimary,boxShadow:`0 ${t.controlOutlineWidth}px 0 ${t.controlOutline}`}),B({color:t.colorTextLightSolid,backgroundColor:t.colorPrimaryHover},{color:t.colorTextLightSolid,backgroundColor:t.colorPrimaryActive})),tt(t.componentCls,t.colorPrimary,t.colorPrimary,t.colorTextDisabled,t.colorBorder,{color:t.colorPrimaryHover,borderColor:t.colorPrimaryHover},{color:t.colorPrimaryActive,borderColor:t.colorPrimaryActive})),{[`&${t.componentCls}-dangerous`]:a(a(a({backgroundColor:t.colorError,boxShadow:`0 ${t.controlOutlineWidth}px 0 ${t.colorErrorOutline}`},B({backgroundColor:t.colorErrorHover},{backgroundColor:t.colorErrorActive})),tt(t.componentCls,t.colorError,t.colorError,t.colorTextDisabled,t.colorBorder,{color:t.colorErrorHover,borderColor:t.colorErrorHover},{color:t.colorErrorActive,borderColor:t.colorErrorActive})),Rt(t))}),$n=t=>a(a({},Pe(t)),{borderStyle:"dashed"}),hn=t=>a(a(a({color:t.colorLink},B({color:t.colorLinkHover},{color:t.colorLinkActive})),et(t)),{[`&${t.componentCls}-dangerous`]:a(a({color:t.colorError},B({color:t.colorErrorHover},{color:t.colorErrorActive})),et(t))}),Sn=t=>a(a(a({},B({color:t.colorText,backgroundColor:t.colorBgTextHover},{color:t.colorText,backgroundColor:t.colorBgTextActive})),et(t)),{[`&${t.componentCls}-dangerous`]:a(a({color:t.colorError},et(t)),B({color:t.colorErrorHover,backgroundColor:t.colorErrorBg},{color:t.colorErrorHover,backgroundColor:t.colorErrorBg}))}),Cn=t=>a(a({},xt(t)),{[`&${t.componentCls}:hover`]:a({},xt(t))}),Tn=t=>{const{componentCls:e}=t;return{[`${e}-default`]:Pe(t),[`${e}-primary`]:yn(t),[`${e}-dashed`]:$n(t),[`${e}-link`]:hn(t),[`${e}-text`]:Sn(t),[`${e}-disabled`]:Cn(t)}},Dt=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:o,iconCls:r,controlHeight:n,fontSize:c,lineHeight:l,lineWidth:u,borderRadius:f,buttonPaddingHorizontal:C}=t,s=Math.max(0,(n-c*l)/2-u),g=C-u,y=`${o}-icon-only`;return[{[`${o}${e}`]:{fontSize:c,height:n,padding:`${s}px ${g}px`,borderRadius:f,[`&${y}`]:{width:n,paddingInlineStart:0,paddingInlineEnd:0,[`&${o}-round`]:{width:"auto"},"> span":{transform:"scale(1.143)"}},[`&${o}-loading`]:{opacity:t.opacityLoading,cursor:"default"},[`${o}-loading-icon`]:{transition:`width ${t.motionDurationSlow} ${t.motionEaseInOut}, opacity ${t.motionDurationSlow} ${t.motionEaseInOut}`},[`&:not(${y}) ${o}-loading-icon > ${r}`]:{marginInlineEnd:t.marginXS}}},{[`${o}${o}-circle${e}`]:bn(t)},{[`${o}${o}-round${e}`]:vn(t)}]},xn=t=>Dt(t),wn=t=>{const e=Ot(t,{controlHeight:t.controlHeightSM,padding:t.paddingXS,buttonPaddingHorizontal:8,borderRadius:t.borderRadiusSM});return Dt(e,`${t.componentCls}-sm`)},En=t=>{const e=Ot(t,{controlHeight:t.controlHeightLG,fontSize:t.fontSizeLG,borderRadius:t.borderRadiusLG});return Dt(e,`${t.componentCls}-lg`)},In=t=>{const{componentCls:e}=t;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},jn=Et("Button",t=>{const{controlTmpOutline:e,paddingContentHorizontal:o}=t,r=Ot(t,{colorOutlineDefault:e,buttonPaddingHorizontal:o});return[gn(r),wn(r),xn(r),En(r),In(r),Tn(r),dn(r),Qr(t,{focus:!1}),mn(t)]}),Bn=()=>({prefixCls:String,size:{type:String}}),ze=Be(),wt=O({compatConfig:{MODE:3},name:"AButtonGroup",props:Bn(),setup(t,e){let{slots:o}=e;const{prefixCls:r,direction:n}=ot("btn-group",t),[,,c]=Fe();ze.useProvide(se({size:S(()=>t.size)}));const l=S(()=>{const{size:u}=t;let f="";switch(u){case"large":f="lg";break;case"small":f="sm";break;case"middle":case void 0:break;default:$e(!u,"Button.Group","Invalid prop `size`.")}return{[`${r.value}`]:!0,[`${r.value}-${f}`]:f,[`${r.value}-rtl`]:n.value==="rtl",[c.value]:!0}});return()=>{var u;return m("div",{class:l.value},[jt((u=o.default)===null||u===void 0?void 0:u.call(o))])}}}),le=/^[\u4e00-\u9fa5]{2}$/,ce=le.test.bind(le);function J(t){return t==="text"||t==="link"}const Q=O({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:Ke(cn(),{type:"default"}),slots:Object,setup(t,e){let{slots:o,attrs:r,emit:n,expose:c}=e;const{prefixCls:l,autoInsertSpaceInButton:u,direction:f,size:C}=ot("btn",t),[s,g]=jn(l),y=ze.useInject(),z=Ge(),w=S(()=>{var i;return(i=t.disabled)!==null&&i!==void 0?i:z.value}),E=_(null),T=_(void 0);let I=!1;const h=_(!1),A=_(!1),L=S(()=>u.value!==!1),{compactSize:V,compactItemClassnames:nt}=qr(l,f),p=S(()=>typeof t.loading=="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading);fe(p,i=>{clearTimeout(T.value),typeof p.value=="number"?T.value=setTimeout(()=>{h.value=i},p.value):h.value=i},{immediate:!0});const b=S(()=>{const{type:i,shape:v="default",ghost:j,block:x,danger:ct}=t,$=l.value,q={large:"lg",small:"sm",middle:void 0},K=V.value||(y==null?void 0:y.size)||C.value,X=K&&q[K]||"";return[nt.value,{[g.value]:!0,[`${$}`]:!0,[`${$}-${v}`]:v!=="default"&&v,[`${$}-${i}`]:i,[`${$}-${X}`]:X,[`${$}-loading`]:h.value,[`${$}-background-ghost`]:j&&!J(i),[`${$}-two-chinese-chars`]:A.value&&L.value,[`${$}-block`]:x,[`${$}-dangerous`]:!!ct,[`${$}-rtl`]:f.value==="rtl"}]}),M=()=>{const i=E.value;if(!i||u.value===!1)return;const v=i.textContent;I&&ce(v)?A.value||(A.value=!0):A.value&&(A.value=!1)},at=i=>{if(h.value||w.value){i.preventDefault();return}n("click",i)},it=i=>{n("mousedown",i)},lt=(i,v)=>{const j=v?" ":"";if(i.type===Ve){let x=i.children.trim();return ce(x)&&(x=x.split("").join(j)),m("span",null,[x])}return i};return ue(()=>{$e(!(t.ghost&&J(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),Bt(M),Ue(M),At(()=>{T.value&&clearTimeout(T.value)}),c({focus:()=>{var i;(i=E.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=E.value)===null||i===void 0||i.blur()}}),()=>{var i,v;const{icon:j=(i=o.icon)===null||i===void 0?void 0:i.call(o)}=t,x=jt((v=o.default)===null||v===void 0?void 0:v.call(o));I=x.length===1&&!j&&!J(t.type);const{type:ct,htmlType:$,href:q,title:K,target:X}=t,De=h.value?"loading":j,st=a(a({},r),{title:K,disabled:w.value,class:[b.value,r.class,{[`${l.value}-icon-only`]:x.length===0&&!!De}],onClick:at,onMousedown:it});w.value||delete st.disabled;const Lt=j&&!h.value?j:m(sn,{existIcon:!!j,prefixCls:l.value,loading:!!h.value},null),Mt=x.map(dt=>lt(dt,I&&L.value));if(q!==void 0)return s(m("a",H(H({},st),{},{href:q,target:X,ref:E}),[Lt,Mt]));let ut=m("button",H(H({},st),{},{ref:E,type:$}),[Lt,Mt]);if(!J(ct)){const dt=function(){return ut}();ut=m(an,{ref:"wave",disabled:!!h.value},{default:()=>[dt]})}return s(ut)}}});Q.Group=wt;Q.install=function(t){return t.component(Q.name,Q),t.component(wt.name,wt),t};const An=()=>ge()&&window.document.documentElement,Re=t=>{if(ge()&&window.document.documentElement){const e=Array.isArray(t)?t:[t],{documentElement:o}=window.document;return e.some(r=>r in o.style)}return!1},On=(t,e)=>{if(!Re(t))return!1;const o=document.createElement("div"),r=o.style[t];return o.style[t]=e,o.style[t]!==r};function Dn(t,e){return!Array.isArray(t)&&e!==void 0?On(t,e):Re(t)}let Z;const Wn=()=>{if(!An())return!1;if(Z!==void 0)return Z;const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t),Z=t.scrollHeight===1,document.body.removeChild(t),Z};export{Wr as A,Q as B,An as C,Rn as D,Be as E,$t as M,zn as N,k as S,Ce as a,cn as b,Xe as c,$e as d,Dn as e,Qe as f,Ze as g,Qr as h,Ke as i,qr as j,Wn as k,zt as l,G as m,Ao as n,U as o,Do as p,$r as q,P as r,Ee as s,Ct as t,R as u,No as v,yt as w,vr as x,wr as y,xr as z};
