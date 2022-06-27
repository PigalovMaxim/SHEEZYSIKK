const acces = [
  {
    img: "./imgs/visuallyImpaired/acc1.png",
    bigImg: "./imgs/HQItems/scarfblack ww.png",
    name: "SCARF",
    price: "3 590₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/acc2.png",
    bigImg: "./imgs/HQItems/kaporblack ww.png",
    name: "HOOD",
    price: "2 890₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/acc3.png",
    bigImg: "./imgs/HQItems/maskblack2.png",
    name: "EARFLAP MASK BLACK HOLE",
    price: "3 590₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/acc4.png",
    bigImg: "./imgs/HQItems/rukava red ww.png",
    name: "SLEEVES",
    price: "3 590₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
];
const hoodies = [
  {
    img: "./imgs/index/CapsuleHoodie.png",
    bigImg: "./imgs/HQItems/hood ww.png",
    name: "WW CAPSULE HOODIE",
    price: "4 600₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/hood2.png",
    bigImg: "./imgs/HQItems/mom elly hood.png",
    name: "HOLD MY HAND CREWNECK",
    price: "4 600₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/hood3.png",
    bigImg: "./imgs/HQItems/sheezy hood.png",
    name: "COVID LOGO HOODIE",
    price: "5 590₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
];
const pants = [
  {
    img: "./imgs/visuallyImpaired/pants1.png",
    bigImg: "./imgs/HQItems/ww pants.png",
    name: "CAPSULE PANTS",
    price: "4 600₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/pants2.png",
    bigImg: "./imgs/HQItems/mom elly pants.png",
    name: "PANTS MOM ELLY",
    price: "6 590₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/pants3.png",
    bigImg: "./imgs/HQItems/social concept pants.png",
    name: "PANTS RED BLOOD",
    price: "3 590₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
];
const tees = [
  {
    img: "./imgs/visuallyImpaired/tee1.png",
    bigImg: "./imgs/HQItems/mom elly tee.png",
    name: "MOM ELLY TEE",
    price: "2 490₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/tee2.png",
    bigImg: "./imgs/HQItems/social concept tee2.png",
    name: "SOCIAL HELP TEE",
    price: "1 990₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/tee3.png",
    bigImg: "./imgs/HQItems/vasya tee.png",
    name: "WW CAPSULE 'VASILY' TEE",
    price: "2 200₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/tee4.png",
    bigImg: "./imgs/HQItems/social concept tee.png",
    name: "SOCIAL CONCEPT TEE",
    price: "1 990₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/tee5.png",
    bigImg: "./imgs/HQItems/sex a lot tee.png",
    name: "COSTS A LOT TEE",
    price: "2 190₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/tee6.png",
    bigImg: "./imgs/HQItems/tee.png",
    name: "SIKKBODY TEE WHITE",
    price: "2 000₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/visuallyImpaired/tee7.png",
    bigImg: "./imgs/HQItems/ww tee.png",
    name: "WW CAPSULE 'CHEAP' TEE",
    price: "1 720₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
];
const bucketContent = [];
let choosenSize = "M";

const sizesBtns = document.querySelectorAll(".size");
sizesBtns.forEach((value, index) => {
  value.addEventListener("click", () => {
    for (let i = 0; i < sizesBtns.length; i++) {
      sizesBtns[i].classList.remove("active");
      if (i === index) {
        sizesBtns[i].classList.add("active");
        choosenSize = sizesBtns[i].innerHTML;
        document.getElementById("addProduct").innerHTML = "Добавить в корзину";
      }
    }
  });
});
document.getElementById('accessories').addEventListener('click', () => {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('accessoriesPage').classList.remove('hidden');
  document.getElementById('teesPage').classList.add('hidden');
  document.getElementById('pantsPage').classList.add('hidden');
  document.getElementById('hoodiePage').classList.add('hidden');
  document.getElementById('wrapperProduct').classList.add('hidden');
  document.getElementById('bucketWindow').classList.add('hidden');
  document.getElementById('contactsPage').classList.add('hidden');
});
document.getElementById('contacts').addEventListener('click', () => {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('accessoriesPage').classList.add('hidden');
  document.getElementById('teesPage').classList.add('hidden');
  document.getElementById('pantsPage').classList.add('hidden');
  document.getElementById('hoodiePage').classList.add('hidden');
  document.getElementById('wrapperProduct').classList.add('hidden');
  document.getElementById('bucketWindow').classList.add('hidden');
  document.getElementById('contactsPage').classList.remove('hidden');
});
document.getElementById('tees').addEventListener('click', () => {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('accessoriesPage').classList.add('hidden');
  document.getElementById('teesPage').classList.remove('hidden');
  document.getElementById('pantsPage').classList.add('hidden');
  document.getElementById('hoodiePage').classList.add('hidden');
  document.getElementById('wrapperProduct').classList.add('hidden');
  document.getElementById('bucketWindow').classList.add('hidden');
  document.getElementById('contactsPage').classList.add('hidden');
});
document.getElementById('pants').addEventListener('click', () => {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('accessoriesPage').classList.add('hidden');
  document.getElementById('teesPage').classList.add('hidden');
  document.getElementById('pantsPage').classList.remove('hidden');
  document.getElementById('hoodiePage').classList.add('hidden');
  document.getElementById('wrapperProduct').classList.add('hidden');
  document.getElementById('bucketWindow').classList.add('hidden');
  document.getElementById('contactsPage').classList.add('hidden');
});
document.getElementById('hoodies').addEventListener('click', () => {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('accessoriesPage').classList.add('hidden');
  document.getElementById('teesPage').classList.add('hidden');
  document.getElementById('pantsPage').classList.add('hidden');
  document.getElementById('hoodiePage').classList.remove('hidden');
  document.getElementById('wrapperProduct').classList.add('hidden');
  document.getElementById('bucketWindow').classList.add('hidden');
  document.getElementById('contactsPage').classList.add('hidden');
});
document.querySelectorAll(".logo").forEach(logo => logo.addEventListener('click', () => {
  document.getElementById('mainPage').classList.remove('hidden');
  document.getElementById('accessoriesPage').classList.add('hidden');
  document.getElementById('teesPage').classList.add('hidden');
  document.getElementById('pantsPage').classList.add('hidden');
  document.getElementById('hoodiePage').classList.add('hidden');
  document.getElementById('wrapperProduct').classList.add('hidden');
  document.getElementById('bucketWindow').classList.add('hidden');
  document.getElementById('contactsPage').classList.add('hidden');
}));
document.querySelectorAll(".bucket").forEach(logo => logo.addEventListener('click', () => {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('accessoriesPage').classList.add('hidden');
  document.getElementById('teesPage').classList.add('hidden');
  document.getElementById('pantsPage').classList.add('hidden');
  document.getElementById('hoodiePage').classList.add('hidden');
  document.getElementById('wrapperProduct').classList.add('hidden');
  document.getElementById('bucketWindow').classList.remove('hidden');
  document.getElementById('contactsPage').classList.add('hidden');
  loadBucket();
}));
function openProduct(item) {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('accessoriesPage').classList.add('hidden');
  document.getElementById('teesPage').classList.add('hidden');
  document.getElementById('pantsPage').classList.add('hidden');
  document.getElementById('hoodiePage').classList.add('hidden');
  document.getElementById('wrapperProduct').classList.remove('hidden');
  document.getElementById('bucketWindow').classList.add('hidden');
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
  });
}
function loadAcces() {
  const wrap = document.getElementById('accProducts');
  wrap.innerHTML = '';
  acces.forEach((value, index) => {
    const product = document.createElement('product');
    product.addEventListener('click', () => openProduct(value));
    product.classList.add('product');
    if(index % 2 === 0) product.classList.add('margins');
    const img = document.createElement('img');
    img.setAttribute('src', value.img);
    product.appendChild(img);
    
    const type = document.createElement('div');
    type.classList.add('type');
    type.innerHTML = 'Изображение товара';
    product.appendChild(type);
    
    const nameText = document.createElement('div');
    nameText.classList.add('nameText');
    nameText.innerHTML = 'Название товара:';
    product.appendChild(nameText);

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = value.name;
    product.appendChild(name);

    const priceText = document.createElement('div');
    priceText.classList.add('priceText');
    priceText.innerHTML = 'Цена:';
    product.appendChild(priceText);

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = value.price;
    product.appendChild(price);

    wrap.appendChild(product);
  });
}
function loadTees() {
  const wrap = document.getElementById('teesProducts');
  wrap.innerHTML = '';
  tees.forEach((value, index) => {
    const product = document.createElement('product');
    product.addEventListener('click', () => openProduct(value));
    product.classList.add('product');
    if(index % 2 === 0) product.classList.add('margins');
    const img = document.createElement('img');
    img.setAttribute('src', value.img);
    product.appendChild(img);
    
    const type = document.createElement('div');
    type.classList.add('type');
    type.innerHTML = 'Изображение товара';
    product.appendChild(type);
    
    const nameText = document.createElement('div');
    nameText.classList.add('nameText');
    nameText.innerHTML = 'Название товара:';
    product.appendChild(nameText);

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = value.name;
    product.appendChild(name);

    const priceText = document.createElement('div');
    priceText.classList.add('priceText');
    priceText.innerHTML = 'Цена:';
    product.appendChild(priceText);

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = value.price;
    product.appendChild(price);

    wrap.appendChild(product);
  });
}
function loadHoodie() {
  const wrap = document.getElementById('hoodieProducts');
  wrap.innerHTML = '';
  hoodies.forEach((value, index) => {
    const product = document.createElement('product');
    product.addEventListener('click', () => openProduct(value));
    product.classList.add('product');
    if(index % 2 === 0) product.classList.add('margins');
    const img = document.createElement('img');
    img.setAttribute('src', value.img);
    product.appendChild(img);
    
    const type = document.createElement('div');
    type.classList.add('type');
    type.innerHTML = 'Изображение товара';
    product.appendChild(type);
    
    const nameText = document.createElement('div');
    nameText.classList.add('nameText');
    nameText.innerHTML = 'Название товара:';
    product.appendChild(nameText);

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = value.name;
    product.appendChild(name);

    const priceText = document.createElement('div');
    priceText.classList.add('priceText');
    priceText.innerHTML = 'Цена:';
    product.appendChild(priceText);

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = value.price;
    product.appendChild(price);

    wrap.appendChild(product);
  });
}
function loadPants() {
  const wrap = document.getElementById('pantsProducts');
  wrap.innerHTML = '';
  pants.forEach((value, index) => {
    const product = document.createElement('product');
    product.addEventListener('click', () => openProduct(value));
    product.classList.add('product');
    if(index % 2 === 0) product.classList.add('margins');
    const img = document.createElement('img');
    img.setAttribute('src', value.img);
    product.appendChild(img);
    
    const type = document.createElement('div');
    type.classList.add('type');
    type.innerHTML = 'Изображение товара';
    product.appendChild(type);
    
    const nameText = document.createElement('div');
    nameText.classList.add('nameText');
    nameText.innerHTML = 'Название товара:';
    product.appendChild(nameText);

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = value.name;
    product.appendChild(name);

    const priceText = document.createElement('div');
    priceText.classList.add('priceText');
    priceText.innerHTML = 'Цена:';
    product.appendChild(priceText);

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = value.price;
    product.appendChild(price);

    wrap.appendChild(product);
  });
}
function loadBucket() {
  const wrap = document.getElementById('items');
  wrap.innerHTML = '';
  let purcahsesSum = 0;
  let countPurchases = 0;
  bucketContent.forEach((value, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    const info = document.createElement('div');
    info.classList.add('info');
    const nameText = document.createElement('div');
    nameText.classList.add('nameText');
    nameText.innerHTML = `ТОВАР: <span>${value.name}</span>`;
    info.appendChild(nameText);
    const count = document.createElement('div');
    count.classList.add('count');
    count.innerHTML = 'КОЛИЧЕСТВО: ';
    const controls = document.createElement('div');
    controls.classList.add('controls');
    const btnMinus = document.createElement('button');

    const sumCount = document.createElement('div');

    btnMinus.setAttribute('id', 'btnMinus');
    btnMinus.innerHTML = '-';
    btnMinus.addEventListener('click', () => {
      const countNum = parseInt(countItem.innerHTML);
      if(countNum === 1) return;
      countItem.innerHTML = countNum - 1;
      value.count = countNum - 1;
      document.getElementById('itemsCountNumber').innerHTML = parseInt(document.getElementById('itemsCountNumber').innerHTML) - 1;
      document.getElementById('itemsSumNumber').innerHTML = 
          parseInt(
              document.getElementById('itemsSumNumber').innerHTML.replace(/\D+/g,"")
          ) - parseInt(
              value.price.replace(/\D+/g,"")
          ) + '₽';
      sumCount.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
    });
    controls.appendChild(btnMinus);
    const countItem = document.createElement('span');
    countItem.classList.add('countItem');
    countItem.innerHTML = value.count;
    controls.appendChild(countItem);
    const btnPlus = document.createElement('button');
    btnPlus.setAttribute('id', 'btnPlus');
    btnPlus.innerHTML = '+';
    btnPlus.addEventListener('click', () => {
      const countNum = parseInt(countItem.innerHTML);
      countItem.innerHTML = countNum + 1;
      value.count = countNum + 1;
      document.getElementById('itemsCountNumber').innerHTML = parseInt(document.getElementById('itemsCountNumber').innerHTML) + 1;
      document.getElementById('itemsSumNumber').innerHTML = 
          parseInt(
              document.getElementById('itemsSumNumber').innerHTML.replace(/\D+/g,"")
          ) + parseInt(
              value.price.replace(/\D+/g,"")
          ) + '₽';
      sumCount.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
    });
    controls.appendChild(btnPlus);
    count.appendChild(controls);
    info.appendChild(count);
    item.appendChild(info);
    const sum = document.createElement('div');
    sum.classList.add('sum');
    const sumText = document.createElement('div');
    sumText.classList.add('sumText');
    sumText.innerHTML = 'СТОИМОСТЬ';

    sumCount.setAttribute('id', 'sumCount');
    sumCount.innerHTML = parseInt(value.price.replace(/\D+/g,"")) * value.count + '₽';
    purcahsesSum += parseInt(value.price.replace(/\D+/g,"")) * value.count;
    sum.appendChild(sumText);
    sum.appendChild(sumCount);
    item.appendChild(sum);
    const btnCross = document.createElement('button');
    btnCross.setAttribute('id', 'btnCross');
    btnCross.addEventListener('click', () => {
      bucketContent.splice(index, 1);
      loadBucket();
    });
    item.appendChild(btnCross);
    wrap.appendChild(item);
    countPurchases += value.count;
  });
  document.getElementById('itemsSumNumber').innerHTML = purcahsesSum + '₽';
  document.getElementById('itemsCountNumber').innerHTML = countPurchases;
}
loadPants();
loadHoodie();
loadTees();
loadAcces();