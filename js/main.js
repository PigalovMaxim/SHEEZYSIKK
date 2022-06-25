const tees = [
  {
    img: "./imgs/MomEllyTee.png",
    name: "Mom elly tee",
    price: "2 490₽",
    oldPrice: null,
  },
  {
    img: "./imgs/SocialHelpTee.png",
    name: "SOCIAL HELP TEE",
    price: "1 990₽",
    oldPrice: "2 400₽",
  },
  {
    img: "./imgs/SocialConceptTee.png",
    name: "SOCIAL CONCEPT TEE",
    price: "1 990₽",
    oldPrice: "2 400₽",
  },
  {
    img: "./imgs/CapsuleCheapTee.png",
    name: 'CAPSULE "CHEAP" TEE',
    price: "1 720₽",
    oldPrice: null,
  },
];
const hoodies = [
  {
    img: "./imgs/WwCapsuleHoodie.png",
    name: "WW CAPSULE HOODIE",
    price: "4 600₽",
    oldPrice: null,
  },
  {
    img: "./imgs/HoldMyHand.png",
    name: "HOLD MY HAND CREWNECK",
    price: "4 600₽",
    oldPrice: "5 900₽",
  },
  {
    img: "./imgs/CovidLogoHoodie.png",
    name: "SOCIAL CONCEPT TEE",
    price: "5 590₽",
    oldPrice: "6 700₽",
  },
];
const pants = [
  {
    img: "./imgs/CapsuleBlackPants.png",
    name: "CAPSULE BLACK PANTS",
    price: "4 600₽",
    oldPrice: null,
  },
  {
    img: "./imgs/PantsMomElly.png",
    name: "PANTS MOM ELLY",
    price: "6 590₽",
    oldPrice: "8 000₽",
  },
  {
    img: "./imgs/PantsRedBlood.png",
    name: "PANTS RED BLOOD",
    price: "3 590₽",
    oldPrice: "4 400₽",
  },
];
const accessories = [
  {
    img: "./imgs/scarf.png",
    name: "Scarf",
    price: "3 590₽",
    oldPrice: "4 400₽",
  },
  {
    img: "./imgs/Hood.png",
    name: "hood",
    price: "2 890₽",
    oldPrice: "3 500₽",
  },
  {
    img: "./imgs/EarflapMask.png",
    name: "EARFLAP MASK BLACK HOLE",
    price: "3 590₽",
    oldPrice: "4 000₽",
  },
  {
    img: "./imgs/Sleeves.png",
    name: "sleeves",
    price: "3 590₽",
    oldPrice: "1 700₽",
  },
];

const sizesBtns = document.querySelectorAll('.size');
sizesBtns.forEach((value, index) => {
    value.addEventListener('click', () => {
        for(let i = 0; i < sizesBtns.length; i++) {
            sizesBtns[i].classList.remove('active');
            if(i === index) sizesBtns[i].classList.add('active');
        }
    })
});

document.getElementById('hideProductCard').addEventListener('click', () => {
    document.getElementById('wrapperProduct').classList.add('hidden');bucketWindow
});
document.getElementById('continuePurchase').addEventListener('click', () => {
    document.getElementById('bucketWindow').classList.add('hidden');
});
document.getElementById('bucketBtn').addEventListener('click', () => {
    document.getElementById('bucketWindow').classList.remove('hidden');
});

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
    document.getElementById('productImg').setAttribute('src', item.img);
    document.getElementById('productName').innerHTML = item.name;
    document.getElementById('productPrice').innerHTML = item.price;
}

loadProducts();
