import{_,A as c,o as e,a as t,f as n,t as a,F as d,b as p,n as f,e as m}from"./index--TahL15R.js";const g={props:["hideGolds","hideSilvers","hideFriends"],computed:{year(){return c.currentYear},sponsors(){return c.sponsors},platinums(){return this.sponsors.filter(s=>s.level=="platinum")},golds(){return this.sponsors.filter(s=>s.level=="gold")},silvers(){return this.sponsors.filter(s=>s.level=="silver")},friends(){return this.sponsors.filter(s=>s.level=="friend")},sponsorMap(){return{platinums:this.platinums,golds:this.golds,silvers:this.silvers,friends:this.friends}}},methods:{hide(s){var i;try{return(i=this[s])!=null&&i.length?(s=s[0].toUpperCase()+s.slice(1),this[`hide${s}`]):!0}catch{return!1}}}},y={class:"sponsors container-fluid bg-white"},k={class:"text-center"},v={key:0,class:"col-12 text-center"},x={class:"uppercase"},S={class:"text-center sponsor"},b=["href","title"],B=["src","alt"],C={key:1};function F(s,i,u,$,w,l){return e(),t("div",y,[n("h3",k,a(this.year)+" Sponsors",1),(e(!0),t(d,null,p(l.sponsorMap,(h,o)=>(e(),t("div",{class:f(["row m-auto pl-3 pt-4 sponsor-level",o]),key:o},[l.hide(o)?m("",!0):(e(),t("div",v,[n("small",x,[n("b",null,a(o),1)]),n("div",S,[(e(!0),t(d,null,p(h,r=>(e(),t("a",{key:r.id,href:r.url,target:"_blank",rel:"noopener",title:r.name},[r.logo?(e(),t("img",{key:0,src:r.logo,class:"rounded",alt:r.name},null,8,B)):(e(),t("p",C,a(r.name),1))],8,b))),128))])]))],2))),128))])}const M=_(g,[["render",F]]);export{M as default};