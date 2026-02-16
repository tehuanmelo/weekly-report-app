
export function getLastMonday() {
    const today = new Date()
    today.setHours(0,0,0,0)

    const idx = () => {
        const idx = today.getDay()
        if (idx === 0) return 7
        return idx
    }

    const monday = new Date(today)
    const day = idx()
    monday.setDate(today.getDate() - (day - 1))
    if (day >= 1 && day <= 2) monday.setDate(monday.getDate() - 7)
    return monday
}

export function getFormatedDate(idx) {
    const day = getLastMonday()
    day.setDate(day.getDate() + (idx - 1))
    const dayString = day.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
    }).replace(" ", "-")
    return dayString
}

export function getWeekReport() {
    
    const monday = getLastMonday()
    const sunday = new Date(monday)
    sunday.setDate(sunday.getDate() + 6)
    const monStr = monday.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
    }).replace(" ", "-")
    const sunStr = sunday.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
    }).replace(" ", "-")
    return `${monStr} to ${sunStr}`
}
