/* RadioVille — shared scripts */
(function(){
  const header=document.getElementById('header');
  if(header && !header.classList.contains('solid')){
    window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>60));
  }
  const mb=document.getElementById('menuBtn'),mn=document.getElementById('mobileNav'),cb=document.getElementById('closeBtn');
  if(mb&&mn){
    mb.addEventListener('click',()=>mn.classList.add('open'));
    if(cb)cb.addEventListener('click',()=>mn.classList.remove('open'));
    mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mn.classList.remove('open')));
  }
  const io=new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='none';e.target.style.transition='.7s';io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll('.biz-card,.rnd-item,.news-card,.stat,.val-card,.tl-item,.biz-detail').forEach((el,i)=>{
    el.style.opacity=0;el.style.transform='translateY(32px)';el.style.transitionDelay=(i%3*.07)+'s';io.observe(el);
  });
})();
