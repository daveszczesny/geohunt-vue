(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function wn(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Wa(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ce(i)?ag(i):Wa(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Ce(t))return t;if(ce(t))return t}}const sg=/;(?![^(]*\))/g,rg=/:([^]+)/,og=/\/\*.*?\*\//gs;function ag(t){const e={};return t.replace(og,"").split(sg).forEach(n=>{if(n){const i=n.split(rg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Va(t){let e="";if(Ce(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const i=Va(t[n]);i&&(e+=i+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const lg="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",cg="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ug=wn(lg),dg=wn(cg),hg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fg=wn(hg);function gd(t){return!!t||t===""}const t0=t=>Ce(t)?t:t==null?"":H(t)||ce(t)&&(t.toString===vd||!j(t.toString))?JSON.stringify(t,_d,2):String(t),_d=(t,e)=>e&&e.__v_isRef?_d(t,e.value):On(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!H(e)&&!bd(e)?String(e):e,he=Object.freeze({}),hi=Object.freeze([]),Ye=()=>{},md=()=>!1,pg=/^on[^a-z]/,Rs=t=>pg.test(t),cr=t=>t.startsWith("onUpdate:"),Te=Object.assign,za=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gg=Object.prototype.hasOwnProperty,ee=(t,e)=>gg.call(t,e),H=Array.isArray,On=t=>jr(t)==="[object Map]",yd=t=>jr(t)==="[object Set]",j=t=>typeof t=="function",Ce=t=>typeof t=="string",Ka=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Ga=t=>ce(t)&&j(t.then)&&j(t.catch),vd=Object.prototype.toString,jr=t=>vd.call(t),qa=t=>jr(t).slice(8,-1),bd=t=>jr(t)==="[object Object]",Ya=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=wn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_g=wn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mg=/-(\w)/g,Tt=Wr(t=>t.replace(mg,(e,n)=>n?n.toUpperCase():"")),yg=/\B([A-Z])/g,dn=Wr(t=>t.replace(yg,"-$1").toLowerCase()),Hn=Wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cn=Wr(t=>t?`on${Hn(t)}`:""),ls=(t,e)=>!Object.is(t,e),$i=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hc;const wd=()=>hc||(hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Go(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let ct;class bg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}else Go("cannot run an inactive effect scope.")}on(){ct=this}off(){ct=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function wg(t,e=ct){e&&e.active&&e.effects.push(t)}function Eg(){return ct}const Qa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ed=t=>(t.w&hn)>0,Id=t=>(t.n&hn)>0,Ig=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hn},Cg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Ed(s)&&!Id(s)?s.delete(t):e[n++]=s,s.w&=~hn,s.n&=~hn}e.length=n}},dr=new WeakMap;let qi=0,hn=1;const qo=30;let We;const xn=Symbol("iterate"),Yo=Symbol("Map key iterate");class Ja{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wg(this,i)}run(){if(!this.active)return this.fn();let e=We,n=on;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=We,We=this,on=!0,hn=1<<++qi,qi<=qo?Ig(this):fc(this),this.fn()}finally{qi<=qo&&Cg(this),hn=1<<--qi,We=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(fc(this),this.onStop&&this.onStop(),this.active=!1)}}function fc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let on=!0;const Cd=[];function Yn(){Cd.push(on),on=!1}function Qn(){const t=Cd.pop();on=t===void 0?!0:t}function Je(t,e,n){if(on&&We){let i=dr.get(t);i||dr.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Qa()),Td(s,{effect:We,target:t,type:e,key:n})}}function Td(t,e){let n=!1;qi<=qo?Id(t)||(t.n|=hn,n=!Ed(t)):n=!t.has(We),n&&(t.add(We),We.deps.push(t),We.onTrack&&We.onTrack(Object.assign({effect:We},e)))}function Bt(t,e,n,i,s,r){const o=dr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(i);o.forEach((d,u)=>{(u==="length"||u>=c)&&a.push(d)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Ya(n)&&a.push(o.get("length")):(a.push(o.get(xn)),On(t)&&a.push(o.get(Yo)));break;case"delete":H(t)||(a.push(o.get(xn)),On(t)&&a.push(o.get(Yo)));break;case"set":On(t)&&a.push(o.get(xn));break}const l={target:t,type:e,key:n,newValue:i,oldValue:s,oldTarget:r};if(a.length===1)a[0]&&Qo(a[0],l);else{const c=[];for(const d of a)d&&c.push(...d);Qo(Qa(c),l)}}function Qo(t,e){const n=H(t)?t:[...t];for(const i of n)i.computed&&pc(i,e);for(const i of n)i.computed||pc(i,e)}function pc(t,e){(t!==We||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Te({effect:t},e)),t.scheduler?t.scheduler():t.run())}function Tg(t,e){var n;return(n=dr.get(t))===null||n===void 0?void 0:n.get(e)}const Sg=wn("__proto__,__v_isRef,__isVue"),Sd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ka)),Rg=Vr(),kg=Vr(!1,!0),Ag=Vr(!0),Ng=Vr(!0,!0),gc=Pg();function Pg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=z(this);for(let r=0,o=this.length;r<o;r++)Je(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yn();const i=z(this)[e].apply(this,n);return Qn(),i}}),t}function Og(t){const e=z(this);return Je(e,"has",t),e.hasOwnProperty(t)}function Vr(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Dd:xd:e?Od:Pd).get(i))return i;const o=H(i);if(!t){if(o&&ee(gc,s))return Reflect.get(gc,s,r);if(s==="hasOwnProperty")return Og}const a=Reflect.get(i,s,r);return(Ka(s)?Sd.has(s):Sg(s))||(t||Je(i,"get",s),e)?a:Re(a)?o&&Ya(s)?a:a.value:ce(a)?t?Md(a):ks(a):a}}const xg=Rd(),Dg=Rd(!0);function Rd(t=!1){return function(n,i,s,r){let o=n[i];if(fn(o)&&Re(o)&&!Re(s))return!1;if(!t&&(!hr(s)&&!fn(s)&&(o=z(o),s=z(s)),!H(n)&&Re(o)&&!Re(s)))return o.value=s,!0;const a=H(n)&&Ya(i)?Number(i)<n.length:ee(n,i),l=Reflect.set(n,i,s,r);return n===z(r)&&(a?ls(s,o)&&Bt(n,"set",i,s,o):Bt(n,"add",i,s)),l}}function Mg(t,e){const n=ee(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&Bt(t,"delete",e,void 0,i),s}function Lg(t,e){const n=Reflect.has(t,e);return(!Ka(e)||!Sd.has(e))&&Je(t,"has",e),n}function Fg(t){return Je(t,"iterate",H(t)?"length":xn),Reflect.ownKeys(t)}const kd={get:Rg,set:xg,deleteProperty:Mg,has:Lg,ownKeys:Fg},Ad={get:Ag,set(t,e){return Go(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Go(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},Ug=Te({},kd,{get:kg,set:Dg}),$g=Te({},Ad,{get:Ng}),Xa=t=>t,zr=t=>Reflect.getPrototypeOf(t);function Ws(t,e,n=!1,i=!1){t=t.__v_raw;const s=z(t),r=z(e);n||(e!==r&&Je(s,"get",e),Je(s,"get",r));const{has:o}=zr(s),a=i?Xa:n?Za:cs;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Vs(t,e=!1){const n=this.__v_raw,i=z(n),s=z(t);return e||(t!==s&&Je(i,"has",t),Je(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function zs(t,e=!1){return t=t.__v_raw,!e&&Je(z(t),"iterate",xn),Reflect.get(t,"size",t)}function _c(t){t=z(t);const e=z(this);return zr(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function mc(t,e){e=z(e);const n=z(this),{has:i,get:s}=zr(n);let r=i.call(n,t);r?Nd(n,i,t):(t=z(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ls(e,o)&&Bt(n,"set",t,e,o):Bt(n,"add",t,e),this}function yc(t){const e=z(this),{has:n,get:i}=zr(e);let s=n.call(e,t);s?Nd(e,n,t):(t=z(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&Bt(e,"delete",t,void 0,r),o}function vc(){const t=z(this),e=t.size!==0,n=On(t)?new Map(t):new Set(t),i=t.clear();return e&&Bt(t,"clear",void 0,void 0,n),i}function Ks(t,e){return function(i,s){const r=this,o=r.__v_raw,a=z(o),l=e?Xa:t?Za:cs;return!t&&Je(a,"iterate",xn),o.forEach((c,d)=>i.call(s,l(c),l(d),r))}}function Gs(t,e,n){return function(...i){const s=this.__v_raw,r=z(s),o=On(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),d=n?Xa:e?Za:cs;return!e&&Je(r,"iterate",l?Yo:xn),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[d(u[0]),d(u[1])]:d(u),done:h}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Hn(t)} operation ${n}failed: target is readonly.`,z(this))}return t==="delete"?!1:this}}function Bg(){const t={get(r){return Ws(this,r)},get size(){return zs(this)},has:Vs,add:_c,set:mc,delete:yc,clear:vc,forEach:Ks(!1,!1)},e={get(r){return Ws(this,r,!1,!0)},get size(){return zs(this)},has:Vs,add:_c,set:mc,delete:yc,clear:vc,forEach:Ks(!1,!0)},n={get(r){return Ws(this,r,!0)},get size(){return zs(this,!0)},has(r){return Vs.call(this,r,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Ks(!0,!1)},i={get(r){return Ws(this,r,!0,!0)},get size(){return zs(this,!0)},has(r){return Vs.call(this,r,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gs(r,!1,!1),n[r]=Gs(r,!0,!1),e[r]=Gs(r,!1,!0),i[r]=Gs(r,!0,!0)}),[t,n,e,i]}const[Hg,jg,Wg,Vg]=Bg();function Kr(t,e){const n=e?t?Vg:Wg:t?jg:Hg;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ee(n,s)&&s in i?n:i,s,r)}const zg={get:Kr(!1,!1)},Kg={get:Kr(!1,!0)},Gg={get:Kr(!0,!1)},qg={get:Kr(!0,!0)};function Nd(t,e,n){const i=z(n);if(i!==n&&e.call(t,i)){const s=qa(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Pd=new WeakMap,Od=new WeakMap,xd=new WeakMap,Dd=new WeakMap;function Yg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qg(t){return t.__v_skip||!Object.isExtensible(t)?0:Yg(qa(t))}function ks(t){return fn(t)?t:Gr(t,!1,kd,zg,Pd)}function Jg(t){return Gr(t,!1,Ug,Kg,Od)}function Md(t){return Gr(t,!0,Ad,Gg,xd)}function li(t){return Gr(t,!0,$g,qg,Dd)}function Gr(t,e,n,i,s){if(!ce(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Qg(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Dn(t){return fn(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function hr(t){return!!(t&&t.__v_isShallow)}function Jo(t){return Dn(t)||fn(t)}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Ld(t){return ur(t,"__v_skip",!0),t}const cs=t=>ce(t)?ks(t):t,Za=t=>ce(t)?Md(t):t;function Fd(t){on&&We&&(t=z(t),Td(t.dep||(t.dep=Qa()),{target:t,type:"get",key:"value"}))}function Ud(t,e){t=z(t);const n=t.dep;n&&Qo(n,{target:t,type:"set",key:"value",newValue:e})}function Re(t){return!!(t&&t.__v_isRef===!0)}function Xg(t){return $d(t,!1)}function Zg(t){return $d(t,!0)}function $d(t,e){return Re(t)?t:new e_(t,e)}class e_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z(e),this._value=n?e:cs(e)}get value(){return Fd(this),this._value}set value(e){const n=this.__v_isShallow||hr(e)||fn(e);e=n?e:z(e),ls(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:cs(e),Ud(this,e))}}function fi(t){return Re(t)?t.value:t}const t_={get:(t,e,n)=>fi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Bd(t){return Dn(t)?t:new Proxy(t,t_)}class n_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Tg(z(this._object),this._key)}}function n0(t,e,n){const i=t[e];return Re(i)?i:new n_(t,e,n)}var Hd;class i_{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Hd]=!1,this._dirty=!0,this.effect=new Ja(e,()=>{this._dirty||(this._dirty=!0,Ud(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=z(this);return Fd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Hd="__v_isReadonly";function s_(t,e,n=!1){let i,s;const r=j(t);r?(i=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=t.get,s=t.set);const o=new i_(i,s,r||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Mn=[];function er(t){Mn.push(t)}function tr(){Mn.pop()}function I(t,...e){Yn();const n=Mn.length?Mn[Mn.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=r_();if(i)Ft(i,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${to(n,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${t}`,...e];s.length&&r.push(`
`,...o_(s)),console.warn(...r)}Qn()}function r_(){let t=Mn[Mn.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function o_(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...a_(n))}),e}function a_({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,s=` at <${to(t.component,t.type,i)}`,r=">"+n;return t.props?[s,...l_(t.props),r]:[s+r]}function l_(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...jd(i,t[i]))}),n.length>3&&e.push(" ..."),e}function jd(t,e,n){return Ce(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Re(e)?(e=jd(t,z(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):j(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=z(e),n?e:[`${t}=`,e])}const el={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Ft(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){qr(r,e,n)}return s}function st(t,e,n,i){if(j(t)){const r=Ft(t,e,n,i);return r&&Ga(r)&&r.catch(o=>{qr(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(st(t[r],e,n,i));return s}function qr(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=el[n];for(;r;){const c=r.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ft(l,null,10,[t,o,a]);return}}c_(t,n,s,i)}function c_(t,e,n,i=!0){{const s=el[e];if(n&&er(n),I(`Unhandled error${s?` during execution of ${s}`:""}`),n&&tr(),i)throw t;console.error(t)}}let us=!1,Xo=!1;const Ue=[];let vt=0;const pi=[];let yt=null,Qt=0;const Wd=Promise.resolve();let tl=null;const u_=100;function Vd(t){const e=tl||Wd;return t?e.then(this?t.bind(this):t):e}function d_(t){let e=vt+1,n=Ue.length;for(;e<n;){const i=e+n>>>1;ds(Ue[i])<t?e=i+1:n=i}return e}function Yr(t){(!Ue.length||!Ue.includes(t,us&&t.allowRecurse?vt+1:vt))&&(t.id==null?Ue.push(t):Ue.splice(d_(t.id),0,t),zd())}function zd(){!us&&!Xo&&(Xo=!0,tl=Wd.then(qd))}function h_(t){const e=Ue.indexOf(t);e>vt&&Ue.splice(e,1)}function Kd(t){H(t)?pi.push(...t):(!yt||!yt.includes(t,t.allowRecurse?Qt+1:Qt))&&pi.push(t),zd()}function bc(t,e=us?vt+1:0){for(t=t||new Map;e<Ue.length;e++){const n=Ue[e];if(n&&n.pre){if(nl(t,n))continue;Ue.splice(e,1),e--,n()}}}function Gd(t){if(pi.length){const e=[...new Set(pi)];if(pi.length=0,yt){yt.push(...e);return}for(yt=e,t=t||new Map,yt.sort((n,i)=>ds(n)-ds(i)),Qt=0;Qt<yt.length;Qt++)nl(t,yt[Qt])||yt[Qt]();yt=null,Qt=0}}const ds=t=>t.id==null?1/0:t.id,f_=(t,e)=>{const n=ds(t)-ds(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qd(t){Xo=!1,us=!0,t=t||new Map,Ue.sort(f_);const e=n=>nl(t,n);try{for(vt=0;vt<Ue.length;vt++){const n=Ue[vt];if(n&&n.active!==!1){if(e(n))continue;Ft(n,null,14)}}}finally{vt=0,Ue.length=0,Gd(t),us=!1,tl=null,(Ue.length||pi.length)&&qd(t)}}function nl(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>u_){const i=e.ownerInstance,s=i&&hl(i.type);return I(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let Ln=!1;const ai=new Set;wd().__VUE_HMR_RUNTIME__={createRecord:Io(Yd),rerender:Io(__),reload:Io(m_)};const jn=new Map;function p_(t){const e=t.type.__hmrId;let n=jn.get(e);n||(Yd(e,t.type),n=jn.get(e)),n.instances.add(t)}function g_(t){jn.get(t.type.__hmrId).instances.delete(t)}function Yd(t,e){return jn.has(t)?!1:(jn.set(t,{initialDef:Qi(e),instances:new Set}),!0)}function Qi(t){return kh(t)?t.__vccOpts:t}function __(t,e){const n=jn.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(i=>{e&&(i.render=e,Qi(i.type).render=e),i.renderCache=[],Ln=!0,i.update(),Ln=!1}))}function m_(t,e){const n=jn.get(t);if(!n)return;e=Qi(e),wc(n.initialDef,e);const i=[...n.instances];for(const s of i){const r=Qi(s.type);ai.has(r)||(r!==n.initialDef&&wc(r,e),ai.add(r)),s.appContext.optionsCache.delete(s.type),s.ceReload?(ai.add(r),s.ceReload(e.styles),ai.delete(r)):s.parent?Yr(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Kd(()=>{for(const s of i)ai.delete(Qi(s.type))})}function wc(t,e){Te(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Io(t){return(e,n)=>{try{return t(e,n)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let bt,Yi=[],Zo=!1;function As(t,...e){bt?bt.emit(t,...e):Zo||Yi.push({event:t,args:e})}function Qd(t,e){var n,i;bt=t,bt?(bt.enabled=!0,Yi.forEach(({event:s,args:r})=>bt.emit(s,...r)),Yi=[]):typeof window<"u"&&window.HTMLElement&&!(!((i=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||i===void 0)&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Qd(r,e)}),setTimeout(()=>{bt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Zo=!0,Yi=[])},3e3)):(Zo=!0,Yi=[])}function y_(t,e){As("app:init",t,e,{Fragment:Xe,Text:Ps,Comment:Le,Static:Zi})}function v_(t){As("app:unmount",t)}const b_=il("component:added"),Jd=il("component:updated"),w_=il("component:removed"),E_=t=>{bt&&typeof bt.cleanupBuffer=="function"&&!bt.cleanupBuffer(t)&&w_(t)};function il(t){return e=>{As(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const I_=Xd("perf:start"),C_=Xd("perf:end");function Xd(t){return(e,n,i)=>{As(t,e.appContext.app,e.uid,e,n,i)}}function T_(t,e,n){As("component:emit",t.appContext.app,t,e,n)}function S_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||he;{const{emitsOptions:d,propsOptions:[u]}=t;if(d)if(!(e in d))(!u||!(Cn(e)in u))&&I(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Cn(e)}" prop.`);else{const h=d[e];j(h)&&(h(...n)||I(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:h}=i[d]||he;h&&(s=n.map(g=>Ce(g)?g.trim():g)),u&&(s=n.map(vg))}T_(t,e,s);{const d=e.toLowerCase();d!==e&&i[Cn(d)]&&I(`Event "${d}" is emitted in component ${to(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${dn(e)}" instead of "${e}".`)}let a,l=i[a=Cn(e)]||i[a=Cn(Tt(e))];!l&&r&&(l=i[a=Cn(dn(e))]),l&&st(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(c,t,6,s)}}function Zd(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const d=Zd(c,e,!0);d&&(a=!0,Te(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ce(t)&&i.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Te(o,r),ce(t)&&i.set(t,o),o)}function Qr(t,e){return!t||!Rs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,dn(e))||ee(t,e))}let Oe=null,Jr=null;function fr(t){const e=Oe;return Oe=t,Jr=t&&t.type.__scopeId||null,e}function i0(t){Jr=t}function s0(){Jr=null}const r0=t=>eh;function eh(t,e=Oe,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&xc(-1);const r=fr(e);let o;try{o=t(...s)}finally{fr(r),i._d&&xc(1)}return Jd(e),o};return i._n=!0,i._c=!0,i._d=!0,i}let ea=!1;function pr(){ea=!0}function Co(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:h,setupState:g,ctx:m,inheritAttrs:b}=t;let k,P;const O=fr(t);ea=!1;try{if(n.shapeFlag&4){const Q=s||i;k=ut(d.call(Q,Q,u,r,g,h,m)),P=l}else{const Q=e;l===r&&pr(),k=ut(Q.length>1?Q(r,{get attrs(){return pr(),l},slots:a,emit:c}):Q(r,null)),P=e.props?l:k_(l)}}catch(Q){es.length=0,qr(Q,t,1),k=Ve(Le)}let U=k,F;if(k.patchFlag>0&&k.patchFlag&2048&&([U,F]=R_(k)),P&&b!==!1){const Q=Object.keys(P),{shapeFlag:ye}=U;if(Q.length){if(ye&7)o&&Q.some(cr)&&(P=A_(P,o)),U=St(U,P);else if(!ea&&U.type!==Le){const ke=Object.keys(l),G=[],re=[];for(let le=0,Ae=ke.length;le<Ae;le++){const ve=ke[le];Rs(ve)?cr(ve)||G.push(ve[2].toLowerCase()+ve.slice(3)):re.push(ve)}re.length&&I(`Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),G.length&&I(`Extraneous non-emits event listeners (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Ec(U)||I("Runtime directive used on component with non-element root node. The directives will not function as intended."),U=St(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(Ec(U)||I("Component inside <Transition> renders non-element root node that cannot be animated."),U.transition=n.transition),F?F(U):k=U,fr(O),k}const R_=t=>{const e=t.children,n=t.dynamicChildren,i=th(e);if(!i)return[t,void 0];const s=e.indexOf(i),r=n?n.indexOf(i):-1,o=a=>{e[s]=a,n&&(r>-1?n[r]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[ut(i),o]};function th(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(wi(i)){if(i.type!==Le||i.children==="v-if"){if(e)return;e=i}}else return}return e}const k_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rs(n))&&((e||(e={}))[n]=t[n]);return e},A_=(t,e)=>{const n={};for(const i in t)(!cr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n},Ec=t=>t.shapeFlag&7||t.type===Le;function N_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if((s||a)&&Ln||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ic(i,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const h=d[u];if(o[h]!==i[h]&&!Qr(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ic(i,o,c):!0:!!o;return!1}function Ic(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Qr(n,r))return!0}return!1}function P_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const O_=t=>t.__isSuspense;function x_(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Kd(t)}function nr(t,e){if(!Ie)I("provide() can only be used inside setup().");else{let n=Ie.provides;const i=Ie.parent&&Ie.parent.provides;i===n&&(n=Ie.provides=Object.create(i)),n[t]=e}}function Ut(t,e,n=!1){const i=Ie||Oe;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(i.proxy):e;I(`injection "${String(t)}" not found.`)}else I("inject() can only be used inside setup() or functional components.")}function D_(t,e){return sl(t,null,e)}const qs={};function Ji(t,e,n){return j(e)||I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),sl(t,e,n)}function sl(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=he){e||(n!==void 0&&I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=F=>{I("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=Eg()===(Ie==null?void 0:Ie.scope)?Ie:null;let c,d=!1,u=!1;if(Re(t)?(c=()=>t.value,d=hr(t)):Dn(t)?(c=()=>t,i=!0):H(t)?(u=!0,d=t.some(F=>Dn(F)||hr(F)),c=()=>t.map(F=>{if(Re(F))return F.value;if(Dn(F))return Nn(F);if(j(F))return Ft(F,l,2);a(F)})):j(t)?e?c=()=>Ft(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),st(t,l,3,[g])}:(c=Ye,a(t)),e&&i){const F=c;c=()=>Nn(F())}let h,g=F=>{h=O.onStop=()=>{Ft(F,l,4)}},m;if(fs)if(g=Ye,e?n&&st(e,l,3,[c(),u?[]:void 0,g]):c(),s==="sync"){const F=jm();m=F.__watcherHandles||(F.__watcherHandles=[])}else return Ye;let b=u?new Array(t.length).fill(qs):qs;const k=()=>{if(O.active)if(e){const F=O.run();(i||d||(u?F.some((Q,ye)=>ls(Q,b[ye])):ls(F,b)))&&(h&&h(),st(e,l,3,[F,b===qs?void 0:u&&b[0]===qs?[]:b,g]),b=F)}else O.run()};k.allowRecurse=!!e;let P;s==="sync"?P=k:s==="post"?P=()=>qe(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),P=()=>Yr(k));const O=new Ja(c,P);O.onTrack=r,O.onTrigger=o,e?n?k():b=O.run():s==="post"?qe(O.run.bind(O),l&&l.suspense):O.run();const U=()=>{O.stop(),l&&l.scope&&za(l.scope.effects,O)};return m&&m.push(U),U}function M_(t,e,n){const i=this.proxy,s=Ce(t)?t.includes(".")?nh(i,t):()=>i[t]:t.bind(i,i);let r;j(e)?r=e:(r=e.handler,n=e);const o=Ie;Ei(this);const a=sl(s,r.bind(i),n);return o?Ei(o):Un(),a}function nh(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Nn(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Nn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(yd(t)||On(t))t.forEach(n=>{Nn(n,e)});else if(bd(t))for(const n in t)Nn(t[n],e);return t}function L_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ah(()=>{t.isMounted=!0}),lh(()=>{t.isUnmounting=!0}),t}const tt=[Function,Array],F_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},setup(t,{slots:e}){const n=dl(),i=L_();let s;return()=>{const r=e.default&&sh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){let b=!1;for(const k of r)if(k.type!==Le){if(b){I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}o=k,b=!0}}const a=z(t),{mode:l}=a;if(l&&l!=="in-out"&&l!=="out-in"&&l!=="default"&&I(`invalid <transition> mode: ${l}`),i.isLeaving)return To(o);const c=Cc(o);if(!c)return To(o);const d=ta(c,a,i,n);na(c,d);const u=n.subTree,h=u&&Cc(u);let g=!1;const{getTransitionKey:m}=c.type;if(m){const b=m();s===void 0?s=b:b!==s&&(s=b,g=!0)}if(h&&h.type!==Le&&(!kn(c,h)||g)){const b=ta(h,a,i,n);if(na(h,b),l==="out-in")return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},To(o);l==="in-out"&&c.type!==Le&&(b.delayLeave=(k,P,O)=>{const U=ih(i,h);U[String(h.key)]=h,k._leaveCb=()=>{P(),k._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=O})}return o}}},U_=F_;function ih(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ta(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:h,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:b,onAppear:k,onAfterAppear:P,onAppearCancelled:O}=e,U=String(t.key),F=ih(n,t),Q=(G,re)=>{G&&st(G,i,9,re)},ye=(G,re)=>{const le=re[1];Q(G,re),H(G)?G.every(Ae=>Ae.length<=1)&&le():G.length<=1&&le()},ke={mode:r,persisted:o,beforeEnter(G){let re=a;if(!n.isMounted)if(s)re=b||a;else return;G._leaveCb&&G._leaveCb(!0);const le=F[U];le&&kn(t,le)&&le.el._leaveCb&&le.el._leaveCb(),Q(re,[G])},enter(G){let re=l,le=c,Ae=d;if(!n.isMounted)if(s)re=k||l,le=P||c,Ae=O||d;else return;let ve=!1;const ot=G._enterCb=Kt=>{ve||(ve=!0,Kt?Q(Ae,[G]):Q(le,[G]),ke.delayedLeave&&ke.delayedLeave(),G._enterCb=void 0)};re?ye(re,[G,ot]):ot()},leave(G,re){const le=String(t.key);if(G._enterCb&&G._enterCb(!0),n.isUnmounting)return re();Q(u,[G]);let Ae=!1;const ve=G._leaveCb=ot=>{Ae||(Ae=!0,re(),ot?Q(m,[G]):Q(g,[G]),G._leaveCb=void 0,F[le]===t&&delete F[le])};F[le]=t,h?ye(h,[G,ve]):ve()},clone(G){return ta(G,e,n,i)}};return ke}function To(t){if(Ns(t))return t=St(t),t.children=null,t}function Cc(t){return Ns(t)?t.children?t.children[0]:void 0:t}function na(t,e){t.shapeFlag&6&&t.component?na(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sh(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Xe?(o.patchFlag&128&&s++,i=i.concat(sh(o.children,e,a))):(e||o.type!==Le)&&i.push(a!=null?St(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function rh(t){return j(t)?{setup:t,name:t.name}:t}const Xi=t=>!!t.type.__asyncLoader,Ns=t=>t.type.__isKeepAlive;function $_(t,e){oh(t,"a",e)}function B_(t,e){oh(t,"da",e)}function oh(t,e,n=Ie){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ns(s.parent.vnode)&&H_(i,e,n,s),s=s.parent}}function H_(t,e,n,i){const s=Xr(e,t,i,!0);ch(()=>{za(i[e],s)},n)}function Xr(t,e,n=Ie,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Yn(),Ei(n);const a=st(e,n,t,o);return Un(),Qn(),a});return i?s.unshift(r):s.push(r),r}else{const s=Cn(el[t].replace(/ hook$/,""));I(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Vt=t=>(e,n=Ie)=>(!fs||t==="sp")&&Xr(t,(...i)=>e(...i),n),j_=Vt("bm"),ah=Vt("m"),W_=Vt("bu"),V_=Vt("u"),lh=Vt("bum"),ch=Vt("um"),z_=Vt("sp"),K_=Vt("rtg"),G_=Vt("rtc");function q_(t,e=Ie){Xr("ec",t,e)}function uh(t){_g(t)&&I("Do not use built-in directive ids as custom directive id: "+t)}function o0(t,e){const n=Oe;if(n===null)return I("withDirectives can only be used inside render functions."),t;const i=eo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=he]=e[r];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function En(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Yn(),st(l,n,8,[t.el,a,t,e]),Qn())}}const ia="components";function Y_(t,e){return J_(ia,t,!0,e)||t}const Q_=Symbol();function J_(t,e,n=!0,i=!1){const s=Oe||Ie;if(s){const r=s.type;if(t===ia){const a=hl(r,!1);if(a&&(a===e||a===Tt(e)||a===Hn(Tt(e))))return r}const o=Tc(s[t]||r[t],e)||Tc(s.appContext[t],e);if(!o&&i)return r;if(n&&!o){const a=t===ia?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";I(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else I(`resolve${Hn(t.slice(0,-1))} can only be used in render() or setup().`)}function Tc(t,e){return t&&(t[e]||t[Tt(e)]||t[Hn(Tt(e))])}function a0(t,e,n,i){let s;const r=n&&n[i];if(H(t)||Ce(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){Number.isInteger(t)||I(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function l0(t,e,n={},i,s){if(Oe.isCE||Oe.parent&&Xi(Oe.parent)&&Oe.parent.isCE)return e!=="default"&&(n.name=e),Ve("slot",n,i&&i());let r=t[e];r&&r.length>1&&(I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),ll();const o=r&&dh(r(n)),a=cl(Xe,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function dh(t){return t.some(e=>wi(e)?!(e.type===Le||e.type===Xe&&!dh(e.children)):!0)?t:null}const sa=t=>t?Th(t)?eo(t)||t.proxy:sa(t.parent):null,Fn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>li(t.props),$attrs:t=>li(t.attrs),$slots:t=>li(t.slots),$refs:t=>li(t.refs),$parent:t=>sa(t.parent),$root:t=>sa(t.root),$emit:t=>t.emit,$options:t=>ol(t),$forceUpdate:t=>t.f||(t.f=()=>Yr(t.update)),$nextTick:t=>t.n||(t.n=Vd.bind(t.proxy)),$watch:t=>M_.bind(t)}),rl=t=>t==="_"||t==="$",So=(t,e)=>t!==he&&!t.__isScriptSetup&&ee(t,e),hh={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(So(i,e))return o[e]=1,i[e];if(s!==he&&ee(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,r[e];if(n!==he&&ee(n,e))return o[e]=4,n[e];ra&&(o[e]=0)}}const d=Fn[e];let u,h;if(d)return e==="$attrs"&&(Je(t,"get",e),pr()),d(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==he&&ee(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ee(h,e))return h[e];Oe&&(!Ce(e)||e.indexOf("__v")!==0)&&(s!==he&&rl(e[0])&&ee(s,e)?I(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Oe&&I(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return So(s,e)?(s[e]=n,!0):s.__isScriptSetup&&ee(s,e)?(I(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):i!==he&&ee(i,e)?(i[e]=n,!0):ee(t.props,e)?(I(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(I(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(r,e,{enumerable:!0,configurable:!0,value:n}):r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==he&&ee(t,o)||So(e,o)||(a=r[0])&&ee(a,o)||ee(i,o)||ee(Fn,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};hh.ownKeys=t=>(I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function X_(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Fn).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>Fn[n](t),set:Ye})}),e}function Z_(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(i=>{Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>t.props[i],set:Ye})})}function em(t){const{ctx:e,setupState:n}=t;Object.keys(z(n)).forEach(i=>{if(!n.__isScriptSetup){if(rl(i[0])){I(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>n[i],set:Ye})}})}function tm(){const t=Object.create(null);return(e,n)=>{t[n]?I(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let ra=!0;function nm(t){const e=ol(t),n=t.proxy,i=t.ctx;ra=!1,e.beforeCreate&&Sc(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:h,beforeUpdate:g,updated:m,activated:b,deactivated:k,beforeDestroy:P,beforeUnmount:O,destroyed:U,unmounted:F,render:Q,renderTracked:ye,renderTriggered:ke,errorCaptured:G,serverPrefetch:re,expose:le,inheritAttrs:Ae,components:ve,directives:ot,filters:Kt}=e,at=tm();{const[Z]=t.propsOptions;if(Z)for(const ne in Z)at("Props",ne)}if(c&&im(c,i,at,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const ne=o[Z];j(ne)?(Object.defineProperty(i,Z,{value:ne.bind(n),configurable:!0,enumerable:!0,writable:!0}),at("Methods",Z)):I(`Method "${Z}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`)}if(s){j(s)||I("The data option must be a function. Plain object usage is no longer supported.");const Z=s.call(n,n);if(Ga(Z)&&I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ce(Z))I("data() should return an object.");else{t.data=ks(Z);for(const ne in Z)at("Data",ne),rl(ne[0])||Object.defineProperty(i,ne,{configurable:!0,enumerable:!0,get:()=>Z[ne],set:Ye})}}if(ra=!0,r)for(const Z in r){const ne=r[Z],Ge=j(ne)?ne.bind(n,n):j(ne.get)?ne.get.bind(n,n):Ye;Ge===Ye&&I(`Computed property "${Z}" has no getter.`);const Zn=!j(ne)&&j(ne.set)?ne.set.bind(n):()=>{I(`Write operation failed: computed property "${Z}" is readonly.`)},At=nt({get:Ge,set:Zn});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>At.value,set:gt=>At.value=gt}),at("Computed",Z)}if(a)for(const Z in a)fh(a[Z],i,n,Z);if(l){const Z=j(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(ne=>{nr(ne,Z[ne])})}d&&Sc(d,t,"c");function Ne(Z,ne){H(ne)?ne.forEach(Ge=>Z(Ge.bind(n))):ne&&Z(ne.bind(n))}if(Ne(j_,u),Ne(ah,h),Ne(W_,g),Ne(V_,m),Ne($_,b),Ne(B_,k),Ne(q_,G),Ne(G_,ye),Ne(K_,ke),Ne(lh,O),Ne(ch,F),Ne(z_,re),H(le))if(le.length){const Z=t.exposed||(t.exposed={});le.forEach(ne=>{Object.defineProperty(Z,ne,{get:()=>n[ne],set:Ge=>n[ne]=Ge})})}else t.exposed||(t.exposed={});Q&&t.render===Ye&&(t.render=Q),Ae!=null&&(t.inheritAttrs=Ae),ve&&(t.components=ve),ot&&(t.directives=ot)}function im(t,e,n=Ye,i=!1){H(t)&&(t=oa(t));for(const s in t){const r=t[s];let o;ce(r)?"default"in r?o=Ut(r.from||s,r.default,!0):o=Ut(r.from||s):o=Ut(r),Re(o)?i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):(I(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[s]=o):e[s]=o,n("Inject",s)}}function Sc(t,e,n){st(H(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function fh(t,e,n,i){const s=i.includes(".")?nh(n,i):()=>n[i];if(Ce(t)){const r=e[t];j(r)?Ji(s,r):I(`Invalid watch handler specified by key "${t}"`,r)}else if(j(t))Ji(s,t.bind(n));else if(ce(t))if(H(t))t.forEach(r=>fh(r,e,n,i));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)?Ji(s,r,t):I(`Invalid watch handler specified by key "${t.handler}"`,r)}else I(`Invalid watch option: "${i}"`,t)}function ol(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>gr(l,c,o,!0)),gr(l,e,o)),ce(e)&&r.set(e,l),l}function gr(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&gr(t,r,n,!0),s&&s.forEach(o=>gr(t,o,n,!0));for(const o in e)if(i&&o==="expose")I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=sm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sm={data:Rc,props:Tn,emits:Tn,methods:Tn,computed:Tn,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:Tn,directives:Tn,watch:om,provide:Rc,inject:rm};function Rc(t,e){return e?t?function(){return Te(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function rm(t,e){return Tn(oa(t),oa(e))}function oa(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function je(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?Te(Te(Object.create(null),t),e):e}function om(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const i in e)n[i]=je(t[i],e[i]);return n}function am(t,e,n,i=!1){const s={},r={};ur(r,Zr,1),t.propsDefaults=Object.create(null),ph(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);_h(e||{},s,t),n?t.props=i?s:Jg(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function lm(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function cm(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=z(s),[l]=t.propsOptions;let c=!1;if(!lm(t)&&(i||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let h=d[u];if(Qr(t.emitsOptions,h))continue;const g=e[h];if(l)if(ee(r,h))g!==r[h]&&(r[h]=g,c=!0);else{const m=Tt(h);s[m]=aa(l,a,m,g,t,!1)}else g!==r[h]&&(r[h]=g,c=!0)}}}else{ph(t,e,s,r)&&(c=!0);let d;for(const u in a)(!e||!ee(e,u)&&((d=dn(u))===u||!ee(e,d)))&&(l?n&&(n[u]!==void 0||n[d]!==void 0)&&(s[u]=aa(l,a,u,void 0,t,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!ee(e,u))&&(delete r[u],c=!0)}c&&Bt(t,"set","$attrs"),_h(e||{},s,t)}function ph(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zs(l))continue;const c=e[l];let d;s&&ee(s,d=Tt(l))?!r||!r.includes(d)?n[d]=c:(a||(a={}))[d]=c:Qr(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=z(n),c=a||he;for(let d=0;d<r.length;d++){const u=r[d];n[u]=aa(s,l,u,c[u],t,!ee(c,u))}}return o}function aa(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Ei(s),i=c[n]=l.call(null,e),Un())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===dn(n))&&(i=!0))}return i}function gh(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const d=u=>{l=!0;const[h,g]=gh(u,e,!0);Te(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!l)return ce(t)&&i.set(t,hi),hi;if(H(r))for(let d=0;d<r.length;d++){Ce(r[d])||I("props must be strings when using array syntax.",r[d]);const u=Tt(r[d]);kc(u)&&(o[u]=he)}else if(r){ce(r)||I("invalid props options",r);for(const d in r){const u=Tt(d);if(kc(u)){const h=r[d],g=o[u]=H(h)||j(h)?{type:h}:Object.assign({},h);if(g){const m=Nc(Boolean,g.type),b=Nc(String,g.type);g[0]=m>-1,g[1]=b<0||m<b,(m>-1||ee(g,"default"))&&a.push(u)}}}}const c=[o,a];return ce(t)&&i.set(t,c),c}function kc(t){return t[0]!=="$"?!0:(I(`Invalid prop name: "${t}" is a reserved property.`),!1)}function la(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ac(t,e){return la(t)===la(e)}function Nc(t,e){return H(e)?e.findIndex(n=>Ac(n,t)):j(e)&&Ac(e,t)?0:-1}function _h(t,e,n){const i=z(e),s=n.propsOptions[0];for(const r in s){let o=s[r];o!=null&&um(r,i[r],o,!ee(t,r)&&!ee(t,dn(r)))}}function um(t,e,n,i){const{type:s,required:r,validator:o}=n;if(r&&i){I('Missing required prop: "'+t+'"');return}if(!(e==null&&!n.required)){if(s!=null&&s!==!0){let a=!1;const l=H(s)?s:[s],c=[];for(let d=0;d<l.length&&!a;d++){const{valid:u,expectedType:h}=hm(e,l[d]);c.push(h||""),a=u}if(!a){I(fm(t,e,c));return}}o&&!o(e)&&I('Invalid prop: custom validator check failed for prop "'+t+'".')}}const dm=wn("String,Number,Boolean,Function,Symbol,BigInt");function hm(t,e){let n;const i=la(e);if(dm(i)){const s=typeof t;n=s===i.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else i==="Object"?n=ce(t):i==="Array"?n=H(t):i==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:i}}function fm(t,e,n){let i=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Hn).join(" | ")}`;const s=n[0],r=qa(e),o=Pc(e,s),a=Pc(e,r);return n.length===1&&Oc(s)&&!pm(s,r)&&(i+=` with value ${o}`),i+=`, got ${r} `,Oc(r)&&(i+=`with value ${a}.`),i}function Pc(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Oc(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function pm(...t){return t.some(e=>e.toLowerCase()==="boolean")}const mh=t=>t[0]==="_"||t==="$stable",al=t=>H(t)?t.map(ut):[ut(t)],gm=(t,e,n)=>{if(e._n)return e;const i=eh((...s)=>(Ie&&I(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),al(e(...s))),n);return i._c=!1,i},yh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(mh(s))continue;const r=t[s];if(j(r))e[s]=gm(s,r,i);else if(r!=null){I(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=al(r);e[s]=()=>o}}},vh=(t,e)=>{Ns(t.vnode)||I("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=al(e);t.slots.default=()=>n},_m=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z(e),ur(e,"_",n)):yh(e,t.slots={})}else t.slots={},e&&vh(t,e);ur(t.slots,Zr,1)},mm=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=he;if(i.shapeFlag&32){const a=e._;a?Ln?Te(s,e):n&&a===1?r=!1:(Te(s,e),!n&&a===1&&delete s._):(r=!e.$stable,yh(e,s)),o=e}else e&&(vh(t,e),o={default:1});if(r)for(const a in s)!mh(a)&&!(a in o)&&delete s[a]};function bh(){return{app:null,config:{isNativeTag:md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ym=0;function vm(t,e){return function(i,s=null){j(i)||(i=Object.assign({},i)),s!=null&&!ce(s)&&(I("root props passed to app.mount() must be an object."),s=null);const r=bh(),o=new Set;let a=!1;const l=r.app={_uid:ym++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Mc,get config(){return r.config},set config(c){I("app.config cannot be replaced. Modify individual options instead.")},use(c,...d){return o.has(c)?I("Plugin has already been applied to target app."):c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)?(o.add(c),c(l,...d)):I('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return r.mixins.includes(c)?I("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):r.mixins.push(c),l},component(c,d){return ua(c,r.config),d?(r.components[c]&&I(`Component "${c}" has already been registered in target app.`),r.components[c]=d,l):r.components[c]},directive(c,d){return uh(c),d?(r.directives[c]&&I(`Directive "${c}" has already been registered in target app.`),r.directives[c]=d,l):r.directives[c]},mount(c,d,u){if(a)I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=Ve(i,s);return h.appContext=r,r.reload=()=>{t(St(h),c,u)},d&&e?e(h,c):t(h,c,u),a=!0,l._container=c,c.__vue_app__=l,l._instance=h.component,y_(l,Mc),eo(h.component)||h.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,v_(l),delete l._container.__vue_app__):I("Cannot unmount an app that is not mounted.")},provide(c,d){return c in r.provides&&I(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),r.provides[c]=d,l}};return l}}function ca(t,e,n,i,s=!1){if(H(t)){t.forEach((h,g)=>ca(h,e&&(H(e)?e[g]:e),n,i,s));return}if(Xi(i)&&!s)return;const r=i.shapeFlag&4?eo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t;if(!a){I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,d=a.refs===he?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Ce(c)?(d[c]=null,ee(u,c)&&(u[c]=null)):Re(c)&&(c.value=null)),j(l))Ft(l,a,12,[o,d]);else{const h=Ce(l),g=Re(l);if(h||g){const m=()=>{if(t.f){const b=h?ee(u,l)?u[l]:d[l]:l.value;s?H(b)&&za(b,r):H(b)?b.includes(r)||b.push(r):h?(d[l]=[r],ee(u,l)&&(u[l]=d[l])):(l.value=[r],t.k&&(d[t.k]=l.value))}else h?(d[l]=o,ee(u,l)&&(u[l]=o)):g?(l.value=o,t.k&&(d[t.k]=o)):I("Invalid template ref type:",l,`(${typeof l})`)};o?(m.id=-1,qe(m,n)):m()}else I("Invalid template ref type:",l,`(${typeof l})`)}}let Bi,Zt;function Pt(t,e){t.appContext.config.performance&&_r()&&Zt.mark(`vue-${e}-${t.uid}`),I_(t,e,_r()?Zt.now():Date.now())}function Ot(t,e){if(t.appContext.config.performance&&_r()){const n=`vue-${e}-${t.uid}`,i=n+":end";Zt.mark(i),Zt.measure(`<${to(t,t.type)}> ${e}`,n,i),Zt.clearMarks(n),Zt.clearMarks(i)}C_(t,e,_r()?Zt.now():Date.now())}function _r(){return Bi!==void 0||(typeof window<"u"&&window.performance?(Bi=!0,Zt=window.performance):Bi=!1),Bi}function bm(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const qe=x_;function wm(t){return Em(t)}function Em(t,e){bm();const n=wd();n.__VUE__=!0,Qd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:h,setScopeId:g=Ye,insertStaticContent:m}=t,b=(f,p,_,w=null,v=null,T=null,N=!1,C=null,R=Ln?!1:!!p.dynamicChildren)=>{if(f===p)return;f&&!kn(f,p)&&(w=M(f),et(f,v,T,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:E,ref:L,shapeFlag:D}=p;switch(E){case Ps:k(f,p,_,w);break;case Le:P(f,p,_,w);break;case Zi:f==null?O(p,_,w,N):U(f,p,_,N);break;case Xe:ot(f,p,_,w,v,T,N,C,R);break;default:D&1?ye(f,p,_,w,v,T,N,C,R):D&6?Kt(f,p,_,w,v,T,N,C,R):D&64||D&128?E.process(f,p,_,w,v,T,N,C,R,_e):I("Invalid VNode type:",E,`(${typeof E})`)}L!=null&&v&&ca(L,f&&f.ref,T,p||f,!p)},k=(f,p,_,w)=>{if(f==null)i(p.el=a(p.children),_,w);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},P=(f,p,_,w)=>{f==null?i(p.el=l(p.children||""),_,w):p.el=f.el},O=(f,p,_,w)=>{[f.el,f.anchor]=m(f.children,p,_,w,f.el,f.anchor)},U=(f,p,_,w)=>{if(p.children!==f.children){const v=h(f.anchor);Q(f),[p.el,p.anchor]=m(p.children,_,v,w)}else p.el=f.el,p.anchor=f.anchor},F=({el:f,anchor:p},_,w)=>{let v;for(;f&&f!==p;)v=h(f),i(f,_,w),f=v;i(p,_,w)},Q=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=h(f),s(f),f=_;s(p)},ye=(f,p,_,w,v,T,N,C,R)=>{N=N||p.type==="svg",f==null?ke(p,_,w,v,T,N,C,R):le(f,p,v,T,N,C,R)},ke=(f,p,_,w,v,T,N,C)=>{let R,E;const{type:L,props:D,shapeFlag:$,transition:V,dirs:te}=f;if(R=f.el=o(f.type,T,D&&D.is,D),$&8?d(R,f.children):$&16&&re(f.children,R,null,w,v,T&&L!=="foreignObject",N,C),te&&En(f,null,w,"created"),G(R,f,f.scopeId,N,w),D){for(const de in D)de!=="value"&&!Zs(de)&&r(R,de,null,D[de],T,f.children,w,v,A);"value"in D&&r(R,"value",null,D.value),(E=D.onVnodeBeforeMount)&&mt(E,w,f)}Object.defineProperty(R,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(R,"__vueParentComponent",{value:w,enumerable:!1}),te&&En(f,null,w,"beforeMount");const fe=(!v||v&&!v.pendingBranch)&&V&&!V.persisted;fe&&V.beforeEnter(R),i(R,p,_),((E=D&&D.onVnodeMounted)||fe||te)&&qe(()=>{E&&mt(E,w,f),fe&&V.enter(R),te&&En(f,null,w,"mounted")},v)},G=(f,p,_,w,v)=>{if(_&&g(f,_),w)for(let T=0;T<w.length;T++)g(f,w[T]);if(v){let T=v.subTree;if(T.patchFlag>0&&T.patchFlag&2048&&(T=th(T.children)||T),p===T){const N=v.vnode;G(f,N,N.scopeId,N.slotScopeIds,v.parent)}}},re=(f,p,_,w,v,T,N,C,R=0)=>{for(let E=R;E<f.length;E++){const L=f[E]=C?Jt(f[E]):ut(f[E]);b(null,L,p,_,w,v,T,N,C)}},le=(f,p,_,w,v,T,N)=>{const C=p.el=f.el;let{patchFlag:R,dynamicChildren:E,dirs:L}=p;R|=f.patchFlag&16;const D=f.props||he,$=p.props||he;let V;_&&In(_,!1),(V=$.onVnodeBeforeUpdate)&&mt(V,_,p,f),L&&En(p,f,_,"beforeUpdate"),_&&In(_,!0),Ln&&(R=0,N=!1,E=null);const te=v&&p.type!=="foreignObject";if(E?(Ae(f.dynamicChildren,E,C,_,w,te,T),_&&_.type.__hmrId&&ir(f,p)):N||Ge(f,p,C,null,_,w,te,T,!1),R>0){if(R&16)ve(C,p,D,$,_,w,v);else if(R&2&&D.class!==$.class&&r(C,"class",null,$.class,v),R&4&&r(C,"style",D.style,$.style,v),R&8){const fe=p.dynamicProps;for(let de=0;de<fe.length;de++){const Se=fe[de],lt=D[Se],ti=$[Se];(ti!==lt||Se==="value")&&r(C,Se,lt,ti,v,f.children,_,w,A)}}R&1&&f.children!==p.children&&d(C,p.children)}else!N&&E==null&&ve(C,p,D,$,_,w,v);((V=$.onVnodeUpdated)||L)&&qe(()=>{V&&mt(V,_,p,f),L&&En(p,f,_,"updated")},w)},Ae=(f,p,_,w,v,T,N)=>{for(let C=0;C<p.length;C++){const R=f[C],E=p[C],L=R.el&&(R.type===Xe||!kn(R,E)||R.shapeFlag&70)?u(R.el):_;b(R,E,L,null,w,v,T,N,!0)}},ve=(f,p,_,w,v,T,N)=>{if(_!==w){if(_!==he)for(const C in _)!Zs(C)&&!(C in w)&&r(f,C,_[C],null,N,p.children,v,T,A);for(const C in w){if(Zs(C))continue;const R=w[C],E=_[C];R!==E&&C!=="value"&&r(f,C,E,R,N,p.children,v,T,A)}"value"in w&&r(f,"value",_.value,w.value)}},ot=(f,p,_,w,v,T,N,C,R)=>{const E=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:$,slotScopeIds:V}=p;(Ln||D&2048)&&(D=0,R=!1,$=null),V&&(C=C?C.concat(V):V),f==null?(i(E,_,w),i(L,_,w),re(p.children,_,L,v,T,N,C,R)):D>0&&D&64&&$&&f.dynamicChildren?(Ae(f.dynamicChildren,$,_,v,T,N,C),v&&v.type.__hmrId?ir(f,p):(p.key!=null||v&&p===v.subTree)&&ir(f,p,!0)):Ge(f,p,_,L,v,T,N,C,R)},Kt=(f,p,_,w,v,T,N,C,R)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?v.ctx.activate(p,_,w,N,R):at(p,_,w,v,T,N,R):Ne(f,p,R)},at=(f,p,_,w,v,T,N)=>{const C=f.component=xm(f,w,v);if(C.type.__hmrId&&p_(C),er(f),Pt(C,"mount"),Ns(f)&&(C.ctx.renderer=_e),Pt(C,"init"),Mm(C),Ot(C,"init"),C.asyncDep){if(v&&v.registerDep(C,Z),!f.el){const R=C.subTree=Ve(Le);P(null,R,p,_)}return}Z(C,f,p,_,v,T,N),tr(),Ot(C,"mount")},Ne=(f,p,_)=>{const w=p.component=f.component;if(N_(f,p,_))if(w.asyncDep&&!w.asyncResolved){er(p),ne(w,p,_),tr();return}else w.next=p,h_(w.update),w.update();else p.el=f.el,w.vnode=p},Z=(f,p,_,w,v,T,N)=>{const C=()=>{if(f.isMounted){let{next:L,bu:D,u:$,parent:V,vnode:te}=f,fe=L,de;er(L||f.vnode),In(f,!1),L?(L.el=te.el,ne(f,L,N)):L=te,D&&$i(D),(de=L.props&&L.props.onVnodeBeforeUpdate)&&mt(de,V,L,te),In(f,!0),Pt(f,"render");const Se=Co(f);Ot(f,"render");const lt=f.subTree;f.subTree=Se,Pt(f,"patch"),b(lt,Se,u(lt.el),M(lt),f,v,T),Ot(f,"patch"),L.el=Se.el,fe===null&&P_(f,Se.el),$&&qe($,v),(de=L.props&&L.props.onVnodeUpdated)&&qe(()=>mt(de,V,L,te),v),Jd(f),tr()}else{let L;const{el:D,props:$}=p,{bm:V,m:te,parent:fe}=f,de=Xi(p);if(In(f,!1),V&&$i(V),!de&&(L=$&&$.onVnodeBeforeMount)&&mt(L,fe,p),In(f,!0),D&&K){const Se=()=>{Pt(f,"render"),f.subTree=Co(f),Ot(f,"render"),Pt(f,"hydrate"),K(D,f.subTree,f,v,null),Ot(f,"hydrate")};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{Pt(f,"render");const Se=f.subTree=Co(f);Ot(f,"render"),Pt(f,"patch"),b(null,Se,_,w,f,v,T),Ot(f,"patch"),p.el=Se.el}if(te&&qe(te,v),!de&&(L=$&&$.onVnodeMounted)){const Se=p;qe(()=>mt(L,fe,Se),v)}(p.shapeFlag&256||fe&&Xi(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&qe(f.a,v),f.isMounted=!0,b_(f),p=_=w=null}},R=f.effect=new Ja(C,()=>Yr(E),f.scope),E=f.update=()=>R.run();E.id=f.uid,In(f,!0),R.onTrack=f.rtc?L=>$i(f.rtc,L):void 0,R.onTrigger=f.rtg?L=>$i(f.rtg,L):void 0,E.ownerInstance=f,E()},ne=(f,p,_)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,cm(f,p.props,w,_),mm(f,p.children,_),Yn(),bc(),Qn()},Ge=(f,p,_,w,v,T,N,C,R=!1)=>{const E=f&&f.children,L=f?f.shapeFlag:0,D=p.children,{patchFlag:$,shapeFlag:V}=p;if($>0){if($&128){At(E,D,_,w,v,T,N,C,R);return}else if($&256){Zn(E,D,_,w,v,T,N,C,R);return}}V&8?(L&16&&A(E,v,T),D!==E&&d(_,D)):L&16?V&16?At(E,D,_,w,v,T,N,C,R):A(E,v,T,!0):(L&8&&d(_,""),V&16&&re(D,_,w,v,T,N,C,R))},Zn=(f,p,_,w,v,T,N,C,R)=>{f=f||hi,p=p||hi;const E=f.length,L=p.length,D=Math.min(E,L);let $;for($=0;$<D;$++){const V=p[$]=R?Jt(p[$]):ut(p[$]);b(f[$],V,_,null,v,T,N,C,R)}E>L?A(f,v,T,!0,!1,D):re(p,_,w,v,T,N,C,R,D)},At=(f,p,_,w,v,T,N,C,R)=>{let E=0;const L=p.length;let D=f.length-1,$=L-1;for(;E<=D&&E<=$;){const V=f[E],te=p[E]=R?Jt(p[E]):ut(p[E]);if(kn(V,te))b(V,te,_,null,v,T,N,C,R);else break;E++}for(;E<=D&&E<=$;){const V=f[D],te=p[$]=R?Jt(p[$]):ut(p[$]);if(kn(V,te))b(V,te,_,null,v,T,N,C,R);else break;D--,$--}if(E>D){if(E<=$){const V=$+1,te=V<L?p[V].el:w;for(;E<=$;)b(null,p[E]=R?Jt(p[E]):ut(p[E]),_,te,v,T,N,C,R),E++}}else if(E>$)for(;E<=D;)et(f[E],v,T,!0),E++;else{const V=E,te=E,fe=new Map;for(E=te;E<=$;E++){const He=p[E]=R?Jt(p[E]):ut(p[E]);He.key!=null&&(fe.has(He.key)&&I("Duplicate keys found during update:",JSON.stringify(He.key),"Make sure keys are unique."),fe.set(He.key,E))}let de,Se=0;const lt=$-te+1;let ti=!1,cc=0;const Ui=new Array(lt);for(E=0;E<lt;E++)Ui[E]=0;for(E=V;E<=D;E++){const He=f[E];if(Se>=lt){et(He,v,T,!0);continue}let _t;if(He.key!=null)_t=fe.get(He.key);else for(de=te;de<=$;de++)if(Ui[de-te]===0&&kn(He,p[de])){_t=de;break}_t===void 0?et(He,v,T,!0):(Ui[_t-te]=E+1,_t>=cc?cc=_t:ti=!0,b(He,p[_t],_,null,v,T,N,C,R),Se++)}const uc=ti?Im(Ui):hi;for(de=uc.length-1,E=lt-1;E>=0;E--){const He=te+E,_t=p[He],dc=He+1<L?p[He+1].el:w;Ui[E]===0?b(null,_t,_,dc,v,T,N,C,R):ti&&(de<0||E!==uc[de]?gt(_t,_,dc,2):de--)}}},gt=(f,p,_,w,v=null)=>{const{el:T,type:N,transition:C,children:R,shapeFlag:E}=f;if(E&6){gt(f.component.subTree,p,_,w);return}if(E&128){f.suspense.move(p,_,w);return}if(E&64){N.move(f,p,_,_e);return}if(N===Xe){i(T,p,_);for(let D=0;D<R.length;D++)gt(R[D],p,_,w);i(f.anchor,p,_);return}if(N===Zi){F(f,p,_);return}if(w!==2&&E&1&&C)if(w===0)C.beforeEnter(T),i(T,p,_),qe(()=>C.enter(T),v);else{const{leave:D,delayLeave:$,afterLeave:V}=C,te=()=>i(T,p,_),fe=()=>{D(T,()=>{te(),V&&V()})};$?$(T,te,fe):fe()}else i(T,p,_)},et=(f,p,_,w=!1,v=!1)=>{const{type:T,props:N,ref:C,children:R,dynamicChildren:E,shapeFlag:L,patchFlag:D,dirs:$}=f;if(C!=null&&ca(C,null,_,f,!0),L&256){p.ctx.deactivate(f);return}const V=L&1&&$,te=!Xi(f);let fe;if(te&&(fe=N&&N.onVnodeBeforeUnmount)&&mt(fe,p,f),L&6)x(f.component,_,w);else{if(L&128){f.suspense.unmount(_,w);return}V&&En(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,_,v,_e,w):E&&(T!==Xe||D>0&&D&64)?A(E,p,_,!1,!0):(T===Xe&&D&384||!v&&L&16)&&A(R,p,_),w&&ei(f)}(te&&(fe=N&&N.onVnodeUnmounted)||V)&&qe(()=>{fe&&mt(fe,p,f),V&&En(f,null,p,"unmounted")},_)},ei=f=>{const{type:p,el:_,anchor:w,transition:v}=f;if(p===Xe){f.patchFlag>0&&f.patchFlag&2048&&v&&!v.persisted?f.children.forEach(N=>{N.type===Le?s(N.el):ei(N)}):y(_,w);return}if(p===Zi){Q(f);return}const T=()=>{s(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:C}=v,R=()=>N(_,T);C?C(f.el,T,R):R()}else T()},y=(f,p)=>{let _;for(;f!==p;)_=h(f),s(f),f=_;s(p)},x=(f,p,_)=>{f.type.__hmrId&&g_(f);const{bum:w,scope:v,update:T,subTree:N,um:C}=f;w&&$i(w),v.stop(),T&&(T.active=!1,et(N,f,p,_)),C&&qe(C,p),qe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve()),E_(f)},A=(f,p,_,w=!1,v=!1,T=0)=>{for(let N=T;N<f.length;N++)et(f[N],p,_,w,v)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ie=(f,p,_)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,_),bc(),Gd(),p._vnode=f},_e={p:b,um:et,m:gt,r:ei,mt:at,mc:re,pc:Ge,pbc:Ae,n:M,o:t};let q,K;return e&&([q,K]=e(_e)),{render:ie,hydrate:q,createApp:vm(ie,q)}}function In({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ir(t,e,n=!1){const i=t.children,s=e.children;if(H(i)&&H(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Jt(s[r]),a.el=o.el),n||ir(o,a)),a.type===Ps&&(a.el=o.el),a.type===Le&&!a.el&&(a.el=o.el)}}function Im(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Cm=t=>t.__isTeleport,Xe=Symbol("Fragment"),Ps=Symbol("Text"),Le=Symbol("Comment"),Zi=Symbol("Static"),es=[];let ht=null;function ll(t=!1){es.push(ht=t?null:[])}function Tm(){es.pop(),ht=es[es.length-1]||null}let hs=1;function xc(t){hs+=t}function wh(t){return t.dynamicChildren=hs>0?ht||hi:null,Tm(),hs>0&&ht&&ht.push(t),t}function c0(t,e,n,i,s,r){return wh(Ih(t,e,n,i,s,r,!0))}function cl(t,e,n,i,s){return wh(Ve(t,e,n,i,s,!0))}function wi(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return e.shapeFlag&6&&ai.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const Sm=(...t)=>Rm(...t),Zr="__vInternal",Eh=({key:t})=>t??null,sr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||Re(t)||j(t)?{i:Oe,r:t,k:e,f:!!n}:t:null;function Ih(t,e=null,n=null,i=0,s=null,r=t===Xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Eh(e),ref:e&&sr(e),scopeId:Jr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oe};return a?(ul(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),l.key!==l.key&&I("VNode created with invalid key (NaN). VNode type:",l.type),hs>0&&!o&&ht&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ht.push(l),l}const Ve=Sm;function Rm(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Q_)&&(t||I(`Invalid vnode type when creating vnode: ${t}.`),t=Le),wi(t)){const a=St(t,e,!0);return n&&ul(a,n),hs>0&&!r&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(kh(t)&&(t=t.__vccOpts),e){e=km(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Va(a)),ce(l)&&(Jo(l)&&!H(l)&&(l=Te({},l)),e.style=Wa(l))}const o=Ce(t)?1:O_(t)?128:Cm(t)?64:ce(t)?4:j(t)?2:0;return o&4&&Jo(t)&&(t=z(t),I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),Ih(t,e,n,i,s,o,r,!0)}function km(t){return t?Jo(t)||Zr in t?Te({},t):t:null}function St(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?Nm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Eh(a),ref:e&&e.ref?n&&s?H(s)?s.concat(sr(e)):[s,sr(e)]:sr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&H(o)?o.map(Ch):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&St(t.ssContent),ssFallback:t.ssFallback&&St(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ch(t){const e=St(t);return H(t.children)&&(e.children=t.children.map(Ch)),e}function Am(t=" ",e=0){return Ve(Ps,null,t,e)}function u0(t,e){const n=Ve(Zi,null,t);return n.staticCount=e,n}function d0(t="",e=!1){return e?(ll(),cl(Le,null,t)):Ve(Le,null,t)}function ut(t){return t==null||typeof t=="boolean"?Ve(Le):H(t)?Ve(Xe,null,t.slice()):typeof t=="object"?Jt(t):Ve(Ps,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:St(t)}function ul(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ul(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Zr in e)?e._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),i&64?(n=16,e=[Am(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Va([e.class,i.class]));else if(s==="style")e.style=Wa([e.style,i.style]);else if(Rs(s)){const r=e[s],o=i[s];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function mt(t,e,n,i=null){st(t,e,7,[n,i])}const Pm=bh();let Om=0;function xm(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Pm,r={uid:Om++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gh(i,s),emitsOptions:Zd(i,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:i.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=X_(r),r.root=e?e.root:r,r.emit=S_.bind(null,r),t.ce&&t.ce(r),r}let Ie=null;const dl=()=>Ie||Oe,Ei=t=>{Ie=t,t.scope.on()},Un=()=>{Ie&&Ie.scope.off(),Ie=null},Dm=wn("slot,component");function ua(t,e){const n=e.isNativeTag||md;(Dm(t)||n(t))&&I("Do not use built-in or reserved HTML elements as component id: "+t)}function Th(t){return t.vnode.shapeFlag&4}let fs=!1;function Mm(t,e=!1){fs=e;const{props:n,children:i}=t.vnode,s=Th(t);am(t,n,s,e),_m(t,i);const r=s?Lm(t,e):void 0;return fs=!1,r}function Lm(t,e){var n;const i=t.type;{if(i.name&&ua(i.name,t.appContext.config),i.components){const r=Object.keys(i.components);for(let o=0;o<r.length;o++)ua(r[o],t.appContext.config)}if(i.directives){const r=Object.keys(i.directives);for(let o=0;o<r.length;o++)uh(r[o])}i.compilerOptions&&Sh()&&I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Ld(new Proxy(t.ctx,hh)),Z_(t);const{setup:s}=i;if(s){const r=t.setupContext=s.length>1?Um(t):null;Ei(t),Yn();const o=Ft(s,t,0,[li(t.props),r]);if(Qn(),Un(),Ga(o)){if(o.then(Un,Un),e)return o.then(a=>{Dc(t,a,e)}).catch(a=>{qr(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=i.name)!==null&&n!==void 0?n:"Anonymous";I(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Dc(t,o,e)}else Rh(t,e)}function Dc(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)?(wi(e)&&I("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Bd(e),em(t)):e!==void 0&&I(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Rh(t,n)}let da;const Sh=()=>!da;function Rh(t,e,n){const i=t.type;if(!t.render){if(!e&&da&&!i.render){const s=i.template||ol(t).template;if(s){Pt(t,"compile");const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Te(Te({isCustomElement:r,delimiters:a},o),l);i.render=da(s,c),Ot(t,"compile")}}t.render=i.render||Ye}Ei(t),Yn(),nm(t),Qn(),Un(),!i.render&&t.render===Ye&&!e&&(i.template?I('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):I("Component is missing template or render function."))}function Fm(t){return new Proxy(t.attrs,{get(e,n){return pr(),Je(t,"get","$attrs"),e[n]},set(){return I("setupContext.attrs is readonly."),!1},deleteProperty(){return I("setupContext.attrs is readonly."),!1}})}function Um(t){const e=i=>{if(t.exposed&&I("expose() should be called only once per setup()."),i!=null){let s=typeof i;s==="object"&&(H(i)?s="array":Re(i)&&(s="ref")),s!=="object"&&I(`expose() should be passed a plain object, received ${s}.`)}t.exposed=i||{}};let n;return Object.freeze({get attrs(){return n||(n=Fm(t))},get slots(){return li(t.slots)},get emit(){return(i,...s)=>t.emit(i,...s)},expose:e})}function eo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bd(Ld(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fn)return Fn[n](t)},has(e,n){return n in e||n in Fn}}))}const $m=/(?:^|[-_])(\w)/g,Bm=t=>t.replace($m,e=>e.toUpperCase()).replace(/[-_]/g,"");function hl(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function to(t,e,n=!1){let i=hl(e);if(!i&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&t&&t.parent){const s=r=>{for(const o in r)if(r[o]===e)return o};i=s(t.components||t.parent.type.components)||s(t.appContext.components)}return i?Bm(i):n?"App":"Anonymous"}function kh(t){return j(t)&&"__vccOpts"in t}const nt=(t,e)=>s_(t,e,fs);function Ah(t,e,n){const i=arguments.length;return i===2?ce(e)&&!H(e)?wi(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&wi(n)&&(n=[n]),Ve(t,e,n))}const Hm=Symbol("ssrContext"),jm=()=>{{const t=Ut(Hm);return t||I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Ro(t){return!!(t&&t.__v_isShallow)}function Wm(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},i={style:"color:#9d288c"},s={header(u){return ce(u)?u.__isVue?["div",t,"VueInstance"]:Re(u)?["div",{},["span",t,d(u)],"<",a(u.value),">"]:Dn(u)?["div",{},["span",t,Ro(u)?"ShallowReactive":"Reactive"],"<",a(u),`>${fn(u)?" (readonly)":""}`]:fn(u)?["div",{},["span",t,Ro(u)?"ShallowReadonly":"Readonly"],"<",a(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...r(u.$)]}};function r(u){const h=[];u.type.props&&u.props&&h.push(o("props",z(u.props))),u.setupState!==he&&h.push(o("setup",u.setupState)),u.data!==he&&h.push(o("data",z(u.data)));const g=l(u,"computed");g&&h.push(o("computed",g));const m=l(u,"inject");return m&&h.push(o("injected",m)),h.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),h}function o(u,h){return h=Te({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(g=>["div",{},["span",i,g+": "],a(h[g],!1)])]]:["span",{}]}function a(u,h=!0){return typeof u=="number"?["span",e,u]:typeof u=="string"?["span",n,JSON.stringify(u)]:typeof u=="boolean"?["span",i,u]:ce(u)?["object",{object:h?z(u):u}]:["span",n,String(u)]}function l(u,h){const g=u.type;if(j(g))return;const m={};for(const b in u.ctx)c(g,b,h)&&(m[b]=u.ctx[b]);return m}function c(u,h,g){const m=u[g];if(H(m)&&m.includes(h)||ce(m)&&h in m||u.extends&&c(u.extends,h,g)||u.mixins&&u.mixins.some(b=>c(b,h,g)))return!0}function d(u){return Ro(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const Mc="3.2.47",Vm="http://www.w3.org/2000/svg",An=typeof document<"u"?document:null,Lc=An&&An.createElement("template"),zm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?An.createElementNS(Vm,t):An.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Lc.innerHTML=i?`<svg>${t}</svg>`:t;const a=Lc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Km(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Gm(t,e,n){const i=t.style,s=Ce(n);if(n&&!s){if(e&&!Ce(e))for(const r in e)n[r]==null&&ha(i,r,"");for(const r in n)ha(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const qm=/[^\\];\s*$/,Fc=/\s*!important$/;function ha(t,e,n){if(H(n))n.forEach(i=>ha(t,e,i));else if(n==null&&(n=""),qm.test(n)&&I(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const i=Ym(t,e);Fc.test(n)?t.setProperty(dn(i),n.replace(Fc,""),"important"):t[i]=n}}const Uc=["Webkit","Moz","ms"],ko={};function Ym(t,e){const n=ko[e];if(n)return n;let i=Tt(e);if(i!=="filter"&&i in t)return ko[e]=i;i=Hn(i);for(let s=0;s<Uc.length;s++){const r=Uc[s]+i;if(r in t)return ko[e]=r}return e}const $c="http://www.w3.org/1999/xlink";function Qm(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($c,e.slice(6,e.length)):t.setAttributeNS($c,e,n);else{const r=fg(e);n==null||r&&!gd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Jm(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=gd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch(l){a||I(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`,l)}a&&t.removeAttribute(e)}function Xm(t,e,n,i){t.addEventListener(e,n,i)}function Zm(t,e,n,i){t.removeEventListener(e,n,i)}function ey(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=ty(e);if(i){const c=r[e]=sy(i,s);Xm(t,a,c,l)}else o&&(Zm(t,a,o,l),r[e]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function ty(t){let e;if(Bc.test(t)){e={};let i;for(;i=t.match(Bc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dn(t.slice(2)),e]}let Ao=0;const ny=Promise.resolve(),iy=()=>Ao||(ny.then(()=>Ao=0),Ao=Date.now());function sy(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;st(ry(i,n.value),e,5,[i])};return n.value=t,n.attached=iy(),n}function ry(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Hc=/^on[a-z]/,oy=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?Km(t,i,s):e==="style"?Gm(t,n,i):Rs(e)?cr(e)||ey(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ay(t,e,i,s))?Jm(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Qm(t,e,i,s))};function ay(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Hc.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hc.test(e)&&Ce(n)?!1:e in t}const ly={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};U_.props;const h0={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Hi(t,!0),i.enter(t)):i.leave(t,()=>{Hi(t,!1)}):Hi(t,e))},beforeUnmount(t,{value:e}){Hi(t,e)}};function Hi(t,e){t.style.display=e?t._vod:"none"}const cy=Te({patchProp:oy},zm);let jc;function uy(){return jc||(jc=wm(cy))}const dy=(...t)=>{const e=uy().createApp(...t);hy(e),fy(e);const{mount:n}=e;return e.mount=i=>{const s=py(i);if(!s)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hy(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>ug(e)||dg(e),writable:!1})}function fy(t){if(Sh()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){I("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return I(i),n},set(){I(i)}})}}function py(t){if(Ce(t)){const e=document.querySelector(t);return e||I(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function gy(){Wm()}gy();const _y=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},my={};function yy(t,e){const n=Y_("router-view");return ll(),cl(n)}const vy=_y(my,[["render",yy],["__file","C:/Users/Owner/Desktop/geov3/geohunt-vue/src/App.vue"]]);function by(){return Nh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Nh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const wy=typeof Proxy=="function",Ey="devtools-plugin:setup",Iy="plugin:settings:set";let ni,fa;function Cy(){var t;return ni!==void 0||(typeof window<"u"&&window.performance?(ni=!0,fa=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ni=!0,fa=global.perf_hooks.performance):ni=!1),ni}function Ty(){return Cy()?fa.now():Date.now()}class Sy{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return Ty()}},n&&n.on(Iy,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ry(t,e){const n=t,i=Nh(),s=by(),r=wy&&n.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(Ey,t,e);else{const o=r?new Sy(n,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xt=typeof window<"u";function ky(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function No(t,e){const n={};for(const i in e){const s=e[i];n[i]=Ze(s)?s.map(t):t(s)}return n}const ts=()=>{},Ze=Array.isArray;function se(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const Ay=/\/$/,Ny=t=>t.replace(Ay,"");function Po(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=xy(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Py(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Vc(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&pn(e.matched[i],n.matched[s])&&Ph(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ph(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Oy(t[n],e[n]))return!1;return!0}function Oy(t,e){return Ze(t)?zc(t,e):Ze(e)?zc(e,t):t===e}function zc(t,e){return Ze(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function xy(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var ps;(function(t){t.pop="pop",t.push="push"})(ps||(ps={}));var ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ns||(ns={}));function Dy(t){if(!t)if(xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ny(t)}const My=/^[^#]+#/;function Ly(t,e){return t.replace(My,"#")+e}function Fy(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const no=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uy(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!i||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(i&&r){se(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{se(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){se(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=Fy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Kc(t,e){return(history.state?history.state.position-e:-1)+t}const pa=new Map;function $y(t,e){pa.set(t,e)}function By(t){const e=pa.get(t);return pa.delete(t),e}let Hy=()=>location.protocol+"//"+location.host;function Oh(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Wc(l,"")}return Wc(n,t)+i+s}function jy(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const g=Oh(t,location),m=n.value,b=e.value;let k=0;if(h){if(n.value=g,e.value=h,o&&o===m){o=null;return}k=b?h.position-b.position:0}else i(g);s.forEach(P=>{P(n.value,m,{delta:k,type:ps.pop,direction:k?k>0?ns.forward:ns.back:ns.unknown})})};function l(){o=n.value}function c(h){s.push(h);const g=()=>{const m=s.indexOf(h);m>-1&&s.splice(m,1)};return r.push(g),g}function d(){const{history:h}=window;h.state&&h.replaceState(ae({},h.state,{scroll:no()}),"")}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:c,destroy:u}}function Gc(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?no():null}}function Wy(t){const{history:e,location:n}=window,i={value:Oh(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const u=t.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:Hy()+t+l;try{e[d?"replaceState":"pushState"](c,"",h),s.value=c}catch(g){se("Error with push/replace State",g),n[d?"replace":"assign"](h)}}function o(l,c){const d=ae({},e.state,Gc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,d,!0),i.value=l}function a(l,c){const d=ae({},s.value,e.state,{forward:l,scroll:no()});e.state||se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const u=ae({},Gc(i.value,l,null),{position:d.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Vy(t){t=Dy(t);const e=Wy(t),n=jy(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ae({location:"",base:t,go:i,createHref:Ly.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zy(t){return typeof t=="string"||t&&typeof t=="object"}function xh(t){return typeof t=="string"||typeof t=="symbol"}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dh=Symbol("navigation failure");var qc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qc||(qc={}));const Ky={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${qy(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Ii(t,e){return ae(new Error(Ky[t](e)),{type:t,[Dh]:!0},e)}function Nt(t,e){return t instanceof Error&&Dh in t&&(e==null||!!(t.type&e))}const Gy=["params","query","hash"];function qy(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of Gy)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Yc="[^/]+?",Yy={sensitive:!1,strict:!1,start:!0,end:!0},Qy=/[.+*?^${}()[\]/\\]/g;function Jy(t,e){const n=ae({},Yy,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const d=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const h=c[u];let g=40+(n.sensitive?.25:0);if(h.type===0)u||(s+="/"),s+=h.value.replace(Qy,"\\$&"),g+=40;else if(h.type===1){const{value:m,repeatable:b,optional:k,regexp:P}=h;r.push({name:m,repeatable:b,optional:k});const O=P||Yc;if(O!==Yc){g+=10;try{new RegExp(`(${O})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+F.message)}}let U=b?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;u||(U=k&&c.length<2?`(?:/${U})`:"/"+U),k&&(U+="?"),s+=U,g+=20,k&&(g+=-8),b&&(g+=-20),O===".*"&&(g+=-50)}d.push(g)}i.push(d)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const d=c.match(o),u={};if(!d)return null;for(let h=1;h<d.length;h++){const g=d[h]||"",m=r[h-1];u[m.name]=g&&m.repeatable?g.split("/"):g}return u}function l(c){let d="",u=!1;for(const h of t){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const g of h)if(g.type===0)d+=g.value;else if(g.type===1){const{value:m,repeatable:b,optional:k}=g,P=m in c?c[m]:"";if(Ze(P)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=Ze(P)?P.join("/"):P;if(!O)if(k)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);d+=O}}return d||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Xy(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Zy(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Xy(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Qc(i))return 1;if(Qc(s))return-1}return s.length-i.length}function Qc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ev={type:0,value:""},tv=/[a-zA-Z0-9_]/;function nv(t){if(!t)return[[]];if(t==="/")return[[ev]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",d="";function u(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:tv.test(l)?h():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function iv(t,e,n){const i=Jy(nv(t.path),n);{const r=new Set;for(const o of i.keys)r.has(o.name)&&se(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(o.name)}const s=ae(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sv(t,e){const n=[],i=new Map;e=Zc({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,u,h){const g=!h,m=rv(d);cv(m,u),m.aliasOf=h&&h.record;const b=Zc(e,d),k=[m];if("alias"in d){const U=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of U)k.push(ae({},m,{components:h?h.record.components:m.components,path:F,aliasOf:h?h.record:m}))}let P,O;for(const U of k){const{path:F}=U;if(u&&F[0]!=="/"){const Q=u.record.path,ye=Q[Q.length-1]==="/"?"":"/";U.path=u.record.path+(F&&ye+F)}if(U.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=iv(U,u,b),u&&F[0]==="/"&&uv(P,u),h?(h.alias.push(P),lv(h,P)):(O=O||P,O!==P&&O.alias.push(P),g&&d.name&&!Xc(P)&&o(d.name)),m.children){const Q=m.children;for(let ye=0;ye<Q.length;ye++)r(Q[ye],P,h&&h.children[ye])}h=h||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&l(P)}return O?()=>{o(O)}:ts}function o(d){if(xh(d)){const u=i.get(d);u&&(i.delete(d),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(d);u>-1&&(n.splice(u,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){let u=0;for(;u<n.length&&Zy(d,n[u])>=0&&(d.record.path!==n[u].record.path||!Mh(d,n[u]));)u++;n.splice(u,0,d),d.record.name&&!Xc(d)&&i.set(d.record.name,d)}function c(d,u){let h,g={},m,b;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Ii(1,{location:d});{const O=Object.keys(d.params||{}).filter(U=>!h.keys.find(F=>F.name===U));O.length&&se(`Discarded invalid param(s) "${O.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=h.record.name,g=ae(Jc(u.params,h.keys.filter(O=>!O.optional).map(O=>O.name)),d.params&&Jc(d.params,h.keys.map(O=>O.name))),m=h.stringify(g)}else if("path"in d)m=d.path,m.startsWith("/")||se(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=n.find(O=>O.re.test(m)),h&&(g=h.parse(m),b=h.record.name);else{if(h=u.name?i.get(u.name):n.find(O=>O.re.test(u.path)),!h)throw Ii(1,{location:d,currentLocation:u});b=h.record.name,g=ae({},u.params,d.params),m=h.stringify(g)}const k=[];let P=h;for(;P;)k.unshift(P.record),P=P.parent;return{name:b,path:m,params:g,matched:k,meta:av(k)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Jc(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function rv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ov(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ov(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Xc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function av(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Zc(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function ga(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function lv(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(ga.bind(null,n)))return se(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(ga.bind(null,n)))return se(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function cv(t,e){e&&e.record.name&&!t.name&&!t.path&&se(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function uv(t,e){for(const n of e.keys)if(!t.keys.find(ga.bind(null,n)))return se(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Mh(t,e){return e.children.some(n=>n===t||Mh(t,n))}const Lh=/#/g,dv=/&/g,hv=/\//g,fv=/=/g,pv=/\?/g,Fh=/\+/g,gv=/%5B/g,_v=/%5D/g,Uh=/%5E/g,mv=/%60/g,$h=/%7B/g,yv=/%7C/g,Bh=/%7D/g,vv=/%20/g;function fl(t){return encodeURI(""+t).replace(yv,"|").replace(gv,"[").replace(_v,"]")}function bv(t){return fl(t).replace($h,"{").replace(Bh,"}").replace(Uh,"^")}function _a(t){return fl(t).replace(Fh,"%2B").replace(vv,"+").replace(Lh,"%23").replace(dv,"%26").replace(mv,"`").replace($h,"{").replace(Bh,"}").replace(Uh,"^")}function wv(t){return _a(t).replace(fv,"%3D")}function Ev(t){return fl(t).replace(Lh,"%23").replace(pv,"%3F")}function Iv(t){return t==null?"":Ev(t).replace(hv,"%2F")}function gs(t){try{return decodeURIComponent(""+t)}catch{se(`Error decoding "${t}". Using original value`)}return""+t}function Cv(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Fh," "),o=r.indexOf("="),a=gs(o<0?r:r.slice(0,o)),l=o<0?null:gs(r.slice(o+1));if(a in e){let c=e[a];Ze(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function eu(t){let e="";for(let n in t){const i=t[n];if(n=wv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ze(i)?i.map(r=>r&&_a(r)):[i&&_a(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Tv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Ze(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Sv=Symbol("router view location matched"),tu=Symbol("router view depth"),pl=Symbol("router"),Hh=Symbol("route location"),ma=Symbol("router view location");function ji(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xt(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(Ii(4,{from:n,to:e})):u instanceof Error?a(u):zy(u)?a(Ii(2,{from:e,to:u})):(r&&i.enterCallbacks[s]===r&&typeof u=="function"&&r.push(u),o())},c=t.call(i&&i.instances[s],e,n,Rv(l,e,n));let d=Promise.resolve(c);if(t.length<3&&(d=d.then(l)),t.length>2){const u=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)d=d.then(h=>l._called?h:(se(u),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){se(u),a(new Error("Invalid navigation guard"));return}}d.catch(u=>a(u))})}function Rv(t,e,n){let i=0;return function(){i++===1&&se(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,i===1&&t.apply(null,arguments)}}function Oo(t,e,n,i){const s=[];for(const r of t){!r.components&&!r.children.length&&se(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const o in r.components){let a=r.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw se(`Component "${o}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){se(`Component "${o}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,se(`Component "${o}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(kv(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Xt(c,n,i,r,o))}else{let l=a();"catch"in l||(se(`Component "${o}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const d=ky(c)?c.default:c;r.components[o]=d;const h=(d.__vccOpts||d)[e];return h&&Xt(h,n,i,r,o)()}))}}}return s}function kv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nu(t){const e=Ut(pl),n=Ut(Hh),i=nt(()=>e.resolve(fi(t.to))),s=nt(()=>{const{matched:l}=i.value,{length:c}=l,d=l[c-1],u=n.matched;if(!d||!u.length)return-1;const h=u.findIndex(pn.bind(null,d));if(h>-1)return h;const g=iu(l[c-2]);return c>1&&iu(d)===g&&u[u.length-1].path!==g?u.findIndex(pn.bind(null,l[c-2])):h}),r=nt(()=>s.value>-1&&Ov(n.params,i.value.params)),o=nt(()=>s.value>-1&&s.value===n.matched.length-1&&Ph(n.params,i.value.params));function a(l={}){return Pv(l)?e[fi(t.replace)?"replace":"push"](fi(t.to)).catch(ts):Promise.resolve()}if(xt){const l=dl();if(l){const c={route:i.value,isActive:r.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),D_(()=>{c.route=i.value,c.isActive=r.value,c.isExactActive=o.value},{flush:"post"})}}return{route:i,href:nt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Av=rh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nu,setup(t,{slots:e}){const n=ks(nu(t)),{options:i}=Ut(pl),s=nt(()=>({[su(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[su(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ah("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Nv=Av;function Pv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ov(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Ze(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function iu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const su=(t,e,n)=>t??e??n,xv=rh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){Mv();const i=Ut(ma),s=nt(()=>t.route||i.value),r=Ut(tu,0),o=nt(()=>{let c=fi(r);const{matched:d}=s.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=nt(()=>s.value.matched[o.value]);nr(tu,nt(()=>o.value+1)),nr(Sv,a),nr(ma,s);const l=Xg();return Ji(()=>[l.value,a.value,t.name],([c,d,u],[h,g,m])=>{d&&(d.instances[u]=c,g&&g!==d&&c&&c===h&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),c&&d&&(!g||!pn(d,g)||!h)&&(d.enterCallbacks[u]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=s.value,d=t.name,u=a.value,h=u&&u.components[d];if(!h)return ru(n.default,{Component:h,route:c});const g=u.props[d],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,k=Ah(h,ae({},m,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[d]=null)},ref:l}));if(xt&&k.ref){const P={depth:o.value,name:u.name,path:u.path,meta:u.meta};(Ze(k.ref)?k.ref.map(U=>U.i):[k.ref.i]).forEach(U=>{U.__vrv_devtools=P})}return ru(n.default,{Component:k,route:c})||k}}});function ru(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dv=xv;function Mv(){const t=dl(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Wi(t,e){const n=ae({},t,{matched:t.matched.map(i=>Vv(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Ys(t){return{_custom:{display:t}}}let Lv=0;function Fv(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=Lv++;Ry({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((d,u)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Wi(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:d,componentInstance:u})=>{if(u.__vrv_devtools){const h=u.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:jh})}Ze(u.__vrl_devtools)&&(u.__devtoolsApi=s,u.__vrl_devtools.forEach(h=>{let g=zh,m="";h.isExactActive?(g=Vh,m="This is exactly active"):h.isActive&&(g=Wh,m="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:g})}))}),Ji(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const r="router:navigations:"+i;s.addTimelineLayer({id:r,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError((d,u)=>{s.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:s.now(),data:{error:d},groupId:u.meta.__navigationId}})});let o=0;e.beforeEach((d,u)=>{const h={guard:Ys("beforeEach"),from:Wi(u,"Current Location during this navigation"),to:Wi(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:r,event:{time:s.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),e.afterEach((d,u,h)=>{const g={guard:Ys("afterEach")};h?(g.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},g.status=Ys("❌")):g.status=Ys("✅"),g.from=Wi(u,"Current Location during this navigation"),g.to=Wi(d,"Target location"),s.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:s.now(),data:g,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const a="router-inspector:"+i;s.addInspector({id:a,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const d=c;let u=n.getRoutes().filter(h=>!h.parent);u.forEach(qh),d.filter&&(u=u.filter(h=>ya(h,d.filter.toLowerCase()))),u.forEach(h=>Gh(h,e.currentRoute.value)),d.rootNodes=u.map(Kh)}let c;s.on.getInspectorTree(d=>{c=d,d.app===t&&d.inspectorId===a&&l()}),s.on.getInspectorState(d=>{if(d.app===t&&d.inspectorId===a){const h=n.getRoutes().find(g=>g.record.__vd_id===d.nodeId);h&&(d.state={options:$v(h)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function Uv(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function $v(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(i=>`${i.name}${Uv(i)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(i=>i.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const jh=15485081,Wh=2450411,Vh=8702998,Bv=2282478,zh=16486972,Hv=6710886;function Kh(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:Bv}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:zh}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:jh}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Vh}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Wh}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Hv});let i=n.__vd_id;return i==null&&(i=String(jv++),n.__vd_id=i),{id:i,label:n.path,tags:e,children:t.children.map(Kh)}}let jv=0;const Wv=/^\/(.*)\/([a-z]*)$/;function Gh(t,e){const n=e.matched.length&&pn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(i=>pn(i,t.record))),t.children.forEach(i=>Gh(i,e))}function qh(t){t.__vd_match=!1,t.children.forEach(qh)}function ya(t,e){const n=String(t.re).match(Wv);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>ya(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),r=gs(s);return!e.startsWith("/")&&(r.includes(e)||s.includes(e))||r.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>ya(o,e))}function Vv(t,e){const n={};for(const i in t)e.includes(i)||(n[i]=t[i]);return n}function zv(t){const e=sv(t.routes,t),n=t.parseQuery||Cv,i=t.stringifyQuery||eu,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=ji(),o=ji(),a=ji(),l=Zg(qt);let c=qt;xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=No.bind(null,y=>""+y),u=No.bind(null,Iv),h=No.bind(null,gs);function g(y,x){let A,M;return xh(y)?(A=e.getRecordMatcher(y),M=x):M=y,e.addRoute(M,A)}function m(y){const x=e.getRecordMatcher(y);x?e.removeRoute(x):se(`Cannot remove non-existent route "${String(y)}"`)}function b(){return e.getRoutes().map(y=>y.record)}function k(y){return!!e.getRecordMatcher(y)}function P(y,x){if(x=ae({},x||l.value),typeof y=="string"){const K=Po(n,y,x.path),f=e.resolve({path:K.path},x),p=s.createHref(K.fullPath);return p.startsWith("//")?se(`Location "${y}" resolved to "${p}". A resolved location cannot start with multiple slashes.`):f.matched.length||se(`No match found for location with path "${y}"`),ae(K,f,{params:h(f.params),hash:gs(K.hash),redirectedFrom:void 0,href:p})}let A;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&se(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),A=ae({},y,{path:Po(n,y.path,x.path).path});else{const K=ae({},y.params);for(const f in K)K[f]==null&&delete K[f];A=ae({},y,{params:u(y.params)}),x.params=u(x.params)}const M=e.resolve(A,x),ie=y.hash||"";ie&&!ie.startsWith("#")&&se(`A \`hash\` should always start with the character "#". Replace "${ie}" with "#${ie}".`),M.params=d(h(M.params));const _e=Py(i,ae({},y,{hash:bv(ie),path:M.path})),q=s.createHref(_e);return q.startsWith("//")?se(`Location "${y}" resolved to "${q}". A resolved location cannot start with multiple slashes.`):M.matched.length||se(`No match found for location with path "${"path"in y?y.path:y}"`),ae({fullPath:_e,hash:ie,query:i===eu?Tv(y.query):y.query||{}},M,{redirectedFrom:void 0,href:q})}function O(y){return typeof y=="string"?Po(n,y,l.value.path):ae({},y)}function U(y,x){if(c!==y)return Ii(8,{from:x,to:y})}function F(y){return ke(y)}function Q(y){return F(ae(O(y),{replace:!0}))}function ye(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let M=typeof A=="function"?A(y):A;if(typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=O(M):{path:M},M.params={}),!("path"in M)&&!("name"in M))throw se(`Invalid redirect found:
${JSON.stringify(M,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ae({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function ke(y,x){const A=c=P(y),M=l.value,ie=y.state,_e=y.force,q=y.replace===!0,K=ye(A);if(K)return ke(ae(O(K),{state:typeof K=="object"?ae({},ie,K.state):ie,force:_e,replace:q}),x||A);const f=A;f.redirectedFrom=x;let p;return!_e&&Vc(i,M,A)&&(p=Ii(16,{to:f,from:M}),Zn(M,M,!0,!1)),(p?Promise.resolve(p):re(f,M)).catch(_=>Nt(_)?Nt(_,2)?_:Ge(_):Z(_,f,M)).then(_=>{if(_){if(Nt(_,2))return Vc(i,P(_.to),f)&&x&&(x._count=x._count?x._count+1:1)>10?(se(`Detected an infinite redirection in a navigation guard when going from "${M.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):ke(ae({replace:q},O(_.to),{state:typeof _.to=="object"?ae({},ie,_.to.state):ie,force:_e}),x||f)}else _=Ae(f,M,!0,q,ie);return le(f,M,_),_})}function G(y,x){const A=U(y,x);return A?Promise.reject(A):Promise.resolve()}function re(y,x){let A;const[M,ie,_e]=Kv(y,x);A=Oo(M.reverse(),"beforeRouteLeave",y,x);for(const K of M)K.leaveGuards.forEach(f=>{A.push(Xt(f,y,x))});const q=G.bind(null,y,x);return A.push(q),ii(A).then(()=>{A=[];for(const K of r.list())A.push(Xt(K,y,x));return A.push(q),ii(A)}).then(()=>{A=Oo(ie,"beforeRouteUpdate",y,x);for(const K of ie)K.updateGuards.forEach(f=>{A.push(Xt(f,y,x))});return A.push(q),ii(A)}).then(()=>{A=[];for(const K of y.matched)if(K.beforeEnter&&!x.matched.includes(K))if(Ze(K.beforeEnter))for(const f of K.beforeEnter)A.push(Xt(f,y,x));else A.push(Xt(K.beforeEnter,y,x));return A.push(q),ii(A)}).then(()=>(y.matched.forEach(K=>K.enterCallbacks={}),A=Oo(_e,"beforeRouteEnter",y,x),A.push(q),ii(A))).then(()=>{A=[];for(const K of o.list())A.push(Xt(K,y,x));return A.push(q),ii(A)}).catch(K=>Nt(K,8)?K:Promise.reject(K))}function le(y,x,A){for(const M of a.list())M(y,x,A)}function Ae(y,x,A,M,ie){const _e=U(y,x);if(_e)return _e;const q=x===qt,K=xt?history.state:{};A&&(M||q?s.replace(y.fullPath,ae({scroll:q&&K&&K.scroll},ie)):s.push(y.fullPath,ie)),l.value=y,Zn(y,x,A,q),Ge()}let ve;function ot(){ve||(ve=s.listen((y,x,A)=>{if(!ei.listening)return;const M=P(y),ie=ye(M);if(ie){ke(ae(ie,{replace:!0}),M).catch(ts);return}c=M;const _e=l.value;xt&&$y(Kc(_e.fullPath,A.delta),no()),re(M,_e).catch(q=>Nt(q,12)?q:Nt(q,2)?(ke(q.to,M).then(K=>{Nt(K,20)&&!A.delta&&A.type===ps.pop&&s.go(-1,!1)}).catch(ts),Promise.reject()):(A.delta&&s.go(-A.delta,!1),Z(q,M,_e))).then(q=>{q=q||Ae(M,_e,!1),q&&(A.delta&&!Nt(q,8)?s.go(-A.delta,!1):A.type===ps.pop&&Nt(q,20)&&s.go(-1,!1)),le(M,_e,q)}).catch(ts)}))}let Kt=ji(),at=ji(),Ne;function Z(y,x,A){Ge(y);const M=at.list();return M.length?M.forEach(ie=>ie(y,x,A)):(se("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function ne(){return Ne&&l.value!==qt?Promise.resolve():new Promise((y,x)=>{Kt.add([y,x])})}function Ge(y){return Ne||(Ne=!y,ot(),Kt.list().forEach(([x,A])=>y?A(y):x()),Kt.reset()),y}function Zn(y,x,A,M){const{scrollBehavior:ie}=t;if(!xt||!ie)return Promise.resolve();const _e=!A&&By(Kc(y.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return Vd().then(()=>ie(y,x,_e)).then(q=>q&&Uy(q)).catch(q=>Z(q,y,x))}const At=y=>s.go(y);let gt;const et=new Set,ei={currentRoute:l,listening:!0,addRoute:g,removeRoute:m,hasRoute:k,getRoutes:b,resolve:P,options:t,push:F,replace:Q,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:at.add,isReady:ne,install(y){const x=this;y.component("RouterLink",Nv),y.component("RouterView",Dv),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>fi(l)}),xt&&!gt&&l.value===qt&&(gt=!0,F(s.location).catch(ie=>{se("Unexpected error when starting the router:",ie)}));const A={};for(const ie in qt)A[ie]=nt(()=>l.value[ie]);y.provide(pl,x),y.provide(Hh,ks(A)),y.provide(ma,l);const M=y.unmount;et.add(y),y.unmount=function(){et.delete(y),et.size<1&&(c=qt,ve&&ve(),ve=null,l.value=qt,gt=!1,Ne=!1),M()},xt&&Fv(y,x,e)}};return ei}function ii(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Kv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>pn(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>pn(c,l))||s.push(l))}return[n,i,s]}const Gv="modulepreload",qv=function(t){return"/"+t},ou={},si=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=qv(r),r in ou)return;ou[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let d=s.length-1;d>=0;d--){const u=s[d];if(u.href===r&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Gv,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Yv=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function ri(t){return()=>Yv(Object.assign({"../pages/Create.vue":()=>si(()=>import("./Create-06da597e.js"),["assets/Create-06da597e.js","assets/create-7793215e.js","assets/global-867567d1.js","assets/icons-8e0d5636.js","assets/settings-dade97d7.js","assets/Create-cb9dd6b4.css"]),"../pages/Game.vue":()=>si(()=>import("./Game-56454b62.js"),["assets/Game-56454b62.js","assets/global-867567d1.js","assets/settings-dade97d7.js","assets/Game-a16661e4.css"]),"../pages/Home.vue":()=>si(()=>import("./Home-a1fc1ccf.js"),["assets/Home-a1fc1ccf.js","assets/Home-66f714b2.css"]),"../pages/Info.vue":()=>si(()=>import("./Info-b2f0e4d5.js"),["assets/Info-b2f0e4d5.js","assets/Info-71e655eb.css"]),"../pages/Lobby.vue":()=>si(()=>import("./Lobby-ca9abf68.js"),["assets/Lobby-ca9abf68.js","assets/global-867567d1.js","assets/icons-8e0d5636.js","assets/Lobby-5e032db4.css"]),"../pages/Share.vue":()=>si(()=>import("./Share-6feaf39d.js"),["assets/Share-6feaf39d.js","assets/create-7793215e.js","assets/global-867567d1.js","assets/icons-8e0d5636.js","assets/Share-7bf530dd.css"])}),`../pages/${t}.vue`)}const Qv=[{path:"/",component:ri("Home")},{path:"/info",component:ri("Info")},{path:"/create",component:ri("Create")},{path:"/lobby",component:ri("Lobby")},{path:"/game",component:ri("Game")},{path:"/sharelink/:lobbyID",component:ri("Share")}];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Oi(e)},Oi=function(t){return new Error("Firebase Database ("+Yh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),i.push(n[d],n[u],n[h],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Xv;const h=r<<2|a>>4;if(i.push(h),c!==64){const g=a<<4&240|c>>2;if(i.push(g),u!==64){const m=c<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jh=function(t){const e=Qh(t);return gl.encodeByteArray(e,!0)},mr=function(t){return Jh(t).replace(/\./g,"")},yr=function(t){try{return gl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){return Xh(void 0,t)}function Xh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eb(n)||(t[n]=Xh(t[n],e[n]));return t}function eb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=()=>tb().__FIREBASE_DEFAULTS__,ib=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yr(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return nb()||ib()||sb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zh=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ef=t=>{const e=Zh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},rb=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},tf=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mr(JSON.stringify(n)),mr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ml(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function ab(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lb(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sf(){return Yh.NODE_ADMIN===!0}function cb(){try{return typeof indexedDB=="object"}catch{return!1}}function ub(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="FirebaseError";class zt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=db,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hb(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new zt(s,a,i)}}function hb(t,e){return t.replace(fb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=_s(yr(r[0])||""),n=_s(yr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},pb=function(t){const e=rf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gb=function(t){const e=rf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(au(r)&&au(o)){if(!wr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function au(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+c+l+d+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function mb(t,e){const n=new yb(t,e);return n.subscribe.bind(n)}class yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");vb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=xo),s.error===void 0&&(s.error=xo),s.complete===void 0&&(s.complete=xo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xo(){}function Ti(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,S(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},io=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wt;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ib(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Eb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eb(t){return t===Sn?void 0:t}function Ib(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Tb={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Sb=pe.INFO,Rb={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},kb=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Rb[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=Sb,this._logHandler=kb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Ab=(t,e)=>e.some(n=>t instanceof n);let lu,cu;function Nb(){return lu||(lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pb(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const of=new WeakMap,va=new WeakMap,af=new WeakMap,Do=new WeakMap,vl=new WeakMap;function Ob(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(an(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&of.set(n,t)}).catch(()=>{}),vl.set(e,t),e}function xb(t){if(va.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});va.set(t,e)}let ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return va.get(t);if(e==="objectStoreNames")return t.objectStoreNames||af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Db(t){ba=t(ba)}function Mb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Mo(this),e,...n);return af.set(i,e.sort?e.sort():[e]),an(i)}:Pb().includes(t)?function(...e){return t.apply(Mo(this),e),an(of.get(this))}:function(...e){return an(t.apply(Mo(this),e))}}function Lb(t){return typeof t=="function"?Mb(t):(t instanceof IDBTransaction&&xb(t),Ab(t,Nb())?new Proxy(t,ba):t)}function an(t){if(t instanceof IDBRequest)return Ob(t);if(Do.has(t))return Do.get(t);const e=Lb(t);return e!==t&&(Do.set(t,e),vl.set(e,t)),e}const Mo=t=>vl.get(t);function Fb(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=an(o);return i&&o.addEventListener("upgradeneeded",l=>{i(an(o.result),l.oldVersion,l.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ub=["get","getKey","getAll","getAllKeys","count"],$b=["put","add","delete","clear"],Lo=new Map;function uu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lo.get(e))return Lo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=$b.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ub.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Lo.set(e,r),r}Db(t=>({...t,get:(e,n,i)=>uu(e,n)||t.get(e,n,i),has:(e,n)=>!!uu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hb(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Hb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wa="@firebase/app",du="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new yl("@firebase/app"),jb="@firebase/app-compat",Wb="@firebase/analytics-compat",Vb="@firebase/analytics",zb="@firebase/app-check-compat",Kb="@firebase/app-check",Gb="@firebase/auth",qb="@firebase/auth-compat",Yb="@firebase/database",Qb="@firebase/database-compat",Jb="@firebase/functions",Xb="@firebase/functions-compat",Zb="@firebase/installations",ew="@firebase/installations-compat",tw="@firebase/messaging",nw="@firebase/messaging-compat",iw="@firebase/performance",sw="@firebase/performance-compat",rw="@firebase/remote-config",ow="@firebase/remote-config-compat",aw="@firebase/storage",lw="@firebase/storage-compat",cw="@firebase/firestore",uw="@firebase/firestore-compat",dw="firebase",hw="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]",fw={[wa]:"fire-core",[jb]:"fire-core-compat",[Vb]:"fire-analytics",[Wb]:"fire-analytics-compat",[Kb]:"fire-app-check",[zb]:"fire-app-check-compat",[Gb]:"fire-auth",[qb]:"fire-auth-compat",[Yb]:"fire-rtdb",[Qb]:"fire-rtdb-compat",[Jb]:"fire-fn",[Xb]:"fire-fn-compat",[Zb]:"fire-iid",[ew]:"fire-iid-compat",[tw]:"fire-fcm",[nw]:"fire-fcm-compat",[iw]:"fire-perf",[sw]:"fire-perf-compat",[rw]:"fire-rc",[ow]:"fire-rc-compat",[aw]:"fire-gcs",[lw]:"fire-gcs-compat",[cw]:"fire-fst",[uw]:"fire-fst-compat","fire-js":"fire-js",[dw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,Ia=new Map;function pw(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(Ia.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Ia.set(e,t);for(const n of Er.values())pw(n,t);return!0}function so(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ln=new Os("app","Firebase",gw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=hw;function lf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ea,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});if(n||(n=rb()),!n)throw ln.create("no-options");const r=Er.get(s);if(r){if(wr(n,r.options)&&wr(i,r.config))return r;throw ln.create("duplicate-app",{appName:s})}const o=new Cb(s);for(const l of Ia.values())o.addComponent(l);const a=new _w(n,i,o);return Er.set(s,a),a}function bl(t=Ea){const e=Er.get(t);if(!e&&t===Ea)return lf();if(!e)throw ln.create("no-app",{appName:t});return e}function Et(t,e,n){var i;let s=(i=fw[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(a.join(" "));return}Vn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="firebase-heartbeat-database",yw=1,ms="firebase-heartbeat-store";let Fo=null;function cf(){return Fo||(Fo=Fb(mw,yw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ms)}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),Fo}async function vw(t){try{return(await cf()).transaction(ms).objectStore(ms).get(uf(t))}catch(e){if(e instanceof zt)Wn.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function hu(t,e){try{const i=(await cf()).transaction(ms,"readwrite");return await i.objectStore(ms).put(e,uf(t)),i.done}catch(n){if(n instanceof zt)Wn.warn(n.message);else{const i=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(i.message)}}}function uf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=1024,ww=30*24*60*60*1e3;class Ew{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cw(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=ww}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fu(),{heartbeatsToSend:n,unsentEntries:i}=Iw(this._heartbeatsCache.heartbeats),s=mr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fu(){return new Date().toISOString().substring(0,10)}function Iw(t,e=bw){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),pu(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pu(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cb()?ub().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pu(t){return mr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){Vn(new gn("platform-logger",e=>new Bb(e),"PRIVATE")),Vn(new gn("heartbeat",e=>new Ew(e),"PRIVATE")),Et(wa,du,t),Et(wa,du,"esm2017"),Et("fire-js","")}Tw("");var Sw="firebase",Rw="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(Sw,Rw,"app");function wl(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function df(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kw=df,hf=new Os("auth","Firebase",df());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new yl("@firebase/auth");function rr(t,...e){gu.logLevel<=pe.ERROR&&gu.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw El(t,...e)}function It(t,...e){return El(t,...e)}function Aw(t,e,n){const i=Object.assign(Object.assign({},kw()),{[e]:n});return new Os("auth","Firebase",i).create(e,{appName:t.name})}function El(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return hf.create(t,...e)}function W(t,e,...n){if(!t)throw El(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function jt(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;function Mt(t){jt(t instanceof Function,"Expected a class definition");let e=_u.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_u.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){const n=so(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(wr(r,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function Pw(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ow(){return mu()==="http:"||mu()==="https:"}function mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ow()||ab()||"connection"in navigator)?navigator.onLine:!0}function Dw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=ml()||nf()}get(){return xw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Ds(3e4,6e4);function pf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ro(t,e,n,i,s={}){return gf(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ff.fetch()(mf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function gf(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Mw),e);try{const s=new Fw(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qs(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Aw(t,d,c);Ht(t,d)}}catch(s){if(s instanceof zt)throw s;Ht(t,"internal-error",{message:String(s)})}}async function _f(t,e,n,i,s={}){const r=await ro(t,e,n,i,s);return"mfaPendingCredential"in r&&Ht(t,"multi-factor-auth-required",{_serverResponse:r}),r}function mf(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Il(t.config,s):`${t.config.apiScheme}://${s}`}class Fw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(It(this.auth,"network-request-failed")),Lw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=It(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(t,e){return ro(t,"POST","/v1/accounts:delete",e)}async function $w(t,e){return ro(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bw(t,e=!1){const n=Be(t),i=await n.getIdToken(e),s=Cl(i);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:is(Uo(s.auth_time)),issuedAtTime:is(Uo(s.iat)),expirationTime:is(Uo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Uo(t){return Number(t)*1e3}function Cl(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=yr(n);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hw(t){const e=Cl(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof zt&&jw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function jw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ys(t,$w(n,{idToken:i}));W(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Kw(r.providerUserInfo):[],a=zw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new yf(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function Vw(t){const e=Be(t);await Ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zw(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Kw(t){return t.map(e=>{var{providerId:n}=e,i=wl(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e){const n=await gf(t,{},async()=>{const i=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=mf(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ff.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Gw(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new vs;return i&&(W(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=wl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ww(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ys(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bw(this,e)}reload(){return Vw(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ir(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ys(this,Uw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,d;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:F,isAnonymous:Q,providerData:ye,stsTokenManager:ke}=n;W(U&&ke,e,"internal-error");const G=vs.fromJSON(this.name,ke);W(typeof U=="string",e,"internal-error"),Yt(u,e.name),Yt(h,e.name),W(typeof F=="boolean",e,"internal-error"),W(typeof Q=="boolean",e,"internal-error"),Yt(g,e.name),Yt(m,e.name),Yt(b,e.name),Yt(k,e.name),Yt(P,e.name),Yt(O,e.name);const re=new $n({uid:U,auth:e,email:h,emailVerified:F,displayName:u,isAnonymous:Q,photoURL:m,phoneNumber:g,tenantId:b,stsTokenManager:G,createdAt:P,lastLoginAt:O});return ye&&Array.isArray(ye)&&(re.providerData=ye.map(le=>Object.assign({},le))),k&&(re._redirectEventId=k),re}static async _fromIdTokenResponse(e,n,i=!1){const s=new vs;s.updateFromServerResponse(n);const r=new $n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ir(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vf.type="NONE";const yu=vf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=or(this.userKey,s.apiKey,r),this.fullPersistenceKey=or("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new gi(Mt(yu),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Mt(yu);const o=or(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=$n._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new gi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new gi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ef(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cf(e))return"Blackberry";if(Tf(e))return"Webos";if(Tl(e))return"Safari";if((e.includes("chrome/")||wf(e))&&!e.includes("edge/"))return"Chrome";if(If(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function bf(t=$e()){return/firefox\//i.test(t)}function Tl(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wf(t=$e()){return/crios\//i.test(t)}function Ef(t=$e()){return/iemobile/i.test(t)}function If(t=$e()){return/android/i.test(t)}function Cf(t=$e()){return/blackberry/i.test(t)}function Tf(t=$e()){return/webos/i.test(t)}function oo(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qw(t=$e()){var e;return oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yw(){return lb()&&document.documentMode===10}function Sf(t=$e()){return oo(t)||If(t)||Tf(t)||Cf(t)||/windows phone/i.test(t)||Ef(t)}function Qw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e=[]){let n;switch(t){case"Browser":n=vu($e());break;case"Worker":n=`${vu($e())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bu(this),this.idTokenSubscription=new bu(this),this.beforeStateQueue=new Jw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ir(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function ao(t){return Be(t)}class bu{constructor(e){this.auth=e,this.observer=null,this.addObserver=mb(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Zw(t,e,n){const i=ao(t);W(i._canInitEmulator,i,"emulator-config-failed"),W(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=kf(e),{host:o,port:a}=eE(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||tE()}function kf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eE(t){const e=kf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:wu(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:wu(o)}}}function wu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return _f(t,"POST","/v1/accounts:signInWithIdp",pf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="http://localhost";class zn extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=wl(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new zn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,_i(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:nE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Nf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ms{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return tn.credential(n,i)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ms{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ms{constructor(){super("twitter.com")}static credential(e,n){return zn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return sn.credential(n,i)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e){return _f(t,"POST","/v1/accounts:signUp",pf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await $n._fromIdTokenResponse(e,i,s),o=Eu(i);return new _n({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Eu(i);return new _n({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Eu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t){var e;const n=ao(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _n({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await iE(n,{returnSecureToken:!0}),s=await _n._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends zt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Cr(e,n,i,s)}}function Pf(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(t,r,e,i):r})}async function sE(t,e,n=!1){const i=await ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ys(t,Pf(i,s,e,t),n);W(r.idToken,i,"internal-error");const o=Cl(r.idToken);W(o,i,"internal-error");const{sub:a}=o;return W(t.uid===a,i,"user-mismatch"),_n._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ht(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,e,n=!1){const i="signIn",s=await Pf(t,i,e),r=await _n._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function aE(t,e,n,i){return Be(t).onIdTokenChanged(e,n,i)}function lE(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}const Tr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tr,"1"),this.storage.removeItem(Tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){const t=$e();return Tl(t)||oo(t)}const uE=1e3,dE=10;class xf extends Of{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cE()&&Qw(),this.fallbackToPolling=Sf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Yw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dE):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},uE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xf.type="LOCAL";const hE=xf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends Of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Df.type="SESSION";const Mf=Df;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new lo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await fE(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Sl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function gE(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function _E(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yE(){return Lf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="firebaseLocalStorageDb",vE=1,Sr="firebaseLocalStorage",Uf="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function co(t,e){return t.transaction([Sr],e?"readwrite":"readonly").objectStore(Sr)}function bE(){const t=indexedDB.deleteDatabase(Ff);return new Ls(t).toPromise()}function Ta(){const t=indexedDB.open(Ff,vE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Sr,{keyPath:Uf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Sr)?e(i):(i.close(),await bE(),e(await Ta()))})})}async function Iu(t,e,n){const i=co(t,!0).put({[Uf]:e,value:n});return new Ls(i).toPromise()}async function wE(t,e){const n=co(t,!1).get(e),i=await new Ls(n).toPromise();return i===void 0?null:i.value}function Cu(t,e){const n=co(t,!0).delete(e);return new Ls(n).toPromise()}const EE=800,IE=3;class $f{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>IE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(yE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _E(),!this.activeServiceWorker)return;this.sender=new pE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await Iu(e,Tr,"1"),await Cu(e,Tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Iu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>wE(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=co(s,!1).getAll();return new Ls(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$f.type="LOCAL";const CE=$f;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function SE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=It("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",TE().appendChild(i)})}function RE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e){return e?Mt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AE(t){return oE(t.auth,new Rl(t),t.bypassAuthState)}function NE(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),rE(n,new Rl(t),t.bypassAuthState)}async function PE(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),sE(n,new Rl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AE;case"linkViaPopup":case"linkViaRedirect":return PE;case"reauthViaPopup":case"reauthViaRedirect":return NE;default:Ht(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Ds(2e3,1e4);class ci extends Bf{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,OE.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="pendingRedirect",ar=new Map;class DE extends Bf{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ar.get(this.auth._key());if(!e){try{const i=await ME(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ar.set(this.auth._key(),e)}return this.bypassAuthState||ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ME(t,e){const n=UE(e),i=FE(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function LE(t,e){ar.set(t._key(),e)}function FE(t){return Mt(t._redirectPersistence)}function UE(t){return or(xE,t.config.apiKey,t.name)}async function $E(t,e,n=!1){const i=ao(t),s=kE(i,e),o=await new DE(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=10*60*1e3;class HE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Hf(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tu(e))}saveEventToCache(e){this.cachedEventUids.add(Tu(e)),this.lastProcessedEventTime=Date.now()}}function Tu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e={}){return ro(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zE=/^https?/;async function KE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WE(t);for(const n of e)try{if(GE(n))return}catch{}Ht(t,"unauthorized-domain")}function GE(t){const e=Ca(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!zE.test(n))return!1;if(VE.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Ds(3e4,6e4);function Su(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YE(t){return new Promise((e,n)=>{var i,s,r;function o(){Su(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Su(),n(It(t,"network-request-failed"))},timeout:qE.get()})}if(!((s=(i=Ct().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ct().gapi)===null||r===void 0)&&r.load)o();else{const a=RE("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},SE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lr=null,e})}let lr=null;function QE(t){return lr=lr||YE(t),lr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new Ds(5e3,15e3),XE="__/auth/iframe",ZE="emulator/auth/iframe",eI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nI(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Il(e,ZE):`https://${t.config.authDomain}/${XE}`,i={apiKey:e.apiKey,appName:t.name,v:xs},s=tI.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${xi(i).slice(1)}`}async function iI(t){const e=await QE(t),n=Ct().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:nI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Ct().setTimeout(()=>{r(o)},JE.get());function l(){Ct().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rI=500,oI=600,aI="_blank",lI="http://localhost";class Ru{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cI(t,e,n,i=rI,s=oI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sI),{width:i.toString(),height:s.toString(),top:r,left:o}),c=$e().toLowerCase();n&&(a=wf(c)?aI:n),bf(c)&&(e=e||lI,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,m])=>`${h}${g}=${m},`,"");if(qw(c)&&a!=="_self")return uI(e||"",a),new Ru(null);const u=window.open(e||"",a,d);W(u,t,"popup-blocked");try{u.focus()}catch{}return new Ru(u)}function uI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="__/auth/handler",hI="emulator/auth/handler";function ku(t,e,n,i,s,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:xs,eventId:s};if(e instanceof Nf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ms){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${fI(t)}?${xi(a).slice(1)}`}function fI({config:t}){return t.emulator?Il(t,hI):`https://${t.authDomain}/${dI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="webStorageSupport";class pI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mf,this._completeRedirectFn=$E,this._overrideRedirectResult=LE}async _openPopup(e,n,i,s){var r;jt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ku(e,n,i,Ca(),s);return cI(e,o,Sl())}async _openRedirect(e,n,i,s){return await this._originValidation(e),gE(ku(e,n,i,Ca(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(jt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await iI(e),i=new HE(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($o,{type:$o},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[$o];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sf()||Tl()||oo()}}const gI=pI;var Au="@firebase/auth",Nu="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yI(t){Vn(new gn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{W(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rf(t)},d=new Xw(a,l,c);return Pw(d,n),d})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vn(new gn("auth-internal",e=>{const n=ao(e.getProvider("auth").getImmediate());return(i=>new _I(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(Au,Nu,mI(t)),Et(Au,Nu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=5*60,bI=tf("authIdTokenMaxAge")||vI;let Pu=null;const wI=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>bI)return;const s=n==null?void 0:n.token;Pu!==s&&(Pu=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EI(t=bl()){const e=so(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nw(t,{popupRedirectResolver:gI,persistence:[CE,hE,Mf]}),i=tf("authTokenSyncURL");if(i){const r=wI(i);lE(n,r,()=>r(n.currentUser)),aE(n,o=>r(o))}const s=Zh("auth");return s&&Zw(n,`http://${s}`),n}yI("Browser");const Ou="@firebase/database",xu="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf="";function II(t){jf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CI(e)}}catch{}return new TI},Pn=Wf("localStorage"),Sa=Wf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new yl("@firebase/database"),SI=function(){let t=1;return function(){return t++}}(),Vf=function(t){const e=bb(t),n=new _b;n.update(e);const i=n.digest();return gl.encodeByteArray(i)},Fs=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fs.apply(null,i):typeof i=="object"?e+=Pe(i):e+=i,e+=" "}return e};let Bn=null,Du=!0;const RI=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(mi.logLevel=pe.VERBOSE,Bn=mi.log.bind(mi),e&&Sa.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,Sa.remove("logging_enabled"))},Me=function(...t){if(Du===!0&&(Du=!1,Bn===null&&Sa.get("logging_enabled")===!0&&RI(!0)),Bn){const e=Fs.apply(null,t);Bn(e)}},Us=function(t){return function(...e){Me(t,...e)}},Ra=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fs(...t);mi.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Fs(...t)}`;throw mi.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Fs(...t);mi.warn(e)},kI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Kn="[MAX_NAME]",Jn=function(t,e){if(t===e)return 0;if(t===Si||e===Kn)return-1;if(e===Si||t===Kn)return 1;{const n=Mu(t),i=Mu(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},NI=function(t,e){return t===e?0:t<e?-1:1},Vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},kl=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Pe(e[i]),n+=":",n+=kl(t[e[i]]);return n+="}",n},zf=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Kf=function(t){S(!uo(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},PI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const DI=new RegExp("^-?(0*)\\d{1,10}$"),MI=-2147483648,LI=2147483647,Mu=function(t){if(DI.test(t)){const e=Number(t);if(e>=MI&&e<=LI)return e}return null},Di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},FI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class yi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="5",Gf="v",qf="s",Yf="r",Qf="f",Jf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xf="ls",Zf="p",ka="ac",ep="websocket",tp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ip(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let i;if(e===ep)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tp)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BI(t)&&(n.ns=t.namespace);const s=[];return Fe(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Zv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={},Ho={};function Nl(t){const e=t.toString();return Bo[e]||(Bo[e]=new HI),Bo[e]}function jI(t,e){const n=t.toString();return Ho[n]||(Ho[n]=e()),Ho[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Di(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="start",VI="close",zI="pLPCommand",KI="pRTLPCB",sp="id",rp="pw",op="ser",GI="cb",qI="seg",YI="ts",QI="d",JI="dframe",ap=1870,lp=30,XI=ap-lp,ZI=25e3,eC=3e4;class ui{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=Nl(n),this.urlFn=l=>(this.appCheckToken&&(l[ka]=this.appCheckToken),ip(n,tp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eC)),AI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pl((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lu)this.id=a,this.password=l;else if(o===VI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Lu]="t",i[op]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[GI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Gf]=Al,this.transportSessionId&&(i[qf]=this.transportSessionId),this.lastSessionId&&(i[Xf]=this.lastSessionId),this.applicationId&&(i[Zf]=this.applicationId),this.appCheckToken&&(i[ka]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jf.test(location.hostname)&&(i[Yf]=Qf);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PI()&&!OI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Jh(n),s=zf(i,XI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[JI]="t",i[sp]=e,i[rp]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pl{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SI(),window[zI+this.uniqueCallbackIdentifier]=e,window[KI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sp]=this.myID,e[rp]=this.myPW,e[op]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lp+i.length<=ap;){const o=this.pendingSegs.shift();i=i+"&"+qI+s+"="+o.seg+"&"+YI+s+"="+o.ts+"&"+QI+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(ZI)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=16384,nC=45e3;let Rr=null;typeof MozWebSocket<"u"?Rr=MozWebSocket:typeof WebSocket<"u"&&(Rr=WebSocket);class dt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=Nl(n),this.connURL=dt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Gf]=Al,typeof location<"u"&&location.hostname&&Jf.test(location.hostname)&&(o[Yf]=Qf),n&&(o[qf]=n),i&&(o[Xf]=i),s&&(o[ka]=s),r&&(o[Zf]=r),ip(e,ep,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let i;sf(),this.mySock=new Rr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Rr!==null&&!dt.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=_s(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zf(n,tC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ui,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let i=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[dt];else{const s=this.transports_=[];for(const r of bs.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);bs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=6e4,sC=5e3,rC=10*1024,oC=100*1024,jo="t",Fu="d",aC="s",Uu="r",lC="e",$u="o",Bu="a",Hu="n",ju="p",cC="h";class uC{constructor(e,n,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new bs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(jo in e){const n=e[jo];n===Bu?this.upgradeIfSecondaryHealthy_():n===Uu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$u&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vi("t",e),i=Vi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ju,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vi("t",e),i=Vi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vi(jo,e);if(Fu in e){const i=e[Fu];if(n===cC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Hu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aC?this.onConnectionShutdown_(i):n===Uu?this.onReset_(i):n===lC?Ra("Server Error: "+i):n===$u?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ra("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Al!==i&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ju,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends up{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ml()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kr}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=32,Vu=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ue("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mn(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function Ol(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ws(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function be(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ue)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ue(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return ze(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hC(t,e){const n=ws(t,0),i=ws(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=Jn(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function xl(t,e){if(mn(t)!==mn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function it(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(mn(t)>mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class fC{constructor(e,n){this.errorPrefix_=n,this.parts_=ws(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=io(this.parts_[i]);hp(this)}}function pC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=io(e),hp(t)}function gC(t){const e=t.parts_.pop();t.byteLength_-=io(e),t.parts_.length>0&&(t.byteLength_-=1)}function hp(t){if(t.byteLength_>Vu)throw new Error(t.errorPrefix_+"has a key path longer than "+Vu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wu+") or object contains a cycle "+Rn(t))}function Rn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends up{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Dl}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=1e3,_C=60*5*1e3,zu=30*1e3,mC=1.3,yC=3e4,vC="server_kill",Ku=3;class $t extends cp{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$t.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=_C,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!sf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Pe(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new wt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$t.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const i=Ci(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ra("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yC&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$t.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new uC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{Ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(vC)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ke(u),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vr(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>kl(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ue(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ku&&(this.reconnectDelay_=zu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ku&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jf.replace(/\./g,"-")]=1,ml()?e["framework.cordova"]=1:nf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kr.getInstance().currentlyOnline();return vr(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new X(Si,e),s=new X(Si,n);return this.compare(i,s)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js;class fp extends ho{static get __EMPTY_NODE(){return Js}static set __EMPTY_NODE(e){Js=e}compare(e,n){return Jn(e.name,n.name)}isDefinedOn(e){throw Oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Kn,Js)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Js)}toString(){return".key"}}const vi=new fp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??De.RED,this.left=s??Qe.EMPTY_NODE,this.right=r??Qe.EMPTY_NODE}copy(e,n,i,s,r){return new De(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class bC{copy(e,n,i,s,r){return this}insert(e,n,i){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,n=Qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xs(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new bC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e){return Jn(t.name,e.name)}function Ml(t,e){return Jn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;function EC(t){Aa=t}const pp=function(t){return typeof t=="number"?"number:"+Kf(t):"string:"+t},gp=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else S(t===Aa||t.isEmpty(),"priority of unexpected type.");S(t===Aa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gp(this.priorityNode_)}static set __childrenNodeConstructor(e){Gu=e}static get __childrenNodeConstructor(){return Gu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Y(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(S(i!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Kf(this.value_):e+=this.value_,this.lazyHash_=Vf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=xe.VALUE_TYPE_ORDER.indexOf(n),r=xe.VALUE_TYPE_ORDER.indexOf(i);return S(s>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p,mp;function IC(t){_p=t}function CC(t){mp=t}class TC extends ho{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Jn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Kn,new xe("[PRIORITY-POST]",mp))}makePost(e,n){const i=_p(e);return new X(n,new xe("[PRIORITY-POST]",i))}toString(){return".priority"}}const we=new TC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=Math.log(2);class RC{constructor(e){const n=r=>parseInt(Math.log(r)/SC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ar=function(t,e,n,i){t.sort(e);const s=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new De(h,u.node,De.BLACK,null,null);{const g=parseInt(d/2,10)+l,m=s(l,g),b=s(g+1,c);return u=t[g],h=n?n(u):u,new De(h,u.node,De.BLACK,m,b)}},r=function(l){let c=null,d=null,u=t.length;const h=function(m,b){const k=u-m,P=u;u-=m;const O=s(k+1,P),U=t[k],F=n?n(U):U;g(new De(F,U.node,b,null,O))},g=function(m){c?(c.left=m,c=m):(d=m,c=m)};for(let m=0;m<l.count;++m){const b=l.nextBitIsOne(),k=Math.pow(2,l.count-(m+1));b?h(k,De.BLACK):(h(k,De.BLACK),h(k,De.RED))}return d},o=new RC(t.length),a=r(o);return new Qe(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;const oi={};class Lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(oi&&we,"ChildrenNode.ts has not been loaded"),Wo=Wo||new Lt({".priority":oi},{".priority":we}),Wo}get(e){const n=Ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qe?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==vi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ar(i,e.getCompare()):a=oi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Lt(d,c)}addToIndexes(e,n){const i=br(this.indexes_,(s,r)=>{const o=Ci(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),s===oi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ar(a,o.getCompare())}else return oi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Lt(i,this.indexSet_)}removeFromIndexes(e,n){const i=br(this.indexes_,s=>{if(s===oi)return s;{const r=n.get(e.name);return r?s.remove(new X(e.name,r)):s}});return new Lt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;class B{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gp(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ki||(Ki=new B(new Qe(Ml),null,Lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ki}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ki:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new X(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ki:this.priorityNode_;return new B(s,o,r)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{S(Y(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ge(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(we,(o,a)=>{n[o]=a.val(e),i++,r&&B.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pp(this.getPriority().val())+":"),this.forEachChild(we,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Vf(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$s?-1:0}withIndex(e){if(e===vi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(we),s=n.getIterator(we);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vi?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kC extends B{constructor(){super(new Qe(Ml),B.EMPTY_NODE,Lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const $s=new kC;Object.defineProperties(X,{MIN:{value:new X(Si,B.EMPTY_NODE)},MAX:{value:new X(Kn,$s)}});fp.__EMPTY_NODE=B.EMPTY_NODE;xe.__childrenNodeConstructor=B;EC($s);CC($s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=!0;function Ee(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Ee(e))}if(!(t instanceof Array)&&AC){const n=[];let i=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=Ar(n,wC,o=>o.name,Ml);if(i){const o=Ar(n,we.getCompare());return new B(r,Ee(e),new Lt({".priority":o},{".priority":we}))}else return new B(r,Ee(e),Lt.Default)}else{let n=B.EMPTY_NODE;return Fe(t,(i,s)=>{if(Rt(t,i)&&i.substring(0,1)!=="."){const r=Ee(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ee(e))}}IC(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends ho{constructor(e){super(),this.indexPath_=e,S(!J(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Jn(e.name,n.name):r}makePost(e,n){const i=Ee(e),s=B.EMPTY_NODE.updateChild(this.indexPath_,i);return new X(n,s)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,$s);return new X(Kn,e)}toString(){return ws(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC extends ho{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Jn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const i=Ee(e);return new X(n,i)}toString(){return".value"}}const OC=new PC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){return{type:"value",snapshotNode:t}}function Ri(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Es(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Es(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ri(n,i)):o.trackChildChange(Is(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(we,(s,r)=>{n.hasChild(s)||i.trackChildChange(Es(s,r))}),n.isLeafNode()||n.forEachChild(we,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Is(s,r,o))}else i.trackChildChange(Ri(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.indexedFilter_=new Ll(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cs.getStartPost_(e),this.endPost_=Cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new X(n,i))||(i=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=B.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(we,(o,a)=>{r.matches(new X(o,a))||(s=s.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new X(n,i))||(i=B.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,g)=>u(g,h)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new X(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!i.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Is(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Es(n,u));const b=a.updateImmediateChild(n,B.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ri(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Es(c.name,c.node)),r.trackChildChange(Ri(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new Fl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function MC(t){return t.loadsAllData()?new Ll(t.getIndex()):t.hasLimit()?new DC(t):new Cs(t)}function qu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===we?n="$priority":t.index_===OC?n="$value":t.index_===vi?n="$key":(S(t.index_ instanceof NC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Pe(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Pe(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Pe(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends cp{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Us("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nr.getListenId_(e,i),a={};this.listens_[o]=a;const l=qu(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Ci(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=Nr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=qu(e._queryParams),i=e._path.toString(),s=new wt;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_s(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return{value:null,children:new Map}}function Mi(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,Pr());const s=t.children.get(i);e=ge(e),Mi(s,e,n)}}function Na(t,e){if(J(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(we,(i,s)=>{Mi(t,new ue(i),s)}),Na(t,e)}}else if(t.children.size>0){const n=Y(e);return e=ge(e),t.children.has(n)&&Na(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Pa(t,e,n){t.value!==null?n(e,t.value):FC(t,(i,s)=>{const r=new ue(e.toString()+"/"+i);Pa(s,r,n)})}function FC(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=10*1e3,$C=30*1e3,BC=5*60*1e3;class HC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new UC(e);const i=Qu+($C-Qu)*Math.random();ss(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Fe(e,(s,r)=>{r>0&&Rt(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*BC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function Ul(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $l(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ft.ACK_USER_WRITE,this.source=Ul()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Or(oe(),n,this.revert)}}else return S(Y(this.path)===e,"operationForChild called for unrelated child."),new Or(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Ts(this.source,oe()):new Ts(this.source,ge(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ft.OVERWRITE}operationForChild(e){return J(this.path)?new Gn(this.source,oe(),this.snap.getImmediateChild(e)):new Gn(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ft.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new Gn(this.source,oe(),n.value):new ki(this.source,oe(),n)}else return S(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ki(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WC(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xC(o.childName,o.snapshotNode))}),Gi(t,s,"child_removed",e,i,n),Gi(t,s,"child_added",e,i,n),Gi(t,s,"child_moved",r,i,n),Gi(t,s,"child_changed",e,i,n),Gi(t,s,"value",e,i,n),s}function Gi(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>zC(t,a,l)),o.forEach(a=>{const l=VC(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function VC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zC(t,e,n){if(e.childName==null||n.childName==null)throw Oi("Should only compare child_ events.");const i=new X(e.childName,e.snapshotNode),s=new X(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,i){return fo(new yn(e,n,i),t.serverCache)}function vp(t,e,n,i){return fo(t.eventCache,new yn(e,n,i))}function xr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;const KC=()=>(Vo||(Vo=new Qe(NI)),Vo);class me{constructor(e,n=KC()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Fe(e,(i,s)=>{n=n.set(new ue(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(J(e))return null;{const i=Y(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ge(e),n);return r!=null?{path:be(new ue(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(ge(e)):new me(null)}}set(e,n){if(J(e))return new me(n,this.children);{const i=Y(e),r=(this.children.get(i)||new me(null)).set(ge(e),n),o=this.children.insert(i,r);return new me(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const s=i.remove(ge(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new me(null):new me(this.value,r)}else return this}}get(e){if(J(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(ge(e)):null}}setTree(e,n){if(J(e))return n;{const i=Y(e),r=(this.children.get(i)||new me(null)).setTree(ge(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new me(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(be(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(J(e))return null;{const r=Y(e),o=this.children.get(r);return o?o.findOnPath_(ge(e),be(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,i){if(J(e))return this;{this.value&&i(n,this.value);const s=Y(e),r=this.children.get(s);return r?r.foreachOnPath_(ge(e),be(n,s),i):new me(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(be(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new me(null))}}function os(t,e,n){if(J(e))return new pt(new me(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ze(s,e);return r=r.updateChild(o,n),new pt(t.writeTree_.set(s,r))}else{const s=new me(n),r=t.writeTree_.setTree(e,s);return new pt(r)}}}function Oa(t,e,n){let i=t;return Fe(n,(s,r)=>{i=os(i,be(e,s),r)}),i}function Ju(t,e){if(J(e))return pt.empty();{const n=t.writeTree_.setTree(e,new me(null));return new pt(n)}}function xa(t,e){return Xn(t,e)!=null}function Xn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function Xu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(i,s)=>{e.push(new X(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new X(i,s.value))}),e}function cn(t,e){if(J(e))return t;{const n=Xn(t,e);return n!=null?new pt(new me(n)):new pt(t.writeTree_.subtree(e))}}function Da(t){return t.writeTree_.isEmpty()}function Ai(t,e){return bp(oe(),t.writeTree_,e)}function bp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=bp(be(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(be(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e){return Cp(e,t)}function GC(t,e,n,i,s){S(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=os(t.visibleWrites,e,n)),t.lastWriteId=i}function qC(t,e,n,i){S(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Oa(t.visibleWrites,e,n),t.lastWriteId=i}function YC(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function QC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JC(a,i.path)?s=!1:it(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return XC(t),!0;if(i.snap)t.visibleWrites=Ju(t.visibleWrites,i.path);else{const a=i.children;Fe(a,l=>{t.visibleWrites=Ju(t.visibleWrites,be(i.path,l))})}return!0}else return!1}function JC(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(be(t.path,n),e))return!0;return!1}function XC(t){t.visibleWrites=wp(t.allWrites,ZC,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZC(t){return t.visible}function wp(t,e,n){let i=pt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)it(n,o)?(a=ze(n,o),i=os(i,a,r.snap)):it(o,n)&&(a=ze(o,n),i=os(i,oe(),r.snap.getChild(a)));else if(r.children){if(it(n,o))a=ze(n,o),i=Oa(i,a,r.children);else if(it(o,n))if(a=ze(o,n),J(a))i=Oa(i,oe(),r.children);else{const l=Ci(r.children,Y(a));if(l){const c=l.getChild(ge(a));i=os(i,oe(),c)}}}else throw Oi("WriteRecord should have .snap or .children")}}return i}function Ep(t,e,n,i,s){if(!i&&!s){const r=Xn(t.visibleWrites,e);if(r!=null)return r;{const o=cn(t.visibleWrites,e);if(Da(o))return n;if(n==null&&!xa(o,oe()))return null;{const a=n||B.EMPTY_NODE;return Ai(o,a)}}}else{const r=cn(t.visibleWrites,e);if(!s&&Da(r))return n;if(!s&&n==null&&!xa(r,oe()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(it(c.path,e)||it(e,c.path))},a=wp(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Ai(a,l)}}}function eT(t,e,n){let i=B.EMPTY_NODE;const s=Xn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(we,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=cn(t.visibleWrites,e);return n.forEachChild(we,(o,a)=>{const l=Ai(cn(r,new ue(o)),a);i=i.updateImmediateChild(o,l)}),Xu(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=cn(t.visibleWrites,e);return Xu(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function tT(t,e,n,i,s){S(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=be(e,n);if(xa(t.visibleWrites,r))return null;{const o=cn(t.visibleWrites,r);return Da(o)?s.getChild(n):Ai(o,s.getChild(n))}}function nT(t,e,n,i){const s=be(e,n),r=Xn(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=cn(t.visibleWrites,s);return Ai(o,i.getNode().getImmediateChild(n))}else return null}function iT(t,e){return Xn(t.visibleWrites,e)}function sT(t,e,n,i,s,r,o){let a;const l=cn(t.visibleWrites,e),c=Xn(l,oe());if(c!=null)a=c;else if(n!=null)a=Ai(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=h.getNext();for(;g&&d.length<s;)u(g,i)!==0&&d.push(g),g=h.getNext();return d}else return[]}function rT(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function Dr(t,e,n,i){return Ep(t.writeTree,t.treePath,e,n,i)}function Hl(t,e){return eT(t.writeTree,t.treePath,e)}function Zu(t,e,n,i){return tT(t.writeTree,t.treePath,e,n,i)}function Mr(t,e){return iT(t.writeTree,be(t.treePath,e))}function oT(t,e,n,i,s,r){return sT(t.writeTree,t.treePath,e,n,i,s,r)}function jl(t,e,n){return nT(t.writeTree,t.treePath,e,n)}function Ip(t,e){return Cp(be(t.treePath,e),t.writeTree)}function Cp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Is(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Es(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Ri(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Is(i,e.snapshotNode,s.oldSnap));else throw Oi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Tp=new lT;class Wl{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jl(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qn(this.viewCache_),r=oT(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){return{filter:t}}function uT(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dT(t,e,n,i,s){const r=new aT;let o,a;if(n.type===ft.OVERWRITE){const c=n;c.source.fromUser?o=Ma(t,e,c.path,c.snap,i,s,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Lr(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===ft.MERGE){const c=n;c.source.fromUser?o=fT(t,e,c.path,c.children,i,s,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=La(t,e,c.path,c.children,i,s,a,r))}else if(n.type===ft.ACK_USER_WRITE){const c=n;c.revert?o=_T(t,e,c.path,i,s,r):o=pT(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===ft.LISTEN_COMPLETE)o=gT(t,e,n.path,i,r);else throw Oi("Unknown operation type: "+n.type);const l=r.getChanges();return hT(e,o,l),{viewCache:o,changes:l}}function hT(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(yp(xr(e)))}}function Sp(t,e,n,i,s,r){const o=e.eventCache;if(Mr(i,n)!=null)return e;{let a,l;if(J(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qn(e),d=c instanceof B?c:B.EMPTY_NODE,u=Hl(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Dr(i,qn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Y(n);if(c===".priority"){S(mn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Zu(i,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=ge(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Zu(i,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=jl(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,s,r):a=o.getNode()}}return rs(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Lr(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=d.updateFullNode(l.getNode(),g,null)}else{const g=Y(n);if(!l.isCompleteForPath(n)&&mn(n)>1)return e;const m=ge(n),k=l.getNode().getImmediateChild(g).updateChild(m,i);g===".priority"?c=d.updatePriority(l.getNode(),k):c=d.updateChild(l.getNode(),g,k,m,Tp,null)}const u=vp(e,c,l.isFullyInitialized()||J(n),d.filtersNodes()),h=new Wl(s,u,r);return Sp(t,u,n,s,h,a)}function Ma(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const d=new Wl(s,e,r);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=rs(e,c,!0,t.filter.filtersNodes());else{const u=Y(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=rs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ge(n),g=a.getNode().getImmediateChild(u);let m;if(J(h))m=i;else{const b=d.getCompleteChild(u);b!=null?Ol(h)===".priority"&&b.getChild(dp(h)).isEmpty()?m=b:m=b.updateChild(h,i):m=B.EMPTY_NODE}if(g.equals(m))l=e;else{const b=t.filter.updateChild(a.getNode(),u,m,h,d,o);l=rs(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ed(t,e){return t.eventCache.isCompleteForChild(e)}function fT(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=be(n,l);ed(e,Y(d))&&(a=Ma(t,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=be(n,l);ed(e,Y(d))||(a=Ma(t,a,d,c,s,r,o))}),a}function td(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function La(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=i:c=new me(null).setTree(n,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),m=td(t,g,h);l=Lr(t,l,new ue(u),m,s,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const g=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!g){const m=e.serverCache.getNode().getImmediateChild(u),b=td(t,m,h);l=Lr(t,l,new ue(u),b,s,r,o,a)}}),l}function pT(t,e,n,i,s,r,o){if(Mr(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Lr(t,e,n,l.getNode().getChild(n),s,r,a,o);if(J(n)){let c=new me(null);return l.getNode().forEachChild(vi,(d,u)=>{c=c.set(new ue(d),u)}),La(t,e,n,c,s,r,a,o)}else return e}else{let c=new me(null);return i.foreach((d,u)=>{const h=be(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),La(t,e,n,c,s,r,a,o)}}function gT(t,e,n,i,s){const r=e.serverCache,o=vp(e,r.getNode(),r.isFullyInitialized()||J(n),r.isFiltered());return Sp(t,o,n,i,Tp,s)}function _T(t,e,n,i,s,r){let o;if(Mr(i,n)!=null)return e;{const a=new Wl(i,e,s),l=e.eventCache.getNode();let c;if(J(n)||Y(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Dr(i,qn(e));else{const u=e.serverCache.getNode();S(u instanceof B,"serverChildren would be complete if leaf node"),d=Hl(i,u)}d=d,c=t.filter.updateFullNode(l,d,r)}else{const d=Y(n);let u=jl(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,ge(n),a,r):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,B.EMPTY_NODE,ge(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Dr(i,qn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Mr(i,oe())!=null,rs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ll(i.getIndex()),r=MC(i);this.processor_=cT(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),d=new yn(l,o.isFullyInitialized(),s.filtersNodes()),u=new yn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=fo(u,d),this.eventGenerator_=new jC(this.query_)}get query(){return this.query_}}function yT(t){return t.viewCache_.serverCache.getNode()}function vT(t){return xr(t.viewCache_)}function bT(t,e){const n=qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function nd(t){return t.eventRegistrations_.length===0}function wT(t,e){t.eventRegistrations_.push(e)}function id(t,e,n){const i=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function sd(t,e,n,i){e.type===ft.MERGE&&e.source.queryId!==null&&(S(qn(t.viewCache_),"We should always have a full cache before handling merges"),S(xr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=dT(t.processor_,s,e,n,i);return uT(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Rp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ET(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(r,o)=>{i.push(Ri(r,o))}),n.isFullyInitialized()&&i.push(yp(n.getNode())),Rp(t,i,n.getNode(),e)}function Rp(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return WC(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;class kp{constructor(){this.views=new Map}}function IT(t){S(!Fr,"__referenceConstructor has already been defined"),Fr=t}function CT(){return S(Fr,"Reference.ts has not been loaded"),Fr}function TT(t){return t.views.size===0}function Vl(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return S(r!=null,"SyncTree gave us an op for an invalid query."),sd(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(sd(o,e,n,i));return r}}function Ap(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Dr(n,s?i:null),l=!1;a?l=!0:i instanceof B?(a=Hl(n,i),l=!1):(a=B.EMPTY_NODE,l=!1);const c=fo(new yn(a,l,!1),new yn(i,s,!1));return new mT(e,c)}return o}function ST(t,e,n,i,s,r){const o=Ap(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wT(o,n),ET(o,n)}function RT(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=vn(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(id(c,n,i)),nd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(id(l,n,i)),nd(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!vn(t)&&r.push(new(CT())(e._repo,e._path)),{removed:r,events:o}}function Np(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function un(t,e){let n=null;for(const i of t.views.values())n=n||bT(i,e);return n}function Pp(t,e){if(e._queryParams.loadsAllData())return go(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Op(t,e){return Pp(t,e)!=null}function vn(t){return go(t)!=null}function go(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur;function kT(t){S(!Ur,"__referenceConstructor has already been defined"),Ur=t}function AT(){return S(Ur,"Reference.ts has not been loaded"),Ur}let NT=1;class rd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=rT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xp(t,e,n,i,s){return GC(t.pendingWriteTree_,e,n,i,s),s?Li(t,new Gn(Ul(),e,n)):[]}function PT(t,e,n,i){qC(t.pendingWriteTree_,e,n,i);const s=me.fromObject(n);return Li(t,new ki(Ul(),e,s))}function rn(t,e,n=!1){const i=YC(t.pendingWriteTree_,e);if(QC(t.pendingWriteTree_,e)){let r=new me(null);return i.snap!=null?r=r.set(oe(),!0):Fe(i.children,o=>{r=r.set(new ue(o),!0)}),Li(t,new Or(i.path,r,n))}else return[]}function Bs(t,e,n){return Li(t,new Gn($l(),e,n))}function OT(t,e,n){const i=me.fromObject(n);return Li(t,new ki($l(),e,i))}function xT(t,e){return Li(t,new Ts($l(),e))}function DT(t,e,n){const i=Kl(t,n);if(i){const s=Gl(i),r=s.path,o=s.queryId,a=ze(r,e),l=new Ts(Bl(o),a);return ql(t,r,l)}else return[]}function $r(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Op(o,e))){const l=RT(o,e,n,i);TT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,g)=>vn(g));if(d&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const g=FT(h);for(let m=0;m<g.length;++m){const b=g[m],k=b.query,P=Fp(t,b);t.listenProvider_.startListening(as(k),Ss(t,k),P.hashFn,P.onComplete)}}}!u&&c.length>0&&!i&&(d?t.listenProvider_.stopListening(as(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(_o(h));t.listenProvider_.stopListening(as(h),g)}))}UT(t,c)}return a}function Dp(t,e,n,i){const s=Kl(t,i);if(s!=null){const r=Gl(s),o=r.path,a=r.queryId,l=ze(o,e),c=new Gn(Bl(a),l,n);return ql(t,o,c)}else return[]}function MT(t,e,n,i){const s=Kl(t,i);if(s){const r=Gl(s),o=r.path,a=r.queryId,l=ze(o,e),c=me.fromObject(n),d=new ki(Bl(a),l,c);return ql(t,o,d)}else return[]}function Fa(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,g)=>{const m=ze(h,s);r=r||un(g,m),o=o||vn(g)});let a=t.syncPointTree_.get(s);a?(o=o||vn(a),r=r||un(a,oe())):(a=new kp,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,m)=>{const b=un(m,oe());b&&(r=r.updateImmediateChild(g,b))}));const c=Op(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=_o(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=$T();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=po(t.pendingWriteTree_,s);let u=ST(a,e,n,d,r,l);if(!c&&!o&&!i){const h=Pp(a,e);u=u.concat(BT(t,e,h))}return u}function zl(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=un(a,l);if(c)return c});return Ep(s,e,r,n,!0)}function LT(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=ze(c,n);i=i||un(d,u)});let s=t.syncPointTree_.get(n);s?i=i||un(s,oe()):(s=new kp,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new yn(i,!0,!1):null,a=po(t.pendingWriteTree_,e._path),l=Ap(s,e,a,r?o.getNode():B.EMPTY_NODE,r);return vT(l)}function Li(t,e){return Mp(e,t.syncPointTree_,null,po(t.pendingWriteTree_,oe()))}function Mp(t,e,n,i){if(J(t.path))return Lp(t,e,n,i);{const s=e.get(oe());n==null&&s!=null&&(n=un(s,oe()));let r=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Ip(i,o);r=r.concat(Mp(a,l,c,d))}return s&&(r=r.concat(Vl(s,t,i,n))),r}}function Lp(t,e,n,i){const s=e.get(oe());n==null&&s!=null&&(n=un(s,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ip(i,o),d=t.operationForChild(o);d&&(r=r.concat(Lp(d,a,l,c)))}),s&&(r=r.concat(Vl(s,t,i,n))),r}function Fp(t,e){const n=e.query,i=Ss(t,n);return{hashFn:()=>(yT(e)||B.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?DT(t,n._path,i):xT(t,n._path);{const r=xI(s,n);return $r(t,n,null,r)}}}}function Ss(t,e){const n=_o(e);return t.queryToTagMap.get(n)}function _o(t){return t._path.toString()+"$"+t._queryIdentifier}function Kl(t,e){return t.tagToQueryMap.get(e)}function Gl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function ql(t,e,n){const i=t.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");const s=po(t.pendingWriteTree_,e);return Vl(i,n,s,null)}function FT(t){return t.fold((e,n,i)=>{if(n&&vn(n))return[go(n)];{let s=[];return n&&(s=Np(n)),Fe(i,(r,o)=>{s=s.concat(o)}),s}})}function as(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(AT())(t._repo,t._path):t}function UT(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=_o(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function $T(){return NT++}function BT(t,e,n){const i=e._path,s=Ss(t,e),r=Fp(t,n),o=t.listenProvider_.startListening(as(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)S(!vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!J(c)&&d&&vn(d))return[go(d).query];{let h=[];return d&&(h=h.concat(Np(d).map(g=>g.query))),Fe(u,(g,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(as(d),Ss(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yl(n)}node(){return this.node_}}class Ql{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new Ql(this.syncTree_,n)}node(){return zl(this.syncTree_,this.path_)}}const HT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},od=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WT(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},WT=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&S(!1,"Unexpected increment value: "+i);const s=e.node();if(S(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Up=function(t,e,n,i){return Jl(e,new Ql(n,t),i)},$p=function(t,e,n){return Jl(t,new Yl(e),n)};function Jl(t,e,n){const i=t.getPriority().val(),s=od(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=od(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new xe(a,Ee(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new xe(s))),o.forEachChild(we,(a,l)=>{const c=Jl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Zl(t,e){let n=e instanceof ue?e:new ue(e),i=t,s=Y(n);for(;s!==null;){const r=Ci(i.node.children,s)||{children:{},childCount:0};i=new Xl(s,i,r),n=ge(n),s=Y(n)}return i}function Fi(t){return t.node.value}function Bp(t,e){t.node.value=e,Ua(t)}function Hp(t){return t.node.childCount>0}function VT(t){return Fi(t)===void 0&&!Hp(t)}function mo(t,e){Fe(t.node.children,(n,i)=>{e(new Xl(n,t,i))})}function jp(t,e,n,i){n&&!i&&e(t),mo(t,s=>{jp(s,e,!0,i)}),n&&i&&e(t)}function zT(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Hs(t){return new ue(t.parent===null?t.name:Hs(t.parent)+"/"+t.name)}function Ua(t){t.parent!==null&&KT(t.parent,t.name,t)}function KT(t,e,n){const i=VT(n),s=Rt(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ua(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ua(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/[\[\].#$\/\u0000-\u001F\u007F]/,qT=/[\[\].#$\u0000-\u001F\u007F]/,zo=10*1024*1024,ec=function(t){return typeof t=="string"&&t.length!==0&&!GT.test(t)},Wp=function(t){return typeof t=="string"&&t.length!==0&&!qT.test(t)},YT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wp(t)},Vp=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!uo(t)||t&&typeof t=="object"&&Rt(t,".sv")},$a=function(t,e,n,i){i&&e===void 0||yo(Ti(t,"value"),e,n)},yo=function(t,e,n){const i=n instanceof ue?new fC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Rn(i)+" with contents = "+e.toString());if(uo(e))throw new Error(t+"contains "+e.toString()+" "+Rn(i));if(typeof e=="string"&&e.length>zo/3&&io(e)>zo)throw new Error(t+"contains a string greater than "+zo+" utf8 bytes "+Rn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Fe(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ec(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pC(i,o),yo(t,a,i),gC(i)}),s&&r)throw new Error(t+' contains ".value" child '+Rn(i)+" in addition to actual children.")}},QT=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=ws(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ec(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hC);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&it(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},zp=function(t,e,n,i){if(i&&e===void 0)return;const s=Ti(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Fe(e,(o,a)=>{const l=new ue(o);if(yo(s,a,be(n,l)),Ol(l)===".priority"&&!Vp(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),QT(s,r)},JT=function(t,e,n){if(!(n&&e===void 0)){if(uo(e))throw new Error(Ti(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Vp(e))throw new Error(Ti(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Kp=function(t,e,n,i){if(!(i&&n===void 0)&&!Wp(n))throw new Error(Ti(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XT=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Kp(t,e,n,i)},di=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ZT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ec(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YT(n))throw new Error(Ti(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vo(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!xl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Gp(t,e,n){vo(t,n),qp(t,i=>xl(i,e))}function rt(t,e,n){vo(t,n),qp(t,i=>it(i,e)||it(e,i))}function qp(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(tS(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Bn&&Me("event: "+n.toString()),Di(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="repo_interrupt",iS=25;class sS{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pr(),this.transactionQueueTree_=new Xl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rS(t,e,n){if(t.stats_=Nl(t.repoInfo_),t.forceRestClient_||FI())t.server_=new Nr(t.repoInfo_,(i,s,r,o)=>{ad(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ld(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $t(t.repoInfo_,e,(i,s,r,o)=>{ad(t,i,s,r,o)},i=>{ld(t,i)},i=>{aS(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=jI(t.repoInfo_,()=>new HC(t.stats_,t.server_)),t.infoData_=new LC,t.infoSyncTree_=new rd({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Bs(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),tc(t,"connected",!1),t.serverSyncTree_=new rd({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);rt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function oS(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bo(t){return HT({timestamp:oS(t)})}function ad(t,e,n,i,s){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=br(n,c=>Ee(c));o=MT(t.serverSyncTree_,r,l,s)}else{const l=Ee(n);o=Dp(t.serverSyncTree_,r,l,s)}else if(i){const l=br(n,c=>Ee(c));o=OT(t.serverSyncTree_,r,l)}else{const l=Ee(n);o=Bs(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ni(t,r)),rt(t.eventQueue_,a,o)}function ld(t,e){tc(t,"connected",e),e===!1&&dS(t)}function aS(t,e){Fe(e,(n,i)=>{tc(t,n,i)})}function tc(t,e,n){const i=new ue("/.info/"+e),s=Ee(n);t.infoData_.updateSnapshot(i,s);const r=Bs(t.infoSyncTree_,i,s);rt(t.eventQueue_,i,r)}function nc(t){return t.nextWriteId_++}function lS(t,e,n){const i=LT(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Ee(s).withIndex(e._queryParams.getIndex());Fa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Bs(t.serverSyncTree_,e._path,r);else{const a=Ss(t.serverSyncTree_,e);o=Dp(t.serverSyncTree_,e._path,r,a)}return rt(t.eventQueue_,e._path,o),$r(t.serverSyncTree_,e,n,null,!0),r},s=>(js(t,"get for query "+Pe(e)+" failed: "+s),Promise.reject(new Error(s))))}function cS(t,e,n,i,s){js(t,"set",{path:e.toString(),value:n,priority:i});const r=bo(t),o=Ee(n,i),a=zl(t.serverSyncTree_,e),l=$p(o,a,r),c=nc(t),d=xp(t.serverSyncTree_,e,l,c,!0);vo(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const m=h==="ok";m||Ke("set at "+e+" failed: "+h);const b=rn(t.serverSyncTree_,c,!m);rt(t.eventQueue_,e,b),bn(t,s,h,g)});const u=sc(t,e);Ni(t,u),rt(t.eventQueue_,u,[])}function uS(t,e,n,i){js(t,"update",{path:e.toString(),value:n});let s=!0;const r=bo(t),o={};if(Fe(n,(a,l)=>{s=!1,o[a]=Up(be(e,a),Ee(l),t.serverSyncTree_,r)}),s)Me("update() called with empty data.  Don't do anything."),bn(t,i,"ok",void 0);else{const a=nc(t),l=PT(t.serverSyncTree_,e,o,a);vo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Ke("update at "+e+" failed: "+c);const h=rn(t.serverSyncTree_,a,!u),g=h.length>0?Ni(t,e):e;rt(t.eventQueue_,g,h),bn(t,i,c,d)}),Fe(n,c=>{const d=sc(t,be(e,c));Ni(t,d)}),rt(t.eventQueue_,e,[])}}function dS(t){js(t,"onDisconnectEvents");const e=bo(t),n=Pr();Pa(t.onDisconnect_,oe(),(s,r)=>{const o=Up(s,r,t.serverSyncTree_,e);Mi(n,s,o)});let i=[];Pa(n,oe(),(s,r)=>{i=i.concat(Bs(t.serverSyncTree_,s,r));const o=sc(t,s);Ni(t,o)}),t.onDisconnect_=Pr(),rt(t.eventQueue_,oe(),i)}function hS(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Na(t.onDisconnect_,e),bn(t,n,i,s)})}function cd(t,e,n,i){const s=Ee(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Mi(t.onDisconnect_,e,s),bn(t,i,r,o)})}function fS(t,e,n,i,s){const r=Ee(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Mi(t.onDisconnect_,e,r),bn(t,s,o,a)})}function pS(t,e,n,i){if(vr(n)){Me("onDisconnect().update() called with empty data.  Don't do anything."),bn(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&Fe(n,(o,a)=>{const l=Ee(a);Mi(t.onDisconnect_,be(e,o),l)}),bn(t,i,s,r)})}function gS(t,e,n){let i;Y(e._path)===".info"?i=Fa(t.infoSyncTree_,e,n):i=Fa(t.serverSyncTree_,e,n),Gp(t.eventQueue_,e._path,i)}function ud(t,e,n){let i;Y(e._path)===".info"?i=$r(t.infoSyncTree_,e,n):i=$r(t.serverSyncTree_,e,n),Gp(t.eventQueue_,e._path,i)}function _S(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nS)}function js(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function bn(t,e,n,i){e&&Di(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Yp(t,e,n){return zl(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function ic(t,e=t.transactionQueueTree_){if(e||wo(t,e),Fi(e)){const n=Jp(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&mS(t,Hs(e),n)}else Hp(e)&&mo(e,n=>{ic(t,n)})}function mS(t,e,n){const i=n.map(c=>c.currentWriteId),s=Yp(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ze(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{js(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(rn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();wo(t,Zl(t.transactionQueueTree_,e)),ic(t,t.transactionQueueTree_),rt(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)Di(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ni(t,e)}},o)}function Ni(t,e){const n=Qp(t,e),i=Hs(n),s=Jp(t,n);return yS(t,s,i),i}function yS(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let d=!1,u;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(rn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=iS)d=!0,u="maxretry",s=s.concat(rn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Yp(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){yo("transaction failed: Data returned ",g,l.path);let m=Ee(g);typeof g=="object"&&g!=null&&Rt(g,".priority")||(m=m.updatePriority(h.getPriority()));const k=l.currentWriteId,P=bo(t),O=$p(m,h,P);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=O,l.currentWriteId=nc(t),o.splice(o.indexOf(k),1),s=s.concat(xp(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),s=s.concat(rn(t.serverSyncTree_,k,!0))}else d=!0,u="nodata",s=s.concat(rn(t.serverSyncTree_,l.currentWriteId,!0))}rt(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}wo(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Di(i[a]);ic(t,t.transactionQueueTree_)}function Qp(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Fi(i)===void 0;)i=Zl(i,n),e=ge(e),n=Y(e);return i}function Jp(t,e){const n=[];return Xp(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Xp(t,e,n){const i=Fi(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);mo(e,s=>{Xp(t,s,n)})}function wo(t,e){const n=Fi(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Bp(e,n.length>0?n:void 0)}mo(e,i=>{wo(t,i)})}function sc(t,e){const n=Hs(Qp(t,e)),i=Zl(t.transactionQueueTree_,e);return zT(i,s=>{Ko(t,s)}),Ko(t,i),jp(i,s=>{Ko(t,s)}),n}function Ko(t,e){const n=Fi(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bp(e,void 0):n.length=r+1,rt(t.eventQueue_,Hs(e),s);for(let o=0;o<i.length;o++)Di(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function bS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const dd=function(t,e){const n=wS(t),i=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kI();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new np(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ue(n.pathString)}},wS=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(s=vS(t.substring(d,u)));const h=bS(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class eg{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new wt;return hS(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){di("OnDisconnect.remove",this._path);const e=new wt;return cd(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){di("OnDisconnect.set",this._path),$a("OnDisconnect.set",e,this._path,!1);const n=new wt;return cd(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){di("OnDisconnect.setWithPriority",this._path),$a("OnDisconnect.setWithPriority",e,this._path,!1),JT("OnDisconnect.setWithPriority",n,!1);const i=new wt;return fS(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){di("OnDisconnect.update",this._path),zp("OnDisconnect.update",e,this._path,!1);const n=new wt;return pS(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return J(this._path)?null:Ol(this._path)}get ref(){return new kt(this._repo,this._path)}get _queryIdentifier(){const e=Yu(this._queryParams),n=kl(e);return n==="{}"?"default":n}get _queryObject(){return Yu(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof rc))return!1;const n=this._repo===e._repo,i=xl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dC(this._path)}}class kt extends rc{constructor(e,n){super(e,n,new Fl,!1)}get parent(){const e=dp(this._path);return e===null?null:new kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),i=Br(this.ref,e);return new Pi(this._node.getChild(n),i,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Pi(s,Br(this.ref,i),we)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function p0(t,e){return t=Be(t),t._checkNotDeleted("ref"),e!==void 0?Br(t._root,e):t._root}function Br(t,e){return t=Be(t),Y(t._path)===null?XT("child","path",e,!1):Kp("child","path",e,!1),new kt(t._repo,be(t._path,e))}function g0(t){return t=Be(t),new ES(t._repo,t._path)}function _0(t){return di("remove",t._path),IS(t,null)}function IS(t,e){t=Be(t),di("set",t._path),$a("set",e,t._path,!1);const n=new wt;return cS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function m0(t,e){zp("update",e,t._path,!1);const n=new wt;return uS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function y0(t){t=Be(t);const e=new tg(()=>{}),n=new Eo(e);return lS(t._repo,t,n).then(i=>new Pi(i,new kt(t._repo,t._path),t._queryParams.getIndex()))}class Eo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Zp("value",this,new Pi(e.snapshotNode,new kt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new eg(this,e,n):null}matches(e){return e instanceof Eo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class oc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new eg(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const i=Br(new kt(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new Zp(e.type,this,new Pi(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof oc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function CS(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,c=(d,u)=>{ud(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new tg(n,r||void 0),a=e==="value"?new Eo(o):new oc(e,o);return gS(t._repo,t,a),()=>ud(t._repo,t,a)}function v0(t,e,n,i){return CS(t,"value",e,n,i)}IT(kt);kT(kt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="FIREBASE_DATABASE_EMULATOR_HOST",Ba={};let SS=!1;function RS(t,e,n,i){t.repoInfo_=new np(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function kS(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dd(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[TS]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=dd(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const d=s&&l?new yi(yi.OWNER):new $I(t.name,t.options,e);ZT("Invalid Firebase Database URL",o),J(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=NS(a,t,d,new UI(t.name,n));return new PS(u,t)}function AS(t,e){const n=Ba[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_S(t),delete n[t.key]}function NS(t,e,n,i){let s=Ba[e.name];s||(s={},Ba[e.name]=s);let r=s[t.toURLString()];return r&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sS(t,SS,n,i),s[t.toURLString()]=r,r}class PS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kt(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function OS(t=bl(),e){const n=so(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=ef("database");i&&xS(n,...i)}return n}function xS(t,e,n,i={}){t=Be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new yi(yi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:ob(i.mockUserToken,t.app.options.projectId);r=new yi(o)}RS(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){II(xs),Vn(new gn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kS(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Et(Ou,xu,t),Et(Ou,xu,"esm2017")}$t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DS();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="type.googleapis.com/google.protobuf.Int64Value",LS="type.googleapis.com/google.protobuf.UInt64Value";function ng(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function Ha(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Ha(e));if(typeof t=="function"||typeof t=="object")return ng(t,e=>Ha(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Hr(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case MS:case LS:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Hr(e)):typeof t=="function"||typeof t=="object"?ng(t,e=>Hr(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class bi extends zt{constructor(e,n,i){super(`${ac}/${e}`,n||""),this.details=i}}function FS(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function US(t,e){let n=FS(t),i=n,s;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!hd[o])return new bi("internal","internal");n=hd[o],i=o}const a=r.message;typeof a=="string"&&(i=a),s=r.details,s!==void 0&&(s=Hr(s))}}catch{}return n==="ok"?null:new bi(n,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="us-central1";function BS(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new bi("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class HS{constructor(e,n,i,s,r=ja,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new $S(n,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=ja}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function jS(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function WS(t,e,n){return i=>zS(t,e,i,n||{})}async function VS(t,e,n,i){n["Content-Type"]="application/json";let s;try{s=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function zS(t,e,n,i){const s=t._url(e);return KS(t,s,n,i)}async function KS(t,e,n,i){n=Ha(n);const s={data:n},r={},o=await t.contextProvider.getContext();o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,l=BS(a),c=await Promise.race([VS(e,s,r,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new bi("cancelled","Firebase Functions instance was deleted.");const d=US(c.status,c.json);if(d)throw d;if(!c.json)throw new bi("internal","Response is not valid JSON object.");let u=c.json.data;if(typeof u>"u"&&(u=c.json.result),typeof u>"u")throw new bi("internal","Response is missing data field.");return{data:Hr(u)}}const fd="@firebase/functions",pd="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="auth-internal",qS="app-check-internal",YS="messaging-internal";function QS(t,e){const n=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(GS),a=i.getProvider(YS),l=i.getProvider(qS);return new HS(r,o,a,l,s,t)};Vn(new gn(ac,n,"PUBLIC").setMultipleInstances(!0)),Et(fd,pd,e),Et(fd,pd,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t=bl(),e=ja){const i=so(Be(t),ac).getImmediate({identifier:e}),s=ef("functions");return s&&XS(i,...s),i}function XS(t,e,n){jS(Be(t),e,n)}function b0(t,e,n){return WS(Be(t),e,n)}QS(fetch.bind(self));const ZS={apiKey:"AIzaSyAXm-1aMaGvQHRHIh6RC09aB8ZD8CJgpuk",authDomain:"geohunt-dff18.firebaseapp.com",projectId:"geohunt-dff18",storageBucket:"geohunt-dff18.appspot.com",messagingSenderId:"969092699325",appId:"1:969092699325:web:ce0294c9e7ce302197d3d4",measurementId:"G-JQBVMQ6NBN",databaseURL:"https://geohunt-dff18-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"gs://geohunt-dff18.appspot.com"},lc=lf(ZS);EI(lc);const w0=OS(lc);JS(lc);let e0=zv({history:Vy(),routes:Qv});const ig=dy(vy);ig.use(e0);ig.mount("#app");export{d0 as A,o0 as B,h0 as C,Nm as D,Xg as E,Xe as F,nr as G,Ji as H,ah as I,lh as J,n0 as K,Ut as L,nt as M,Ld as N,Le as O,Am as P,a0 as Q,t0 as R,_y as _,EI as a,y0 as b,Br as c,OS as d,_0 as e,Y_ as f,JS as g,b0 as h,c0 as i,Ih as j,Ve as k,u0 as l,w0 as m,v0 as n,ll as o,g0 as p,rh as q,p0 as r,f0 as s,r0 as t,m0 as u,i0 as v,eh as w,s0 as x,cl as y,l0 as z};
