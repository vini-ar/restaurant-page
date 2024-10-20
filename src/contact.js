import { ElementFactory } from "./elementFactory";

const factory = ElementFactory();

const header = () => {
    const headerContainer = factory.div()
    const h1 = factory.h1("Contact Us", {})

    headerContainer.append(h1)

    return headerContainer
}

const firstContact = () => {
    const firstContactContainer = factory.div()
    const name = factory.h1("Leticia", {})
    const position = factory.p("Chef", {})
    const number = factory.p("555-555-5555", {})
    const email = factory.p("totallyRealEmail@notFake.com", {})

    firstContactContainer.append(name, position, number, email)

    return firstContactContainer

}

const secondContact = () => {
    const secondContactContainer = factory.div()
    const name = factory.h1("Marcus", {})
    const position = factory.p("Owner", {})
    const number = factory.p("555-555-5555", {})
    const email = factory.p("totallyRealEmail@notFake.com", {})

    secondContactContainer.append(name, position, number, email)

    return secondContactContainer
}



export const loadContact = () => {
    let sections = [header(), firstContact(), secondContact()];

    return sections
}