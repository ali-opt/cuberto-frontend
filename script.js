




function mouseMoveFollower(){
    window.addEventListener("mousemove" ,function(dets){
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

    })
    

}

function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }

  circleChaptaKaro();
mouseMoveFollower();

gsap.to(".fleft-elem",{

  scrollTrigger: {
    trigger: ".fright",
    pin: true,
    start:"top top",
    end:"bottom bottom",
    endTrigger:"#last",
    scrub: 1
    
  
    
},
y:"-300%",
ease: Power1,


})

