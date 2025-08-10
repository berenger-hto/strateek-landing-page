import emailjs from "@emailjs/browser"
import {toast} from "./toast.ts";

/**
 * Send emails. Use only through the contact form
 */
export function sendMail(form: HTMLFormElement) {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

    form.addEventListener("submit", function (e) {
        e.preventDefault()
        buttonState(form, "disabled")
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            this
        )
            .then(() => {
                this.reset()
                toast("Message envoyé ! Nous vous répondrons sous peu.", {type: "success", duration: 5000})
            })
            .catch(e => {
                console.log(e)
                toast("Oups ! Une erreur s'est produite", {type: "error", duration: 5000})
            })
            .finally(() => buttonState(form))
    })
}

/**
 * Toggle button state
 */
const buttonState = (form: HTMLFormElement, state: | "disabled" | "normal" = "normal") => {
    const submitButton = form.querySelector("button[type='submit']")
    if (!submitButton) throw new Error("Bouton de validation introuvable")

    if (state === "disabled") submitButton.setAttribute(state, "")
    else submitButton.removeAttribute("disabled")
}
