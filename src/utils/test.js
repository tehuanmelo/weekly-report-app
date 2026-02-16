import { getLastMonday } from "./dateUtils.js"

const monday =  getLastMonday()
console.log(monday.toLocaleDateString())
console.log(monday.toISOString().split("T")[0])