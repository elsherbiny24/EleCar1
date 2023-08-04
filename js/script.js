let icon = document.getElementById('menu');
let head = document.querySelector('.nav');
icon.onclick =() =>{
    head.classList.toggle('hed');
}
let link = document.getElementById('link');
let abou = document.getElementById('abou');
let pop = document.getElementById('pop');
let fea = document.getElementById('fea');
window.addEventListener(('scroll'),() =>{
    if(scrollY > 573){
        link.classList.remove('active');
        abou.classList.add('active')
    }
    else if(scrollY > 1205){
        link.classList.remove('active');
        abou.classList.remove('active');
        pop.classList.add('active');
    }
    else{
        abou.classList.remove('active');
        pop.classList.remove('active');
        link.classList.add('active')
    }
});
let swiperPopuler = new Swiper(".container-pop", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        spaceBetween: 28,
      },
    },
  });
  let featuredMixer = mixitup('.boxs-feautures', {
    selectors: {
        target: '.car-tesla'
    },
    animation: {
        duration: 300
    }
});
let link1 =document.getElementById('link1');
let link2 =document.getElementById('link2');
let link3 =document.getElementById('link3');
let link4 =document.getElementById('link4');
link1.onclick =() =>{
    link2.classList.remove('active');
    link1.classList.add('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
};
link2.onclick =() =>{
    link2.classList.add('active');
    link1.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
};
link3.onclick =() =>{
    link2.classList.remove('active');
    link1.classList.remove('active');
    link3.classList.add('active');
    link4.classList.remove('active');
    // console.log(link1)
}
link4.onclick =() =>{
    link2.classList.remove('active');
    link1.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.add('active');
    // console.log(link1)
}
let had = document.querySelector('.header');
window.addEventListener('scroll', () =>{
    if(scrollY > 0){
        had.classList.add('shadow');
    }else{
        had.classList.remove('shadow')
    }
});
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });
  
  sr.reveal(`.tittle-home, .img-home, .box-content`);
  sr.reveal(`.about-img`, { delay: 500 , origin: "left" });
  sr.reveal(`.about-text`, { delay: 600 , origin: "right" });
  sr.reveal(`.poppuler-tittle`, { delay: 800 });
  sr.reveal(`.More-Features`, { delay: 900, interval: 100, origin: "top" });
  sr.reveal(`.content-features`, { delay: 1000, origin: "top" });
  sr.reveal(`.btn-groups`, { origin: "top" });
  sr.reveal(`.offer-text`, { origin: "left" });
  sr.reveal(`.offer-img`, { delay: 600, origin: "right" });
  sr.reveal(`.featured-card, .logos-content, .footer-content ,.footer-content1 `, { interval: 100 });