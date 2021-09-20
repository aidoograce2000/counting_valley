
function countingValleys(steps, path) {
    // Write your code here
    let sea_level = 0
    let valley = 0
    for (let i = 0; i < steps; i++) {
        if(path[i] === 'U'){
            sea_level = sea_level + 1
        }
        if(path[i] === 'D'){
            sea_level = sea_level - 1
        }
       
        if(sea_level < 0){
            valley = valley + 1
        }
    }
    if(sea_level != 0) {
        return 0
    } else {
        return Math.ceil(valley/5)
    }

}

console.log(countingValleys(8, 'UDDDUDUU'))
