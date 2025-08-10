import {createElement} from "./createElement.ts";

/**
 * Add youtube player
 */
export function loadIframe() {
    const iframe = createElement("iframe", {
        src: "https://youtube.com/embed/HZ13vE4rmMg?autoplay=1&si=f_PZL_7OzE2Y5x-_",
        allowfullscreen: ""
    })

    const loader = createElement("div", {
        class: "loader"
    })

    const thumb = document.querySelector(".thumb")
    thumb?.addEventListener("click", () => {
        console.log("player youtube video")
        const videoBox = thumb?.parentElement
        videoBox?.append(loader)
        videoBox?.append(iframe)
        thumb?.remove()
        iframe.addEventListener("load", () => {
            loader.remove()
        })
    })
}