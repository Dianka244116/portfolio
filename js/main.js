window.onload = function () {
    let bars = document.querySelectorAll("progress");

    for (let i = 0; i < bars.length; i++) {
        let bar = bars[i];
        let target = parseInt(bar.getAttribute("value"));
        bar.value = 0;

        let current = 0;

        let timer = setInterval(function () {
            if (current < target) {
                current++;
                bar.value = current;
            } else {
                clearInterval(timer);
            }
        }, 10);
    }
};



