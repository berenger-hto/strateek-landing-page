import {throttle} from "lodash";

/**
 * Scroll top
 */
export function scrollToTop(btnScrollTop: HTMLButtonElement) {
    const toggle = (action: "add" | "remove") => {
        btnScrollTop.classList[action]("scroll")
    }

    btnScrollTop.addEventListener("click", () => {
        scrollTo({
            top: 0,
            left: 0
        })
    })
    
    let lastScrollTop = 0
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        if (scrollTop < lastScrollTop) toggle("add")
        else toggle("remove");

        (scrollTop < 50) && toggle("remove")

        lastScrollTop = scrollTop
    }

    window.addEventListener("scroll", throttle(handleScroll))
}