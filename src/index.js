import { loadHome } from "./home";
import { loadMenu } from "./menu";
import "./styles.css";

const content = document.querySelector("#content")
const menuButton = document.querySelector("#menu-btn")
const homeButton = document.querySelector("#home-btn")

const menuSections = loadMenu()
const homeSections = loadHome()

const homeContent = () => {
    cleanContent()
    homeSections.forEach((item) => {
        content.append(item)
    })
}

const cleanContent = () => {
    content.replaceChildren()
}

const menuContent = () => {
    cleanContent()
    menuSections.forEach((item) => {
        content.append(item)
    })
}

window.addEventListener("load", homeContent())



menuButton.addEventListener("click", () => {
    menuContent()
})

homeButton.addEventListener("click", () => {
    homeContent()
})