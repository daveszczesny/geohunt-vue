import{_,b as c,c as d,r as a,d as n,e as m,h as b,g as y,s as f,a as u,f as g,o as v,i as x,j as e,k as w,w as k,R as I,F as S,v as D,x as $}from"./index-68ad8b17.js";import{u as j}from"./create-2cae2513.js";import{s as B}from"./global-867567d1.js";import{i}from"./icons-8e0d5636.js";const C={data(){return{lobbyname:this.$route.params.lobbyID}},mounted(){c(d(a(n()),this.lobbyname)).then(s=>{s.exists()?c(d(a(n()),this.lobbyname+"/users")).then(async t=>{await!t.exists()&&(m(a(n()),this.lobbyname),alert("Lobby does not exist!"),this.$router.push("/"))}):(alert("Lobby does not exist!"),this.$router.push("/"))})},methods:{login(){let s=document.getElementById("dname");const t=b(y(),"writeUserToRTDB");f(u()).then(()=>{console.log("Signed in succesfully"),t({displayname:s.value,lobbyname:this.lobbyname,icon:i[Object.keys(i)[Math.floor(Math.random()*Object.keys(i).length)]]}).then(l=>{console.log(l.data),j(u(),this.lobbyname),B(this.lobbyname),this.$router.push("/lobby")})})}}},o=s=>(D("data-v-4c640819"),s=s(),$(),s),U=o(()=>e("head",null,[e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"})],-1)),L=o(()=>e("div",{class:"header"},[e("h1",null,"Geo-Hunt;")],-1)),F={id:"preLobbyDiv",class:"container"},O={class:"wrapper"},A=o(()=>e("div",{class:"title"},[e("span",null,"Quick Join")],-1)),E={class:"subtitle"},J={action:"#",autocomplete:"off"},M=o(()=>e("div",{class:"row"},[e("i",{class:"fas fa-user"}),e("input",{id:"dname",type:"text",placeholder:"Username",required:""})],-1)),N={class:"row button"};function R(s,t,l,T,V,r){const h=g("center");return v(),x(S,null,[U,e("header",null,[w(h,null,{default:k(()=>[L]),_:1})]),e("div",F,[e("div",O,[A,e("div",E,I(this.$route.params.lobbyID),1),e("form",J,[M,e("div",N,[e("input",{onClick:t[0]||(t[0]=(...p)=>r.login&&r.login(...p)),type:"button",id:"joinbutton",value:"Join"})])])])])],64)}const z=_(C,[["render",R],["__scopeId","data-v-4c640819"],["__file","C:/Users/Owner/Desktop/geov3/geohunt-vue/src/pages/Share.vue"]]);export{z as default};
