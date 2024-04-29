
window.addEventListener("load", function () {
    let qtyMinusBtns = document.querySelectorAll(".qtyminus");
    let qtyPlusBtns = document.querySelectorAll(".qtyplus");

    for (let i = 0; i < qtyMinusBtns.length; i++) {
        qtyMinusBtns[i].addEventListener("click", function () {
            let qtyInput = this.nextElementSibling;//與按鈕相鄰的下一個元素即為輸入框
            let newValue = parseInt(qtyInput.value) - 1;
            qtyInput.value = newValue < 0 ? 0 : newValue;
        });
    }

    for (let i = 0; i < qtyPlusBtns.length; i++) {
        qtyPlusBtns[i].addEventListener("click", function () {
            let qtyInput = this.previousElementSibling;
            qtyInput.value = parseInt(qtyInput.value) + 1;
        });
    }
});
