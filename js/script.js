(function(){
var b=document.getElementById('burger'),m=document.getElementById('menu'),t=document.getElementById('top');
function close(){m.classList.remove('open');b.setAttribute('aria-expanded','false')}
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',String(o))});
m.addEventListener('click',function(e){if(e.target.tagName==='A')close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
var links=[].slice.call(m.querySelectorAll('a[href^="#"]:not(.btn)'));
var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
function spy(){var y=window.scrollY+120,cur=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});links.forEach(function(a,i){a.classList.toggle('active',i===cur)});t.classList.toggle('show',window.scrollY>600)}
window.addEventListener('scroll',spy,{passive:true});spy();
var rv=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});rv.forEach(function(r){io.observe(r)})}else{rv.forEach(function(r){r.classList.add('in')})}
document.getElementById('yr').textContent=new Date().getFullYear();
t.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
})();
