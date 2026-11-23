(function(){
  if(!location.hash) return;
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  var id=decodeURIComponent(location.hash.slice(1)), user=false, n=0, t0=Date.now();
  function stop(){ user=true; }
  addEventListener('wheel',stop,true); addEventListener('touchstart',stop,true);
  addEventListener('keydown',function(e){ if(/^(Arrow|Page|Home|End| )/.test(e.key||'')) stop(); },true);
  function go(){
    if(user||Date.now()-t0>15000) return;
    var el=document.getElementById(id); if(!el) return;
    var hd=document.querySelector('.md-header'), off=hd?hd.offsetHeight+8:64;
    var y=el.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop)-off;
    window.scrollTo(0,Math.max(0,y));
  }
  document.addEventListener('DOMContentLoaded',go);
  addEventListener('load',go);
  addEventListener('resize',function(){ go(); setTimeout(go,100); });
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(go);
  var t=setInterval(function(){ go(); if(++n>=25||user) clearInterval(t); },200);
})();
