import{_ as w,m as x,c as p,A as n,r as u,o as t,a,f as e,F as r,b as m,d as _,w as S,e as v,i as k,t as h,n as C}from"./index-Gg1RYP4f.js";const N={setup(){function i(){try{document.getElementById("speaker-modal").addEventListener("hidden.bs.modal",c=>{n.speaker=null})}catch{setTimeout(i,1500)}}return x(()=>{i()}),{speakers:p(()=>n.speakers),speaker:p(()=>n.speaker),sessions:p(()=>{var l;return(l=n.sessions[0])==null?void 0:l.sessions.filter(c=>{var s;return(s=c.speakers)==null?void 0:s.find(f=>{var d;return f.id==((d=n.speaker)==null?void 0:d.id)})})}),cfs:n.cfs}}},T={key:0},M=e("hr",null,null,-1),E={class:"schedule row m-auto p-md-3 mt-5"},I=e("div",{class:"col-12 mb-5"},[e("h2",null,"Speakers"),e("p",{class:"m-0"},[e("a",{class:"border-top pt-2 small",href:"/schedule",target:"_blank",rel:"noopener",title:"Schedule"},"Schedule")])],-1),A={class:"col-12 speaker-deck"},B={class:"card-deck justify-content-center"},L={class:"p-lg-4 m-0"},V={key:0},F={class:"d-flex"},O=["src","alt"],R={class:"ps-3 mt-2 ms-2 border-start"},j={class:"d-flex flex-column"},H={class:"m-0 fs-3"},U={class:"d-flex gap-4 mt-1 fs-5"},W=["href","title"],q=e("hr",{class:"my-4"},null,-1),z=e("div",{class:"mb-3 d-flex flex-wrap align-items-center justify-content-between"},[e("small",{class:"border text-secondary p-1 rounded"},"SESSIONS"),e("div",{class:"text-muted d-md-block d-flex flex-column"},[e("small",null,[e("i",{class:"mdi mdi-map-marker"}),k(" Room ")]),e("small",{class:"ms-3"},[e("i",{class:"mdi mdi-clock-o"}),k(" Time ")])])],-1),D={class:"sessions"},G=e("hr",null,null,-1),P={class:"d-none"},J={class:"schedule row m-auto p-md-3 mt-5"},K={class:"col-12"},Q=e("h2",null,"Want to be a Speaker?",-1),X=e("p",null," Are you passionate about sharing your knowledge and expertise with others? Consider becoming a speaker at our event! As a speaker, you'll have the opportunity to showcase your skills and connect with fellow developers. ",-1),Y=e("p",null," However, please note that submitting a session does not guarantee a speaking spot. Our selection process is competitive, and we carefully curate our speaker lineup to ensure a diverse and high-quality program. ",-1),Z=e("p",null," If you're interested in becoming a speaker, we encourage you to submit a session proposal through our Call for Speakers (CFS) form. This is your chance to pitch your topic and provide details about your presentation. Our team will review all submissions and select speakers based on various criteria, including relevance, expertise, and overall program balance. ",-1),$=e("p",null," We appreciate your interest in speaking at our event and look forward to reviewing your session proposal. Good luck! ",-1),ee={class:"text-center"},se=["href"],oe=e("i",{class:"mdi mdi-human-male-board-poll ms-2"},null,-1),te=e("hr",null,null,-1);function ae(i,l,c,s,f,d){const g=u("speaker"),y=u("session"),b=u("Modal");return t(),a(r,null,[s.speakers.length?(t(),a("section",T,[M,e("div",E,[I,e("div",A,[e("div",B,[(t(!0),a(r,null,m(s.speakers,o=>(t(),a("div",{class:"card mb-4 p-0 col-sm-6 col-md-4 col-lg-2",key:o.id},[_(g,{speaker:o},null,8,["speaker"])]))),128))])]),_(b,{class:"w-100",id:"speaker-modal"},{default:S(()=>[e("div",L,[s.speaker?(t(),a("div",V,[e("div",F,[e("img",{class:"rounded img-fluid w-25 m-2 align-self-center",src:s.speaker.profilePicture||`https://ui-avatars.com/api/?name=${encodeURIComponent(s.speaker.fullName)}`,onError:l[0]||(l[0]=o=>o.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(s.speaker.fullName)}`),alt:s.speaker.fullName},null,40,O),e("div",R,[e("div",j,[e("p",H,h(s.speaker.fullName),1),e("small",null,h(s.speaker.tagLine),1)]),e("p",U,[(t(!0),a(r,null,m(s.speaker.links,o=>(t(),a("a",{key:o.linkType,href:o.url,target:"_blank",title:o.linkType},[e("i",{class:C(["mdi mdi-earth","mdi-"+o.linkType.toLowerCase()])},null,2)],8,W))),128))])])]),e("div",null,[e("small",null,h(s.speaker.bio),1)]),q,z,e("div",D,[(t(!0),a(r,null,m(s.sessions,o=>(t(),a("div",{class:"session",key:o.id},[_(y,{session:o},null,8,["session"])]))),128))])])):v("",!0)])]),_:1})]),G])):v("",!0),e("section",P,[e("div",J,[e("div",K,[Q,X,Y,Z,$,e("p",ee,[e("a",{class:"border-bottom py-2 mt-3 fs-4",href:s.cfs,target:"_blank",rel:"noopener",title:"Submit a session"},[k(" Submit a session "),oe],8,se)])])]),te])],64)}const ne=w(N,[["render",ae]]);export{ne as default};