import{_ as c,x as a,q as d,y as l,c as m,o as u,a as h,z as p}from"./index-wGdHV_SK.js";const f={props:{src:String,title:{type:String,default:"Sessionize"}},setup(r){const t=a(null),s=a("200px");function e(o){var i;t.value&&o.source===t.value.contentWindow&&((i=o.data)==null?void 0:i.type)==="sz-resize"&&(s.value=o.data.height+"px")}d(()=>window.addEventListener("message",e)),l(()=>window.removeEventListener("message",e));const n=m(()=>`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>body { margin: 0; }</style>
</head>
<body>
  <script type="text/javascript" src="${r.src}"><\/script>
  <script>
    var observer = new MutationObserver(function() {
      parent.postMessage({ type: 'sz-resize', height: document.documentElement.scrollHeight }, '*');
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    window.addEventListener('load', function() {
      parent.postMessage({ type: 'sz-resize', height: document.documentElement.scrollHeight }, '*');
    });
  <\/script>
</body>
</html>`);return{iframe:t,height:s,srcdoc:n}}},g=["srcdoc","title"];function v(r,t,s,e,n,o){return u(),h("iframe",{ref:"iframe",srcdoc:e.srcdoc,frameborder:"0",style:p({width:"100%",height:e.height,border:"none",overflow:"hidden"}),title:s.title,scrolling:"no"},null,12,g)}const b=c(f,[["render",v]]);export{b as default};
