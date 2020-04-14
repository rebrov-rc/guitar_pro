var addProd = document.querySelector('.addProduct');
var addProdWrap = document.querySelector('.addProdWrap');
// const sec: HTMLElement = document.querySelector('section');
var innerItems = document.querySelector('.pay-added-products');
var totalPay = document.querySelector('.pay-added-prod__total-sum span');
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
if (numIndex < 0) {
    numIndex = 0;
}
;
// ============================================
var storInfo = localStorage.getItem('storageI');
var parsedPay = JSON.parse(storInfo);
// innerItems.innerHTML = parsedPay
var sumPlus = 0;
catalog.forEach(function (_a, i) {
    var id = _a.id, name = _a.name, img = _a.img, prise = _a.prise;
    parsedPay.forEach(function (itemP, iP) {
        if (catalog[i].id === itemP) {
            console.log(catalog[i].name);
            innerItems.innerHTML += "\n            <div class=\"pay-added-products__each-item flex\">\n            <div class=\"each-item-img-wrap\">\n                <img src=\"" + catalog[i].img + "\" alt=\"\">\n            </div>\n            <div class=\"each-item-name flex-reg\">\n                <span>\n                " + catalog[i].name + "\n                </span>\n            </div>\n            <div class=\"each-item-count flex-reg\">\n            <input min='0' max=\"10\" type=\"number\" value=\"0\">\n            </div>\n            <div class=\"each-item-cost flex-reg\">\n                <span>\n                $ " + catalog[i].prise + "\n                </span>\n            </div>\n            <div class=\"each-item-remove flex-reg\">\n                <span>\u0443\u0434\u0430\u043B\u0438\u0442\u044C</span>\n            </div>\n        </div>\n            ";
            // ===================
            var nll = +catalog[i].prise;
            sumPlus = sumPlus + nll;
            console.log(sumPlus);
            // console.log(sumPlus + sumPlus)
            // console.log(itemP)
            totalPay.innerHTML = "\n           TOTAL: " + +sumPlus;
        }
        " \n\n        }\n\n\n    });\n\n});\n\n\n// parsedPay.forEach((itemP, iP ) => {\n\n// });\n";
    });
});
