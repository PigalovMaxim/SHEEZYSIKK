const momEllyTee = {
  img: "./imgs/index/MomEllyTee.png",
  name: "MOM ELLY TEE",
  price: "2 490₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const momEllyPants = {
  img: "./imgs/index/MomEllyPants.png",
  name: "MOM ELLY TEE",
  price: "2 490₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const capsuleHoodie = {
  img: "./imgs/index/CapsuleHoodie.png",
  name: "WW CAPSULE HOODIE",
  price: "4 600₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const capsuleTee1 = {
  img: "./imgs/index/CapsuleTee1.png",
  name: "WW CAPSULE 'CHEAP' TEE",
  price: "1 720₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const capsuleTee2 = {
  img: "./imgs/index/CapsuleTee2.png",
  name: "WW CAPSULE 'VASILY' TEE",
  price: "2 200₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const capsulePants = {
  img: "./imgs/index/CapsulePants.png",
  name: "WW CAPSULE PANTS",
  price: "4 600₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const lastTee1 = {
  img: "./imgs/index/section5tee1.png",
  name: "SIKKBODY TEE WHITE",
  price: "2 000₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const lastTee2 = {
  img: "./imgs/index/section5tee2.png",
  name: "COSTS A LOT TEE",
  price: "2 190₽",
  art: Math.round(Math.random() * 8999 + 1000)
};
const bucketContent = [];
let choosenSize = 'M';

const sizesBtns = document.querySelectorAll('.size');
sizesBtns.forEach((value, index) => {
    value.addEventListener('click', () => {
        for(let i = 0; i < sizesBtns.length; i++) {
            sizesBtns[i].classList.remove('active');
            if(i === index) {
                sizesBtns[i].classList.add('active');
                choosenSize = sizesBtns[i].innerHTML;
                document.getElementById('addProduct').innerHTML = 'Добавить в корзину';
            }
        }
    })
});

document.getElementById('momEllyTeeProd').addEventListener('click', () => openProduct(momEllyTee));
document.getElementById('aboutUsBtn').addEventListener('click', () => document.getElementById('aboutUsPoint').scrollIntoView());
document.getElementById('logo').addEventListener('click', () => window.scrollTo(0, 0));

document.getElementById('goBack').addEventListener('click', () => {
    document.getElementById('wrapperProduct').classList.add('hidden');
});
document.getElementById('continuePurchase').addEventListener('click', () => {
    document.getElementById('bucketWindow').classList.add('menuHidden');
});
document.getElementById('bucketBtn').addEventListener('click', () => {
    document.getElementById('bucketWindow').classList.remove('menuHidden');
    drawItems();
});

function openProduct(product) {
    document.getElementById('wrapperProduct').classList.remove('hidden');
    document.getElementById('productName').innerHTML = product.name;
    document.getElementById('productPriceNumber').innerHTML = product.price;
    document.getElementById('productImg').setAttribute('src', product.img);
    document.getElementById('addProduct').remove();
    const btn = document.createElement('button');
    btn.setAttribute('id', 'addProduct');
    btn.innerHTML = 'Добавить в корзину';
    const wrapper = document.getElementById('controls');
    wrapper.appendChild(btn);
    document.getElementById('addProduct').addEventListener('click', () => {
        bucketContent.push({...product, count: 1, choosenSize});
        document.getElementById('addProduct').innerHTML = 'Товар добавлен';
        document.getElementById('menuBucketItemsCount').innerHTML = bucketContent.length;
        setItemsCount();
        if(!document.getElementById('wrapperProduct').classList.contains('hidden')){
          drawItems();
        }
    });
}
function drawItems() {
    const items = document.getElementById('itemList');
    items.innerHTML = '';
    let purcahsesSum = 0;
    bucketContent.forEach((value, index) => {
        const item = document.createElement('div');
        item.classList.add('item');
        const imageBox = document.createElement('div');
        imageBox.classList.add('image');
        const img = document.createElement('img');
        img.setAttribute('src', value.img);
        imageBox.appendChild(img);
        item.appendChild(imageBox);
        const itemInfo = document.createElement('div');
        itemInfo.classList.add('itemInfo');
        const name = document.createElement('label');
        name.classList.add('itemName');
        name.innerHTML = value.name;
        itemInfo.appendChild(name);

        const itemControls = document.createElement('div');
        itemControls.classList.add('itemControls');

        const left = document.createElement('div');
        left.classList.add('left');
        const artText = document.createElement('div');
        artText.classList.add('art');
        artText.innerHTML = 'Арт:';
        const sizeText = document.createElement('div');
        sizeText.classList.add('size');
        sizeText.innerHTML = 'Размер:';
        const countText = document.createElement('div');
        countText.classList.add('count');
        countText.innerHTML = 'Кол-во:';

        left.appendChild(artText);
        left.appendChild(sizeText);
        left.appendChild(countText);
        itemControls.appendChild(left);

        const right = document.createElement('div');
        right.classList.add('right');

        const art = document.createElement('label');
        art.classList.add('artNum');
        art.innerHTML = value.art;
        right.appendChild(art);

        const size = document.createElement('label');
        size.classList.add('sizeNum');
        size.innerHTML = value.choosenSize;
        right.appendChild(size);

        const sum = document.createElement('div');
        sum.classList.add('count');

        const sumText = document.createElement('label');
        sumText.innerHTML = 'Сумма:';
        sum.appendChild(sumText);

        const sumNumber = document.createElement('span');
        sumNumber.setAttribute('id', 'sumNumber');
        sumNumber.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
        sum.appendChild(sumNumber);
        purcahsesSum += parseInt(value.price.replace(/\D+/g,"")) * value.count;
        
        const countNum = document.createElement('div');
        countNum.classList.add('countNum');

        const countNumNumber = document.createElement('div');
        countNumNumber.classList.add('countNumber');
        countNumNumber.innerHTML = value.count;
        
        const btnPlus = document.createElement('button');
        btnPlus.setAttribute('id', 'btnPlus');
        btnPlus.innerHTML = '+';
        btnPlus.addEventListener('click', () => {
            const currNum = parseInt(countNumNumber.innerHTML);
            countNumNumber.innerHTML = currNum + 1;
            value.count = currNum + 1;
            document.getElementById('purchaseSum').innerHTML = 
                parseInt(
                    document.getElementById('purchaseSum').innerHTML.replace(/\D+/g,"")
                ) + parseInt(
                    value.price.replace(/\D+/g,"")
                ) + '₽';
            sumNumber.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
            setItemsCount();
        });
        countNum.appendChild(btnPlus);

        countNum.appendChild(countNumNumber);

        const btnMinus = document.createElement('button');
        btnMinus.setAttribute('id', 'btnMinus');
        btnMinus.innerHTML = '-';
        btnMinus.addEventListener('click', () => {
            const currNum = parseInt(countNumNumber.innerHTML);
            if(currNum === 1) return;
            countNumNumber.innerHTML = currNum - 1;
            value.count = currNum - 1;
            document.getElementById('purchaseSum').innerHTML = 
                parseInt(
                    document.getElementById('purchaseSum').innerHTML.replace(/\D+/g,"")
                ) - parseInt(
                    value.price.replace(/\D+/g,"")
                ) + '₽';
            sumNumber.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
            setItemsCount();
        });
        countNum.appendChild(btnMinus);

        right.appendChild(countNum);
        itemControls.appendChild(right);
        itemInfo.appendChild(itemControls);
        itemInfo.appendChild(sum);
        item.appendChild(itemInfo);
        
        const btnCross = document.createElement('button');
        btnCross.setAttribute('id', 'btnCross');
        btnCross.addEventListener('click', () => {
            bucketContent.splice(index, 1);
            drawItems();
        });
        item.appendChild(btnCross);
        items.appendChild(item);
    });
    setItemsCount();
    document.getElementById('purchaseSum').innerHTML = purcahsesSum + '₽';
}
function setItemsCount() {
    let count = 0;
    bucketContent.forEach(value => count += value.count);
    document.getElementById('menuBucketItemsCount').innerHTML = count;
}