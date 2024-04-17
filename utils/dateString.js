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

    const splitDate = date.split(".")

    if (splitDate[0].length == 2 && splitDate[0].charAt(0) == '0')
        splitDate[0] = splitDate[0].charAt(1)

    if (splitDate[1].length == 2 && splitDate[1].charAt(0) == '0')
        splitDate[1] = splitDate[1].charAt(1)

    return `${splitDate[0]} ${months[splitDate[1] - 1]} ${splitDate[2]}`
}
