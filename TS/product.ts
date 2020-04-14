const addProd: HTMLElement = document.querySelector('.addProduct');
const addProdWrap: HTMLElement = document.querySelector('.addProdWrap');
const home: HTMLElement = document.querySelector('.home');
const sec: HTMLElement = document.querySelector('section');



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

home.onclick = () => {
    window.location.href = '../pages/home.html';
}
// ============================================
prodContainer.innerHTML = `
            <div class="prod-container">
            <div class="block-1"></div>
            <!--  -->
            <div class="prod-main-block flex">
                <div class="prod-img-block">  
                    <div class="prod-img-demo flex-reg">
                        <img src="https://spb-music.ru/upload/resize_cache/iblock/549/440_400_1/54953cc988c916ba036856ad35621303.jpg" alt="">
                    </div>
                    <div class="prod-img-line flex">
                        <div>
                        <img src="https://spb-music.ru/upload/resize_cache/iblock/549/440_400_1/54953cc988c916ba036856ad35621303.jpg" alt="">

                        </div>
                    </div>
                </div>
                <div class="prod-cost-block flex">
                    <div class="prod-cost-block__center">
                        <div class="prod-cost-block__name">
                            <span>
                                SCHECTER C-6 DELUXE SWHT
                            </span>
                        </div>
                        <div class="sumOfCost">
                            <span>$ 1550</span>
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
