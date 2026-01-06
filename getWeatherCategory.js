
export function getWeatherCategory(temp){
    if (typeof temp !== "number"){
        throw new Error("invalid temp");
    }
    if (temp < 0){
        return "freezing"
    }
    if (temp >= 0 && temp <= 15){
        return "cold"
    }
    if (temp >= 16 && temp <= 25){
        return "cool"
    }
    if (temp >= 26 && temp <= 35){
        return "warm"
    } else {
        return "hot"
    }
}