export const formateDate = (date) => {
    const event = new Date(date)

    const option = {
        weekday : 'short',
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    }

    return event.toLocaleDateString('en-EN', option)
}