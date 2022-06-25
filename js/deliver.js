const bucketContent = [];
let choosenSize = 'M';

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
