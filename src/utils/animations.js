import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

//animation props such as opacity:1 etc, 
export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target, //in this case trigger is always on target, when it comes to screen
            toggleActions: "restart reverse restart reverse", // "when we first enter it, once we leave specific target, when we enter back to it, when we leave back"
            start: "top 85%", //starting position of scroll trigger 
            ...scrollProps,
        }
    })
}

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget, 
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
    '<'
    )
    
    timeline.to(
        secondTarget, 
        {
        ...animationProps,
        ease: 'power2.inOut'
        },
    '<'
    )
}