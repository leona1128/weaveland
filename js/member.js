const calcPrice = () => {
    const qtyInputs = document.querySelectorAll(".qty");
    let total = 0
    for (let i = 0; i < qtyInputs.length; i++) {
        const price = +qtyInputs[i].dataset.price //抓到金額
        const amount = +qtyInputs[i].value // 抓到產品數量
        const itemPrice = price * amount // 金額 * 產品數量 = 總額

        const id = +qtyInputs[i].dataset.id // 抓到是第幾個商品 //"+"當它放在一個值之前時，它會將這個值轉換 數字
        const priceMemberEl = document.getElementById(`price-member-${id}`) // price-member-1 , price-member-2
        priceMemberEl.innerText = 'NT.' + itemPrice 
        console.log(itemPrice)

        total = total + itemPrice
    }

    const totalPriceEl = document.getElementById('total-price')
    totalPriceEl.innerText = 'NT.' + total
    console.log(total)
}


window.addEventListener("load", function () {
    let qtyMinusBtns = document.querySelectorAll(".qtyminus");
    let qtyPlusBtns = document.querySelectorAll(".qtyplus");
    let qtyInputs = document.querySelectorAll(".qty");

    for (let i = 0; i < qtyMinusBtns.length; i++) {
        qtyMinusBtns[i].addEventListener("click", function () {
            let qtyInput = this.nextElementSibling;//與按鈕相鄰的下一個元素即為輸入框
            let newValue = parseInt(qtyInput.value) - 1;
            qtyInput.value = newValue < 0 ? 0 : newValue;
            calcPrice()
        });
    }

    for (let i = 0; i < qtyPlusBtns.length; i++) {
        qtyPlusBtns[i].addEventListener("click", function () {
            let qtyInput = this.previousElementSibling;
            qtyInput.value = parseInt(qtyInput.value) + 1;
            calcPrice()
        });
    }

    for (let i = 0; i < qtyInputs.length; i++) {
        qtyInputs[i].addEventListener("change", function (e) {
            calcPrice()
        });
    }
});
