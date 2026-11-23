(function(){
  if(!location.hash) return;
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  var id=decodeURIComponent(location.hash.slice(1)), user=false, n=0;
  ['wheel','touchstart','keydown','mousedown'].forEach(function(e){addEventListener(e,function(){user=true;},{passive:true,once:true});});
  function go(){ if(user) return; var el=document.getElementById(id); if(el) el.scrollIntoView({block:'start'}); }
  document.addEventListener('DOMContentLoaded',go);
  addEventListener('load',go);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(go);
  var t=setInterval(function(){ go(); if(++n>=15||user) clearInterval(t); },200);
})();
