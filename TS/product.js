var addProd = document.querySelector('.addProduct');
var addProdWrap = document.querySelector('.addProdWrap');
var home = document.querySelector('.home');
var sec = document.querySelector('section');
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
home.onclick = function () {
    window.location.href = '../pages/home.html';
};
// ============================================
prodContainer.innerHTML = "\n            <div class=\"prod-container\">\n            <div class=\"block-1\"></div>\n            <!--  -->\n            <div class=\"prod-main-block flex\">\n                <div class=\"prod-img-block\">  \n                    <div class=\"prod-img-demo flex-reg\">\n                        <img src=\"https://spb-music.ru/upload/resize_cache/iblock/549/440_400_1/54953cc988c916ba036856ad35621303.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"prod-img-line flex\">\n                        <div>\n                        <img src=\"https://spb-music.ru/upload/resize_cache/iblock/549/440_400_1/54953cc988c916ba036856ad35621303.jpg\" alt=\"\">\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"prod-cost-block flex\">\n                    <div class=\"prod-cost-block__center\">\n                        <div class=\"prod-cost-block__name\">\n                            <span>\n                                SCHECTER C-6 DELUXE SWHT\n                            </span>\n                        </div>\n                        <div class=\"sumOfCost\">\n                            <span>$ 1550</span>\n                        </div>\n                        <div class=\"count\">\n                            <input type=\"\">\n                        </div>\n                        <div class=\"pay-wrap\">\n                            <div class=\"pay-btn\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--  -->\n            <div class=\"description-comments\"></div>\n            </div>\n";
