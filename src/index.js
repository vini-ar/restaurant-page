import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

import "./styles.css";

const content = document.querySelector("#content")
const menuButton = document.querySelector("#menu-btn")
const homeButton = document.querySelector("#home-btn")
const contactButton = document.querySelector("#contact-btn")


const home = loadHome()
const menu = loadMenu()
const contact = loadContact()


const insertSection = (name) => {
    content.replaceChildren()
    name.forEach((item) => {
        content.append(item)
    })
}

window.addEventListener("load", insertSection(home))


menuButton.addEventListener("click", () => {
    insertSection(menu)
})

homeButton.addEventListener("click", () => {
    insertSection(home)
})
contactButton.addEventListener("click", () => {
    insertSection(contact)
})