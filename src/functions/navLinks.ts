import {toggle} from "./menu.ts";

/**
 * Manage navigation links
 */
export function navLinks() {
    const buttons = [
        {
            className: "btn_contact",
            path: "contact"
        },
        {
            className: "link",
            path: ""
        }
    ]

    buttons.forEach(item => {
        const btns = document.querySelectorAll(`.${item.className}`) as NodeListOf<HTMLElement>
        for (const btn of btns) {
            btn.addEventListener("click", () => {
                if (item.path) setLocation(item.path)
                else setLocation(btn.dataset.link as string)
            })
        }
    })

    const setLocation = (path: string) => {
        location.href = `#${path}`
    }

    const headerLinks = document.querySelectorAll("nav ul li")
    headerLinks.forEach(link => link.addEventListener("click", () => toggle("remove")))

    const logoLinks = document.querySelectorAll(".logo")
    logoLinks.forEach(l => l.addEventListener("click", () => location.href = ""))

}

