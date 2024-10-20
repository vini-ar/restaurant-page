
const setAttribute = (element, attributes) => {
    for(const[key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value)
    }
}

const createElement = (tag, content="", attributes = {}) => {
    const element = document.createElement(tag)
    element.textContent = content
    setAttribute(element, attributes)

    return element
}

export const ElementFactory = () => {
    return {
        div: (content, attributes) => createElement('div', content, attributes),
        p: (content, attributes) => createElement('p', content, attributes),
        h1: (content, attributes) => createElement('h1', content, attributes),
        span: (content, attributes) => createElement('span', content, attributes)
    }; 
}