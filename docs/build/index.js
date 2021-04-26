var index=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(t,n,s){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function c(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function g(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e,t){e.value=null==t?"":t}let y;function _(e){y=e}const w=[],k=[],x=[],O=[],C=Promise.resolve();let S=!1;function $(e){x.push(e)}let P=!1;const A=new Set;function j(){if(!P){P=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];_(t),M(t.$$)}for(_(null),w.length=0;k.length;)k.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];A.has(t)||(A.add(t),t())}x.length=0}while(w.length);for(;O.length;)O.pop()();S=!1,P=!1,A.clear()}}function M(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const D=new Set;function R(e,t){-1===e.$$.dirty[0]&&(w.push(e),S||(S=!0,C.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(i,o,c,l,u,h,d=[-1]){const f=y;_(i);const p=i.$$={fragment:null,ctx:null,props:h,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=c?c(i,o.props||{},((e,t,...n)=>{const s=n.length?n[0]:t;return p.ctx&&u(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),g&&R(i,e)),t})):[],p.update(),g=!0,s(p.before_update),p.fragment=!!l&&l(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(a)}else p.fragment&&p.fragment.c();o.intro&&((m=i.$$.fragment)&&m.i&&(D.delete(m),m.i(b))),function(e,n,i,o){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=e.$$;c&&c.m(n,i),o||$((()=>{const n=l.map(t).filter(r);a?a.push(...n):s(n),e.$$.on_mount=[]})),u.forEach($)}(i,o.target,o.anchor,o.customElement),j()}var m,b;_(f)}var T={PATH_SEPARATOR:".",TARGET:Symbol("target"),UNSUBSCRIBE:Symbol("unsubscribe")};var E={withMutableMethods:e=>e instanceof Date||e instanceof Set||e instanceof Map||e instanceof WeakSet||e instanceof WeakMap,withoutMutableMethods:e=>("object"==typeof e?null===e:"function"!=typeof e)||e instanceof RegExp},U=Array.isArray,I=e=>"symbol"==typeof e;const{PATH_SEPARATOR:W}=T;var z=(e,t)=>U(e)?e.slice(t.length):""===t?e:e.slice(t.length+1),H=(e,t)=>U(e)?(e=e.slice(),t&&e.push(t),e):t&&void 0!==t.toString?(""!==e&&(e+=W),I(t)?e+t.toString():e+t):e,N=e=>{if(U(e))return e.slice(0,-1);if(""===e)return e;const t=e.lastIndexOf(W);return-1===t?"":e.slice(0,t)},B=e=>{if(U(e))return e[e.length-1]||"";if(""===e)return e;const t=e.lastIndexOf(W);return-1===t?e:e.slice(t+1)},G=(e,t)=>{if(U(e))e.forEach((e=>t(e)));else if(""!==e){let n=0,s=e.indexOf(W);if(-1===s)t(e);else for(;n<e.length;)-1===s&&(s=e.length),t(e.slice(n,s)),n=s+1,s=e.indexOf(W,n)}};const{TARGET:V}=T;var L=(e,t,n,s,r)=>{const i=e.next;if("entries"===t.name)e.next=function(){const e=i.call(this);return!1===e.done&&(e.value[0]=r(e.value[0],t,e.value[0],s),e.value[1]=r(e.value[1],t,e.value[0],s)),e};else if("values"===t.name){const o=n[V].keys();e.next=function(){const e=i.call(this);return!1===e.done&&(e.value=r(e.value,t,o.next().value,s)),e}}else e.next=function(){const e=i.call(this);return!1===e.done&&(e.value=r(e.value,t,e.value,s)),e};return e},K=(e,t,n)=>e.isUnsubscribed||t.ignoreSymbols&&I(n)||t.ignoreUnderscores&&"_"===n.charAt(0)||"ignoreKeys"in t&&t.ignoreKeys.includes(n);var F=class{constructor(e){this._equals=e,this._proxyCache=new WeakMap,this._pathCache=new WeakMap,this.isUnsubscribed=!1}_getDescriptorCache(){return void 0===this._descriptorCache&&(this._descriptorCache=new WeakMap),this._descriptorCache}_getProperties(e){const t=this._getDescriptorCache();let n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n}_getOwnPropertyDescriptor(e,t){if(this.isUnsubscribed)return Reflect.getOwnPropertyDescriptor(e,t);const n=this._getProperties(e);let s=n[t];return void 0===s&&(s=Reflect.getOwnPropertyDescriptor(e,t),n[t]=s),s}getProxy(e,t,n,s){if(this.isUnsubscribed)return e;this._pathCache.set(e,t);let r=this._proxyCache.get(e);return void 0===r&&(r=void 0===e[s]?new Proxy(e,n):e,this._proxyCache.set(e,r)),r}getPath(e){return this.isUnsubscribed?void 0:this._pathCache.get(e)}isDetached(e,t){return G(this.getPath(e),(e=>{t&&(t=t[e])})),!Object.is(e,t)}defineProperty(e,t,n){return!!Reflect.defineProperty(e,t,n)&&(this.isUnsubscribed||(this._getProperties(e)[t]=n),!0)}setProperty(e,t,n,s,r){if(!this._equals(r,n)||!(t in e)){const r=this._getOwnPropertyDescriptor(e,t);return void 0!==r&&"set"in r?Reflect.set(e,t,n,s):Reflect.set(e,t,n)}return!0}deleteProperty(e,t,n){if(Reflect.deleteProperty(e,t)){if(!this.isUnsubscribed){const s=this._getDescriptorCache().get(e);s&&(delete s[t],this._pathCache.delete(n))}return!0}return!1}isSameDescriptor(e,t,n){const s=this._getOwnPropertyDescriptor(t,n);return void 0!==e&&void 0!==s&&Object.is(e.value,s.value)&&(e.writable||!1)===(s.writable||!1)&&(e.enumerable||!1)===(s.enumerable||!1)&&(e.configurable||!1)===(s.configurable||!1)&&e.get===s.get&&e.set===s.set}isGetInvariant(e,t){const n=this._getOwnPropertyDescriptor(e,t);return void 0!==n&&!0!==n.configurable&&!0!==n.writable}unsubscribe(){this._descriptorCache=null,this._pathCache=null,this._proxyCache=null,this.isUnsubscribed=!0}},J=e=>"[object Object]"===toString.call(e);const Q=()=>!0,X=(e,t)=>e.length!==t.length||e.some(((e,n)=>t[n]!==e)),Y=(e,t)=>{if(e.size!==t.size)return!0;for(const n of e)if(!t.has(n))return!0;return!1},Z=(e,t)=>{if(e.size!==t.size)return!0;let n;for(const[s,r]of e)if(n=t.get(s),n!==r||void 0===n&&!t.has(s))return!0;return!1},ee=new Set(["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),te=new Set(["concat","includes","indexOf","join","keys","lastIndexOf"]),ne=new Set(["has","toString"]),se=new Set([...ne].concat(["get"])),re={push:Q,pop:Q,shift:Q,unshift:Q,copyWithin:X,reverse:X,sort:X,splice:X,flat:X,fill:X},ie={add:Y,clear:Y,delete:Y},oe=["keys","values","entries"],ce={set:Z,clear:Z,delete:Z},le=new Set([...ee].concat([...te]).concat(Object.keys(re))),ae=new Set([...ne].concat(Object.keys(ie)).concat(oe)),ue=new Set([...se].concat(Object.keys(ce)).concat(oe));class he{constructor(e,t,n){this._path=t,this._isChanged=!1,this._clonedCache=new Set,e instanceof WeakSet?this._weakValue=e.has(n[0]):e instanceof WeakMap?this._weakValue=e.get(n[0]):this.clone=void 0===t?e:this._shallowClone(e)}_shallowClone(e){let t;return J(e)?t={...e}:U(e)?t=[...e]:e instanceof Date?t=new Date(e):e instanceof Set?t=new Set(e):e instanceof Map&&(t=new Map(e)),this._clonedCache.add(t),t}preferredThisArg(e,t,n){const{name:s}=e;return de.isHandledMethod(n,s)?(U(n)?this._onIsChanged=re[s]:n instanceof Set?this._onIsChanged=ie[s]:n instanceof Map&&(this._onIsChanged=ce[s]),n):t}update(e,t,n){if(void 0!==n&&"length"!==t){let s=this.clone;G(z(e,this._path),(e=>{this._clonedCache.has(s[e])||(s[e]=this._shallowClone(s[e])),s=s[e]})),s[t]=n}this._isChanged=!0}isChanged(e,t,n){return e instanceof Date?!t(this.clone.valueOf(),e.valueOf()):e instanceof WeakSet?this._weakValue!==e.has(n[0]):e instanceof WeakMap?this._weakValue!==e.get(n[0]):void 0===this._onIsChanged?this._isChanged:this._onIsChanged(this.clone,e)}}class de{constructor(){this.stack=[]}static isHandledType(e){return J(e)||U(e)||E.withMutableMethods(e)}static isHandledMethod(e,t){return J(e)?ee.has(t):U(e)?le.has(t):e instanceof Set?ae.has(t):e instanceof Map?ue.has(t):E.withMutableMethods(e)}get isCloning(){return 0!==this.stack.length}start(e,t,n){this.stack.push(new he(e,t,n))}update(e,t,n){this.stack[this.stack.length-1].update(e,t,n)}preferredThisArg(e,t,n){return this.stack[this.stack.length-1].preferredThisArg(e,t,n)}isChanged(e,t,n,s){return this.stack[this.stack.length-1].isChanged(e,t,n,s)}stop(){return this.stack.pop().clone}}var fe=de;const{TARGET:pe,UNSUBSCRIBE:ge}=T,me={equals:Object.is,isShallow:!1,pathAsArray:!1,ignoreSymbols:!1,ignoreUnderscores:!1,ignoreDetached:!1},be=(e,t,n={})=>{n={...me,...n};const s=Symbol("ProxyTarget"),{equals:r,isShallow:i,ignoreDetached:o}=n,c=new F(r),l=new fe,a=(t,s,r,i)=>{K(c,n,s)||o&&c.isDetached(t,e)||u(c.getPath(t),s,r,i)},u=(e,n,s,r,i)=>{l.isCloning?l.update(e,n,s):t(H(e,n),r,s,i)},h=e=>e&&e[s]||e,d=(t,r,l,a)=>E.withoutMutableMethods(t)||"constructor"===l||i&&!fe.isHandledMethod(r,l)||K(c,n,l)||c.isGetInvariant(r,l)||o&&c.isDetached(r,e)?t:(void 0===a&&(a=c.getPath(r)),c.getProxy(t,H(a,l),f,s)),f={get(e,t,n){if(I(t)){if(t===s||t===pe)return e;if(t===ge&&!c.isUnsubscribed&&0===c.getPath(e).length)return c.unsubscribe(),e}const r=E.withMutableMethods(e)?Reflect.get(e,t):Reflect.get(e,t,n);return d(r,e,t)},set(e,t,n,i){n=h(n);const o=e[s]||e,l=o[t],u=t in e;return!!c.setProperty(o,t,n,i,l)&&(r(l,n)&&u||a(e,t,l,n),!0)},defineProperty(e,t,n){if(!c.isSameDescriptor(n,e,t)){if(!c.defineProperty(e,t,n))return!1;a(e,t,void 0,n.value)}return!0},deleteProperty(e,t){if(!Reflect.has(e,t))return!0;const n=Reflect.get(e,t);return!!c.deleteProperty(e,t,n)&&(a(e,t,n),!0)},apply(e,t,n){const i=t[s]||t;if(c.isUnsubscribed)return Reflect.apply(e,i,n);if(fe.isHandledType(i)){const o=N(c.getPath(e)),a=fe.isHandledMethod(i,e.name);l.start(i,o,n);const p=Reflect.apply(e,l.preferredThisArg(e,t,i),a?n.map((e=>h(e))):n),g=l.isChanged(i,r,n),m=l.stop();return g&&(l.isCloning?u(N(o),B(o),m,i,e.name):u(o,"",m,i,e.name)),(t instanceof Map||t instanceof Set)&&(e=>"object"==typeof e&&"function"==typeof e.next)(p)?L(p,e,t,o,d):fe.isHandledType(p)&&a?c.getProxy(p,o,f,s):p}return Reflect.apply(e,t,n)}},p=c.getProxy(e,n.pathAsArray?[]:"",f);return t=t.bind(p),p};be.target=e=>e[pe]||e,be.unsubscribe=e=>e[ge]||e;var ve=be;const ye=[];function _e(t,n=e){let s;const r=[];function o(e){if(i(t,e)&&(t=e,s)){const e=!ye.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),ye.push(n,t)}if(e){for(let e=0;e<ye.length;e+=2)ye[e][0](ye[e+1]);ye.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,c=e){const l=[i,c];return r.push(l),1===r.length&&(s=n(o)||e),i(t),()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const we=_e({}),ke=_e(""),xe=_e({});let Oe={commands:commands};we.subscribe((e=>Oe=e));let Ce="";ke.subscribe((e=>Ce=e));let Se={};xe.subscribe((e=>Se=e));const $e=ve(Se,((e,t,n,s)=>{xe.update((e=>Se))}));$e.depth=0,$e.argDepth=0,$e.tokens=[];const Pe={execute:function(e){Object.keys(Oe.commands).includes(e)},parse:function(e){let t=e,n=this.tokenize(e),s={commands:commands};$e.depth=0;for(let e of n)s?.commands&&Object.keys(s.commands).includes(e)&&" "===t[t.lastIndexOf(e)+e.length]&&(s=s.commands[e],$e.depth++);$e.tokens=n,we.update((e=>s))},select:function(e){let t=this.tokenize(Ce);Oe?.commands&&Object.keys(Oe?.commands).includes(e)?(t.length>$e.depth?ke.update((n=>[...t.slice(0,t.length-1),e,""].join(" "))):ke.update((n=>[...t,e,""].join(" "))),this.parse(Ce)):Oe?.args&&Oe.args.filter((e=>!e.required&&!e.isArg)).some((t=>t.name===e))&&(t.length>$e.depth?ke.update((n=>[...t.slice(0,t.length-1),`--${e}`,""].join(" "))):ke.update((n=>[...t,`--${e}`,""].join(" "))),this.parse(Ce)),console.log("args:",e,Oe,Oe?.args?.filter((e=>!e.required&&!e.isArg)))},filter:function(e){let t=this.tokenize(e),n=t[t.length-1];if(Oe?.args)return this.getArgs(e);if(Oe?.commands){if(t.length>$e.depth){let e=Object.keys(Oe.commands).filter((e=>-1!==e.indexOf(n))),t={};return e.map((e=>t[e]=Oe.commands[e])),t}return Oe.commands}return[]},getArgs:function(e){let t=this.tokenize(e),n=Oe?.args.filter((e=>e.required)),s=Oe?.args.filter((e=>!e.required&&e.isArg)),r=Oe?.args.filter((e=>!e.required&&!e.isArg)),i=this.separateArgs(t.slice($e.depth),e),o=[...n,...s][i.withSpace.params.length];return r=r.filter((e=>!i.flags.includes(e.name))),[o,...r].filter((e=>void 0!==e))},separateArgs:function(e,t=""){let n=[],s=[],r=0,i={params:[],flags:[]};for(let o=0;o<e.length;o++){let c=e[o];if(c.startsWith("-")){if(null!==c.match(/^(-)(\w)+/g))n.push(...c.split("").slice(1).map((e=>Oe?.args?.find((t=>t.short===e))?.name)));else if(null!==c.match(/^(--)(.)+/g)){let e=Oe?.args?.find((e=>e.name===c.substr(2)));if(void 0===e)continue;"boolean"!==e?.type?(n.push(e.name),r++,o++):"boolean"===e?.type&&n.push(e.name)}}else s.push(c)," "===t[t.lastIndexOf(c)+c.length]&&i.params.push(c)}return $e.argDepth=n.length+i.params.length+r,{flags:n,params:s,withSpace:i}},setCurrent:function(e){Object.keys(Oe.commands).includes(e)&&we.update((t=>Oe.commands[e]))},tokenize:function(e){let t=e.split(""),n=[],s="",r=!1;for(let e=0;e<t.length;e++){const i=t[e];" "===i?!1===r?(n.push(s),s=""):s+=i:'"'===i?'"'===r?(r=!1,s+=i,n.push(s),s="",e++):"'"===r?s+=i:(s+=i,r='"'):"'"===i?"'"===r?(r=!1,s+=i,n.push(s),s="",e++):'"'===r?s+=i:(s+=i,r="'"):s+=i}return""!==s&&n.push(s),n}};function Ae(e,t,n){const s=e.slice();return s[15]=t[n],s[14]=n,s}function je(e,t,n){const s=e.slice();return s[12]=t[n],s[14]=n,s}function Me(e){let t,n=Pe.filter(e[2]),s=[];for(let t=0;t<n.length;t+=1)s[t]=Re(Ae(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=p()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);l(e,t,n)},p(e,r){if(69&r){let i;for(n=Pe.filter(e[2]),i=0;i<n.length;i+=1){const o=Ae(e,n,i);s[i]?s[i].p(o,r):(s[i]=Re(o),s[i].c(),s[i].m(t.parentNode,t))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(e){u(s,e),e&&a(t)}}}function De(e){let t,n=Object.keys(Pe.filter(e[2])),s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=p()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);l(e,t,n)},p(e,r){if(71&r){let i;for(n=Object.keys(Pe.filter(e[2])),i=0;i<n.length;i+=1){const o=je(e,n,i);s[i]?s[i].p(o,r):(s[i]=qe(o),s[i].c(),s[i].m(t.parentNode,t))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(e){u(s,e),e&&a(t)}}}function Re(e){let t,n,r,i,o,u,p,v,y,_,w=(e[15].short?e[15].short+", ":"")+e[15].name,k=e[15]?.description+"";function x(){return e[10](e[14])}function O(){return e[11](e[15])}return{c(){t=h("div"),n=h("span"),r=d(w),i=f(),o=h("span"),u=d(k),p=f(),m(n,"class","clui-dropdown-name svelte-cvosqo"),m(o,"class","clui-dropdown-description"),m(t,"class",v="clui-dropdown-item "+(e[14]===e[0]?"clui-selected":"")+" svelte-cvosqo")},m(e,s){l(e,t,s),c(t,n),c(n,r),c(t,i),c(t,o),c(o,u),c(t,p),y||(_=[g(t,"mouseover",x),g(t,"click",O)],y=!0)},p(n,s){e=n,4&s&&w!==(w=(e[15].short?e[15].short+", ":"")+e[15].name)&&b(r,w),4&s&&k!==(k=e[15]?.description+"")&&b(u,k),1&s&&v!==(v="clui-dropdown-item "+(e[14]===e[0]?"clui-selected":"")+" svelte-cvosqo")&&m(t,"class",v)},d(e){e&&a(t),y=!1,s(_)}}}function qe(e){let t,n,r,i,o,u,p,v,y,_,w=e[12]+"",k=e[1].commands[e[12]].description+"";function x(){return e[8](e[12])}function O(){return e[9](e[14])}return{c(){t=h("div"),n=h("span"),r=d(w),i=f(),o=h("span"),u=d(k),p=f(),m(n,"class","clui-dropdown-name svelte-cvosqo"),m(o,"class","clui-dropdown-description"),m(t,"class",v="clui-dropdown-item "+(e[14]===e[0]?"clui-selected":"")+" svelte-cvosqo")},m(e,s){l(e,t,s),c(t,n),c(n,r),c(t,i),c(t,o),c(o,u),c(t,p),y||(_=[g(t,"click",x),g(t,"mouseover",O)],y=!0)},p(n,s){e=n,4&s&&w!==(w=e[12]+"")&&b(r,w),6&s&&k!==(k=e[1].commands[e[12]].description+"")&&b(u,k),1&s&&v!==(v="clui-dropdown-item "+(e[14]===e[0]?"clui-selected":"")+" svelte-cvosqo")&&m(t,"class",v)},d(e){e&&a(t),y=!1,s(_)}}}function Te(t){let n,r,i,o,u,p,y,_,w,k,x,O,C,S,$,P=t[3]?.tokens.slice(0,t[3].depth+t[3].argDepth).join(" ")+"";function A(e,t){return e[1]?.commands?De:e[1]?.args?Me:void 0}let j=A(t),M=j&&j(t);return{c(){n=h("div"),r=h("div"),i=h("img"),u=f(),p=h("div"),y=d(P),_=f(),w=h("input"),k=f(),x=h("div"),M&&M.c(),O=f(),C=h("div"),i.src!==(o="icons/cli.png")&&m(i,"src","icons/cli.png"),m(i,"alt",""),m(i,"class","clui-cli-icon svelte-cvosqo"),m(p,"class","clui-cli-autocomplete svelte-cvosqo"),m(w,"type","text"),m(w,"placeholder","enter a command"),m(w,"class","svelte-cvosqo"),m(r,"class","clui-cli-input svelte-cvosqo"),m(x,"class","clui-cli-dropdown svelte-cvosqo"),m(C,"class","clui-pages"),m(n,"class","clui-cli svelte-cvosqo")},m(e,s){l(e,n,s),c(n,r),c(r,i),c(r,u),c(r,p),c(p,y),c(r,_),c(r,w),v(w,t[2]),c(n,k),c(n,x),M&&M.m(x,null),c(n,O),c(n,C),S||($=[g(w,"input",t[7]),g(w,"input",t[4]),g(w,"keydown",t[5])],S=!0)},p(e,[t]){8&t&&P!==(P=e[3]?.tokens.slice(0,e[3].depth+e[3].argDepth).join(" ")+"")&&b(y,P),4&t&&w.value!==e[2]&&v(w,e[2]),j===(j=A(e))&&M?M.p(e,t):(M&&M.d(1),M=j&&j(e),M&&(M.c(),M.m(x,null)))},i:e,o:e,d(e){e&&a(n),M&&M.d(),S=!1,s($)}}}function Ee(e,t,n){let s,r,i;o(e,we,(e=>n(1,s=e))),o(e,ke,(e=>n(2,r=e))),o(e,xe,(e=>n(3,i=e)));let c=0;!function(e,t,n=t){e.set(n)}(we,s={commands:commands},s);const l=e=>{n(0,c=e)};return[c,s,r,i,()=>{Pe.parse(r)},e=>{"Enter"===e.key||("Tab"===e.key?(e.preventDefault(),s?.commands&&Pe.select(Object.keys(Pe.filter(r))[c]),s?.args&&Pe.select(Pe.filter(r)[c])):"ArrowUp"===e.key?(e.preventDefault(),n(0,c--,c)):"ArrowDown"===e.key&&(e.preventDefault(),n(0,c++,c))),s?.commands?n(0,c=c>=Object.keys(Pe.filter(r)).length?Object.keys(Pe.filter(r)).length-1:c):s?.args&&n(0,c=c>=Pe.filter(r).length?Pe.filter(r).length-1:c),n(0,c=c<0?0:c)},l,function(){r=this.value,ke.set(r)},e=>Pe.select(e),e=>l(e),e=>l(e),e=>Pe.select(e.name)]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),q(this,e,Ee,Te,i,{})}}({target:document.getElementById("clui")})}();
