/**
 * Loader application
 */
export function loader() {
    const loader = document.querySelector(".load")
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.setAttribute("style", "display: none")
            document.body.classList.remove("isLoad")
        }, 1000)
    })
}