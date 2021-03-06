const cotalogWrap: HTMLElement = document.querySelector('.catalog-wrap');
const addProd: HTMLElement = document.querySelector('.addProduct');
const addProdWrap: HTMLElement = document.querySelector('.addProdWrap');
let idProd: string[] = [];
const section: HTMLElement = document.querySelector('section');
const page: HTMLElement = document.querySelector('.page');


const home: HTMLElement = document.querySelector('.home');
home.onclick = () => {
    window.location.href = '../pages/home.html'
}



let storageGet = localStorage.getItem('storageI');
let parsed = JSON.parse(storageGet);
if ( parsed === null ) parsed = [];
idProd = parsed;


catalog.forEach(({id,name,img,prise}, i ) => {

    cotalogWrap.innerHTML += `
        <div class="producr-cart">
        <div class="producr-cart__title">
            <span>
                ${catalog[i].name}
            </span>
        </div>
        <div class="producr-cart__img flex-reg">
            <img src="${catalog[i].img}" alt="">
        </div>
        <div class="producr-cart__cost">${catalog[i].prise}</div>
        <div class="producr-cart__btn">
            <div class="btn flex-reg">купить</div>
        </div>
        </div>
`

});

const btn: NodeListOf<Element> = document.querySelectorAll('.btn')

// console.log(catalog[1])

catalog.forEach(({id,name,img,prise}, i) => {

        // ============================================
        for (let n = 0; n < parsed.length; n++) {  
            if (id === parsed[n]) {
                    // console.log(btn[i])
                    btn[i].style.backgroundColor = 'rgb(204, 109, 0)';
                    btn[i].innerHTML = 'Убрать из корзины';
            }
        }
        // ============================================
    }
)

let numIndex;                       
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

// console.log(numIndex)
btn.forEach((item, i)  => {
        item.onclick = () => {

            let check = idProd.indexOf(catalog[i].id)
            if ( check === -1 ) {
                    idProd.push(catalog[i].id);
                    localStorage.setItem('storageI', JSON.stringify(idProd));
                    // ==================
                    if ( btn[i].style.backgroundColor === 'rgb(204, 109, 0)' ) {
                        idProd.splice(check , 1);
                        localStorage.setItem('storageI', JSON.stringify(idProd));
                        // ==================
                        numIndex--;
                        addProd.innerText = numIndex;
                        // ==================
                        btn[i].style.backgroundColor = '';
                        btn[i].innerHTML = 'купить';
                    }else {
                        btn[i].style.backgroundColor = 'rgb(204, 109, 0)';
                        btn[i].innerHTML = 'Убрать из корзины';
                        // =============================
                        numIndex++;
                        addProd.innerText = numIndex;
                    }
            } else {
                idProd.splice(check , 1);
                localStorage.setItem('storageI', JSON.stringify(idProd));
                // ==================
                btn[i].style.backgroundColor = '';
                btn[i].innerHTML = 'купить';
                // ==================
                numIndex--;
                addProd.innerText = numIndex;              
            }
            // ====
            if( numIndex > 0 ) {
                addProdWrap.style.display = 'flex';
            }else { addProdWrap.style.display = 'none'; }
            // 
            localStorage.add = numIndex;
        }
    }
)
// ===========================================
// const prodContainer: HTMLElement = document.querySelector('.prod-container');
const chosedProduct: NodeListOf<Element> = document.querySelectorAll('.producr-cart__img');
let addNum;
chosedProduct.forEach((item,i) => {
    chosedProduct[i].onclick = () => {
        // window.location.href = '../pages/product.html';
        section.style.backgroundColor = '#ffffff'
        section.innerHTML = `
        <div class="prod-container">
        <div class="block-1"></div>
        <!--  -->
        <div class="prod-main-block flex">
            <div class="prod-img-block">  
                <div class="prod-img-demo flex-reg">
                    <img src="${catalog[i].img}" alt="">
                </div>
                <div class="prod-img-line flex">
                    <div>
                    <img src="${catalog[i].img}" alt="">

                    </div>
                </div>
            </div>
            <div class="prod-cost-block flex">
                <div class="prod-cost-block__center">
                    <div class="prod-cost-block__name">
                        <span>
                        ${catalog[i].name}
                        </span>
                    </div>
                    <div class="sumOfCost">
                        <span>${catalog[i].prise}</span>
                    </div>
                    <div class="count">
                        <input type="">
                    </div>
                    <div class="pay-wrap">
                        <div class="pay-btn">Добавить в корзину</div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="description-comments"></div>
        </div>
`;

    }
})