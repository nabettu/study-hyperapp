!function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";function r(e,n){for(var t=[],r=[],u=arguments.length;u-- >2;)t.push(arguments[u]);for(;t.length;){var o=t.pop();if(o&&o.pop)for(u=o.length;u--;)t.push(o[u]);else null!=o&&!0!==o&&!1!==o&&r.push(o)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}function u(e,n,t,r){var u,o=[].map,l=r&&r.children[0]||null,i=l&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:o.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(l),a=[],c=!0,f=p(e),s=function e(n,t,r){for(var u in r)"function"==typeof r[u]?function(e,u){r[e]=function(e){var o=u(e);return"function"==typeof o&&(o=o(g(n,f),r)),o&&o!==(t=g(n,f))&&!o.then&&v(f=m(n,p(t,o),f)),o}}(u,r[u]):e(n.concat(u),t[u]=p(t[u]),r[u]=p(r[u]));return r}([],f,p(n));return v(),s;function d(e){return"function"==typeof e?d(e(f,s)):null!=e?e:""}function h(){u=!u;var e=d(t);for(r&&!u&&(l=function e(n,t,r,u,o){if(u===r);else if(null==r||r.nodeName!==u.nodeName){var l=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName);var u=n.attributes;if(u){u.oncreate&&a.push(function(){u.oncreate(r)});for(var o=0;o<n.children.length;o++)r.appendChild(e(n.children[o]=d(n.children[o]),t));for(var l in u)N(r,l,u[l],null,t)}return r}(u,o);n.insertBefore(l,t),null!=r&&M(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=u;else{!function(e,n,t,r){for(var u in p(n,t))t[u]!==("value"===u||"checked"===u?e[u]:n[u])&&N(e,u,t[u],n[u],r);var o=c?t.oncreate:t.onupdate;o&&a.push(function(){o(e,n)})}(t,r.attributes,u.attributes,o=o||"svg"===u.nodeName);for(var i={},f={},s=[],h=r.children,v=u.children,m=0;m<h.length;m++){s[m]=t.childNodes[m];var g=b(h[m]);null!=g&&(i[g]=[s[m],h[m]])}for(var m=0,y=0;y<v.length;){var g=b(h[m]),w=b(v[y]=d(v[y]));if(f[g])m++;else if(null==w||c)null==g&&(e(t,s[m],h[m],v[y],o),y++),m++;else{var k=i[w]||[];g===w?(e(t,k[0],k[1],v[y],o),m++):k[0]?e(t,t.insertBefore(k[0],s[m]),k[1],v[y],o):e(t,s[m],null,v[y],o),f[w]=v[y],y++}}for(;m<h.length;)null==b(h[m])&&M(t,s[m],h[m]),m++;for(var m in i)f[m]||M(t,i[m][0],i[m][1])}return t}(r,l,i,i=e)),c=!1;a.length;)a.pop()()}function v(){u||(u=!0,setTimeout(h))}function p(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function m(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),n,t[e[0]]):n,p(t,r)):n}function g(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function b(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function N(e,n,t,r,u){if("key"===n);else if("style"===n)for(var o in p(r,t)){var l=null==t||null==t[o]?"":t[o];"-"===o[0]?e[n].setProperty(o,l):e[n][o]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&!u?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function M(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var u=0;u<t.children.length;u++)e(n.childNodes[u],t.children[u]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var u=t.attributes&&t.attributes.onremove;u?u(n,r):r()}}t.r(n),t.d(n,"h",function(){return r}),t.d(n,"app",function(){return u})},function(e,n,t){"use strict";var r=t(0),u={red:Math.ceil(255*Math.random()),green:Math.ceil(255*Math.random()),blue:Math.ceil(255*Math.random())};(0,r.app)(u,{setRed:function(e){return function(n){return{red:e}}},setGreen:function(e){return function(n){return{green:e}}},setBlue:function(e){return function(n){return{blue:e}}}},function(e,n){return(0,r.h)("div",{className:"colorPalette"},(0,r.h)("div",{className:"colorPrev",style:{backgroundColor:"rgb("+e.red+","+e.green+","+e.blue+")"}}),(0,r.h)("ul",{className:"colorNumbers"},(0,r.h)("li",null,(0,r.h)("label",null,"red:"),(0,r.h)("input",{type:"number",value:e.red,onchange:function(e){return n.setRed(e.target.value)}})),(0,r.h)("li",null,(0,r.h)("label",null,"green:"),(0,r.h)("input",{type:"number",value:e.green,onchange:function(e){return n.setGreen(e.target.value)}})),(0,r.h)("li",null,(0,r.h)("label",null,"blue:"),(0,r.h)("input",{type:"number",value:e.blue,onchange:function(e){return n.setBlue(e.target.value)}}))))},document.querySelector(".wrapper"))}]);