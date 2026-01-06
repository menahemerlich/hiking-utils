
export function formatHikeName(name, location){
    if (typeof name !== "string" || typeof location !== 'string'){
        throw new Error("Invalid hike info. ");
    }
    return `Hike: ${name} (${location})`
}