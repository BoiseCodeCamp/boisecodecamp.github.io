import{m as i}from"./marked.esm-KKTQJ6Gi.js";import{_ as d,c as u,r as m,o as t,a as o,F as p,b as f,d as _,n as g,e as l,f as r,t as h,A as b}from"./index-cOaj9qcE.js";const y={setup(){return{about:u(()=>b.about),parseMD(s){return i(s)}}}},v={class:"about"},w={class:"row m-auto p-md-3 mt-5"},x=["src"],k=["src","title"],M={class:"col-12 col-lg-4 offset-lg-1 d-flex flex-column justify-content-center"},j=["innerHTML"];function A(s,B,C,a,D,L){const n=m("Manifesto");return t(),o("div",v,[(t(!0),o(p,null,f(a.about,(e,c)=>(t(),o("div",w,[e.img||e.video?(t(),o("div",{key:0,class:g(["col-12 col-lg-6 d-flex justify-content-center",c%2==1?"offset-lg-1 order-1 order-lg-2":""])},[e.img?(t(),o("img",{key:0,src:e.img,alt:"about",class:"text-shadow mb-4 mb-lg-0",style:{width:"100%","object-fit":"contain"}},null,8,x)):e.video?(t(),o("iframe",{key:1,class:"w-100 rounded",width:"600",height:"337",src:e.video,title:e.title,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,k)):l("",!0)],2)):l("",!0),r("div",M,[r("h2",null,h(e.title),1),r("div",{innerHTML:a.parseMD(e.description)},null,8,j)])]))),256)),_(n)])}const F=d(y,[["render",A]]);export{F as default};