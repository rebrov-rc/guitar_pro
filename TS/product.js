var addProd = document.querySelector('.addProduct');
var addProdWrap = document.querySelector('.addProdWrap');
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