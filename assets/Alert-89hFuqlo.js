import{_ as n,o as l,a as d,g as m,f as s,n as c,e as u}from"./index-Gg1RYP4f.js";const p={props:{type:{type:String,default:"alert-info"},name:{required:!0,type:String}},data(){return{dismissed:window.localStorage.getItem("alert:"+this.name)}},methods:{dismiss(){window.localStorage.setItem("alert:"+this.name,!0)}}},f=s("span",{"aria-hidden":"true"},"×",-1),_=[f];function g(a,e,r,h,o,t){return o.dismissed?u("",!0):(l(),d("div",{key:0,class:c(["alert text-center fade show",r.type]),role:"alert"},[m(a.$slots,"default"),s("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close",onClick:e[0]||(e[0]=(...i)=>t.dismiss&&t.dismiss(...i))},_)],2))}const w=n(p,[["render",g]]);export{w as default};