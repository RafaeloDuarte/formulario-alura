export function equalsIgnoreCase(s1, s2) {
    const strings = [s1.toLowerCase(), s2.toLowerCase()]
    return strings[0] === strings[1]
}