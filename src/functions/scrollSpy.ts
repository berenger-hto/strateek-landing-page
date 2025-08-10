import {throttle} from "lodash";

/**
 * Scroll spy
 * @param sections
 */
export function scrollSpy(sections: NodeListOf<HTMLDivElement>) {
    const handleScroll = () => {
        const scrollValue = document.body.scrollTop || document.documentElement.scrollTop
        for (const section of sections) {
            if (section.offsetTop - 200 <= scrollValue) {
                document.querySelector("nav ul li.active")?.classList.remove("active")
                document.querySelector(`nav ul li[data-link=${section.id}]`)?.classList.add("active")
            }
        }
    }

    window.addEventListener("scroll", throttle(handleScroll, 100))
}