// Animox.js: Convert Your Long Javascript Code to One Liner 

function $(selector){
    //passedItem select the element passed by the user
    let passedItem = document.querySelector(selector);

    // 1.Mouse Follower with different style✅
    passedItem.MouseFollower = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function setDefaultStyles(element) {
                    // Add or modify default/Custom styles as needed
                    if(opts.bgColor){
                        element.classList.add("mouse-follower");
                        element.style.backgroundColor = opts.bgColor;
                    }else{
                        element.classList.add("mouse-follower");
                    }
                    //Moving the cursor along with the mouse      
                    document.addEventListener("mousemove",function(dets){
                        gsap.to(element, {
                            top: dets.clientY,
                            left: dets.clientX,
                            duration: opts.duration || 1,
                            ease: opts.ease || Expo.easeOut,
                          })
                          
                    })
                    return element;
                    }
                  // after writing return in function then we are passing that values to the passedItem(i.e the element) or the default syles present in css
                  const elementWithDefaultStyles = setDefaultStyles(passedItem);
              break
            case 2:
                function AdvanceMouseFollower(){
                    var MainMouseFollower = null;
                    var BackMouseFollower = null;
                    MainMouseFollower = document.createElement("div")
                    BackMouseFollower = document.createElement("div")
                    MainMouseFollower.classList.add("mousefollower")
                    BackMouseFollower.classList.add("mousefollower")
                    BackMouseFollower.id = "behindmouse"
                    var posx = 0
                    var diff = 0
                    if(opts.bgColor){
                      MainMouseFollower.style.backgroundColor = opts.bgColor;
                    }
                    addEventListener("mousemove", function (dets) {
                      if (opts.skew) {
                        diff = gsap.utils.clamp(15, 35, dets.clientX - posx)
                        posx = dets.clientX
                        gsap.to(".mousefollower", {
                          width: diff + "px",
                          ease: opts.ease || Expo.easeOut,
                          duration: opts.duration || 1,
                        })
                      }
                      gsap.to(".mousefollower", {
                        top: dets.clientY,
                        left: dets.clientX,
                        duration: opts.duration || 1,
                        ease: opts.ease || Expo.easeOut,
                      })
                    })
                  //using this to target the element on the webpage
                    addEventListener("mouseenter", function () {
                      gsap.to(".mousefollower", {
                        opacity: 1,
                      })
                    })
                    addEventListener("mouseleave", function () {
                      gsap.to(".mousefollower", {
                        opacity: 0,
                        duration: opts.duration || 1,
                        ease: opts.ease || Expo.easeOut,
                      })
                    })
                    document.body.appendChild(BackMouseFollower)
                    document.body.appendChild(MainMouseFollower)
                    } 
              AdvanceMouseFollower()
              break
            case 3:
                function ThirdMouseFollower(element){
                    var innerCircle = null;
                    innerCircle = document.createElement("div")
                    innerCircle.classList.add("inner-circle")
                    if(opts.bgColor){
                        innerCircle.style.backgroundColor = opts.bgColor;
                    }
                    if(opts.border){
                        element.style.border = opts.border;
                    }
                    window.addEventListener("mousemove", function(dets){
                        const postx = dets.clientX;
                        const posty = dets.clientY;
                    
                        innerCircle.style.left = `${postx}px`;
                        innerCircle.style.top = `${posty}px`;
                    
                        element.animate({
                            left: `${postx}px`,
                            top : `${posty}px`
                        }, {duration: 500, fill: "forwards"});
                    })
                    document.body.appendChild(innerCircle)
                    } 
              ThirdMouseFollower(passedItem)
              break
            case 4:
                function FourthMouseFollower(){
                    const cords = {x: 0, y: 0};
                    const colors = opts.colors || ["#e31b39", "#e62637", "#e93036", "#ec3834", "#ef4032", "#f24830", "#f44f2e", "#f7562c", "#f95c2a", "#fb6328", "#fd6a26", "#ff7024"];
                    
                    // Create 20 circles
                    for (let i = 0; i < 20; i++) {
                        const circle = document.createElement('div');
                        circle.classList.add('rounded');
                        circle.style.backgroundColor = colors[i % colors.length]; 
                        document.body.appendChild(circle);
                    }
                
                    const circles = document.querySelectorAll(".rounded");
                    
                    circles.forEach((circle) => {
                        circle.x = 0;
                        circle.y = 0;
                    });
                    
                    window.addEventListener("mousemove", function(dets) {
                        cords.x = dets.clientX;
                        cords.y = dets.clientY;
                    });
                    
                    function animateCircle() {
                        let x = cords.x - 12;
                        let y = cords.y - 12;
                        circles.forEach((circle, index) => {
                            circle.style.left = x + "px";
                            circle.style.top = y + "px";
                    
                            circle.style.scale = (circles.length - index) / circles.length;
                    
                            circle.x = x;
                            circle.y = y;
                    
                            const nextCircle = circles[index + 1] || circles[0];
                            x += (nextCircle.x - x) * 0.3;
                            y += (nextCircle.y - y) * 0.3;
                        });
                        requestAnimationFrame(animateCircle);
                    }
                    animateCircle();
                    
                    } 
              FourthMouseFollower(passedItem)
              break
            case 5:
                function FifthMouseFollower(element){
                    let cursorPosition = {x:0, y:0};
                    let isCursorMoving = false;
                    let cursorMoveTimeout;
                    let circles = [];
                    let circleRemovalInterval;

                    document.addEventListener("mousemove", function(dets){
                        cursorPosition.x = dets.clientX;
                        cursorPosition.y = dets.clientY;
                        element.id = "cursor";
                        element.style.left = dets.clientX - element.offsetWidth / 2 + "px";
                        element.style.top = dets.clientY - element.offsetHeight / 2 + "px";

                        isCursorMoving = true;

                        clearTimeout(cursorMoveTimeout);
                        cursorMoveTimeout = setTimeout(()=>{
                            isCursorMoving = false;
                            setTimeout(()=>{
                                clearInterval(circleRemovalInterval);
                                circleRemovalInterval = setInterval(()=>{
                                    if(circles.length > 0){
                                        let circle = circles.shift();
                                        circle.remove();
                                    }else{
                                        clearInterval(circleRemovalInterval);
                                    }
                                }, 5)
                            },1000)
                        },100)
                    });

                    setInterval(()=>{
                        if(isCursorMoving){
                            const circle = document.createElement("div");
                            circle.classList.add("orb");
                            document.body.appendChild(circle);

                            circle.style.left = cursorPosition.x - circle.offsetWidth / 2 + "px";
                            circle.style.top = cursorPosition.y - circle.offsetHeight / 2 + "px";

                            circles.push(circle);
                        }
                    }, 10)
                    } 
              FifthMouseFollower(passedItem)
              break
            default:
              console.warn(
                "Animox Js : no such style available for Mouse Follower, mentioned in MouseFollower()"
              )
          }
   
    }
    // 2.Magnet Effect✅
    passedItem.Magnet = function(opts = {}){
        function MagnetEffect(element) {
            // Add or modify default/Custom styles as needed
            if(opts.bgColor){
                element.style.backgroundColor = opts.bgColor;
            }
            element.classList.add("btn");
            if(opts.width || opts.height){
                element.style.width = opts.width;
                element.style.height = opts.height;
            }
            let btn = document.querySelectorAll(".btn").forEach((btn)=>{
                btn.addEventListener("mousemove", function(dets){
                    let x = dets.offsetX;
                    let y = dets.offsetY;
                    let btnwidth = btn.clientWidth;
                    let btnHeight = btn.clientHeight;
                    let transX = (x - btnwidth / 2);
                    let transY = (y - btnHeight / 2);
            
                    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
            
                    let mx = dets.pageX - btn.offsetLeft;
                    let my = dets.pageY - btn.offsetTop;
                    btn.style.setProperty('--x', mx + 'px');
                    btn.style.setProperty('--y', my + 'px');
                })
                btn.addEventListener("mouseout", function(){
                    btn.style.transform = "";
                })
            })
            return element;
            }
          // after writing return in function then we are passing that values to the passedItem(i.e the element) or the default syles present in css
          const elementWithDefaultStyles = MagnetEffect(passedItem);
   
    }
    // 3.Locomotive & ScrollTrigger & Lenis One line Solution ✅ (lenis error)
    passedItem.Scroll = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function LocoGsap(element) {
                    gsap.registerPlugin(ScrollTrigger);
                    const locoScroll = new LocomotiveScroll({
                      el: element,
                      smooth: true
                    });
                    locoScroll.on("scroll", ScrollTrigger.update);
                    ScrollTrigger.scrollerProxy(element, {
                      scrollTop(value) {
                        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                      },
                      getBoundingClientRect() {
                        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                      },
                      pinType: element.style.transform ? "transform" : "fixed"
                    });
                    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
                    ScrollTrigger.refresh();
                    return element;
                    }
                LocoGsap(passedItem);
              break
            case 2:
                function Lenis(){
                    const lenis = new Lenis();
                    lenis.on('scroll', (e) => {
                    console.log(e)
                    })

                    function raf(time) {
                    lenis.raf(time)
                    requestAnimationFrame(raf)
                    }
                    } 
              Lenis()
              break
            case 3:
                function LenisGsap(){
                 // Initialize Lenis
                const lenis = new Lenis();

                // Register scroll event listeners
                lenis.on('scroll', (e) => {
                    console.log(e); // This is just for demonstration, replace with your actual logic
                });

                lenis.on('scroll', ScrollTrigger.update);

                // Add Lenis's raf method to the GSAP ticker
                gsap.ticker.add((time) => {
                    lenis.raf(time * 1000);
                });

                // Adjust GSAP ticker's lag smoothing
                gsap.ticker.lagSmoothing(0);
            }
              LenisGsap()
              break
            case 4:
                function Loco(element) {
                    const scroll = new LocomotiveScroll({
                        el: document.querySelector(element),
                        smooth: true
                    });
                    return element;
                    }
                Loco(passedItem);
              break
            default:
              console.warn(
                "Animox Js : no such style available for Scroll, mentioned in Scroll()"
              )
          }
   
    }
    // 4.Navbar Scroll Effect✅
    passedItem.StickyNav = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function FirstEffect(element) {
                    // Add or modify default/Custom styles as needed
                    if(opts.bgColor){
                        element.style.backgroundColor = opts.bgColor;
                    }
                    window.addEventListener("scroll", ()=>{
                        element.classList.toggle("sticky", window.scrollY > 0)
                    })
                    return element;
                    }
                  // after writing return in function then we are passing that values to the passedItem(i.e the element) or the default syles present in css
                  FirstEffect(passedItem);
              break
            case 2:
                function secondEffect(){
                    gsap.to(opts.target || ".nav",{
                        backgroundColor: "transparent" || opts.bgColor,
                        scrollTrigger:{
                            trigger: opts.trigger || ".page1",
                            scroller:element || ".main",
                            scrub:true,
                            start: "top top",
                        }
                    })
                    } 
              secondEffect()
              break
            default:
              console.warn(
                "Animox Js : no such style available for sticky Navbar, mentioned in StickyNav()"
              )
          }
   
    }
    // 5.ScrollToTop Effect✅
    passedItem.ScrolltoTop = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function FirstEffect(element) {
                    element.addEventListener("click", function(){
                        window.scrollTo(0, 0);
                    })
                    return element;
                    }
                   FirstEffect(passedItem);
              break
            case 2:
                function secondEffect(element){
                    element.classList.add("scrollTop");
                    element.addEventListener("click", function(){
                        window.scrollTo(0, 0);
                    })
                    return element;
                    } 
              secondEffect(passedItem)
              break
            default:
              console.warn(
                "Animox Js : no such style available for scroll to top effect, mentioned in ScrollTop()"
              )
          }
   
    }
    // 6.TextSplit One Liner✅
    passedItem.TextSplit = function(opts = {}){
        function Splitter(element) {
            // Create a new container to hold the span elements
            const container = document.createElement('div');
        
            let text = element.innerText;
            const arr = text.split('');
            
            generateText(arr);
            
            function generateText(text){
                text.forEach((data)=>{
                    const span = document.createElement('span');
                    span.classList.add('char');
                    span.innerHTML = data;
                    container.appendChild(span);
                })
            }
        
            // Clear the existing content of the element
            element.innerHTML = "";
        
            // Append the container with span elements to the original element
            element.appendChild(container);
        
            return element;
        }
          // after writing return in function then we are passing that values to the passedItem(i.e the element) or the default syles present in css
        Splitter(passedItem);
   
    }
    // 7.Button Hover Effects
    // passedItem.BtnHover = function(opts = {}){
    //     switch (opts.style || 1) {
    //         case 1:
    //             function FirstEffect(element) {
                  
    //                 return element;
    //                 }
    //             FirstEffect(passedItem);
    //           break
    //         case 2:
    //         function AdvanceMouseFollower(){
    //                 } 
    //           AdvanceMouseFollower()
    //           break
    //         default:
    //           console.warn(
    //             "Animox Js : no such style available for Mouse Follower, mentioned in MouseFollower()"
    //           )
    //       }
   
    // }
    // 8.Image Trail Effects
    passedItem.ImageTrail = function(opts = {}){
        function Trail(element) {

            return element
        }Trail(passedItem);
   
    }
    // 9.Expand MouseFollower ✅
    passedItem.onHoverExpand = function(opts = {}){
        function setDefaultEvent(element) {
            // Add or modify default styles on hover as needed for the second elements passed
            let NewElem = opts.target || element;
            element.addEventListener("mouseenter",function(){
                NewElem.classList.add("expandCircle");
            })
            element.addEventListener("mouseleave",function(){
                element.classList.add("mouse-follower");
            })
            return element;
          }
          const elementWithDefaultEvents = setDefaultEvent(passedItem);
          return passedItem;
    }
   // 10.Infinite Scroll Effects
   passedItem.InfiniteCarousel = function(opts = {}) {

    }

// Return passedItem for potential chaining
    return passedItem;
}
// QuerySelectorAll
function _(AllSelector){
    let passedItem = document.querySelectorAll(AllSelector);
    let queryPassed = document.querySelector(AllSelector);
     // 1.Text Effects✅
    passedItem.TextEffect = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function FirstEffect(elements) {
                    // Add or modify default/Custom styles as needed
                    if(opts.color){
                        element.style.color = opts.color;
                    }    
                     elements.forEach((element) => {
                        // Add or modify default/Custom styles as needed
                        if (opts.color) {
                            element.style.color = opts.color;
                        }
                        element.classList.add("rolling-text");
        
                        let innerText = element.innerText;
                        element.innerHTML = "";
        
                        let textContainer = document.createElement("div");
                        textContainer.classList.add("block");
        
                        for (let letter of innerText) {
                            let span = document.createElement("span");
                            span.innerText = letter.trim() === "" ? "\xa0" : letter;
                            span.classList.add("letter");
                            textContainer.appendChild(span);
                        }
        
                        element.appendChild(textContainer);
                        element.appendChild(textContainer.cloneNode(true));
        
                        element.addEventListener("mouseover", () => {
                            element.classList.remove("play");
                        });
                    });
        
                return elements;
                    }
                 FirstEffect(passedItem);
              break
            case 2:
                function secondEffect(element){
                    element.classList.add("magic")
                    return element
                }
              secondEffect(queryPassed)
              break
            case 3:
                function ThirdEffect(element){
                    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    element.classList.add("JText")
                    element.onmouseover = event =>{
                        let iterations = 0;
                        const interval = setInterval(()=>{
                            event.target.innerText = event.target.innerText.split("").map((letter, index) =>{
                                if(index < iterations){
                                    return event.target.dataset.value[index];
                                } 
                                return letters[Math.floor(Math.random() *  26)]}).join("");
                            if(iterations >= event.target.dataset.value.length){
                                clearInterval(interval)
                            } 
                            iterations += 1 / 3;
                        },100);
                        
                    }                  
                    return element
                }
              ThirdEffect(queryPassed)
              break
            default:
              console.warn(
                "Animox Js : no such style available for Text Effects, mentioned in TextEffect()"
              )
          }
       
   
    }
       // 2.Link Hover Effects✅
    passedItem.HoverEffect = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function FirstEffect(element) {
                    element.classList.add("btnE1");
                    element.classList.add("btnM1");
                    if(opts.bgColor || opts.color || opts.width || opts.height){
                        element.style.backgroundColor = opts.bgColor;
                        element.style.color =  opts.color;
                        element.style.width =  opts.width;
                        element.style.height = opts.height;
                    }
                    return element;
                    }
                FirstEffect(queryPassed);
              break
            case 2:
            function SecondEffect(element){
                element.classList.add("btnE5");
                if(opts.style == 2){
                    switch(opts.effect || "center"){
                        case "center":
                            element.classList.add("btn-center")
                        break
                        case "left":
                            element.classList.add("btn-left")
                        break
                        case "right":
                            element.classList.add("btn-right")
                        break
                        case "bottom":
                            element.classList.add("btn-bottom")
                        break
                    }
                }
                
                return element;
                    } 
              SecondEffect(queryPassed)
              break
            default:
              console.warn(
                "Animox Js : no such style available for Hover Effect, mentioned in HoverEffect()"
              )
          }
   
    }
    return passedItem;
}
