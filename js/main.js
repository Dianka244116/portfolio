'use strict';
window.onload = function () {
    const bars = document.querySelectorAll("progress");

    for (let index = 0; index < bars.length; i++) {
        const bar = bars[index];
        let target = parseInt(bar.getAttribute("value"));
        bar.value = 0;

        const current = 0;

        const timer = setInterval(function () {
            if (current < target) {
                current++;
                bar.value = current;
            } else {
                clearInterval(timer);
            }
        }, 4);
    }
};



    
    



