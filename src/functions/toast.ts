//@ts-nocheck

import vanillaToast from "vanilla-toast"
import "vanilla-toast/vanilla-toast.css"

type ToastOptions = {
    type: | "show" | "success" | "error"
    duration?: number
}

const DEFAULT_OPTIONS: ToastOptions = {
    type: "show",
    duration: 5000
}

/**
 * Toast generator
 */
export function toast(message: string, {type, duration}: ToastOptions = DEFAULT_OPTIONS) {
    vanillaToast[type](message, {duration: duration, fadeDuration: 100})
}