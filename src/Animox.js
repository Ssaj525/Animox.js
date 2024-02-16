// Animox.js: Convert Your Long Javascript Code to One Liner 

// Theme Toggler (from light to dark and vice versa)✅✅
var ThemeToggler = (function() {
    // Private variables
    var elements = {};

    // Private method to apply dark theme to specified elements
    function applyDarkTheme() {
        Object.keys(elements).forEach(function(key) {
            var selector = getElementSelector(key);
            var element = getElement(selector);
            if (element) {
                element.classList.add('dark-theme');
            } else {
                console.error('Element with selector "' + selector + '" not found in the DOM.');
            }
        });
    }

    // Private method to apply light theme to specified elements
    function applyLightTheme() {
        Object.keys(elements).forEach(function(key) {
            var selector = getElementSelector(key);
            var element = getElement(selector);
            if (element) {
                element.classList.remove('dark-theme');
            } else {
                console.error('Element with selector "' + selector + '" not found in the DOM.');
            }
        });
    }

    // Private method to get the element from the DOM
    function getElement(selector) {
        return document.querySelector(selector);
    }

    // Private method to generate selector based on element name
    function getElementSelector(name) {
        if (name.startsWith('.')) {
            return name;
        } else if (name.startsWith('#')) {
            return name;
        } else {
            return name.toLowerCase(); // Convert to lowercase for tag selectors
        }
    }

    // Public method to initialize theme toggling
    function Mode(options) {
        if (options && options.elements) {
            if (Array.isArray(options.elements)) {
                options.elements.forEach(function(name) {
                    elements[name] = getElementSelector(name);
                });
            } else {
                Object.keys(options.elements).forEach(function(name) {
                    elements[name] = getElementSelector(name);
                });
            }
        } else {
            console.error('Elements not provided!');
            return;
        }

        if (!options || !options.toggleButton) {
            console.error('Toggle button not provided!');
            return;
        }

        // Toggle theme when button is clicked
        options.toggleButton.addEventListener('click', function() {
            if (document.body.classList.contains('dark')) {
                applyLightTheme();
                document.body.classList.remove('dark');
            } else {
                applyDarkTheme();
                document.body.classList.add('dark');
            }
        });
    }

    // Expose public methods
    return {
        Mode: Mode
    };
})();
//Hover Effects ✅✅
function HoverEffect(elements, opts = {}) {
    switch (opts.style || 1) {
        case 1:
            function FirstEffect(element) {
                element.classList.add("btnE1");
                element.classList.add("btnM1");
                if (opts.bgColor || opts.color || opts.width || opts.height) {
                    element.style.backgroundColor = opts.bgColor;
                    element.style.color = opts.color;
                    element.style.width = opts.width;
                    element.style.height = opts.height;
                }
            }

            elements.forEach(FirstEffect);
            break;
        case 2:
            function SecondEffect(element) {
                element.classList.add("btnE5");
                if (opts.style == 2) {
                    switch (opts.effect || "center") {
                        case "center":
                            element.classList.add("btn-center");
                            break;
                        case "left":
                            element.classList.add("btn-left");
                            break;
                        case "right":
                            element.classList.add("btn-right");
                            break;
                        case "bottom":
                            element.classList.add("btn-bottom");
                            break;
                    }
                }
            }

            elements.forEach(SecondEffect);
            break;
        default:
            console.warn("Animox Js : no such style available for Hover Effect, mentioned in HoverEffect()");
    }
} 
// checking before applying Text Effects ✅✅
function TextEffect(elements, opts = {}) {
    if (!elements) return;

    if (elements instanceof NodeList) {
        elements.forEach(element => {
            applyEffect(element, opts);
        });
    } else if (elements instanceof HTMLElement) {
        applyEffect(elements, opts);
    } else if (typeof elements === 'string') {
        const nodeList = document.querySelectorAll(elements);
        nodeList.forEach(element => {
            applyEffect(element, opts);
        });
    } else {
        console.error('Invalid input. Please provide valid HTMLElement, NodeList, or selector string.');
    }
}
//Text Effects only✅✅
function applyEffect(element, opts) {
    let textContainer; // Declare textContainer here

    switch (opts.style || 1) {
            case 1:
            // FirstEffect
            element.classList.add("rolling-text");

            let innerText = element.innerText;
            element.innerHTML = "";

            textContainer = document.createElement("div"); // Initialize textContainer here
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
            break;
            case 2:
                // SecondEffect
                element.classList.add("magic");
                break;
            case 3:
                // ThirdEffect
                if (opts.fontFamily || opts.fontSize || opts.TextTransform) {
                    element.style.fontSize = opts.fontSize;
                    element.style.fontFamily = opts.fontFamily;
                    element.style.textTransform = opts.TextTransform;
                }
            
                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                element.classList.add("JText");
                element.dataset.value = element.innerText; // Set value attribute to the inner text
                element.onmouseover = event => {
                    let iterations = 0;
                    const interval = setInterval(() => {
                        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
                            if (index < iterations) {
                                return event.target.dataset.value[index];
                            }
                            return letters[Math.floor(Math.random() * 26)];
                        }).join("");
                        if (iterations >= event.target.dataset.value.length) {
                            clearInterval(interval);
                        }
                        iterations += 1 / 3;
                    }, 100);
                };
                break;
            case 4:
    // FourthEffect
    element.classList.add("txt-line");

    // Create a paragraph element
    const para = document.createElement("p");

    // Transfer text content from the element to the paragraph
    para.textContent = element.textContent;

    // Append the paragraph to the element
    element.innerHTML = ""; // Clear the element's content
    element.appendChild(para);

    // Apply animation to the paragraph tag
    gsap.from(para, {
        duration: 1.8,
        delay: 1,
        y: 200,
        skewY: 10,
        stagger: {
            amount: 0.4
        }
    });
    break;
            case 5:
        // FifthEffect
        element.classList.add("TE5");
    
        // Create a paragraph element
        const para2 = document.createElement("p");
    
        // Transfer text content from the element to the paragraph
        para2.textContent = element.textContent;
    
        // Clear the element's content
        element.innerHTML = "";
    
        // Append the paragraph to the element
        element.appendChild(para2);
    
        // Apply animation to the paragraph tag
        gsap.to(para2, {
            backgroundPositionX: "0%",
            stagger: 1,
            scrollTrigger: {
                trigger: ".TE5" || opts.trigger,
                scrub: 1,
                start: "top top" || opts.start,
                end: "bottom top",
            }
        });
        break;
            case 6:
            // SixthEffect
            if (opts.fontSize) {
                element.style.fontSize = opts.fontSize;
            }
            element.classList.add("TE6");
        
            // Set data-text attribute to the element
            element.setAttribute("data-text", element.textContent);
        
            break;     
            case 7:
                // SeventhEffect
                if (opts.fontFamily || opts.fontSize || opts.TextTransform) {
                    element.style.fontSize = opts.fontSize;
                    element.style.fontFamily = opts.fontFamily;
                    element.style.textTransform = opts.TextTransform;
                }
                element.classList.add("TE7C");
                textContainer = document.createElement("div");
                textContainer.classList.add("TE7");
                textContainer.innerText = element.innerText;
                element.innerHTML = ""; // Clear the element's content
                element.appendChild(textContainer);
                break;          
            case 8:
                    // EighthEffect
                    if (opts.fontFamily || opts.fontSize || opts.TextTransform) {
                        element.style.fontSize = opts.fontSize;
                        element.style.fontFamily = opts.fontFamily;
                        element.style.textTransform = opts.TextTransform;
                    }
                    element.classList.add("textEffects");
                    
                    // Split the text content into individual characters
                    const chars = element.textContent.split("");
                
                    // Clear the element's content
                    element.innerHTML = "";
                
                    // Iterate over each character and create a span for it
                    chars.forEach((char, index) => {
                        const span = document.createElement("span");
                        span.textContent = char;
                        span.classList.add("char", `char-${index + 1}`); // Add class names for styling
                        element.appendChild(span);
                
                        // Apply starting position below the element
                        gsap.set(span, { y: "100%" });
                
                        // Apply animation to bring each character up
                        gsap.to(span, {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            delay: 0.1 * index, // Stagger the delay for each character
                            ease: "power2.out" // Use smooth easing function
                        });
                    });
                
                    break;
            case 9:
                        // NinthEffect
                        if (opts.fontFamily || opts.fontSize || opts.TextTransform) {
                            element.style.fontSize = opts.fontSize;
                            element.style.fontFamily = opts.fontFamily;
                            element.style.textTransform = opts.TextTransform;
                        }
                        element.classList.add("typewriter");
                        const typewriterText = element.textContent;
                        element.textContent = "";
                        const chars2 = typewriterText.split("");
                        chars2.forEach((char, index) => {
                            const span = document.createElement("span");
                            span.textContent = char;
                            span.style.visibility = "hidden";
                            element.appendChild(span);
            
                            gsap.to(span, {
                                visibility: "visible",
                                duration: 0.5,
                                delay: index * 0.1,
                                onComplete: () => {
                                    if (index === chars2.length - 1) {
                                        element.style.borderRight = "none";
                                    }
                                }
                            });
                        });
                        break;
            default:
            console.warn("Animox Js: no such style available for Text Effects, mentioned in TextEffect()");
            }
}
// QuerySelector✅✅
function $(selector){
    //passedItem select the element passed by the user
    let passedItem = document.querySelector(selector);
    let queryPassed = document.querySelectorAll(selector);

    // 1.Mouse Follower with different style✅✅
    passedItem.MouseFollower = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function SimpleMouse(element) {
                    // Add or modify default/Custom styles as needed
                    if(opts.bgColor){
                        element.classList.add("mf");
                        element.style.backgroundColor = opts.bgColor;
                    }else{
                        element.classList.add("mf");
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
                    SimpleMouse(passedItem);
              break
            case 2:
                function AdvanceMouseFollower(){
                    var MainMouseFollower = null;
                    var BackMouseFollower = null;
                    MainMouseFollower = document.createElement("div")
                    BackMouseFollower = document.createElement("div")
                    MainMouseFollower.classList.add("mf2")
                    BackMouseFollower.classList.add("mf2")
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
                        gsap.to(".mf2", {
                          width: diff + "px",
                          ease: opts.ease || Expo.easeOut,
                          duration: opts.duration || 1,
                        })
                      }
                      gsap.to(".mf2", {
                        top: dets.clientY,
                        left: dets.clientX,
                        duration: opts.duration || 1,
                        ease: opts.ease || Expo.easeOut,
                      })
                    })
                  //using this to target the element on the webpage
                    addEventListener("mouseenter", function () {
                      gsap.to(".mf2", {
                        opacity: 1,
                      })
                    })
                    addEventListener("mouseleave", function () {
                      gsap.to(".mf2", {
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
                    element.classList.add("c");
                    innerCircle = document.createElement("div")
                    innerCircle.classList.add("inner-circle")
                    if(opts.bgColor || opts.border){
                        innerCircle.style.backgroundColor = opts.bgColor;
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
                        circle.classList.add('c2');
                        circle.style.backgroundColor = colors[i % colors.length]; 
                        document.body.appendChild(circle);
                    }
                
                    const circles = document.querySelectorAll(".c2");
                    
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
                        element.id = "cid";
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
                            circle.classList.add("cc3");
                            document.body.appendChild(circle);

                            circle.style.left = cursorPosition.x - circle.offsetWidth / 2 + "px";
                            circle.style.top = cursorPosition.y - circle.offsetHeight / 2 + "px";

                            circles.push(circle);
                        }
                    }, 10)
                    } 
              FifthMouseFollower(passedItem)
              break
            case 6:
                function sixthMouseFollower(element){ 
                element.classList.add("c4");
                document.addEventListener("mousemove", function(dets) {
                    gsap.to(".c4", {
                        top: dets.clientY,
                        left: dets.clientX,
                        duration: 1,
                        ease: Expo.easeOut,
                    });
                });
                return element;
                    } 
              sixthMouseFollower(passedItem)
              break
            case 7:
                function seventhMouseFollower(element){ 
                    element.classList.add("c5");
                    const circle = document.querySelector(".c5");
                    if(opts.border){
                        circle.style.border = opts.border;
                    }
                    const mouse = { x: 0, y: 0 };
                    const previousMouse = { x: 0, y: 0 };
                    const circleCoord = { x: 0, y: 0 };
                    let currentScale = 0;
                    let currentAngle = 0;
                    const speed = 0.17;
                    const maxVelocity = 150;
                    const minVelocity = 20;
                    const maxScale = 0.5;
                    
                    window.addEventListener("mousemove", (e) => {
                        mouse.x = e.x;
                        mouse.y = e.y;
                    });
                    
                    const tick = () => {
                        circleCoord.x += (mouse.x - circleCoord.x) * speed;
                        circleCoord.y += (mouse.y - circleCoord.y) * speed;
                        const translateTransform = `translate(${circleCoord.x}px, ${circleCoord.y}px)`;
                    
                        const deltaMouseX = mouse.x - previousMouse.x;
                        const deltaMouseY = mouse.y - previousMouse.y;
                        previousMouse.x = mouse.x;
                        previousMouse.y = mouse.y;
                    
                        const mouseVelocitySquared = deltaMouseX ** 2 + deltaMouseY ** 2;
                        const scaleValue = Math.min(mouseVelocitySquared / (maxVelocity ** 2) * maxScale, maxScale);
                        currentScale += (scaleValue - currentScale) * speed;
                    
                        const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
                        if (Math.sqrt(mouseVelocitySquared) > minVelocity) {
                            currentAngle = angle;
                        }
                    
                        const transform = `${translateTransform} rotate(${currentAngle}deg) scale(${1 + currentScale}, ${1 - currentScale})`;
                        circle.style.transform = transform;
                    
                        window.requestAnimationFrame(tick);
                    };
                    
                    tick();
                    
                return element;
                    } 
              seventhMouseFollower(passedItem)
              break
            default:
              console.warn(
                "Animox Js : no such style available for Mouse Follower, mentioned in MouseFollower()"
              )
          }
   
    }
    // 2.Magnet Effect✅✅
    passedItem.Magnet = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
             function MagnetEffect(element) {
            // Add or modify default/Custom styles as needed
            if(opts.bgColor || opts.color || opts.fontFamily || opts.fontSize){
                element.style.backgroundColor = opts.bgColor;
                element.style.color = opts.color;
                element.style.fontFamily = opts.fontFamily;
                element.style.fontSize = opts.fontSize;
            }
            element.classList.add("Mbtn");
            if(opts.width || opts.height){
                element.style.width = opts.width;
                element.style.height = opts.height;
            }
            let btn = document.querySelectorAll(".Mbtn").forEach((btn)=>{
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
             queryPassed.forEach(MagnetEffect);
              break
            case 2:
                function lerp(a, b, t) {
                    return a * (1 - t) + b * t;
                }
                function SecondMagnetEffect(element) {
                    if (!element || typeof element.addEventListener !== 'function') {
                        // Skip invalid elements
                        return;
                    }
                    element.addEventListener("mousemove", function (dets) {
                        var bcr = element.getBoundingClientRect();
                        var zeroonex = gsap.utils.mapRange(
                            0,
                            bcr.width,
                            0,
                            1,
                            dets.clientX - bcr.left
                        );
                        var zerooney = gsap.utils.mapRange(
                            0,
                            bcr.height,
                            0,
                            1,
                            dets.clientY - bcr.top
                        );
            
                        gsap.to(".mf2", {
                            scale: 4,
                            ease: Power2,
                            duration: 0.5,
                        });
            
                        gsap.to(element, {
                            x: lerp(-20, 20, zeroonex),
                            y: lerp(-20, 20, zerooney),
                            duration: opts.duration || 1,
                            ease: opts.ease || Expo.easeOut,
                        });
                    });
                    element.addEventListener("mouseleave", function () {
                        gsap.to(".mf2", {
                            scale: 1,
                            ease: Power2,
                            duration: 0.5,
                        });
                        gsap.to(element, {
                            x: 0,
                            y: 0,
                            duration: opts.duration || 1,
                            ease: opts.ease || Expo.easeOut,
                        });
                    });
                }
                // Apply SecondMagnetEffect to passedItem
                queryPassed.forEach(SecondMagnetEffect);
              break
            default:
              console.warn(
                "Animox Js : no such style available for Magnet Effect, mentioned in Magnet()"
              )
          }
    }
    // 3.Locomotive & ScrollTrigger & Lenis One line Solution ✅✅
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
                function Lenis() {
                    // Initialize Lenis
                    const lenis = this;
                
                    // Register scroll event listeners
                    lenis.on = (eventName, callback) => {
                        // Your event listener registration logic here
                    };
                
                    function raf(time) {
                        // Your raf function logic here
                        requestAnimationFrame(raf);
                    }
                
                    requestAnimationFrame(raf);
                }
                // Create a new instance of Lenis
                const lenisInstance = new Lenis();
              break
            case 3:
                function Loco(element) {
                    const scroll = new LocomotiveScroll({
                        el: element,
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
    // 4.Navbar Scroll Effect✅✅
    passedItem.StickyNav = function(elem , opts = {}){
        switch (opts.style || 1) {
            case 1:
                function FirstEffect(element) {
                    window.addEventListener("scroll", ()=>{
                        element.classList.toggle("sticky", window.scrollY > 0)
                    })
                    return element;
                    }
                  FirstEffect(passedItem);
              break
            case 2:
                function secondEffect(element){
                    window.addEventListener("scroll", ()=>{
                    if(window.scrollY > 0){
                        gsap.to(elem || ".nav",{
                            backgroundColor: "transparent" || opts.bgColor,
                            scrollTrigger:{
                                trigger: opts.trigger || ".page1",
                                scroller: element || ".main",
                                start: opts.start || "20% 15%",
                                end: opts.end || "15% top",
                                scrub:true,
                                markers: opts.markers || false
                            }
                        })
                    }
                    });
                    } 
              secondEffect(passedItem)
              break
            default:
              console.warn(
                "Animox Js : no such style available for sticky Navbars, mentioned in StickyNav()"
              )
          }
   
    }
    // 5.ScrollToTop Effect✅✅
    passedItem.ScrolltoTop = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function FirstEffect(element) {
                    window.addEventListener('scroll', function() {
                        element.classList.add("stt");
                        var scrollBtn = document.querySelector('.stt');

                        if (!scrollBtn) {
                        scrollBtn = document.createElement('button');
                        scrollBtn.classList.add('stt');
                        scrollBtn.innerText = "Scroll to Top";
                        document.body.appendChild(scrollBtn);
                        }

                        if (window.scrollY > 200) {
                        scrollBtn.style.display = 'block';
                        } else {
                        scrollBtn.style.display = 'none';
                        }
                    });
                    document.addEventListener('click', function(event) {
                        if (event.target.classList.contains('stt')) {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        }
                    });
                    return element;
                    }
                   FirstEffect(passedItem);
              break
            case 2:
                function secondEffect(){
                      // Create progress bar container and progress bar
                    var progressBarContainer = document.createElement("div");
                    progressBarContainer.classList.add("pbc");
                    document.body.appendChild(progressBarContainer);
                    var progressBar = document.createElement("div");
                    progressBar.classList.add("pb");
                    progressBarContainer.appendChild(progressBar);

                    window.addEventListener('scroll', function() {
                        var scrollToTopButton = document.getElementById('stt2');
                        var progressbar = document.querySelector('.pb'); 

                        var totalHeight = document.body.scrollHeight - window.innerHeight;
                        var progress = (window.pageYOffset / totalHeight) * 100;
                        progressBar.style.width = progress + '%';

                        if (!scrollToTopButton) {
                        scrollToTopButton = document.createElement('button');
                        scrollToTopButton.classList.add('stt2');
                        scrollToTopButton.innerHTML = "&#9650;";
                        scrollToTopButton.setAttribute('id', 'stt2'); 
                        document.body.appendChild(scrollToTopButton);
                        }

                        if (window.scrollY > 200) {
                        scrollToTopButton.style.display = 'block';
                        } else {
                        scrollToTopButton.style.display = 'none';
                        }
                    });

                    document.addEventListener('click', function(event) {
                        if (event.target.classList.contains('stt2')) {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        }
                    });
                    } 
              secondEffect()
              break
            default:
              console.warn(
                "Animox Js : no such style available for scroll to top effect, mentioned in ScrollTop()"
              )
          }
   
    }
    // 6.TextSplit One Liner✅✅
    passedItem.TextSplit = function(opts = {}){
        function Splitter(element) {
      const sentenceElement = element;
      const sentence = sentenceElement.innerText;

      // Clear existing spans if any
      sentenceElement.innerHTML = '';

      for (let i = 0; i < sentence.length; i++) {
        // Create a new span element
        const span = document.createElement('span');

        // Set the text content of the span to the current character
        span.textContent = sentence[i];

        // Assign a class name based on the character and its position
        span.className = `char char-${i + 1}`;

        // Append the span to the sentence element
        sentenceElement.appendChild(span);
      }
            return element;
        }
        Splitter(passedItem);
   
    }
    // 7.Button Hover Effects✅✅
    passedItem.BtnHover = function(opts = {}){
        switch (opts.style || 1) {
            case 1:
                function FirstEffect(element) {
                    if(opts.bgColor || opts.color){
                        element.style.backgroundColor = opts.bgColor;
                        element.style.color = opts.color;
                    }
                    element.classList.add("btnEffect1");
                    return element;
                    }
                queryPassed.forEach(FirstEffect);
              break
            case 2:
            function wavyBtn(){
                console.log("Sorry for inconvience this effect will be soon available to use")
                    } 
              wavyBtn()
              break
            default:
              console.warn(
                "Animox Js : no such style available for Button Effects, mentioned in BtnHover()"
              )
          }
   
    }
    // 8.Image Trail Effects✅✅
    passedItem.ImageTrail = function(){
        function Trail(element) {   
            element.classList.add("hero");
            const hero = document.querySelector(".hero");
            const settings = {
                isEnabled: false,
                count: 1,
                time: 50,
            }
            const preloadImages = () =>{
            for(i = 0; i< images.length; i++){
                let link = document.createElement("link");
                link.rel = 'preload';
                link.as = 'image';
                link.href = images[i];
                document.head.appendChild(link)
            }
            };
            const calcIndex = (length)=>{
            settings.count++;
            if(settings.count == length) settings.count = 0;
            return settings.count;
            }
            
            const animateImages = (event) =>{
                const image = document.createElement('img');
                const imageSize = 20;
            
                const countIndex = calcIndex(images.length);
            
                image.classList.add('hero_media');
                image.setAttribute('src', images[countIndex]);
                image.style.width = `${imageSize}rem`;
                image.style.height = `${imageSize}rem`;
                image.style.left = event.pageX - (imageSize * 10) / 2 + "px";
                image.style.top = event.pageY - (imageSize * 10) / 2 + "px";
                hero.appendChild(image)
            
                const randomDeg = Math.floor(Math.random() * 15);
            
                window.setTimeout(()=>{
                    image.style.transform = `scale(1) rotate(${randomDeg}deg)`;
                }, 50)
                window.setTimeout(()=>{
                    image.style.opacity = 0;
                    image.style.filter = "blur(10px)";
                    image.style.transform = 'scale(0.25)';
                }, 1500)
                window.setTimeout(()=>{
                   hero.removeChild(image);
                }, 2500)
            }
            
            window.addEventListener('mousemove', (event)=>{
                if(!settings.isEnabled){
                    settings.isEnabled = true;
            
                    setTimeout(()=>{
                        settings.isEnabled = false;
                    },settings.time);
                    animateImages(event)
                }
            })
            
            window.onload = () =>{
                preloadImages()
            }
            return element
        }
        Trail(passedItem);
    }
    // 9.Expand MouseFollower ✅✅
    passedItem.onHoverExpand = function(newElem, opts = {}){
        function Expand(element) {
            SElem = document.querySelector(newElem)
            SElem.addEventListener("mouseenter",function(){
                if(element.classList.contains('mf')){
                    element.classList.add("ECircle");
                }
            })
            SElem.addEventListener("mouseleave",function(){
                // element.classList.add("mf");
                element.classList.remove("ECircle");
                element.style.transition = "all 0.20s"
            })
            return element;
          }
          Expand(passedItem);
          return passedItem;
    }
   // 10.Infinite Scroll Effects✅✅
   passedItem.InfiniteCarousel = function(opts = {}) {
    switch(opts.style || 1){
        case 1:
            function ImageScroller(elem){
                // Create logo scroller
                   var logoScroller = elem;
                   logoScroller.classList.add("ls");
                   document.body.appendChild(logoScroller);
       
                   // Create logos container
                   var logosContainer = document.createElement("div");
                   logosContainer.classList.add("lc");
                   logoScroller.appendChild(logosContainer);
                   // Function to create logos
                   function createLogos(images) {
                       images.forEach(image => {
                       var img = document.createElement('img');
                       img.src = image;
                       img.alt = 'Logo';
                       logosContainer.appendChild(img);
                       });
                   }
       
                   // Create the logos
                   createLogos(images);
       
                   // Clone the logos
                   var logos = logosContainer.innerHTML;
                   logosContainer.innerHTML += logos;
       
                   // Calculate the duration based on the width of the logos container and the number of logos
                   var containerWidth = logosContainer.scrollWidth;
                   var logoWidth = logosContainer.querySelector('img').offsetWidth;
                   var totalLogosWidth = logoWidth * images.length;
                   var duration = totalLogosWidth / 100; // Adjust as needed
       
                   // Animate the logos
                   gsap.fromTo(logosContainer, {
                       x: 0
                   }, {
                       duration: duration,
                       x: -totalLogosWidth,
                       ease: "linear",
                       repeat: -1
                   });
                       }
           ImageScroller(passedItem);
           break;
        case 2: 
           function TextScroller(elem){
            // Create quote scroller
              var quoteScroller = elem;
              quoteScroller.classList.add("q-scroller");
              document.body.appendChild(quoteScroller);
  
              // Create quotes container
              var quotesContainer = document.createElement("div");
              quotesContainer.classList.add("qc");
              quoteScroller.appendChild(quotesContainer);
  
              // Function to create quotes
              function createQuotes(quotes) {
                  quotes.forEach(quote => {
                  var quoteElement = document.createElement('div');
                  quoteElement.classList.add('quote');
                  quoteElement.textContent = quote;
                  quotesContainer.appendChild(quoteElement);
                  });
              }
  
              // Create the quotes
              createQuotes(quotes);
  
              // Clone the quotes
              var clonedQuotes = quotesContainer.innerHTML;
              quotesContainer.innerHTML += clonedQuotes;
  
              // Calculate the duration based on the width of the quotes container and the number of quotes
              var containerWidth = quotesContainer.scrollWidth;
              var quoteWidth = quotesContainer.querySelector('.quote').offsetWidth;
              var totalQuotesWidth = quoteWidth * quotes.length;
              var duration = totalQuotesWidth / 100; // Adjust as needed
  
              // Animate the quotes
              gsap.fromTo(quotesContainer, {
                  x: 0
              }, {
                  duration: duration,
                  x: -totalQuotesWidth,
                  ease: "linear",
                  repeat: -1
              });
                  }
            TextScroller(passedItem)
            break;
        default:
                console.warn(
                    "Animox Js : no such style available for Infinite Scroller or Carousel, mentioned in InfiniteCarousel()"
                  )
    }
    }
   // 11.ImageSlider✅✅
   passedItem.ImageSlider = function(opts = {}) {
    switch(opts.style || 1){
        case 1:
            function ImageSlider(element){
                element.classList.add("slider");
                const slider = element;
        
                // Set width and height if provided
                if (opts.height || opts.width) {
                    slider.style.width = opts.width;
                    slider.style.height = opts.height;
                }
        
                // Initialize currentIndex
                let currentIndex = 0;
        
                // Function to initialize the slider with your own images
                async function initSlider() {
                    for (let i = 0; i < imageUrls.length; i++) {
                        const slide = document.createElement('div');
                        slide.classList.add('slide');
                        slide.style.backgroundImage = `url('${imageUrls[i]}')`;
                        slider.appendChild(slide);
                    }
                }
        
                // Function to navigate to the previous slide
                function prevSlide() {
                    if (currentIndex > 0) {
                        currentIndex--;
                        moveSlider();
                    }
                }
        
                // Function to navigate to the next slide
                function nextSlide() {
                    if (currentIndex < slider.children.length - 1) {
                        currentIndex++;
                        moveSlider();
                    }
                }
        
                // Function to move the slider to the current slide
                function moveSlider() {
                    gsap.to(slider, {
                        x: -currentIndex * slider.offsetWidth,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
        
                // Initialize the slider
                initSlider();
        
                // Event listeners for navigation buttons
                document.getElementById("prevBtn").addEventListener("click", prevSlide);
                document.getElementById("nextBtn").addEventListener("click", nextSlide);
        
                return element;
            }
            
            // Call the ImageSlider function with passedItem
            ImageSlider(passedItem);
           break;
        case 2: 
        console.log("sorry for inconvience this effect will be soon available to use")
        // function SwiperJsSlider() {
        //     // Retrieve swiper and slide elements
        //     var Myswiper = document.querySelector(".swiper");
        //     var slide = document.querySelector(".swiper-slide");
        
        //     // Check if the elements exist before applying styles
        //     if (Myswiper && slide) {
        //         // Set width and height if provided
        //         if (opts.SwiperWidth || opts.SwiperHeight || opts.slideHeight || opts.slideWidth) {
        //             Myswiper.style.width = opts.SwiperWidth;
        //             Myswiper.style.height = opts.SwiperHeight;
        //             slide.style.width = opts.slideWidth;
        //             slide.style.height = opts.slideHeight;
        //         }
        
        //         // Initialize Swiper
        //         var swiper = new Swiper(".mySwiper", {
        //             slidesPerView: "auto",
        //             centeredSlides: opts.centeredSlides || true,
        //             spaceBetween: opts.spaceBetween || 30,
        //             autoplay: {
        //                 delay: opts.delay || 2500,
        //                 disableOnInteraction: opts.disableOnInteraction || false,
        //             },
        //             pagination: {
        //                 el: ".swiper-pagination",
        //                 clickable: opts.clickable || true,
        //             },
        //             navigation: {
        //                 nextEl: ".swiper-button-next",
        //                 prevEl: ".swiper-button-prev",
        //             },
        //         });
        //     } else {
        //         console.error("Swiper or slide element not found.");
        //     }
        // }
        // SwiperJsSlider()
            break;
        default:
                console.warn(
                    "Animox Js : no such style available for Infinite Scroller or Carousel, mentioned in InfiniteCarousel()"
                  )
    }
    }

// Return passedItem for potential chaining
    return passedItem;
}
