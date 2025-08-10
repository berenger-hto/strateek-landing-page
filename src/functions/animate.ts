//@ts-nocheck
/**
 * Animer les éléments
 */
export function animateElement() {
    const heroImg = document.querySelector("\img[alt=\"hero-img\"]")
    heroImg?.setAttribute("style", "transition: all 1s ease-in-out")

    window.addEventListener("scroll", () => {
        const scrollValue = window.scrollY
        heroImg?.setAttribute("style", `transform: translateY(${scrollValue / 6}px)`)
    })

    ScrollReveal().reveal('.animate-element', {
        delay: 200,
        duration: 1000,
        reset: false,
        opacity: .3,
        distance: "30px",
        origin: "top"
    })

}