let tl = gsap.timeline()
tl.from(".front",{
    y:1000,
    duration:1
})
tl.from("#coffee",{
    y:800,
    duration:1,
    scale:2
})
tl.from(".front h1",{
    y:1000,
    duration:1
})
tl.from("#coffeeB1",{
    y:1000,
    duration:1,
    scale:2
})
tl.from("#coffeeB2",{
    y:1000,
    duration:1,
    scale:2
})
tl.from("#coffeeB3",{
    y:1000,
    duration:1,
    scale:2
})
tl.from("#coffeeB4",{
    y:1000,
    duration:1,
    scale:2
})
tl.from("#coffeeB5",{
    y:1000,
    duration:1,
    scale:2
})
let tl2=gsap.timeline({
    scrollTrigger:{
      trigger:".about",
      scroller:"body",
      scrub:2,
      markers:true,
      start:"50% 90%",
      end:"0% 50%"
     
    }
},"hi")

tl2.to("#coffee",{
    top:800,
    left:120,
    scale:0.8,
    duration:2
},"hi")

tl2.fromTo("#coffeeB1", 
    { top: 100, left: 400, scale: 1, rotate: 0 },  // Initial state
    { top: 700, left: 120, scale: 0.8, rotate: 142, duration: 1 }, // Target state
    "hi"
);


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".menu",
        scroller: "body",
        scrub: 2,
        start: "top 90%",  // Adjust this as needed
        end: "bottom 50%", // Adjust this as needed
        markers: true      // Show markers to help debug
    }
}, "hi");


tl3.fromTo("#coffee", 

    { y: 0, x: 0, scale: 1 },   // Initial position and scale
    { y: 700, x: 400, scale: 0.8, duration: 1 }, // Target position and scale
    "hi"
);


tl3.to("#coffeeB1",{
    left:500,
    top:1380,
    scale:0.8,
    rotate:250,
    markers :true,
},"hi")

tl3.from(".can1",{
    x:-300,
    duration:1
},"hi")

tl3.from(".can2",{
    x:+300,
    duration:1
},"hi")


tl3.from(".bean11",{
    x:-300,
    duration:1
},"hi")

tl3.from(".bean2",{
    x:+300,
    duration:1
},"hi")

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        scrub: 2,
        start: "top 90%",  // Adjust this as needed
        end: "bottom 50%", // Adjust this as needed
        markers: true      // Show markers to help debug
    }
}, "hi");

tl4.to("#coffee",{
    top:1450,
    left:500,
    scale:0.8,
    duration:2
},"hi")


tl4.to("#coffeeB1",{
    left:860,
    top:2050,
    scale:0.8,
    rotate:30,
    zIndex:2,
    duration:1,
    markers :true,
},"hi")

tl4.to(".can1",{
    left:650,
    top:700,
    duration:1,
    rotate:-20
},"hi")

tl4.to(".can2",{
    left:90,
    top:730,
    duration:1,
    rotate:20
},"hi")