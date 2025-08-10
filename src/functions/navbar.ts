import {throttle} from "lodash";

type StickyProps = {
    element: HTMLElement
    classActive: string
    scrollValue: number
}

/**
 * Navbar sticky
 */
export function sticky({element, classActive, scrollValue}: StickyProps) {
    const handleScroll = () => {
        if (window.scrollY > scrollValue) element.classList.add(classActive)
        else element.classList.remove(classActive)
    }

    if (element) {
        window.addEventListener("scroll", throttle(handleScroll, 200))
    }
}