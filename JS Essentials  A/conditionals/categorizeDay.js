function categorizeDay(temperature, weatherConditions) {
    if (temperature >= 25) {
        if (weatherConditions === 'sunny') {
        return 'Beach day'} 
    } 
    
    else if (temperature >= 25) { 
        if (weatherConditions === 'sunny') {
        return 'Park day'}
    } 
    else if (temperature < 15) {
        if (weatherConditions === 'rainy') {
        return 'Stay home'}
    }
    else if (temperature >= 15) {
        if (weatherConditions === 'rainy') {
        return 'Museum day'} 
    } 
    
    else return 'Casual Day'




}



/* ORIGINAL CODE
function categorizeDay(temperature, weatherConditions) {
    if (temperature >= 25 && weatherConditions === 'sunny') {
    return 'Beach day' 
    } else if (temperature >= 25 && weatherConditions === 'sunny') { 
        return 'Park day'
    } else if (temperature < 15 && weatherConditions === 'rainy') {
        return 'Stay home'
    } else if (temperature >= 15 && weatherConditions === 'rainy') {
        return 'Museum day'
    } else return 'Casual Day'

}
categorizeDay(26, sunny)
categorizeDay(25, sunny)
categorizeDay(25, rainy)
categorizeDay(15, rainy)
categorizeDay(16, rainy)
categorizeDay(14, rainy)

console.log(categorizeDay) */ 