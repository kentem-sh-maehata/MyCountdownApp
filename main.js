{
    var btn_1 = document.getElementById('btn');
    var p_1 = document.querySelector('p');
    btn_1 === null || btn_1 === void 0 ? void 0 : btn_1.addEventListener('click', function () {
        if (p_1 === null || p_1 === void 0 ? void 0 : p_1.textContent)
            p_1.textContent = "00:03";
        btn_1.disabled = true;
        btn_1.classList.add('enabled');
        var endTime = new Date().getTime() + 3000;
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
                btn_1.classList.remove('enabled');
                btn_1.disabled = false;
            }
        }, 100);
    });
}
