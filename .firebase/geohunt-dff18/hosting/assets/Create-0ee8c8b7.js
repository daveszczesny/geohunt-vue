import{_ as y,h as u,g as p,s as h,a as m,b as _,c as b,r as i,d as r,e as g,f,o as w,i as B,j as e,k as L,w as x,F as I,l as C,p as E,m as k}from"./index-c6f62c18.js";import{u as S}from"./create-e81d4cdc.js";import{s as j}from"./global-867567d1.js";const D={methods:{create_lobby(a,t){u(p(),"createLobby")({lobbyname:a,password:t}).then(s=>{console.log(s.data)})},login(){let a=document.getElementById("lobbyname"),t=document.getElementById("password"),o=document.getElementById("displayname");const s=u(p(),"writeUserToRTDB");h(m()).then(()=>{console.log("Signed in succesfully"),document.getElementById("loginbutton").value=="create"&&this.create_lobby(a.value,t.value),s({displayname:o.value,lobbyname:a.value}).then(c=>{console.log(c.data),S(m(),a.value),j(a.value),this.$router.push("/lobby")})})},passwordListener(){let a=document.getElementById("lobbyname").value,t=document.getElementById("loginbutton");_(b(i(r()),a)).then(o=>{o.exists()?_(b(i(r()),a+"/users")).then(async s=>{await!s.exists()?(g(i(r())),t.value="create"):t.value="join"}):t.value="create"})}}},n=a=>(E("data-v-aada7010"),a=a(),k(),a),F=n(()=>e("head",null,[e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"})],-1)),N=n(()=>e("div",{class:"header"},[e("h1",null,"Geo-Hunt;")],-1)),U={id:"preLobbyDiv",class:"container"},q={class:"wrapper"},V=n(()=>e("div",{class:"title"},[e("span",null,"Geo-Hunt Login")],-1)),A={action:"#",autocomplete:"off"},G=C('<div class="row" data-v-aada7010><i class="fas fa-user" data-v-aada7010></i><input id="displayname" type="text" placeholder="Username" required data-v-aada7010></div><div class="row" data-v-aada7010><i class="fas fa-users" data-v-aada7010></i><input id="lobbyname" type="text" placeholder="Lobby Name" required data-v-aada7010></div>',2),H={class:"row"},T=n(()=>e("i",{class:"fas fa-lock"},null,-1)),P={class:"row button"},R=n(()=>e("p",{style:{display:"none"},id:"wrongpassword"},"Wrong password",-1));function W(a,t,o,s,c,l){const v=f("center");return w(),B(I,null,[F,e("header",null,[L(v,null,{default:x(()=>[N]),_:1})]),e("div",U,[e("div",q,[V,e("form",A,[G,e("div",H,[T,e("input",{onFocus:t[0]||(t[0]=(...d)=>l.passwordListener&&l.passwordListener(...d)),id:"password",type:"text",placeholder:"Lobby Password",required:""},null,32)]),e("div",P,[e("input",{onClick:t[1]||(t[1]=(...d)=>l.login&&l.login(...d)),type:"button",id:"loginbutton",value:"Login"})]),R])])])],64)}const K=y(D,[["render",W],["__scopeId","data-v-aada7010"],["__file","/home/dave/Documents/geohunt-vue/geohunt-vue/src/pages/Create.vue"]]);export{K as default};
