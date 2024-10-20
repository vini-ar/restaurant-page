import { ElementFactory } from "./elementFactory";

const factory = ElementFactory();

const restaurantName = () => {
    const div = factory.div("",{class: "restaurant restaurant-name"});
    const h1 = factory.h1("Leticia Cafe's", {});

    div.append(h1)

    return div
}

const restaurantHours = () => {
    const div = factory.div("", {class:"restaurant restaurant-hours"})
    const h1 = factory.h1("Hours", {});
    const hours = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ]

    div.append(h1)

    hours.forEach((hour) => {
        const p = factory.p(hour, {})
        div.append(p)
    })

    return div

}
const restaurantLocation = () => {
    const div = factory.div("", {class: "restaurant restaurant-location"})
    const h1 = factory.h1("Location", {}) 
    const p = factory.p("123 Forest Drive, Forestville, Maine", {})

    div.append(h1, p)

    return div
}

export const loadHome = () => {
    const sections = [restaurantName(), restaurantHours(), restaurantLocation()]
    
    return sections
} 

