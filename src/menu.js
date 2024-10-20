import { ElementFactory } from "./elementFactory"

const factoryElement = ElementFactory()


const menuFactory = (() => {
    const bevarage = (name="",description="", price="") => {
        return {name, description, price}
    }
    return {
        bevarage: (name, description, price) => bevarage(name, description, price)
    }
})()

const beveragesDiv = () => {
    const container = factoryElement.div("", {class: "restaurant restaurant-beverages"})
    const mocha = menuFactory.bevarage("Golden Lager", "A crisp and refreshing golden lager with a light malt flavor and a smooth finish. Perfect for any occasion.", "$5.00")
    const latte = menuFactory.bevarage("Hoppy IPA", "A bold India Pale Ale packed with intense hop aromas and a bitter yet balanced citrusy flavor.", "$6.50")
    const darkStout = menuFactory.bevarage("Dark Stout", "A rich and creamy stout with notes of roasted coffee, chocolate, and caramel. Full-bodied and perfect for stout lovers.", "$7.00")
    const wheatAle = menuFactory.bevarage("Wheat Ale", "A light and fruity wheat ale brewed with a hint of orange peel and coriander for a refreshing taste.", "$5.75")
    
    let bevarageList = [mocha, latte, darkStout, wheatAle]

    bevarageList.forEach((bevarage) => {
        const div = factoryElement.div("")
        const h1 = factoryElement.h1(bevarage.name)
        const p = factoryElement.p(bevarage.description)
        const span = factoryElement.span(bevarage.price)
        
        div.append(h1, p, span)

        container.append(div)
    })
    
    return container
}

export const loadMenu = () => {
    const sections = [beveragesDiv()]
    return sections
}
