export function getValidDate(dateString: string): Date | null {
    const [year, month, day] = dateString.trim().split("-").map(Number)

    if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
        return null
    }

    if (month < 1 || month > 12) {
        return null
    }

    if (day < 1 || day > 31) {
        return null
    }

    if (year < 1000 || year > 9999) {
        return null
    }

    return new Date(year, month - 1, day)
}