
export function kmToMeters(kmNumber){
    if (typeof kmNumber !== "number" || kmNumber <= 0){
        throw new Error("invalid number.");
    }
    return kmNumber * 1000
}

export function caloriesBurned(weightInKg, distanceInKm){
    if (typeof weightInKg !== "number" || typeof distanceInKm !== "number" || weightInKg <= 0 || distanceInKm <=0){
        throw new Error("invalid number.");
    }
    const calories = weightInKg * distanceInKm * 1.036
    return calories
}

