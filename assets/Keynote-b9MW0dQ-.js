import{_ as n,A as o,r as c,o as d,a as r,f as e,i as a,t as s,d as m,e as _}from"./index-cOaj9qcE.js";const i={computed:{keynote(){return o.keynote}}},k={key:0,class:"keynote p-lg-4 mt-4"},u={class:"jumbotron p-4 z-depth mb-0 bg-white"},p={class:"mb-3 d-flex flex-wrap align-items-center justify-content-between"},h=e("small",{class:"border text-secondary p-1 rounded"},"KEYNOTE",-1),y={class:"text-muted d-md-block d-flex flex-column"},f=e("i",{class:"mdi mdi-map-marker"},null,-1),x={class:"ms-3"},b=e("i",{class:"mdi mdi-clock-o"},null,-1),v={class:"text-primary"},g=e("hr",{class:"my-4"},null,-1),w={class:"d-flex"},N=["src","alt"],V={class:"pl-3 text-primary ms-2 border-left d-flex flex-column"},B=e("hr",{class:"mb-5 mt-5"},null,-1);function E(j,A,C,K,M,t){const l=c("Markdown");return t.keynote.speaker?(d(),r("div",k,[e("div",u,[e("div",p,[h,e("div",y,[e("small",null,[f,a(" "+s(t.keynote.location),1)]),e("small",x,[b,a(" "+s(t.keynote.time),1)])])]),e("h2",v,s(t.keynote.title),1),m(l,{value:t.keynote.abstract},null,8,["value"]),g,e("div",w,[e("img",{height:"80",class:"rounded",src:t.keynote.speaker.img,alt:t.keynote.speaker.name},null,8,N),e("div",V,[e("span",null,s(t.keynote.speaker.name),1),e("span",null,s(t.keynote.speaker.company),1),e("span",null,s(t.keynote.speaker.title),1)])])]),B])):_("",!0)}const T=n(i,[["render",E]]);export{T as default};