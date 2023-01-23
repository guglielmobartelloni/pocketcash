export const serializeNonPOJOs = (obj) => {
    // return structuredClone(obj)
    return JSON.parse(JSON.stringify(obj))
}
