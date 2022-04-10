'use strict';
let lockBtn = document.querySelector(".lock");
let lockFlag = true;
// <!-- fa-unlock-alt -->
// <!-- fa-lock -->
lockBtn.addEventListener("click", function () {
    let taskDescElemArr = document.querySelectorAll(".ticket-desc");
    if (lockFlag == true) {
        lockBtn.classList.remove("fa-lock");
        lockBtn.classList.add("fa-unlock-alt");
        taskDescElemArr.forEach(function(taskDescElem){
            taskDescElem.setAttribute("contenteditable","true");
        })
        //  event listener  keydown -> local storage
        // blur

    }else {
        lockBtn.classList.remove("fa-unlock-alt");
        lockBtn.classList.add("fa-lock");
        taskDescElemArr.forEach(function(taskDescElem){
            taskDescElem.setAttribute("contenteditable","false");
        })
    }
    lockFlag = !lockFlag;
})
console.log('in js');


console.log('nono');
let b = 10;
console.log('for main');

console.log('nono');
let c = 10;
console.log('for main');

console.log('nono');
let a = 10;
console.log('for main');