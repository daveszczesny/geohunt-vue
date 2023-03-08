import{q as w,t as ne,v as se,x as le,o as C,y as b,k as O,z as J,A as X,B as Ne,C as Re,F as R,D as Pe,E as m,G as Z,H as x,I as ae,J as P,K as E,L as y,M as K,N as _,O as Ee,_ as Ze,f as F,i as j,w as Q,b as G,c as D,a as ee,r as z,d as B,u as Ae,j as A,P as $e,Q as te}from"./index-bfaceced.js";import{g as ve}from"./global-867567d1.js";import{s as fe}from"./settings-dade97d7.js";let L=Symbol("map"),T=Symbol("api"),Le=Symbol("marker"),Te=Symbol("markerCluster"),V=Symbol("CustomMarker"),qe=Symbol("mapTilesLoaded"),I="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var He=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var o=e.length;if(o!=t.length)return!1;for(r=o;r--!==0;)if(!i(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var n=Object.keys(e);if(o=n.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[r]))return!1;for(r=o;r--!==0;)if(o=n[r],!i(e[o],t[o]))return!1;return!0}return e!==e&&t!==t};class M{constructor({apiKey:e,channel:t,client:r,id:o="__googleMapsScriptId",libraries:n=[],language:u,region:s,version:p,mapIds:a,nonce:l,retries:d=3,url:c="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=p,this.apiKey=e,this.channel=t,this.client=r,this.id=o||"__googleMapsScriptId",this.libraries=n,this.language=u,this.region=s,this.mapIds=a,this.nonce=l,this.retries=d,this.url=c,M.instance){if(!He(this.options,M.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(M.instance.options)}`);return M.instance}M.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function Fe(i){return class extends i.OverlayView{constructor(e){super();let{element:t,...r}=e;this.element=t,this.opts=r,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof i.LatLng?this.opts.position:new i.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||.01<Number(e.style.opacity))}onAdd(){if(this.element){var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var e=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(e){this.element.style.position="absolute";let r=this.element.offsetHeight;var t=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":t=e.x-t/2,e=e.y;break;case"BOTTOM_CENTER":t=e.x-t/2,e=e.y-r;break;case"LEFT_CENTER":t=e.x,e=e.y-r/2;break;case"RIGHT_CENTER":t=e.x-t,e=e.y-r/2;break;case"TOP_LEFT":t=e.x,e=e.y;break;case"TOP_RIGHT":t=e.x-t,e=e.y;break;case"BOTTOM_LEFT":t=e.x,e=e.y-r;break;case"BOTTOM_RIGHT":t=e.x-t,e=e.y-r;break;default:t=e.x-t/2,e=e.y-r/2}this.element.style.left=t+"px",this.element.style.top=e+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(e){this.opts=e,this.draw()}}}let ye,ke="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var ue=w({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:ke,setup(i,{emit:e}){let t=m(),r=m(!1),o=m(),n=m(),u=m(!1);Z(L,o),Z(T,n),Z(qe,u);let s=()=>{const l={...i};Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]});var d=c=>{var h;return c?{position:(h=n.value)===null||h===void 0?void 0:h.ControlPosition[c]}:{}};return d={scaleControlOptions:i.scaleControlStyle?{style:i.scaleControlStyle}:{},panControlOptions:d(i.panControlPosition),zoomControlOptions:d(i.zoomControlPosition),rotateControlOptions:d(i.rotateControlPosition),streetViewControlOptions:d(i.streetViewControlPosition),fullscreenControlOptions:d(i.fullscreenControlPosition),disableDefaultUI:i.disableDefaultUi},{...l,...d}},p=x([n,o],([l,d])=>{l&&d&&(l.event.addListenerOnce(d,"tilesloaded",()=>{u.value=!0}),setTimeout(p,0))},{immediate:!0}),a=l=>{n.value=_(l.maps),o.value=_(new l.maps.Map(t.value,s())),l=Fe(n.value),n.value[V]=l,ke.forEach(d=>{var c;(c=o.value)===null||c===void 0||c.addListener(d,h=>e(d,h))}),r.value=!0,l=Object.keys(i).filter(d=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(d)).map(d=>E(i,d)),x([()=>i.center,()=>i.zoom,...l],([d,c],[h,g])=>{var v,f,k;const{center:ge,zoom:Y,...Be}=s();(v=o.value)===null||v===void 0||v.setOptions(Be),c!==void 0&&c!==g&&((f=o.value)===null||f===void 0||f.setZoom(c)),c=!h||d.lng!==h.lng||d.lat!==h.lat,d&&c&&((k=o.value)===null||k===void 0||k.panTo(d))})};return ae(()=>{if(i.apiPromise&&i.apiPromise instanceof Promise)i.apiPromise.then(a);else{try{const{apiKey:l,region:d,version:c,language:h,libraries:g}=i;ye=new M({apiKey:l,region:d,version:c,language:h,libraries:g})}catch(l){console.error(l)}ye.load().then(a)}}),P(()=>{var l;u.value=!1,o.value&&((l=n.value)===null||l===void 0||l.event.clearInstanceListeners(o.value))}),{mapRef:t,ready:r,map:o,api:n,mapTilesLoaded:u}}});function de(i,e){if(e===void 0&&(e={}),e=e.insertAt,i&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}de(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let Ge=ne();se("data-v-177d06e3");let De={ref:"mapRef",class:"mapdiv"};le();let Ue=Ge(i=>(C(),b("div",null,[O("div",De,null,512),J(i.$slots,"default",{ready:i.ready,map:i.map,api:i.api,mapTilesLoaded:i.mapTilesLoaded},void 0,!0)])));ue.render=Ue;ue.__scopeId="data-v-177d06e3";var H=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var o=e.length;if(o!=t.length)return!1;for(r=o;r--!==0;)if(!i(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var n=Object.keys(e);if(o=n.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[r]))return!1;for(r=o;r--!==0;)if(o=n[r],!i(e[o],t[o]))return!1;return!0}return e!==e&&t!==t};let q=(i,e,t,r)=>{const o=m(),n=y(L,m()),u=y(T,m()),s=y(Te,m()),p=K(()=>!!(s.value&&u.value&&(o.value instanceof u.value.Marker||o.value instanceof u.value[V])));return x([n,t],(a,[l,d])=>{var c,h,g;a=!H(t.value,d)||n.value!==l,n.value&&u.value&&a&&(o.value?(o.value.setOptions(t.value),p.value&&((c=s.value)===null||c===void 0||c.removeMarker(o.value),(h=s.value)===null||h===void 0||h.addMarker(o.value))):(o.value=i==="Marker"?_(new u.value[i](t.value)):i===V?_(new u.value[i](t.value)):_(new u.value[i]({...t.value,map:n.value})),p.value?(g=s.value)===null||g===void 0||g.addMarker(o.value):o.value.setMap(n.value),e.forEach(v=>{var f;(f=o.value)===null||f===void 0||f.addListener(v,k=>r(v,k))})))},{immediate:!0}),P(()=>{var a,l;o.value&&((a=u.value)===null||a===void 0||a.event.clearInstanceListeners(o.value),p.value?(l=s.value)===null||l===void 0||l.removeMarker(o.value):o.value.setMap(null))}),o},Ce="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var Ke=w({name:"Marker",props:{options:{type:Object,required:!0}},emits:Ce,setup(i,{emit:e,expose:t,slots:r}){return i=E(i,"options"),e=q("Marker",Ce,i,e),Z(Le,e),t({marker:e}),()=>{var o;return(o=r.default)===null||o===void 0?void 0:o.call(r)}}});w({name:"Polyline",props:{options:{type:Object,required:!0}},emits:I,setup(i,{emit:e}){return i=E(i,"options"),{polyline:q("Polyline",I,i,e)}},render:()=>null});w({name:"Polygon",props:{options:{type:Object,required:!0}},emits:I,setup(i,{emit:e}){return i=E(i,"options"),{polygon:q("Polygon",I,i,e)}},render:()=>null});let we=I.concat(["bounds_changed"]);w({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:we,setup(i,{emit:e}){return i=E(i,"options"),{rectangle:q("Rectangle",we,i,e)}},render:()=>null});let xe=I.concat(["center_changed","radius_changed"]);var Ve=w({name:"Circle",props:{options:{type:Object,required:!0}},emits:xe,setup(i,{emit:e}){return i=E(i,"options"),{circle:q("Circle",xe,i,e)}},render:()=>null}),We=w({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(i,{emit:e}){let t=m(null),r=y(L,m()),o=y(T,m()),n=y(qe,m(!1)),u=m(!1),s=x([n,o,t],([l,d,c])=>{d&&l&&c&&(p(i.position),u.value=!0,e("content:loaded"),setTimeout(s,0))},{immediate:!0}),p=l=>{r.value&&o.value&&t.value&&r.value.controls[o.value.ControlPosition[l]].push(t.value)},a=l=>{if(r.value&&o.value){let d=null;l=o.value.ControlPosition[l],r.value.controls[l].forEach((c,h)=>{c===t.value&&(d=h)}),d!==null&&r.value.controls[l].removeAt(d)}};return P(()=>a(i.position)),x(()=>i.position,(l,d)=>{a(d),p(l)}),x(()=>i.index,l=>{l&&t.value&&(t.value.index=i.index)}),{controlRef:t,showContent:u}}});let Je={ref:"controlRef"};We.render=function(i){return C(),b(R,null,[X(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),Ne(O("div",Je,[J(i.$slots,"default")],512),[[Re,i.showContent]])],2112)};let _e="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var pe=w({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:_e,setup(i,{slots:e,emit:t}){let r=m(),o=m(),n=y(L,m()),u=y(T,m()),s=y(Le,m()),p,a=K(()=>{var l;return(l=e.default)===null||l===void 0?void 0:l.call(e).some(d=>d.type!==Ee)});return ae(()=>{x([n,()=>i.options],([,l],[d,c])=>{d=!H(l,c)||n.value!==d,n.value&&u.value&&d&&(r.value?(r.value.setOptions({...l,content:a.value?o.value:l.content}),s.value||r.value.open({map:n.value})):(r.value=_(new u.value.InfoWindow({...l,content:a.value?o.value:l.content})),s.value?p=s.value.addListener("click",()=>{r.value&&r.value.open({map:n.value,anchor:s.value})}):r.value.open({map:n.value}),_e.forEach(h=>{var g;(g=r.value)===null||g===void 0||g.addListener(h,v=>t(h,v))})))},{immediate:!0})}),P(()=>{var l;p&&p.remove(),r.value&&((l=u.value)===null||l===void 0||l.event.clearInstanceListeners(r.value),r.value.close())}),{infoWindow:r,infoWindowRef:o,hasSlotContent:a}}});de(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let Xe=ne();se("data-v-5b373d6e");let Ye={key:0,class:"info-window-wrapper"};le();let Qe=Xe(i=>i.hasSlotContent?(C(),b("div",Ye,[O("div",Pe({ref:"infoWindowRef"},i.$attrs),[J(i.$slots,"default",{},void 0,!0)],16)])):X("v-if",!0));pe.render=Qe;pe.__scopeId="data-v-5b373d6e";function oe(i,e,t,r,o,n){if(!(o-r<=t)){var u=r+o>>1;je(i,e,u,r,o,n%2),oe(i,e,t,r,u-1,n+1),oe(i,e,t,u+1,o,n+1)}}function je(i,e,t,r,o,n){for(;o>r;){if(600<o-r){var u=o-r+1,s=t-r+1,p=Math.log(u),a=.5*Math.exp(2*p/3);p=.5*Math.sqrt(p*a*(u-a)/u)*(0>s-u/2?-1:1),je(i,e,t,Math.max(r,Math.floor(t-s*a/u+p)),Math.min(o,Math.floor(t+(u-s)*a/u+p)),n)}for(u=e[2*t+n],s=r,a=o,N(i,e,r,t),e[2*o+n]>u&&N(i,e,r,o);s<a;){for(N(i,e,s,a),s++,a--;e[2*s+n]<u;)s++;for(;e[2*a+n]>u;)a--}e[2*r+n]===u?N(i,e,r,a):(a++,N(i,e,a,o)),a<=t&&(r=a+1),t<=a&&(o=a-1)}}function N(i,e,t,r){re(i,t,r),re(e,2*t,2*r),re(e,2*t+1,2*r+1)}function re(i,e,t){let r=i[e];i[e]=i[t],i[t]=r}let et=i=>i[0],tt=i=>i[1];class Me{constructor(e,t=et,r=tt,o=64,n=Float64Array){this.nodeSize=o,this.points=e;let u=this.ids=new(65536>e.length?Uint16Array:Uint32Array)(e.length);n=this.coords=new n(2*e.length);for(let s=0;s<e.length;s++)u[s]=s,n[2*s]=t(e[s]),n[2*s+1]=r(e[s]);oe(u,n,o,0,u.length-1,0)}range(e,t,r,o){{var n=this.ids,u=this.coords,s=this.nodeSize;let a=[0,n.length-1,0],l=[],d,c;for(;a.length;){var p=a.pop();let h=a.pop(),g=a.pop();if(h-g<=s){for(p=g;p<=h;p++)d=u[2*p],c=u[2*p+1],d>=e&&d<=r&&c>=t&&c<=o&&l.push(n[p]);continue}let v=Math.floor((g+h)/2);d=u[2*v],c=u[2*v+1],d>=e&&d<=r&&c>=t&&c<=o&&l.push(n[v]);let f=(p+1)%2;(p===0?e<=d:t<=c)&&(a.push(g),a.push(v-1),a.push(f)),(p===0?r>=d:o>=c)&&(a.push(v+1),a.push(h),a.push(f))}e=l}return e}within(e,t,r){{var o=this.ids,n=this.coords,u=this.nodeSize;let d=[0,o.length-1,0],c=[],h=r*r;for(;d.length;){var s=d.pop();let g=d.pop();var p=d.pop();if(g-p<=u){for(s=p;s<=g;s++){p=n[2*s]-e;var a=n[2*s+1]-t;p=p*p+a*a,p<=h&&c.push(o[s])}continue}a=Math.floor((p+g)/2);let v=n[2*a],f=n[2*a+1];{var l=v-e;let k=f-t;l=l*l+k*k}l<=h&&c.push(o[a]),l=(s+1)%2,(s===0?e-r<=v:t-r<=f)&&(d.push(p),d.push(a-1),d.push(l)),(s===0?e+r>=v:t+r>=f)&&(d.push(a+1),d.push(g),d.push(l))}e=c}return e}}let rt={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:i=>i},W=Math.fround||(i=>e=>(i[0]=+e,i[0]))(new Float32Array(1));class ot{constructor(e){this.options=$(Object.create(rt),e),this.trees=Array(this.options.maxZoom+1)}load(e){let{log:t,minZoom:r,maxZoom:o,nodeSize:n}=this.options;t&&console.time("total time");var u=`prepare ${e.length} points`;t&&console.time(u),this.points=e;let s=[];for(let p=0;p<e.length;p++)e[p].geometry&&s.push(nt(e[p],p));for(this.trees[o+1]=new Me(s,Oe,Se,n,Float32Array),t&&console.timeEnd(u),e=o;e>=r;e--)u=+Date.now(),s=this._cluster(s,e),this.trees[e]=new Me(s,Oe,Se,n,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,s.length,+Date.now()-u);return t&&console.timeEnd("total time"),this}getClusters(e,t){let r=((e[0]+180)%360+360)%360-180;var o=Math.max(-90,Math.min(90,e[1])),n=e[2]===180?180:((e[2]+180)%360+360)%360-180;let u=Math.max(-90,Math.min(90,e[3]));if(360<=e[2]-e[0])r=-180,n=180;else if(r>n){var s=this.getClusters([r,o,180,u],t);return o=this.getClusters([-180,o,n,u],t),s.concat(o)}t=this.trees[this._limitZoom(t)],n=t.range(r/360+.5,U(u),n/360+.5,U(o)),o=[];for(s of n)n=t.points[s],o.push(n.numPoints?be(n):this.points[n.index]);return o}getChildren(e){var t=this._getOriginId(e),r=this._getOriginZoom(e);let o=this.trees[r];if(!o||(t=o.points[t],!t))throw Error("No cluster with the specified id.");t=o.within(t.x,t.y,this.options.radius/(this.options.extent*Math.pow(2,r-1))),r=[];for(let n of t)t=o.points[n],t.parentId===e&&r.push(t.numPoints?be(t):this.points[t.index]);if(r.length===0)throw Error("No cluster with the specified id.");return r}getLeaves(e,t,r){let o=[];return this._appendLeaves(o,e,t||10,r||0,0),o}getTile(e,t,r){let o=this.trees[this._limitZoom(e)];e=Math.pow(2,e);let{extent:n,radius:u}=this.options,s=u/n,p=(r-s)/e,a=(r+1+s)/e,l={features:[]};return this._addTileFeatures(o.range((t-s)/e,p,(t+1+s)/e,a),o.points,t,r,e,l),t===0&&this._addTileFeatures(o.range(1-s/e,p,1,a),o.points,e,r,e,l),t===e-1&&this._addTileFeatures(o.range(0,p,s/e,a),o.points,-1,r,e,l),l.features.length?l:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom&&(e=this.getChildren(e),t++,e.length===1);)e=e[0].properties.cluster_id;return t}_appendLeaves(e,t,r,o,n){t=this.getChildren(t);for(let u of t)if((t=u.properties)&&t.cluster?n=n+t.point_count<=o?n+t.point_count:this._appendLeaves(e,t.cluster_id,r,o,n):n<o?n++:e.push(u),e.length===r)break;return n}_addTileFeatures(e,t,r,o,n,u){for(let a of e){e=t[a];let l=e.numPoints;var s=void 0;let d;var p=void 0;l?(s=ze(e),d=e.x,p=e.y):(p=this.points[e.index],s=p.properties,d=p.geometry.coordinates[0]/360+.5,p=U(p.geometry.coordinates[1])),s={type:1,geometry:[[Math.round(this.options.extent*(d*n-r)),Math.round(this.options.extent*(p*n-o))]],tags:s};let c;l?c=e.id:this.options.generateId?c=e.index:this.points[e.index].id&&(c=this.points[e.index].id),c!==void 0&&(s.id=c),u.features.push(s)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){let r=[],{radius:o,extent:n,reduce:u,minPoints:s}=this.options,p=o/(n*Math.pow(2,t));for(let h=0;h<e.length;h++){var a=e[h];if(a.zoom<=t)continue;a.zoom=t;let g=this.trees[t+1];var l=g.within(a.x,a.y,p),d=a.numPoints||1;let v=d;for(let f of l){var c=g.points[f];c.zoom>t&&(v+=c.numPoints||1)}if(v>d&&v>=s){c=a.x*d;let f=a.y*d;d=u&&1<d?this._map(a,!0):null;let k=(h<<5)+(t+1)+this.points.length;for(let ge of l){if(l=g.points[ge],l.zoom<=t)continue;l.zoom=t;let Y=l.numPoints||1;c+=l.x*Y,f+=l.y*Y,l.parentId=k,u&&(d||(d=this._map(a,!0)),u(d,this._map(l)))}a.parentId=k,r.push(it(c/v,f/v,k,v,d))}else if(r.push(a),1<v)for(let f of l)a=g.points[f],a.zoom<=t||(a.zoom=t,r.push(a))}return r}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?$({},e.properties):e.properties;e=this.points[e.index].properties;let r=this.options.map(e);return t&&r===e?$({},r):r}}function it(i,e,t,r,o){return{x:W(i),y:W(e),zoom:1/0,id:t,parentId:-1,numPoints:r,properties:o}}function nt(i,e){let[t,r]=i.geometry.coordinates;return{x:W(t/360+.5),y:W(U(r)),zoom:1/0,index:e,parentId:-1}}function be(i){var e=i.id,t=ze(i);return{type:"Feature",id:e,properties:t,geometry:{type:"Point",coordinates:[360*(i.x-.5),360*Math.atan(Math.exp((180-360*i.y)*Math.PI/180))/Math.PI-90]}}}function ze(i){let e=i.numPoints,t=1e4<=e?`${Math.round(e/1e3)}k`:1e3<=e?`${Math.round(e/100)/10}k`:e;return $($({},i.properties),{cluster:!0,cluster_id:i.id,point_count:e,point_count_abbreviated:t})}function U(i){return i=Math.sin(i*Math.PI/180),i=.5-.25*Math.log((1+i)/(1-i))/Math.PI,0>i?0:1<i?1:i}function $(i,e){for(let t in e)i[t]=e[t];return i}function Oe(i){return i.x}function Se(i){return i.y}class ie{constructor({markers:e,position:t}){this.markers=e,t&&(this._position=t instanceof google.maps.LatLng?t:new google.maps.LatLng(t))}get bounds(){if(this.markers.length!==0||this._position)return this.markers.reduce((e,t)=>e.extend(t.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>e.getVisible()).length}push(e){this.markers.push(e)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class st{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return lt(e)}}let lt=i=>i.map(e=>new ie({position:e.getPosition(),markers:[e]}));class at extends st{constructor(e){var{maxZoom:t,radius:r=60}=e,o=["maxZoom","radius"],n={},u;for(u in e)Object.prototype.hasOwnProperty.call(e,u)&&0>o.indexOf(u)&&(n[u]=e[u]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var s=0;for(u=Object.getOwnPropertySymbols(e);s<u.length;s++)0>o.indexOf(u[s])&&Object.prototype.propertyIsEnumerable.call(e,u[s])&&(n[u[s]]=e[u[s]])}super({maxZoom:t}),this.superCluster=new ot(Object.assign({maxZoom:this.maxZoom,radius:r},n)),this.state={zoom:null}}calculate(e){let t=!1;if(!H(e.markers,this.markers)){t=!0,this.markers=[...e.markers];var r=this.markers.map(o=>({type:"Feature",geometry:{type:"Point",coordinates:[o.getPosition().lng(),o.getPosition().lat()]},properties:{marker:o}}));this.superCluster.load(r)}return r={zoom:e.map.getZoom()},t||this.state.zoom>this.maxZoom&&r.zoom>this.maxZoom||(t=t||!H(this.state,r)),this.state=r,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[e,t]},properties:r}){return r.cluster?new ie({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(o=>o.properties.marker),position:new google.maps.LatLng({lat:t,lng:e})}):(e=r.marker,new ie({markers:[e],position:e.getPosition()}))}}class ut{constructor(e,t){this.markers={sum:e.length},e=t.map(o=>o.count);let r=e.reduce((o,n)=>o+n,0);this.clusters={count:t.length,markers:{mean:r/t.length,sum:r,min:Math.min(...e),max:Math.max(...e)}}}}class dt{render({count:e,position:t},r){return r=window.btoa(`
  <svg fill="${e>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`),new google.maps.Marker({position:t,icon:{url:`data:image/svg+xml;base64,${r}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(e),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${e} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+e})}}class ce{constructor(){var e=ce,t=google.maps.OverlayView;for(let r in t.prototype)e.prototype[r]=t.prototype[r]}}var S,he=S||(S={});he.CLUSTERING_BEGIN="clusteringbegin";he.CLUSTERING_END="clusteringend";he.CLUSTER_CLICK="click";let pt=(i,e,t)=>{t.fitBounds(e.bounds)};class ct extends ce{constructor({map:e,markers:t=[],algorithm:r=new at({}),renderer:o=new dt,onClusterClick:n=pt}){super(),this.markers=[...t],this.clusters=[],this.algorithm=r,this.renderer=o,this.onClusterClick=n,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(r=>{this.addMarker(r,!0)}),t||this.render()}removeMarker(e,t){let r=this.markers.indexOf(e);return r===-1?!1:(e.setMap(null),this.markers.splice(r,1),t||this.render(),!0)}removeMarkers(e,t){let r=!1;return e.forEach(o=>{r=this.removeMarker(o,!0)||r}),r&&!t&&this.render(),r}clearMarkers(e){this.markers.length=0,e||this.render()}render(){let e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,S.CLUSTERING_BEGIN,this);let{clusters:t,changed:r}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});(r||r==null)&&(this.reset(),this.clusters=t,this.renderClusters()),google.maps.event.trigger(this,S.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>e.setMap(null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){let e=new ut(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,e),this.onClusterClick&&r.marker.addListener("click",o=>{google.maps.event.trigger(this,S.CLUSTER_CLICK,r),this.onClusterClick(o,r,t)})),r.marker.setMap(t)})}}let Ie=Object.values(S);w({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:Ie,setup(i,{emit:e,expose:t,slots:r}){let o=m(),n=y(L,m()),u=y(T,m());return Z(Te,o),x(n,()=>{n.value&&(o.value=_(new ct({map:n.value,...i.options})),Ie.forEach(s=>{var p;(p=o.value)===null||p===void 0||p.addListener(s,a=>e(s,a))}))},{immediate:!0}),P(()=>{var s;o.value&&((s=u.value)===null||s===void 0||s.event.clearInstanceListeners(o.value),o.value.clearMarkers(),o.value.setMap(null))}),t({markerCluster:o}),()=>{var s;return(s=r.default)===null||s===void 0?void 0:s.call(r)}}});var me=w({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(i,{slots:e,emit:t}){let r=m(),o=m(),n=K(()=>{var s;return(s=e.default)===null||s===void 0?void 0:s.call(e).some(p=>p.type!==Ee)}),u=K(()=>({...i.options,element:r.value}));return ae(()=>{o=q(V,[],u,t)}),{customMarkerRef:r,customMarker:o,hasSlotContent:n}}});de(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let ht=ne();se("data-v-b9d5ec8a");let mt={key:0,class:"custom-marker-wrapper"};le();let gt=ht(i=>i.hasSlotContent?(C(),b("div",mt,[O("div",Pe({ref:"customMarkerRef",style:{cursor:i.$attrs.onClick?"pointer":void 0}},i.$attrs),[J(i.$slots,"default",{},void 0,!0)],16)])):X("v-if",!0));me.render=gt;me.__scopeId="data-v-b9d5ec8a";w({name:"HeatmapLayer",props:{options:{type:Object,default:()=>({})}},setup(i){let e=m(),t=y(L,m()),r=y(T,m());return x([t,()=>i.options],([,o],[n,u])=>{var s;if(n=!H(o,u)||t.value!==n,t.value&&r.value&&n){if(o=structuredClone(o),o.data&&!(o.data instanceof r.value.MVCArray)){let p=r.value.LatLng;o.data=(s=o.data)===null||s===void 0?void 0:s.map(a=>a instanceof p||"location"in a&&(a.location instanceof p||a.location===null)?a:"location"in a?{...a,location:new p(a.location)}:new p(a))}e.value?e.value.setOptions(o):e.value=_(new r.value.visualization.HeatmapLayer({...o,map:t.value}))}},{immediate:!0}),P(()=>{e.value&&e.value.setMap(null)}),{heatmapLayer:e}},render:()=>null});const vt=w({components:{GoogleMap:ue,Marker:Ke,Circle:Ve,CustomMarker:me,InfoWindow:pe},data(){return{lobby_name:ve(),proxyCircles:this.circles,proxyHunter:this.hunterProxy,proxyHunted:this.huntedProxy,infoWindow:fe.nameTags}},mounted:function(){window.setInterval(()=>{window.scrollTo(500,0),this.getLocation()},fe.intervalTimer)},setup(){const i={lat:53.2740621,lng:-9.0534727},e="bc3210211695b110",t=[],r=[],o=[];return G(D(z(B()),ve()+"/users/"+ee().currentUser.uid+"/")).then(n=>{n.val().team=="hunter"?(document.getElementById("banner").innerText="a hunter",document.getElementById("roleArea").style="background-color: rgb(200,0,0)",document.getElementById("htmlTitle").innerText="GeoHunt - gone hunting"):document.getElementById("htmlTitle").innerText="GeoHunt - gone hiding"}),{center:i,mapID:e,circles:t,hunterProxy:r,huntedProxy:o}},methods:{drawCircle(i){this.proxyCircles.push({strokeColor:"#FF0000",strokOpacity:.7,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,center:i,radius:40})},drawHunter(i,e,t){this.proxyHunter.push({position:i,icon:e,name:t})},drawHunted(i,e,t){this.proxyHunted.push({position:i,icon:e,name:t})},getLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(i=>{const e={lat:i.coords.latitude,lng:i.coords.longitude};Ae(z(B(),this.lobby_name+"/users/"+ee().currentUser.uid),{location:e}),G(D(z(B()),this.lobby_name+"/users/"+ee().currentUser.uid+"/")).then(t=>{this.proxyCircles=[],this.proxyHunter=[],this.proxyHunted=[],t.val().team=="hunter"?G(D(z(B()),this.lobby_name+"/users/")).then(r=>{r.forEach(o=>{o.val().team=="hunter"?this.drawHunter(o.val().location,o.val().icon,o.val().display_name):this.drawCircle(o.val().location)})}):t.val().team=="hunted"&&G(D(z(B()),this.lobby_name+"/users/")).then(r=>{r.forEach(o=>{o.val().team!="hunter"&&this.drawHunted(o.val().location,o.val().icon,o.val().display_name)})})})})}}}),ft=A("div",{id:"roleArea"},[$e("You are "),A("span",{id:"banner"},"being hunted")],-1),yt=["src"],kt=["src"];function Ct(i,e,t,r,o,n){const u=F("Circle"),s=F("InfoWindow"),p=F("CustomMarker"),a=F("GoogleMap");return C(),j(R,null,[ft,O(a,{"api-key":"AIzaSyB0vMYrB2rlb-aDao6aMHbRqQg3oIlQby4",style:{width:"100%",height:"800px"},"map-id":i.mapID,center:i.center,zoom:15,streetViewControl:"false",mapTypeControl:!1,scaleControl:"false",zoomControl:"false",keyboardShortcuts:"false",scrollwheel:"true",navigationControl:!1,fullscreenControl:!1,draggable:"true",disableDefaultUI:"true",disableDoubleClickZoom:"false",gestureHandling:"greedy"},{default:Q(()=>[(C(!0),j(R,null,te(i.proxyCircles,l=>(C(),b(u,{options:l},null,8,["options"]))),256)),(C(!0),j(R,null,te(i.proxyHunter,l=>(C(),j("div",null,[O(p,{options:{position:l.position}},{default:Q(()=>[this.infoWindow?(C(),b(s,{key:0,options:{position:{lat:l.position.lat,lng:l.position.lng},content:l.name,maxWidth:150}},null,8,["options"])):X("v-if",!0),A("div",null,[A("img",{src:l.icon},null,8,yt)])]),_:2},1032,["options"])]))),256)),(C(!0),j(R,null,te(i.proxyHunted,l=>(C(),b(p,{options:{position:l.position}},{default:Q(()=>[O(s,{options:{position:l.position,content:l.name}},null,8,["options"]),A("img",{src:l.icon},null,8,kt)]),_:2},1032,["options"]))),256))]),_:1},8,["map-id","center"])],64)}const Mt=Ze(vt,[["render",Ct],["__file","/home/dave/gvue/geohunt-vue/src/pages/Game.vue"]]);export{Mt as default};
