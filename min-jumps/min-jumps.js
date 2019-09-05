'use strict';

// Complete this algo
const minJumps = arr => {
    let maxStepDistance = 0
    let bestOption = 0
    if(arr[0] >= arr.length-1) {
        return 1
    } else {
        for(let i = 1; i < arr[0]+1; i++) {
            if(arr[i] + i > maxStepDistance) {
                maxStepDistance = arr[i] + i
                bestOption = i
            }
        }
        return 1+minJumps(arr.slice(bestOption))
    }
};

module.exports = minJumps