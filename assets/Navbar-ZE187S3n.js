import{_ as i,A as c,r as d,o as p,a as m,d as v,w as g,f as e,n as s,k as a,v as l,i as b}from"./index-cOaj9qcE.js";import{_ as h}from"./invert-mxtQWPKm.js";const _="/assets/logo-GGCvXdVh.png",f={mounted(){window.addEventListener("scroll",this.onScroll)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)},data(){return{cfs:c.cfs,mobile:!1,scrolled:!1}},methods:{onScroll(){this.scrolled=window.scrollY>100},scrollTo(r){var t=this.$root.$el.getElementsByClassName("home-sponsors")[0];t&&t.scrollIntoViewIfNeeded()}}},u={height:"55",src:h,alt:"Boise Code Camp Logo",class:"drop-shadow"},w={height:"55",src:_,alt:"Boise Code Camp Logo"},C=e("span",{class:"navbar-toggler-icon"},null,-1),x=[C],k=e("div",{class:"collapse navbar-collapse text-dark",id:"navbarSupportedContent"},[e("ul",{class:"navbar-nav ms-auto d-flex align-items-end","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent"},[e("li",{class:"nav-item"},[e("a",{href:"https://www.eventbrite.com/e/boise-code-camp-2024-tickets-885003688857",target:"_blank",rel:"noopener",title:"call for speakers",class:"nav-link text-uppercase"}," Register")])])],-1);function S(r,t,B,N,o,V){const n=d("router-link");return p(),m("nav",{class:s(["navbar fixed-top navbar-expand-lg transition p-3",o.scrolled?"navbar-light bg-light z-depth":"navbar-dark"])},[v(n,{class:"d-flex align-items-center",to:"/"},{default:g(()=>[a(e("img",u,null,512),[[l,!o.scrolled]]),a(e("img",w,null,512),[[l,o.scrolled]]),e("h4",{class:s(["m-0 ms-2 text-primary",o.scrolled?"":"text-shadow"])},[e("span",{class:s(o.scrolled?"text-dark":"text-white")},"Boise",2),b("CodeCamp ")],2)]),_:1}),e("button",{onClick:t[0]||(t[0]=y=>o.mobile=!o.mobile),class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},x),k],2)}const T=i(f,[["render",S]]);export{T as default};