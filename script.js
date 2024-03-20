$('.slider').owlCarousel({
 
    loop:true,
    autoplay:true,
    nav:true,
    dots:true,
    navText:["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        
        },
        600:{
            items:2,
            nav:true
           
        },
        1000:{
            items:4,
            nav:true
            
        }
    }
})