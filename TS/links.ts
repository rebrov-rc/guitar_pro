const inCashDesk: HTMLElement = document.querySelector('.cart-wrap');
const home: HTMLElement = document.querySelector('.home');
const header: HTMLElement = document.querySelector('header');
const page: HTMLElement = document.querySelector('.page');


// ==========================================
home.onclick = () => {
    window.location.href = '../pages/home.html';
}
inCashDesk.onclick = () => {
    window.location.href = '../pages/pay.html';
}
// ==========================================
// ==========================================

window.onscroll = () => {
    if ( window.pageYOffset > 200 ) {
        // console.log('')
        header.style.position = 'fixed';
        page.style.marginTop = '3em';

    }else if( window.pageYOffset < 200 ){
        header.style.position = 'relative';
        page.style.marginTop = '0';
    }
}
