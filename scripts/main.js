// Small enhancements: smooth scroll for internal links
document.addEventListener('DOMContentLoaded',function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('open');
    });
  }

  // reveal on scroll
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el)});
});
