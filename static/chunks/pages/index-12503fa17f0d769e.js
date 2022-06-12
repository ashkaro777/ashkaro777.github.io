(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7930)}])},7930:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return wn}});var i,r=t(5893),o=t(7294),a="hero-section",s="book-section",c="travel-section",u="photography-section",l=t(7379);!function(n){n[n.fullhd=1408]="fullhd",n[n.widescreen=1200]="widescreen",n[n.desktop=1023]="desktop",n[n.smallMonitor=992]="smallMonitor",n[n.tablet=767]="tablet",n[n.mobile=380]="mobile",n[n.smallMobile=324]="smallMobile"}(i||(i={}));var d=function(n){return"@media (max-width: ".concat(n,"px)")},f=function(n){return"@media (min-width: ".concat(n,"px)")},m={custom:d,fullhd:d(i.fullhd),widescreen:d(i.widescreen),desktop:d(i.desktop),smallMonitor:d(i.smallMonitor),tablet:d(i.tablet),mobile:d(i.mobile),smallMobile:d(i.smallMobile)};f(i.fullhd),f(i.widescreen),f(i.desktop),f(i.smallMonitor),f(i.tablet),f(i.mobile),f(i.smallMobile);function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(){var n=p([""]);return h=function(){return n},n}function v(){var n=p(['\n  position: relative;\n  min-height: 100vh;\n\n  background: url("/assets/images/ashish_jahangir.png");\n  background-position: 10vw 2vh;\n  background-size: 80vw;\n  background-repeat: no-repeat;\n  background-color: #000;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background: rgba(52, 186, 235, 0.3);\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background: rgba(0, 0, 0, 0.58);\n  }\n']);return v=function(){return n},n}function b(){var n=p(["\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: calc(50vh - 7.5rem);\n\n  text-transform: uppercase;\n  font-weight: 40;\n  font-size: 64px;\n  letter-spacing: 0.31em;\n  color: #ffffff;\n  margin: 0;\n\n  "," {\n    top: calc(50vh - 4rem);\n    font-size: 24px;\n  }\n"]);return b=function(){return n},n}var x=l.ZP.div(h()),g=l.ZP.div(v()),j=l.ZP.h1(b(),m.tablet),w=function(){return(0,r.jsx)(g,{id:a,children:(0,r.jsx)(j,{children:"Ashish Jahangid"})})},k=t(3279),z=t.n(k),O=t(5675),P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"48px",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"--size";return" \n    ".concat(e,": ").concat(n,";\n    width: var(").concat(e,") !important;\n    height: var(").concat(e,") !important;\n    min-width: var(").concat(e,") !important;\n    min-height: var(").concat(e,") !important;\n  ")};function N(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function y(){var n=N(["\n  ","\n  border-radius: inherit;\n"]);return y=function(){return n},n}function Z(){var n=N(["\n  --active-size: 80px;\n  ","\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: ",";\n  border-radius: 777rem;\n  cursor: pointer;\n  border: 2px solid #fff;\n\n  "," {\n    --active-size: 48px;\n    --size: 10px;\n  }\n\n  & > * {\n    transition: filter 240ms ease-in-out;\n  }\n\n  ","\n"]);return Z=function(){return n},n}var q=(0,l.ZP)(O.default)(y(),P("26px","--icon-size")),C=l.ZP.a(Z(),P("18px"),(function(n){return n.$color||"#fff"}),m.tablet,(function(n){return n.$isActive?"\n            --size: var(--active-size) !important; \n            transition: all 240ms ease-in-out 120ms;\n\n            & > * {\n                filter: opacity(1);\n                transition: filter 0ms;\n            }\n        ":"\n            transition: all 400ms ease-in-out;\n\n            & > * {\n                filter: opacity(0);\n                transition: filter 240ms ease-in-out;\n            }\n        "})),_=function(n){var e=n.className,t=n.label,i=n.onClick,a=n.icon,s=n.id,c=n.isActive,u=n.color,l=(0,o.useCallback)((function(){i&&i(s)}),[i,s]);return(0,r.jsx)(C,{$isActive:c,$color:u,className:e,onClick:l,href:"#".concat(s),children:(0,r.jsx)(q,{src:a,alt:t})})};function E(){var n,e,t=(n=["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n\n  width: 100px;\n  padding: 8px;\n  border-radius: 777rem;\n\n  "," {\n    gap: 12px;\n    width: 68px;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return E=function(){return t},t}var M=l.ZP.nav(E(),m.tablet),$=function(n){var e=n.className,t=n.items,i=void 0===t?[]:t,a=n.onChange,s=n.activeItemId,c=(0,o.useState)(),u=c[0],l=c[1],d=a?s:u,f=(0,o.useCallback)((function(n){l(n),a&&a(n)}),[a]);return i.length?(0,r.jsx)(M,{className:e,children:i.map((function(n,e){var t=n.id,i=n.icon,o=n.label,a=n.color;return(0,r.jsx)(_,{id:t,icon:i,label:o,isActive:d===t,onClick:f,color:a},"".concat(t,"_").concat(e))}))}):null},I={src:"https://cdn.statically.io/gh/ashkaro777/ashkaro777.github.io/gh-pages//_next/static/media/wheelchair.4fd045b4.svg",height:32,width:32};function T(){var n,e,t=(n=["\n  position: fixed;\n  bottom: 3rem;\n  right: 3rem;\n  z-index: 100;\n\n  "," {\n    right: 0;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return T=function(){return t},t}var A=(0,l.ZP)($)(T(),m.tablet),B=function(){var n=(0,o.useRef)(),e=(0,o.useState)(a),t=e[0],i=e[1],l=(0,o.useMemo)((function(){return z()(i,300)}),[]),d=(0,o.useMemo)((function(){return[{id:a,label:"Hero",icon:I},{id:s,label:"Book",icon:I},{id:c,label:"Travel",icon:I},{id:u,label:"Photography",icon:I}]}),[]),f=(0,o.useCallback)((function(n){i(n)}),[]),m=(0,o.useCallback)((function(){var e=n.current=new IntersectionObserver((function(n){n.forEach((function(n){var e=n.target.id;n.intersectionRatio>.3&&e&&l(e)}))}),{root:document,rootMargin:"0px",threshold:.65}),t=document.getElementById(a),i=document.getElementById(s),r=document.getElementById(c),o=document.getElementById(u);t&&e.observe(t),i&&e.observe(i),r&&e.observe(r),o&&e.observe(o)}),[l]);return(0,o.useEffect)((function(){setTimeout((function(){m()}),500)}),[m]),(0,r.jsx)(A,{activeItemId:t,onChange:f,items:d})};function R(){var n,e,t=(n=["\n  min-height: 100vh;\n  background: red;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return R=function(){return t},t}var S=l.ZP.div(R()),X=function(n){var e=n.className;return(0,r.jsx)(S,{id:s,className:e})};function D(){var n,e,t=(n=["\n  min-height: 100vh;\n  background: lime;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return D=function(){return t},t}var H=l.ZP.div(D()),L=function(n){var e=n.className;return(0,r.jsx)(H,{id:c,className:e})};function U(){var n,e,t=(n=["\n  min-height: 100vh;\n  background: blue;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return U=function(){return t},t}var F=l.ZP.div(U()),J=function(n){var e=n.className;return(0,r.jsx)(F,{id:u,className:e})};function G(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function K(){var n=G(["\n  padding: 1rem;\n\n  p {\n    font-size: 18px;\n    margin-top: 2rem;\n  }\n"]);return K=function(){return n},n}function Q(){var n=G(["\n  font-size: 32px;\n  font-weight: 700;\n  text-transform: uppercase;\n"]);return Q=function(){return n},n}var V=l.ZP.section(K()),W=l.ZP.h2(Q()),Y=function(){return(0,r.jsxs)(V,{children:[(0,r.jsx)(W,{children:"Author's note for readers"}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})};function nn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function en(){var n=nn(["\n  display: flex;\n\n  border: 1px solid blue;\n  position: fixed;\n  right: 0;\n  height: 100%;\n  border: 2px dashed #555d9b;\n  background-color: #232323;\n  width: var(--sliding-section-width);\n  max-width: 100vw;\n  z-index: 1;\n\n  transform: translateX(calc(100%));\n  transition: transform 320ms ease-in-out;\n  will-change: transform;\n\n  ","\n"]);return en=function(){return n},n}function tn(){var n=nn(["\n  position: fixed;\n  width: 100vw;\n  left: 0;\n  height: 100vh;\n  top: 0;\n  opacity: 0.1;\n"]);return tn=function(){return n},n}function rn(){var n=nn(["\n  background: #555d9b;\n  color: #fff;\n  border: none;\n  outline: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(270deg);\n  font-size: 32px;\n  left: -108px;\n  z-index: 2;\n"]);return rn=function(){return n},n}function on(){var n=nn(["\n  width: 100%;\n  padding: 1rem;\n  height: 100%;\n  overflow: auto;\n"]);return on=function(){return n},n}function an(){var n=nn(["\n  height: 160px;\n  background: rgba(255, 0, 0, 0.4); \n"]);return an=function(){return n},n}var sn=l.ZP.div(en(),(function(n){return n.$isOpen?"\n            transform: translateX(0); \n            transition: transform 320ms ease-out 80ms;\n            box-shadow: -132px 7px 300px 45px rgba(0,0,0,0.92);\n        ":""})),cn=l.ZP.div(tn()),un=l.ZP.button(rn()),ln=l.ZP.div(on()),dn=l.ZP.div(an()),fn=function(n){var e=n.onRequestShow,t=n.onRequestHide,i=n.show,o=void 0!==i&&i;return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)(cn,{onClick:t})," ",(0,r.jsxs)(sn,{$isOpen:o,children:[(0,r.jsx)(un,{onClick:o?t:e,children:"Testimony"}),(0,r.jsxs)(ln,{children:[(0,r.jsx)(dn,{className:"mt-4"}),(0,r.jsx)(dn,{className:"mt-4"}),(0,r.jsx)(dn,{className:"mt-4"}),(0,r.jsx)(dn,{className:"mt-4"}),(0,r.jsx)(dn,{className:"mt-4"}),(0,r.jsx)(dn,{className:"mt-4"}),(0,r.jsx)(dn,{className:"mt-4"}),(0,r.jsx)(dn,{className:"mt-4"})]})]})]})};function mn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function pn(){var n=mn(["\n  --sliding-section-width: 480px;\n  --book-section-width: ",";\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  gap: 2rem;\n"]);return pn=function(){return n},n}function hn(){var n=mn(["\n  border: 1px solid green;\n  max-width: var(--book-section-width);\n  width: 100vw;\n  transition: max-width 240ms ease-in-out 120ms;\n  will-change: max-width;\n\n  ","\n"]);return hn=function(){return n},n}function vn(){var n=mn(["\n  border: 1px solid red;\n  flex: 1;\n  max-width: calc(100vw - 480px);\n"]);return vn=function(){return n},n}var bn=l.ZP.section(pn(),(function(n){return n.$showTestimony?"120px":"480px"})),xn=l.ZP.div(hn(),(function(n){return n.$showTestimony?"\n            transition: max-width 240ms ease-in-out;\n        ":""})),gn=l.ZP.div(vn()),jn=function(){var n=(0,o.useState)(!1),e=n[0],t=n[1],i=(0,o.useCallback)((function(){t(!0)}),[]),a=(0,o.useCallback)((function(){t(!1)}),[]);return(0,r.jsxs)(bn,{$showTestimony:e,children:[(0,r.jsx)(xn,{$showTestimony:e,children:"Book Container"}),(0,r.jsx)(gn,{children:(0,r.jsx)(Y,{})}),(0,r.jsx)(fn,{show:e,onRequestShow:i,onRequestHide:a})]})},wn=function(){return(0,r.jsxs)(x,{children:[(0,r.jsx)(B,{}),(0,r.jsx)(w,{}),(0,r.jsx)(X,{}),(0,r.jsx)(jn,{}),(0,r.jsx)(L,{}),(0,r.jsx)(J,{})]})}}},function(n){n.O(0,[685,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);