type MarqueeProps = {
    selector: string
    speed: number
}

/**
 * Marquee function
 */
export function marquee({selector, speed}: MarqueeProps) {
    const parentSelector = document.querySelector<HTMLDivElement>(selector)!
    const clone = parentSelector.innerHTML
    const firstElement = parentSelector.children[0] as HTMLElement
    let i = 0
    parentSelector.insertAdjacentHTML('beforeend', clone)
    parentSelector.insertAdjacentHTML('beforeend', clone)

    setInterval(() => {
        firstElement.style.marginLeft = `-${i}px`
        if (i > firstElement.clientWidth) {
            i = 0
        }
        i = i + speed
    }, 0)
}

