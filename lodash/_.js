const _ = {
    clamp(number, lower, upper){
        var lowerClampedValue = Math.max(number, lower)
        var clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue
    },
    inRange(number, start, end){
        if(end===undefined){
            end = start
            start = 0
        }
        if(start>end){
            var temp = end
            end = start
            start = temp
        }
        var isInRange = start <= number && end > number
        return isInRange
    },
    words(string){
        var array = string.split(' ')
        return array
    },
    pad(string, length){
        if(string.length >= length){
            return string
        }
        const startPaddingLength = Math.floor((length - string.length)/2)
        const endPaddingLength = length - string.length - startPaddingLength
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
        return paddedString
    }

}
// var obj = new _
console.log(_.clamp(4,5,6))




// Do not write or modify code below this line.
module.exports = _;