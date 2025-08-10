type ToggleType = | "add" | "remove"

/**
 * Responsive menu button manage
 */
export function menu() {
    const btnMenu = document.querySelector(".menu")!
    const navLink = document.querySelector(".nav-link")!
    const closeMenu = document.querySelector(".close-menu")!
    btnMenu.addEventListener("click", () => {
        toggle("add")
    })

    closeMenu.addEventListener("click", () => {
        if (navLink.classList.contains("active-menu")) toggle("remove")
    })
}

/**
 * Toggle link class
 */
export const toggle = (type: ToggleType) => {
    document.querySelector(".nav-link")!.classList[type]("active-menu")
    document.body.classList[type]("hidden-scrollbar")
}