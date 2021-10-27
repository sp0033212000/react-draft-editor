export const deepClone = <T>(data: T): T => JSON.parse(JSON.stringify(data))
