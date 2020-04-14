const addProd: HTMLElement = document.querySelector('.addProduct');
const addProdWrap: HTMLElement = document.querySelector('.addProdWrap');
// const sec: HTMLElement = document.querySelector('section');
const innerItems: HTMLElement = document.querySelector('.pay-added-products');
const totalPay: HTMLElement = document.querySelector('.pay-added-prod__total-sum span');




numIndex = localStorage.getItem('add');
if( numIndex === 0 ){
    addProdWrap.style.display = 'none';
}else if( numIndex === null ){
    addProdWrap.style.display = 'none';
}else if( numIndex > 0 ){ 
    
    addProd.innerText =  numIndex;
    addProdWrap.style.display = 'flex';
}
if ( numIndex < 0 ){numIndex = 0};


// ============================================
let storInfo = localStorage.getItem('storageI');
let parsedPay = JSON.parse(storInfo);
// innerItems.innerHTML = parsedPay
let sumPlus: number = 0;
catalog.forEach(({id,name,img,prise}, i ) => {
    parsedPay.forEach((itemP, iP ) => {
        if ( catalog[i].id === itemP ) {
            console.log(catalog[i].name)
            innerItems.innerHTML += `
            <div class="pay-added-products__each-item flex">
            <div class="each-item-img-wrap">
                <img src="${catalog[i].img}" alt="">
            </div>
            <div class="each-item-name flex-reg">
                <span>
                ${catalog[i].name}
                </span>
            </div>
            <div class="each-item-count flex-reg">
            <input min='0' max="10" type="number" value="0">
            </div>
            <div class="each-item-cost flex-reg">
                <span>
                $ ${catalog[i].prise}
                </span>
            </div>
            <div class="each-item-remove flex-reg">
                <span>удалить</span>
            </div>
        </div>
            `
        // ===================
        let nll = +catalog[i].prise
        sumPlus = sumPlus + nll;
        console.log(sumPlus)
        // console.log(sumPlus + sumPlus)
        // console.log(itemP)
        totalPay.innerHTML = `
           TOTAL: ${+ sumPlus;} 
        ` 

        }


    });

});


// parsedPay.forEach((itemP, iP ) => {

// });
