import{_ as i,A as a,o as _,a as f,f as e,t as d,p as m,j as p}from"./index-2cIl48ms.js";const h={computed:{conference(){return a.event},startTime(){return a.event.dTime},gcal(){const t=a.event,o=a.event.dTime;let l=o.getFullYear(),s=o.getMonth()+1;s<10&&(s="0"+s.toString());let c=o.getDate()+1;c<10&&(c="0"+c.toString());const n=`${l}${s}${c}T143000Z%2F${l}${s}${c}T240000Z`;return`https://www.google.com/calendar/render?action=TEMPLATE&text=${t.name}+${l}&details=${t.snippet}.&location=${t.address}&dates=${n}`},directions(){return`https://www.google.com/maps/place/${a.event.address}`}}},r=t=>(m("data-v-57285036"),t=t(),p(),t),u={class:"d-flex flex-wrap justify-content-center my-3 align-items-baseline gap-4"},g=["href"],x={class:"card-deck mb-3"},v={class:"card p-3 d-flex flex-column align-items-center justify-content-center bg-dark text-light"},$=r(()=>e("i",{class:"mdi mdi-calendar fs-2 mb-3"},null,-1)),b=r(()=>e("h3",null,"When",-1)),w={class:"mb-0"},y=r(()=>e("p",null,"8:30 AM - 6:00 PM MST",-1)),S=["href"],T={class:"card p-3 d-flex flex-column align-items-center justify-content-center bg-primary text-white"},k=r(()=>e("i",{class:"mdi mdi-map-marker fs-2 mb-3"},null,-1)),j=r(()=>e("h3",null,"Where",-1)),M={class:"mb-0"};function A(t,o,l,s,c,n){return _(),f("div",u,[e("a",{class:"d-flex text-light flex-column align-items-center justify-content-center",href:n.gcal,target:"_blank",rel:"noopener noreferrer"},[e("div",x,[e("div",v,[$,b,e("p",w,"Saturday, "+d(n.conference.date),1),y])])],8,g),e("a",{class:"d-flex text-white flex-column align-items-center justify-content-center",href:n.directions,target:"_blank",rel:"noopener noreferrer"},[e("div",T,[k,j,e("p",M,d(n.conference.venue),1),e("p",null,d(n.conference.address),1)])],8,S)])}const B=i(h,[["render",A],["__scopeId","data-v-57285036"]]);export{B as default};