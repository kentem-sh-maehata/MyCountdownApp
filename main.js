{
    var btn = document.getElementById('btn');
    var p_1 = document.querySelector('p');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
        var endTime = new Date().getTime() + 3000;
        console.log(new Date().getTime());
        console.log(endTime);
        var setinterval = setInterval(function () {
            var remain = endTime - new Date().getTime();
            console.log(remain);
            if (remain < 2000 && (p_1 === null || p_1 === void 0 ? void 0 : p_1.textContent)) {
                if (p_1 === null || p_1 === void 0 ? void 0 : p_1.textContent)
                    p_1.textContent = "00:02";
            }
            if (remain < 1000) {
                if (p_1 === null || p_1 === void 0 ? void 0 : p_1.textContent)
                    p_1.textContent = "00:01";
            }
            if (remain < 0) {
                if (p_1 === null || p_1 === void 0 ? void 0 : p_1.textContent)
                    p_1.textContent = "00:00";
                clearInterval(setinterval);
            }
        }, 100);
    });
}
