export const getDateString = (date) => {
    const months = [
        "янв.",
        "фев.",
        "марта",
        "апр.",
        "мая",
        "июня",
        "июля",
        "авг.",
        "сент.",
        "окт.",
        "нояб.",
        "дек."
    ]

    const dt = new Date(date)

    return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}`
}
