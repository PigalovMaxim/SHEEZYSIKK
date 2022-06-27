const momEllyTee = {
  img: "./imgs/index/MomEllyTee.png",
  bigImg: "./imgs/HQItems/mom elly tee.png",
  name: "MOM ELLY TEE",
  price: "2 490₽",
  isLongImg: false,
  isLongImg: false,
  art: Math.round(Math.random() * 8999 + 1000),
};
const momEllyPants = {
  img: "./imgs/index/MomEllyPants.png",
  bigImg: "./imgs/HQItems/mom elly pants.png",
  name: "MOM ELLY PANTS",
  price: "2 490₽",
  isLongImg: true,
  art: Math.round(Math.random() * 8999 + 1000),
};
const capsuleHoodie = {
  img: "./imgs/index/CapsuleHoodie.png",
  bigImg: "./imgs/HQItems/hood ww.png",
  name: "WW CAPSULE HOODIE",
  price: "4 600₽",
  isLongImg: false,
  art: Math.round(Math.random() * 8999 + 1000),
};
const capsuleTee1 = {
  img: "./imgs/index/CapsuleTee1.png",
  bigImg: "./imgs/HQItems/ww tee.png",
  name: "WW CAPSULE 'CHEAP' TEE",
  price: "1 720₽",
  isLongImg: false,
  art: Math.round(Math.random() * 8999 + 1000),
};
const capsuleTee2 = {
  img: "./imgs/index/CapsuleTee2.png",
  bigImg: "./imgs/HQItems/vasya tee.png",
  name: "WW CAPSULE 'VASILY' TEE",
  price: "2 200₽",
  isLongImg: false,
  art: Math.round(Math.random() * 8999 + 1000),
};
const capsulePants = {
  img: "./imgs/index/CapsulePants.png",
  bigImg: "./imgs/HQItems/ww pants.png",
  name: "WW CAPSULE PANTS",
  price: "4 600₽",
  isLongImg: true,
  art: Math.round(Math.random() * 8999 + 1000),
};
const lastTee1 = {
  img: "./imgs/index/section5tee1.png",
  bigImg: "./imgs/HQItems/tee.png",
  name: "SIKKBODY TEE WHITE",
  price: "2 000₽",
  isLongImg: false,
  art: Math.round(Math.random() * 8999 + 1000),
};
const lastTee2 = {
  img: "./imgs/index/section5tee2.png",
  bigImg: "./imgs/HQItems/sex a lot tee.png",
  name: "COSTS A LOT TEE",
  price: "2 190₽",
  isLongImg: false,
  art: Math.round(Math.random() * 8999 + 1000),
};
const collection = [
  {
    img: "./imgs/index/coll1.png",
    bigImg: "./imgs/HQItems/sheezy hood.png",
    name: "COVID LOGO HOODIE",
    price: "5 590₽",
    oldPrice: "6 700₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/index/coll2.png",
    bigImg: "./imgs/HQItems/social concept tee2.png",
    name: "SOCIAL HELP TEE",
    price: "1 190₽",
    oldPrice: "2 400₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/index/coll3.png",
    bigImg: "./imgs/HQItems/social concept tee.png",
    name: "SOCIAL CONCEPT TEE",
    price: "1 190₽",
    oldPrice: "2 400₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/index/coll4.png",
    bigImg: "./imgs/HQItems/social concept pants.png",
    name: "PANTS",
    price: "3 590₽",
    oldPrice: "4 400₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/index/coll5.png",
    bigImg: "./imgs/HQItems/maskblack ww 2.png",
    name: "EARFLAP MASK",
    price: "3 590₽",
    oldPrice: "4 000₽",
    isLongImg: false,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/index/coll6.png",
    bigImg: "./imgs/HQItems/kaporblack ww.png",
    name: "HOOD",
    price: "2 890₽",
    oldPrice: "3 500₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/index/coll7.png",
    bigImg: "./imgs/HQItems/rukava red ww.png",
    name: "SLEEVES",
    price: "1 390₽",
    oldPrice: "1 700₽",
    isLongImg: true,
    art: Math.round(Math.random() * 8999 + 1000),
  },
  {
    img: "./imgs/index/coll8.png",
    bigImg: "./imgs/HQItems/scarfblack ww.png",
    name: "SCARF",
    price: "3 590₽",
    oldPrice: "4 400₽",
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

document
  .getElementById("momEllyTeeProd")
  .addEventListener("click", () => openProduct(momEllyTee));
document
  .getElementById("momEllyPantsProd")
  .addEventListener("click", () => openProduct(momEllyPants));
document
  .getElementById("capsuleHoodieProd")
  .addEventListener("click", () => openProduct(capsuleHoodie));
document
  .getElementById("capsuleTee1Prod")
  .addEventListener("click", () => openProduct(capsuleTee1));
document
  .getElementById("capsuleTee2Prod")
  .addEventListener("click", () => openProduct(capsuleTee2));
document
  .getElementById("capsulePantsProd")
  .addEventListener("click", () => openProduct(capsulePants));
document
  .getElementById("lastTee1")
  .addEventListener("click", () => openProduct(lastTee1));
document
  .getElementById("lastTee2")
  .addEventListener("click", () => openProduct(lastTee2));

document
  .getElementById("aboutUsBtn")
  .addEventListener("click", () =>
    document.getElementById("aboutUsPoint").scrollIntoView()
  );
document.getElementById("logo").addEventListener("click", () => {
  window.scrollTo(0, 0);
  document.getElementById("wrapperProduct").classList.add("hidden");
  document.getElementById("collection").classList.add("hidden");
  document.body.classList.remove("overHide");
});

document.getElementById("lookAll").addEventListener("click", () => {
  document.body.classList.add("overHide");
  document.getElementById("collection").classList.remove("hidden");
  createCollection();
});
document.getElementById("goBack").addEventListener("click", () => {
  document.getElementById("wrapperProduct").classList.add("hidden");
  document.body.classList.remove("overHide");
});
document.getElementById("continuePurchase").addEventListener("click", () => {
  document.getElementById("bucketWindow").classList.add("menuHidden");
});
document.getElementById("bucketBtn").addEventListener("click", () => {
  document.getElementById("bucketWindow").classList.remove("menuHidden");
  drawItems();
});
function openProduct(product) {
  document.getElementById("wrapperProduct").classList.remove("hidden");
  document.body.classList.add("overHide");
  document.getElementById("productName").innerHTML = product.name;
  document.getElementById("productPriceNumber").innerHTML = product.price;
  document.getElementById("productImg").setAttribute("src", product.bigImg);
  document.getElementById("addProduct").remove();
  const btn = document.createElement("button");
  btn.setAttribute("id", "addProduct");
  btn.innerHTML = "Добавить в корзину";
  const wrapper = document.getElementById("controls");
  wrapper.prepend(btn);
  document.getElementById("addProduct").addEventListener("click", () => {
    bucketContent.push({ ...product, count: 1, choosenSize });
    document.getElementById("addProduct").innerHTML = "Товар добавлен";
    document.getElementById("menuBucketItemsCount").innerHTML =
      bucketContent.length;
    setItemsCount();
    if (
      !document.getElementById("wrapperProduct").classList.contains("hidden")
    ) {
      drawItems();
    }
  });
}
function drawItems() {
  const items = document.getElementById("itemList");
  items.innerHTML = "";
  let purcahsesSum = 0;
  bucketContent.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("item");
    const imageBox = document.createElement("div");
    imageBox.classList.add("image");
    const img = document.createElement("img");
    img.setAttribute("src", value.img);
    if (value.isLongImg) img.classList.add("longImg");
    imageBox.appendChild(img);
    item.appendChild(imageBox);
    const itemInfo = document.createElement("div");
    itemInfo.classList.add("itemInfo");
    const name = document.createElement("label");
    name.classList.add("itemName");
    name.innerHTML = value.name;
    itemInfo.appendChild(name);

    const itemControls = document.createElement("div");
    itemControls.classList.add("itemControls");

    const left = document.createElement("div");
    left.classList.add("left");
    const artText = document.createElement("div");
    artText.classList.add("art");
    artText.innerHTML = "Арт:";
    const sizeText = document.createElement("div");
    sizeText.classList.add("size");
    sizeText.innerHTML = "Размер:";
    const countText = document.createElement("div");
    countText.classList.add("count");
    countText.innerHTML = "Кол-во:";

    left.appendChild(artText);
    left.appendChild(sizeText);
    left.appendChild(countText);
    itemControls.appendChild(left);

    const right = document.createElement("div");
    right.classList.add("right");

    const art = document.createElement("label");
    art.classList.add("artNum");
    art.innerHTML = value.art;
    right.appendChild(art);

    const size = document.createElement("label");
    size.classList.add("sizeNum");
    size.innerHTML = value.choosenSize;
    right.appendChild(size);

    const sum = document.createElement("div");
    sum.classList.add("count");

    const sumText = document.createElement("label");
    sumText.innerHTML = "Сумма:";
    sum.appendChild(sumText);

    const sumNumber = document.createElement("span");
    sumNumber.setAttribute("id", "sumNumber");
    sumNumber.innerHTML =
      parseInt(value.price.replace(/\D+/g, "")) * value.count + "₽";
    sum.appendChild(sumNumber);
    purcahsesSum += parseInt(value.price.replace(/\D+/g, "")) * value.count;

    const countNum = document.createElement("div");
    countNum.classList.add("countNum");

    const countNumNumber = document.createElement("div");
    countNumNumber.classList.add("countNumber");
    countNumNumber.innerHTML = value.count;

    const btnPlus = document.createElement("button");
    btnPlus.setAttribute("id", "btnPlus");
    btnPlus.innerHTML = "+";
    btnPlus.addEventListener("click", () => {
      const currNum = parseInt(countNumNumber.innerHTML);
      countNumNumber.innerHTML = currNum + 1;
      value.count = currNum + 1;
      document.getElementById("purchaseSum").innerHTML =
        parseInt(
          document.getElementById("purchaseSum").innerHTML.replace(/\D+/g, "")
        ) +
        parseInt(value.price.replace(/\D+/g, "")) +
        "₽";
      sumNumber.innerHTML =
        parseInt(value.price.replace(/\D+/g, "")) * value.count + "₽";
      setItemsCount();
    });
    countNum.appendChild(btnPlus);

    countNum.appendChild(countNumNumber);

    const btnMinus = document.createElement("button");
    btnMinus.setAttribute("id", "btnMinus");
    btnMinus.innerHTML = "-";
    btnMinus.addEventListener("click", () => {
      const currNum = parseInt(countNumNumber.innerHTML);
      if (currNum === 1) return;
      countNumNumber.innerHTML = currNum - 1;
      value.count = currNum - 1;
      document.getElementById("purchaseSum").innerHTML =
        parseInt(
          document.getElementById("purchaseSum").innerHTML.replace(/\D+/g, "")
        ) -
        parseInt(value.price.replace(/\D+/g, "")) +
        "₽";
      sumNumber.innerHTML =
        parseInt(value.price.replace(/\D+/g, "")) * value.count + "₽";
      setItemsCount();
    });
    countNum.appendChild(btnMinus);

    right.appendChild(countNum);
    itemControls.appendChild(right);
    itemInfo.appendChild(itemControls);
    itemInfo.appendChild(sum);
    item.appendChild(itemInfo);

    const btnCross = document.createElement("button");
    btnCross.setAttribute("id", "btnCross");
    btnCross.addEventListener("click", () => {
      bucketContent.splice(index, 1);
      drawItems();
    });
    item.appendChild(btnCross);
    items.appendChild(item);
  });
  setItemsCount();
  document.getElementById("purchaseSum").innerHTML = purcahsesSum + "₽";
}
function setItemsCount() {
  let count = 0;
  bucketContent.forEach((value) => (count += value.count));
  document.getElementById("menuBucketItemsCount").innerHTML = count;
}
function createCollection() {
  const wrap = document.getElementById("cards");
  wrap.innerHTML = '';
  let rowCount = 0;
  let row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < collection.length; i++) {
    if (rowCount === 3) {
      wrap.appendChild(row);
      row = document.createElement("div");
      row.classList.add("row");
      rowCount = 0;
    }
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", () => openProduct(collection[i]));
    const img = document.createElement("img");
    img.setAttribute("src", collection[i].img);
    card.appendChild(img);
    const name = document.createElement("div");
    name.innerHTML = collection[i].name;
    name.classList.add("name");
    card.appendChild(name);
    const price = document.createElement("div");
    price.innerHTML = collection[i].price;
    price.classList.add("price");
    card.appendChild(price);
    const oldPrice = document.createElement("div");
    oldPrice.innerHTML = collection[i].oldPrice;
    oldPrice.classList.add("oldPrice");
    card.appendChild(oldPrice);
    row.appendChild(card);
    rowCount++;
  }
  const empty = document.createElement("div");
  empty.classList.add("card");
  empty.classList.add("empty");
  row.appendChild(empty);
  wrap.appendChild(row);
}
