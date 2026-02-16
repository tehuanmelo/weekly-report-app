import { getLastMonday } from "./dateUtils.js"

const monday =  getLastMonday()


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, idx) => {
    const date = new Date(monday)
    date.setDate(date.getDate() + idx)
    return `${day}, ${date.toLocaleDateString("en-GB",{
        day: "2-digit",
        month: "short",
        year: "2-digit"
    }).replaceAll(" ", "-")}`
})

console.log(days)