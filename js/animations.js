// gsap.registerPlugin(ScrollTrigger) 
gsap.registerPlugin(ScrollTrigger) 

gsap.fromTo("header", {y:'-100%'}, {y:'0', duration:0.5, delay:2.5})

gsap.fromTo('.login-btn', {opacity:0}, {opacity:1, duration:0.25, delay:3})

gsap.fromTo('.header-img', {opacity:0}, {opacity:1, duration:0.25, delay:3})


gsap.fromTo('.intro h1', {opacity:0}, {opacity:1, duration:0.45, delay: 3.25})


gsap.fromTo('.intro h2', {opacity:0}, {opacity:1, duration:0.5, delay:3.35})
gsap.fromTo('.container', {opacity:0}, {opacity:1, duration:0.5, delay:3.45})

gsap.fromTo(".desc", {opacity: 0}, {opacity:1, duration:0.5, delay:3.55})


gsap.fromTo(".join-us", {opacity:0}, {opacity:1, duration:0.5, delay: 3.65})








