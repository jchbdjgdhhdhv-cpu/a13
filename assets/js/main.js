(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function p2(n){return (n<10?'0':'')+n;}
var ck=$('clk');function tick(){var d=new Date();if(ck)ck.textContent=p2(d.getHours())+':'+p2(d.getMinutes())+':'+p2(d.getSeconds());}tick();setInterval(tick,1000);
function setH(pre,ms){var s=ms/1000;function r(id,deg,cx,cy){var e=$(pre+id);if(e)e.setAttribute('transform','rotate('+deg+(cx!=null?' '+cx+' '+cy:'')+')');}r('sec',(s%60)*6,200,200);r('m',(s/60%30)*12);r('s2',(s%60)*6);r('h',(s/3600%12)*30);}
var t0=performance.now();function heroLoop(t){var d=new Date();setH('h-',(d.getHours()*3600+d.getMinutes()*60+d.getSeconds())*1000+d.getMilliseconds());setH('c-',(t-t0)*4);requestAnimationFrame(heroLoop);}
if(!rm)requestAnimationFrame(heroLoop);else{setH('h-',37000);setH('c-',12000);}
var steps=[].slice.call(document.querySelectorAll('.ch-ar-s')),bar=$('ar-bar');if(steps.length&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){steps.forEach(function(s){s.classList.remove('on');});e.target.classList.add('on');if(bar)bar.style.width=((+e.target.getAttribute('data-step')+1)/steps.length*100)+'%';}});},{rootMargin:'-45% 0px -45% 0px'});steps.forEach(function(s){io.observe(s);});}else steps.forEach(function(s){s.classList.add('on');});
var A=$('sw-a'),B=$('sw-b');if(A){var run=false,acc=0,st=0,lapAt=0,n=0,raf;function el(){return acc+(run?performance.now()-st:0);}
 function fmt(ms){var s=ms/1000,m=Math.floor(s/60);return p2(m)+':'+p2(Math.floor(s%60))+'.'+Math.floor(ms%1000/100);}
 function draw(){var e=el();$('sw-t').textContent=fmt(e);setH('w-',e);if(run)raf=requestAnimationFrame(draw);}
 A.addEventListener('click',function(){if(!run){run=true;st=performance.now();A.textContent='Stop';B.textContent='Lap';B.disabled=false;draw();}else{acc=el();run=false;cancelAnimationFrame(raf);A.textContent='Start';B.textContent='Reset';draw();}});
 B.addEventListener('click',function(){if(run){var e=el();n++;var li=document.createElement('li');li.innerHTML='<span>Lap '+p2(n)+'</span><b>'+fmt(e-lapAt)+'</b><span>'+fmt(e)+'</span>';$('sw-l').insertBefore(li,$('sw-l').firstChild);lapAt=e;}else{acc=0;lapAt=0;n=0;$('sw-l').innerHTML='';B.textContent='Lap';B.disabled=true;draw();}});
 setH('w-',0);}
var ts=$('ty-s');if(ts){var us=[].slice.call(document.querySelectorAll('input[name=tu]'));function ty(){var s=+ts.value,u='km';us.forEach(function(x){if(x.checked)u=x.value;});$('ty-sv').textContent=s+' s';$('ty-o').textContent=Math.round(3600/s);$('ty-u').textContent=u==='km'?'km/h':'mph';$('ty-arc').style.strokeDasharray=s+' 60';$('ty-h').style.transform='rotate('+(s*6)+'deg)';}ts.addEventListener('input',ty);us.forEach(function(x){x.addEventListener('change',ty);});ty();}
})();
