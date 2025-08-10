type Attributes = {
    [key: string]: string
}

/**
 * Create element function
 */
export function createElement(tagName: string, attributes: Attributes) {
    const el = document.createElement(tagName)
    for (let [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, value)
    }

    return el
}