var cotalogWrap = document.querySelector('.catalog-wrap');
var addProd = document.querySelector('.addProduct');
var addProdWrap = document.querySelector('.addProdWrap');
var idProd = [];
var storageGet = localStorage.getItem('storageI');
var parsed = JSON.parse(storageGet);
if (parsed === null)
    parsed = [];
idProd = parsed;
catalog.forEach(function (_a, i) {
    var id = _a.id, name = _a.name, img = _a.img, prise = _a.prise;
    cotalogWrap.innerHTML += "\n        <div class=\"producr-cart\">\n        <div class=\"producr-cart__title\">\n            <span>\n                " + catalog[i].name + "\n            </span>\n        </div>\n        <div class=\"producr-cart__img flex-reg\">\n            <img src=\"" + catalog[i].img + "\" alt=\"\">\n        </div>\n        <div class=\"producr-cart__cost\">" + catalog[i].prise + "</div>\n        <div class=\"producr-cart__btn\">\n            <div class=\"btn flex-reg\">\u043A\u0443\u043F\u0438\u0442\u044C</div>\n        </div>\n        </div>\n";
});
var btn = document.querySelectorAll('.btn');
// console.log(catalog[1])
catalog.forEach(function (_a, i) {
    var id = _a.id, name = _a.name, img = _a.img, prise = _a.prise;
    // ============================================
    for (var n = 0; n < parsed.length; n++) {
        if (id === parsed[n]) {
            console.log(btn[i]);
            btn[i].style.backgroundColor = 'rgb(204, 109, 0)';
            btn[i].innerHTML = 'Убрать из корзины';
        }
    }
    // ============================================
});
var numIndex;
numIndex = localStorage.getItem('add');
if (numIndex === 0) {
    addProdWrap.style.display = 'none';
}
else if (numIndex === null) {
    addProdWrap.style.display = 'none';
}
else if (numIndex > 0) {
    addProd.innerText = numIndex;
    addProdWrap.style.display = 'flex';
}
console.log(numIndex);
btn.forEach(function (item, i) {
    item.onclick = function () {
        var check = idProd.indexOf(catalog[i].id);
        if (check === -1) {
            idProd.push(catalog[i].id);
            localStorage.setItem('storageI', JSON.stringify(idProd));
            // ==================
            if (btn[i].style.backgroundColor === 'rgb(204, 109, 0)') {
                idProd.splice(check, 1);
                localStorage.setItem('storageI', JSON.stringify(idProd));
                // ==================
                numIndex--;
                addProd.innerText = numIndex;
                // ==================
                btn[i].style.backgroundColor = '';
                btn[i].innerHTML = 'купить';
            }
            else {
                btn[i].style.backgroundColor = 'rgb(204, 109, 0)';
                btn[i].innerHTML = 'Убрать из корзины';
                // =============================
                numIndex++;
                addProd.innerText = numIndex;
            }
        }
        else {
            idProd.splice(check, 1);
            localStorage.setItem('storageI', JSON.stringify(idProd));
            // ==================
            btn[i].style.backgroundColor = '';
            btn[i].innerHTML = 'купить';
            // ==================
            numIndex--;
            addProd.innerText = numIndex;
        }
        // ====
        if (numIndex > 0) {
            addProdWrap.style.display = 'flex';
        }
        else {
            addProdWrap.style.display = 'none';
        }
        // 
        localStorage.add = numIndex;
    };
});
