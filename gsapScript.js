let gsapAnimation=(animationValue,triggerValue)=>{
    gsap.from(animationValue, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power1.Out",
        scrollTrigger: {
            trigger: triggerValue,
            start: "top 80%",
            scroller: "body",
        }
    })
}
let cards = document.querySelectorAll(".headerCards")
let navLi = document.querySelectorAll(".list")
navLi.forEach((list, listIndex) => {
    list.addEventListener("mouseenter", () => {
        cards.forEach((card) => {
            if (list.classList.contains(`navLi${listIndex + 1}`) && card.classList.contains(`navLi${listIndex + 1}`)) {
                card.style.display = "flex"
                let cardsElem = card.querySelectorAll(".container .headCard")
                gsap.from(cardsElem, {
                    y: -50,
                    opacity: 0,
                    duration: 1,
                    stagger: .1,
                    ease: "power1.Out"
                })
            }
        })
    })
    list.addEventListener("mouseleave", () => {
        cards.forEach((card) => {
            setTimeout(() => {
                if (!card.matches(":hover") && !list.matches(":hover")) {
                    card.style.display = "none";
                }
            }, 100);
            card.addEventListener("mouseenter", () => {
                card.style.display = "flex";

            });
            card.addEventListener("mouseleave", () => {
                if (!list.matches(":hover")) {
                    card.style.display = "none";
                }
            });
        })
    })
})
gsapAnimation(".realEstateSection .container h2",".realEstateSection .container")
let realEstateCards = document.querySelectorAll(".realEstateCard")
realEstateCards.forEach((realEstateCard) => {
    gsapAnimation(realEstateCard,realEstateCard)
})
gsapAnimation(".howWorksAccordionSection h1",".howWorksAccordionSection")
let accordionTitals = document.querySelectorAll(".accordionTital")
accordionTitals.forEach((accordionTital) => {
    gsapAnimation(accordionTital,accordionTital)
})
let accordionContents = document.querySelectorAll(".accordionContent")
accordionContents.forEach((accordionContent) => {
    gsapAnimation(accordionContent,accordionContent)
})
gsapAnimation(".accordionLowerContent p",".accordionLowerContent p")
gsapAnimation(".investmentSection h1",".investmentSection h1")
let investmentCards=document.querySelectorAll(".investmentCard")
investmentCards.forEach(investmentCard=>{
    gsapAnimation(investmentCard,investmentCard)
})
gsapAnimation(".mortgageSolutionSection .container h1",".mortgageSolutionSection .container h1")
gsapAnimation(".clientTop h1",".clientTop h1")
gsapAnimation(".clientButtom .container h2",".clientButtom .container h2")
gsapAnimation(".featuredSection .container h2",".featuredSection .container h2")
gsapAnimation(".buildWealthSection .container h2",".buildWealthSection .container h2")
gsapAnimation(".buildWealthSection .container p",".buildWealthSection .container p")
gsapAnimation(".informationSection h1",".informationSection h1")
gsapAnimation()
let imgactive=document.querySelectorAll(".imageSection .imgactive")
imgactive.forEach(active=>{
    gsapAnimation(active,active)
})
