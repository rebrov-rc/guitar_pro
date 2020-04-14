var inCashDesk = document.querySelector('.cart-wrap');
var home = document.querySelector('.home');
var header = document.querySelector('header');
var page = document.querySelector('.page');
// ==========================================
home.onclick = function () {
    window.location.href = '../pages/home.html';
};
inCashDesk.onclick = function () {
    window.location.href = '../pages/pay.html';
};
// ==========================================
// ==========================================
window.onscroll = function () {
    if (window.pageYOffset > 200) {
        // console.log('')
        header.style.position = 'fixed';
        page.style.marginTop = '3em';
    }
    else if (window.pageYOffset < 200) {
        header.style.position = 'relative';
        page.style.marginTop = '0';
    }
};
