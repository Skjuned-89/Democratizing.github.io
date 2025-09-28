var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  loop: true,
  slidesPerView: 'auto',      
  speed: 4000,               
  autoplay: {
    delay: 0,                
    disableOnInteraction: false,
  },
  freeMode: false,           
  freeModeMomentum: false,     
  allowTouchMove: false,     
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    578:{
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
function applySwiper(className){
  let swipers = new Swiper(`.${className}`, {
    loop: true,
    slidesPerView: 'auto',      
    spaceBetween: 30,
    speed: 20000,               
    autoplay: {
      delay: 0,                
      disableOnInteraction: false,
    },
    freeMode: false,           
    freeModeMomentum: false,     
    allowTouchMove: false,     
  });
}
applySwiper("swiper1")
applySwiper("swiper2")
