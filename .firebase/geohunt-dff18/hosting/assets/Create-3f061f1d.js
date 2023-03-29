import{_ as f,h as d,g as m,s as B,a as g,b,c as h,r as i,d as c,e as w,f as x,o as P,i as L,j as t,k,w as j,F as E,l as I}from"./index-05011697.js";import{u as y}from"./create-c8810f1b.js";import{s as p}from"./global-867567d1.js";import{i as n}from"./icons-8e0d5636.js";import{s as v}from"./settings-dade97d7.js";const C={setup(){document.getElementById("htmlTitle").innerText="GeoHunt - Create Lobby"},data(){return{wrongpassword_boolean:!1,maxProgressBar:100,currentProgressBar:0}},methods:{create_lobby(e,s){const o=document.getElementById("progressbar");this.currentProgressBar+=30,o.style.width=this.currentProgressBar/this.maxProgressBar*100+"%";const l=d(m(),"createLobby"),r=d(m(),"updateLobbySettings");l({lobbyname:e,password:btoa(s)}).then(a=>{console.log(a.data),this.currentProgressBar+=33,o.style.width=this.currentProgressBar/this.maxProgressBar*100+"%"}),r({lobbyname:e,password:btoa(s),setting:"hunter_selection",value:v.hunterSelection}).then(a=>{console.log(a.data),this.currentProgressBar+=33,o.style.width=this.currentProgressBar/this.maxProgressBar*100+"%"}),r({lobbyname:e,password:btoa(s),setting:"nameTags",value:v.nameTags}).then(a=>{this.currentProgressBar+=33,o.style.width=this.currentProgressBar/this.maxProgressBar*100+"%"})},login(){let e=document.getElementById("lobbyname"),s=document.getElementById("password"),o=document.getElementById("displayname");if(e.value==""||s.value==""||o.value==""){alert("Some fields are empty");return}const l=d(m(),"writeUserToRTDB");B(g()).then(()=>{console.log("Signed in succesfully"),document.getElementById("loginbutton").value=="join"&&b(h(i(c()),e.value+"/settings")).then(async r=>{btoa(s.value)!=r.val().password?alert("Wrong Password"):l({displayname:o.value,lobbyname:e.value,icon:n[Object.keys(n).filter(a=>a!==Object.keys(n)[0])[Math.floor(Math.random()*(Object.keys(n).length-1))]]}).then(a=>{console.log(a.data),y(g(),e.value),p(e.value),this.$router.push("/lobby")})}),document.getElementById("loginbutton").value=="create"&&(this.create_lobby(e.value,s.value),l({displayname:o.value,lobbyname:e.value,icon:n[Object.keys(n).filter(r=>r!==Object.keys(n)[0])[Math.floor(Math.random()*(Object.keys(n).length-1))]]}).then(r=>{console.log(r.data),y(g(),e.value),p(e.value),this.$router.push("/lobby")}))})},passwordListener(){let e=document.getElementById("lobbyname").value,s=document.getElementById("loginbutton");b(h(i(c()),e)).then(o=>{o.exists()?b(h(i(c()),e+"/users")).then(async l=>{await!l.exists()?(w(i(c())),s.value="create"):s.value="join"}):s.value="create"})}}},O=t("head",null,[t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"})],-1),T=t("div",{class:"header"},[t("h1",null,"GeoHunt")],-1),S={id:"preLobbyDiv",class:"container"},D={class:"wrapper"},F=t("div",{class:"title"},[t("span",null,"GeoHunt Login")],-1),M={action:"#",autocomplete:"off"},N=I('<div class="row"><i class="fas fa-user"></i><input id="displayname" type="text" placeholder="Username" required></div><div class="row"><i class="fas fa-users"></i><input id="lobbyname" type="text" placeholder="Lobby Name" required></div>',2),U={class:"row"},q=t("i",{class:"fas fa-lock"},null,-1),G={class:"row-button"},H=t("div",{class:"progress-container"},[t("div",{class:"progress-bar",id:"progressbar"})],-1);function V(e,s,o,l,r,a){const _=x("center");return P(),L(E,null,[O,t("header",null,[k(_,null,{default:j(()=>[T]),_:1})]),t("div",S,[t("div",D,[F,t("form",M,[N,t("div",U,[q,t("input",{onFocus:s[0]||(s[0]=(...u)=>a.passwordListener&&a.passwordListener(...u)),id:"password",type:"text",placeholder:"Lobby Password",required:""},null,32)]),t("div",G,[t("input",{onClick:s[1]||(s[1]=(...u)=>a.login&&a.login(...u)),type:"button",id:"loginbutton",class:"login-button",value:"Login"})])]),H])])],64)}const J=f(C,[["render",V],["__file","/home/dave/Documents/geohunt-vue/src/pages/Create.vue"]]);export{J as default};