(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function En(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function za(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Se(i)?v_(i):za(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Se(t))return t;if(ce(t))return t}}const g_=/;(?![^(]*\))/g,m_=/:([^]+)/,y_=/\/\*.*?\*\//gs;function v_(t){const e={};return t.replace(y_,"").split(g_).forEach(n=>{if(n){const i=n.split(m_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ka(t){let e="";if(Se(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const i=Ka(t[n]);i&&(e+=i+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E_="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",b_="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",w_=En(E_),C_=En(b_),I_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T_=En(I_);function Eh(t){return!!t||t===""}const _R=t=>Se(t)?t:t==null?"":H(t)||ce(t)&&(t.toString===Ih||!W(t.toString))?JSON.stringify(t,bh,2):String(t),bh=(t,e)=>e&&e.__v_isRef?bh(t,e.value):On(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ch(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!H(e)&&!Th(e)?String(e):e,de=Object.freeze({}),di=Object.freeze([]),Qe=()=>{},wh=()=>!1,S_=/^on[^a-z]/,Rs=t=>S_.test(t),cr=t=>t.startsWith("onUpdate:"),Re=Object.assign,qa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R_=Object.prototype.hasOwnProperty,ee=(t,e)=>R_.call(t,e),H=Array.isArray,On=t=>Ur(t)==="[object Map]",Ch=t=>Ur(t)==="[object Set]",W=t=>typeof t=="function",Se=t=>typeof t=="string",Ya=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Qa=t=>ce(t)&&W(t.then)&&W(t.catch),Ih=Object.prototype.toString,Ur=t=>Ih.call(t),Ja=t=>Ur(t).slice(8,-1),Th=t=>Ur(t)==="[object Object]",Xa=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=En(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A_=En("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N_=/-(\w)/g,Tt=Br(t=>t.replace(N_,(e,n)=>n?n.toUpperCase():"")),k_=/\B([A-Z])/g,hn=Br(t=>t.replace(k_,"-$1").toLowerCase()),Bn=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cn=Br(t=>t?`on${Bn(t)}`:""),ls=(t,e)=>!Object.is(t,e),Ui=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},O_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pc;const Sh=()=>pc||(pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ko(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let ut;class P_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ut,!e&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ut;try{return ut=this,e()}finally{ut=n}}else Ko("cannot run an inactive effect scope.")}on(){ut=this}off(){ut=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function x_(t,e=ut){e&&e.active&&e.effects.push(t)}function D_(){return ut}const Za=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rh=t=>(t.w&dn)>0,Ah=t=>(t.n&dn)>0,M_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=dn},L_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Rh(s)&&!Ah(s)?s.delete(t):e[n++]=s,s.w&=~dn,s.n&=~dn}e.length=n}},hr=new WeakMap;let qi=0,dn=1;const qo=30;let je;const Pn=Symbol("iterate"),Yo=Symbol("Map key iterate");class el{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,x_(this,i)}run(){if(!this.active)return this.fn();let e=je,n=on;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,on=!0,dn=1<<++qi,qi<=qo?M_(this):_c(this),this.fn()}finally{qi<=qo&&L_(this),dn=1<<--qi,je=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(_c(this),this.onStop&&this.onStop(),this.active=!1)}}function _c(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let on=!0;const Nh=[];function qn(){Nh.push(on),on=!1}function Yn(){const t=Nh.pop();on=t===void 0?!0:t}function Xe(t,e,n){if(on&&je){let i=hr.get(t);i||hr.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Za()),kh(s,{effect:je,target:t,type:e,key:n})}}function kh(t,e){let n=!1;qi<=qo?Ah(t)||(t.n|=dn,n=!Rh(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t),je.onTrack&&je.onTrack(Object.assign({effect:je},e)))}function Ht(t,e,n,i,s,r){const o=hr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(i);o.forEach((h,u)=>{(u==="length"||u>=c)&&a.push(h)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Xa(n)&&a.push(o.get("length")):(a.push(o.get(Pn)),On(t)&&a.push(o.get(Yo)));break;case"delete":H(t)||(a.push(o.get(Pn)),On(t)&&a.push(o.get(Yo)));break;case"set":On(t)&&a.push(o.get(Pn));break}const l={target:t,type:e,key:n,newValue:i,oldValue:s,oldTarget:r};if(a.length===1)a[0]&&Qo(a[0],l);else{const c=[];for(const h of a)h&&c.push(...h);Qo(Za(c),l)}}function Qo(t,e){const n=H(t)?t:[...t];for(const i of n)i.computed&&gc(i,e);for(const i of n)i.computed||gc(i,e)}function gc(t,e){(t!==je||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Re({effect:t},e)),t.scheduler?t.scheduler():t.run())}function F_(t,e){var n;return(n=hr.get(t))===null||n===void 0?void 0:n.get(e)}const $_=En("__proto__,__v_isRef,__isVue"),Oh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ya)),U_=Hr(),B_=Hr(!1,!0),H_=Hr(!0),W_=Hr(!0,!0),mc=V_();function V_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=G(this);for(let r=0,o=this.length;r<o;r++)Xe(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qn();const i=G(this)[e].apply(this,n);return Yn(),i}}),t}function j_(t){const e=G(this);return Xe(e,"has",t),e.hasOwnProperty(t)}function Hr(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Uh:$h:e?Fh:Lh).get(i))return i;const o=H(i);if(!t){if(o&&ee(mc,s))return Reflect.get(mc,s,r);if(s==="hasOwnProperty")return j_}const a=Reflect.get(i,s,r);return(Ya(s)?Oh.has(s):$_(s))||(t||Xe(i,"get",s),e)?a:Ne(a)?o&&Xa(s)?a:a.value:ce(a)?t?Bh(a):As(a):a}}const G_=Ph(),z_=Ph(!0);function Ph(t=!1){return function(n,i,s,r){let o=n[i];if(fn(o)&&Ne(o)&&!Ne(s))return!1;if(!t&&(!dr(s)&&!fn(s)&&(o=G(o),s=G(s)),!H(n)&&Ne(o)&&!Ne(s)))return o.value=s,!0;const a=H(n)&&Xa(i)?Number(i)<n.length:ee(n,i),l=Reflect.set(n,i,s,r);return n===G(r)&&(a?ls(s,o)&&Ht(n,"set",i,s,o):Ht(n,"add",i,s)),l}}function K_(t,e){const n=ee(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&Ht(t,"delete",e,void 0,i),s}function q_(t,e){const n=Reflect.has(t,e);return(!Ya(e)||!Oh.has(e))&&Xe(t,"has",e),n}function Y_(t){return Xe(t,"iterate",H(t)?"length":Pn),Reflect.ownKeys(t)}const xh={get:U_,set:G_,deleteProperty:K_,has:q_,ownKeys:Y_},Dh={get:H_,set(t,e){return Ko(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Ko(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},Q_=Re({},xh,{get:B_,set:z_}),J_=Re({},Dh,{get:W_}),tl=t=>t,Wr=t=>Reflect.getPrototypeOf(t);function Vs(t,e,n=!1,i=!1){t=t.__v_raw;const s=G(t),r=G(e);n||(e!==r&&Xe(s,"get",e),Xe(s,"get",r));const{has:o}=Wr(s),a=i?tl:n?nl:cs;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function js(t,e=!1){const n=this.__v_raw,i=G(n),s=G(t);return e||(t!==s&&Xe(i,"has",t),Xe(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gs(t,e=!1){return t=t.__v_raw,!e&&Xe(G(t),"iterate",Pn),Reflect.get(t,"size",t)}function yc(t){t=G(t);const e=G(this);return Wr(e).has.call(e,t)||(e.add(t),Ht(e,"add",t,t)),this}function vc(t,e){e=G(e);const n=G(this),{has:i,get:s}=Wr(n);let r=i.call(n,t);r?Mh(n,i,t):(t=G(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ls(e,o)&&Ht(n,"set",t,e,o):Ht(n,"add",t,e),this}function Ec(t){const e=G(this),{has:n,get:i}=Wr(e);let s=n.call(e,t);s?Mh(e,n,t):(t=G(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&Ht(e,"delete",t,void 0,r),o}function bc(){const t=G(this),e=t.size!==0,n=On(t)?new Map(t):new Set(t),i=t.clear();return e&&Ht(t,"clear",void 0,void 0,n),i}function zs(t,e){return function(i,s){const r=this,o=r.__v_raw,a=G(o),l=e?tl:t?nl:cs;return!t&&Xe(a,"iterate",Pn),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Ks(t,e,n){return function(...i){const s=this.__v_raw,r=G(s),o=On(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),h=n?tl:e?nl:cs;return!e&&Xe(r,"iterate",l?Yo:Pn),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Bn(t)} operation ${n}failed: target is readonly.`,G(this))}return t==="delete"?!1:this}}function X_(){const t={get(r){return Vs(this,r)},get size(){return Gs(this)},has:js,add:yc,set:vc,delete:Ec,clear:bc,forEach:zs(!1,!1)},e={get(r){return Vs(this,r,!1,!0)},get size(){return Gs(this)},has:js,add:yc,set:vc,delete:Ec,clear:bc,forEach:zs(!1,!0)},n={get(r){return Vs(this,r,!0)},get size(){return Gs(this,!0)},has(r){return js.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:zs(!0,!1)},i={get(r){return Vs(this,r,!0,!0)},get size(){return Gs(this,!0)},has(r){return js.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ks(r,!1,!1),n[r]=Ks(r,!0,!1),e[r]=Ks(r,!1,!0),i[r]=Ks(r,!0,!0)}),[t,n,e,i]}const[Z_,eg,tg,ng]=X_();function Vr(t,e){const n=e?t?ng:tg:t?eg:Z_;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ee(n,s)&&s in i?n:i,s,r)}const ig={get:Vr(!1,!1)},sg={get:Vr(!1,!0)},rg={get:Vr(!0,!1)},og={get:Vr(!0,!0)};function Mh(t,e,n){const i=G(n);if(i!==n&&e.call(t,i)){const s=Ja(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Lh=new WeakMap,Fh=new WeakMap,$h=new WeakMap,Uh=new WeakMap;function ag(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lg(t){return t.__v_skip||!Object.isExtensible(t)?0:ag(Ja(t))}function As(t){return fn(t)?t:jr(t,!1,xh,ig,Lh)}function cg(t){return jr(t,!1,Q_,sg,Fh)}function Bh(t){return jr(t,!0,Dh,rg,$h)}function li(t){return jr(t,!0,J_,og,Uh)}function jr(t,e,n,i,s){if(!ce(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=lg(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function xn(t){return fn(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function dr(t){return!!(t&&t.__v_isShallow)}function Jo(t){return xn(t)||fn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Hh(t){return ur(t,"__v_skip",!0),t}const cs=t=>ce(t)?As(t):t,nl=t=>ce(t)?Bh(t):t;function Wh(t){on&&je&&(t=G(t),kh(t.dep||(t.dep=Za()),{target:t,type:"get",key:"value"}))}function Vh(t,e){t=G(t);const n=t.dep;n&&Qo(n,{target:t,type:"set",key:"value",newValue:e})}function Ne(t){return!!(t&&t.__v_isRef===!0)}function ug(t){return jh(t,!1)}function hg(t){return jh(t,!0)}function jh(t,e){return Ne(t)?t:new dg(t,e)}class dg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:cs(e)}get value(){return Wh(this),this._value}set value(e){const n=this.__v_isShallow||dr(e)||fn(e);e=n?e:G(e),ls(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:cs(e),Vh(this,e))}}function fi(t){return Ne(t)?t.value:t}const fg={get:(t,e,n)=>fi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Gh(t){return xn(t)?t:new Proxy(t,fg)}class pg{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return F_(G(this._object),this._key)}}function gR(t,e,n){const i=t[e];return Ne(i)?i:new pg(t,e,n)}var zh;class _g{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[zh]=!1,this._dirty=!0,this.effect=new el(e,()=>{this._dirty||(this._dirty=!0,Vh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=G(this);return Wh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}zh="__v_isReadonly";function gg(t,e,n=!1){let i,s;const r=W(t);r?(i=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=t.get,s=t.set);const o=new _g(i,s,r||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Dn=[];function er(t){Dn.push(t)}function tr(){Dn.pop()}function C(t,...e){qn();const n=Dn.length?Dn[Dn.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=mg();if(i)$t(i,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${Xr(n,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${t}`,...e];s.length&&r.push(`
`,...yg(s)),console.warn(...r)}Yn()}function mg(){let t=Dn[Dn.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function yg(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...vg(n))}),e}function vg({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,s=` at <${Xr(t.component,t.type,i)}`,r=">"+n;return t.props?[s,...Eg(t.props),r]:[s+r]}function Eg(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...Kh(i,t[i]))}),n.length>3&&e.push(" ..."),e}function Kh(t,e,n){return Se(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Ne(e)?(e=Kh(t,G(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):W(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=G(e),n?e:[`${t}=`,e])}const il={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function $t(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Gr(r,e,n)}return s}function rt(t,e,n,i){if(W(t)){const r=$t(t,e,n,i);return r&&Qa(r)&&r.catch(o=>{Gr(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(rt(t[r],e,n,i));return s}function Gr(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=il[n];for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){$t(l,null,10,[t,o,a]);return}}bg(t,n,s,i)}function bg(t,e,n,i=!0){{const s=il[e];if(n&&er(n),C(`Unhandled error${s?` during execution of ${s}`:""}`),n&&tr(),i)throw t;console.error(t)}}let us=!1,Xo=!1;const Be=[];let Et=0;const pi=[];let vt=null,Qt=0;const qh=Promise.resolve();let sl=null;const wg=100;function Yh(t){const e=sl||qh;return t?e.then(this?t.bind(this):t):e}function Cg(t){let e=Et+1,n=Be.length;for(;e<n;){const i=e+n>>>1;hs(Be[i])<t?e=i+1:n=i}return e}function zr(t){(!Be.length||!Be.includes(t,us&&t.allowRecurse?Et+1:Et))&&(t.id==null?Be.push(t):Be.splice(Cg(t.id),0,t),Qh())}function Qh(){!us&&!Xo&&(Xo=!0,sl=qh.then(Zh))}function Ig(t){const e=Be.indexOf(t);e>Et&&Be.splice(e,1)}function Jh(t){H(t)?pi.push(...t):(!vt||!vt.includes(t,t.allowRecurse?Qt+1:Qt))&&pi.push(t),Qh()}function wc(t,e=us?Et+1:0){for(t=t||new Map;e<Be.length;e++){const n=Be[e];if(n&&n.pre){if(rl(t,n))continue;Be.splice(e,1),e--,n()}}}function Xh(t){if(pi.length){const e=[...new Set(pi)];if(pi.length=0,vt){vt.push(...e);return}for(vt=e,t=t||new Map,vt.sort((n,i)=>hs(n)-hs(i)),Qt=0;Qt<vt.length;Qt++)rl(t,vt[Qt])||vt[Qt]();vt=null,Qt=0}}const hs=t=>t.id==null?1/0:t.id,Tg=(t,e)=>{const n=hs(t)-hs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zh(t){Xo=!1,us=!0,t=t||new Map,Be.sort(Tg);const e=n=>rl(t,n);try{for(Et=0;Et<Be.length;Et++){const n=Be[Et];if(n&&n.active!==!1){if(e(n))continue;$t(n,null,14)}}}finally{Et=0,Be.length=0,Xh(t),us=!1,sl=null,(Be.length||pi.length)&&Zh(t)}}function rl(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>wg){const i=e.ownerInstance,s=i&&_l(i.type);return C(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let Mn=!1;const ai=new Set;Sh().__VUE_HMR_RUNTIME__={createRecord:Co(ed),rerender:Co(Ag),reload:Co(Ng)};const Hn=new Map;function Sg(t){const e=t.type.__hmrId;let n=Hn.get(e);n||(ed(e,t.type),n=Hn.get(e)),n.instances.add(t)}function Rg(t){Hn.get(t.type.__hmrId).instances.delete(t)}function ed(t,e){return Hn.has(t)?!1:(Hn.set(t,{initialDef:Qi(e),instances:new Set}),!0)}function Qi(t){return xd(t)?t.__vccOpts:t}function Ag(t,e){const n=Hn.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(i=>{e&&(i.render=e,Qi(i.type).render=e),i.renderCache=[],Mn=!0,i.update(),Mn=!1}))}function Ng(t,e){const n=Hn.get(t);if(!n)return;e=Qi(e),Cc(n.initialDef,e);const i=[...n.instances];for(const s of i){const r=Qi(s.type);ai.has(r)||(r!==n.initialDef&&Cc(r,e),ai.add(r)),s.appContext.optionsCache.delete(s.type),s.ceReload?(ai.add(r),s.ceReload(e.styles),ai.delete(r)):s.parent?zr(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Jh(()=>{for(const s of i)ai.delete(Qi(s.type))})}function Cc(t,e){Re(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Co(t){return(e,n)=>{try{return t(e,n)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let bt,Yi=[],Zo=!1;function Ns(t,...e){bt?bt.emit(t,...e):Zo||Yi.push({event:t,args:e})}function td(t,e){var n,i;bt=t,bt?(bt.enabled=!0,Yi.forEach(({event:s,args:r})=>bt.emit(s,...r)),Yi=[]):typeof window<"u"&&window.HTMLElement&&!(!((i=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||i===void 0)&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{td(r,e)}),setTimeout(()=>{bt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Zo=!0,Yi=[])},3e3)):(Zo=!0,Yi=[])}function kg(t,e){Ns("app:init",t,e,{Fragment:Ze,Text:Os,Comment:$e,Static:Zi})}function Og(t){Ns("app:unmount",t)}const Pg=ol("component:added"),nd=ol("component:updated"),xg=ol("component:removed"),Dg=t=>{bt&&typeof bt.cleanupBuffer=="function"&&!bt.cleanupBuffer(t)&&xg(t)};function ol(t){return e=>{Ns(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const Mg=id("perf:start"),Lg=id("perf:end");function id(t){return(e,n,i)=>{Ns(t,e.appContext.app,e.uid,e,n,i)}}function Fg(t,e,n){Ns("component:emit",t.appContext.app,t,e,n)}function $g(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||de;{const{emitsOptions:h,propsOptions:[u]}=t;if(h)if(!(e in h))(!u||!(Cn(e)in u))&&C(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Cn(e)}" prop.`);else{const d=h[e];W(d)&&(d(...n)||C(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=i[h]||de;d&&(s=n.map(p=>Se(p)?p.trim():p)),u&&(s=n.map(O_))}Fg(t,e,s);{const h=e.toLowerCase();h!==e&&i[Cn(h)]&&C(`Event "${h}" is emitted in component ${Xr(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hn(e)}" instead of "${e}".`)}let a,l=i[a=Cn(e)]||i[a=Cn(Tt(e))];!l&&r&&(l=i[a=Cn(hn(e))]),l&&rt(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(c,t,6,s)}}function sd(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const h=sd(c,e,!0);h&&(a=!0,Re(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ce(t)&&i.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Re(o,r),ce(t)&&i.set(t,o),o)}function Kr(t,e){return!t||!Rs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,hn(e))||ee(t,e))}let De=null,qr=null;function fr(t){const e=De;return De=t,qr=t&&t.type.__scopeId||null,e}function mR(t){qr=t}function yR(){qr=null}const vR=t=>rd;function rd(t,e=De,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Mc(-1);const r=fr(e);let o;try{o=t(...s)}finally{fr(r),i._d&&Mc(1)}return nd(e),o};return i._n=!0,i._c=!0,i._d=!0,i}let ea=!1;function pr(){ea=!0}function Io(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:h,renderCache:u,data:d,setupState:p,ctx:g,inheritAttrs:E}=t;let A,O;const P=fr(t);ea=!1;try{if(n.shapeFlag&4){const Q=s||i;A=ht(h.call(Q,Q,u,r,p,d,g)),O=l}else{const Q=e;l===r&&pr(),A=ht(Q.length>1?Q(r,{get attrs(){return pr(),l},slots:a,emit:c}):Q(r,null)),O=e.props?l:Bg(l)}}catch(Q){es.length=0,Gr(Q,t,1),A=Ge($e)}let $=A,F;if(A.patchFlag>0&&A.patchFlag&2048&&([$,F]=Ug(A)),O&&E!==!1){const Q=Object.keys(O),{shapeFlag:Ee}=$;if(Q.length){if(Ee&7)o&&Q.some(cr)&&(O=Hg(O,o)),$=St($,O);else if(!ea&&$.type!==$e){const ke=Object.keys(l),K=[],re=[];for(let le=0,Oe=ke.length;le<Oe;le++){const be=ke[le];Rs(be)?cr(be)||K.push(be[2].toLowerCase()+be.slice(3)):re.push(be)}re.length&&C(`Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),K.length&&C(`Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Ic($)||C("Runtime directive used on component with non-element root node. The directives will not function as intended."),$=St($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&(Ic($)||C("Component inside <Transition> renders non-element root node that cannot be animated."),$.transition=n.transition),F?F($):A=$,fr(P),A}const Ug=t=>{const e=t.children,n=t.dynamicChildren,i=od(e);if(!i)return[t,void 0];const s=e.indexOf(i),r=n?n.indexOf(i):-1,o=a=>{e[s]=a,n&&(r>-1?n[r]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[ht(i),o]};function od(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(bi(i)){if(i.type!==$e||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Bg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rs(n))&&((e||(e={}))[n]=t[n]);return e},Hg=(t,e)=>{const n={};for(const i in t)(!cr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n},Ic=t=>t.shapeFlag&7||t.type===$e;function Wg(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if((s||a)&&Mn||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Tc(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==i[d]&&!Kr(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tc(i,o,c):!0:!!o;return!1}function Tc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Kr(n,r))return!0}return!1}function Vg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const jg=t=>t.__isSuspense;function Gg(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Jh(t)}function nr(t,e){if(!Te)C("provide() can only be used inside setup().");else{let n=Te.provides;const i=Te.parent&&Te.parent.provides;i===n&&(n=Te.provides=Object.create(i)),n[t]=e}}function Ut(t,e,n=!1){const i=Te||De;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(i.proxy):e;C(`injection "${String(t)}" not found.`)}else C("inject() can only be used inside setup() or functional components.")}function zg(t,e){return al(t,null,e)}const qs={};function Ji(t,e,n){return W(e)||C("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),al(t,e,n)}function al(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=de){e||(n!==void 0&&C('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&C('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=F=>{C("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=D_()===(Te==null?void 0:Te.scope)?Te:null;let c,h=!1,u=!1;if(Ne(t)?(c=()=>t.value,h=dr(t)):xn(t)?(c=()=>t,i=!0):H(t)?(u=!0,h=t.some(F=>xn(F)||dr(F)),c=()=>t.map(F=>{if(Ne(F))return F.value;if(xn(F))return Nn(F);if(W(F))return $t(F,l,2);a(F)})):W(t)?e?c=()=>$t(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),rt(t,l,3,[p])}:(c=Qe,a(t)),e&&i){const F=c;c=()=>Nn(F())}let d,p=F=>{d=P.onStop=()=>{$t(F,l,4)}},g;if(fs)if(p=Qe,e?n&&rt(e,l,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const F=ey();g=F.__watcherHandles||(F.__watcherHandles=[])}else return Qe;let E=u?new Array(t.length).fill(qs):qs;const A=()=>{if(P.active)if(e){const F=P.run();(i||h||(u?F.some((Q,Ee)=>ls(Q,E[Ee])):ls(F,E)))&&(d&&d(),rt(e,l,3,[F,E===qs?void 0:u&&E[0]===qs?[]:E,p]),E=F)}else P.run()};A.allowRecurse=!!e;let O;s==="sync"?O=A:s==="post"?O=()=>Ye(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),O=()=>zr(A));const P=new el(c,O);P.onTrack=r,P.onTrigger=o,e?n?A():E=P.run():s==="post"?Ye(P.run.bind(P),l&&l.suspense):P.run();const $=()=>{P.stop(),l&&l.scope&&qa(l.scope.effects,P)};return g&&g.push($),$}function Kg(t,e,n){const i=this.proxy,s=Se(t)?t.includes(".")?ad(i,t):()=>i[t]:t.bind(i,i);let r;W(e)?r=e:(r=e.handler,n=e);const o=Te;wi(this);const a=al(s,r.bind(i),n);return o?wi(o):Fn(),a}function ad(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Nn(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))Nn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(Ch(t)||On(t))t.forEach(n=>{Nn(n,e)});else if(Th(t))for(const n in t)Nn(t[n],e);return t}function qg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dd(()=>{t.isMounted=!0}),fd(()=>{t.isUnmounting=!0}),t}const nt=[Function,Array],Yg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},setup(t,{slots:e}){const n=pl(),i=qg();let s;return()=>{const r=e.default&&cd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){let E=!1;for(const A of r)if(A.type!==$e){if(E){C("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}o=A,E=!0}}const a=G(t),{mode:l}=a;if(l&&l!=="in-out"&&l!=="out-in"&&l!=="default"&&C(`invalid <transition> mode: ${l}`),i.isLeaving)return To(o);const c=Sc(o);if(!c)return To(o);const h=ta(c,a,i,n);na(c,h);const u=n.subTree,d=u&&Sc(u);let p=!1;const{getTransitionKey:g}=c.type;if(g){const E=g();s===void 0?s=E:E!==s&&(s=E,p=!0)}if(d&&d.type!==$e&&(!Rn(c,d)||p)){const E=ta(d,a,i,n);if(na(d,E),l==="out-in")return i.isLeaving=!0,E.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},To(o);l==="in-out"&&c.type!==$e&&(E.delayLeave=(A,O,P)=>{const $=ld(i,d);$[String(d.key)]=d,A._leaveCb=()=>{O(),A._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=P})}return o}}},Qg=Yg;function ld(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ta(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:E,onAppear:A,onAfterAppear:O,onAppearCancelled:P}=e,$=String(t.key),F=ld(n,t),Q=(K,re)=>{K&&rt(K,i,9,re)},Ee=(K,re)=>{const le=re[1];Q(K,re),H(K)?K.every(Oe=>Oe.length<=1)&&le():K.length<=1&&le()},ke={mode:r,persisted:o,beforeEnter(K){let re=a;if(!n.isMounted)if(s)re=E||a;else return;K._leaveCb&&K._leaveCb(!0);const le=F[$];le&&Rn(t,le)&&le.el._leaveCb&&le.el._leaveCb(),Q(re,[K])},enter(K){let re=l,le=c,Oe=h;if(!n.isMounted)if(s)re=A||l,le=O||c,Oe=P||h;else return;let be=!1;const at=K._enterCb=zt=>{be||(be=!0,zt?Q(Oe,[K]):Q(le,[K]),ke.delayedLeave&&ke.delayedLeave(),K._enterCb=void 0)};re?Ee(re,[K,at]):at()},leave(K,re){const le=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return re();Q(u,[K]);let Oe=!1;const be=K._leaveCb=at=>{Oe||(Oe=!0,re(),at?Q(g,[K]):Q(p,[K]),K._leaveCb=void 0,F[le]===t&&delete F[le])};F[le]=t,d?Ee(d,[K,be]):be()},clone(K){return ta(K,e,n,i)}};return ke}function To(t){if(ks(t))return t=St(t),t.children=null,t}function Sc(t){return ks(t)?t.children?t.children[0]:void 0:t}function na(t,e){t.shapeFlag&6&&t.component?na(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cd(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ze?(o.patchFlag&128&&s++,i=i.concat(cd(o.children,e,a))):(e||o.type!==$e)&&i.push(a!=null?St(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ud(t){return W(t)?{setup:t,name:t.name}:t}const Xi=t=>!!t.type.__asyncLoader,ks=t=>t.type.__isKeepAlive;function Jg(t,e){hd(t,"a",e)}function Xg(t,e){hd(t,"da",e)}function hd(t,e,n=Te){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Yr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ks(s.parent.vnode)&&Zg(i,e,n,s),s=s.parent}}function Zg(t,e,n,i){const s=Yr(e,t,i,!0);pd(()=>{qa(i[e],s)},n)}function Yr(t,e,n=Te,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qn(),wi(n);const a=rt(e,n,t,o);return Fn(),Yn(),a});return i?s.unshift(r):s.push(r),r}else{const s=Cn(il[t].replace(/ hook$/,""));C(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Gt=t=>(e,n=Te)=>(!fs||t==="sp")&&Yr(t,(...i)=>e(...i),n),em=Gt("bm"),dd=Gt("m"),tm=Gt("bu"),nm=Gt("u"),fd=Gt("bum"),pd=Gt("um"),im=Gt("sp"),sm=Gt("rtg"),rm=Gt("rtc");function om(t,e=Te){Yr("ec",t,e)}function _d(t){A_(t)&&C("Do not use built-in directive ids as custom directive id: "+t)}function ER(t,e){const n=De;if(n===null)return C("withDirectives can only be used inside render functions."),t;const i=Jr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=de]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function bn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(qn(),rt(l,n,8,[t.el,a,t,e]),Yn())}}const ia="components";function am(t,e){return cm(ia,t,!0,e)||t}const lm=Symbol();function cm(t,e,n=!0,i=!1){const s=De||Te;if(s){const r=s.type;if(t===ia){const a=_l(r,!1);if(a&&(a===e||a===Tt(e)||a===Bn(Tt(e))))return r}const o=Rc(s[t]||r[t],e)||Rc(s.appContext[t],e);if(!o&&i)return r;if(n&&!o){const a=t===ia?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";C(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else C(`resolve${Bn(t.slice(0,-1))} can only be used in render() or setup().`)}function Rc(t,e){return t&&(t[e]||t[Tt(e)]||t[Bn(Tt(e))])}function bR(t,e,n,i){let s;const r=n&&n[i];if(H(t)||Se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){Number.isInteger(t)||C(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function wR(t,e,n={},i,s){if(De.isCE||De.parent&&Xi(De.parent)&&De.parent.isCE)return e!=="default"&&(n.name=e),Ge("slot",n,i&&i());let r=t[e];r&&r.length>1&&(C("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),hl();const o=r&&gd(r(n)),a=dl(Ze,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function gd(t){return t.some(e=>bi(e)?!(e.type===$e||e.type===Ze&&!gd(e.children)):!0)?t:null}const sa=t=>t?kd(t)?Jr(t)||t.proxy:sa(t.parent):null,Ln=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>li(t.props),$attrs:t=>li(t.attrs),$slots:t=>li(t.slots),$refs:t=>li(t.refs),$parent:t=>sa(t.parent),$root:t=>sa(t.root),$emit:t=>t.emit,$options:t=>cl(t),$forceUpdate:t=>t.f||(t.f=()=>zr(t.update)),$nextTick:t=>t.n||(t.n=Yh.bind(t.proxy)),$watch:t=>Kg.bind(t)}),ll=t=>t==="_"||t==="$",So=(t,e)=>t!==de&&!t.__isScriptSetup&&ee(t,e),md={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(So(i,e))return o[e]=1,i[e];if(s!==de&&ee(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,r[e];if(n!==de&&ee(n,e))return o[e]=4,n[e];ra&&(o[e]=0)}}const h=Ln[e];let u,d;if(h)return e==="$attrs"&&(Xe(t,"get",e),pr()),h(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==de&&ee(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ee(d,e))return d[e];De&&(!Se(e)||e.indexOf("__v")!==0)&&(s!==de&&ll(e[0])&&ee(s,e)?C(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===De&&C(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return So(s,e)?(s[e]=n,!0):s.__isScriptSetup&&ee(s,e)?(C(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):i!==de&&ee(i,e)?(i[e]=n,!0):ee(t.props,e)?(C(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(C(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(r,e,{enumerable:!0,configurable:!0,value:n}):r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==de&&ee(t,o)||So(e,o)||(a=r[0])&&ee(a,o)||ee(i,o)||ee(Ln,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};md.ownKeys=t=>(C("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function um(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Ln).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>Ln[n](t),set:Qe})}),e}function hm(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(i=>{Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>t.props[i],set:Qe})})}function dm(t){const{ctx:e,setupState:n}=t;Object.keys(G(n)).forEach(i=>{if(!n.__isScriptSetup){if(ll(i[0])){C(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>n[i],set:Qe})}})}function fm(){const t=Object.create(null);return(e,n)=>{t[n]?C(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let ra=!0;function pm(t){const e=cl(t),n=t.proxy,i=t.ctx;ra=!1,e.beforeCreate&&Ac(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:g,activated:E,deactivated:A,beforeDestroy:O,beforeUnmount:P,destroyed:$,unmounted:F,render:Q,renderTracked:Ee,renderTriggered:ke,errorCaptured:K,serverPrefetch:re,expose:le,inheritAttrs:Oe,components:be,directives:at,filters:zt}=e,lt=fm();{const[Z]=t.propsOptions;if(Z)for(const ne in Z)lt("Props",ne)}if(c&&_m(c,i,lt,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const ne=o[Z];W(ne)?(Object.defineProperty(i,Z,{value:ne.bind(n),configurable:!0,enumerable:!0,writable:!0}),lt("Methods",Z)):C(`Method "${Z}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`)}if(s){W(s)||C("The data option must be a function. Plain object usage is no longer supported.");const Z=s.call(n,n);if(Qa(Z)&&C("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ce(Z))C("data() should return an object.");else{t.data=As(Z);for(const ne in Z)lt("Data",ne),ll(ne[0])||Object.defineProperty(i,ne,{configurable:!0,enumerable:!0,get:()=>Z[ne],set:Qe})}}if(ra=!0,r)for(const Z in r){const ne=r[Z],qe=W(ne)?ne.bind(n,n):W(ne.get)?ne.get.bind(n,n):Qe;qe===Qe&&C(`Computed property "${Z}" has no getter.`);const Zn=!W(ne)&&W(ne.set)?ne.set.bind(n):()=>{C(`Write operation failed: computed property "${Z}" is readonly.`)},Nt=it({get:qe,set:Zn});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:gt=>Nt.value=gt}),lt("Computed",Z)}if(a)for(const Z in a)yd(a[Z],i,n,Z);if(l){const Z=W(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(ne=>{nr(ne,Z[ne])})}h&&Ac(h,t,"c");function Pe(Z,ne){H(ne)?ne.forEach(qe=>Z(qe.bind(n))):ne&&Z(ne.bind(n))}if(Pe(em,u),Pe(dd,d),Pe(tm,p),Pe(nm,g),Pe(Jg,E),Pe(Xg,A),Pe(om,K),Pe(rm,Ee),Pe(sm,ke),Pe(fd,P),Pe(pd,F),Pe(im,re),H(le))if(le.length){const Z=t.exposed||(t.exposed={});le.forEach(ne=>{Object.defineProperty(Z,ne,{get:()=>n[ne],set:qe=>n[ne]=qe})})}else t.exposed||(t.exposed={});Q&&t.render===Qe&&(t.render=Q),Oe!=null&&(t.inheritAttrs=Oe),be&&(t.components=be),at&&(t.directives=at)}function _m(t,e,n=Qe,i=!1){H(t)&&(t=oa(t));for(const s in t){const r=t[s];let o;ce(r)?"default"in r?o=Ut(r.from||s,r.default,!0):o=Ut(r.from||s):o=Ut(r),Ne(o)?i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):(C(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[s]=o):e[s]=o,n("Inject",s)}}function Ac(t,e,n){rt(H(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function yd(t,e,n,i){const s=i.includes(".")?ad(n,i):()=>n[i];if(Se(t)){const r=e[t];W(r)?Ji(s,r):C(`Invalid watch handler specified by key "${t}"`,r)}else if(W(t))Ji(s,t.bind(n));else if(ce(t))if(H(t))t.forEach(r=>yd(r,e,n,i));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)?Ji(s,r,t):C(`Invalid watch handler specified by key "${t.handler}"`,r)}else C(`Invalid watch option: "${i}"`,t)}function cl(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>_r(l,c,o,!0)),_r(l,e,o)),ce(e)&&r.set(e,l),l}function _r(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&_r(t,r,n,!0),s&&s.forEach(o=>_r(t,o,n,!0));for(const o in e)if(i&&o==="expose")C('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=gm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gm={data:Nc,props:In,emits:In,methods:In,computed:In,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:In,directives:In,watch:ym,provide:Nc,inject:mm};function Nc(t,e){return e?t?function(){return Re(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function mm(t,e){return In(oa(t),oa(e))}function oa(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function In(t,e){return t?Re(Re(Object.create(null),t),e):e}function ym(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const i in e)n[i]=Ve(t[i],e[i]);return n}function vm(t,e,n,i=!1){const s={},r={};ur(r,Qr,1),t.propsDefaults=Object.create(null),vd(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);bd(e||{},s,t),n?t.props=i?s:cg(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Em(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function bm(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=G(s),[l]=t.propsOptions;let c=!1;if(!Em(t)&&(i||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Kr(t.emitsOptions,d))continue;const p=e[d];if(l)if(ee(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Tt(d);s[g]=aa(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{vd(t,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!ee(e,u)&&((h=hn(u))===u||!ee(e,h)))&&(l?n&&(n[u]!==void 0||n[h]!==void 0)&&(s[u]=aa(l,a,u,void 0,t,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!ee(e,u))&&(delete r[u],c=!0)}c&&Ht(t,"set","$attrs"),bd(e||{},s,t)}function vd(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zs(l))continue;const c=e[l];let h;s&&ee(s,h=Tt(l))?!r||!r.includes(h)?n[h]=c:(a||(a={}))[h]=c:Kr(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=G(n),c=a||de;for(let h=0;h<r.length;h++){const u=r[h];n[u]=aa(s,l,u,c[u],t,!ee(c,u))}}return o}function aa(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(wi(s),i=c[n]=l.call(null,e),Fn())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===hn(n))&&(i=!0))}return i}function Ed(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!W(t)){const h=u=>{l=!0;const[d,p]=Ed(u,e,!0);Re(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return ce(t)&&i.set(t,di),di;if(H(r))for(let h=0;h<r.length;h++){Se(r[h])||C("props must be strings when using array syntax.",r[h]);const u=Tt(r[h]);kc(u)&&(o[u]=de)}else if(r){ce(r)||C("invalid props options",r);for(const h in r){const u=Tt(h);if(kc(u)){const d=r[h],p=o[u]=H(d)||W(d)?{type:d}:Object.assign({},d);if(p){const g=Pc(Boolean,p.type),E=Pc(String,p.type);p[0]=g>-1,p[1]=E<0||g<E,(g>-1||ee(p,"default"))&&a.push(u)}}}}const c=[o,a];return ce(t)&&i.set(t,c),c}function kc(t){return t[0]!=="$"?!0:(C(`Invalid prop name: "${t}" is a reserved property.`),!1)}function la(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Oc(t,e){return la(t)===la(e)}function Pc(t,e){return H(e)?e.findIndex(n=>Oc(n,t)):W(e)&&Oc(e,t)?0:-1}function bd(t,e,n){const i=G(e),s=n.propsOptions[0];for(const r in s){let o=s[r];o!=null&&wm(r,i[r],o,!ee(t,r)&&!ee(t,hn(r)))}}function wm(t,e,n,i){const{type:s,required:r,validator:o}=n;if(r&&i){C('Missing required prop: "'+t+'"');return}if(!(e==null&&!n.required)){if(s!=null&&s!==!0){let a=!1;const l=H(s)?s:[s],c=[];for(let h=0;h<l.length&&!a;h++){const{valid:u,expectedType:d}=Im(e,l[h]);c.push(d||""),a=u}if(!a){C(Tm(t,e,c));return}}o&&!o(e)&&C('Invalid prop: custom validator check failed for prop "'+t+'".')}}const Cm=En("String,Number,Boolean,Function,Symbol,BigInt");function Im(t,e){let n;const i=la(e);if(Cm(i)){const s=typeof t;n=s===i.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else i==="Object"?n=ce(t):i==="Array"?n=H(t):i==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:i}}function Tm(t,e,n){let i=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Bn).join(" | ")}`;const s=n[0],r=Ja(e),o=xc(e,s),a=xc(e,r);return n.length===1&&Dc(s)&&!Sm(s,r)&&(i+=` with value ${o}`),i+=`, got ${r} `,Dc(r)&&(i+=`with value ${a}.`),i}function xc(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Dc(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function Sm(...t){return t.some(e=>e.toLowerCase()==="boolean")}const wd=t=>t[0]==="_"||t==="$stable",ul=t=>H(t)?t.map(ht):[ht(t)],Rm=(t,e,n)=>{if(e._n)return e;const i=rd((...s)=>(Te&&C(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),ul(e(...s))),n);return i._c=!1,i},Cd=(t,e,n)=>{const i=t._ctx;for(const s in t){if(wd(s))continue;const r=t[s];if(W(r))e[s]=Rm(s,r,i);else if(r!=null){C(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=ul(r);e[s]=()=>o}}},Id=(t,e)=>{ks(t.vnode)||C("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=ul(e);t.slots.default=()=>n},Am=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),ur(e,"_",n)):Cd(e,t.slots={})}else t.slots={},e&&Id(t,e);ur(t.slots,Qr,1)},Nm=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=de;if(i.shapeFlag&32){const a=e._;a?Mn?Re(s,e):n&&a===1?r=!1:(Re(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Cd(e,s)),o=e}else e&&(Id(t,e),o={default:1});if(r)for(const a in s)!wd(a)&&!(a in o)&&delete s[a]};function Td(){return{app:null,config:{isNativeTag:wh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let km=0;function Om(t,e){return function(i,s=null){W(i)||(i=Object.assign({},i)),s!=null&&!ce(s)&&(C("root props passed to app.mount() must be an object."),s=null);const r=Td(),o=new Set;let a=!1;const l=r.app={_uid:km++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Fc,get config(){return r.config},set config(c){C("app.config cannot be replaced. Modify individual options instead.")},use(c,...h){return o.has(c)?C("Plugin has already been applied to target app."):c&&W(c.install)?(o.add(c),c.install(l,...h)):W(c)?(o.add(c),c(l,...h)):C('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return r.mixins.includes(c)?C("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):r.mixins.push(c),l},component(c,h){return ua(c,r.config),h?(r.components[c]&&C(`Component "${c}" has already been registered in target app.`),r.components[c]=h,l):r.components[c]},directive(c,h){return _d(c),h?(r.directives[c]&&C(`Directive "${c}" has already been registered in target app.`),r.directives[c]=h,l):r.directives[c]},mount(c,h,u){if(a)C("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&C("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Ge(i,s);return d.appContext=r,r.reload=()=>{t(St(d),c,u)},h&&e?e(d,c):t(d,c,u),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,kg(l,Fc),Jr(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,Og(l),delete l._container.__vue_app__):C("Cannot unmount an app that is not mounted.")},provide(c,h){return c in r.provides&&C(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),r.provides[c]=h,l}};return l}}function ca(t,e,n,i,s=!1){if(H(t)){t.forEach((d,p)=>ca(d,e&&(H(e)?e[p]:e),n,i,s));return}if(Xi(i)&&!s)return;const r=i.shapeFlag&4?Jr(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t;if(!a){C("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,h=a.refs===de?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Se(c)?(h[c]=null,ee(u,c)&&(u[c]=null)):Ne(c)&&(c.value=null)),W(l))$t(l,a,12,[o,h]);else{const d=Se(l),p=Ne(l);if(d||p){const g=()=>{if(t.f){const E=d?ee(u,l)?u[l]:h[l]:l.value;s?H(E)&&qa(E,r):H(E)?E.includes(r)||E.push(r):d?(h[l]=[r],ee(u,l)&&(u[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else d?(h[l]=o,ee(u,l)&&(u[l]=o)):p?(l.value=o,t.k&&(h[t.k]=o)):C("Invalid template ref type:",l,`(${typeof l})`)};o?(g.id=-1,Ye(g,n)):g()}else C("Invalid template ref type:",l,`(${typeof l})`)}}let Bi,Zt;function Ot(t,e){t.appContext.config.performance&&gr()&&Zt.mark(`vue-${e}-${t.uid}`),Mg(t,e,gr()?Zt.now():Date.now())}function Pt(t,e){if(t.appContext.config.performance&&gr()){const n=`vue-${e}-${t.uid}`,i=n+":end";Zt.mark(i),Zt.measure(`<${Xr(t,t.type)}> ${e}`,n,i),Zt.clearMarks(n),Zt.clearMarks(i)}Lg(t,e,gr()?Zt.now():Date.now())}function gr(){return Bi!==void 0||(typeof window<"u"&&window.performance?(Bi=!0,Zt=window.performance):Bi=!1),Bi}function Pm(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Ye=Gg;function xm(t){return Dm(t)}function Dm(t,e){Pm();const n=Sh();n.__VUE__=!0,td(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=Qe,insertStaticContent:g}=t,E=(f,_,m,b=null,v=null,T=null,k=!1,I=null,R=Mn?!1:!!_.dynamicChildren)=>{if(f===_)return;f&&!Rn(f,_)&&(b=M(f),tt(f,v,T,!0),f=null),_.patchFlag===-2&&(R=!1,_.dynamicChildren=null);const{type:w,ref:L,shapeFlag:D}=_;switch(w){case Os:A(f,_,m,b);break;case $e:O(f,_,m,b);break;case Zi:f==null?P(_,m,b,k):$(f,_,m,k);break;case Ze:at(f,_,m,b,v,T,k,I,R);break;default:D&1?Ee(f,_,m,b,v,T,k,I,R):D&6?zt(f,_,m,b,v,T,k,I,R):D&64||D&128?w.process(f,_,m,b,v,T,k,I,R,_e):C("Invalid VNode type:",w,`(${typeof w})`)}L!=null&&v&&ca(L,f&&f.ref,T,_||f,!_)},A=(f,_,m,b)=>{if(f==null)i(_.el=a(_.children),m,b);else{const v=_.el=f.el;_.children!==f.children&&c(v,_.children)}},O=(f,_,m,b)=>{f==null?i(_.el=l(_.children||""),m,b):_.el=f.el},P=(f,_,m,b)=>{[f.el,f.anchor]=g(f.children,_,m,b,f.el,f.anchor)},$=(f,_,m,b)=>{if(_.children!==f.children){const v=d(f.anchor);Q(f),[_.el,_.anchor]=g(_.children,m,v,b)}else _.el=f.el,_.anchor=f.anchor},F=({el:f,anchor:_},m,b)=>{let v;for(;f&&f!==_;)v=d(f),i(f,m,b),f=v;i(_,m,b)},Q=({el:f,anchor:_})=>{let m;for(;f&&f!==_;)m=d(f),s(f),f=m;s(_)},Ee=(f,_,m,b,v,T,k,I,R)=>{k=k||_.type==="svg",f==null?ke(_,m,b,v,T,k,I,R):le(f,_,v,T,k,I,R)},ke=(f,_,m,b,v,T,k,I)=>{let R,w;const{type:L,props:D,shapeFlag:U,transition:j,dirs:te}=f;if(R=f.el=o(f.type,T,D&&D.is,D),U&8?h(R,f.children):U&16&&re(f.children,R,null,b,v,T&&L!=="foreignObject",k,I),te&&bn(f,null,b,"created"),K(R,f,f.scopeId,k,b),D){for(const he in D)he!=="value"&&!Zs(he)&&r(R,he,null,D[he],T,f.children,b,v,N);"value"in D&&r(R,"value",null,D.value),(w=D.onVnodeBeforeMount)&&yt(w,b,f)}Object.defineProperty(R,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(R,"__vueParentComponent",{value:b,enumerable:!1}),te&&bn(f,null,b,"beforeMount");const fe=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;fe&&j.beforeEnter(R),i(R,_,m),((w=D&&D.onVnodeMounted)||fe||te)&&Ye(()=>{w&&yt(w,b,f),fe&&j.enter(R),te&&bn(f,null,b,"mounted")},v)},K=(f,_,m,b,v)=>{if(m&&p(f,m),b)for(let T=0;T<b.length;T++)p(f,b[T]);if(v){let T=v.subTree;if(T.patchFlag>0&&T.patchFlag&2048&&(T=od(T.children)||T),_===T){const k=v.vnode;K(f,k,k.scopeId,k.slotScopeIds,v.parent)}}},re=(f,_,m,b,v,T,k,I,R=0)=>{for(let w=R;w<f.length;w++){const L=f[w]=I?Jt(f[w]):ht(f[w]);E(null,L,_,m,b,v,T,k,I)}},le=(f,_,m,b,v,T,k)=>{const I=_.el=f.el;let{patchFlag:R,dynamicChildren:w,dirs:L}=_;R|=f.patchFlag&16;const D=f.props||de,U=_.props||de;let j;m&&wn(m,!1),(j=U.onVnodeBeforeUpdate)&&yt(j,m,_,f),L&&bn(_,f,m,"beforeUpdate"),m&&wn(m,!0),Mn&&(R=0,k=!1,w=null);const te=v&&_.type!=="foreignObject";if(w?(Oe(f.dynamicChildren,w,I,m,b,te,T),m&&m.type.__hmrId&&ir(f,_)):k||qe(f,_,I,null,m,b,te,T,!1),R>0){if(R&16)be(I,_,D,U,m,b,v);else if(R&2&&D.class!==U.class&&r(I,"class",null,U.class,v),R&4&&r(I,"style",D.style,U.style,v),R&8){const fe=_.dynamicProps;for(let he=0;he<fe.length;he++){const Ae=fe[he],ct=D[Ae],ti=U[Ae];(ti!==ct||Ae==="value")&&r(I,Ae,ct,ti,v,f.children,m,b,N)}}R&1&&f.children!==_.children&&h(I,_.children)}else!k&&w==null&&be(I,_,D,U,m,b,v);((j=U.onVnodeUpdated)||L)&&Ye(()=>{j&&yt(j,m,_,f),L&&bn(_,f,m,"updated")},b)},Oe=(f,_,m,b,v,T,k)=>{for(let I=0;I<_.length;I++){const R=f[I],w=_[I],L=R.el&&(R.type===Ze||!Rn(R,w)||R.shapeFlag&70)?u(R.el):m;E(R,w,L,null,b,v,T,k,!0)}},be=(f,_,m,b,v,T,k)=>{if(m!==b){if(m!==de)for(const I in m)!Zs(I)&&!(I in b)&&r(f,I,m[I],null,k,_.children,v,T,N);for(const I in b){if(Zs(I))continue;const R=b[I],w=m[I];R!==w&&I!=="value"&&r(f,I,w,R,k,_.children,v,T,N)}"value"in b&&r(f,"value",m.value,b.value)}},at=(f,_,m,b,v,T,k,I,R)=>{const w=_.el=f?f.el:a(""),L=_.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=_;(Mn||D&2048)&&(D=0,R=!1,U=null),j&&(I=I?I.concat(j):j),f==null?(i(w,m,b),i(L,m,b),re(_.children,m,L,v,T,k,I,R)):D>0&&D&64&&U&&f.dynamicChildren?(Oe(f.dynamicChildren,U,m,v,T,k,I),v&&v.type.__hmrId?ir(f,_):(_.key!=null||v&&_===v.subTree)&&ir(f,_,!0)):qe(f,_,m,L,v,T,k,I,R)},zt=(f,_,m,b,v,T,k,I,R)=>{_.slotScopeIds=I,f==null?_.shapeFlag&512?v.ctx.activate(_,m,b,k,R):lt(_,m,b,v,T,k,R):Pe(f,_,R)},lt=(f,_,m,b,v,T,k)=>{const I=f.component=Gm(f,b,v);if(I.type.__hmrId&&Sg(I),er(f),Ot(I,"mount"),ks(f)&&(I.ctx.renderer=_e),Ot(I,"init"),Km(I),Pt(I,"init"),I.asyncDep){if(v&&v.registerDep(I,Z),!f.el){const R=I.subTree=Ge($e);O(null,R,_,m)}return}Z(I,f,_,m,v,T,k),tr(),Pt(I,"mount")},Pe=(f,_,m)=>{const b=_.component=f.component;if(Wg(f,_,m))if(b.asyncDep&&!b.asyncResolved){er(_),ne(b,_,m),tr();return}else b.next=_,Ig(b.update),b.update();else _.el=f.el,b.vnode=_},Z=(f,_,m,b,v,T,k)=>{const I=()=>{if(f.isMounted){let{next:L,bu:D,u:U,parent:j,vnode:te}=f,fe=L,he;er(L||f.vnode),wn(f,!1),L?(L.el=te.el,ne(f,L,k)):L=te,D&&Ui(D),(he=L.props&&L.props.onVnodeBeforeUpdate)&&yt(he,j,L,te),wn(f,!0),Ot(f,"render");const Ae=Io(f);Pt(f,"render");const ct=f.subTree;f.subTree=Ae,Ot(f,"patch"),E(ct,Ae,u(ct.el),M(ct),f,v,T),Pt(f,"patch"),L.el=Ae.el,fe===null&&Vg(f,Ae.el),U&&Ye(U,v),(he=L.props&&L.props.onVnodeUpdated)&&Ye(()=>yt(he,j,L,te),v),nd(f),tr()}else{let L;const{el:D,props:U}=_,{bm:j,m:te,parent:fe}=f,he=Xi(_);if(wn(f,!1),j&&Ui(j),!he&&(L=U&&U.onVnodeBeforeMount)&&yt(L,fe,_),wn(f,!0),D&&z){const Ae=()=>{Ot(f,"render"),f.subTree=Io(f),Pt(f,"render"),Ot(f,"hydrate"),z(D,f.subTree,f,v,null),Pt(f,"hydrate")};he?_.type.__asyncLoader().then(()=>!f.isUnmounted&&Ae()):Ae()}else{Ot(f,"render");const Ae=f.subTree=Io(f);Pt(f,"render"),Ot(f,"patch"),E(null,Ae,m,b,f,v,T),Pt(f,"patch"),_.el=Ae.el}if(te&&Ye(te,v),!he&&(L=U&&U.onVnodeMounted)){const Ae=_;Ye(()=>yt(L,fe,Ae),v)}(_.shapeFlag&256||fe&&Xi(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Ye(f.a,v),f.isMounted=!0,Pg(f),_=m=b=null}},R=f.effect=new el(I,()=>zr(w),f.scope),w=f.update=()=>R.run();w.id=f.uid,wn(f,!0),R.onTrack=f.rtc?L=>Ui(f.rtc,L):void 0,R.onTrigger=f.rtg?L=>Ui(f.rtg,L):void 0,w.ownerInstance=f,w()},ne=(f,_,m)=>{_.component=f;const b=f.vnode.props;f.vnode=_,f.next=null,bm(f,_.props,b,m),Nm(f,_.children,m),qn(),wc(),Yn()},qe=(f,_,m,b,v,T,k,I,R=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,D=_.children,{patchFlag:U,shapeFlag:j}=_;if(U>0){if(U&128){Nt(w,D,m,b,v,T,k,I,R);return}else if(U&256){Zn(w,D,m,b,v,T,k,I,R);return}}j&8?(L&16&&N(w,v,T),D!==w&&h(m,D)):L&16?j&16?Nt(w,D,m,b,v,T,k,I,R):N(w,v,T,!0):(L&8&&h(m,""),j&16&&re(D,m,b,v,T,k,I,R))},Zn=(f,_,m,b,v,T,k,I,R)=>{f=f||di,_=_||di;const w=f.length,L=_.length,D=Math.min(w,L);let U;for(U=0;U<D;U++){const j=_[U]=R?Jt(_[U]):ht(_[U]);E(f[U],j,m,null,v,T,k,I,R)}w>L?N(f,v,T,!0,!1,D):re(_,m,b,v,T,k,I,R,D)},Nt=(f,_,m,b,v,T,k,I,R)=>{let w=0;const L=_.length;let D=f.length-1,U=L-1;for(;w<=D&&w<=U;){const j=f[w],te=_[w]=R?Jt(_[w]):ht(_[w]);if(Rn(j,te))E(j,te,m,null,v,T,k,I,R);else break;w++}for(;w<=D&&w<=U;){const j=f[D],te=_[U]=R?Jt(_[U]):ht(_[U]);if(Rn(j,te))E(j,te,m,null,v,T,k,I,R);else break;D--,U--}if(w>D){if(w<=U){const j=U+1,te=j<L?_[j].el:b;for(;w<=U;)E(null,_[w]=R?Jt(_[w]):ht(_[w]),m,te,v,T,k,I,R),w++}}else if(w>U)for(;w<=D;)tt(f[w],v,T,!0),w++;else{const j=w,te=w,fe=new Map;for(w=te;w<=U;w++){const We=_[w]=R?Jt(_[w]):ht(_[w]);We.key!=null&&(fe.has(We.key)&&C("Duplicate keys found during update:",JSON.stringify(We.key),"Make sure keys are unique."),fe.set(We.key,w))}let he,Ae=0;const ct=U-te+1;let ti=!1,hc=0;const $i=new Array(ct);for(w=0;w<ct;w++)$i[w]=0;for(w=j;w<=D;w++){const We=f[w];if(Ae>=ct){tt(We,v,T,!0);continue}let mt;if(We.key!=null)mt=fe.get(We.key);else for(he=te;he<=U;he++)if($i[he-te]===0&&Rn(We,_[he])){mt=he;break}mt===void 0?tt(We,v,T,!0):($i[mt-te]=w+1,mt>=hc?hc=mt:ti=!0,E(We,_[mt],m,null,v,T,k,I,R),Ae++)}const dc=ti?Mm($i):di;for(he=dc.length-1,w=ct-1;w>=0;w--){const We=te+w,mt=_[We],fc=We+1<L?_[We+1].el:b;$i[w]===0?E(null,mt,m,fc,v,T,k,I,R):ti&&(he<0||w!==dc[he]?gt(mt,m,fc,2):he--)}}},gt=(f,_,m,b,v=null)=>{const{el:T,type:k,transition:I,children:R,shapeFlag:w}=f;if(w&6){gt(f.component.subTree,_,m,b);return}if(w&128){f.suspense.move(_,m,b);return}if(w&64){k.move(f,_,m,_e);return}if(k===Ze){i(T,_,m);for(let D=0;D<R.length;D++)gt(R[D],_,m,b);i(f.anchor,_,m);return}if(k===Zi){F(f,_,m);return}if(b!==2&&w&1&&I)if(b===0)I.beforeEnter(T),i(T,_,m),Ye(()=>I.enter(T),v);else{const{leave:D,delayLeave:U,afterLeave:j}=I,te=()=>i(T,_,m),fe=()=>{D(T,()=>{te(),j&&j()})};U?U(T,te,fe):fe()}else i(T,_,m)},tt=(f,_,m,b=!1,v=!1)=>{const{type:T,props:k,ref:I,children:R,dynamicChildren:w,shapeFlag:L,patchFlag:D,dirs:U}=f;if(I!=null&&ca(I,null,m,f,!0),L&256){_.ctx.deactivate(f);return}const j=L&1&&U,te=!Xi(f);let fe;if(te&&(fe=k&&k.onVnodeBeforeUnmount)&&yt(fe,_,f),L&6)x(f.component,m,b);else{if(L&128){f.suspense.unmount(m,b);return}j&&bn(f,null,_,"beforeUnmount"),L&64?f.type.remove(f,_,m,v,_e,b):w&&(T!==Ze||D>0&&D&64)?N(w,_,m,!1,!0):(T===Ze&&D&384||!v&&L&16)&&N(R,_,m),b&&ei(f)}(te&&(fe=k&&k.onVnodeUnmounted)||j)&&Ye(()=>{fe&&yt(fe,_,f),j&&bn(f,null,_,"unmounted")},m)},ei=f=>{const{type:_,el:m,anchor:b,transition:v}=f;if(_===Ze){f.patchFlag>0&&f.patchFlag&2048&&v&&!v.persisted?f.children.forEach(k=>{k.type===$e?s(k.el):ei(k)}):y(m,b);return}if(_===Zi){Q(f);return}const T=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:I}=v,R=()=>k(m,T);I?I(f.el,T,R):R()}else T()},y=(f,_)=>{let m;for(;f!==_;)m=d(f),s(f),f=m;s(_)},x=(f,_,m)=>{f.type.__hmrId&&Rg(f);const{bum:b,scope:v,update:T,subTree:k,um:I}=f;b&&Ui(b),v.stop(),T&&(T.active=!1,tt(k,f,_,m)),I&&Ye(I,_),Ye(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Dg(f)},N=(f,_,m,b=!1,v=!1,T=0)=>{for(let k=T;k<f.length;k++)tt(f[k],_,m,b,v)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ie=(f,_,m)=>{f==null?_._vnode&&tt(_._vnode,null,null,!0):E(_._vnode||null,f,_,null,null,null,m),wc(),Xh(),_._vnode=f},_e={p:E,um:tt,m:gt,r:ei,mt:lt,mc:re,pc:qe,pbc:Oe,n:M,o:t};let q,z;return e&&([q,z]=e(_e)),{render:ie,hydrate:q,createApp:Om(ie,q)}}function wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ir(t,e,n=!1){const i=t.children,s=e.children;if(H(i)&&H(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Jt(s[r]),a.el=o.el),n||ir(o,a)),a.type===Os&&(a.el=o.el),a.type===$e&&!a.el&&(a.el=o.el)}}function Mm(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Lm=t=>t.__isTeleport,Ze=Symbol("Fragment"),Os=Symbol("Text"),$e=Symbol("Comment"),Zi=Symbol("Static"),es=[];let ft=null;function hl(t=!1){es.push(ft=t?null:[])}function Fm(){es.pop(),ft=es[es.length-1]||null}let ds=1;function Mc(t){ds+=t}function Sd(t){return t.dynamicChildren=ds>0?ft||di:null,Fm(),ds>0&&ft&&ft.push(t),t}function CR(t,e,n,i,s,r){return Sd(Ad(t,e,n,i,s,r,!0))}function dl(t,e,n,i,s){return Sd(Ge(t,e,n,i,s,!0))}function bi(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return e.shapeFlag&6&&ai.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const $m=(...t)=>Um(...t),Qr="__vInternal",Rd=({key:t})=>t??null,sr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Se(t)||Ne(t)||W(t)?{i:De,r:t,k:e,f:!!n}:t:null;function Ad(t,e=null,n=null,i=0,s=null,r=t===Ze?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rd(e),ref:e&&sr(e),scopeId:qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return a?(fl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),l.key!==l.key&&C("VNode created with invalid key (NaN). VNode type:",l.type),ds>0&&!o&&ft&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ft.push(l),l}const Ge=$m;function Um(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===lm)&&(t||C(`Invalid vnode type when creating vnode: ${t}.`),t=$e),bi(t)){const a=St(t,e,!0);return n&&fl(a,n),ds>0&&!r&&ft&&(a.shapeFlag&6?ft[ft.indexOf(t)]=a:ft.push(a)),a.patchFlag|=-2,a}if(xd(t)&&(t=t.__vccOpts),e){e=Bm(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=Ka(a)),ce(l)&&(Jo(l)&&!H(l)&&(l=Re({},l)),e.style=za(l))}const o=Se(t)?1:jg(t)?128:Lm(t)?64:ce(t)?4:W(t)?2:0;return o&4&&Jo(t)&&(t=G(t),C("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),Ad(t,e,n,i,s,o,r,!0)}function Bm(t){return t?Jo(t)||Qr in t?Re({},t):t:null}function St(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?Wm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rd(a),ref:e&&e.ref?n&&s?H(s)?s.concat(sr(e)):[s,sr(e)]:sr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&H(o)?o.map(Nd):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&St(t.ssContent),ssFallback:t.ssFallback&&St(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Nd(t){const e=St(t);return H(t.children)&&(e.children=t.children.map(Nd)),e}function Hm(t=" ",e=0){return Ge(Os,null,t,e)}function IR(t,e){const n=Ge(Zi,null,t);return n.staticCount=e,n}function TR(t="",e=!1){return e?(hl(),dl($e,null,t)):Ge($e,null,t)}function ht(t){return t==null||typeof t=="boolean"?Ge($e):H(t)?Ge(Ze,null,t.slice()):typeof t=="object"?Jt(t):Ge(Os,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:St(t)}function fl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),fl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Qr in e)?e._ctx=De:s===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:De},n=32):(e=String(e),i&64?(n=16,e=[Hm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ka([e.class,i.class]));else if(s==="style")e.style=za([e.style,i.style]);else if(Rs(s)){const r=e[s],o=i[s];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function yt(t,e,n,i=null){rt(t,e,7,[n,i])}const Vm=Td();let jm=0;function Gm(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Vm,r={uid:jm++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new P_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(i,s),emitsOptions:sd(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=um(r),r.root=e?e.root:r,r.emit=$g.bind(null,r),t.ce&&t.ce(r),r}let Te=null;const pl=()=>Te||De,wi=t=>{Te=t,t.scope.on()},Fn=()=>{Te&&Te.scope.off(),Te=null},zm=En("slot,component");function ua(t,e){const n=e.isNativeTag||wh;(zm(t)||n(t))&&C("Do not use built-in or reserved HTML elements as component id: "+t)}function kd(t){return t.vnode.shapeFlag&4}let fs=!1;function Km(t,e=!1){fs=e;const{props:n,children:i}=t.vnode,s=kd(t);vm(t,n,s,e),Am(t,i);const r=s?qm(t,e):void 0;return fs=!1,r}function qm(t,e){var n;const i=t.type;{if(i.name&&ua(i.name,t.appContext.config),i.components){const r=Object.keys(i.components);for(let o=0;o<r.length;o++)ua(r[o],t.appContext.config)}if(i.directives){const r=Object.keys(i.directives);for(let o=0;o<r.length;o++)_d(r[o])}i.compilerOptions&&Od()&&C('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Hh(new Proxy(t.ctx,md)),hm(t);const{setup:s}=i;if(s){const r=t.setupContext=s.length>1?Qm(t):null;wi(t),qn();const o=$t(s,t,0,[li(t.props),r]);if(Yn(),Fn(),Qa(o)){if(o.then(Fn,Fn),e)return o.then(a=>{Lc(t,a,e)}).catch(a=>{Gr(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=i.name)!==null&&n!==void 0?n:"Anonymous";C(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Lc(t,o,e)}else Pd(t,e)}function Lc(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)?(bi(e)&&C("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Gh(e),dm(t)):e!==void 0&&C(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Pd(t,n)}let ha;const Od=()=>!ha;function Pd(t,e,n){const i=t.type;if(!t.render){if(!e&&ha&&!i.render){const s=i.template||cl(t).template;if(s){Ot(t,"compile");const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Re(Re({isCustomElement:r,delimiters:a},o),l);i.render=ha(s,c),Pt(t,"compile")}}t.render=i.render||Qe}wi(t),qn(),pm(t),Yn(),Fn(),!i.render&&t.render===Qe&&!e&&(i.template?C('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):C("Component is missing template or render function."))}function Ym(t){return new Proxy(t.attrs,{get(e,n){return pr(),Xe(t,"get","$attrs"),e[n]},set(){return C("setupContext.attrs is readonly."),!1},deleteProperty(){return C("setupContext.attrs is readonly."),!1}})}function Qm(t){const e=i=>{if(t.exposed&&C("expose() should be called only once per setup()."),i!=null){let s=typeof i;s==="object"&&(H(i)?s="array":Ne(i)&&(s="ref")),s!=="object"&&C(`expose() should be passed a plain object, received ${s}.`)}t.exposed=i||{}};let n;return Object.freeze({get attrs(){return n||(n=Ym(t))},get slots(){return li(t.slots)},get emit(){return(i,...s)=>t.emit(i,...s)},expose:e})}function Jr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gh(Hh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}const Jm=/(?:^|[-_])(\w)/g,Xm=t=>t.replace(Jm,e=>e.toUpperCase()).replace(/[-_]/g,"");function _l(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function Xr(t,e,n=!1){let i=_l(e);if(!i&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&t&&t.parent){const s=r=>{for(const o in r)if(r[o]===e)return o};i=s(t.components||t.parent.type.components)||s(t.appContext.components)}return i?Xm(i):n?"App":"Anonymous"}function xd(t){return W(t)&&"__vccOpts"in t}const it=(t,e)=>gg(t,e,fs);function Dd(t,e,n){const i=arguments.length;return i===2?ce(e)&&!H(e)?bi(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&bi(n)&&(n=[n]),Ge(t,e,n))}const Zm=Symbol("ssrContext"),ey=()=>{{const t=Ut(Zm);return t||C("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Ro(t){return!!(t&&t.__v_isShallow)}function ty(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},i={style:"color:#9d288c"},s={header(u){return ce(u)?u.__isVue?["div",t,"VueInstance"]:Ne(u)?["div",{},["span",t,h(u)],"<",a(u.value),">"]:xn(u)?["div",{},["span",t,Ro(u)?"ShallowReactive":"Reactive"],"<",a(u),`>${fn(u)?" (readonly)":""}`]:fn(u)?["div",{},["span",t,Ro(u)?"ShallowReadonly":"Readonly"],"<",a(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...r(u.$)]}};function r(u){const d=[];u.type.props&&u.props&&d.push(o("props",G(u.props))),u.setupState!==de&&d.push(o("setup",u.setupState)),u.data!==de&&d.push(o("data",G(u.data)));const p=l(u,"computed");p&&d.push(o("computed",p));const g=l(u,"inject");return g&&d.push(o("injected",g)),d.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),d}function o(u,d){return d=Re({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",i,p+": "],a(d[p],!1)])]]:["span",{}]}function a(u,d=!0){return typeof u=="number"?["span",e,u]:typeof u=="string"?["span",n,JSON.stringify(u)]:typeof u=="boolean"?["span",i,u]:ce(u)?["object",{object:d?G(u):u}]:["span",n,String(u)]}function l(u,d){const p=u.type;if(W(p))return;const g={};for(const E in u.ctx)c(p,E,d)&&(g[E]=u.ctx[E]);return g}function c(u,d,p){const g=u[p];if(H(g)&&g.includes(d)||ce(g)&&d in g||u.extends&&c(u.extends,d,p)||u.mixins&&u.mixins.some(E=>c(E,d,p)))return!0}function h(u){return Ro(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const Fc="3.2.47",ny="http://www.w3.org/2000/svg",An=typeof document<"u"?document:null,$c=An&&An.createElement("template"),iy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?An.createElementNS(ny,t):An.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{$c.innerHTML=i?`<svg>${t}</svg>`:t;const a=$c.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sy(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ry(t,e,n){const i=t.style,s=Se(n);if(n&&!s){if(e&&!Se(e))for(const r in e)n[r]==null&&da(i,r,"");for(const r in n)da(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const oy=/[^\\];\s*$/,Uc=/\s*!important$/;function da(t,e,n){if(H(n))n.forEach(i=>da(t,e,i));else if(n==null&&(n=""),oy.test(n)&&C(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const i=ay(t,e);Uc.test(n)?t.setProperty(hn(i),n.replace(Uc,""),"important"):t[i]=n}}const Bc=["Webkit","Moz","ms"],Ao={};function ay(t,e){const n=Ao[e];if(n)return n;let i=Tt(e);if(i!=="filter"&&i in t)return Ao[e]=i;i=Bn(i);for(let s=0;s<Bc.length;s++){const r=Bc[s]+i;if(r in t)return Ao[e]=r}return e}const Hc="http://www.w3.org/1999/xlink";function ly(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hc,e.slice(6,e.length)):t.setAttributeNS(Hc,e,n);else{const r=T_(e);n==null||r&&!Eh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function cy(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Eh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch(l){a||C(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`,l)}a&&t.removeAttribute(e)}function uy(t,e,n,i){t.addEventListener(e,n,i)}function hy(t,e,n,i){t.removeEventListener(e,n,i)}function dy(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=fy(e);if(i){const c=r[e]=gy(i,s);uy(t,a,c,l)}else o&&(hy(t,a,o,l),r[e]=void 0)}}const Wc=/(?:Once|Passive|Capture)$/;function fy(t){let e;if(Wc.test(t)){e={};let i;for(;i=t.match(Wc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hn(t.slice(2)),e]}let No=0;const py=Promise.resolve(),_y=()=>No||(py.then(()=>No=0),No=Date.now());function gy(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;rt(my(i,n.value),e,5,[i])};return n.value=t,n.attached=_y(),n}function my(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Vc=/^on[a-z]/,yy=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?sy(t,i,s):e==="style"?ry(t,n,i):Rs(e)?cr(e)||dy(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vy(t,e,i,s))?cy(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ly(t,e,i,s))};function vy(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Vc.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vc.test(e)&&Se(n)?!1:e in t}const Ey={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Qg.props;const SR={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Hi(t,!0),i.enter(t)):i.leave(t,()=>{Hi(t,!1)}):Hi(t,e))},beforeUnmount(t,{value:e}){Hi(t,e)}};function Hi(t,e){t.style.display=e?t._vod:"none"}const by=Re({patchProp:yy},iy);let jc;function wy(){return jc||(jc=xm(by))}const Cy=(...t)=>{const e=wy().createApp(...t);Iy(e),Ty(e);const{mount:n}=e;return e.mount=i=>{const s=Sy(i);if(!s)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Iy(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>w_(e)||C_(e),writable:!1})}function Ty(t){if(Od()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){C("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return C(i),n},set(){C(i)}})}}function Sy(t){if(Se(t)){const e=document.querySelector(t);return e||C(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&C('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function Ry(){ty()}Ry();const Ay=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Ny={};function ky(t,e){const n=am("router-view");return hl(),dl(n)}const Oy=Ay(Ny,[["render",ky],["__file","/home/dave/Documents/geohunt-vue/src/App.vue"]]);function Py(){return Md().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Md(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const xy=typeof Proxy=="function",Dy="devtools-plugin:setup",My="plugin:settings:set";let ni,fa;function Ly(){var t;return ni!==void 0||(typeof window<"u"&&window.performance?(ni=!0,fa=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ni=!0,fa=global.perf_hooks.performance):ni=!1),ni}function Fy(){return Ly()?fa.now():Date.now()}class $y{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return Fy()}},n&&n.on(My,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Uy(t,e){const n=t,i=Md(),s=Py(),r=xy&&n.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(Dy,t,e);else{const o=r?new $y(n,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xt=typeof window<"u";function By(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function ko(t,e){const n={};for(const i in e){const s=e[i];n[i]=et(s)?s.map(t):t(s)}return n}const ts=()=>{},et=Array.isArray;function se(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const Hy=/\/$/,Wy=t=>t.replace(Hy,"");function Oo(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Gy(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Vy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zc(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&pn(e.matched[i],n.matched[s])&&Ld(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ld(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jy(t[n],e[n]))return!1;return!0}function jy(t,e){return et(t)?Kc(t,e):et(e)?Kc(e,t):t===e}function Kc(t,e){return et(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Gy(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var ps;(function(t){t.pop="pop",t.push="push"})(ps||(ps={}));var ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ns||(ns={}));function zy(t){if(!t)if(xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wy(t)}const Ky=/^[^#]+#/;function qy(t,e){return t.replace(Ky,"#")+e}function Yy(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Zr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qy(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!i||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(i&&r){se(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{se(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){se(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=Yy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qc(t,e){return(history.state?history.state.position-e:-1)+t}const pa=new Map;function Jy(t,e){pa.set(t,e)}function Xy(t){const e=pa.get(t);return pa.delete(t),e}let Zy=()=>location.protocol+"//"+location.host;function Fd(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Gc(l,"")}return Gc(n,t)+i+s}function ev(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=Fd(t,location),g=n.value,E=e.value;let A=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}A=E?d.position-E.position:0}else i(p);s.forEach(O=>{O(n.value,g,{delta:A,type:ps.pop,direction:A?A>0?ns.forward:ns.back:ns.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(p),p}function h(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:Zr()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:c,destroy:u}}function Yc(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Zr():null}}function tv(t){const{history:e,location:n}=window,i={value:Fd(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=t.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:Zy()+t+l;try{e[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){se("Error with push/replace State",p),n[h?"replace":"assign"](d)}}function o(l,c){const h=ae({},e.state,Yc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=ae({},s.value,e.state,{forward:l,scroll:Zr()});e.state||se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(h.current,h,!0);const u=ae({},Yc(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function nv(t){t=zy(t);const e=tv(t),n=ev(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ae({location:"",base:t,go:i,createHref:qy.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function iv(t){return typeof t=="string"||t&&typeof t=="object"}function $d(t){return typeof t=="string"||typeof t=="symbol"}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ud=Symbol("navigation failure");var Qc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qc||(Qc={}));const sv={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${ov(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Ci(t,e){return ae(new Error(sv[t](e)),{type:t,[Ud]:!0},e)}function kt(t,e){return t instanceof Error&&Ud in t&&(e==null||!!(t.type&e))}const rv=["params","query","hash"];function ov(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of rv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Jc="[^/]+?",av={sensitive:!1,strict:!1,start:!0,end:!0},lv=/[.+*?^${}()[\]/\\]/g;function cv(t,e){const n=ae({},av,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const h=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let p=40+(n.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(lv,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:E,optional:A,regexp:O}=d;r.push({name:g,repeatable:E,optional:A});const P=O||Jc;if(P!==Jc){p+=10;try{new RegExp(`(${P})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+F.message)}}let $=E?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;u||($=A&&c.length<2?`(?:/${$})`:"/"+$),A&&($+="?"),s+=$,p+=20,A&&(p+=-8),E&&(p+=-20),P===".*"&&(p+=-50)}h.push(p)}i.push(h)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const p=h[d]||"",g=r[d-1];u[g.name]=p&&g.repeatable?p.split("/"):p}return u}function l(c){let h="",u=!1;for(const d of t){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const p of d)if(p.type===0)h+=p.value;else if(p.type===1){const{value:g,repeatable:E,optional:A}=p,O=g in c?c[g]:"";if(et(O)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=et(O)?O.join("/"):O;if(!P)if(A)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);h+=P}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function uv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function hv(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=uv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Xc(i))return 1;if(Xc(s))return-1}return s.length-i.length}function Xc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dv={type:0,value:""},fv=/[a-zA-Z0-9_]/;function pv(t){if(!t)return[[]];if(t==="/")return[[dv]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:fv.test(l)?d():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function _v(t,e,n){const i=cv(pv(t.path),n);{const r=new Set;for(const o of i.keys)r.has(o.name)&&se(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(o.name)}const s=ae(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gv(t,e){const n=[],i=new Map;e=tu({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,u,d){const p=!d,g=mv(h);bv(g,u),g.aliasOf=d&&d.record;const E=tu(e,h),A=[g];if("alias"in h){const $=typeof h.alias=="string"?[h.alias]:h.alias;for(const F of $)A.push(ae({},g,{components:d?d.record.components:g.components,path:F,aliasOf:d?d.record:g}))}let O,P;for(const $ of A){const{path:F}=$;if(u&&F[0]!=="/"){const Q=u.record.path,Ee=Q[Q.length-1]==="/"?"":"/";$.path=u.record.path+(F&&Ee+F)}if($.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(O=_v($,u,E),u&&F[0]==="/"&&wv(O,u),d?(d.alias.push(O),Ev(d,O)):(P=P||O,P!==O&&P.alias.push(O),p&&h.name&&!eu(O)&&o(h.name)),g.children){const Q=g.children;for(let Ee=0;Ee<Q.length;Ee++)r(Q[Ee],O,d&&d.children[Ee])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return P?()=>{o(P)}:ts}function o(h){if($d(h)){const u=i.get(h);u&&(i.delete(h),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(h);u>-1&&(n.splice(u,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let u=0;for(;u<n.length&&hv(h,n[u])>=0&&(h.record.path!==n[u].record.path||!Bd(h,n[u]));)u++;n.splice(u,0,h),h.record.name&&!eu(h)&&i.set(h.record.name,h)}function c(h,u){let d,p={},g,E;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Ci(1,{location:h});{const P=Object.keys(h.params||{}).filter($=>!d.keys.find(F=>F.name===$));P.length&&se(`Discarded invalid param(s) "${P.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}E=d.record.name,p=ae(Zc(u.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),h.params&&Zc(h.params,d.keys.map(P=>P.name))),g=d.stringify(p)}else if("path"in h)g=h.path,g.startsWith("/")||se(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=n.find(P=>P.re.test(g)),d&&(p=d.parse(g),E=d.record.name);else{if(d=u.name?i.get(u.name):n.find(P=>P.re.test(u.path)),!d)throw Ci(1,{location:h,currentLocation:u});E=d.record.name,p=ae({},u.params,h.params),g=d.stringify(p)}const A=[];let O=d;for(;O;)A.unshift(O.record),O=O.parent;return{name:E,path:g,params:p,matched:A,meta:vv(A)}}return t.forEach(h=>r(h)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Zc(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function mv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:yv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function yv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function eu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vv(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function tu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function _a(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function Ev(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(_a.bind(null,n)))return se(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(_a.bind(null,n)))return se(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function bv(t,e){e&&e.record.name&&!t.name&&!t.path&&se(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function wv(t,e){for(const n of e.keys)if(!t.keys.find(_a.bind(null,n)))return se(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Bd(t,e){return e.children.some(n=>n===t||Bd(t,n))}const Hd=/#/g,Cv=/&/g,Iv=/\//g,Tv=/=/g,Sv=/\?/g,Wd=/\+/g,Rv=/%5B/g,Av=/%5D/g,Vd=/%5E/g,Nv=/%60/g,jd=/%7B/g,kv=/%7C/g,Gd=/%7D/g,Ov=/%20/g;function gl(t){return encodeURI(""+t).replace(kv,"|").replace(Rv,"[").replace(Av,"]")}function Pv(t){return gl(t).replace(jd,"{").replace(Gd,"}").replace(Vd,"^")}function ga(t){return gl(t).replace(Wd,"%2B").replace(Ov,"+").replace(Hd,"%23").replace(Cv,"%26").replace(Nv,"`").replace(jd,"{").replace(Gd,"}").replace(Vd,"^")}function xv(t){return ga(t).replace(Tv,"%3D")}function Dv(t){return gl(t).replace(Hd,"%23").replace(Sv,"%3F")}function Mv(t){return t==null?"":Dv(t).replace(Iv,"%2F")}function _s(t){try{return decodeURIComponent(""+t)}catch{se(`Error decoding "${t}". Using original value`)}return""+t}function Lv(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Wd," "),o=r.indexOf("="),a=_s(o<0?r:r.slice(0,o)),l=o<0?null:_s(r.slice(o+1));if(a in e){let c=e[a];et(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function nu(t){let e="";for(let n in t){const i=t[n];if(n=xv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(et(i)?i.map(r=>r&&ga(r)):[i&&ga(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Fv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=et(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const $v=Symbol("router view location matched"),iu=Symbol("router view depth"),ml=Symbol("router"),zd=Symbol("route location"),ma=Symbol("router view location");function Wi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xt(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(Ci(4,{from:n,to:e})):u instanceof Error?a(u):iv(u)?a(Ci(2,{from:e,to:u})):(r&&i.enterCallbacks[s]===r&&typeof u=="function"&&r.push(u),o())},c=t.call(i&&i.instances[s],e,n,Uv(l,e,n));let h=Promise.resolve(c);if(t.length<3&&(h=h.then(l)),t.length>2){const u=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)h=h.then(d=>l._called?d:(se(u),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){se(u),a(new Error("Invalid navigation guard"));return}}h.catch(u=>a(u))})}function Uv(t,e,n){let i=0;return function(){i++===1&&se(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,i===1&&t.apply(null,arguments)}}function Po(t,e,n,i){const s=[];for(const r of t){!r.components&&!r.children.length&&se(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const o in r.components){let a=r.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw se(`Component "${o}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){se(`Component "${o}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,se(`Component "${o}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Bv(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Xt(c,n,i,r,o))}else{let l=a();"catch"in l||(se(`Component "${o}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const h=By(c)?c.default:c;r.components[o]=h;const d=(h.__vccOpts||h)[e];return d&&Xt(d,n,i,r,o)()}))}}}return s}function Bv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function su(t){const e=Ut(ml),n=Ut(zd),i=it(()=>e.resolve(fi(t.to))),s=it(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=n.matched;if(!h||!u.length)return-1;const d=u.findIndex(pn.bind(null,h));if(d>-1)return d;const p=ru(l[c-2]);return c>1&&ru(h)===p&&u[u.length-1].path!==p?u.findIndex(pn.bind(null,l[c-2])):d}),r=it(()=>s.value>-1&&jv(n.params,i.value.params)),o=it(()=>s.value>-1&&s.value===n.matched.length-1&&Ld(n.params,i.value.params));function a(l={}){return Vv(l)?e[fi(t.replace)?"replace":"push"](fi(t.to)).catch(ts):Promise.resolve()}if(xt){const l=pl();if(l){const c={route:i.value,isActive:r.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),zg(()=>{c.route=i.value,c.isActive=r.value,c.isExactActive=o.value},{flush:"post"})}}return{route:i,href:it(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Hv=ud({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:su,setup(t,{slots:e}){const n=As(su(t)),{options:i}=Ut(ml),s=it(()=>({[ou(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ou(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Dd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Wv=Hv;function Vv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jv(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!et(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ru(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ou=(t,e,n)=>t??e??n,Gv=ud({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){Kv();const i=Ut(ma),s=it(()=>t.route||i.value),r=Ut(iu,0),o=it(()=>{let c=fi(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=it(()=>s.value.matched[o.value]);nr(iu,it(()=>o.value+1)),nr($v,a),nr(ma,s);const l=ug();return Ji(()=>[l.value,a.value,t.name],([c,h,u],[d,p,g])=>{h&&(h.instances[u]=c,p&&p!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=p.leaveGuards),h.updateGuards.size||(h.updateGuards=p.updateGuards))),c&&h&&(!p||!pn(h,p)||!d)&&(h.enterCallbacks[u]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,h=t.name,u=a.value,d=u&&u.components[h];if(!d)return au(n.default,{Component:d,route:c});const p=u.props[h],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,A=Dd(d,ae({},g,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(u.instances[h]=null)},ref:l}));if(xt&&A.ref){const O={depth:o.value,name:u.name,path:u.path,meta:u.meta};(et(A.ref)?A.ref.map($=>$.i):[A.ref.i]).forEach($=>{$.__vrv_devtools=O})}return au(n.default,{Component:A,route:c})||A}}});function au(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zv=Gv;function Kv(){const t=pl(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Vi(t,e){const n=ae({},t,{matched:t.matched.map(i=>nE(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Ys(t){return{_custom:{display:t}}}let qv=0;function Yv(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=qv++;Uy({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((h,u)=>{h.instanceData&&h.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Vi(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:h,componentInstance:u})=>{if(u.__vrv_devtools){const d=u.__vrv_devtools;h.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Kd})}et(u.__vrl_devtools)&&(u.__devtoolsApi=s,u.__vrl_devtools.forEach(d=>{let p=Qd,g="";d.isExactActive?(p=Yd,g="This is exactly active"):d.isActive&&(p=qd,g="This link is active"),h.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:p})}))}),Ji(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const r="router:navigations:"+i;s.addTimelineLayer({id:r,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError((h,u)=>{s.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:s.now(),data:{error:h},groupId:u.meta.__navigationId}})});let o=0;e.beforeEach((h,u)=>{const d={guard:Ys("beforeEach"),from:Vi(u,"Current Location during this navigation"),to:Vi(h,"Target location")};Object.defineProperty(h.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:r,event:{time:s.now(),title:"Start of navigation",subtitle:h.fullPath,data:d,groupId:h.meta.__navigationId}})}),e.afterEach((h,u,d)=>{const p={guard:Ys("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=Ys("❌")):p.status=Ys("✅"),p.from=Vi(u,"Current Location during this navigation"),p.to=Vi(h,"Target location"),s.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:h.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:h.meta.__navigationId}})});const a="router-inspector:"+i;s.addInspector({id:a,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const h=c;let u=n.getRoutes().filter(d=>!d.parent);u.forEach(Zd),h.filter&&(u=u.filter(d=>ya(d,h.filter.toLowerCase()))),u.forEach(d=>Xd(d,e.currentRoute.value)),h.rootNodes=u.map(Jd)}let c;s.on.getInspectorTree(h=>{c=h,h.app===t&&h.inspectorId===a&&l()}),s.on.getInspectorState(h=>{if(h.app===t&&h.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===h.nodeId);d&&(h.state={options:Jv(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function Qv(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Jv(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(i=>`${i.name}${Qv(i)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(i=>i.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Kd=15485081,qd=2450411,Yd=8702998,Xv=2282478,Qd=16486972,Zv=6710886;function Jd(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:Xv}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Qd}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Kd}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Yd}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:qd}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Zv});let i=n.__vd_id;return i==null&&(i=String(eE++),n.__vd_id=i),{id:i,label:n.path,tags:e,children:t.children.map(Jd)}}let eE=0;const tE=/^\/(.*)\/([a-z]*)$/;function Xd(t,e){const n=e.matched.length&&pn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(i=>pn(i,t.record))),t.children.forEach(i=>Xd(i,e))}function Zd(t){t.__vd_match=!1,t.children.forEach(Zd)}function ya(t,e){const n=String(t.re).match(tE);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>ya(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),r=_s(s);return!e.startsWith("/")&&(r.includes(e)||s.includes(e))||r.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>ya(o,e))}function nE(t,e){const n={};for(const i in t)e.includes(i)||(n[i]=t[i]);return n}function iE(t){const e=gv(t.routes,t),n=t.parseQuery||Lv,i=t.stringifyQuery||nu,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Wi(),o=Wi(),a=Wi(),l=hg(qt);let c=qt;xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ko.bind(null,y=>""+y),u=ko.bind(null,Mv),d=ko.bind(null,_s);function p(y,x){let N,M;return $d(y)?(N=e.getRecordMatcher(y),M=x):M=y,e.addRoute(M,N)}function g(y){const x=e.getRecordMatcher(y);x?e.removeRoute(x):se(`Cannot remove non-existent route "${String(y)}"`)}function E(){return e.getRoutes().map(y=>y.record)}function A(y){return!!e.getRecordMatcher(y)}function O(y,x){if(x=ae({},x||l.value),typeof y=="string"){const z=Oo(n,y,x.path),f=e.resolve({path:z.path},x),_=s.createHref(z.fullPath);return _.startsWith("//")?se(`Location "${y}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):f.matched.length||se(`No match found for location with path "${y}"`),ae(z,f,{params:d(f.params),hash:_s(z.hash),redirectedFrom:void 0,href:_})}let N;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&se(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),N=ae({},y,{path:Oo(n,y.path,x.path).path});else{const z=ae({},y.params);for(const f in z)z[f]==null&&delete z[f];N=ae({},y,{params:u(y.params)}),x.params=u(x.params)}const M=e.resolve(N,x),ie=y.hash||"";ie&&!ie.startsWith("#")&&se(`A \`hash\` should always start with the character "#". Replace "${ie}" with "#${ie}".`),M.params=h(d(M.params));const _e=Vy(i,ae({},y,{hash:Pv(ie),path:M.path})),q=s.createHref(_e);return q.startsWith("//")?se(`Location "${y}" resolved to "${q}". A resolved location cannot start with multiple slashes.`):M.matched.length||se(`No match found for location with path "${"path"in y?y.path:y}"`),ae({fullPath:_e,hash:ie,query:i===nu?Fv(y.query):y.query||{}},M,{redirectedFrom:void 0,href:q})}function P(y){return typeof y=="string"?Oo(n,y,l.value.path):ae({},y)}function $(y,x){if(c!==y)return Ci(8,{from:x,to:y})}function F(y){return ke(y)}function Q(y){return F(ae(P(y),{replace:!0}))}function Ee(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:N}=x;let M=typeof N=="function"?N(y):N;if(typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),!("path"in M)&&!("name"in M))throw se(`Invalid redirect found:
${JSON.stringify(M,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ae({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function ke(y,x){const N=c=O(y),M=l.value,ie=y.state,_e=y.force,q=y.replace===!0,z=Ee(N);if(z)return ke(ae(P(z),{state:typeof z=="object"?ae({},ie,z.state):ie,force:_e,replace:q}),x||N);const f=N;f.redirectedFrom=x;let _;return!_e&&zc(i,M,N)&&(_=Ci(16,{to:f,from:M}),Zn(M,M,!0,!1)),(_?Promise.resolve(_):re(f,M)).catch(m=>kt(m)?kt(m,2)?m:qe(m):Z(m,f,M)).then(m=>{if(m){if(kt(m,2))return zc(i,O(m.to),f)&&x&&(x._count=x._count?x._count+1:1)>10?(se(`Detected an infinite redirection in a navigation guard when going from "${M.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):ke(ae({replace:q},P(m.to),{state:typeof m.to=="object"?ae({},ie,m.to.state):ie,force:_e}),x||f)}else m=Oe(f,M,!0,q,ie);return le(f,M,m),m})}function K(y,x){const N=$(y,x);return N?Promise.reject(N):Promise.resolve()}function re(y,x){let N;const[M,ie,_e]=sE(y,x);N=Po(M.reverse(),"beforeRouteLeave",y,x);for(const z of M)z.leaveGuards.forEach(f=>{N.push(Xt(f,y,x))});const q=K.bind(null,y,x);return N.push(q),ii(N).then(()=>{N=[];for(const z of r.list())N.push(Xt(z,y,x));return N.push(q),ii(N)}).then(()=>{N=Po(ie,"beforeRouteUpdate",y,x);for(const z of ie)z.updateGuards.forEach(f=>{N.push(Xt(f,y,x))});return N.push(q),ii(N)}).then(()=>{N=[];for(const z of y.matched)if(z.beforeEnter&&!x.matched.includes(z))if(et(z.beforeEnter))for(const f of z.beforeEnter)N.push(Xt(f,y,x));else N.push(Xt(z.beforeEnter,y,x));return N.push(q),ii(N)}).then(()=>(y.matched.forEach(z=>z.enterCallbacks={}),N=Po(_e,"beforeRouteEnter",y,x),N.push(q),ii(N))).then(()=>{N=[];for(const z of o.list())N.push(Xt(z,y,x));return N.push(q),ii(N)}).catch(z=>kt(z,8)?z:Promise.reject(z))}function le(y,x,N){for(const M of a.list())M(y,x,N)}function Oe(y,x,N,M,ie){const _e=$(y,x);if(_e)return _e;const q=x===qt,z=xt?history.state:{};N&&(M||q?s.replace(y.fullPath,ae({scroll:q&&z&&z.scroll},ie)):s.push(y.fullPath,ie)),l.value=y,Zn(y,x,N,q),qe()}let be;function at(){be||(be=s.listen((y,x,N)=>{if(!ei.listening)return;const M=O(y),ie=Ee(M);if(ie){ke(ae(ie,{replace:!0}),M).catch(ts);return}c=M;const _e=l.value;xt&&Jy(qc(_e.fullPath,N.delta),Zr()),re(M,_e).catch(q=>kt(q,12)?q:kt(q,2)?(ke(q.to,M).then(z=>{kt(z,20)&&!N.delta&&N.type===ps.pop&&s.go(-1,!1)}).catch(ts),Promise.reject()):(N.delta&&s.go(-N.delta,!1),Z(q,M,_e))).then(q=>{q=q||Oe(M,_e,!1),q&&(N.delta&&!kt(q,8)?s.go(-N.delta,!1):N.type===ps.pop&&kt(q,20)&&s.go(-1,!1)),le(M,_e,q)}).catch(ts)}))}let zt=Wi(),lt=Wi(),Pe;function Z(y,x,N){qe(y);const M=lt.list();return M.length?M.forEach(ie=>ie(y,x,N)):(se("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function ne(){return Pe&&l.value!==qt?Promise.resolve():new Promise((y,x)=>{zt.add([y,x])})}function qe(y){return Pe||(Pe=!y,at(),zt.list().forEach(([x,N])=>y?N(y):x()),zt.reset()),y}function Zn(y,x,N,M){const{scrollBehavior:ie}=t;if(!xt||!ie)return Promise.resolve();const _e=!N&&Xy(qc(y.fullPath,0))||(M||!N)&&history.state&&history.state.scroll||null;return Yh().then(()=>ie(y,x,_e)).then(q=>q&&Qy(q)).catch(q=>Z(q,y,x))}const Nt=y=>s.go(y);let gt;const tt=new Set,ei={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:A,getRoutes:E,resolve:O,options:t,push:F,replace:Q,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:lt.add,isReady:ne,install(y){const x=this;y.component("RouterLink",Wv),y.component("RouterView",zv),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>fi(l)}),xt&&!gt&&l.value===qt&&(gt=!0,F(s.location).catch(ie=>{se("Unexpected error when starting the router:",ie)}));const N={};for(const ie in qt)N[ie]=it(()=>l.value[ie]);y.provide(ml,x),y.provide(zd,As(N)),y.provide(ma,l);const M=y.unmount;tt.add(y),y.unmount=function(){tt.delete(y),tt.size<1&&(c=qt,be&&be(),be=null,l.value=qt,gt=!1,Pe=!1),M()},xt&&Yv(y,x,e)}};return ei}function ii(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function sE(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>pn(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>pn(c,l))||s.push(l))}return[n,i,s]}const rE="modulepreload",oE=function(t){return"/"+t},lu={},si=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=oE(r),r in lu)return;lu[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let h=s.length-1;h>=0;h--){const u=s[h];if(u.href===r&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":rE,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((h,u)=>{c.addEventListener("load",h),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},aE=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function ri(t){return()=>aE(Object.assign({"../pages/Create.vue":()=>si(()=>import("./Create-0e9d933a.js"),["assets/Create-0e9d933a.js","assets/create-7131091f.js","assets/global-867567d1.js","assets/icons-8e0d5636.js","assets/settings-734570fe.js","assets/Create-7731d468.css"]),"../pages/Game.vue":()=>si(()=>import("./Game-f34e206b.js"),["assets/Game-f34e206b.js","assets/global-867567d1.js","assets/settings-734570fe.js","assets/Game-a16661e4.css"]),"../pages/Home.vue":()=>si(()=>import("./Home-5b84115d.js"),["assets/Home-5b84115d.js","assets/Home-37c3cc90.css"]),"../pages/Info.vue":()=>si(()=>import("./Info-ede88e17.js"),["assets/Info-ede88e17.js","assets/Info-b3757fe8.css"]),"../pages/Lobby.vue":()=>si(()=>import("./Lobby-777a0cd6.js"),["assets/Lobby-777a0cd6.js","assets/global-867567d1.js","assets/icons-8e0d5636.js","assets/Lobby-5e032db4.css"]),"../pages/Share.vue":()=>si(()=>import("./Share-ff5d5f8a.js"),["assets/Share-ff5d5f8a.js","assets/create-7131091f.js","assets/global-867567d1.js","assets/icons-8e0d5636.js","assets/Share-7bf530dd.css"])}),`../pages/${t}.vue`)}const lE=[{path:"/",component:ri("Home")},{path:"/info",component:ri("Info")},{path:"/create",component:ri("Create")},{path:"/lobby",component:ri("Lobby")},{path:"/game",component:ri("Game")},{path:"/sharelink/:lobbyID",component:ri("Share")}];/**
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
 *//**
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
 */const ef=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cE=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(n[h],n[u],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ef(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},uE=function(t){const e=ef(t);return tf.encodeByteArray(e,!0)},nf=function(t){return uE(t).replace(/\./g,"")},hE=function(t){try{return tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function dE(){try{return typeof indexedDB=="object"}catch{return!1}}function fE(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function pE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _E=()=>pE().__FIREBASE_DEFAULTS__,gE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hE(t[1]);return e&&JSON.parse(e)},yE=()=>{try{return _E()||gE()||mE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vE=()=>{var t;return(t=yE())===null||t===void 0?void 0:t.config};/**
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
 */let EE=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}};/**
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
 */const bE="FirebaseError";let yl=class sf extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=bE,Object.setPrototypeOf(this,sf.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rf.prototype.create)}},rf=class{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?wE(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yl(s,a,i)}};function wE(t,e){return t.replace(CE,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const CE=/\{\$([^}]+)}/g;function va(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(cu(r)&&cu(o)){if(!va(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function cu(t){return t!==null&&typeof t=="object"}let mr=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Tn="[DEFAULT]";/**
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
 */class IE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new EE;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SE(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:TE(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TE(t){return t===Tn?void 0:t}function SE(t){return t.instantiationMode==="EAGER"}/**
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
 */class RE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const AE={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},NE=ve.INFO,kE={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},OE=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=kE[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let PE=class{constructor(e){this.name=e,this._logLevel=NE,this._logHandler=OE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}};const xE=(t,e)=>e.some(n=>t instanceof n);let uu,hu;function DE(){return uu||(uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ME(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const of=new WeakMap,Ea=new WeakMap,af=new WeakMap,xo=new WeakMap,vl=new WeakMap;function LE(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(an(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&of.set(n,t)}).catch(()=>{}),vl.set(e,t),e}function FE(t){if(Ea.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ea.set(t,e)}let ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ea.get(t);if(e==="objectStoreNames")return t.objectStoreNames||af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $E(t){ba=t(ba)}function UE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Do(this),e,...n);return af.set(i,e.sort?e.sort():[e]),an(i)}:ME().includes(t)?function(...e){return t.apply(Do(this),e),an(of.get(this))}:function(...e){return an(t.apply(Do(this),e))}}function BE(t){return typeof t=="function"?UE(t):(t instanceof IDBTransaction&&FE(t),xE(t,DE())?new Proxy(t,ba):t)}function an(t){if(t instanceof IDBRequest)return LE(t);if(xo.has(t))return xo.get(t);const e=BE(t);return e!==t&&(xo.set(t,e),vl.set(e,t)),e}const Do=t=>vl.get(t);function HE(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=an(o);return i&&o.addEventListener("upgradeneeded",l=>{i(an(o.result),l.oldVersion,l.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const WE=["get","getKey","getAll","getAllKeys","count"],VE=["put","add","delete","clear"],Mo=new Map;function du(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mo.get(e))return Mo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=VE.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||WE.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Mo.set(e,r),r}$E(t=>({...t,get:(e,n,i)=>du(e,n)||t.get(e,n,i),has:(e,n)=>!!du(e,n)||t.has(e,n)}));/**
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
 */class jE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GE(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function GE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wa="@firebase/app",fu="0.9.0";/**
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
 */const Wn=new PE("@firebase/app"),zE="@firebase/app-compat",KE="@firebase/analytics-compat",qE="@firebase/analytics",YE="@firebase/app-check-compat",QE="@firebase/app-check",JE="@firebase/auth",XE="@firebase/auth-compat",ZE="@firebase/database",eb="@firebase/database-compat",tb="@firebase/functions",nb="@firebase/functions-compat",ib="@firebase/installations",sb="@firebase/installations-compat",rb="@firebase/messaging",ob="@firebase/messaging-compat",ab="@firebase/performance",lb="@firebase/performance-compat",cb="@firebase/remote-config",ub="@firebase/remote-config-compat",hb="@firebase/storage",db="@firebase/storage-compat",fb="@firebase/firestore",pb="@firebase/firestore-compat",_b="firebase",gb="9.15.0";/**
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
 */const Ca="[DEFAULT]",mb={[wa]:"fire-core",[zE]:"fire-core-compat",[qE]:"fire-analytics",[KE]:"fire-analytics-compat",[QE]:"fire-app-check",[YE]:"fire-app-check-compat",[JE]:"fire-auth",[XE]:"fire-auth-compat",[ZE]:"fire-rtdb",[eb]:"fire-rtdb-compat",[tb]:"fire-fn",[nb]:"fire-fn-compat",[ib]:"fire-iid",[sb]:"fire-iid-compat",[rb]:"fire-fcm",[ob]:"fire-fcm-compat",[ab]:"fire-perf",[lb]:"fire-perf-compat",[cb]:"fire-rc",[ub]:"fire-rc-compat",[hb]:"fire-gcs",[db]:"fire-gcs-compat",[fb]:"fire-fst",[pb]:"fire-fst-compat","fire-js":"fire-js",[_b]:"fire-js-all"};/**
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
 */const yr=new Map,Ia=new Map;function yb(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(Ia.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Ia.set(e,t);for(const n of yr.values())yb(n,t);return!0}function eo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ln=new rf("app","Firebase",vb);/**
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
 */class Eb{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=gb;function lf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ca,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});if(n||(n=vE()),!n)throw ln.create("no-options");const r=yr.get(s);if(r){if(va(n,r.options)&&va(i,r.config))return r;throw ln.create("duplicate-app",{appName:s})}const o=new RE(s);for(const l of Ia.values())o.addComponent(l);const a=new Eb(n,i,o);return yr.set(s,a),a}function El(t=Ca){const e=yr.get(t);if(!e&&t===Ca)return lf();if(!e)throw ln.create("no-app",{appName:t});return e}function wt(t,e,n){var i;let s=(i=mb[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(a.join(" "));return}Vn(new mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bb="firebase-heartbeat-database",wb=1,gs="firebase-heartbeat-store";let Lo=null;function cf(){return Lo||(Lo=HE(bb,wb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),Lo}async function Cb(t){try{return(await cf()).transaction(gs).objectStore(gs).get(uf(t))}catch(e){if(e instanceof yl)Wn.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function pu(t,e){try{const i=(await cf()).transaction(gs,"readwrite");return await i.objectStore(gs).put(e,uf(t)),i.done}catch(n){if(n instanceof yl)Wn.warn(n.message);else{const i=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(i.message)}}}function uf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ib=1024,Tb=30*24*60*60*1e3;class Sb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ab(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_u();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Tb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_u(),{heartbeatsToSend:n,unsentEntries:i}=Rb(this._heartbeatsCache.heartbeats),s=nf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _u(){return new Date().toISOString().substring(0,10)}function Rb(t,e=Ib){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),gu(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gu(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ab{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dE()?fE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gu(t){return nf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Nb(t){Vn(new mr("platform-logger",e=>new jE(e),"PRIVATE")),Vn(new mr("heartbeat",e=>new Sb(e),"PRIVATE")),wt(wa,fu,t),wt(wa,fu,"esm2017"),wt("fire-js","")}Nb("");var kb="firebase",Ob="9.15.0";/**
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
 */wt(kb,Ob,"app");/**
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
 *//**
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
 */const Pb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xb=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Db={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(n[h],n[u],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hf=function(t){try{return Db.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Lb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $b(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ub(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bb=()=>Ub().__FIREBASE_DEFAULTS__,Hb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hf(t[1]);return e&&JSON.parse(e)},df=()=>{try{return Bb()||Hb()||Wb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vb=t=>{var e,n;return(n=(e=df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ff=t=>{var e;return(e=df())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */const jb="FirebaseError";let to=class pf extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=jb,Object.setPrototypeOf(this,pf.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}},no=class{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Gb(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new to(s,a,i)}};function Gb(t,e){return t.replace(zb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const zb=/\{\$([^}]+)}/g;function Kb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _f(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(mu(r)&&mu(o)){if(!_f(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function mu(t){return t!==null&&typeof t=="object"}/**
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
 */function xs(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function qb(t,e){const n=new Yb(t,e);return n.subscribe.bind(n)}class Yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Qb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Fo),s.error===void 0&&(s.error=Fo),s.complete===void 0&&(s.complete=Fo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fo(){}/**
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
 */function Pi(t){return t&&t._delegate?t._delegate:t}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Jb={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Xb=me.INFO,Zb={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},ew=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Zb[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let tw=class{constructor(e){this.name=e,this._logLevel=Xb,this._logHandler=ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}};function bl(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}let yu=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};function gf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nw=gf,mf=new no("auth","Firebase",gf());/**
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
 */const vu=new tw("@firebase/auth");function rr(t,...e){vu.logLevel<=me.ERROR&&vu.error(`Auth (${Ps}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw wl(t,...e)}function Ct(t,...e){return wl(t,...e)}function iw(t,e,n){const i=Object.assign(Object.assign({},nw()),{[e]:n});return new no("auth","Firebase",i).create(e,{appName:t.name})}function wl(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return mf.create(t,...e)}function V(t,e,...n){if(!t)throw wl(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function Vt(t,e){t||Mt(e)}/**
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
 */const Eu=new Map;function Lt(t){Vt(t instanceof Function,"Expected a class definition");let e=Eu.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eu.set(t,e),e)}/**
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
 */function sw(t,e){const n=eo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(_f(r,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function rw(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ta(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ow(){return bu()==="http:"||bu()==="https:"}function bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ow()||Lb()||"connection"in navigator)?navigator.onLine:!0}function lw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=Mb()||Fb()}get(){return aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cl(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yf{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const uw=new Ds(3e4,6e4);function vf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function io(t,e,n,i,s={}){return Ef(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yf.fetch()(wf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ef(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},cw),e);try{const s=new hw(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qs(t,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw iw(t,h,c);Wt(t,h)}}catch(s){if(s instanceof to)throw s;Wt(t,"network-request-failed")}}async function bf(t,e,n,i,s={}){const r=await io(t,e,n,i,s);return"mfaPendingCredential"in r&&Wt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function wf(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Cl(t.config,s):`${t.config.apiScheme}://${s}`}class hw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ct(this.auth,"network-request-failed")),uw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Ct(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function dw(t,e){return io(t,"POST","/v1/accounts:delete",e)}async function fw(t,e){return io(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function is(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pw(t,e=!1){const n=Pi(t),i=await n.getIdToken(e),s=Il(i);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:is($o(s.auth_time)),issuedAtTime:is($o(s.iat)),expirationTime:is($o(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $o(t){return Number(t)*1e3}function Il(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=hf(n);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _w(t){const e=Il(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ms(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof to&&gw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function gw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ms(t,fw(n,{idToken:i}));V(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ew(r.providerUserInfo):[],a=vw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cf(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function yw(t){const e=Pi(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vw(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ew(t){return t.map(e=>{var{providerId:n}=e,i=bl(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function bw(t,e){const n=await Ef(t,{},async()=>{const i=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=wf(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yf.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_w(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await bw(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ys;return i&&(V(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(V(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(V(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Yt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=bl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ms(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pw(this,e)}reload(){return yw(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ms(this,dw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:F,isAnonymous:Q,providerData:Ee,stsTokenManager:ke}=n;V($&&ke,e,"internal-error");const K=ys.fromJSON(this.name,ke);V(typeof $=="string",e,"internal-error"),Yt(u,e.name),Yt(d,e.name),V(typeof F=="boolean",e,"internal-error"),V(typeof Q=="boolean",e,"internal-error"),Yt(p,e.name),Yt(g,e.name),Yt(E,e.name),Yt(A,e.name),Yt(O,e.name),Yt(P,e.name);const re=new $n({uid:$,auth:e,email:d,emailVerified:F,displayName:u,isAnonymous:Q,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:K,createdAt:O,lastLoginAt:P});return Ee&&Array.isArray(Ee)&&(re.providerData=Ee.map(le=>Object.assign({},le))),A&&(re._redirectEventId=A),re}static async _fromIdTokenResponse(e,n,i=!1){const s=new ys;s.updateFromServerResponse(n);const r=new $n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await vr(r),r}}/**
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
 */class If{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}If.type="NONE";const wu=If;/**
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
 */function or(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=or(this.userKey,s.apiKey,r),this.fullPersistenceKey=or("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new _i(Lt(wu),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Lt(wu);const o=or(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const u=$n._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new _i(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new _i(r,e,i))}}/**
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
 */function Cu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nf(e))return"Blackberry";if(kf(e))return"Webos";if(Tl(e))return"Safari";if((e.includes("chrome/")||Sf(e))&&!e.includes("edge/"))return"Chrome";if(Af(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Tf(t=He()){return/firefox\//i.test(t)}function Tl(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sf(t=He()){return/crios\//i.test(t)}function Rf(t=He()){return/iemobile/i.test(t)}function Af(t=He()){return/android/i.test(t)}function Nf(t=He()){return/blackberry/i.test(t)}function kf(t=He()){return/webos/i.test(t)}function so(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ww(t=He()){var e;return so(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cw(){return $b()&&document.documentMode===10}function Of(t=He()){return so(t)||Af(t)||kf(t)||Nf(t)||/windows phone/i.test(t)||Rf(t)}function Iw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pf(t,e=[]){let n;switch(t){case"Browser":n=Cu(He());break;case"Worker":n=`${Cu(He())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${i}`}/**
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
 */class Tw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Sw{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iu(this),this.idTokenSubscription=new Iu(this),this.beforeStateQueue=new Tw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pi(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function ro(t){return Pi(t)}class Iu{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rw(t,e,n){const i=ro(t);V(i._canInitEmulator,i,"emulator-config-failed"),V(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=xf(e),{host:o,port:a}=Aw(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Nw()}function xf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Aw(t){const e=xf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Tu(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Tu(o)}}}function Tu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Df{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
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
 */async function gi(t,e){return bf(t,"POST","/v1/accounts:signInWithIdp",vf(t,e))}/**
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
 */const kw="http://localhost";class jn extends Df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=bl(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new jn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,gi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:kw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xs(n)}return e}}/**
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
 */class Mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends Mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends Ms{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class tn extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return tn.credential(n,i)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class nn extends Ms{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
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
 */class sn extends Ms{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return sn.credential(n,i)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
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
 */async function Ow(t,e){return bf(t,"POST","/v1/accounts:signUp",vf(t,e))}/**
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
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await $n._fromIdTokenResponse(e,i,s),o=Su(i);return new _n({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Su(i);return new _n({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Su(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function DR(t){var e;const n=ro(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _n({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Ow(n,{returnSecureToken:!0}),s=await _n._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Er extends to{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Er.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Er(e,n,i,s)}}function Lf(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Er._fromErrorAndOperation(t,r,e,i):r})}async function Pw(t,e,n=!1){const i=await ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",i)}/**
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
 */async function xw(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ms(t,Lf(i,s,e,t),n);V(r.idToken,i,"internal-error");const o=Il(r.idToken);V(o,i,"internal-error");const{sub:a}=o;return V(t.uid===a,i,"user-mismatch"),_n._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Wt(i,"user-mismatch"),r}}/**
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
 */async function Dw(t,e,n=!1){const i="signIn",s=await Lf(t,i,e),r=await _n._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Mw(t,e,n,i){return Pi(t).onIdTokenChanged(e,n,i)}function Lw(t,e,n){return Pi(t).beforeAuthStateChanged(e,n)}const br="__sak";/**
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
 */class Ff{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fw(){const t=He();return Tl(t)||so(t)}const $w=1e3,Uw=10;class $f extends Ff{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fw()&&Iw(),this.fallbackToPolling=Of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Cw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Uw):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},$w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$f.type="LOCAL";const Bw=$f;/**
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
 */class Uf extends Ff{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uf.type="SESSION";const Bf=Uf;/**
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
 */function Hw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new oo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Hw(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
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
 */class Ww{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Sl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function Vw(t){It().location.href=t}/**
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
 */function Hf(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function jw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zw(){return Hf()?self:null}/**
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
 */const Wf="firebaseLocalStorageDb",Kw=1,wr="firebaseLocalStorage",Vf="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ao(t,e){return t.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function qw(){const t=indexedDB.deleteDatabase(Wf);return new Ls(t).toPromise()}function Sa(){const t=indexedDB.open(Wf,Kw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(wr,{keyPath:Vf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(wr)?e(i):(i.close(),await qw(),e(await Sa()))})})}async function Ru(t,e,n){const i=ao(t,!0).put({[Vf]:e,value:n});return new Ls(i).toPromise()}async function Yw(t,e){const n=ao(t,!1).get(e),i=await new Ls(n).toPromise();return i===void 0?null:i.value}function Au(t,e){const n=ao(t,!0).delete(e);return new Ls(n).toPromise()}const Qw=800,Jw=3;class jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Jw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(zw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jw(),!this.activeServiceWorker)return;this.sender=new Ww(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sa();return await Ru(e,br,"1"),await Au(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ru(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Yw(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Au(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ao(s,!1).getAll();return new Ls(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jf.type="LOCAL";const Xw=jf;/**
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
 */function Zw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eC(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Ct("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Zw().appendChild(i)})}function tC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ds(3e4,6e4);/**
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
 */function nC(t,e){return e?Lt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rl extends Df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iC(t){return Dw(t.auth,new Rl(t),t.bypassAuthState)}function sC(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),xw(n,new Rl(t),t.bypassAuthState)}async function rC(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Pw(n,new Rl(t),t.bypassAuthState)}/**
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
 */class Gf{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return rC;case"reauthViaPopup":case"reauthViaRedirect":return sC;default:Wt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oC=new Ds(2e3,1e4);class ci extends Gf{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,oC.get())};e()}}ci.currentPopupAction=null;/**
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
 */const aC="pendingRedirect",ar=new Map;class lC extends Gf{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ar.get(this.auth._key());if(!e){try{const i=await cC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ar.set(this.auth._key(),e)}return this.bypassAuthState||ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cC(t,e){const n=dC(e),i=hC(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function uC(t,e){ar.set(t._key(),e)}function hC(t){return Lt(t._redirectPersistence)}function dC(t){return or(aC,t.config.apiKey,t.name)}async function fC(t,e,n=!1){const i=ro(t),s=nC(i,e),o=await new lC(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const pC=10*60*1e3;class _C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!zf(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nu(e))}saveEventToCache(e){this.cachedEventUids.add(Nu(e)),this.lastProcessedEventTime=Date.now()}}function Nu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zf(t);default:return!1}}/**
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
 */async function mC(t,e={}){return io(t,"GET","/v1/projects",e)}/**
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
 */const yC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vC=/^https?/;async function EC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mC(t);for(const n of e)try{if(bC(n))return}catch{}Wt(t,"unauthorized-domain")}function bC(t){const e=Ta(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!vC.test(n))return!1;if(yC.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const wC=new Ds(3e4,6e4);function ku(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CC(t){return new Promise((e,n)=>{var i,s,r;function o(){ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ku(),n(Ct(t,"network-request-failed"))},timeout:wC.get()})}if(!((s=(i=It().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=It().gapi)===null||r===void 0)&&r.load)o();else{const a=tC("iframefcb");return It()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},eC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lr=null,e})}let lr=null;function IC(t){return lr=lr||CC(t),lr}/**
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
 */const TC=new Ds(5e3,15e3),SC="__/auth/iframe",RC="emulator/auth/iframe",AC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kC(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cl(e,RC):`https://${t.config.authDomain}/${SC}`,i={apiKey:e.apiKey,appName:t.name,v:Ps},s=NC.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${xs(i).slice(1)}`}async function OC(t){const e=await IC(t),n=It().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:kC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AC,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=It().setTimeout(()=>{r(o)},TC.get());function l(){It().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const PC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xC=500,DC=600,MC="_blank",LC="http://localhost";class Ou{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FC(t,e,n,i=xC,s=DC){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},PC),{width:i.toString(),height:s.toString(),top:r,left:o}),c=He().toLowerCase();n&&(a=Sf(c)?MC:n),Tf(c)&&(e=e||LC,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(ww(c)&&a!=="_self")return $C(e||"",a),new Ou(null);const u=window.open(e||"",a,h);V(u,t,"popup-blocked");try{u.focus()}catch{}return new Ou(u)}function $C(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const UC="__/auth/handler",BC="emulator/auth/handler";function Pu(t,e,n,i,s,r){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ps,eventId:s};if(e instanceof Mf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ms){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${HC(t)}?${xs(a).slice(1)}`}function HC({config:t}){return t.emulator?Cl(t,BC):`https://${t.authDomain}/${UC}`}/**
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
 */const Uo="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bf,this._completeRedirectFn=fC,this._overrideRedirectResult=uC}async _openPopup(e,n,i,s){var r;Vt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Pu(e,n,i,Ta(),s);return FC(e,o,Sl())}async _openRedirect(e,n,i,s){return await this._originValidation(e),Vw(Pu(e,n,i,Ta(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Vt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await OC(e),i=new _C(e);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uo,{type:Uo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Uo];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Of()||Tl()||so()}}const VC=WC;var xu="@firebase/auth",Du="0.21.0";/**
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
 */class jC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zC(t){Vn(new yu("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{V(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pf(t)},h=new Sw(a,l,c);return rw(h,n),h})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vn(new yu("auth-internal",e=>{const n=ro(e.getProvider("auth").getImmediate());return(i=>new jC(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(xu,Du,GC(t)),wt(xu,Du,"esm2017")}/**
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
 */const KC=5*60,qC=ff("authIdTokenMaxAge")||KC;let Mu=null;const YC=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>qC)return;const s=n==null?void 0:n.token;Mu!==s&&(Mu=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QC(t=El()){const e=eo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sw(t,{popupRedirectResolver:VC,persistence:[Xw,Bw,Bf]}),i=ff("authTokenSyncURL");if(i){const r=YC(i);Lw(n,r,()=>r(n.currentUser)),Mw(n,o=>r(o))}const s=Vb("auth");return s&&Rw(n,`http://${s}`),n}zC("Browser");/**
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
 */const Kf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw xi(e)},xi=function(t){return new Error("Firebase Database ("+Kf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},JC=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(n[h],n[u],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yf=function(t){const e=qf(t);return Al.encodeByteArray(e,!0)},Lu=function(t){return Yf(t).replace(/\./g,"")},Ra=function(t){try{return Al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XC(t){return Qf(void 0,t)}function Qf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZC(n)||(t[n]=Qf(t[n],e[n]));return t}function ZC(t){return t!=="__proto__"}/**
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
 */function eI(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eI())}function tI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xf(){return Kf.NODE_ADMIN===!0}function nI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iI=()=>nI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ra(t[1]);return e&&JSON.parse(e)},oI=()=>{try{return iI()||sI()||rI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aI=t=>{var e,n;return(n=(e=oI())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lI=t=>{const e=aI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]};/**
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
 */class Dt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function cI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Lu(JSON.stringify(n)),Lu(JSON.stringify(o)),a].join(".")}/**
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
 */function vs(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const Zf=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=vs(Ra(r[0])||""),n=vs(Ra(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},uI=function(t){const e=Zf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hI=function(t){const e=Zf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Aa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}/**
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
 */function dI(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class fI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Ti(t,e){return`${t} failed: ${e} argument `}/**
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
 */const pI=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,S(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lo=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Qn(t){return t&&t._delegate?t._delegate:t}let _I=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const gI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},mI=ye.INFO,yI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},vI=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=yI[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class EI{constructor(e){this.name=e,this._logLevel=mI,this._logHandler=vI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Fu="@firebase/database",$u="0.14.0";/**
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
 */let ep="";function bI(t){ep=t}/**
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
 */class wI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class CI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wI(e)}}catch{}return new CI},kn=tp("localStorage"),Na=tp("sessionStorage");/**
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
 */const mi=new EI("@firebase/database"),II=function(){let t=1;return function(){return t++}}(),np=function(t){const e=pI(t),n=new fI;n.update(e);const i=n.digest();return Al.encodeByteArray(i)},Fs=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fs.apply(null,i):typeof i=="object"?e+=xe(i):e+=i,e+=" "}return e};let Un=null,Uu=!0;const TI=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(mi.logLevel=ye.VERBOSE,Un=mi.log.bind(mi),e&&Na.set("logging_enabled",!0)):typeof t=="function"?Un=t:(Un=null,Na.remove("logging_enabled"))},Fe=function(...t){if(Uu===!0&&(Uu=!1,Un===null&&Na.get("logging_enabled")===!0&&TI(!0)),Un){const e=Fs.apply(null,t);Un(e)}},$s=function(t){return function(...e){Fe(t,...e)}},ka=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fs(...t);mi.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Fs(...t)}`;throw mi.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Fs(...t);mi.warn(e)},SI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},co=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Gn="[MAX_NAME]",Jn=function(t,e){if(t===e)return 0;if(t===Si||e===Gn)return-1;if(e===Si||t===Gn)return 1;{const n=Bu(t),i=Bu(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},AI=function(t,e){return t===e?0:t<e?-1:1},ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Nl=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=xe(e[i]),n+=":",n+=Nl(t[e[i]]);return n+="}",n},ip=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sp=function(t){S(!co(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},NI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function OI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const PI=new RegExp("^-?(0*)\\d{1,10}$"),xI=-2147483648,DI=2147483647,Bu=function(t){if(PI.test(t)){const e=Number(t);if(e>=xI&&e<=DI)return e}return null},Di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},MI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class FI{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class yi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yi.OWNER="owner";/**
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
 */const kl="5",rp="v",op="s",ap="r",lp="f",cp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,up="ls",hp="p",Oa="ac",dp="websocket",fp="long_polling";/**
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
 */class pp{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $I(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _p(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let i;if(e===dp)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fp)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$I(t)&&(n.ns=t.namespace);const s=[];return Ue(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class UI{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return XC(this.counters_)}}/**
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
 */const Bo={},Ho={};function Ol(t){const e=t.toString();return Bo[e]||(Bo[e]=new UI),Bo[e]}function BI(t,e){const n=t.toString();return Ho[n]||(Ho[n]=e()),Ho[n]}/**
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
 */class HI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Di(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Hu="start",WI="close",VI="pLPCommand",jI="pRTLPCB",gp="id",mp="pw",yp="ser",GI="cb",zI="seg",KI="ts",qI="d",YI="dframe",vp=1870,Ep=30,QI=vp-Ep,JI=25e3,XI=3e4;class ui{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$s(e),this.stats_=Ol(n),this.urlFn=l=>(this.appCheckToken&&(l[Oa]=this.appCheckToken),_p(n,fp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XI)),RI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pl((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hu)this.id=a,this.password=l;else if(o===WI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Hu]="t",i[yp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[GI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[rp]=kl,this.transportSessionId&&(i[op]=this.transportSessionId),this.lastSessionId&&(i[up]=this.lastSessionId),this.applicationId&&(i[hp]=this.applicationId),this.appCheckToken&&(i[Oa]=this.appCheckToken),typeof location<"u"&&location.hostname&&cp.test(location.hostname)&&(i[ap]=lp);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!NI()&&!kI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Yf(n),s=ip(i,QI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[YI]="t",i[gp]=e,i[mp]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pl{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=II(),window[VI+this.uniqueCallbackIdentifier]=e,window[jI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gp]=this.myID,e[mp]=this.myPW,e[yp]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ep+i.length<=vp;){const o=this.pendingSegs.shift();i=i+"&"+zI+s+"="+o.seg+"&"+KI+s+"="+o.ts+"&"+qI+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(JI)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const ZI=16384,eT=45e3;let Ir=null;typeof MozWebSocket<"u"?Ir=MozWebSocket:typeof WebSocket<"u"&&(Ir=WebSocket);class dt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$s(this.connId),this.stats_=Ol(n),this.connURL=dt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[rp]=kl,typeof location<"u"&&location.hostname&&cp.test(location.hostname)&&(o[ap]=lp),n&&(o[op]=n),i&&(o[up]=i),s&&(o[Oa]=s),r&&(o[hp]=r),_p(e,dp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kn.set("previous_websocket_failure",!0);try{let i;Xf(),this.mySock=new Ir(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ir!==null&&!dt.forceDisallow_}static previouslyFailed(){return kn.isInMemoryStorage||kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=vs(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ip(n,ZI);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
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
 */class Es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ui,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let i=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[dt];else{const s=this.transports_=[];for(const r of Es.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const tT=6e4,nT=5e3,iT=10*1024,sT=100*1024,Wo="t",Wu="d",rT="s",Vu="r",oT="e",ju="o",Gu="a",zu="n",Ku="p",aT="h";class lT{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$s("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wo in e){const n=e[Wo];n===Gu?this.upgradeIfSecondaryHealthy_():n===Vu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ju&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ji("t",e),i=ji("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ku,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ji("t",e),i=ji("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ji(Wo,e);if(Wu in e){const i=e[Wu];if(n===aT)this.onHandshake_(i);else if(n===zu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rT?this.onConnectionShutdown_(i):n===Vu?this.onReset_(i):n===oT?ka("Server Error: "+i):n===ju?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ka("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),kl!==i&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ku,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class bp{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class wp{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Tr extends wp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tr}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const qu=32,Yu=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ue("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gn(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function xl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function we(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ue)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ue(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return ze(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uT(t,e){const n=bs(t,0),i=bs(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=Jn(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Dl(t,e){if(gn(t)!==gn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function st(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(gn(t)>gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class hT{constructor(e,n){this.errorPrefix_=n,this.parts_=bs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=lo(this.parts_[i]);Ip(this)}}function dT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=lo(e),Ip(t)}function fT(t){const e=t.parts_.pop();t.byteLength_-=lo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ip(t){if(t.byteLength_>Yu)throw new Error(t.errorPrefix_+"has a key path longer than "+Yu+" bytes ("+t.byteLength_+").");if(t.parts_.length>qu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qu+") or object contains a cycle "+Sn(t))}function Sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ml extends wp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ml}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gi=1e3,pT=60*5*1e3,Qu=30*1e3,_T=1.3,gT=3e4,mT="server_kill",Ju=3;class Bt extends bp{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=$s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gi,this.maxReconnectDelay_=pT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Xf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ml.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(xe(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Dt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Bt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const i=Ii(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ka("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gT&&(this.reconnectDelay_=Gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_T)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Bt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new lT(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{Ke(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(mT)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ke(u),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Aa(this.interruptReasons_)&&(this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Nl(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ue(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ju&&(this.reconnectDelay_=Qu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ju&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ep.replace(/\./g,"-")]=1,Jf()?e["framework.cordova"]=1:tI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tr.getInstance().currentlyOnline();return Aa(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
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
 */class uo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new X(Si,e),s=new X(Si,n);return this.compare(i,s)!==0}minPost(){return X.MIN}}/**
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
 */let Js;class Tp extends uo{static get __EMPTY_NODE(){return Js}static set __EMPTY_NODE(e){Js=e}compare(e,n){return Jn(e.name,n.name)}isDefinedOn(e){throw xi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Gn,Js)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Js)}toString(){return".key"}}const vi=new Tp;/**
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
 */class Xs{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Le.RED,this.left=s??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,i,s,r){return new Le(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class yT{copy(e,n,i,s,r){return this}insert(e,n,i){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xs(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new yT;/**
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
 */function vT(t,e){return Jn(t.name,e.name)}function Ll(t,e){return Jn(t,e)}/**
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
 */let Pa;function ET(t){Pa=t}const Sp=function(t){return typeof t=="number"?"number:"+sp(t):"string:"+t},Rp=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else S(t===Pa||t.isEmpty(),"priority of unexpected type.");S(t===Pa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Xu;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rp(this.priorityNode_)}static set __childrenNodeConstructor(e){Xu=e}static get __childrenNodeConstructor(){return Xu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Y(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(S(i!==".priority"||gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sp(this.value_):e+=this.value_,this.lazyHash_=np(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Me.VALUE_TYPE_ORDER.indexOf(n),r=Me.VALUE_TYPE_ORDER.indexOf(i);return S(s>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ap,Np;function bT(t){Ap=t}function wT(t){Np=t}class CT extends uo{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Jn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Gn,new Me("[PRIORITY-POST]",Np))}makePost(e,n){const i=Ap(e);return new X(n,new Me("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ce=new CT;/**
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
 */const IT=Math.log(2);class TT{constructor(e){const n=r=>parseInt(Math.log(r)/IT,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sr=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new Le(d,u.node,Le.BLACK,null,null);{const p=parseInt(h/2,10)+l,g=s(l,p),E=s(p+1,c);return u=t[p],d=n?n(u):u,new Le(d,u.node,Le.BLACK,g,E)}},r=function(l){let c=null,h=null,u=t.length;const d=function(g,E){const A=u-g,O=u;u-=g;const P=s(A+1,O),$=t[A],F=n?n($):$;p(new Le(F,$.node,E,null,P))},p=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const E=l.nextBitIsOne(),A=Math.pow(2,l.count-(g+1));E?d(A,Le.BLACK):(d(A,Le.BLACK),d(A,Le.RED))}return h},o=new TT(t.length),a=r(o);return new Je(i||e,a)};/**
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
 */let Vo;const oi={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(oi&&Ce,"ChildrenNode.ts has not been loaded"),Vo=Vo||new Ft({".priority":oi},{".priority":Ce}),Vo}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==vi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Sr(i,e.getCompare()):a=oi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Ft(h,c)}addToIndexes(e,n){const i=Cr(this.indexes_,(s,r)=>{const o=Ii(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),s===oi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sr(a,o.getCompare())}else return oi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Ft(i,this.indexSet_)}removeFromIndexes(e,n){const i=Cr(this.indexes_,s=>{if(s===oi)return s;{const r=n.get(e.name);return r?s.remove(new X(e.name,r)):s}});return new Ft(i,this.indexSet_)}}/**
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
 */let zi;class B{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Rp(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zi||(zi=new B(new Je(Ll),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zi}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zi:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new X(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?zi:this.priorityNode_;return new B(s,o,r)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{S(Y(e)!==".priority"||gn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(pe(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),i++,r&&B.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sp(this.getPriority().val())+":"),this.forEachChild(Ce,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":np(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===vi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ce),s=n.getIterator(Ce);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vi?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ST extends B{constructor(){super(new Je(Ll),B.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Us=new ST;Object.defineProperties(X,{MIN:{value:new X(Si,B.EMPTY_NODE)},MAX:{value:new X(Gn,Us)}});Tp.__EMPTY_NODE=B.EMPTY_NODE;Me.__childrenNodeConstructor=B;ET(Us);wT(Us);/**
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
 */const RT=!0;function Ie(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Ie(e))}if(!(t instanceof Array)&&RT){const n=[];let i=!1;if(Ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ie(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=Sr(n,vT,o=>o.name,Ll);if(i){const o=Sr(n,Ce.getCompare());return new B(r,Ie(e),new Ft({".priority":o},{".priority":Ce}))}else return new B(r,Ie(e),Ft.Default)}else{let n=B.EMPTY_NODE;return Ue(t,(i,s)=>{if(Rt(t,i)&&i.substring(0,1)!=="."){const r=Ie(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ie(e))}}bT(Ie);/**
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
 */class AT extends uo{constructor(e){super(),this.indexPath_=e,S(!J(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Jn(e.name,n.name):r}makePost(e,n){const i=Ie(e),s=B.EMPTY_NODE.updateChild(this.indexPath_,i);return new X(n,s)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Us);return new X(Gn,e)}toString(){return bs(this.indexPath_,0).join("/")}}/**
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
 */class NT extends uo{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Jn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const i=Ie(e);return new X(n,i)}toString(){return".value"}}const kT=new NT;/**
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
 */function kp(t){return{type:"value",snapshotNode:t}}function Ri(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ws(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Cs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fl{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ws(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ri(n,i)):o.trackChildChange(Cs(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Ce,(s,r)=>{n.hasChild(s)||i.trackChildChange(ws(s,r))}),n.isLeafNode()||n.forEachChild(Ce,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Cs(s,r,o))}else i.trackChildChange(Ri(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Is{constructor(e){this.indexedFilter_=new Fl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Is.getStartPost_(e),this.endPost_=Is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new X(n,i))||(i=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=B.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(Ce,(o,a)=>{r.matches(new X(o,a))||(s=s.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class PT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new X(n,i))||(i=B.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,p)=>u(p,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new X(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(h&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Cs(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(ws(n,u));const E=a.updateImmediateChild(n,B.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ri(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ws(c.name,c.node)),r.trackChildChange(Ri(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
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
 */class $l{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new $l;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xT(t){return t.loadsAllData()?new Fl(t.getIndex()):t.hasLimit()?new PT(t):new Is(t)}function Zu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===kT?n="$value":t.index_===vi?n="$key":(S(t.index_ instanceof AT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=xe(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+xe(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=xe(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function eh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
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
 */class Rr extends bp{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=$s("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Zu(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Ii(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Rr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Zu(e._queryParams),i=e._path.toString(),s=new Dt;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+dI(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vs(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class DT{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ar(){return{value:null,children:new Map}}function Mi(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,Ar());const s=t.children.get(i);e=pe(e),Mi(s,e,n)}}function xa(t,e){if(J(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Ce,(i,s)=>{Mi(t,new ue(i),s)}),xa(t,e)}}else if(t.children.size>0){const n=Y(e);return e=pe(e),t.children.has(n)&&xa(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Da(t,e,n){t.value!==null?n(e,t.value):MT(t,(i,s)=>{const r=new ue(e.toString()+"/"+i);Da(s,r,n)})}function MT(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class LT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const th=10*1e3,FT=30*1e3,$T=5*60*1e3;class UT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LT(e);const i=th+(FT-th)*Math.random();ss(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ue(e,(s,r)=>{r>0&&Rt(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*$T))}}/**
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
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function Ul(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Nr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=pt.ACK_USER_WRITE,this.source=Ul()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Nr(oe(),n,this.revert)}}else return S(Y(this.path)===e,"operationForChild called for unrelated child."),new Nr(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Ts(this.source,oe()):new Ts(this.source,pe(this.path))}}/**
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
 */class zn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=pt.OVERWRITE}operationForChild(e){return J(this.path)?new zn(this.source,oe(),this.snap.getImmediateChild(e)):new zn(this.source,pe(this.path),this.snap)}}/**
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
 */class Ai{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=pt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new zn(this.source,oe(),n.value):new Ai(this.source,oe(),n)}else return S(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ai(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class mn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class BT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HT(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(OT(o.childName,o.snapshotNode))}),Ki(t,s,"child_removed",e,i,n),Ki(t,s,"child_added",e,i,n),Ki(t,s,"child_moved",r,i,n),Ki(t,s,"child_changed",e,i,n),Ki(t,s,"value",e,i,n),s}function Ki(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>VT(t,a,l)),o.forEach(a=>{const l=WT(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function WT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VT(t,e,n){if(e.childName==null||n.childName==null)throw xi("Should only compare child_ events.");const i=new X(e.childName,e.snapshotNode),s=new X(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function ho(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,i){return ho(new mn(e,n,i),t.serverCache)}function Op(t,e,n,i){return ho(t.eventCache,new mn(e,n,i))}function kr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let jo;const jT=()=>(jo||(jo=new Je(AI)),jo);class ge{constructor(e,n=jT()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return Ue(e,(i,s)=>{n=n.set(new ue(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(J(e))return null;{const i=Y(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(pe(e),n);return r!=null?{path:we(new ue(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(pe(e)):new ge(null)}}set(e,n){if(J(e))return new ge(n,this.children);{const i=Y(e),r=(this.children.get(i)||new ge(null)).set(pe(e),n),o=this.children.insert(i,r);return new ge(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const s=i.remove(pe(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ge(null):new ge(this.value,r)}else return this}}get(e){if(J(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(pe(e)):null}}setTree(e,n){if(J(e))return n;{const i=Y(e),r=(this.children.get(i)||new ge(null)).setTree(pe(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ge(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(we(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(J(e))return null;{const r=Y(e),o=this.children.get(r);return o?o.findOnPath_(pe(e),we(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,i){if(J(e))return this;{this.value&&i(n,this.value);const s=Y(e),r=this.children.get(s);return r?r.foreachOnPath_(pe(e),we(n,s),i):new ge(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(we(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new ge(null))}}function os(t,e,n){if(J(e))return new _t(new ge(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ze(s,e);return r=r.updateChild(o,n),new _t(t.writeTree_.set(s,r))}else{const s=new ge(n),r=t.writeTree_.setTree(e,s);return new _t(r)}}}function Ma(t,e,n){let i=t;return Ue(n,(s,r)=>{i=os(i,we(e,s),r)}),i}function nh(t,e){if(J(e))return _t.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new _t(n)}}function La(t,e){return Xn(t,e)!=null}function Xn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function ih(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(i,s)=>{e.push(new X(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new X(i,s.value))}),e}function cn(t,e){if(J(e))return t;{const n=Xn(t,e);return n!=null?new _t(new ge(n)):new _t(t.writeTree_.subtree(e))}}function Fa(t){return t.writeTree_.isEmpty()}function Ni(t,e){return Pp(oe(),t.writeTree_,e)}function Pp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Pp(we(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(we(t,".priority"),i)),n}}/**
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
 */function fo(t,e){return Lp(e,t)}function GT(t,e,n,i,s){S(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=os(t.visibleWrites,e,n)),t.lastWriteId=i}function zT(t,e,n,i){S(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ma(t.visibleWrites,e,n),t.lastWriteId=i}function KT(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function qT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&YT(a,i.path)?s=!1:st(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return QT(t),!0;if(i.snap)t.visibleWrites=nh(t.visibleWrites,i.path);else{const a=i.children;Ue(a,l=>{t.visibleWrites=nh(t.visibleWrites,we(i.path,l))})}return!0}else return!1}function YT(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(we(t.path,n),e))return!0;return!1}function QT(t){t.visibleWrites=xp(t.allWrites,JT,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function JT(t){return t.visible}function xp(t,e,n){let i=_t.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=ze(n,o),i=os(i,a,r.snap)):st(o,n)&&(a=ze(o,n),i=os(i,oe(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=ze(n,o),i=Ma(i,a,r.children);else if(st(o,n))if(a=ze(o,n),J(a))i=Ma(i,oe(),r.children);else{const l=Ii(r.children,Y(a));if(l){const c=l.getChild(pe(a));i=os(i,oe(),c)}}}else throw xi("WriteRecord should have .snap or .children")}}return i}function Dp(t,e,n,i,s){if(!i&&!s){const r=Xn(t.visibleWrites,e);if(r!=null)return r;{const o=cn(t.visibleWrites,e);if(Fa(o))return n;if(n==null&&!La(o,oe()))return null;{const a=n||B.EMPTY_NODE;return Ni(o,a)}}}else{const r=cn(t.visibleWrites,e);if(!s&&Fa(r))return n;if(!s&&n==null&&!La(r,oe()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=xp(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Ni(a,l)}}}function XT(t,e,n){let i=B.EMPTY_NODE;const s=Xn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ce,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=cn(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=Ni(cn(r,new ue(o)),a);i=i.updateImmediateChild(o,l)}),ih(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=cn(t.visibleWrites,e);return ih(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ZT(t,e,n,i,s){S(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(La(t.visibleWrites,r))return null;{const o=cn(t.visibleWrites,r);return Fa(o)?s.getChild(n):Ni(o,s.getChild(n))}}function eS(t,e,n,i){const s=we(e,n),r=Xn(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=cn(t.visibleWrites,s);return Ni(o,i.getNode().getImmediateChild(n))}else return null}function tS(t,e){return Xn(t.visibleWrites,e)}function nS(t,e,n,i,s,r,o){let a;const l=cn(t.visibleWrites,e),c=Xn(l,oe());if(c!=null)a=c;else if(n!=null)a=Ni(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&h.length<s;)u(p,i)!==0&&h.push(p),p=d.getNext();return h}else return[]}function iS(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Or(t,e,n,i){return Dp(t.writeTree,t.treePath,e,n,i)}function Wl(t,e){return XT(t.writeTree,t.treePath,e)}function sh(t,e,n,i){return ZT(t.writeTree,t.treePath,e,n,i)}function Pr(t,e){return tS(t.writeTree,we(t.treePath,e))}function sS(t,e,n,i,s,r){return nS(t.writeTree,t.treePath,e,n,i,s,r)}function Vl(t,e,n){return eS(t.writeTree,t.treePath,e,n)}function Mp(t,e){return Lp(we(t.treePath,e),t.writeTree)}function Lp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Cs(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ws(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Ri(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Cs(i,e.snapshotNode,s.oldSnap));else throw xi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oS{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Fp=new oS;class jl{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vl(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kn(this.viewCache_),r=sS(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function aS(t){return{filter:t}}function lS(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cS(t,e,n,i,s){const r=new rS;let o,a;if(n.type===pt.OVERWRITE){const c=n;c.source.fromUser?o=$a(t,e,c.path,c.snap,i,s,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=xr(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===pt.MERGE){const c=n;c.source.fromUser?o=hS(t,e,c.path,c.children,i,s,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ua(t,e,c.path,c.children,i,s,a,r))}else if(n.type===pt.ACK_USER_WRITE){const c=n;c.revert?o=pS(t,e,c.path,i,s,r):o=dS(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===pt.LISTEN_COMPLETE)o=fS(t,e,n.path,i,r);else throw xi("Unknown operation type: "+n.type);const l=r.getChanges();return uS(e,o,l),{viewCache:o,changes:l}}function uS(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=kr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(kp(kr(e)))}}function $p(t,e,n,i,s,r){const o=e.eventCache;if(Pr(i,n)!=null)return e;{let a,l;if(J(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Kn(e),h=c instanceof B?c:B.EMPTY_NODE,u=Wl(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Or(i,Kn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Y(n);if(c===".priority"){S(gn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=sh(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=pe(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=sh(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Vl(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return rs(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function xr(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),p,null)}else{const p=Y(n);if(!l.isCompleteForPath(n)&&gn(n)>1)return e;const g=pe(n),A=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?c=h.updatePriority(l.getNode(),A):c=h.updateChild(l.getNode(),p,A,g,Fp,null)}const u=Op(e,c,l.isFullyInitialized()||J(n),h.filtersNodes()),d=new jl(s,u,r);return $p(t,u,n,s,d,a)}function $a(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new jl(s,e,r);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=rs(e,c,!0,t.filter.filtersNodes());else{const u=Y(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=rs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=pe(n),p=a.getNode().getImmediateChild(u);let g;if(J(d))g=i;else{const E=h.getCompleteChild(u);E!=null?xl(d)===".priority"&&E.getChild(Cp(d)).isEmpty()?g=E:g=E.updateChild(d,i):g=B.EMPTY_NODE}if(p.equals(g))l=e;else{const E=t.filter.updateChild(a.getNode(),u,g,d,h,o);l=rs(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function rh(t,e){return t.eventCache.isCompleteForChild(e)}function hS(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=we(n,l);rh(e,Y(h))&&(a=$a(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=we(n,l);rh(e,Y(h))||(a=$a(t,a,h,c,s,r,o))}),a}function oh(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ua(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=i:c=new ge(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=oh(t,p,d);l=xr(t,l,new ue(u),g,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),E=oh(t,g,d);l=xr(t,l,new ue(u),E,s,r,o,a)}}),l}function dS(t,e,n,i,s,r,o){if(Pr(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xr(t,e,n,l.getNode().getChild(n),s,r,a,o);if(J(n)){let c=new ge(null);return l.getNode().forEachChild(vi,(h,u)=>{c=c.set(new ue(h),u)}),Ua(t,e,n,c,s,r,a,o)}else return e}else{let c=new ge(null);return i.foreach((h,u)=>{const d=we(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Ua(t,e,n,c,s,r,a,o)}}function fS(t,e,n,i,s){const r=e.serverCache,o=Op(e,r.getNode(),r.isFullyInitialized()||J(n),r.isFiltered());return $p(t,o,n,i,Fp,s)}function pS(t,e,n,i,s,r){let o;if(Pr(i,n)!=null)return e;{const a=new jl(i,e,s),l=e.eventCache.getNode();let c;if(J(n)||Y(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Or(i,Kn(e));else{const u=e.serverCache.getNode();S(u instanceof B,"serverChildren would be complete if leaf node"),h=Wl(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=Y(n);let u=Vl(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,pe(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,B.EMPTY_NODE,pe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Or(i,Kn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Pr(i,oe())!=null,rs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class _S{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Fl(i.getIndex()),r=xT(i);this.processor_=aS(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),h=new mn(l,o.isFullyInitialized(),s.filtersNodes()),u=new mn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ho(u,h),this.eventGenerator_=new BT(this.query_)}get query(){return this.query_}}function gS(t){return t.viewCache_.serverCache.getNode()}function mS(t){return kr(t.viewCache_)}function yS(t,e){const n=Kn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function ah(t){return t.eventRegistrations_.length===0}function vS(t,e){t.eventRegistrations_.push(e)}function lh(t,e,n){const i=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function ch(t,e,n,i){e.type===pt.MERGE&&e.source.queryId!==null&&(S(Kn(t.viewCache_),"We should always have a full cache before handling merges"),S(kr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=cS(t.processor_,s,e,n,i);return lS(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Up(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ES(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(r,o)=>{i.push(Ri(r,o))}),n.isFullyInitialized()&&i.push(kp(n.getNode())),Up(t,i,n.getNode(),e)}function Up(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return HT(t.eventGenerator_,e,n,s)}/**
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
 */let Dr;class Bp{constructor(){this.views=new Map}}function bS(t){S(!Dr,"__referenceConstructor has already been defined"),Dr=t}function wS(){return S(Dr,"Reference.ts has not been loaded"),Dr}function CS(t){return t.views.size===0}function Gl(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return S(r!=null,"SyncTree gave us an op for an invalid query."),ch(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(ch(o,e,n,i));return r}}function Hp(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Or(n,s?i:null),l=!1;a?l=!0:i instanceof B?(a=Wl(n,i),l=!1):(a=B.EMPTY_NODE,l=!1);const c=ho(new mn(a,l,!1),new mn(i,s,!1));return new _S(e,c)}return o}function IS(t,e,n,i,s,r){const o=Hp(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vS(o,n),ES(o,n)}function TS(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=yn(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(lh(c,n,i)),ah(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(lh(l,n,i)),ah(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!yn(t)&&r.push(new(wS())(e._repo,e._path)),{removed:r,events:o}}function Wp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function un(t,e){let n=null;for(const i of t.views.values())n=n||yS(i,e);return n}function Vp(t,e){if(e._queryParams.loadsAllData())return po(t);{const i=e._queryIdentifier;return t.views.get(i)}}function jp(t,e){return Vp(t,e)!=null}function yn(t){return po(t)!=null}function po(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Mr;function SS(t){S(!Mr,"__referenceConstructor has already been defined"),Mr=t}function RS(){return S(Mr,"Reference.ts has not been loaded"),Mr}let AS=1;class uh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=iS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gp(t,e,n,i,s){return GT(t.pendingWriteTree_,e,n,i,s),s?Li(t,new zn(Ul(),e,n)):[]}function NS(t,e,n,i){zT(t.pendingWriteTree_,e,n,i);const s=ge.fromObject(n);return Li(t,new Ai(Ul(),e,s))}function rn(t,e,n=!1){const i=KT(t.pendingWriteTree_,e);if(qT(t.pendingWriteTree_,e)){let r=new ge(null);return i.snap!=null?r=r.set(oe(),!0):Ue(i.children,o=>{r=r.set(new ue(o),!0)}),Li(t,new Nr(i.path,r,n))}else return[]}function Bs(t,e,n){return Li(t,new zn(Bl(),e,n))}function kS(t,e,n){const i=ge.fromObject(n);return Li(t,new Ai(Bl(),e,i))}function OS(t,e){return Li(t,new Ts(Bl(),e))}function PS(t,e,n){const i=Kl(t,n);if(i){const s=ql(i),r=s.path,o=s.queryId,a=ze(r,e),l=new Ts(Hl(o),a);return Yl(t,r,l)}else return[]}function Lr(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||jp(o,e))){const l=TS(o,e,n,i);CS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,p)=>yn(p));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=MS(d);for(let g=0;g<p.length;++g){const E=p[g],A=E.query,O=Yp(t,E);t.listenProvider_.startListening(as(A),Ss(t,A),O.hashFn,O.onComplete)}}}!u&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(as(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(_o(d));t.listenProvider_.stopListening(as(d),p)}))}LS(t,c)}return a}function zp(t,e,n,i){const s=Kl(t,i);if(s!=null){const r=ql(s),o=r.path,a=r.queryId,l=ze(o,e),c=new zn(Hl(a),l,n);return Yl(t,o,c)}else return[]}function xS(t,e,n,i){const s=Kl(t,i);if(s){const r=ql(s),o=r.path,a=r.queryId,l=ze(o,e),c=ge.fromObject(n),h=new Ai(Hl(a),l,c);return Yl(t,o,h)}else return[]}function Ba(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,p)=>{const g=ze(d,s);r=r||un(p,g),o=o||yn(p)});let a=t.syncPointTree_.get(s);a?(o=o||yn(a),r=r||un(a,oe())):(a=new Bp,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const E=un(g,oe());E&&(r=r.updateImmediateChild(p,E))}));const c=jp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=_o(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=FS();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const h=fo(t.pendingWriteTree_,s);let u=IS(a,e,n,h,r,l);if(!c&&!o&&!i){const d=Vp(a,e);u=u.concat($S(t,e,d))}return u}function zl(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=un(a,l);if(c)return c});return Dp(s,e,r,n,!0)}function DS(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=ze(c,n);i=i||un(h,u)});let s=t.syncPointTree_.get(n);s?i=i||un(s,oe()):(s=new Bp,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new mn(i,!0,!1):null,a=fo(t.pendingWriteTree_,e._path),l=Hp(s,e,a,r?o.getNode():B.EMPTY_NODE,r);return mS(l)}function Li(t,e){return Kp(e,t.syncPointTree_,null,fo(t.pendingWriteTree_,oe()))}function Kp(t,e,n,i){if(J(t.path))return qp(t,e,n,i);{const s=e.get(oe());n==null&&s!=null&&(n=un(s,oe()));let r=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Mp(i,o);r=r.concat(Kp(a,l,c,h))}return s&&(r=r.concat(Gl(s,t,i,n))),r}}function qp(t,e,n,i){const s=e.get(oe());n==null&&s!=null&&(n=un(s,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Mp(i,o),h=t.operationForChild(o);h&&(r=r.concat(qp(h,a,l,c)))}),s&&(r=r.concat(Gl(s,t,i,n))),r}function Yp(t,e){const n=e.query,i=Ss(t,n);return{hashFn:()=>(gS(e)||B.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?PS(t,n._path,i):OS(t,n._path);{const r=OI(s,n);return Lr(t,n,null,r)}}}}function Ss(t,e){const n=_o(e);return t.queryToTagMap.get(n)}function _o(t){return t._path.toString()+"$"+t._queryIdentifier}function Kl(t,e){return t.tagToQueryMap.get(e)}function ql(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function Yl(t,e,n){const i=t.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");const s=fo(t.pendingWriteTree_,e);return Gl(i,n,s,null)}function MS(t){return t.fold((e,n,i)=>{if(n&&yn(n))return[po(n)];{let s=[];return n&&(s=Wp(n)),Ue(i,(r,o)=>{s=s.concat(o)}),s}})}function as(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(RS())(t._repo,t._path):t}function LS(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=_o(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function FS(){return AS++}function $S(t,e,n){const i=e._path,s=Ss(t,e),r=Yp(t,n),o=t.listenProvider_.startListening(as(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)S(!yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!J(c)&&h&&yn(h))return[po(h).query];{let d=[];return h&&(d=d.concat(Wp(h).map(p=>p.query))),Ue(u,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(as(h),Ss(t,h))}}return o}/**
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
 */class Ql{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ql(n)}node(){return this.node_}}class Jl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Jl(this.syncTree_,n)}node(){return zl(this.syncTree_,this.path_)}}const US=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hh=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HS(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},HS=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&S(!1,"Unexpected increment value: "+i);const s=e.node();if(S(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Qp=function(t,e,n,i){return Xl(e,new Jl(n,t),i)},Jp=function(t,e,n){return Xl(t,new Ql(e),n)};function Xl(t,e,n){const i=t.getPriority().val(),s=hh(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=hh(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Me(a,Ie(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Me(s))),o.forEachChild(Ce,(a,l)=>{const c=Xl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Zl{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ec(t,e){let n=e instanceof ue?e:new ue(e),i=t,s=Y(n);for(;s!==null;){const r=Ii(i.node.children,s)||{children:{},childCount:0};i=new Zl(s,i,r),n=pe(n),s=Y(n)}return i}function Fi(t){return t.node.value}function Xp(t,e){t.node.value=e,Ha(t)}function Zp(t){return t.node.childCount>0}function WS(t){return Fi(t)===void 0&&!Zp(t)}function go(t,e){Ue(t.node.children,(n,i)=>{e(new Zl(n,t,i))})}function e_(t,e,n,i){n&&!i&&e(t),go(t,s=>{e_(s,e,!0,i)}),n&&i&&e(t)}function VS(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Hs(t){return new ue(t.parent===null?t.name:Hs(t.parent)+"/"+t.name)}function Ha(t){t.parent!==null&&jS(t.parent,t.name,t)}function jS(t,e,n){const i=WS(n),s=Rt(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ha(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ha(t))}/**
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
 */const GS=/[\[\].#$\/\u0000-\u001F\u007F]/,zS=/[\[\].#$\u0000-\u001F\u007F]/,Go=10*1024*1024,tc=function(t){return typeof t=="string"&&t.length!==0&&!GS.test(t)},t_=function(t){return typeof t=="string"&&t.length!==0&&!zS.test(t)},KS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),t_(t)},n_=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!co(t)||t&&typeof t=="object"&&Rt(t,".sv")},Wa=function(t,e,n,i){i&&e===void 0||mo(Ti(t,"value"),e,n)},mo=function(t,e,n){const i=n instanceof ue?new hT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Sn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Sn(i)+" with contents = "+e.toString());if(co(e))throw new Error(t+"contains "+e.toString()+" "+Sn(i));if(typeof e=="string"&&e.length>Go/3&&lo(e)>Go)throw new Error(t+"contains a string greater than "+Go+" utf8 bytes "+Sn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ue(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!tc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Sn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dT(i,o),mo(t,a,i),fT(i)}),s&&r)throw new Error(t+' contains ".value" child '+Sn(i)+" in addition to actual children.")}},qS=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=bs(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!tc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uT);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&st(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},i_=function(t,e,n,i){if(i&&e===void 0)return;const s=Ti(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ue(e,(o,a)=>{const l=new ue(o);if(mo(s,a,we(n,l)),xl(l)===".priority"&&!n_(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),qS(s,r)},YS=function(t,e,n){if(!(n&&e===void 0)){if(co(e))throw new Error(Ti(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!n_(e))throw new Error(Ti(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},s_=function(t,e,n,i){if(!(i&&n===void 0)&&!t_(n))throw new Error(Ti(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},QS=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),s_(t,e,n,i)},hi=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},JS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!KS(n))throw new Error(Ti(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class XS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yo(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Dl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function r_(t,e,n){yo(t,n),o_(t,i=>Dl(i,e))}function ot(t,e,n){yo(t,n),o_(t,i=>st(i,e)||st(e,i))}function o_(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(ZS(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ZS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Un&&Fe("event: "+n.toString()),Di(i)}}}/**
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
 */const e0="repo_interrupt",t0=25;class n0{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ar(),this.transactionQueueTree_=new Zl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i0(t,e,n){if(t.stats_=Ol(t.repoInfo_),t.forceRestClient_||MI())t.server_=new Rr(t.repoInfo_,(i,s,r,o)=>{dh(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(i,s,r,o)=>{dh(t,i,s,r,o)},i=>{fh(t,i)},i=>{r0(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=BI(t.repoInfo_,()=>new UT(t.stats_,t.server_)),t.infoData_=new DT,t.infoSyncTree_=new uh({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Bs(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nc(t,"connected",!1),t.serverSyncTree_=new uh({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ot(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function s0(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vo(t){return US({timestamp:s0(t)})}function dh(t,e,n,i,s){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Cr(n,c=>Ie(c));o=xS(t.serverSyncTree_,r,l,s)}else{const l=Ie(n);o=zp(t.serverSyncTree_,r,l,s)}else if(i){const l=Cr(n,c=>Ie(c));o=kS(t.serverSyncTree_,r,l)}else{const l=Ie(n);o=Bs(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ki(t,r)),ot(t.eventQueue_,a,o)}function fh(t,e){nc(t,"connected",e),e===!1&&c0(t)}function r0(t,e){Ue(e,(n,i)=>{nc(t,n,i)})}function nc(t,e,n){const i=new ue("/.info/"+e),s=Ie(n);t.infoData_.updateSnapshot(i,s);const r=Bs(t.infoSyncTree_,i,s);ot(t.eventQueue_,i,r)}function ic(t){return t.nextWriteId_++}function o0(t,e,n){const i=DS(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Ie(s).withIndex(e._queryParams.getIndex());Ba(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Bs(t.serverSyncTree_,e._path,r);else{const a=Ss(t.serverSyncTree_,e);o=zp(t.serverSyncTree_,e._path,r,a)}return ot(t.eventQueue_,e._path,o),Lr(t.serverSyncTree_,e,n,null,!0),r},s=>(Ws(t,"get for query "+xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function a0(t,e,n,i,s){Ws(t,"set",{path:e.toString(),value:n,priority:i});const r=vo(t),o=Ie(n,i),a=zl(t.serverSyncTree_,e),l=Jp(o,a,r),c=ic(t),h=Gp(t.serverSyncTree_,e,l,c,!0);yo(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||Ke("set at "+e+" failed: "+d);const E=rn(t.serverSyncTree_,c,!g);ot(t.eventQueue_,e,E),vn(t,s,d,p)});const u=rc(t,e);ki(t,u),ot(t.eventQueue_,u,[])}function l0(t,e,n,i){Ws(t,"update",{path:e.toString(),value:n});let s=!0;const r=vo(t),o={};if(Ue(n,(a,l)=>{s=!1,o[a]=Qp(we(e,a),Ie(l),t.serverSyncTree_,r)}),s)Fe("update() called with empty data.  Don't do anything."),vn(t,i,"ok",void 0);else{const a=ic(t),l=NS(t.serverSyncTree_,e,o,a);yo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const u=c==="ok";u||Ke("update at "+e+" failed: "+c);const d=rn(t.serverSyncTree_,a,!u),p=d.length>0?ki(t,e):e;ot(t.eventQueue_,p,d),vn(t,i,c,h)}),Ue(n,c=>{const h=rc(t,we(e,c));ki(t,h)}),ot(t.eventQueue_,e,[])}}function c0(t){Ws(t,"onDisconnectEvents");const e=vo(t),n=Ar();Da(t.onDisconnect_,oe(),(s,r)=>{const o=Qp(s,r,t.serverSyncTree_,e);Mi(n,s,o)});let i=[];Da(n,oe(),(s,r)=>{i=i.concat(Bs(t.serverSyncTree_,s,r));const o=rc(t,s);ki(t,o)}),t.onDisconnect_=Ar(),ot(t.eventQueue_,oe(),i)}function u0(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&xa(t.onDisconnect_,e),vn(t,n,i,s)})}function ph(t,e,n,i){const s=Ie(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Mi(t.onDisconnect_,e,s),vn(t,i,r,o)})}function h0(t,e,n,i,s){const r=Ie(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Mi(t.onDisconnect_,e,r),vn(t,s,o,a)})}function d0(t,e,n,i){if(Aa(n)){Fe("onDisconnect().update() called with empty data.  Don't do anything."),vn(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&Ue(n,(o,a)=>{const l=Ie(a);Mi(t.onDisconnect_,we(e,o),l)}),vn(t,i,s,r)})}function f0(t,e,n){let i;Y(e._path)===".info"?i=Ba(t.infoSyncTree_,e,n):i=Ba(t.serverSyncTree_,e,n),r_(t.eventQueue_,e._path,i)}function _h(t,e,n){let i;Y(e._path)===".info"?i=Lr(t.infoSyncTree_,e,n):i=Lr(t.serverSyncTree_,e,n),r_(t.eventQueue_,e._path,i)}function p0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(e0)}function Ws(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function vn(t,e,n,i){e&&Di(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function a_(t,e,n){return zl(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function sc(t,e=t.transactionQueueTree_){if(e||Eo(t,e),Fi(e)){const n=c_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&_0(t,Hs(e),n)}else Zp(e)&&go(e,n=>{sc(t,n)})}function _0(t,e,n){const i=n.map(c=>c.currentWriteId),s=a_(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];S(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ze(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ws(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(rn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Eo(t,ec(t.transactionQueueTree_,e)),sc(t,t.transactionQueueTree_),ot(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Di(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}ki(t,e)}},o)}function ki(t,e){const n=l_(t,e),i=Hs(n),s=c_(t,n);return g0(t,s,i),i}function g0(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let h=!1,u;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(rn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=t0)h=!0,u="maxretry",s=s.concat(rn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=a_(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){mo("transaction failed: Data returned ",p,l.path);let g=Ie(p);typeof p=="object"&&p!=null&&Rt(p,".priority")||(g=g.updatePriority(d.getPriority()));const A=l.currentWriteId,O=vo(t),P=Jp(g,d,O);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=P,l.currentWriteId=ic(t),o.splice(o.indexOf(A),1),s=s.concat(Gp(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),s=s.concat(rn(t.serverSyncTree_,A,!0))}else h=!0,u="nodata",s=s.concat(rn(t.serverSyncTree_,l.currentWriteId,!0))}ot(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Eo(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Di(i[a]);sc(t,t.transactionQueueTree_)}function l_(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Fi(i)===void 0;)i=ec(i,n),e=pe(e),n=Y(e);return i}function c_(t,e){const n=[];return u_(t,e,n),n.sort((i,s)=>i.order-s.order),n}function u_(t,e,n){const i=Fi(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);go(e,s=>{u_(t,s,n)})}function Eo(t,e){const n=Fi(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Xp(e,n.length>0?n:void 0)}go(e,i=>{Eo(t,i)})}function rc(t,e){const n=Hs(l_(t,e)),i=ec(t.transactionQueueTree_,e);return VS(i,s=>{zo(t,s)}),zo(t,i),e_(i,s=>{zo(t,s)}),n}function zo(t,e){const n=Fi(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xp(e,void 0):n.length=r+1,ot(t.eventQueue_,Hs(e),s);for(let o=0;o<i.length;o++)Di(i[o])}}/**
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
 */function m0(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function y0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const gh=function(t,e){const n=v0(t),i=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||SI();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pp(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ue(n.pathString)}},v0=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=m0(t.substring(h,u)));const d=y0(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class h_{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class d_{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class f_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class E0{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Dt;return u0(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){hi("OnDisconnect.remove",this._path);const e=new Dt;return ph(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){hi("OnDisconnect.set",this._path),Wa("OnDisconnect.set",e,this._path,!1);const n=new Dt;return ph(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){hi("OnDisconnect.setWithPriority",this._path),Wa("OnDisconnect.setWithPriority",e,this._path,!1),YS("OnDisconnect.setWithPriority",n,!1);const i=new Dt;return h0(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){hi("OnDisconnect.update",this._path),i_("OnDisconnect.update",e,this._path,!1);const n=new Dt;return d0(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class oc{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return J(this._path)?null:xl(this._path)}get ref(){return new At(this._repo,this._path)}get _queryIdentifier(){const e=eh(this._queryParams),n=Nl(e);return n==="{}"?"default":n}get _queryObject(){return eh(this._queryParams)}isEqual(e){if(e=Qn(e),!(e instanceof oc))return!1;const n=this._repo===e._repo,i=Dl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+cT(this._path)}}class At extends oc{constructor(e,n){super(e,n,new $l,!1)}get parent(){const e=Cp(this._path);return e===null?null:new At(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),i=Fr(this.ref,e);return new Oi(this._node.getChild(n),i,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Oi(s,Fr(this.ref,i),Ce)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function LR(t,e){return t=Qn(t),t._checkNotDeleted("ref"),e!==void 0?Fr(t._root,e):t._root}function Fr(t,e){return t=Qn(t),Y(t._path)===null?QS("child","path",e,!1):s_("child","path",e,!1),new At(t._repo,we(t._path,e))}function FR(t){return t=Qn(t),new E0(t._repo,t._path)}function $R(t){return hi("remove",t._path),b0(t,null)}function b0(t,e){t=Qn(t),hi("set",t._path),Wa("set",e,t._path,!1);const n=new Dt;return a0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function UR(t,e){i_("update",e,t._path,!1);const n=new Dt;return l0(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function BR(t){t=Qn(t);const e=new f_(()=>{}),n=new bo(e);return o0(t._repo,t,n).then(i=>new Oi(i,new At(t._repo,t._path),t._queryParams.getIndex()))}class bo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new h_("value",this,new Oi(e.snapshotNode,new At(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new d_(this,e,n):null}matches(e){return e instanceof bo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ac{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new d_(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const i=Fr(new At(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new h_(e.type,this,new Oi(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ac?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function w0(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,c=(h,u)=>{_h(t._repo,t,a),l(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new f_(n,r||void 0),a=e==="value"?new bo(o):new ac(e,o);return f0(t._repo,t,a),()=>_h(t._repo,t,a)}function HR(t,e,n,i){return w0(t,"value",e,n,i)}bS(At);SS(At);/**
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
 */const C0="FIREBASE_DATABASE_EMULATOR_HOST",Va={};let I0=!1;function T0(t,e,n,i){t.repoInfo_=new pp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function S0(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gh(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[C0]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=gh(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new yi(yi.OWNER):new FI(t.name,t.options,e);JS("Invalid Firebase Database URL",o),J(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=A0(a,t,h,new LI(t.name,n));return new N0(u,t)}function R0(t,e){const n=Va[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),p0(t),delete n[t.key]}function A0(t,e,n,i){let s=Va[e.name];s||(s={},Va[e.name]=s);let r=s[t.toURLString()];return r&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new n0(t,I0,n,i),s[t.toURLString()]=r,r}class N0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new At(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(R0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function k0(t=El(),e){const n=eo(t,"database").getImmediate({identifier:e}),i=lI("database");return i&&O0(n,...i),n}function O0(t,e,n,i={}){t=Qn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new yi(yi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:cI(i.mockUserToken,t.app.options.projectId);r=new yi(o)}T0(s,e,n,r)}/**
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
 */function P0(t){bI(Ps),Vn(new _I("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return S0(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),wt(Fu,$u,t),wt(Fu,$u,"esm2017")}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};P0();/**
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
 *//**
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
 */const x0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},D0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},M0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(n[h],n[u],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):D0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},L0=function(t){try{return M0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function F0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $0=()=>F0().__FIREBASE_DEFAULTS__,U0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},B0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&L0(t[1]);return e&&JSON.parse(e)},H0=()=>{try{return $0()||U0()||B0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W0=t=>{var e,n;return(n=(e=H0())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V0=t=>{const e=W0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]};/**
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
 */const j0="FirebaseError";class wo extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=j0,Object.setPrototypeOf(this,wo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G0.prototype.create)}}class G0{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?z0(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wo(s,a,i)}}function z0(t,e){return t.replace(K0,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const K0=/\{\$([^}]+)}/g;/**
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
 */function lc(t){return t&&t._delegate?t._delegate:t}class q0{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Y0="type.googleapis.com/google.protobuf.Int64Value",Q0="type.googleapis.com/google.protobuf.UInt64Value";function p_(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function ja(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>ja(e));if(typeof t=="function"||typeof t=="object")return p_(t,e=>ja(e));throw new Error("Data cannot be encoded in JSON: "+t)}function $r(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Y0:case Q0:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>$r(e)):typeof t=="function"||typeof t=="object"?p_(t,e=>$r(e)):t}/**
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
 */const cc="functions";/**
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
 */const mh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ei extends wo{constructor(e,n,i){super(`${cc}/${e}`,n||""),this.details=i}}function J0(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function X0(t,e){let n=J0(t),i=n,s;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!mh[o])return new Ei("internal","internal");n=mh[o],i=o}const a=r.message;typeof a=="string"&&(i=a),s=r.details,s!==void 0&&(s=$r(s))}}catch{}return n==="ok"?null:new Ei(n,i,s)}/**
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
 */class Z0{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
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
 */const Ga="us-central1";function eR(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new Ei("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class tR{constructor(e,n,i,s,r=Ga,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Z0(n,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=Ga}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function nR(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function iR(t,e,n){return i=>rR(t,e,i,n||{})}async function sR(t,e,n,i){n["Content-Type"]="application/json";let s;try{s=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function rR(t,e,n,i){const s=t._url(e);return oR(t,s,n,i)}async function oR(t,e,n,i){n=ja(n);const s={data:n},r={},o=await t.contextProvider.getContext();o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,l=eR(a),c=await Promise.race([sR(e,s,r,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new Ei("cancelled","Firebase Functions instance was deleted.");const h=X0(c.status,c.json);if(h)throw h;if(!c.json)throw new Ei("internal","Response is not valid JSON object.");let u=c.json.data;if(typeof u>"u"&&(u=c.json.result),typeof u>"u")throw new Ei("internal","Response is missing data field.");return{data:$r(u)}}const yh="@firebase/functions",vh="0.9.0";/**
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
 */const aR="auth-internal",lR="app-check-internal",cR="messaging-internal";function uR(t,e){const n=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(aR),a=i.getProvider(cR),l=i.getProvider(lR);return new tR(r,o,a,l,s,t)};Vn(new q0(cc,n,"PUBLIC").setMultipleInstances(!0)),wt(yh,vh,e),wt(yh,vh,"esm2017")}/**
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
 */function hR(t=El(),e=Ga){const i=eo(lc(t),cc).getImmediate({identifier:e}),s=V0("functions");return s&&dR(i,...s),i}function dR(t,e,n){nR(lc(t),e,n)}function WR(t,e,n){return iR(lc(t),e,n)}uR(fetch.bind(self));const fR={apiKey:"AIzaSyAXm-1aMaGvQHRHIh6RC09aB8ZD8CJgpuk",authDomain:"geohunt-dff18.firebaseapp.com",projectId:"geohunt-dff18",storageBucket:"geohunt-dff18.appspot.com",messagingSenderId:"969092699325",appId:"1:969092699325:web:ce0294c9e7ce302197d3d4",measurementId:"G-JQBVMQ6NBN",databaseURL:"https://geohunt-dff18-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"gs://geohunt-dff18.appspot.com"},uc=lf(fR);QC(uc);const VR=k0(uc);hR(uc);let pR=iE({history:nv(),routes:lE});const __=Cy(Oy);__.use(pR);__.mount("#app");export{TR as A,ER as B,SR as C,Wm as D,ug as E,Ze as F,nr as G,Ji as H,dd as I,fd as J,gR as K,Ut as L,it as M,Hh as N,$e as O,Hm as P,bR as Q,_R as R,eo as S,El as T,Vn as U,wt as V,Ps as W,Ay as _,QC as a,BR as b,Fr as c,k0 as d,$R as e,am as f,hR as g,WR as h,CR as i,Ad as j,Ge as k,IR as l,VR as m,HR as n,hl as o,FR as p,ud as q,LR as r,DR as s,vR as t,UR as u,mR as v,rd as w,yR as x,dl as y,wR as z};
