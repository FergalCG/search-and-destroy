'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let current = linkedlist.head
    let hashMap = {}
    while(current.next) {
        if(hashMap[current.value]) {
            return true
        }else {
            hashMap[current.value] = true
            current = current.next
        }
    }
    return false
};

const findLoop = (linkedlist) => {
    let current = linkedlist.head
    let hashMap = {}
    while(current.next) {
        if(hashMap[current.value]) {
            return current.value
        }else {
            hashMap[current.value] = true
            current = current.next
        }
    }
    return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop, findLoop