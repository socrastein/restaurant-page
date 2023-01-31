(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"* {\n  font-family: 'Ubuntu', sans-serif;\n}\n\nbody, p {\n  margin: 0;\n}\n\n.flexRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.flexColumn {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.header, .subHeader, .tabBar {\n  background-color: #212121;\n}\n\n.header, .subHeader, .tabButton {\n  color: #f5f5f5;\n}\n\n.header {\n  font-size: 3rem;\n  font-style: italic;\n  font-weight: 800;\n  padding: 2rem 0 1rem 0;\n  letter-spacing: 3px;\n}\n\n.subHeader {\n  font-size: 1.5rem;\n  padding: 0 0 1rem 0;\n}\n\n.tabBar {\n  padding: 1rem 1rem 0 1rem;\n  gap: 2rem;\n}\n\n.tabButton {\n  font-size: 2rem;\n  font-weight: 800;\n  padding: .5rem 1rem 0 1rem;\n}\n\n.tabButton:hover:not(.tabCurrent) {\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.tabCurrent {\n  border-style: solid;\n  border-color: #f5f5f5;\n  border-radius: 12px 12px 0 0;\n  border-bottom: none;\n}\n\n\n.footer {\n  gap: 1rem;\n}\n\n#gitLogo {\n  height: 2rem;\n  width: 2rem;\n}\n",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),u=0;u<a.length;u++){var l=n(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),u=n(216),l=n.n(u),d=n(589),p=n.n(d),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const b=n.p+"080591513b1a3eb8fdfe.svg",v=n.p+"e0134549c296e40ead63.jpg",h=function(){const t=document.getElementById("root");(new Image).src=v;const e=document.createElement("div");e.setAttribute("class","flexColumn"),t.appendChild(e)},g=document.getElementById("root"),y=document.createElement("div");y.setAttribute("class","header flexRow"),y.innerHTML="Chez Matthieu",g.appendChild(y);const A=document.createElement("p");A.setAttribute("class","subHeader flexRow"),A.innerHTML="Great food is our love language",g.appendChild(A);const C=document.createElement("div");C.setAttribute("class","tabBar flexRow"),g.appendChild(C);const x=document.createElement("div");x.innerHTML="Home",x.setAttribute("id","tabHome"),x.setAttribute("class","tabButton tabCurrent"),x.addEventListener("click",(()=>{h(),x.setAttribute("class","tabButton tabCurrent"),w.setAttribute("class","tabButton"),E.setAttribute("class","tabButton")})),C.appendChild(x);const w=document.createElement("div");w.innerHTML="About",w.setAttribute("id","tabAbout"),w.setAttribute("class","tabButton"),w.addEventListener("click",(()=>{w.setAttribute("class","tabButton tabCurrent"),x.setAttribute("class","tabButton"),E.setAttribute("class","tabButton")})),C.appendChild(w);const E=document.createElement("div");E.innerHTML="Menu",E.setAttribute("id","tabMenu"),E.setAttribute("class","tabButton"),E.addEventListener("click",(()=>{E.setAttribute("class","tabButton tabCurrent"),w.setAttribute("class","tabButton"),x.setAttribute("class","tabButton")})),C.appendChild(E);const B=document.createElement("div");B.setAttribute("class","footer flexRow"),g.appendChild(B);const T=document.createElement("p");T.innerHTML="Copyright © 2023 Matt Talley (socrastein)";const M=new Image;M.src=b,M.setAttribute("id","gitLogo"),B.appendChild(T),B.appendChild(M),h()})()})();