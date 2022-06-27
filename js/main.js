const tees = [
  {
    img: "./imgs/MomEllyTee.png",
    bigImg: "./imgs/HQItems/mom elly tee.png",
    name: "Mom elly tee",
    price: "2 490₽",
    oldPrice: null,
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/SocialHelpTee.png",
    bigImg: "./imgs/HQItems/social concept tee2.png",
    name: "SOCIAL HELP TEE",
    price: "1 990₽",
    oldPrice: "2 400₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/SocialConceptTee.png",
    bigImg: "./imgs/HQItems/social concept tee.png",
    name: "SOCIAL CONCEPT TEE",
    price: "1 990₽",
    oldPrice: "2 400₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/CapsuleCheapTee.png",
    bigImg: "./imgs/HQItems/ww tee.png",
    name: 'CAPSULE "CHEAP" TEE',
    price: "1 720₽",
    oldPrice: null,
    art: Math.round(Math.random() * 8999 + 1000)
  },
];
const hoodies = [
  {
    img: "./imgs/index/CapsuleHoodie.png",
    bigImg: "./imgs/HQItems/hood ww.png",
    name: "WW CAPSULE HOODIE",
    price: "4 600₽",
    oldPrice: null,
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/HoldMyHand.png",
    bigImg: "./imgs/HQItems/mom elly hood.png",
    name: "HOLD MY HAND CREWNECK",
    price: "4 600₽",
    oldPrice: "5 900₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/CovidLogoHoodie.png",
    bigImg: "./imgs/HQItems/sheezy hood.png",
    name: "SOCIAL CONCEPT TEE",
    price: "5 590₽",
    oldPrice: "6 700₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
];
const pants = [
  {
    img: "./imgs/CapsuleBlackPants.png",
    bigImg: "./imgs/HQItems/ww pants.png",
    name: "CAPSULE BLACK PANTS",
    price: "4 600₽",
    oldPrice: null,
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/PantsMomElly.png",
    bigImg: "./imgs/HQItems/mom elly pants.png",
    name: "PANTS MOM ELLY",
    price: "6 590₽",
    oldPrice: "8 000₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/PantsRedBlood.png",
    bigImg: "./imgs/HQItems/social concept pants.png",
    name: "PANTS RED BLOOD",
    price: "3 590₽",
    oldPrice: "4 400₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
];
const accessories = [
  {
    img: "./imgs/scarf.png",
    bigImg: "./imgs/HQItems/scarfblack ww.png",
    name: "Scarf",
    price: "3 590₽",
    oldPrice: "4 400₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/Hood.png",
    bigImg: "./imgs/HQItems/kaporblack ww.png",
    name: "hood",
    price: "2 890₽",
    oldPrice: "3 500₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/EarflapMask.png",
    bigImg: "./imgs/HQItems/maskblack2.png",
    name: "EARFLAP MASK BLACK HOLE",
    price: "3 590₽",
    oldPrice: "4 000₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
  {
    img: "./imgs/Sleeves.png",
    bigImg: "./imgs/HQItems/rukava red ww.png",
    name: "sleeves",
    price: "3 590₽",
    oldPrice: "1 700₽",
    art: Math.round(Math.random() * 8999 + 1000)
  },
];
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

document.getElementById('accessoriesLink').addEventListener('click', () => document.getElementById('accessoriesPoint').scrollIntoView());
document.getElementById('teesLink').addEventListener('click', () => document.getElementById('teesPoint').scrollIntoView());
document.getElementById('pantsLink').addEventListener('click', () => document.getElementById('pantsPoint').scrollIntoView());
document.getElementById('hoodiesLink').addEventListener('click', () => document.getElementById('hoodiePoint').scrollIntoView());
document.getElementById('aboutUsBtn').addEventListener('click', () => document.getElementById('aboutUsPoint').scrollIntoView());
document.getElementById('logo').addEventListener('click', () => window.scrollTo(0, 0));

document.getElementById('hideProductCard').addEventListener('click', () => {
    document.getElementById('wrapperProduct').classList.add('hidden');
});
document.getElementById('continuePurchase').addEventListener('click', () => {
    document.getElementById('bucketWindow').classList.add('hidden');
});
document.getElementById('bucketBtn').addEventListener('click', () => {
    document.getElementById('bucketWindow').classList.remove('hidden');
    drawItems();
});

function drawItems() {
    const items = document.getElementById('items');
    items.innerHTML = '';
    let purcahsesSum = 0;
    bucketContent.forEach((value, index) => {
        const item = document.createElement('div');
        item.classList.add('item');
        const img = document.createElement('img');
        img.setAttribute('src', value.img);
        item.appendChild(img);
        const name = document.createElement('label');
        name.classList.add('itemName');
        name.innerHTML = value.name;
        item.appendChild(name);
        const size = document.createElement('label');
        size.classList.add('itemSize');
        size.innerHTML = value.choosenSize;
        item.appendChild(size);
        const art = document.createElement('label');
        art.classList.add('itemArt');
        art.innerHTML = value.art;
        item.appendChild(art);
        const sum = document.createElement('label');
        sum.classList.add('itemSum');
        sum.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
        purcahsesSum += parseInt(value.price.replace(/\D+/g,"")) * value.count;
        const count = document.createElement('div');
        count.classList.add('itemCount');
        const btnMinus = document.createElement('button');
        btnMinus.setAttribute('id', 'controlsBtnMinus');
        btnMinus.addEventListener('click', () => {
            const currNum = parseInt(countNum.innerHTML);
            if(currNum === 1) return;
            countNum.innerHTML = currNum - 1;
            value.count = currNum - 1;
            document.getElementById('itemsSumNumber').innerHTML = 
                parseInt(
                    document.getElementById('itemsSumNumber').innerHTML.replace(/\D+/g,"")
                ) - parseInt(
                    value.price.replace(/\D+/g,"")
                ) + '₽';
            sum.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
            setItemsCount();
        });
        count.appendChild(btnMinus);
        const countNum = document.createElement('span');
        countNum.classList.add('count');
        countNum.innerHTML = value.count;
        count.appendChild(countNum);
        const btnPlus = document.createElement('button');
        btnPlus.setAttribute('id', 'controlsBtnPlus');
        btnPlus.addEventListener('click', () => {
            const currNum = parseInt(countNum.innerHTML);
            countNum.innerHTML = currNum + 1;
            value.count = currNum + 1;
            document.getElementById('itemsSumNumber').innerHTML = 
                parseInt(
                    document.getElementById('itemsSumNumber').innerHTML.replace(/\D+/g,"")
                ) + parseInt(
                    value.price.replace(/\D+/g,"")
                ) + '₽';
            sum.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
            setItemsCount();
        });
        count.appendChild(btnPlus);
        item.appendChild(count);
        item.appendChild(sum);
        const btnCross = document.createElement('button');
        btnCross.setAttribute('id', 'controlsBtnCross');
        btnCross.addEventListener('click', () => {
            bucketContent.splice(index, 1);
            drawItems();
        });
        item.appendChild(btnCross);
        items.appendChild(item);
    });
    setItemsCount();
    document.getElementById('itemsSumNumber').innerHTML = purcahsesSum + '₽';
}
function setItemsCount() {
    let count = 0;
    bucketContent.forEach(value => count += value.count);
    document.getElementById('menuBucketItemsCount').innerHTML = count;
    document.getElementById('itemsCountNumber').innerHTML = count;
}
function loadProducts() {
  const teeRow = document.getElementById("teeProducts");
  const hoodieRow = document.getElementById("hoodieProducts");
  const pantsRow = document.getElementById("pantsProducts");
  const accessoriesRow = document.getElementById("accessoriesProducts");

  createItems(tees, teeRow, '');
  createItems(hoodies, hoodieRow, 'hoodie');
  createItems(pants, pantsRow, 'pants');
  createItems(accessories, accessoriesRow, 'accessories');
}
function createItems(arr, row, classname) {
  arr.forEach((value) => {
    const wrap = document.createElement('div');
    wrap.classList.add('productCard');
    if(classname !== '') wrap.classList.add(classname);
    const img = document.createElement('img');
    img.setAttribute('src', value.img);
    const name = document.createElement('label');
    name.innerHTML = value.name;
    name.classList.add('productName');
    const price = document.createElement('label');
    price.innerHTML = value.price;
    price.classList.add('productPrice');
    const oldPrice = document.createElement('label');
    oldPrice.innerHTML = value.oldPrice;
    oldPrice.classList.add('productOldPrice');
    wrap.appendChild(img);
    wrap.appendChild(name);
    wrap.appendChild(price);
    wrap.appendChild(oldPrice);
    wrap.addEventListener('click', () => linkItemToInfo(value));
    row.appendChild(wrap);
  });
}
function linkItemToInfo(item) {
    document.getElementById('wrapperProduct').classList.remove('hidden');
    document.getElementById('productImg').setAttribute('src', item.bigImg);
    document.getElementById('productName').innerHTML = item.name;
    document.getElementById('productPrice').innerHTML = item.price;
    document.getElementById('addProduct').remove();
    const btn = document.createElement('button');
    btn.setAttribute('id', 'addProduct');
    btn.innerHTML = 'Добавить в корзину';
    const wrapper = document.getElementById('wrapperId');
    wrapper.appendChild(btn);
    document.getElementById('addProduct').addEventListener('click', () => {
        bucketContent.push({...item, count: 1, choosenSize});
        document.getElementById('addProduct').innerHTML = 'Товар добавлен';
        document.getElementById('menuBucketItemsCount').innerHTML = bucketContent.length;
    });
}

loadProducts();
