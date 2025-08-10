import {createIcons, X, Facebook, Github, MapPin, Clock, ClockAlert, Phone} from "lucide";
import {sticky} from "./navbar.ts";
import {marquee} from "./marquee.ts";
import {navLinks} from "./navLinks.ts";
import {menu} from "./menu.ts";
import {scrollSpy} from "./scrollSpy.ts";
import {animateElement} from "./animate.ts";
import {sendMail} from "./sendMail.ts";
import {scrollToTop} from "./scrollToTop.ts";
import {loadIframe} from "./loadIframe.ts";
import {loader} from "./loader.ts";
import {appendMembers} from "./members.ts";

/**
 * Init functions for application
 */
export function initApp() {
    /**
     * Loader app
     */
    loader()

    /**
     * Create and initialize lucide icons
     */
    createIcons({
        icons: {
            X,
            Facebook,
            Github,
            MapPin,
            Clock,
            ClockAlert,
            Phone
        }
    })

    /**
     * Navbar sticky
     */
    sticky({
        element: document.querySelector("nav")!,
        classActive: "sticky",
        scrollValue: 30
    })

    /**
     * Marquee element
     */
    marquee({
        selector: ".marquee",
        speed: .3
    })

    /**
     * Nav links and menu
     */

    navLinks()
    menu()

    /**
     * Nav scrollspy and animation
     */

    scrollSpy(document.querySelectorAll("main section"))
    animateElement()

    /**
     * Send mail form
     */

    sendMail(document.querySelector("form")!)

    /**
     * Scroll top
     */

    scrollToTop(document.querySelector(".backToTop")!)

    /**
     * Load youtube iframe and play vidéo
     */

    loadIframe()

    /**
     * Append members
     */

    appendMembers()
}