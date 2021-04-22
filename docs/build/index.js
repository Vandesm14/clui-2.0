var index=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function p(){return f("")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function b(t,n){t.value=null==n?"":n}let v;function y(t){v=t}const x=[],_=[],k=[],w=[],j=Promise.resolve();let O=!1;function z(t){k.push(t)}let A=!1;const E=new Set;function N(){if(!A){A=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];y(n),C(n.$$)}for(y(null),x.length=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];E.has(n)||(E.add(n),n())}k.length=0}while(x.length);for(;w.length;)w.pop()();O=!1,A=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const L=new Set;function S(t,n){-1===t.$$.dirty[0]&&(x.push(t),O||(O=!0,j.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(s,r,l,u,a,d,f=[-1]){const m=v;y(s);const p=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:f,skip_bound:!1};let h=!1;if(p.ctx=l?l(s,r.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&S(s,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&((g=s.$$.fragment)&&g.i&&(L.delete(g),g.i($))),function(t,e,s,r){const{fragment:l,on_mount:u,on_destroy:i,after_update:a}=t.$$;l&&l.m(e,s),r||z((()=>{const e=u.map(n).filter(c);i?i.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(z)}(s,r.target,r.anchor,r.customElement),N()}var g,$;y(m)}const q=[];const B=function(n,e=t){let o;const c=[];function r(t){if(s(n,t)&&(n=t,o)){const t=!q.length;for(let t=0;t<c.length;t+=1){const e=c[t];e[1](),q.push(e,n)}if(t){for(let t=0;t<q.length;t+=2)q[t][0](q[t+1]);q.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(s,l=t){const u=[s,l];return c.push(u),1===c.length&&(o=e(r)||t),s(n),()=>{const t=c.indexOf(u);-1!==t&&c.splice(t,1),0===c.length&&(o(),o=null)}}}}({});let M={commands:commands};B.subscribe((t=>{console.log("update:",t),M=t}));const P={execute:function(t){Object.keys(M.commands).includes(t)&&console.log("run:",t)},parse:function(t){console.log("parse:",t),t=t.split(" "),Object.keys(M.commands).includes(t[0])?(console.log("command exists"),this.setCurrent(t[0])):console.log("command does not exist")},setCurrent:function(t){Object.keys(M.commands).includes(t)&&(console.log("set:",t),B.update((n=>M.commands[t])))},tokenize:function(t){let n=t.split(""),e=[],o="",c=!1;for(let t=0;t<n.length;t++){const s=n[t];" "===s?!1===c?(e.push(o),o=""):o+=s:'"'===s?'"'===c?(c=!1,o+=s,e.push(o),o="",t++):"'"===c?o+=s:(o+=s,c='"'):"'"===s?"'"===c?(c=!1,o+=s,e.push(o),o="",t++):'"'===c?o+=s:(o+=s,c="'"):o+=s}return""!==o&&e.push(o),e}};function D(t,n,e){const o=t.slice();return o[8]=n[e],o}function F(t,n,e){const o=t.slice();return o[5]=n[e],o}function G(t){let n,e=Object.keys(t[1].args),o=[];for(let n=0;n<e.length;n+=1)o[n]=I(D(t,e,n));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=p()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);u(t,n,e)},p(t,c){if(2&c){let s;for(e=Object.keys(t[1].args),s=0;s<e.length;s+=1){const r=D(t,e,s);o[s]?o[s].p(r,c):(o[s]=I(r),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=e.length}},d(t){a(o,t),t&&i(n)}}}function H(t){let n,e=Object.keys(t[1].commands),o=[];for(let n=0;n<e.length;n+=1)o[n]=J(F(t,e,n));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=p()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);u(t,n,e)},p(t,c){if(2&c){let s;for(e=Object.keys(t[1].commands),s=0;s<e.length;s+=1){const r=F(t,e,s);o[s]?o[s].p(r,c):(o[s]=J(r),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=e.length}},d(t){a(o,t),t&&i(n)}}}function I(t){let n,e,o,c,s,r,a,p=(Array.isArray(t[1].args[t[8]].name)?t[1].args[t[8]].name.join(", "):t[1].args[t[8]].name)+"",h=t[1].args[t[8]].description+"";return{c(){n=d("div"),e=d("span"),o=f(p),c=m(),s=d("span"),r=f(h),a=m(),g(e,"class","clui-dropdown-name svelte-1o1dh6z"),g(s,"class","clui-dropdown-description"),g(n,"class","clui-dropdown-item svelte-1o1dh6z")},m(t,i){u(t,n,i),l(n,e),l(e,o),l(n,c),l(n,s),l(s,r),l(n,a)},p(t,n){2&n&&p!==(p=(Array.isArray(t[1].args[t[8]].name)?t[1].args[t[8]].name.join(", "):t[1].args[t[8]].name)+"")&&$(o,p),2&n&&h!==(h=t[1].args[t[8]].description+"")&&$(r,h)},d(t){t&&i(n)}}}function J(t){let n,e,o,c,s,r,a,p,b,v=t[5]+"",y=t[1].commands[t[5]].description+"";function x(){return t[4](t[5])}return{c(){n=d("div"),e=d("span"),o=f(v),c=m(),s=d("span"),r=f(y),a=m(),g(e,"class","clui-dropdown-name svelte-1o1dh6z"),g(s,"class","clui-dropdown-description"),g(n,"class","clui-dropdown-item svelte-1o1dh6z")},m(t,i){u(t,n,i),l(n,e),l(e,o),l(n,c),l(n,s),l(s,r),l(n,a),p||(b=h(n,"click",x),p=!0)},p(n,e){t=n,2&e&&v!==(v=t[5]+"")&&$(o,v),2&e&&y!==(y=t[1].commands[t[5]].description+"")&&$(r,y)},d(t){t&&i(n),p=!1,b()}}}function K(n){let e,c,s,r,a,f,p,$,v,y,x,_;function k(t,n){return t[1]?.commands?H:G}let w=k(n),j=w(n);return{c(){e=d("div"),c=d("div"),s=d("img"),a=m(),f=d("div"),p=m(),$=d("input"),v=m(),y=d("div"),j.c(),s.src!==(r="")&&g(s,"src",""),g(s,"alt",""),g(s,"class","clui-cli-icon"),g(f,"class","clui-cli-autocomplete"),g($,"type","text"),g($,"placeholder","enter a command"),g($,"class","svelte-1o1dh6z"),g(c,"class","clui-cli-input svelte-1o1dh6z"),g(y,"class","clui-cli-dropdown svelte-1o1dh6z"),g(e,"class","clui-cli svelte-1o1dh6z")},m(t,o){u(t,e,o),l(e,c),l(c,s),l(c,a),l(c,f),l(c,p),l(c,$),b($,n[0].cli.value),l(e,v),l(e,y),j.m(y,null),x||(_=[h($,"input",n[3]),h($,"input",n[2])],x=!0)},p(t,[n]){1&n&&$.value!==t[0].cli.value&&b($,t[0].cli.value),w===(w=k(t))&&j?j.p(t,n):(j.d(1),j=w(t),j&&(j.c(),j.m(y,null)))},i:t,o:t,d(t){t&&i(e),j.d(),x=!1,o(_)}}}function Q(t,n,e){let o;r(t,B,(t=>e(1,o=t))),function(t,n,e=n){t.set(e)}(B,o={commands:commands},o);let c={selection:0,cli:{list:[],value:""}};return[c,o,()=>{P.parse(c.cli.value)},function(){c.cli.value=this.value,e(0,c)},t=>{P.execute(t)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,Q,K,s,{})}}({target:document.body})}();
